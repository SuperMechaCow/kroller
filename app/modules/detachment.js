const fs = require("fs");
const { helperGrabRules, levenshteinDistance } = require("./pathhelper");

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
    this.subfaction = "None/Custom";
    this.variant = "";
    this.factionIcon = "";
    this.units = [];
    this.rules = [];
  }

  async buildDetachment() {
    await this.setDetachmentFaction();
    await this.setCustom();
    await this.grabRules();
    await this.grabUnits();
    await this.filterStratagems();
  }

  async setDetachmentFaction() {
    let factionName = this.detachment.$.catalogueName;
    this.minSubDistance = Number.MAX_SAFE_INTEGER;
    //Imperium usually have two faction keywords
    if (this.detachment.$.catalogueName.split(" - ").length > 1)
      factionName = this.detachment.$.catalogueName.split(" - ")[1];
    //Start building the detachment object
    //Some factions have multiple names
    switch (factionName) {
      case "Adeptus Astartes":
        this.faction = "Space Marines";
        this.subfaction = this.detachment.$.catalogueName.split(" - ")[2] || "";
        break;
      case "Craftworlds":
        this.faction = "Aeldari";
        break;
      case "Daemons":
        this.faction = "Chaos Daemons";
        break;
      default:
        this.faction = factionName;
    }
    // Try to grab waha faction
    const wahaFaction = await getWahaFaction(this.faction);
    if (wahaFaction) {
      this.factionLink = wahaFaction.link;
      this.wahaFaction = wahaFaction.id;
    }
    //thanks to the spacemarine, since we need for stratagems the subfaction
    //and spacemarine only hide it in there name, here seems a good place to grab it the wahaid
    if (this.subfaction) {
      await this.findSubFaction(this.subfaction);
    }
  }

  /**
   * If the detachment has custom names/notes
   */
  setCustom() {
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
      if (!this.detachment.rules[0].rule) return;
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
    let unitCreationPromises = unitData.map(async (bsUnit) => {
      let unitTest = helperGrabRules(bsUnit, '@.typeName=="Unit"');
      if (unitTest.length) {
        let unit = new Unit(
          bsUnit,
          this.faction,
          this.wahaFaction,
          this.subfaction,
          this.wahaSubFaction
        );
        await unit.buildUnit();
        return unit;
      }
    });
    let newUnitList = await Promise.all(unitCreationPromises);
    for (let newUnit of newUnitList) {
      if (!newUnit) continue;
      this.units.push(newUnit);
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
          `${__dirname}/../public/img/factions/${this.faction
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
          `${__dirname}/../public/img/factions/${this.subfaction
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
    subFaction = await getWahaSubFaction(possibleName, this.wahaFaction)[0];
    if (subFaction) {
      // If a subfaction name exists that matches this selection name
      this.subfaction = subFaction.name;
      this.wahaSubFaction = subFaction.id;
      return;
      // Then you've found the subfaction
    }
    //if no name was found we grab all possible Names of Subfactions
    //then we check what name fits the closest
    let closestSubFaction;
    if (possibleName.includes(":")) possibleName = possibleName.split(":")[1];
    let subFactions = await getWahaSubFaction("", this.wahaFaction);
    for (let i = 0; i < subFactions.length; i++) {
      let distance = levenshteinDistance(
        subFactions[i].name.replace("’", "'"),
        possibleName
      );
      if (distance < this.minSubDistance) {
        this.minSubDistance = distance;
        closestSubFaction = subFactions[i];
      }
    }
    if (this.minSubDistance < 5 && closestSubFaction) {
      this.subfaction = closestSubFaction.name;
      this.subfactionLink = closestSubFaction.link;
      this.wahaSubFaction = closestSubFaction.id;
      return;
    }
  }

  /**
   * try to filter Stratagems that are possible to use cause weapon or units are missing
   */
  filterStratagems() {
    for (let unit of this.units) {
      let newStrats = [];
      // console.log(unit);
      for (let stratagem of unit.stratagems) {
        if (stratagem.description.toLowerCase().includes("weapon")) {
          if (this.checkWeaponStratagems(stratagem, unit.models)) {
            newStrats.push(stratagem);
            continue;
          }
        } else {
          newStrats.push(stratagem);
        }
      }
      unit.filterSratagems = newStrats;
    }
  }

  checkWeaponStratagems(stratagem, models) {
    for (let model of models) {
      for (let weapon of model.weapons) {
        //first check if Keywords are in the desc text
        for (let word of weapon.keyWords) {
          if (stratagem.description.toLowerCase().includes(word.toLowerCase()))
            return true;
          for (let key of stratagem.keys) {
            if (key == word) return true;
          }
        }
      }
    }
    return false;
  }
}
module.exports = Detachment;
