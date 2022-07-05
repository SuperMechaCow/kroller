/*
ありがとうございました
Thanks
http://myminiaturemischief.blogspot.com/2017/07/warhammer-40k-8th-edition-rending-pony.html
https://www.battlescribe.net/

*/

/*
██ ███    ███ ██████   ██████  ██████  ████████
██ ████  ████ ██   ██ ██    ██ ██   ██    ██
██ ██ ████ ██ ██████  ██    ██ ██████     ██
██ ██  ██  ██ ██      ██    ██ ██   ██    ██
██ ██      ██ ██       ██████  ██   ██    ██
*/

// const parser = require('xml2json'); //Convert ros files (as xml) to json
const xml2js = require('xml2js');
const fs = require('fs'); //for reading file systems
const https = require('https');
const multer = require('multer'); //
const express = require('express');
const path = require('path');
const unzip = require('adm-zip');
const url = require('url');
const qrcode = require('qrcode');
const crypto = require('crypto');
const Fuse = require('fuse.js');
const request = require('request');

/*
██       ██████   ██████   ██████  ███████ ██████
██      ██    ██ ██       ██       ██      ██   ██
██      ██    ██ ██   ███ ██   ███ █████   ██████
██      ██    ██ ██    ██ ██    ██ ██      ██   ██
███████  ██████   ██████   ██████  ███████ ██   ██
*/

const winston = require('winston');

const logger = winston.createLogger({
	level: 'debug',
	// defaultMeta: { service: 'user-service' },
	transports: [
		new winston.transports.File({
			filename: 'error.log',
			level: 'error',
			format: winston.format.json()
		}),
		new winston.transports.File({
			filename: 'combined.log',
			format: winston.format.json()
		}),
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.colorize({
					all: true
				}),
				winston.format.simple()
			)
		})
	]
});

/*
 █████  ██████  ██████      ███████ ███████ ████████ ██    ██ ██████
██   ██ ██   ██ ██   ██     ██      ██         ██    ██    ██ ██   ██
███████ ██████  ██████      ███████ █████      ██    ██    ██ ██████
██   ██ ██      ██               ██ ██         ██    ██    ██ ██
██   ██ ██      ██          ███████ ███████    ██     ██████  ██
*/

var gameList = {}

var wahaData = {}

fs.readFile(__dirname + '/data/wahaData.json', 'utf8', (err, data) => {
	wahaData = JSON.parse(data);
});

var URL = 'http://kroller.supermechacow.com/'
var HOST = '192.168.1.103';
var PORT = 4040;

/*
███████ ██   ██ ██████  ██████  ███████ ███████ ███████     ███████ ███████ ████████ ██    ██ ██████
██       ██ ██  ██   ██ ██   ██ ██      ██      ██          ██      ██         ██    ██    ██ ██   ██
█████     ███   ██████  ██████  █████   ███████ ███████     ███████ █████      ██    ██    ██ ██████
██       ██ ██  ██      ██   ██ ██           ██      ██          ██ ██         ██    ██    ██ ██
███████ ██   ██ ██      ██   ██ ███████ ███████ ███████     ███████ ███████    ██     ██████  ██
*/

var app = express()

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const upload = multer({
	dest: 'uploads/'
})

app.get('/', (req, res) => {
	let games = 0;
	if (!req.query.gameid || !gameList[req.query.gameid]) {
		req.query.gameid = crypto.randomBytes(4).toString("hex");
		createGame(req.query.gameid, req);
		games++;
		res.redirect(url.format({
			pathname: "/",
			query: {
				gameid: req.query.gameid
			}
		}));
	} else {
		res.render('index', gameList[req.query.gameid]);
	}
	fs.readFile(__dirname + '/logger.log', (err, data) => {
		if (err) {
			logger.error(err);
		} else {
			let tempLogger = JSON.parse(data);
			tempLogger.games += games;
			fs.writeFile(__dirname + '/logger.log', JSON.stringify(tempLogger), (err) => {});
		}
	});
});

