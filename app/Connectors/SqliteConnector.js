const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data/database.db");

function getWahaFaction(factionname) {
  return new Promise((resolve) => {
    //only exists for Tau congratz
    if (factionname) factionname = factionname.replace("'", "’");
    db.get(
      `SELECT link , id  FROM factions WHERE name = "${factionname}" AND is_subfaction = "false"`,
      (err, result) => {
        resolve(result);
      }
    );
  });
}

function getWahaSubFaction(subFaction) {
  return new Promise((resolve) => {
    //since there a couple of ways to end up here
    //this seems the best place to replace this cause tau <.<
    if (subFaction) subFaction = subFaction.replace("'", "’");
    db.get(
      `SELECT name, id FROM factions WHERE name LIKE "%${subFaction}%" AND is_subfaction = "true"`,
      (err, result) => {
        resolve(result);
      }
    );
  });
}

function getWahaSecondaries(gameName, faction) {
  return new Promise((resolve) => {
    db.all(
      `SELECT name, category FROM secondaries WHERE game LIKE "%${gameName}%" AND (faction_name = "" OR faction_name = "${faction}")`,
      (err, result) => {
        resolve(result);
      }
    );
  });
}

function getWahaDatasheet(unitName, factionId = "") {
  return new Promise((resolve) => {
    if (unitName) unitName = unitName.replace("'", "’");
    db.get(
      `SELECT * FROM datasheets WHERE lower(name) = "${unitName.toLowerCase()}" AND faction_id = "${factionId}"`,
      (err, result) => {
        resolve(result);
      }
    );
  });
}

function getWahaDsheetModels(datasheetId) {
  return new Promise((resolve) => {
    db.all(
      `SELECT * FROM datasheets_models WHERE datasheet_id = "${datasheetId}"`,
      (err, result) => {
        resolve(result);
      }
    );
  });
}

function getWahaUnitKeywords(datasheetId) {
  return new Promise((resolve) => {
    db.all(
      `SELECT keyword, is_faction_keyword FROM datasheets_keywords WHERE datasheet_id = "${datasheetId}"`,
      (err, result) => {
        resolve(result);
      }
    );
  });
}

function getWahaDsheetAbilities(datasheetId) {
  return new Promise((resolve) => {
    db.all(
      `SELECT * FROM datasheet_to_abilities WHERE datasheet_id = "${datasheetId}" AND is_other_wargear = "false"`,
      (err, result) => {
        resolve(result);
      }
    );
  });
}

function getWahaStratagems(datasheetId, mainId, subId) {
  return new Promise((resolve) => {
    db.all(
      `SELECT * 
      FROM datasheet_to_stratagem 
      WHERE datasheet_id = "${datasheetId}" AND (subfaction_id = "${subId}" OR subfaction_id = "${mainId}" OR subfaction_id = "")`,
      (err, result) => {
        resolve(result);
      }
    );
  });
}

function getWahaDsheetWeapons(datasheetId) {
  return new Promise((resolve) => {
    db.all(
      `SELECT * FROM datasheet_to_weapons WHERE datasheet_id = "${datasheetId}"`,
      (err, result) => {
        resolve(result);
      }
    );
  });
}

function getWahaStratPhase(stratId) {
  return new Promise((resolve) => {
    db.all(
      `SELECT phase FROM stratagemPhases  WHERE stratagem_id = "${stratId}"`,
      (err, result) => {
        resolve(result);
      }
    );
  });
}
exports.getWahaFaction = getWahaFaction;
exports.getWahaSubFaction = getWahaSubFaction;
exports.getWahaSecondaries = getWahaSecondaries;
exports.getWahaDatasheet = getWahaDatasheet;
exports.getWahaDsheetModels = getWahaDsheetModels;
exports.getWahaUnitKeywords = getWahaUnitKeywords;
exports.getWahaDsheetAbilities = getWahaDsheetAbilities;
exports.getWahaStratagems = getWahaStratagems;
exports.getWahaDsheetWeapons = getWahaDsheetWeapons;
exports.getWahaStratPhase = getWahaStratPhase;
