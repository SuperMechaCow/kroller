const csv = require("csvtojson");
const { parse } = require("csv-parse");
const fs = require("fs");
const https = require("https");
const sqlite3 = require("sqlite3").verbose();
const dataFolder = __dirname + "/../data/";
const db = new sqlite3.Database(`${dataFolder}database.db`);

var wahaData = {};

const urlPrefix = "https://wahapedia.ru/wh40k9ed/";
const urlSuffix = ".csv";
const urls = [
  "Abilities",
  "Datasheets_abilities",
  "Datasheets_damage",
  "Datasheets_keywords",
  "Datasheets_models",
  "Datasheets_options",
  "Datasheets_stratagems",
  "Datasheets_wargear",
  "Datasheets",
  "Factions",
  "Last_update",
  "PsychicPowers",
  "Secondaries",
  "Source",
  "StratagemPhases",
  "Stratagems",
  "Wargear_list",
  "Wargear",
  "Warlord_traits",
];

//https://wahapedia.ru/wh40k9ed/Last_update.csv

async function grabSheet(sheet) {
  return new Promise((resolve, reject) => {
    console.log(urlPrefix + sheet);
    https.get(urlPrefix + sheet, (res) => {
      const path = `${dataFolder}${sheet}`;
      const filePath = fs.createWriteStream(path);
      res.pipe(filePath);
      filePath.on("finish", () => {
        filePath.close();
        console.log(`Download Completed: ${sheet}`);
        resolve();
      });
    });
  });
}

async function grabAll() {
  for (var sheet of urls) {
    await grabSheet(sheet);
    var csvFilePath = `${dataFolder}${sheet}.csv`;
    wahaData[sheet] = await csv({
      delimiter: "|",
    }).fromFile(csvFilePath);
  }

  // wahaData = JSON.stringify(wahaData).replaceAll('/wh40k9ed', 'http://wahapedia.ru/wh40k9ed')
  wahaData = JSON.stringify(wahaData);

  //REPLACE ALL russian booleans with true/false here
  //ADD A "type" TO EACH ITEM FOR SEARCHING LATER (unit/model/ability/etc.)
  //REMOVE "field#" columns
  fs.writeFile(`${dataFolder}wahaData.json`, wahaData, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Wrote wahaData.json");
    }
  });
}

async function readFromExisting() {
  fs.readdir(dataFolder, async (err, files) => {
    if (err) console.log(err);
    for (var file of files) {
      if (file.split(".")[1] == "csv") {
        var csvFilePath = `${dataFolder}${file}`;
        // Async / await usage
        wahaData[file.split(".")[0]] = await csv({
          delimiter: "|",
        }).fromFile(csvFilePath);
      }
    }
    // wahaData = JSON.stringify(wahaData).replaceAll('/wh40k9ed', 'http://wahapedia.ru/wh40k9ed')
    //TODO:
    //REPLACE ALL russian booleans with true/false here
    //ADD A "type" TO EACH ITEM FOR SEARCHING LATER (unit/model/ability/etc.)
    //REMOVE "field#" columns
    fs.writeFile(
      `${dataFolder}wahaData.json`,
      JSON.stringify(wahaData),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });
}

exports.grabAll = grabAll;
exports.readFromExisting = readFromExisting;

async function grabPage(faction) {
  return new Promise((resolve, reject) => {
    console.log(`Getting ${faction.link}`);
    https.get(faction.link + "/", (res) => {
      const path = `${dataFolder}scraped/${faction.name
        .replaceAll(" ", "-")
        .toLowerCase()}.html`;
      const filePath = fs.createWriteStream(path);
      res.pipe(filePath);
      filePath.on("finish", () => {
        filePath.close();
        console.log(`Download Completed: ${faction.name}`);
        resolve();
      });
    });
  });
}

async function scraper(readData) {
  for (var faction of readData.Factions) {
    await grabPage(faction);
  }
}

// fs.readFile(`${dataFolder}wahaData.json`, "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     let readData = JSON.parse(data);
//     scraper(readData);
//   }
// });

/**
 * @param {string} name of the Table
 * @param {Array} columns Array of Strings, String holds Column Name and Type
 */
async function createTable(name, columns) {
  let insert = `CREATE TABLE IF NOT EXISTS ${name} (`;
  columns.forEach((key) => {
    insert += `${key}, `;
  });
  insert = insert.substring(0, insert.length - 2) + ");";
  await db.run(insert);
}

/**
 * Creates a Readstream, Builds Array for SQLInsert, Checks if SQlite Insert Limit is reached and Cuts Data into Chunks
 * @param {string} name Name of the Table
 * @param {string} file Path for CSV File
 * @param {int} columns for the Table, used for InsertChunks
 */
async function getCSV(name, file, columns) {
  let limit = 30000;
  let parameters = [];
  let placeholders = [];
  fs.createReadStream(file)
    .pipe(parse({ delimiter: "|", from_line: 2, relax_quotes: true }))
    .on("data", (row) => {
      row = row.slice(0, -1);
      let row_ph = [];
      parameters.push(row);
      row.forEach((value) => {
        row_ph.push(" ?");
        return value;
      });
      placeholders.push(row_ph);
    })
    .on("end", () => {
      if (parameters.flat().length > limit) {
        let cut_off = Math.ceil(limit / columns);
        let index = 0;
        let chunk = Math.ceil(parameters.length / cut_off);
        for (let i = 0; i < chunk; i++) {
          insertChunk(
            name,
            parameters.slice(index, index + cut_off),
            placeholders.slice(index, index + cut_off)
          );
          index += cut_off;
        }
      } else {
        insertChunk(name, parameters, placeholders);
      }
    });
}

/**
 * Holds the SqlLite insert, to work around Input Limits
 * @param {String} name Name of the Table
 * @param {Array} parameters Array of Arrays needs to be flattend before insert
 * @param {Array} placeholders Array of Strings, Placeholder Questionmarks
 */
async function insertChunk(name, parameters, placeholders) {
  let insert = `INSERT INTO ${name} VALUES `;
  placeholders.forEach((set) => {
    insert += `( ${set.flat()} ),`;
  });
  insert = insert.substring(0, insert.length - 1) + ";";
  db.run(insert, parameters.flat());
}

/**
 * Mainly exist for the await
 * @param {Object} table Object extracted from the db_ini
 */
async function collectWahaData(table) {
  await grabSheet(table.path);
  getCSV(table.name, dataFolder + table.path, table.columns.length);
}

fs.readFile(dataFolder + "db_init.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let context = JSON.parse(data);
    Object.keys(context).forEach((key) => {
      let table = context[key];
      createTable(table.name, table.columns);
      if (!table.is_csv) {
        return;
      }
      collectWahaData(table);
    });
    db.run(
      `CREATE VIEW datasheet_to_stratagem AS SELECT ds.datasheet_id as datasheet_id , sg.id as stratagem_id , sg.description, sg.type as type, sp.phase as phase , sg.subfaction_id as subfaction_id  FROM datasheets_stratagems as ds LEFT JOIN stratagems as sg ON ds.stratagem_id = sg.id LEFT JOIN stratagemPhases as sp ON ds.stratagem_id = sp.stratagem_id`
    );
  }
});
