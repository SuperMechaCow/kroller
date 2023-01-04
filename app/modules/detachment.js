const { getWahaFaction } = require("./../Connectors/SqliteConnector");
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

  async setDetachmentFaction() {
    let faction = this.detachment.$.catalogueName;
    //Imperium usually have two faction keywords
    if (this.detachment.$.catalogueName.split(" - ").length > 1)
      faction = this.detachment.$.catalogueName.split(" - ")[1];
    //Start building the detachment object
    if (this.faction) {
      this.faction = "Allied Forces";
    } else {
      this.faction = faction;
    }
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
}
module.exports = Detachment;
