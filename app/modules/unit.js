const jp = require("jsonpath");
const { helperGrabRules } = require("./pathhelper");
const {
  getWahaDatasheet,
  getWahaUnitKeywords,
  getWahaStratagems,
  getWahaStratPhase,
  getWahaDsheetAbilities,
} = require("./../Connectors/SqliteConnector");
const UnitRule = require("./unitrule");
const Model = require("./model");
class Unit {
  constructor(data, faction, factionId, subfaction, subfactionId) {
    this.bsData = data;
    this.name = this.bsData.$.name;
    this.costs = {};
    this.slot = "";
    this.fact = faction;
    this.subFaction = subfaction;
    this.wahaFaction = factionId;
    this.wahaSubFaction = subfactionId;
    this.faction = [];
    this.keywords = [];
    this.models = [];
    this.rules = [];
    this.spells = [];
    this.stratagems = [];
    this.marker = "";
  }

  async buildUnit() {
    await this.setCostum();
    await this.setCost();
    // this.waha = await this.grabDatasheet();
    await this.grabKeywords();
    await this.grabUnitRules();
    await this.grabModels();
    await this.mergeModels();
    await this.grabStratagems();
    await this.cleanUpRules();
  }

  /**
   * If the Unit has custom names/notes
   */
  setCostum() {
    if (this.bsData.$.customName) this.customName = this.bsData.$.customName;
    if (this.bsData.customNotes) this.customNotes = this.bsData.customNotes[0];
  }

  setCost() {
    if (this.bsData.costs) {
      for (var cost of this.bsData.costs[0].cost) {
        this.costs[cost.$.name.trim().toLowerCase()] = Math.round(cost.$.value);
      }
    }
  }

  /**
   * Find the datasheet in the wahaData
   */
  async grabDatasheet() {
    // Some units (especially daemons and CSM marines) are in multiple factions
    // Find all possible datasheets
    let datasheet = await getWahaDatasheet(this.name, this.wahaFaction);
    // If you couldn't find one, try again with first unit's name (Chapter Master -> )
    if (datasheet) return datasheet;
    if (this.bsData.profiles) {
      let tempName = this.bsData.profiles[0].profile[0].$.name;
      datasheet = await getWahaDatasheet(tempName, this.wahaFaction);
    }
    if (datasheet) return datasheet;
    // If you couldn't find one, try again without the 's' at the end ofthe name
    let tempName = this.bsData.$.name.slice(0, -1);
    datasheet = await getWahaDatasheet(tempName, this.wahaFaction);
    // If there was more than one possible datasheet
    if (datasheet) return datasheet;
    // Datasheet not found ??
    else {
    }
  }

  /**
   * Start collecting keywords
   */
  async grabKeywords() {
    //Try to pull from waha first
    if (this.waha) {
      let unitKeys = await getWahaUnitKeywords(this.waha.id);
      for (var key of unitKeys) {
        if (key.is_faction_keyword == "true") {
          this.faction.push(key.keyword);
          if (!key.keyword.includes("<") && key.keyword != this.fact)
            this.keywords.push(key.keyword.toLowerCase());
        } else this.keywords.push(key.keyword.toLowerCase());
      }
      this.slot = this.waha.role;
    }
    //Otherwise, pull from battlescribe
    else {
      if (this.bsData.categories) {
        if (!Array.isArray(this.bsData.categories[0].category))
          this.bsData.categories[0].category = [
            this.bsData.categories[0].category,
          ];
        for (let category of this.bsData.categories[0].category) {
          if (category.$.primary == "true") {
            this.slot = category.$.name;
          } else {
            //BS factions format: "Faction: <faction name>".
            //Try to Split by ": ", and if the first word is "Faction"
            if (category.$.name.split(": ")[0] == "Faction") {
              //Dump the "Faction" and keep the "<faction name>"
              this.faction = category.$.name.split(":")[1].trim();
            } else {
              //Otherwise, dump the keyword straight to the list
              this.keywords.push(category.$.name.toLowerCase());
            }
          }
        }
      }
    }
  }

