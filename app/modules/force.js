const Detachment = require("./detachment");
const { getWahaSecondaries } = require("./../Connectors/SqliteConnector");
class Force {
  constructor(roster) {
    this.roster = roster;
    this.name = this.roster.$.name;
    this.faction = "";
    this.detachments = [];
    this.costs = {};
  }

  async buildForce() {
    await this.initForce();
    await this.grabDetachment();
    await this.createDetachments();
    await this.grabForceMetaData();
  }

  initForce() {
    this.setForceCustom();
    this.setForceCost();
  }

  /**
   * Checks if CustomeName or Notes exist and adds them as Attr
   */
  setForceCustom() {
    if (this.roster.$.customName) {
      this.customName = this.roster.$.customName;
    }
    if (this.roster.customNotes) {
      this.customNotes = this.roster.customNotes[0];
    }
  }

  /**
   * Grab all of the army costs
   */
  setForceCost() {
    let cost;
    for (cost of this.roster.costs[0].cost) {
      this.costs[cost.$.name.replace(/\s/g, "")] = parseInt(cost.$.value);
    }
  }

  /**
   * Parses all Detachments in one Array
   */
  grabDetachment() {
    //Grab all of the detachment data
    this.detachmentParse = this.roster.forces[0].force;
    //If it's not an array, put it in one so the for loop can work
    if (!Array.isArray(this.detachmentParse))
      this.detachmentParse = [this.detachmentParse];
  }

  async createDetachments() {
    //Loop through every detachment in the list
    for (let detach of this.detachmentParse) {
      let detachment = new Detachment(detach);
      await detachment.buildDetachment();
      this.detachments.push(detachment);
    }
    // newDetachment.units = newDetachment.units;
  }

  /**
   * sets Faction and GameTyp, if Gametype is found it grabs possible Secondaries
   */
  async grabForceMetaData() {
    let unit;
    let unitData = this.detachmentParse[0].selections[0].selection;
    //Loops all detechman to check if only one Faction exists
    this.detachments.forEach((deta) => {
      if (!this.faction) this.faction = deta.faction;
      if (this.faction != deta.faction) {
        this.faction = "Allied Forces";
      }
    });
    // Try to determine game type
    for (unit of unitData) {
      if (unit.$.type != "upgrade") continue;
      if (unit.$.name != "Gametype") continue;
      let gameName = unit.selections[0].selection[0].$.name;
      // gameName = gameName.replace('Chapter Approved', 'Grand Tournament');
      let gameCheck = /(\d. )?(.*\: )?(.*$)/.exec(gameName);
      if (gameCheck) {
        this.gametype = gameCheck[3];
        this.secondaries = await getWahaSecondaries(
          this.gametype,
          this.faction
        );
      } else {
        this.gametype = gameName;
      }
    }
  }
}

module.exports = Force;
