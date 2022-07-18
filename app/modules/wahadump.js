const csv = require('csvtojson')
const fs = require('fs');
const https = require('https');

var wahaData = {}

const urlPrefix = 'https://wahapedia.ru/wh40k9ed/';
const urlSuffix = '.csv';
const urls = [
	'Abilities',
	'Datasheets_abilities',
	'Datasheets_damage',
	'Datasheets_keywords',
	'Datasheets_models',
	'Datasheets_options',
	'Datasheets_stratagems',
	'Datasheets_wargear',
	'Datasheets',
	'Factions',
	'PsychicPowers',
	'Source',
	'StratagemPhases',
	'Stratagems',
	'Wargear_list',
	'Wargear',
	'Warlord_traits'
];

//https://wahapedia.ru/wh40k9ed/Last_update.csv

async function grabSheet(sheet) {
	return new Promise((resolve, reject) => {
		console.log(urlPrefix + sheet + urlSuffix);
		https.get(urlPrefix + sheet + urlSuffix, (res) => {

			const path = `../data/${sheet}${urlSuffix}`;
			const filePath = fs.createWriteStream(path);
			res.pipe(filePath);
			filePath.on('finish', () => {
				filePath.close();
				console.log(`Download Completed: ${sheet}${urlSuffix}`);
				resolve()
			})
		});
	});
}

async function grabAll() {
	for (var sheet of urls) {
		await grabSheet(sheet);
		var csvFilePath = `../data/${sheet}.csv`;
		wahaData[sheet] = await csv({
			delimiter: '|'
		}).fromFile(csvFilePath);
	}

	// wahaData = JSON.stringify(wahaData).replaceAll('/wh40k9ed', 'http://wahapedia.ru/wh40k9ed')
	wahaData = JSON.stringify(wahaData)

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
	fs.readdir(__dirname + '/../data/', async (err, files) => {
		if (err) console.log(err)
		for (var file of files) {
			if (file.split('.')[1] == 'csv') {
				var csvFilePath = __dirname + `/data/${file}`;
				// Async / await usage
				wahaData[file.split('.')[0]] = await csv({
					delimiter: '|'
				}).fromFile(csvFilePath);
			}
		}
		// wahaData = JSON.stringify(wahaData).replaceAll('/wh40k9ed', 'http://wahapedia.ru/wh40k9ed')
		//TODO:
		//REPLACE ALL russian booleans with true/false here
		//ADD A "type" TO EACH ITEM FOR SEARCHING LATER (unit/model/ability/etc.)
		//REMOVE "field#" columns
		fs.writeFile(__dirname + `/data/wahaData.json`, wahaData, (err) => {
			if (err) {
				console.log(err);
			}
		});
	});
}

exports.grabAll = grabAll;
exports.readFromExisting = readFromExisting;

async function grabPage(faction) {
	return new Promise((resolve, reject) => {
		console.log(`Getting ${faction.link}`);
		https.get(faction.link + '/', (res) => {
			const path = `../data/scraped/${faction.name.replaceAll(' ', '-').toLowerCase()}.html`;
			const filePath = fs.createWriteStream(path);
			res.pipe(filePath);
			filePath.on('finish', () => {
				filePath.close();
				console.log(`Download Completed: ${faction.name}`);
				resolve()
			})
		});
	});
}

async function scraper(readData) {
	for (var faction of readData.Factions) {
		await grabPage(faction);
	}
}

fs.readFile(__dirname + '/../data/wahaData.json', 'utf8', (err, data) => {
	if (err) {
		console.log(err);
	} else {
		let readData = JSON.parse(data);
		scraper(readData)
	}
});
