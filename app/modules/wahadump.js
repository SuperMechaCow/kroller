const csv = require("csvtojson");
const { parse } = require("csv-parse");
const fs = require("fs");
const https = require("https");
const { stringify } = require("querystring");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data/database.db");

var wahaData = {};

const dataFolder = __dirname + "/../data/";
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
    console.log(urlPrefix + sheet + urlSuffix);
    https.get(urlPrefix + sheet + urlSuffix, (res) => {
      const path = `../data/${sheet}${urlSuffix}`;
      const filePath = fs.createWriteStream(path);
      res.pipe(filePath);
      filePath.on("finish", () => {
        filePath.close();
        console.log(`Download Completed: ${sheet}${urlSuffix}`);
        resolve();
      });
    });
  });
}

async function grabAll() {
  for (var sheet of urls) {
    await grabSheet(sheet);
    var csvFilePath = `../data/${sheet}.csv`;
    wahaData[sheet] = await csv({
      delimiter: "|",
    }).fromFile(csvFilePath);
  }

  // wahaData = JSON.stringify(wahaData).replaceAll('/wh40k9ed', 'http://wahapedia.ru/wh40k9ed')
  wahaData = JSON.stringify(wahaData);

  //REPLACE ALL russian booleans with true/false here
  //ADD A "type" TO EACH ITEM FOR SEARCHING LATER (unit/model/ability/etc.)
  //REMOVE "field#" columns
  fs.writeFile(`../data/wahaData.json`, wahaData, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Wrote wahaData.json");
    }
  });
}

async function readFromExisting() {
  fs.readdir(__dirname + "/../data/", async (err, files) => {
    if (err) console.log(err);
    for (var file of files) {
      if (file.split(".")[1] == "csv") {
        var csvFilePath = __dirname + `/../data/${file}`;
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
      __dirname + `/../data/wahaData.json`,
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
      const path = `../data/scraped/${faction.name
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

fs.readFile(dataFolder, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let readData = JSON.parse(data);
    scraper(readData);
  }
});

async function createTable(name, columns) {
  let insert = `CREATE TABLE IF NOT EXISTS ${name} (`;
  columns.forEach((key) => {
    insert += `${key}, `;
  });
  insert = insert.substring(0, insert.length - 2) + ");";
  await db.run(insert);
}

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

async function insertChunk(name, parameters, placeholders) {
  let insert = `INSERT INTO ${name} VALUES `;
  placeholders.forEach((set) => {
    insert += `( ${set.flat()} ),`;
  });
  insert = insert.substring(0, insert.length - 1) + ";";
  db.run(insert, parameters.flat());
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
      getCSV(table.name, dataFolder + table.path, table.columns.length);
    });
  }
});