// app.get('/abilmap', (req, res) => {
//
// 	if (!req.query.gameid || !gameList[req.query.gameid]) {
// 		req.query.gameid = crypto.randomBytes(4).toString("hex");
// 		createGame(req.query.gameid, req);
// 		res.redirect(url.format({
// 			pathname: "/",
// 			query: {
// 				gameid: req.query.gameid
// 			}
// 		}));
// 	} else {
//
// 		res.render('abilmap', gameList[req.query.gameid])
// 	}
// });

app.post('/feedback', upload.fields([]), function(req, res) {
	let newFeedback = {
		ip: req.connection.remoteAddress,
		gameid: req.body.gameid,
		feedback: req.body.feedback
	}
	logger.info(newFeedback);

	fs.readFile(__dirname + '/feedback.log', (err, data) => {
		if (err) {
			logger.error(err);
		} else {
			let tempFeedback = JSON.parse(data);
			tempFeedback.feedback.push(newFeedback)
			fs.writeFile(__dirname + '/feedback.log', JSON.stringify(tempFeedback), (err) => {});
		}
	})

	res.redirect(url.format({
		pathname: "/",
		query: {
			gameid: req.body.gameid
		}
	}));
});

app.get('/api/search', function(req, res) {
	if (req.query.string) {
		let result = fuzzysearch(req.query.string, wahaData, 5);
		res.json(result);
	} else {
		res.send(JSON.stringify({
			error: "You must include a 'string' query parameter with the value of your search."
		}));
	}
});


app.post('/upload', upload.fields([{
	name: 'atkr_file',
	maxCount: 1
}, {
	name: 'dfdr_file',
	maxCount: 1
}]), (req, res) => {
	let games = 0;
	let uploaded = 0;

	let forceBSData = forceFromBS(req.files);

	if (!req.body.gameid || !gameList[req.body.gameid]) {
		req.body.gameid = crypto.randomBytes(4).toString("hex");
		createGame(req.body.gameid, req);
		games++;
		gameList[req.body.gameid].forceData = forceBSData;
	}

	// If there was an attacker list
	if (forceBSData.forces[0]) {
		uploaded++;
		if (forceBSData.forces[0][1]) gameList[req.body.gameid].outputBox += forceBSData.forces[0][1]
		else if (forceBSData.forces[0].length)
			gameList[req.body.gameid].forceData.forces[0] = forceBSData.forces[0];
	}
	if (forceBSData.forces[1]) {
		uploaded++;
		if (forceBSData.forces[1][1]) gameList[req.body.gameid].outputBox += forceBSData.forces[1][1]
		else if (forceBSData.forces[1].length)
			gameList[req.body.gameid].forceData.forces[1] = forceBSData.forces[1];
	}

	fs.readFile(__dirname + '/logger.log', (err, data) => {
		if (err) {
			logger.error(err);
		} else {
			let tempLogger = JSON.parse(data);
			tempLogger.games += games;
			tempLogger.uploaded += uploaded;
			fs.writeFile(__dirname + '/logger.log', JSON.stringify(tempLogger), (err) => {});
		}
	});

	res.redirect(url.format({
		pathname: "/",
		query: {
			gameid: req.body.gameid
		}
	}));
});


app.listen(PORT, () => {
	logger.info(`Listening on ${HOST}:${PORT}`);
})

/*
██████  ██ ███████  ██████  ██████  ██████  ██████      ███████ ███████ ████████ ██    ██ ██████
██   ██ ██ ██      ██      ██    ██ ██   ██ ██   ██     ██      ██         ██    ██    ██ ██   ██
██   ██ ██ ███████ ██      ██    ██ ██████  ██   ██     ███████ █████      ██    ██    ██ ██████
██   ██ ██      ██ ██      ██    ██ ██   ██ ██   ██          ██ ██         ██    ██    ██ ██
██████  ██ ███████  ██████  ██████  ██   ██ ██████      ███████ ███████    ██     ██████  ██
*/

const Discord = require('discord.js');
// Require the necessary discord.js classes
// const { token } = require('./config.json');
const {
	Client,
	Intents
} = require('discord.js');

// Create a new client instance
const disclient = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

disclient.on('ready', () => {
	logger.info(`Logged in as ${disclient.user.tag}!`);
});

