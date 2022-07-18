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
var md = require('markdown-it')('commonmark', {
	linkify: true,
	breaks: true,
	typographer: true
});
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data/database.db');

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

var URL = 'http://40kroller.animetidd.is/'
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

/*
app.get('/abilmap', (req, res) => {

	if (!req.query.gameCode || !gameList[req.query.gameCode]) {
		req.query.gameCode = crypto.randomBytes(4).toString("hex");
		createGame(req.query.gameCode, req);
		res.redirect(url.format({
			pathname: "/",
			query: {
				gameCode: req.query.gameCode
			}
		}));
	} else {

		res.render('abilmap', gameList[req.query.gameCode])
	}
});
*/

app.post('/feedback', upload.fields([]), function(req, res) {
	let newFeedback = {
		ip: req.connection.remoteAddress,
		gameCode: req.body.gameCode,
		feedback: req.body.feedback
	}
	logger.info(newFeedback);
	fs.readFile(__dirname + '/feedback.log', (err, data) => {
		if (err) {
			console.log(err);
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
			gameCode: req.body.gameCode
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

app.get('/', async (req, res) => {
	try {
		// YOU WILL ONLY SEE '/' WITHOUT A QUERY IF YOU GET AN ERROR MESSAGE. Otherwise it will redirect to a game
		// Did they provide a battle code?
		if (req.query.gameCode) {
			//Check to see if the battle already exists
			db.get(`SELECT * FROM games WHERE gameCode=?`, req.query.gameCode, (err, game) => {
				// If there was a database error
				if (err) {
					console.log(err);
					logger.error(err)
					res.status(500).render('index', {
						gameCode: null,
						forceData: [],
						outputPretty: '<p class="oR cCenter">There was an error querying the database to find that game.</p><p class="cCenter">This infraction has been recorded. Consult the Tech Priest.</p>',
						output: 'There was an error querying the database to find that game. This infraction has been recorded. Consult the Tech Priest.'
					});
				}
				// Otherwise...
				else {
					// If it found a game
					if (game) {
						// This is where you would check to see if there are forces
						let newGame = new Game();
						newGame.gameCode = req.query.gameCode;
						// You need to query for both force codes
						db.all(`SELECT * FROM forces WHERE forceCode=? OR forceCode=?`, game.atkrCode, game.dfdrCode, (err, forces) => {
							if (err) {
								console.log(err);
								logger(err);
								res.status(500).render('index', {
									gameCode: null,
									forceData: [],
									outputPretty: '<p class="oR cCenter">There was an error in the database when retrieving existing forces.</p><p class="cCenter">This infraction has been recorded. Consult the Tech Priest.</p>',
									output: 'There was an error in creating a new battle in the database. This infraction has been recorded. Consult the Tech Priest.'
								});
							} else {
								// Put them in the correct order
								if (forces.length == 1) {
									if (forces[0].forceCode == game.dfdrCode) {
										forces.splice(0, 0, {
											forceFile: null
										});
									} else forces.splice(1, 0, {
										forceFile: null
									});
								} else if (forces.length == 2) {
									if (forces[0].forceCode == game.dfdrCode) {
										forces.splice(1, 0, forces.shift());
									}
								} else {
									forces = [{
										forceFile: null
									}, {
										forceFile: null
									}]
								}
								// then you need to load the files for each
								let newForces = {};
								if (forces[0].forceFile) newForces.atkr_file = [{
									fieldname: 'atkr_file',
									filename: forces[0].forceFile
								}];
								if (forces[1].forceFile) newForces.dfdr_file = [{
									fieldname: 'atkr_file',
									filename: forces[1].forceFile
								}];
								// and send them both to forceFromBS using it's argument object pattern
								let forceBSData = forcesFromBS(newForces);
								// if there was a problem
								if (forceBSData.error) {
									newGame.error = forceBSData.error;
									newGame.outputPretty = forceBSData.outputPretty;
									newGame.output = forceBSData.output;
								}
								// or add the returned forces to newGame
								else {
									newGame.forceData = forceBSData;
								}
								res.status(200).render('index', newGame);
							}
						});
					}
					//If it couldn't find the game, redirect to '/' to create a new one
					else {
						logger.warn(`Game at ${req.query.gameCode} was not found.`);
						res.redirect('/');
					}
				}
			});
		}
		// If no battle code was provided
		else {
			let newGame = await createGame(req.query.gameCode, req);
			// If it couldn't create a new game
			if (newGame.error) {
				logger.error(newGame.error)
				res.status(500).render('index', {
					gameCode: null,
					forceData: [],
					outputPretty: '<p class="oR cCenter">There was an error in creating a new battle in the database.</p><p class="cCenter">This infraction has been recorded. Consult the Tech Priest.</p>',
					output: 'There was an error in creating a new battle in the database. This infraction has been recorded. Consult the Tech Priest.'
				});
			}
			// If it made a new game, send them to it
			else {
				res.redirect(url.format({
					pathname: "/",
					query: {
						gameCode: newGame.gameCode
					}
				}));
			}
		}
	} catch (error) {
		logger.error(prepError(error));
		res.status(500).render('index', {
			gameCode: null,
			forceData: [],
			outputPretty: '<p class="oR cCenter">There was an error retrieving that game.</p><p class="cCenter">This infraction has been recorded. Consult the Tech Priest.</p>',
			output: 'There was an error retrieving that game. This infraction has been recorded. Consult the Tech Priest.'
		});
	}
});

app.post('/upload', upload.fields([{
	name: 'atkr_file',
	maxCount: 1
}, {
	name: 'dfdr_file',
	maxCount: 1
}]), async (req, res) => {
	try {
		let forceBSData = forcesFromBS(req.files);
		//If no errors, start by creating an empty game
		let newGame = new Game();
		// If no gameCode was provided, create a new battle to replace the empty game
		if (!req.body.gameCode) newGame = await createGame(req.body.gameCode, req);
		// Otherwise, use the provided gameCode
		else newGame.gameCode = req.body.gameCode;
		// The get the correct game
		db.get(`SELECT * FROM games WHERE gameCode=?`, newGame.gameCode, (err, game) => {
			// If there was a database error
			if (err) {
				console.log(err);
				logger.error(err)
				res.status(500).render('index', {
					gameCode: null,
					forceData: [],
					outputPretty: '<p class="oR cCenter">There was an error querying the database to find that battle during upload.</p><p class="cCenter">This infraction has been recorded. Consult the Tech Priest.</p>',
					output: 'There was an error querying the database to find that battle during upload. This infraction has been recorded. Consult the Tech Priest.'
				});
			}
			// If it found a game
			else if (game) {
				let newCodes = {
					atkrCode: ((game.atkrCode) ? game.atkrCode : null),
					dfdrCode: ((game.atkrCode) ? game.dfdrCode : null)
				}
				for (var i in forceBSData) {
					if (forceBSData[i].filename) {
						let forceCode = crypto.randomBytes(4).toString("hex");
						db.run(`INSERT INTO forces (forceCode, forceFile, forceName, timesLoaded, dateCreated, dateLoaded) VALUES (?, ?, ?, 1, ?, ?)`,
							forceCode, forceBSData[i].filename, forceBSData[i].force.name, new Date().getTime(), new Date().getTime(), (err) => {
								if (err) {
									console.log(err);
									logger.error(err);
								}
							});
						if (i == 1) newCodes.dfdrCode = forceCode;
						else newCodes.atkrCode = forceCode;
					}
				}
				db.run(`UPDATE games SET atkrCode=?, dfdrCode=? WHERE gameCode=?`, newCodes.atkrCode, newCodes.dfdrCode, game.gameCode, (err) => {
					if (err) {
						console.log(err);
						logger.error(err);
					}
				});
				res.redirect(url.format({
					pathname: "/",
					query: {
						gameCode: newGame.gameCode
					}
				}));
			}
			//If it couldn't find the game, start a new one with this force
			else {
				logger.error(`Game at ${req.query.gameCode} was not found.`);
				res.status(500).render('index', {
					gameCode: null,
					forceData: [],
					outputPretty: '<p class="oR cCenter">There was an error finding the battle for this upload. <a href="/">Try creating a new game</a>.</p><p class="cCenter">This infraction has been recorded. If the problem persists, consult the Tech Priest.</p>',
					output: 'There was an error finding the battle for this upload. Try creating a new game</a>. This infraction has been recorded. If the problem persists, consult the Tech Priest.'
				}); //res.render
			}
		}); //db.get
	} catch (error) {
		logger.error(prepError(error));
		res.status(500).render('index', {
			gameCode: null,
			forceData: [],
			outputPretty: '<p class="oR cCenter">There was an error uploading the Battlescribe roster files.</p><p class="cCenter">This infraction has been recorded. Consult the Tech Priest.</p>',
			output: 'There was an error uploading the Battlescribe roster files. This infraction has been recorded. Consult the Tech Priest.'
		});
	}
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

		let forceData = await forcesFromBS(files);
		console.log(forceData);
		if (forceData.length) {
			let gameData = await createGame();
			console.log(gameData);
			let descString = 'Empty Game'
			if (forceData[0][0]) {
				descString = forceData[0][0].name;
			}
			if (forceData.dfdr_file[0]) {
				descString += ' vs ' + forceData.dfdr_file[0].name;
			}
			const attachment = new Discord.MessageAttachment(__dirname + '/public/shares/' + gameCode + '.png');
			const embed = new Discord.MessageEmbed()
				.setTitle('40kroller Game')
				.setColor('RED')
				.setDescription(descString)
				.setURL(gameData.url)
				// .setThumbnail('attachment://' + gameCode + '.png')
				.setImage('attachment://' + gameCode + '.png')
				.setTimestamp()
			message.channel.send({
				embeds: [embed],
				files: [attachment]
			});
		}
	}
}

disclient.on('messageCreate', message => {
	if (message.content.startsWith('!!')) {
		let command = message.content.split('!!')[1]
		let args = command.split(' ')
		switch (args[0]) {
			case 'ping':
				message.reply(`I'm alive!`)
				break;
			case 'unit':
				let searchResults = fuzzysearch(command, wahaData.Datasheets, 5);
				let descString = `Searching for: ${command.replace(args[0] + ' ', '')}`;
				for (var result of searchResults) {
					descString += `\n[${result.item.name}](${result.item.link})`
				}
				const embed = new Discord.MessageEmbed()
					.setTitle('40kroller Fuzzy Search')
					.setColor('RED')
					.setDescription(descString)
				message.channel.send({
					embeds: [embed]
				});
				break;
			default:

				break;
		}
	} else {
		//	resolveRoster();
	}

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

class Game {
	constructor() {
		this.gameCode = null;
		this.forceData = [];
		this.outputPretty = '';
		this.output = '';
		this.url = '';
	}
	setOutput(string) {
		this.outputPretty = string;
		this.output = string;
		//Remove HTML from output
	}
}

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

function prepError(err) {
	return `${new Date()}\n${err.stack}`
}

/*
██████   █████  ██████  ███████ ███████     ██████  ███████
██   ██ ██   ██ ██   ██ ██      ██          ██   ██ ██
██████  ███████ ██████  ███████ █████       ██████  ███████
██      ██   ██ ██   ██      ██ ██          ██   ██      ██
██      ██   ██ ██   ██ ███████ ███████     ██████  ███████
*/

async function createGame(req) {
	return new Promise((resolve, reject) => {
		let newGame = new Game();
		newGame.gameCode = crypto.randomBytes(4).toString("hex");
		newGame.url = '';
		// If a web request was given
		if (req) {
			newGame.url = req.protocol + '://' + req.get('host') + req.originalUrl;
		}
		// Otherwise you're probably making this from another source
		else {
			newGame.url = URL + '?gameCode=' + newGame.gameCode;
		}
		//Start waiting on the QR code to be made
		qrcode.toFile('public/shares/' + newGame.gameCode + '.png', newGame.url, {
				color: {
					dark: '#000000', // Blue dots
					light: '#ffcc99' // Transparent background
				}
			},
			// Callback for when it is done:
			function(err) {
				if (err) {
					logger.error(err)
					reject({
						error: err
					})
				} else {
					//Database stuff!
					db.run(`INSERT INTO games (gameCode, dateCreated) VALUES (?, ?)`, newGame.gameCode, new Date().getTime(), (err) => {
						if (err) {
							console.log(err);
							logger.error(err)
							reject({
								error: err
							})
						} else {
							logger.info('Started a new game: ' + newGame.gameCode);
							resolve(newGame)
						}
					})
				}
			});
	})
}

function forcesFromBS(providedFiles) {
	let forceData = [];
	try {
		for (var i in Object.entries(providedFiles)) {
			// First index is name (0), second is filelist (1)
			// the fileslist is another list of files (we have only 1)
			// If only a deffender file was uploaded, make the attacker blank and increase index
			if (Object.entries(providedFiles)[i][0] == 'dfdr_file' && !forceData.length) {
				forceData.push([]);
			}
			// Grab the actual file from the force
			let forceName = Object.entries(providedFiles)[i][0] //Is this line of code valid?
			let filedata = Object.entries(providedFiles)[i][1][0];
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
							console.log(err);
							logger.error(err)
						} else {
							let tempParse = parseBS(result);
							tempParse.filename = filedata.filename;
							forceData.push(tempParse);
							//Immediately delete the file after parsing
							// fs.unlink(`uploads/${filedata.filename}`, (err) => {
							// 	if (err) logger.error(err)
							// });
						}
					});
				}
			});
		}
	} catch (error) {
		logger.error(prepError(error));
		return {
			error: error,
			outputPretty: '<p class="oR cCenter">There was an error when attempting to unzip and read the roster files.</p><p class="cCenter">This infraction has been recorded. Consult the Tech Priest.</p>',
			output: 'There was an error when attempting to unzip and read the roster files.'
		}
	}
	return forceData;
}

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
			force.customNotes = md.renderInline(data.roster.customNotes[0]);
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
			let factionLink = wahaData.Factions.find(fct => fct.name == faction)
			if (factionLink) newDetachment.factionLink = factionLink.link;

			// Try to grab waha faction
			let wahaFaction = wahaData.Factions.find(wahaFact => wahaFact.name == faction)
			if (wahaFaction) newDetachment.wahaFaction = wahaFaction.id

			//If the detachment has custom names/notes
			if (detachment.$.customName) {
				newDetachment.customName = detachment.$.customName;
			}
			if (detachment.customNotes) {
				newDetachment.customNotes = md.renderInline(detachment.customNotes[0]);
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
						newUnit.customNotes = md.renderInline(unit.customNotes[0]);
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

					// Find the datasheet in the wahaData
					let datasheet;
					// Some units (especially daemons and CSM marines) are in multiple factions
					// Find all possible datasheets
					let datasheetList = wahaData.Datasheets.filter(datasheet => datasheet.name == unit.$.name)
					// If there was more than one possible datasheet
					if (datasheetList.length > 1) {
						// Check the datasheet keywords for each possible datasheet
						for (var checkDatasheet of datasheetList) {
							// See if it has a matching kayword AND datasheet id
							let foundDS = wahaData.Datasheets_keywords.find(ds => ds.datasheet_id == checkDatasheet.id && ds.keyword == newUnit.faction);
							// If you found a match, make that the datasheet and stop checking
							if (foundDS) {
								datasheet = checkDatasheet;
								break;
							}
						}
					}
					//If there was only one datasheet found, that must be the correct one
					else {
						datasheet = datasheetList[0]
					}
					if (datasheet) newUnit.waha = datasheet;
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
							//Grab customName
							if (rule.$.customName) {
								newRule.customName = rule.$.customName
							}
							if (rule.customNotes) {
								newRule.customNotes = md.renderInline(rule.customNotes[0]);
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
									//Grab customName
									if (profile.$.customName) {
										newRule.customName = profile.$.customName
									}
									if (profile.customNotes) {
										newRule.customNotes = md.renderInline(profile.customNotes[0]);
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
						if (selection.$.name == "Warlord") newUnit.warlord = true;
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


							/*
							██   ██ ███████ ██    ██     ██████  ██ ██████      ██    ██  ██████  ██    ██     ██   ██ ███    ██  ██████  ██     ██ ██████  ██
							██   ██ ██       ██  ██      ██   ██ ██ ██   ██      ██  ██  ██    ██ ██    ██     ██  ██  ████   ██ ██    ██ ██     ██      ██ ██
							███████ █████     ████       ██   ██ ██ ██   ██       ████   ██    ██ ██    ██     █████   ██ ██  ██ ██    ██ ██  █  ██   ▄███  ██
							██   ██ ██         ██        ██   ██ ██ ██   ██        ██    ██    ██ ██    ██     ██  ██  ██  ██ ██ ██    ██ ██ ███ ██   ▀▀
							██   ██ ███████    ██        ██████  ██ ██████         ██     ██████   ██████      ██   ██ ██   ████  ██████   ███ ███    ██    ██
							*/
							// This doesn't look for models, just statlines in the unit.
							// This means no custom names or notes for models

							if (profile.$.typeName == "Unit") {
								newModel.name = profile.$.name
								if (profile.$.customName) {
									newModel.customName = profile.$.customName
								}
								if (profile.$.customNotes) {
									newModel.customNotes = md.renderInline(profile.$.customNotes[0]);
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
									//Grab customName
									if (profile.$.customName) {
										newRule.customName = profile.$.customName
									}
									if (profile.customNotes) {
										newRule.customNotes = md.renderInline(profile.customNotes[0]);
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
											newWeapon.customNotes = md.renderInline(weapon.customNotes[0]);
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
						//  Start collecting spells
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
										//Grab customName
										if (spell.$.customName) {
											newSpell.customName = spell.$.customName;
										}
										if (spell.customNotes) {
											newSpell.customNotes = md.renderInline(spell.customNotes[0]);
										}
										let spellChara = spellProf.characteristics[0].characteristic;

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
					//Stratagems
					//

					if (newUnit.waha) {
						// Find all strat ID's on the datasheet
						let stratIDfind = wahaData.Datasheets_stratagems.filter(strat => strat.datasheet_id == newUnit.waha.id);
						for (var stratID of stratIDfind) {
							//Find all data by strat ID
							let stratDatafind = wahaData.Stratagems.filter(strat => strat.id == stratID.stratagem_id);
							for (var stratData of stratDatafind) {
								let strat = stratData;
								stratData.keys = [];
								stratData.activate = [];
								stratData.descText = stratData.description.replaceAll("<[^>]*>", "");
								//Find all phases of stratagems
								let stratPhasefind = wahaData.StratagemPhases.filter(strat => strat.stratagem_id == stratData.id);
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
								let typeData = stratData.type.split(' – ')
								if (typeData.length > 1) {
									stratData.subfaction = typeData[0]
									stratData.type = typeData[1].replace(' Stratagem', '');
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
		return {
			force: force,
			error: '',
			outputPretty: '',
			output: '',
			bsdata: data
		}

	} catch (error) {
		logger.error(prepError(error));
		return {
			force: force,
			error: error,
			outputPretty: '<p class="oR cCenter">There was an error in parsing the Battlescribe roster.</p><p class="cCenter">This infraction has been recorded. Consult the Tech Priest.</p>',
			output: 'There was an error in parsing the Battlescribe roster. This infraction has been recorded. Consult the Tech Priest.',
			bsdata: data
		}
	}
}
