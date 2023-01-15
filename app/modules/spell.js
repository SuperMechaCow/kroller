class Spell {
  constructor() {
    this.name = "";
    this.warpcharge = 0;
    this.range = 0;
  }

  buildSpell(spellData) {
    this.name = spellData.$.name;
    //Grab customName
    if (spellData.$.customName) {
      this.customName = spellData.$.customName;
    }
    if (spellData.$.customNotes) {
      this.customNotes = spellData.customNotes[0];
    }
    let spellChara = spellData.characteristics[0].characteristic;
    for (let chara of spellChara) {
      this[chara.$.name.toLowerCase().replace(/\s/g, "")] = chara._;
    }
  }
}
module.exports = Spell;