disclient.on('messageCreate', message => {
	if (message.content.startsWith('/kroller')) {
		message.reply('uwu?');
	}

	function getRoster(newFileName, url) {
		return new Promise((resolve, reject) => {
			https.get(url, (res) => {
				const writeStream = fs.createWriteStream(__dirname + `/uploads/${newFileName}`);
				res.pipe(writeStream);
				writeStream.on("finish", () => {
					writeStream.close();

					resolve()
				});
				writeStream.on("error", (err) => {
					logger.error(err);
				})
			});
		})
	}

	async function resolveRoster() {
		let files = {}
		if (message.attachments.size) {
			//There's got to be a better way to match uploads to roster files
			for (var force of message.attachments.entries()) {
				if (force[1].name.split('.').reverse()[0] == 'rosz') {
					let newFileName = crypto.randomBytes(8).toString("hex")
					await getRoster(newFileName, force[1].url)
					if (!files.atkr_file) {
						files.atkr_file = [{
							filename: newFileName
						}]
					} else if (!files.dfdr_file) {
						files.dfdr_file = [{
							filename: newFileName
						}]
					} else {
						break;
					}
				}
			}

			let forceData = await forceFromBS(files);
			gameid = crypto.randomBytes(4).toString("hex");

			if (forceData[0].length) {
				let gameData = await createGame(gameid);
				gameList[gameid].forceData = forceData;
				logger.debug(forceData);
				gameList[gameid].forceData[0] = forceData[0];

				let descString = 'Empty Game'
				if (forceData[0][0]) {
					descString = forceData[0][0].name;
				}
				if (forceData.dfdr_file[0]) {
					descString += ' vs ' + forceData.dfdr_file[0].name;
				}
				const attachment = new Discord.MessageAttachment(__dirname + '/public/shares/' + gameid + '.png');
				const embed = new Discord.MessageEmbed()
					.setTitle('40kroller Game')
					.setColor('RED')
					.setDescription(descString)
					.setURL(gameData.url)
					// .setThumbnail('attachment://' + gameid + '.png')
					.setImage('attachment://' + gameid + '.png')
					.setTimestamp()
				message.channel.send({
					embeds: [embed],
					files: [attachment]
				});
				// message.reply(gameData.url);
			}
		}
	}

	resolveRoster();

});

const discordtoken = require('./discordtoken');
disclient.login(discordtoken.TOKEN);

/*
██    ██ ████████ ██ ██          ███████ ██    ██ ███    ██  ██████ ████████ ██  ██████  ███    ██ ███████
██    ██    ██    ██ ██          ██      ██    ██ ████   ██ ██         ██    ██ ██    ██ ████   ██ ██
██    ██    ██    ██ ██          █████   ██    ██ ██ ██  ██ ██         ██    ██ ██    ██ ██ ██  ██ ███████
██    ██    ██    ██ ██          ██      ██    ██ ██  ██ ██ ██         ██    ██ ██    ██ ██  ██ ██      ██
 ██████     ██    ██ ███████     ██       ██████  ██   ████  ██████    ██    ██  ██████  ██   ████ ███████
*/

function fuzzysearch(searchString, dataset, numResults) {
	let newData = []
	// Convert dataset object to array
	for (var category of Object.keys(dataset)) {
		newData = newData.concat(dataset[category]);
	}
	const fuse = new Fuse(newData, {
		// isCaseSensitive: false,
		includeScore: true,
		shouldSort: true,
		includeMatches: true, //Maybe useful
		//threshold: 0.3, //This one is useful!
		// findAllMatches: false,
		// minMatchCharLength: 1,
		// location: 0,
		// distance: 100,
		// useExtendedSearch: false,
		// ignoreLocation: false,
		// ignoreFieldNorm: false,
		// fieldNormWeight: 1,
		keys: [{
			name: `name`,
			weight: 1
		}]
	})

	let allResult = fuse.search(searchString);
	let result = [];
	for (var i = 0; i < numResults && i < allResult.length; i++) {
		result.push(allResult[i])
	}
	return result;
}

