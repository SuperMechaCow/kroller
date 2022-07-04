/*
ありがとうございました
Thanks
http://myminiaturemischief.blogspot.com/2017/07/warhammer-40k-8th-edition-rending-pony.html
https://www.battlescribe.net/

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
const Discord = require('discord.js');
// Require the necessary discord.js classes
const {
	Client,
	Intents
} = require('discord.js');
// const { token } = require('./config.json');
const request = require('request');

// Create a new client instance
const disclient = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

var app = express()

var URL = 'http://kroller.supermechacow.com/'
var HOST = '192.168.1.103';
var PORT = 4040;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const upload = multer({
	dest: 'uploads/'
})

app.get('/', (req, res) => {
	// console.log(req.query.gameid);
	if (!req.query.gameid || !gameList[req.query.gameid]) {
		req.query.gameid = crypto.randomBytes(4).toString("hex");
		createGame(req.query.gameid, req);
		res.redirect(url.format({
			pathname: "/",
			query: {
				gameid: req.query.gameid
			}
		}));
	} else {
		// console.log(gameList[req.query.gameid].forceData);
		res.render('index', gameList[req.query.gameid])
	}
});

app.get('/abilmap', (req, res) => {
	// console.log(req.query.gameid);
	if (!req.query.gameid || !gameList[req.query.gameid]) {
		req.query.gameid = crypto.randomBytes(4).toString("hex");
		createGame(req.query.gameid, req);
		res.redirect(url.format({
			pathname: "/",
			query: {
				gameid: req.query.gameid
			}
		}));
	} else {
		// console.log(gameList[req.query.gameid].forceData);
		res.render('abilmap', gameList[req.query.gameid])
	}
});

app.get('/search', function(req, res) {
	if (req.query.string) {
		let result = fuzzysearch(req.query.string);
		console.log(result);
		res.send(JSON.stringify(result));
	} else {
		let result = fuzzysearch('hi');
		console.log(result);
		res.send(JSON.stringify(result));
	}
});

app.post('/upload', upload.fields([{
	name: 'atkr_file',
	maxCount: 1
}, {
	name: 'dfdr_file',
	maxCount: 1
}]), (req, res) => {
	let forceBSData = forceFromBS(req.files);
	// console.log(forceBSData);
	if (!req.body.gameid || !gameList[req.body.gameid]) {
		req.body.gameid = crypto.randomBytes(4).toString("hex");
		createGame(req.body.gameid, req);
		gameList[req.body.gameid].forceData = forceBSData;
	}

	// console.log(gameList[req.body.gameid]);
	if (forceBSData.atkr_file[1]) gameList[req.body.gameid].outputBox += forceBSData.atkr_file[1]
	else if (forceBSData.atkr_file.length)
		gameList[req.body.gameid].forceData.atkr_file = forceBSData.atkr_file;
	if (forceBSData.dfdr_file[1]) gameList[req.body.gameid].outputBox += forceBSData.dfdr_file[1]
	else if (forceBSData.dfdr_file.length)
		gameList[req.body.gameid].forceData.dfdr_file = forceBSData.dfdr_file;

	res.redirect(url.format({
		pathname: "/",
		query: {
			gameid: req.body.gameid
		}
	}));
});

app.listen(PORT, () => {
	console.log(`Listening on ${HOST}:${PORT}`);
})

disclient.on('ready', () => {
	console.log(`Logged in as ${disclient.user.tag}!`);
});

disclient.on('messageCreate', message => {
	if (message.content.startsWith('/kroller')) {
		message.reply('uwu?');
	}
});

const discordtoken = require('./discordtoken');
disclient.login(discordtoken.TOKEN);

var gameList = {}

var wahaData = {}

fs.readFile(__dirname + '/public/data/wahadata/wahaData.json', 'utf8', (err, data) => {
	wahaData = JSON.parse(data);
	// console.log(wahaData.Datasheets[0]);
});

function createGame(sessionID, req) {
	return new Promise((resolve, reject) => {
		gameList[sessionID] = {
			gameid: sessionID,
			outputBox: '',
			forceData: {
				atkr_file: [],
				dfdr_file: [],
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
				console.log('Started a new game: ' + sessionID);
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
