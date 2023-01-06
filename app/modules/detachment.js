const fs = require("fs");
const {
  getWahaFaction,
  getWahaSubFaction,
} = require("./../Connectors/SqliteConnector");
const Unit = require("./unit");
class Detachment {
  constructor(data) {
    this.detachment = data;
    this.name = this.detachment.$.name;
    this.faction = "";
    this.subfaction = "";
    this.variant = "";
    this.factionIcon = "";
    this.units = [];
    this.rules = [];
  }

  async buildDetachment() {
    await this.setDetachmentFaction();
    await this.setCostum();
    await this.grabRules();
    await this.grabUnits();
  }

  async setDetachmentFaction() {
    let faction = this.detachment.$.catalogueName;
    //Imperium usually have two faction keywords
    if (this.detachment.$.catalogueName.split(" - ").length > 1)
      faction = this.detachment.$.catalogueName.split(" - ")[1];
    //Start building the detachment object
    this.faction = faction;
    //Some factions have multiple names
    if (faction == "Adeptus Astartes") this.faction = "Space Marines";
    if (faction == "Craftworlds") {
      this.faction = "Aeldari";
    }
    // Try to grab waha faction
    let wahaFaction = await getWahaFaction(this.faction);
    if (wahaFaction) {
      this.factionLink = wahaFaction.link;
      this.wahaFaction = wahaFaction.id;
    }
  }

  /**
   * If the detachment has custom names/notes
   */
  setCostum() {
    if (this.detachment.$.customName) {
      this.customName = this.detachment.$.customName;
    }
    if (this.detachment.customNotes) {
      this.customNotes = this.detachment.customNotes[0];
    }
  }

  /**
   * Grab army rules
   */
  grabRules() {
    // Grab army rules (BattleScribe doesn't keep all of them in a rational place, so things like Armor of Contempt are missing)
    if (this.detachment.rules) {
      let rule;
      for (rule of this.detachment.rules[0].rule) {
        this.rules.push({
          name: rule.$.name,
          desc: rule.description[0],
        });
      }
    }
  }

  async grabUnits() {
    //If it's not a list, put it in one so it can be looped through
    let unitData = this.detachment.selections[0].selection;
    if (!Array.isArray(unitData)) unitData = [unitData];
    let bsUnit;
    //Needs to Loop first to make sure Subfaction was already found
    for (bsUnit of unitData) {
      if (bsUnit.$.type != "upgrade") continue;
      await this.grabLastMetaData(bsUnit);
    }
    //Loop through every unit in the list
    for (bsUnit of unitData) {
      if (bsUnit.$.type == "upgrade") continue;
      if (bsUnit.$.type == "unit" || bsUnit.$.type == "model") {
        let unit = new Unit(bsUnit, this.wahaFaction, this.wahaSubFaction);
        await unit.buildUnit();
        this.units.push(unit);
        continue;
      }
    }
  }

  async grabLastMetaData(unit) {
    if (!unit.selections) return;
    if (unit.selections[0].selection)
      // Searching for upgrade names is not consistent. Search by selection name
      // Will always have at least one selection
      for (var select of unit.selections[0].selection) {
        // Look through all of the selections
        await this.findSubFaction(select.$.name);
      }
    if (unit.$.name.split(" - ")[0] == "Army of Renown")
      // Check for army variants
      this.variant = unit.$.name.split(" - ")[1];
    // Get icon link by faction
    if (this.faction)
      if (
        fs.existsSync(
          `${__dirname}/public/img/factions/${this.faction
            .replaceAll(" ", "")
            .replaceAll("'", "_")
            .toLowerCase()}.svg`
        )
      )
        this.factionIcon = `img/factions/${this.faction
          .replaceAll(" ", "")
          .replaceAll("'", "_")
          .toLowerCase()}.svg`;
    // Then try to overwrite with subfaction
    if (this.subfaction)
      if (
        fs.existsSync(
          `${__dirname}/public/img/factions/${this.subfaction
            .replaceAll(" ", "")
            .replaceAll("'", "_")
            .toLowerCase()}.svg`
        )
      )
        this.factionIcon = `img/factions/${this.subfaction
          .replaceAll(" ", "")
          .replaceAll("'", "_")
          .toLowerCase()}.svg`;
  }

  async findSubFaction(possibleName) {
    let subFaction = "";
    subFaction = await getWahaSubFaction(possibleName);
    if (subFaction) {
      // If a subfaction name exists that matches this selection name
      this.subfaction = subFaction.name;
      this.wahaSubFaction = subFaction.id;
      return;
      // Then you've found the subfaction
    }
    subFaction = await getWahaSubFaction(possibleName.split(": ")[1]);
    if (subFaction) {
      // If a subfaction name exists that matches this selection name
      this.subfaction = subFaction.name;
      this.wahaSubFaction = subFaction.id;
      return;
      // Then you've found the subfaction
    }
    subFaction = await getWahaSubFaction(possibleName.split(": ")[0]);
    if (subFaction) {
      this.subfaction = subFaction.name;
      this.wahaSubFaction = subFaction.id;
      return;
    }
    if (!this.subfaction) {
      // if nothing worked, lets hope for the best here
      this.subfaction = possibleName.split(": ")[0];
    }
  }
}
module.exports = Detachment;
