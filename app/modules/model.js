const jp = require("jsonpath");
const { helperGrabRules } = require("./pathhelper");
const Weapon = require("./weapon");
class Model {
  constructor() {
    this.name = "";
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

  async buildModelFromUnit(parentUnit) {
    await this.setCostum();
    await this.grabCost(parentUnit);
    await this.grabWeapon();
    await this.grabSpells(parentUnit);
    return true;
  }
  //TODO at weapongrab check for warlord trait

  /**
   * to check the top in selection is actualy a model
   */
  checkMainModel() {
    if (!this.bsData.profiles) return false;
    for (let profile of this.bsData.profiles[0].profile) {
      if (profile.$.typeName != "Unit") continue;
      //its more an asumption that his model would have the same name as the unit
      if (profile.$.name == this.bsData.$.name) {
        return false;
      }
    }
    return true;
  }

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
  grabCost(parentUnit) {
    let costsNode = jp.query(this.bsData, "$..cost")[0];
    for (let cost of costsNode) {
      this.costs[cost.$.name.trim().toLowerCase()] = Math.round(cost.$.value);
      if (parentUnit.costs[cost.$.name.trim().toLowerCase()])
        parentUnit.costs[cost.$.name.trim().toLowerCase()] += Math.round(
          cost.$.value
        );
      else
        parentUnit.costs[cost.$.name.trim().toLowerCase()] = Math.round(
          cost.$.value
        );

      this.costs.pts = Math.round(this.costs.pts / this.amount);
    }
  }

  grabProfile(charaNodes) {
    //grab the name of the Dataset
    this.name = this.bsData.$.name;

    //lets check if the Model name includes WeaponOption
    //there is surely a better way to do this, send help
    if (this.name.includes("w/")) this.name = this.name.split("w/")[0].trim();
    if (this.name.includes("(")) this.name = this.name.split("(")[0].trim();
    //search statline with model name
    for (let chara of charaNodes) {
      //first check for degrading profiles
      if (chara.name.includes("[")) {
        if (chara.name.split("[")[0].trim() == this.name) {
          let statline = chara.statlines[0];
          //just to replace in the degrading statline the * with a number
          if (statline.W == "*") {
            statline.W = chara.name.split("-")[1].substr(0, 1);
          }
          this.statlines.push(statline);
        }
      }
      if (chara.name == this.name) this.statlines = chara.statlines;
    }
    return true;
  }

  /**
   * Start collecting weapons
   */
  async grabWeapon() {
    let weaponNode = helperGrabRules(this.bsData, 'typeName=="Weapon"');
    let amount;
    //that part is only here to grab the correct amount
    for (let node of weaponNode) {
      let name = node.$.name;
      //for weapons that shoot and poke
      if (name.includes("(")) name = name.split("(")[0].trim();
      let nodeUp = jp.query(
        this.bsData,
        `$..[?(@.type=="upgrade" && @.name=="${name}")]`
      )[0];
      if (nodeUp) amount = nodeUp.number;
    }

    for (let weapon of weaponNode) {
      let charaParse = weapon.characteristics[0].characteristic;
      let newWeapon = new Weapon(weapon.$.name, amount, charaParse);
      await newWeapon.setCustom(weapon);
      await newWeapon.grabWeaponProfile();
      await newWeapon.setKeywords();

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

  /**
   * Start collecting spells
   */
  grabSpells(parentUnit) {
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
    for (let spell of spellGrab) {
      if (!spell) break;
      let spellFound = {};
      if (spell.selections && spell.selections[0] != "") {
        spellFound = spell.selections[0].selection[0].profiles[0].profile[0];
      } else if (spell.profiles && spell.profiles != "") {
        spellFound = spell.profiles[0].profile;
      }
      if (!Array.isArray(spellFound)) spellFound = [spellFound];
      for (let spellProf of spellFound) {
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
        if (parentUnit.name) {
          //Add it to the spells list for the Unit if it exists
          parentUnit.spells.push(newSpell);
        }
      }
    }
  }
}
module.exports = Model;
