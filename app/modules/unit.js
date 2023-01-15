const jp = require("jsonpath");
const { helperGrabRules } = require("./pathhelper");
const {
  getWahaDatasheet,
  getWahaFaction,
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
    this.waha = await this.grabDatasheet();
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
    // Datasheet not found, maybe it doesnt exist in waha
    // or is something like an imperial agent and we used wrong faction
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
        let oldFaction = this.faction;
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
              let faction = category.$.name.split(":")[1].trim();
              this.faction.push(faction);
              if (!faction.includes("<") && faction != this.fact)
                this.keywords.push(faction.toLowerCase());
              if (!this.waha) {
                //if it wasnt 
                let factQuery = await getWahaFaction(faction);
                if (factQuery && factQuery.id != this.wahaFaction) {
                  this.wahaFaction = factQuery.id;
                  let datasheet = await this.grabDatasheet(
                    this.name,
                    this.wahaFaction
                  );
                  if (datasheet) {
                    this.waha = datasheet;
                  }
                }
              }
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
      for (let ability of abilities) {
        let newRule = new UnitRule();
        newRule.buildWahaRules(ability);
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
    let abNodes = helperGrabRules(this.bsData, '@.typeName=="Abilities"');
    for (let rule of abNodes) {
      let charaParse = rule.characteristics[0].characteristic;
      if (!Array.isArray(charaParse)) charaParse = [charaParse];
      for (let chara of charaParse) {
        let newRule = new UnitRule();
        newRule.grabAbilitRules(rule, chara);
        this.rules.push(newRule);
      }
    }
    let pyNodes = helperGrabRules(this.bsData, '@.typeName=="Psyker"');
    for (let rule of pyNodes) {
      let newRule = new UnitRule();
      newRule.grabPsykerRules(rule.characteristics[0].characteristic);
      this.rules.push(newRule);
    }
    //not realy sure when this ever triggers?
    let exNodes = helperGrabRules(this.bsData, '@.typeName=="Explosion"');
    for (let rule of exNodes) {
      let newRule = new UnitRule();
      newRule.grabExplodeRules(rule.characteristics[0].characteristic);
      this.rules.push(newRule);
    }
    let warlord = helperGrabRules(this.bsData, '@.name=="Warlord"');
    if (warlord.length) {
      let warNodes = helperGrabRules(
        this.bsData,
        '@.typeName=="Warlord Trait"'
      );
      for (let rule of warNodes) {
        let newRule = new UnitRule();
        newRule.grabAbilitRules(
          rule,
          rule.characteristics[0].characteristic[0]
        );
        this.newRule.trait = true;
        this.rules.push(newRule);
      }
      this.warlord = true;
    }
  }

  /**
   * Start collecting models
   */
  async grabModels() {
    //first we try to find everything of type Model
    let selectionData = this.bsData.selections[0].selection;
    if (!Array.isArray(selectionData)) selectionData = [selectionData];
    if (this.bsData.profiles)
      selectionData = selectionData.concat(this.bsData.profiles[0].profile);
    let modelNodes = helperGrabRules(this.bsData, '@.type=="model"');
    // if nothing is in the net then its maybe some kind of freak character?
    if (!modelNodes.length)
      modelNodes = helperGrabRules(this.bsData, '@.type=="unit"');
    let charaParse = this.grabStatLine();
    let unclaimedWeapons = [];
    charaParse = this.checkForDegrading(charaParse);
    for (let modelNode of modelNodes) {
      await this.wrapModelCreation(modelNode, charaParse);
    }
    // there some real freaky units out there that are an addon to something
    // so battlescribe lists them as upgrade for some reason
    for (let chara of charaParse) {
      if (!chara.used) {
        let lastResorts = helperGrabRules(
          this.bsData,
          `@.type=="upgrade" && @.name=="${chara.name}"`
        );
        //the last ditch effort to find the unit
        if (!lastResorts.length)
          lastResorts = helperGrabRules(this.bsData, `@.type=="upgrade"`);
        for (let modelNode of lastResorts) {
          // This "if" prevents weapons from being detected as models
          // Models will not merge, however
          if (modelNode.profiles[0].profile[0].$.typeName == "Unit")
          this.wrapModelCreation(modelNode, [chara]);
        }
      }
    }
  }

  /**
   * holds all functions to create a Model
   * @param {Object} modelNode
   * @param {Array} charaParse
   */
  async wrapModelCreation(modelNode, charaParse) {
    let model = new Model();
    await model.setModelData(modelNode);
    await model.grabProfile(charaParse);
    await model.buildModelFromUnit(this);
    this.models.push(model);
  }

  /**
   * Mostly exists as sperate function to grab Statlines from non Model Data
   * @returns statline
   */
  grabStatLine() {
    let charaNodes = helperGrabRules(this.bsData, '@.typeName=="Unit"');
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

  /**
 * degrading profile show up as there own little unit
 * so most if not all have wound in there name, for that we search
 * and hopefully merg all of them back into one profile
 * @param {Array} modelNodes
 * @returns
 */
  checkForDegrading(modelNodes) {
    let newModeNodes = [];
    for (let model of modelNodes) {
      if (!model.name.includes("wound")) {
        newModeNodes.push(model);
        continue;
      }
      let statline = model.statlines[0];
      //just to replace in the degrading statline the * with a number
      if (statline.W == "*") {
        statline.W = model.name.split("-")[1].substr(0, 1);
      }
      //removing it from the name here should make searching the rules easier
      model.name = model.name.split("(")[0].trim().split("[")[0].trim();
      if (!newModeNodes.length) {
        newModeNodes.push(model);
        continue;
      }
      for (let merge of newModeNodes) {
        if (merge.name == model.name) merge.statlines.push(model.statlines[0]);
        else {
          newModeNodes.push(model);
          break;
        }
      }
    }
    for (let model of newModeNodes) {
      if (model.statlines.length > 1)
        model.statlines = this.sortByWounds(model.statlines);
    }
    return newModeNodes;
  }


  /**
 * to make sure full wounds are up ..
 * @param {*} arr
 * @returns
 */
  sortByWounds(arr) {
    return arr.sort((a, b) => {
      return Number(a.W) < Number(b.W) ? 1 : -1;
    });
  }

  /**
   * Units with weapon options often have seperat Model entries,
   * to have it less bloated merge everything with the same name together and
   * add up there weapons
   */
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
      stratData.description = stratData.description.replaceAll('<a href="/wh40k9ed/', '<a href="https://wahapedia.ru/wh40k9ed/');
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
