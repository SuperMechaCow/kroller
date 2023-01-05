const {
  getWahaDatasheet,
  getWahaUnitKeywords,
} = require("./../Connectors/SqliteConnector");
const UnitRule = require("./unitrule");
class Unit {
  constructor(data, faction) {
    this.bsData = data;
    this.name = this.bsData.$.name;
    this.costs = {};
    this.slot = "";
    this.wahaFaction = faction;
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
    if (unit.profiles) {
      let tempName = unit.profiles[0].profile[0].$.name;
      datasheet = await getWahaDatasheet(tempName, this.wahaFaction);
    }
    if (datasheet) return datasheet;
    // If you couldn't find one, try again without the 's' at the end ofthe name
    let tempName = unit.$.name.slice(0, -1);
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
        if (key.is_faction_keyword == "true") this.faction.push(key.keyword);
        else this.keywords.push(key.keyword.toLowerCase());
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
  grabUnitRules() {
    if (this.bsData.rules && unit.rules != "") {
      //If it's not a list, put it in one
      if (!Array.isArray(this.bsData.rules[0].rule))
        this.bsData.rules[0].rule = [this.bsData.rules[0].rule];
      //Loop through each rule
      for (let rule of this.bsData.rules[0].rule) {
        // If the rule does not have a description then we can't make a tag from it. It's probably BS junk
        if (rule.description) {
          let newRule = new UnitRule();
          newRule.grabBasicRules(rule);
          this.rules.push(newRule);
        }
      }
    }
    //This is number two of the three stupid places you can store unit rules
    if (unit.profiles && unit.profiles[0] != "") {
      let profileParse = unit.profiles[0].profile;
      if (!Array.isArray(profileParse)) profileParse = [profileParse];
      for (let profile of profileParse) {
        if (profile.$.typeName == "Abilities") {
          let charaParse = profile.characteristics[0].characteristic;
          if (!Array.isArray(charaParse)) charaParse = [charaParse];
          for (let chara of charaParse) {
            let newRule = new UnitRule();
            newRule.grabAbilitRules(profile, chara);
            this.rules.push(newRule);
          }
        } else if (profile.$.typeName == "Psyker") {
          let newRule = new UnitRule();
          newRule.grabPsykerRules(profile.characteristics[0].characteristi);
          this.rules.push(newRule);
        } else if (profile.$.typeName == "Explosion") {
          let newRule = new UnitRule();
          newRule.grabExplodeRules(profile.characteristics[0].characteristic);
          newUnit.rules.push(newRule);
        }
      }
    }
  }
}
module.exports = Unit;
