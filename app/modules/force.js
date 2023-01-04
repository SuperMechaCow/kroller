const Detachment = require("./detachment");
class Force {
  constructor(roster) {
    this.roster = roster;
    this.name = this.roster.$.name;
    this.faction = "";
    this.detachments = [];
    this.costs = {};
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

  createDetachments() {
    //Loop through every detachment in the list
    this.detachmentParse.forEach((data) => {
      let detachment = new Detachment(data);
      detachment.setDetachmentFaction();
      detachment.setCostum();
      detachment.grabRules();
    });

    // newDetachment.units = newDetachment.units;
    // this.detachments.push(newDetachment);
  }
}

module.exports = Force;