function forceFromBS(files) {

	let forceData = {
		forces: []
	};
	try {
		for (forcefile in Object.entries(files)) {
			// First index is name (0), second is filelist (1)
			// the fileslist is another list of files (we have only 1)
			// If only a deffender file was uploaded, make the attacker blank and increase index
			if (Object.entries(files)[forcefile][0] == 'dfdr_file' && !forceData.forces.length) {
				forceData.forces.push([]);
			}
			// Grab the actual file from the force
			let forceName = Object.entries(files)[forcefile][0] //Is this line of code valid?
			let filedata = Object.entries(files)[forcefile][1][0];
			// reading archives
			var zip = new unzip(`uploads/${filedata.filename}`);
			var zipEntries = zip.getEntries(); // an array of ZipEntry records
			// Loop through each file in the zip
			zipEntries.forEach(function(zipEntry) {
				// If you find a roster file (the first one. I hope there aren't more)
				if (zipEntry.entryName.split('.')[1] == 'ros') {
					// Try to convert from xml to json
					xml2js.parseString(zipEntry.getData().toString("utf8"), (err, result) => {
						if (err) {
							throw err;
						}
						forceData.forces.push(parseBS(result));
						//Returns parsed force (0), error object (1), and original data (2)
						//If there is an error object
						if (forceData.forces[forcefile][1]) {
							forceData.forces[forcefile][1].message = 'Oopsies poopsie! There was an error! Could not create a roster from that roster file. The most common cause of this is uploading a roster file made on a mobile app. This is a problem I am working on.<br><br>' + forceData[forceName][1].message
						}
						//Immediately delete the file after parsing
						fs.unlink(`uploads/${filedata.filename}`, (err) => {
							if (err) {
								throw err;
							}
						});
					});
				}
			});
		}
	} catch (error) {
		logError(error);
		logger.error(error);
		forceData.forces[forcefile][1].message += 'Error. Could not unzip/read/parse roster file. Please consult your Tech Priest. '
	}

	return forceData;
}

function logError(error) {
	fs.readFile(__dirname + '/logger.log', (err, data) => {
		if (err) {
			logger.error(err);
		} else {
			let tempLogger = JSON.parse(data);
			tempLogger.crashes.push({
				text: error
			})
			fs.writeFile(__dirname + '/logger.log', JSON.stringify(tempLogger), (err) => {});
		}
	});
}

function createGame(sessionID, req) {
	return new Promise((resolve, reject) => {
		gameList[sessionID] = {
			gameid: sessionID,
			outputBox: '',
			forceData: {
				forces: []
			}
		}
		let resString = '';
		if (req) {
			resString = req.protocol + '://' + req.get('host') + req.originalUrl;
		} else {
			resString = URL + '?gameid=' + sessionID;
		}
		qrcode.toFile('public/shares/' + sessionID + '.png', resString, {
			color: {
				dark: '#000000', // Blue dots
				light: '#ffcc99' // Transparent background
			}
		}, function(err) {
			if (err) {
				throw err
				reject()
			} else {
				logger.info('Started a new game: ' + sessionID);
				resolve({
					url: resString
				})
			}
		});
	})
}

function matchModel(obj1, obj2) {
	//Loop through each identifier in the first object
	for (ide in obj1) {
		//Amounts will obviously change during this loop
		//Otherwise, compare this key with the matching key from object 2
		if (JSON.stringify(obj1[ide]) != JSON.stringify(obj2[ide]) && ide != 'amount') {
			//If they're not equal, we can quit and return false, but before we do
			//Let's check to see if the value is an array
			//Sometimes Battlescribe puts the same weapons into a list in a random(?) order
			if (Array.isArray(obj1[ide])) {
				//Let's count to see if we can match as many elements as the lsit is long
				let matchedElements = 0;
				//For every item in the first list, compare to every item in the second list
				for (ele1 of obj1[ide]) {
					let foundMatch = false;
					for (ele2 of obj2[ide]) {
						if (JSON.stringify(ele1) == JSON.stringify(ele2)) {
							foundMatch = true;
							break;
						}
					}
					if (foundMatch) {
						matchedElements++;
					}
				}
				if (matchedElements == obj1[ide].length) {
					return true
				}
			}
			return false
		}
	}
	return true
}

