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
      if (!this.amount) return false;
    }
    await this.grabWeapon();
    await this.grabSpells();
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
        for (let chara of charaParse) {
          let newRule = new UnitRule();
          newRule.grabAbilitRules(profile, chara);
          this.parentUnit.rules.push(newRule);
        }
      } else {
      }
    }
    return true;
  }

  /**
   * sometimes Models have a pseudo custom name with there weapons and one profile
   * here we check if models name exists in other models name and then assume it has to
   * be the profile for custom named models
   * if not we assume it is a single model unit and add 1 to the amount to keep it
   */
  mergeWeaponToStats() {
    let count = 0;
    this.parentUnit.models.forEach((model) => {
      if (model.name.includes(this.name)) {
        count += 1;
        model.name = this.name;
        model.statlines = this.statlines;
      }
    });
    if (count == 0) this.amount = 1;
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
      //Weapons can have 2 places where they are hiding, here we check for them
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

  /**
   * Start collecting spells
   */
  grabSpells() {
    let spellGrab = [];
    if (this.bsData.selections) {
      spellGrab = this.bsData.selections[0].selection;
    } else {
      if (this.bsData.profiles) {
        if (this.bsData.profiles[0].profile[0].$.typeName == "Psychic Power")
          spellGrab = this.bsData;
      }
    }

    if (!Array.isArray(spellGrab)) spellGrab = [spellGrab];
    for (spell of spellGrab) {
      if (!spell) break;
      let spellFound = {};
      if (spell.selections && spell.selections[0] != "") {
        spellFound = spell.selections[0].selection[0].profiles[0].profile[0];
      } else if (spell.profiles && spell.profiles != "") {
        spellFound = spell.profiles[0].profile;
      }
      if (!Array.isArray(spellFound)) spellFound = [spellFound];
      for (spellProf of spellFound) {
        if (!Object.keys(spellProf).length) continue;
        if (spellProf.$.typeName != "Psychic Power") continue;
        let newSpell = {
          name: "",
          warpcharge: 0,
          range: 0,
        };
        newSpell.name = spellProf.$.name;
        //Grab customName
        if (spell.$.customName) {
          newSpell.customName = spell.$.customName;
        }
        if (spell.customNotes) {
          newSpell.customNotes = spell.customNotes[0];
        }
        let spellChara = spellProf.characteristics[0].characteristic;
        for (let chara of spellChara) {
          newSpell[chara.$.name.toLowerCase().replace(/\s/g, "")] = chara._;
        }
        if (this.parentUnit.name) {
          //Add it to the spells list for the Unit if it exists
          this.parentUnit.spells.push(newSpell);
        }
      }
    }
  }

  mergeModels() {
    //If it found a model
    if (this.name) {
      if (this.parentUnit.models.length) {
        //Check to see if it matches the previous model
        if (
          matchModel(
            this.parentUnit.models[this.parentUnit.models.length - 1],
            this
          )
        ) {
          if (this.parentUnit.models[this.parentUnit.models.length - 1].amount)
            this.parentUnit.models[this.parentUnit.models.length - 1].amount++;
          else this.parentUnit.models[this.parentUnit.models.length - 1] = 1;
        } else {
          this.parentUnit.models.push(this);
        }
      } else {
        this.parentUnit.models.push(this);
      }
    }
  }
}
module.exports = Model;
