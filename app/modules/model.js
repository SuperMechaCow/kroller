const jp = require("jsonpath");
const { fuseSearch } = require("./fuzzysearch");
const { helperGrabRules } = require("./pathhelper");
const Weapon = require("./weapon");
const Spell = require("./spell");
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
    await this.setCustom();
    await this.grabCost(parentUnit);
    await this.grabWeapon(parentUnit);
    await this.grabSpells(parentUnit);
    delete this.bsData;
    return true;
  }

  /**
   * If the Model has custom names/notes
   */
  setCustom() {
    if (this.bsData.$.customName) this.customName = this.bsData.$.customName;
    if (this.bsData.customNotes) this.customNotes = this.bsData.customNotes;
  }

  /**
   * Get all costs of models and upgrades
   */
  grabCost(parentUnit) {
    try {
      let costsNode = jp.query(this.bsData, "$..cost")[0];
      for (let cost of costsNode) {
        if (!cost.$.name || !cost.$.value) {
          throw new Error("Invalid cost data, expected a name and a value");
        }
        let costName = cost.$.name.trim().toLowerCase();
        let costValue = Math.round(cost.$.value);
        this.costs[costName] = costValue;
        if (parentUnit.costs[costName]) parentUnit.costs[costName] += costValue;
        else parentUnit.costs[costName] = costValue;
        this.costs.pts = Math.round(this.costs.pts / this.amount);
      }
    } catch (err) {
      console.log(err);
    }
  }

  grabProfile(charaParse) {
    try {
      //grab the name of the Dataset
      this.name = this.bsData.$.name;
      //lets check if the Model name includes WeaponOption
      //there is surely a better way to do this, send help
      let regex = /w\/|W\/|\(.*|with.*|With/g;
      if (regex.test(this.name)) this.name = this.name.split(regex)[0].trim();
      const results = fuseSearch(charaParse, this.name);
      let minSubDistance = Number.MAX_SAFE_INTEGER;
      if (results.length) {
        for (let result of results) {
          if (result.score > minSubDistance) continue;
          this.statlines = result.item.statlines;
          result.item.used = true;
          return true;
        }
      }
      //ohboy what ever this Model is now its super Special
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Start collecting weapons
   */
  async grabWeapon(parentUnit) {
    let weaponNode = helperGrabRules(this.bsData, '@.typeName=="Weapon"');
    //there seems to be rare cases where a unit has models but some idiot decided to mess up BS
    //data, so there weapons are somehow directly unter the unit, looking at you agressor squad
    if (!weaponNode.length)
      weaponNode = helperGrabRules(parentUnit, '@.typeName=="Weapon"');
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
  async grabSpells(parentUnit) {
    let spellGrab = [];
    let psyNodes = helperGrabRules(this.bsData, '@.typeName=="Psychic Power"');
    for (let psy of psyNodes) {
      let newSpell = new Spell();
      await newSpell.buildSpell(psy);
      if (parentUnit.name) {
        //Add it to the spells list for the Unit if it exists
        parentUnit.spells.push(newSpell);
      }
    }
  }
}
module.exports = Model;
