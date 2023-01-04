let phaseList = [
  "Command",
  "Movement",
  "Psychic",
  "Shooting",
  "Charge",
  "Fight",
  "Morale",
];
class UnitRule {
  constructor() {
    this.name;
    this.desc;
    this.subkeys;
    this.targets;
  }
  grabBasicRules(rule) {
    //New blank object for the rules
    this.name = rule.$.name;
    this.desc = rule.description[0];
    this.subkeys = this.setSubKeys(rule.description[0]);
    this.targets = this.setTargets(rule.description[0]);
    this.phases = [];
    //Grab customName
    if (rule.$.customName) {
      this.customName = rule.$.customName;
    }
    if (rule.customNotes) {
      this.customNotes = rule.customNotes[0];
    }
    this.setPhases();
  }

  grabAbilitRules(profile, chara) {
    this.name = profile.$.name;
    this.desc = chara._;
    this.subkeys = this.setSubKeys(chara._);
    this.targets = this.setTargets(chara._);
    this.phases = [];
    //Grab customName
    if (profile.$.customName) {
      this.customName = profile.$.customName;
    }
    if (profile.customNotes) {
      this.customNotes = profile.customNotes[0];
    }
    this.setPhases();
  }

  grabPsykerRules(profile) {
    this.name = "Psyker";
    this.desc = "";
    this.subkeys = [];
    this.targets = [];
    this.phases = ["psychic"];

    this.psyker = {};
    for (var chara of profile) {
      switch (chara.$.name) {
        case "Cast":
          this.cast = chara._;
          break;
        case "Deny":
          this.deny = chara._;
          break;
        case "Powers Known":
          this.desc = chara._;
          break;
        case "Other":
          this.other = chara._;
          break;
        default:
      }
    }
  }

  grabExplodeRules(profile) {
    this.name = "Explodes";
    this.desc =
      "When this model is destroyed, roll a D6. If it beats the Roll or is a 6, everything within Distance takes Mortal Wounds equal to the Damage.";
    this.subkeys = [];
    this.targets = [];
    this.phases = [];
    for (var chara of profile) {
      switch (chara.$.name) {
        case "Dice Roll":
          this.roll = chara._;
          break;
        case "Distance":
          this.distance = chara._;
          break;
        case "Mortal Wounds":
          this.damage = chara._;
          break;
        default:
          break;
      }
    }
  }

  setSubKeys(text) {
    this.subkeys = text.match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g);
  }

  setTargets(text) {
    this.targets = text.match(/([A-Z]+\s?[A-Z]+[^a-z0-9\W])/g);
  }

  /**
   * Look for specific mentions of a phase
   */
  setPhases() {
    for (let phase of phaseList) {
      if (this.desc.includes(phase + " phase")) this.phases.push(phase);
    }
  }
}
module.exports = UnitRule;
