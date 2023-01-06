const UnitRule = require("./unitrule");
const Weapon = require("./weapon");
class Model {
  constructor(parentUnit) {
    this.name = "";
    this.parentUnit = parentUnit;
    this.faction = "";
    this.costs = {};
    this.keywords = [];
    this.weapons = [];
    this.wargear = [];
    this.statlines = [];
    this.amount = 0;
  }

  setModelData(data) {
    this.bsData = data;
    this.amount = Number(this.bsData.$.number);
  }

  async buildModelFromUnit() {
    await this.setCostum();
    await this.grabCost();
    await this.grabProfile();
    if (!this.amount) {
      await this.mergeWeaponToStats();
      return false;
    }
    await this.grabWeapon();
    return true;
  }
  //TODO at weapongrab check for warlord trait

  /**
   * If the Model has custom names/notes
   */
  setCostum() {
    if (this.bsData.$.customName) this.customName = this.bsData.$.customName;
    if (this.bsData.customNotes) this.customNotes = this.bsData.customNotes;
  }

  /**
   * Get all costs of models and upgrades
   */
  grabCost() {
    if (this.bsData.costs) {
      for (let cost of this.bsData.costs[0].cost) {
        this.costs[cost.$.name.trim().toLowerCase()] = Math.round(cost.$.value);
        if (this.parentUnit.costs[cost.$.name.trim().toLowerCase()])
          this.parentUnit.costs[cost.$.name.trim().toLowerCase()] += Math.round(
            cost.$.value
          );
        else
          this.parentUnit.costs[cost.$.name.trim().toLowerCase()] = Math.round(
            cost.$.value
          );
      }
      this.costs.pts = Math.round(this.costs.pts / this.amount);
    }
  }

  grabProfile() {
    //flag to show its only statline without weapons
    let profileParse = [];
    if (this.amount) {
      if (this.bsData.profiles) {
        profileParse = this.bsData.profiles[0].profile;
      }
    } else if (this.bsData.$.typeName == "Unit") {
      {
        profileParse = this.bsData;
      }
    }
    this.name = this.bsData.$.name;

    //If it's not an array, put it in one so the for loop can work
    if (!Array.isArray(profileParse)) profileParse = [profileParse];

    //Grab the model's statline and unique abilities
    for (profile of profileParse) {
      if (!profile) break;
      if (profile.$.typeName == "Unit") {
        this.name = profile.$.name;
        let charaParse = profile.characteristics[0].characteristic;
        let statline = {};
        for (let chara of charaParse) {
          let statname = chara.$.name;
          if (statname == "Save") statname = "Sv";
          let stattext = chara._;
          stattext = stattext.replace("+", "");
          stattext = stattext.replace('"', "");
          if (stattext == "N/A") stattext = "*";
          statline[statname] = stattext;
        }
        this.statlines.push(statline);
      }
      //This is number three of the three stupid places you can store unit rules
      else if (profile.$.typeName == "Abilities") {
        let charaParse = profile.characteristics[0].characteristic;
        if (!Array.isArray(charaParse)) charaParse = [charaParse];
        for (chara of charaParse) {
          let newRule = new UnitRule();
          newRule.grabAbilitRules(profile, chara);
          this.parentUnit.rules.push(newRule);
        }
      } else {
      }
    }
    return true;
  }

  mergeWeaponToStats() {
    this.parentUnit.models.forEach((model) => {
      if (model.name.includes(this.name)) {
        model.name = this.name;
        model.statlines = this.statlines;
      }
    });
  }

  /**
   * Start collecting weapons
   */
  async grabWeapon() {
    let weaponGrab = [];
    if (this.bsData.selections) {
      weaponGrab = this.bsData.selections[0].selection;
    } else {
      if (this.bsData.profiles) {
        if (this.bsData.profiles[0].profile[0].$.typeName == "Weapon")
          weaponGrab = this.bsData;
      }
    }

    if (!Array.isArray(weaponGrab)) weaponGrab = [weaponGrab];
    for (let weapon of weaponGrab) {
      if (!weapon) break;
      let weaponFound = [];
      if (weapon.selections && weapon.selections[0] != "") {
        for (let posWeap of weapon.selections[0].selection) {
          weaponFound.push(posWeap.profiles[0].profile[0]);
        }
      } else if (weapon.profiles && weapon.profiles != "") {
        weaponFound = weapon.profiles[0].profile;
      }
      // If it was a weapon
      if (!Array.isArray(weaponFound)) weaponFound = [weaponFound];

      for (let weapProf of weaponFound) {
        if (!Object.keys(weapProf).length) continue;
        if (weapProf.$.typeName != "Weapon") continue;
        let charaParse = weapProf.characteristics[0].characteristic;
        let newWeapon = new Weapon(
          weapProf.$.name,
          weapon.$.number,
          charaParse
        );
        await newWeapon.setCustom(weapon);
        await newWeapon.grabWeaponProfile();

        //Add it to the weapons or wargear or unclaimed list
        if (newWeapon.name) {
          if (this.name) {
            this.weapons.push(newWeapon);
          } else if (newWargear.name) {
            this.weapons.push(newWargear);
          } else {
            unclaimedWeapons.push(newWeapon);
          }
        }

        //If it was a wargear/upgrade
        else {
          newWeapon.name = weapon.$.name;
        }
      }
    }
  }
}
module.exports = Model;
