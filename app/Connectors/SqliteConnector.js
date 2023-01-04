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

exports.getWahaFaction = getWahaFaction;
