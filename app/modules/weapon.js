const cantrips = {
  blast: "Blast",
  plague: "Plague Weapon",
  flamer:
    "Each time an attack is made with this weapon, that attack automatically hits the target",
};
class Weapon {
  constructor(name, number, charaParse) {
    this.name = name;
    this.amount = number;
    this.cantrips = [];
    this.charaParse = charaParse;
  }

  setCustom(weapon) {
    if (weapon.$.customName) {
      this.customName = weapon.$.customName;
    }
    if (weapon.customNotes) {
      this.customNotes = weapon.customNotes[0];
    }
  }

  grabWeaponProfile() {
    for (let chara of this.charaParse) {
      this[chara.$.name.toLowerCase()] = chara._;
      if (chara._) {
        //This trick will turn off adding this weapon to the list
        if (chara._.includes("select one of the profiles below"))
          this.name = "";
        if (chara.$.name.toLowerCase() == "abilities") {
          for (var ct of Object.keys(cantrips)) {
            if (chara._.includes(cantrips[ct])) {
              this.cantrips.push(ct);
            }
          }
        }
      }
    }
  }
}
module.exports = Weapon;