function sortBySlot(units) {
	let newOrder = []
	let slotOrder = ['HQ', 'Troops', 'Elites', 'Fast Attack', 'Heavy Support', 'Dedicated Transport', 'Flyers', 'Lord of War', 'Fortification']
	for (slot of slotOrder) {
		for (unit of units) {
			if (unit.slot == slot) {
				newOrder.push(unit)
			}
		}
	}
	return newOrder
}


/*
██████   █████  ██████  ███████ ███████     ██████  ███████
██   ██ ██   ██ ██   ██ ██      ██          ██   ██ ██
██████  ███████ ██████  ███████ █████       ██████  ███████
██      ██   ██ ██   ██      ██ ██          ██   ██      ██
██      ██   ██ ██   ██ ███████ ███████     ██████  ███████
*/

function parseBS(data) {
	let phaseList = ["Command", "Movement", "Psychic", "Shooting", "Charge", "Fight", "Morale"]
	try {
		//Each "tier" in the list hierarchy  starts with an empty object
		var force = {
			name: data.roster.$.name,
			detachments: [],
			costs: {},
		}

		//Grab customName
		if (data.roster.$.customName) {
			force.customName = data.roster.$.customName
		}
		if (data.roster.customNotes) {
			force.customNotes = data.roster.customNotes[0]
		}

		//Grab all of the army costs
		for (cost of data.roster.costs[0].cost) {
			force.costs[cost.$.name.replace(/\s/g, '')] = parseInt(cost.$.value)
		}

		//Grab all of the detachment data
		let detachmentParse = data.roster.forces[0].force
		//If it's not an array, put it in one so the for loop can work
		if (!Array.isArray(detachmentParse)) detachmentParse = [detachmentParse]

		//Loop through every detachment in the list
		for (detachment of detachmentParse) {
			let faction = detachment.$.catalogueName;
			//Imperium usually have two faction keywords
			if (detachment.$.catalogueName.split(' - ').length > 1) faction = detachment.$.catalogueName.split(' - ')[1];

			//Start building the detachment object
			let newDetachment = {
				name: detachment.$.name,
				faction: faction,
				units: []
			}

			// Try to grab waha faction
			let wahaFaction = wahaData.Factions.find(wahaFact => wahaFact.name == faction)
			if (wahaFaction) newDetachment.wahaFaction = wahaFaction.id

			//If the detachment has custom names/notes
			if (detachment.$.customName) {
				newDetachment.customName = detachment.$.customName;
			}
			if (detachment.customNotes) {
				newDetachment.customNotes = detachment.customNotes[0];
			}

			//If it's not a list, put it in one so it can be looped through
			let unitData = detachment.selections[0].selection
			//Loop through every unit in the list
			for (unit of unitData) {
				//Single model units are listed as a model rather than a unit
				if (unit.$.type == 'model' || unit.$.type == 'unit') {
					//Create a new blank unit
					let newUnit = {
						name: '',
						slot: '',
						faction: [],
						keywords: [],
						models: [],
						rules: [],
						spells: [],
						stratagems: []
					}

					//If the selection is not a unit (sometimes it's a configuration),
					//this will remain "undefined".
					newUnit.name = unit.$.name
					if (unit.$.customName) {
						newUnit.customName = unit.$.customName
					}
					if (unit.customNotes) {
						newUnit.customNotes = unit.customNotes
					}

					//Find the datasheet in the wahaData
					let datasheet = wahaData.Datasheets.find(datasheet => datasheet.name == unit.$.name)
					if (datasheet) newUnit.waha = datasheet;
					// else newUnit.waha = 'Not Found';

					//Start collecting rules
					//This is the most obvious place to put all of the rules for the entire unit,
					//but there are two other places below
					if (unit.rules && unit.rules != '') {
						//If it's not a list, put it in one
						if (!Array.isArray(unit.rules[0].rule)) unit.rules[0].rule = [unit.rules[0].rule]
						//Loop through each rule
						for (rule of unit.rules[0].rule) {
							//New blank object for the rules
							let newRule = {
								name: rule.$.name,
								desc: rule.description[0],
								subkeys: rule.description[0].match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g),
								targets: rule.description[0].match(/([A-Z]+\s?[A-Z]+[^a-z0-9\W])/g),
								phases: []
							}
							//Look for specific mentions of a phase
							for (phase of phaseList) {
								if (newRule.desc.includes((phase + " phase"))) newRule.phases.push(phase)
							}
							newUnit.rules.push(newRule)
						}
					}
					//This is number two of the three stupid places you can store unit rules
					if (unit.profiles && unit.profiles[0] != '') {
						let profileParse = unit.profiles[0].profile
						if (!Array.isArray(profileParse)) profileParse = [profileParse]
						for (profile of profileParse) {
							if (profile.$.typeName == "Abilities") {
								let charaParse = profile.characteristics[0].characteristic
								if (!Array.isArray(charaParse)) charaParse = [charaParse]
								for (chara of charaParse) {
									let newRule = {
										name: profile.$.name,
										desc: chara._,
										subkeys: chara._.match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g),
										targets: chara._.match(/([A-Z]+\s?[A-Z]+[^a-z0-9\W])/g),
										phases: []
									}
									for (phase of phaseList) {
										if (newRule.desc.includes((phase + "phase"))) newRule.phases.push(phase)
									}
									newUnit.rules.push(newRule)
								}
							}
						}
					}

					//
					//  Start collecting models
					//

					//The way this is handled is so whacky, leading to either
					//Sometimes it loads as many weapons as there are models
					//and sometimes is loads many models with one weapon

					let selectionData = unit.selections[0].selection
					if (!Array.isArray(selectionData)) selectionData = [selectionData]
					if (unit.profiles) selectionData = selectionData.concat(unit.profiles[0].profile)
					//I know this next line seems weird, but single-model units'
					//models and weapons are properties of the same object, so there is
					//no model name for weapons in this case
					//We'll throw all weapons without owners into a pile until it's
					//done looping through all the profiles of the unit, then add them
					//to every model found for single-model units
					let unclaimedWeapons = []
					for (selection of selectionData) {
						if (!selection) break;
						let newModel = {
							name: '',
							faction: '',
							keywords: [],
							weapons: [],
							wargear: []
						}
						newModel.amount = selection.$.number
						let profileParse = []
						if (newModel.amount) {
							if (selection.profiles) {
								profileParse = selection.profiles[0].profile
							}
						} else if (selection.$.typeName == 'Unit') {
							profileParse = selection;
						}

						//If it's not an array, put it in one so the for loop can work
						if (!Array.isArray(profileParse)) profileParse = [profileParse]

						//Grab the model's statline and unique abilities
						for (profile of profileParse) {
							if (!profile) break;

							if (profile.$.typeName == "Unit") {
								newModel.name = profile.$.name
								if (profile.$.customName) {
									newModel.customName = profile.$.customName
								}
								if (profile.$.customNotes) {
									newModel.customNotes = profile.$.customNotes
								}
								let charaParse = profile.characteristics[0].characteristic
								newModel.statlines = {}
								for (chara of charaParse) {
									let statname = chara.$.name
									if (statname == 'Save') statname = 'Sv'
									let stattext = chara._
									stattext = stattext.replace('+', '')
									stattext = stattext.replace('\"', '')
									if (stattext == 'N/A') stattext = '*'
									newModel.statlines[statname] = stattext
								}
							}
							//This is number three of the three stupid places you can store unit rules
							else if (profile.$.typeName == "Abilities") {
								let charaParse = profile.characteristics[0].characteristic
								if (!Array.isArray(charaParse)) charaParse = [charaParse]
								for (chara of charaParse) {
									let newRule = {
										name: profile.$.name,
										desc: chara._,
										// subkeys: chara._.match(/(DDDDDDDDD)/g),
										// targets: chara._.match(/(DDDDDDDDD)/g),
										subkeys: chara._.match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g),
										targets: chara._.match(/([A-Z]+\s?[A-Z]+[^a-z0-9\W])/g),
										phases: []
									}
									for (phase of phaseList) {
										if (newRule.desc.includes((phase + "phase"))) newRule.phases.push(phase)
									}
									newUnit.rules.push(newRule)
								}
							} else {

							}
						}
						//
						//  Start collecting weapons
						//
						let weaponGrab = []
						if (selection.selections) {
							weaponGrab = selection.selections[0].selection
						} else {
							if (selection.profiles) {
								if (selection.profiles[0].profile[0].$.typeName == 'Weapon')
									weaponGrab = selection
							}
						}

						if (!Array.isArray(weaponGrab)) weaponGrab = [weaponGrab]
						for (weapon of weaponGrab) {
							if (!weapon) break;
							let weaponFound = {}
							if (weapon.selections && weapon.selections[0] != '') {
								weaponFound = weapon.selections[0].selection[0].profiles[0].profile[0]
							} else if (weapon.profiles && weapon.profiles != '') {
								weaponFound = weapon.profiles[0].profile
							}
							// If it was a weapon
							if (!Array.isArray(weaponFound)) weaponFound = [weaponFound]

							for (weapProf of weaponFound) {
								let newWeapon = {
									name: '',
									amount: weapon.$.number
								}
								let newWargear = {
									name: '',
									amount: weapon.$.number
								}
								if (Object.keys(weapProf).length) {
									let charaParse = weapProf.characteristics[0].characteristic
									if (weapProf.$.typeName == "Weapon") {
										newWeapon.name = weapon.$.name
										if (weapon.$.customName) {
											newWeapon.customName = weapon.$.customName
										}
										if (weapon.customNotes) {
											newWeapon.customName = weapon.customNotes[0]
										}
										// newWeapon.amount = weapon.number
										for (chara of charaParse) {
											newWeapon[chara.$.name] = chara._
											if (chara._) {
												if (chara._.includes('select one of the profiles below')) {
													//This trick will turn off adding this weapon to the list
													newWeapon.name = ''
												}
											}
										}
									}

									//Add it to the weapons or wargear or unclaimed list
									if (newWeapon.name) {
										if (newModel.name) {
											newModel.weapons.push(newWeapon);
										} else if (newWargear.name) {
											newModel.weapons.push(newWargear);
										} else {
											unclaimedWeapons.push(newWeapon)
										}
									}
								}
								//If it was a wargear/upgrade
								else {
									newWeapon.name = weapon.$.name
								}
							}
						}

						//
						//  Start collecting weapons
						//
						let spellGrab = []
						if (selection.selections) {
							spellGrab = selection.selections[0].selection
						} else {
							if (selection.profiles) {
								if (selection.profiles[0].profile[0].$.typeName == 'Psychic Power')
									spellGrab = selection
							}
						}

						if (!Array.isArray(spellGrab)) spellGrab = [spellGrab]
						for (spell of spellGrab) {
							if (!spell) break;
							let spellFound = {}
							if (spell.selections && spell.selections[0] != '') {
								spellFound = spell.selections[0].selection[0].profiles[0].profile[0]
							} else if (spell.profiles && spell.profiles != '') {
								spellFound = spell.profiles[0].profile;
							}
							if (!Array.isArray(spellFound)) spellFound = [spellFound]
							for (spellProf of spellFound) {
								let newSpell = {
									name: '',
									warpcharge: 0,
									range: 0
								}
								if (Object.keys(spellProf).length) {
									let charaParse = spellProf.characteristics[0].characteristic
									if (spellProf.$.typeName == "Psychic Power") {
										newSpell.name = spellProf.$.name;

										let spellChara = spellProf.characteristics[0].characteristic

										for (chara of spellChara) {
											newSpell[chara.$.name.toLowerCase().replace(/\s/g, '')] = chara._;
										}

										if (newUnit.name) {
											//Add it to the spells list for the Unit if it exists
											newUnit.spells.push(newSpell);
										}
									}
								}
							}
						}

						//If it found a model
						if (newModel.name) {
							if (newUnit.models.length) {
								//Check to see if it matches the previous unit
								if (matchModel(newUnit.models[newUnit.models.length - 1], newModel)) {
									if (newUnit.models[newUnit.models.length - 1].amount)
										newUnit.models[newUnit.models.length - 1].amount++;
									else
										newUnit.models[newUnit.models.length - 1] = 1;
								} else {
									newUnit.models.push(newModel)
								}
							} else {
								newUnit.models.push(newModel)
							}
						}
					}

					//
					//  Start collecting keywords
					//

					//Try to pull from waha first
					if (newUnit.waha) {
						let unitKeys = wahaData.Datasheets_keywords.filter(function(key) {
							return key.datasheet_id == newUnit.waha.id;
						});
						for (var key of unitKeys) {
							if (key.is_faction_keyword == 'true') newUnit.faction.push(key.keyword);
							else newUnit.keywords.push(key.keyword.toLowerCase());
						}
						newUnit.slot = newUnit.waha.role;
					}
					//Otherwise, pull from battlescribe
					else {
						if (unit.categories) {
							if (!Array.isArray(unit.categories[0].category)) unit.categories[0].category = [unit.categories[0].category]
							for (category of unit.categories[0].category) {
								if (category.$.primary == "true") {
									newUnit.slot = category.$.name
								} else {
									//BS factions format: "Faction: <faction name>".
									//Try to Split by ": ", and if the first word is "Faction"
									if (category.$.name.split(": ")[0] == "Faction") {
										//Dump the "Faction" and keep the "<faction name>"
										newUnit.faction = category.$.name.split(":")[1].trim()
									} else {
										//Otherwise, dump the keyword straight to the list
										newUnit.keywords.push(category.$.name.toLowerCase())
									}
								}
							}
						}
					}

					//
					//Stratagems
					//

					if (newUnit.waha) {
						// Find all strat ID's on the datasheet
						let stratIDfind = wahaData.Datasheets_stratagems.filter(function(strat) {
							return strat.datasheet_id == newUnit.waha.id;
						});
						for (var stratID of stratIDfind) {
							//Find all data by strat ID
							let stratDatafind = wahaData.Stratagems.filter(function(strat) {
								return strat.id == stratID.stratagem_id;
							});
							for (var stratData of stratDatafind) {
								let strat = stratData;
								stratData.keys = [];
								stratData.activate = [];
								stratData.descText = stratData.description.replaceAll("<[^>]*>", "");
								//Find all phases of stratagems
								let stratPhasefind = wahaData.StratagemPhases.filter(function(strat) {
									return strat.stratagem_id == stratData.id;
								});
								for (var stratPhase of stratPhasefind) {
									stratData.activate.push(stratPhase.phase);
								}
								// Search for all keywords in the waha description
								// Find a group of words inside a span if those words are also in a span
								let span = strat.description.replace(/<span [^>]+>/g, 'ス');
								span = span.replace(/<\/span>/g, 'ミ');
								span = span.matchAll(/スス.*?ミミ/g);
								for (var sp of span) {
									sp[0] = sp[0].replaceAll('ス', '');
									sp[0] = sp[0].replaceAll('ミ', '');
									sp[0] = sp[0].toLowerCase();
									if (!stratData.keys.includes(sp[0])) stratData.keys.push(sp[0]);
								}
								for (var key of stratData.description.matchAll(/<span [^>]+>([^<]+)<\/span>/g)) {
									if (!stratData.keys.includes(key[1])) stratData.keys.push(key[1].toLowerCase());
								}
								newUnit.stratagems.push(stratData)
							}
						}
					}

					if (newUnit.models) {
						if (unclaimedWeapons.length) {
							for (model in newUnit.models) {
								newUnit.models[model].weapons = unclaimedWeapons
							}
						}
					}
					newDetachment.units.push(newUnit)
				}
			}
			newDetachment.units = sortBySlot(newDetachment.units)
			force.detachments.push(newDetachment)
		}
		// return [force, '', JSON.stringify(data)]
		return [force, '', data]

	} catch (error) {
		logError(error);
		// return [{}, error, JSON.stringify(data)]
		logger.error(error);
		return [{}, error, data]
	}
}