  /**
   * Start collecting rules
   * This is the most obvious place to put all of the rules for the entire unit,
   * but there are two other places below
   */
  async grabUnitRules() {
    //first try get Abilities from Waha
    if (this.waha) {
      let abilities = await getWahaDsheetAbilities(this.waha.id);
      for (let abilitie of abilities) {
        let newRule = new UnitRule();
        newRule.buildWahaRules(abilitie);
        this.rules.push(newRule);
      }
    }
    let nodes = jp.paths(this.bsData, "$.rules..name");
    for (let node of nodes) {
      let rule = jp.query(
        this.bsData,
        jp.stringify(node.slice(0, node.length - 2))
      )[0];
      // If the rule does not have a description then we can't make a tag from it. It's probably BS junk
      if (rule.description) {
        let newRule = new UnitRule();
        newRule.grabBasicRules(rule);
        this.rules.push(newRule);
      }
    }
    //The Path searches the whole json tree for every type, that should catch all Abilities
    let abNodes = helperGrabRules(this.bsData, 'typeName=="Abilities"');
    for (let rule of abNodes) {
      let charaParse = rule.characteristics[0].characteristic;
      if (!Array.isArray(charaParse)) charaParse = [charaParse];
      for (let chara of charaParse) {
        let newRule = new UnitRule();
        newRule.grabAbilitRules(rule, chara);
        this.rules.push(newRule);
      }
    }
    let pyNodes = helperGrabRules(this.bsData, 'typeName=="Psyker"');
    for (let rule of pyNodes) {
      let newRule = new UnitRule();
      newRule.grabPsykerRules(rule.characteristics[0].characteristic);
      this.rules.push(newRule);
    }
    //not realy sure when this ever triggers?
    let exNodes = helperGrabRules(this.bsData, 'typeName=="Explosion"');
    for (let rule of exNodes) {
      let newRule = new UnitRule();
      newRule.grabExplodeRules(rule.characteristics[0].characteristic);
      this.rules.push(newRule);
    }
  }

  /**
   * Start collecting models
   */
  async grabModels() {
    //The way this is handled is so whacky, leading to either
    //Sometimes it loads as many weapons as there are models
    //and sometimes is loads many models with one weapon
    let selectionData = this.bsData.selections[0].selection;
    if (!Array.isArray(selectionData)) selectionData = [selectionData];
    if (this.bsData.profiles)
      selectionData = selectionData.concat(this.bsData.profiles[0].profile);
    let modelNodes = helperGrabRules(this.bsData, 'type=="model"');
    let charaParse = this.grabStatLine();
    //I know this next line seems weird, but single-model units'
    //models and weapons are properties of the same object, so there is
    //no model name for weapons in this case
    //We'll throw all weapons without owners into a pile until it's
    //done looping through all the profiles of the unit, then add them
    //to every model found for single-model units
    let unclaimedWeapons = [];
    for (let modelNode of modelNodes) {
      let model = new Model();
      await model.setModelData(modelNode);
      await model.grabProfile(charaParse);
      await model.buildModelFromUnit(this);
      this.models.push(model);
    }
  }

  /**
   * Mostly exists as sperate function to grab Statlines from non Model Data
   * @returns statline
   */
  grabStatLine() {
    let charaNodes = helperGrabRules(this.bsData, 'typeName=="Unit"');
    let charaParse = [];
    for (let charaNode of charaNodes) {
      let chara = {};
      let statlines = [];
      let statline = {};
      for (let chara of charaNode.characteristics[0].characteristic) {
        let statname = chara.$.name;
        if (statname == "Save") statname = "Sv";
        let stattext = chara._;
        stattext = stattext.replace("+", "");
        stattext = stattext.replace('"', "");
        if (stattext == "N/A") stattext = "*";
        statline[statname] = stattext;
      }
      statlines.push(statline);
      chara = {
        statlines: statlines,
        name: charaNode.$.name,
      };
      charaParse.push(chara);
    }

    return charaParse;
  }

