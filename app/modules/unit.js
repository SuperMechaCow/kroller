const { getWahaDatasheet } = require("./../Connectors/SqliteConnector");
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
    await this.grabDatasheet();
    await this.grabUnitRules();
    //TODO generate Keywords
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
    let datasheet;
    // Some units (especially daemons and CSM marines) are in multiple factions
    // Find all possible datasheets
    datasheet = await getWahaDatasheet(this.name, this.wahaFaction);
    // If you couldn't find one, try again with first unit's name (Chapter Master -> )
    if (datasheet) {
      if (unit.profiles) {
        let tempName = unit.profiles[0].profile[0].$.name;
        datasheet = await getWahaDatasheet(tempName, this.wahaFaction);
      }
    }
    if (datasheet) {
      // If you couldn't find one, try again without the 's' at the end ofthe name
      let tempName = unit.$.name.slice(0, -1);
      datasheet = await getWahaDatasheet(tempName, this.wahaFaction);
    }
    // If there was more than one possible datasheet
    if (datasheet) {
      this.waha = datasheet;
    }
    // Datasheet not found
    else {
    }
  }

  /**
   * Start collecting rules
   * This is the most obvious place to put all of the rules for the entire unit,
   * but there are two other places below
   */
  grabUnitRules() {
    if (unit.rules && unit.rules != "") {
      //If it's not a list, put it in one
      if (!Array.isArray(unit.rules[0].rule))
        unit.rules[0].rule = [unit.rules[0].rule];
      //Loop through each rule
      for (rule of unit.rules[0].rule) {
        // If the rule does not have a description then we can't make a tag from it. It's probably BS junk
        if (rule.description) {
          //New blank object for the rules
          let newRule = {
            name: rule.$.name,
            desc: rule.description[0],
            subkeys: rule.description[0].match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g),
            targets: rule.description[0].match(/([A-Z]+\s?[A-Z]+[^a-z0-9\W])/g),
            phases: [],
          };
          //Grab customName
          if (rule.$.customName) {
            newRule.customName = rule.$.customName;
          }
          if (rule.customNotes) {
            newRule.customNotes = rule.customNotes[0];
          }
          //Look for specific mentions of a phase
          for (phase of phaseList) {
            if (newRule.desc.includes(phase + " phase"))
              newRule.phases.push(phase);
          }
          newUnit.rules.push(newRule);
        }
      }
    }
  }
}
module.exports = Unit;
