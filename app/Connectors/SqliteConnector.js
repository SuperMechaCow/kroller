const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data/database.db");

function getWahaFaction(factionname) {
  return new Promise((resolve) => {
    db.get(
      `SELECT link , id  FROM factions WHERE name = (?)`,
      [factionname],
      (err, result) => {
        resolve(result);
      }
    );
  });
}

function getWahaSubFaction(subFaction) {
  return new Promise((resolve) => {
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
    db.get(
      `SELECT * FROM datasheets WHERE name = "${unitName}" AND faction_id = "${factionId}"`,
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

function getWahaStratagems(datasheetId) {
  return new Promise((resolve) => {
    db.all(
      `SELECT * FROM datasheet_to_stratagem WHERE ds.datasheet_id = "${datasheetId} AND ("`,
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
exports.getWahaUnitKeywords = getWahaUnitKeywords;
exports.getWahaStratagems = getWahaStratagems;