  //TODO rework so it works on unit base
  mergeModels() {
    //If it found a model
    let newModelsList = [];
    for (let model of this.models) {
      if (model.sorted) continue;
      let modelNodes = jp.query(this.models, `$..[?(@.name=="${model.name}")]`);
      for (let modelIndex in modelNodes) {
        if (modelIndex == 0) continue; //the first should be the one in the model var
        if (!modelNodes[modelIndex].bsData) continue; //its possible that we battlescribe data so lets skip it
        let double = modelNodes[modelIndex];
        for (let weapon of double.weapons) {
          let weaponcheck;
          model.weapons.forEach((keepWeapon) => {
            if (keepWeapon.name == weapon.name) {
              keepWeapon.amount =
                Number(keepWeapon.amount) + Number(weapon.amount);
              weaponcheck = true;
            }
          });
          if (!weaponcheck) {
            model.weapons.push(weapon);
          }
        }
        model.amount += double.amount;
        double.sorted = true;
      }
      newModelsList.push(model);
    }
    this.models = newModelsList;
  }

  async grabStratagems() {
    if (!this.waha) return;
    // Find all strat ID's on the datasheet
    let stratIDfind = await getWahaStratagems(
      this.waha.id,
      this.wahaFaction,
      this.wahaSubFaction
    );
    for (let stratData of stratIDfind) {
      let strat = stratData;
      stratData.keys = [];
      stratData.activate = [];
      stratData.descText = stratData.description.replaceAll("<[^>]*>", "");
      //Find all phases of stratagems
      let stratPhasefind = await getWahaStratPhase(stratData.stratagem_id);
      for (let stratPhase of stratPhasefind) {
        stratData.activate.push(stratPhase.phase);
      }
      // Search for all keywords in the waha description
      // Find a group of words inside a span if those words are also in a span
      let span = strat.description.replace(/<span [^>]+>/g, "ス");
      span = span.replace(/<\/span>/g, "ミ");
      span = span.matchAll(/スス.*?ミミ/g);
      for (let sp of span) {
        sp[0] = sp[0].replaceAll("ス", "");
        sp[0] = sp[0].replaceAll("ミ", "");
        sp[0] = sp[0].toLowerCase();
        if (!stratData.keys.includes(sp[0])) stratData.keys.push(sp[0]);
      }
      for (let key of stratData.description.matchAll(
        /<span [^>]+>([^<]+)<\/span>/g
      )) {
        if (!stratData.keys.includes(key[1]))
          stratData.keys.push(key[1].toLowerCase());
      }
      for (let key of stratData.description.matchAll(
        /<a [^>]+>([^<]+)<\/a>/g
      )) {
        if (!stratData.keys.includes(key[1]))
          stratData.keys.push(key[1].toLowerCase());
      }
      let typeData = stratData.type.split(" – ");
      if (
        stratData.subfaction_id &&
        stratData.subfaction_id == this.wahaSubFaction
      )
        stratData.subfaction = this.subFaction;
      else stratData.subfaction = this.fact;
      if (typeData.length > 1) {
        stratData.type = typeData[1].replace(" Stratagem", "");
      }
      this.stratagems.push(stratData);
    }
  }

  /**
   * Waha has a nicer Layout for the rules but now we have all rules 2times
   * but Waha has not all abilities for example ObSec
   */
  cleanUpRules() {
    let newRule = [];
    for (let rule of this.rules) {
      let filter = newRule.filter(
        (el) => el.name.toLowerCase() == rule.name.toLowerCase()
      );
      if (filter.length == 0) newRule.push(rule);
    }
    this.rules = newRule;
  }
}
module.exports = Unit;
