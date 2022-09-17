var forceData;
var ioList = {};
var currentPhase = '';
var tickles = 0;
var gameType = 'matched';
var dice = ['🎲', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
var settings = {
	autoOpen: false,
	autoClose: true,
	stratagems: true,
	statIcons: true,
	slotIcons: true,
	forceSort: 'slot' //slot, marker, name, points/power?
};
var phaseList = {
	Pregame: ['during deployment', 'at the start of the first battle round', 'Declare Reserves and Transports', 'before the battle'],
	Command: [],
	Movement: [`advance roll`, `advance`, 'fall back', 'falls back'],
	Psychic: [`psychic test`, `manifest`, `deny the witch`],
	Shooting: [`a ranged attack`, 'shooting'],
	Charge: [`charge roll`, `heroic intervention`, 'charge'],
	Fight: [`melee attack`],
	Morale: [`morale test`, `leadership`, `combat attrition`]
};
var unitRoles = [
	'dedicatedtransport',
	'elites',
	'fastattack',
	'flyers',
	'fortifications',
	'heavysupport',
	'hq',
	'lordofwar',
	'troops'
];

/*
████████  ██████  ██    ██  ██████ ██   ██      ██████  ██████  ███    ██ ████████ ██████   ██████  ██      ███████
   ██    ██    ██ ██    ██ ██      ██   ██     ██      ██    ██ ████   ██    ██    ██   ██ ██    ██ ██      ██
   ██    ██    ██ ██    ██ ██      ███████     ██      ██    ██ ██ ██  ██    ██    ██████  ██    ██ ██      ███████
   ██    ██    ██ ██    ██ ██      ██   ██     ██      ██    ██ ██  ██ ██    ██    ██   ██ ██    ██ ██           ██
   ██     ██████   ██████   ██████ ██   ██      ██████  ██████  ██   ████    ██    ██   ██  ██████  ███████ ███████
*/

var dragTarget;
var startValue;
var endValue;
var startPos;
var spinSpeed = 0.025;
var swipeStartPos;
var swiping;

function spinnerDown(e) {
	endValue = 0;
	dragTarget = e.currentTarget
	startValue = Number(dragTarget.value)
	startPos = Number(e.clientY || e.targetTouches[0].pageY)
}

function spinnerUp(e) {
	// This must be set here and on the onchange of the individual tracker
	setTrackers(true);
	dragTarget = null;
}

function spinnerDrag(e) {
	if (dragTarget) {
		let drag = e.clientY || e.targetTouches[0].pageY;
		dragTarget.value = startValue - Math.floor((drag - startPos) * spinSpeed);
		endValue = dragTarget.value;
	}
}

function swiperDown(e) {
	if (!dragTarget) {
		swipeStartPos = Number(e.clientX || e.targetTouches[0].pageX)
		swiping = true;
	}
}

function swiperUp(e) {
	swiping = false;
}

function swiperDrag(e) {
	let swipeLength = 100;
	let swipeDeadzone = 20;
	if (swiping) {
		let drag = e.clientX || e.targetTouches[0].pageX;
		// If dragged right
		if (drag - swipeStartPos > swipeLength) {
			// And finished drag on left side of the screen
			if (drag < window.innerWidth / 2) {
				// Open attacker if closed
				if (!document.getElementById('atkrList').classList.contains('isOpen')) {
					toggleNav(document.getElementById('toggleatkr'));
				}
			}
			// or on the right side of the screen
			else {
				// Close defender if open
				if (document.getElementById('dfdrList').classList.contains('isOpen')) {
					toggleNav(document.getElementById('toggledfdr'));
				}
			}
			swiping = false;
		}
		// If dragged left
		else if (drag - swipeStartPos < -swipeLength) {
			// And finished on the right side of the screen
			if (drag > window.innerWidth / 2) {
				// Open defender if closed
				if (!document.getElementById('dfdrList').classList.contains('isOpen')) {
					toggleNav(document.getElementById('toggledfdr'));
				}
			} else {
				// Close attacker if open
				if (document.getElementById('atkrList').classList.contains('isOpen')) {
					toggleNav(document.getElementById('toggleatkr'));
				}
			}
			swiping = false;
		}
	}
}

/*
██ ███    ██ ████████ ███████ ██████  ███████  █████   ██████ ███████
██ ████   ██    ██    ██      ██   ██ ██      ██   ██ ██      ██
██ ██ ██  ██    ██    █████   ██████  █████   ███████ ██      █████
██ ██  ██ ██    ██    ██      ██   ██ ██      ██   ██ ██      ██
██ ██   ████    ██    ███████ ██   ██ ██      ██   ██  ██████ ███████
*/

function openTab(title, all) {
	for (var header of document.getElementsByClassName('accordion-header')) {
		// If it's open, close it
		if (header.classList.contains('isOpen'))
			if (all)
				toggleAccordion(header)
		else
		if (header.parentNode.id == 'content')
			toggleAccordion(header)
		if (window.innerWidth <= 635) {
			closeNav(toggleatkr);
			closeNav(toggledfdr);
		}
		// If it's the chosen header, open it back up
		if (header.innerText == title)
			toggleAccordion(header)
	}
}

function output(message) {
	ioList.output.innerHTML = message;
	openTab('Output');
}

function buildAccordions() {
	var titles = document.getElementsByClassName('accordion-header');
	// Set up accordions
	for (var title of titles) {
		title.onclick = function() {
			this.classList.remove('newTag')
			toggleAccordion(this);
		}
	}
}

function toggleNav(el) {
	let target, otarget;
	if (el.id == 'toggleatkr') {
		target = document.getElementById('atkrList');
		otarget = document.getElementById('dfdrList');
	} else {
		target = document.getElementById('dfdrList');
		otarget = document.getElementById('atkrList');
	}

	if (target.classList.contains('isActive') || target.classList.contains('isOpen')) {
		target.classList.remove('isActive');
		target.classList.remove('isOpen');
		if (otarget.classList.contains('isOpen')) {
			otarget.classList.add('isActive')
		}
		el.innerHTML = '&#9776;'
	} else {
		target.classList.add('isActive');
		target.classList.add('isOpen');
		otarget.classList.remove('isActive');
		el.innerText = 'X';
	}
}

function closeNav(el) {
	if (el.id == 'toggleatkr')
		target = document.getElementById('atkrList');
	else
		target = document.getElementById('dfdrList');
	target.classList.remove('isOpen');
	target.classList.remove('isActive');
	el.innerHTML = '&#9776;';
}

function getSiblings(e) {
	let siblings = [];
	e = e.parentNode.firstChild;
	do {
		if (e.nodeName.toLowerCase() === 'div' && (e.classList.contains('accordion-header') || e.classList.contains('accordion-content'))) {
			siblings.push(e);
		}
	} while (e = e.nextSibling);
	return siblings;
}

function toggleAccordion(el) {
	if (el.classList.contains('isOpen')) {
		el.classList.remove('isOpen');
		el.nextElementSibling.classList.remove('isOpen');
		for (var child of el.nextElementSibling.children) {
			child.classList.remove('isOpen')
		}
	} else {
		// Close all other accodion siblings
		if (settings.autoClose)
			for (var sibling of getSiblings(el)) {
				sibling.classList.remove('isOpen');
			}
		el.classList.add('isOpen');
		el.nextElementSibling.classList.add('isOpen');
	}
}

function wahaLinks() {
	for (var wahaIcon of document.getElementsByClassName('linkImg')) {
		wahaIcon.addEventListener("click", function(e) {
			//stackoverflow fix for onlick in an onclick
			if (!e) var e = window.event;
			e.cancelBubble = true;
			if (e.stopPropagation) e.stopPropagation();
			window.open(e.composedPath()[0].getAttribute("data-link"), '_blank');
		});
	}
}

function weaponSelect() {
	for (var weaponElement of document.getElementsByClassName('weapon')) {
		let weapon = JSON.parse(weaponElement.getAttribute('data-profile'));
		weaponElement.addEventListener("click", (e) => {
			if (weapon.user.customName) ioList.attackerName.innerHTML = weapon.user.customName + "<br>"
			else ioList.attackerName.innerHTML = weapon.user.name + "<br>"
			if (weapon.customName) ioList.attackerName.innerHTML += weapon.customName + "<br>";
			else ioList.attackerName.innerHTML += weapon.name + "<br>";
			ioList.sim_atkr_mdls.value = weapon.amount;
			let weaponType = weapon.type.split(" ");
			if (weaponType[0] == 'Melee') {
				ioList.attackerName.innerHTML += `Melee`;
				if (settings.statIcons)
					ioList.attackerName.innerHTML += ` <img src="img/rules/weapons/types/Melee.svg" class="weaponTypeIcon">`;
				ioList.sim_atkr_a.value = weapon.user.statlines[0].A;
				ioList.sim_atkr_as.value = weapon.user.statlines[0].WS;
			} else {
				if (weaponType[0] == "Rapid") {
					weaponType[1] = weaponType[0] + " " + weaponType[1];
					weaponType.shift();
				}
				ioList.attackerName.innerHTML += `${weaponType[0]}`;
				if (settings.statIcons)
					ioList.attackerName.innerHTML += ` <img src="img/rules/weapons/types/${weaponType[0]}.svg" class="weaponTypeIcon">`;
				// Returns original string, dice, 'D', faces OR flat damage, modifier
				let weaponAtt = weaponType[1].match(/(\d)?(D)?(\d)[\+]?(\d)*/);
				if (weaponAtt[2]) {
					//There are dice
					ioList.sim_hit_attacks.checked = true;
					ioList.sim_hit_attacks_faces.value = weaponAtt[3];
					if (weaponAtt[1])
						//There are multiple dice
						ioList.sim_hit_attacks_dice.value = weaponAtt[1];
					if (weaponAtt[4])
						//There's a modifier
						ioList.sim_hit_attacks_mod.value = weaponAtt[4];
				} else {
					//There are not dice
					ioList.sim_hit_attacks.checked = false;
					ioList.sim_atkr_a.value = weaponAtt[3];
				}
				let weaponDam = weapon.d.match(/(\d)?(D)?(\d)[\+]?(\d)*/);
				if (weaponDam[2]) {
					//There are dice
					ioList.sim_damage_random.checked = true;
					ioList.sim_damage_random_faces.value = weaponDam[3];
					if (weaponDam[1])
						//There are multiple dice
						ioList.sim_damage_random_dice.value = weaponDam[1];
					if (weaponDam[4])
						//There's a modifier
						ioList.sim_damage_random_mod.value = weaponDam[4];
				} else {
					//There are not dice
					ioList.sim_damage_random.checked = false;
					ioList.sim_atkr_d.value = weapon.d;
				}
			}
			openTab('Attack Roll');
		});
	}
}

function pollIO() {
	// Get JS objects from all input/output
	for (var el of document.getElementsByClassName('io')) {
		// I wanted to make a object tree of all of the input categories
		// if (el.id.split('_').length > 1) {
		// 	const value = el;
		// 	var tempObject = {};
		// 	var container = tempObject;
		// 	el.id.split('_').map((k, i, values) => {
		// 		container = (container[k] = (i == values.length - 1 ? value : {}))
		// 	});
		// 	console.log(JSON.stringify(tempObject));
		// 	Object.assign(ioList, tempObject)
		// } else {
		// 	ioList[el.id] = el;
		// }
		ioList[el.id] = el;
	}
}

function setTrackers(emit) {
	let score = {};
	for (tracker_player of document.getElementsByClassName('vpbox')) {
		let ttltracker = tracker_player.getElementsByClassName('vptotal')[0]
		ttltracker.innerText = '';
		for (tracker of tracker_player.getElementsByClassName('vptracker')) {
			ttltracker.innerText = Number(ttltracker.innerText) + Number(tracker.value);
			if (!score[tracker.id.split('_')[0]]) {
				score[tracker.id.split('_')[0]] = {}
			}
			score[tracker.id.split('_')[0]][tracker.id.split('_')[1]] = Number(tracker.value);
		}
		score[tracker_player.id.split('_')[0]].ttl = Number(ttltracker.innerText);
		score[tracker_player.id.split('_')[0]].cp = Number(document.getElementById(tracker_player.id.split('_')[0] + '_cp').value);
	}
	if (emit) {
		if (gameCode) {
			socket.emit('updateScoreboard', {
				gameCode: gameCode,
				score: score
			});
		}
	}
}

function getTrackers(score) {
	for (tracker_player of document.getElementsByClassName('vpbox')) {
		document.getElementById(tracker_player.id.split('_')[0] + '_cp').value = Number(score[tracker_player.id.split('_')[0]].cp);
		for (tracker of tracker_player.getElementsByClassName('vptracker')) {
			tracker.value = Number(score[tracker.id.split('_')[0]][tracker.id.split('_')[1]]);
		}
	}
	setTrackers();
}

function makeUseTag(text, phase) {
	let thisPhase = currentPhase;
	if (phase) thisPhase = phase;
	if (thisPhase.length) {
		if (text.toLowerCase().includes(thisPhase.toLowerCase() + " phase")) {
			return true
		}
		for (searchPhrase of phaseList[thisPhase]) {
			if (text.toLowerCase().includes(searchPhrase)) {
				return true
			}
		}
	}
	return false
}

function findUseTags() {
	let units = document.getElementsByClassName('unit');
	for (var unit of units) {
		unit.classList.remove('useTag')
		let allAbils = unit.nextSibling.getElementsByClassName('tag');
		for (var abil of allAbils) {
			abil.classList.remove('useTag');
			// Grab all subfaction/variant stratagems if there is no phase selected
			if (abil.getAttribute('data-subfaction') && !currentPhase) {
				abil.classList.add('useTag');
				if (settings.autoOpen) {
					abil.classList.add('isOpen');
					abil.nextSibling.classList.add('isOpen');
				}
			}
		}
		// Grab all stratagems that have been marked for this phase
		let foundAbils = unit.nextSibling.getElementsByClassName(currentPhase);
		for (var abil of foundAbils) {
			abil.classList.add('useTag');
			unit.classList.add('useTag');
			if (settings.autoOpen) {
				abil.classList.add('isOpen');
				abil.nextSibling.classList.add('isOpen');
			}
		}
	}
}

function updatePhaseTags() {
	for (nestedPhase of document.getElementById('phaser').getElementsByClassName('phaseTag')) {
		nestedPhase.classList.remove('phaseActive');
		if (currentPhase == nestedPhase.innerText) {
			nestedPhase.classList.add('phaseActive');
			// currentPhase = '';
		}
	}
}

function sortBySlot(units) {
	let tempLists = {};
	let newOrder = [];
	let catchAll = [];
	let slotOrder = ['HQ', 'Troops', 'Elites', 'Fast Attack', 'Heavy Support', 'Dedicated Transport', 'Flyers', 'Lord of War', 'Fortification'];
	for (slot of slotOrder) {
		for (unit of units) {
			if (unit.slot == slot) {
				if (tempLists[slot]) {
					tempLists[slot].push(unit);
				} else {
					tempLists[slot] = [unit];
				}
			}
		}
	}
	for (slot of Object.keys(tempLists)) {
		tempLists[slot].sort(function(a, b) {
			var textA = a.name.toUpperCase();
			var textB = b.name.toUpperCase();
			return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		});
		newOrder = newOrder.concat(tempLists[slot]);
	}

	for (unit of units) {
		if (!slotOrder.includes(unit.slot)) {
			catchAll.push(unit);
		}
	}
	newOrder = newOrder.concat(catchAll);
	return newOrder;
}

function sortByProperty(units, property) {
	units.sort(function(a, b) {
		var nameA = a[property].toUpperCase();
		var nameB = b[property].toUpperCase();
		return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
	});
	return units;
}

function sortByCost(units, property) {
	units.sort(function(a, b) {
		var nameA = a.costs[property];
		var nameB = b.costs[property];
		return (nameA > nameB) ? -1 : (nameA < nameB) ? 1 : 0;
	});
	return units;
}

function changeKolor(stylesheetName) {
	document.getElementById("40kolor").setAttribute("href", 'css/40kolor_' + stylesheetName + '.css');
}

function tickle() {
	tickles++;
	if (tickles == 10) {
		document.getElementById('banner').style.color = '#FF0000';
		document.getElementById('banner').innerText = '四十カローラー';
		document.getElementById('subbanner').innerText = 'ウォーハンマー40k試合電卓';
	}
}

function customMarkdown(notesString) {
	let checkMatch;
	// Accordions
	// #[Header](Content)
	do {
		checkMatch = /#\[(.*?(?=\]))\]\((.*?(?=\)))\)/gs.exec(notesString);
		if (checkMatch != null) {
			let styler = '';
			let headerColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/.exec(checkMatch[1]);
			if (headerColor) styler = `style="background-color: ${headerColor[0]}"`;
			notesString = notesString.replaceAll(`#[${checkMatch[1]}](${checkMatch[2]})`, `<div ${styler} class="accordion-header tag mini ruleTag clickable">${((headerColor) ? checkMatch[1].replace(headerColor[0], '') : checkMatch[1])}</div><div class="accordion-content hide bg6 hlSome textSmall cCenter">${checkMatch[2]}</div>`);
		}
	} while (checkMatch != null);
	// CP costs
	// {0} - {9} or {-}
	do {
		checkMatch = /{(\d|-)}/g.exec(notesString);
		if (checkMatch != null) {
			let fileName = '';
			if (checkMatch[1] == '-')
				fileName = 'null';
			else
				fileName = checkMatch[1];
			notesString = notesString.replaceAll(`{${checkMatch[1]}}`, `<img src="img/icons/cp${fileName}.svg" style="margin: 0px; padding: 0px; width: 12px; height: 12px;">`);
		}
	} while (checkMatch != null);
	// Bold
	// **This is bold**
	notesString = notesString.replaceAll(/\*\*([^\*]*)\*\*/g, `<b>$1</b>`);
	// Italics
	// *This is italics*
	notesString = notesString.replaceAll(/\*([^\*]*)\*/g, `<i>$1</i>`);
	// Strikethrough
	// ~~This is Strikethrough~~
	notesString = notesString.replaceAll(/~~([^\*]*)~~/g, `<i>$1</i>`);
	// Tooltip color
	// [oRThis is tooltip text]This is the colored text[/o]
	notesString = notesString.replaceAll(/\[o([R|G|B])+(.*)\](.*)\[\/o\]/g, `<span class="o$1" title="$2">$3</span>`);
	// horizontal rules
	// ---
	// if (/^(-{3})$|^-/gm.exec(notesString)[1]) notesString = notesString.replaceAll(/^(-{3})$|^-/gm, `<hr>`);
	// Headers
	// # Header1 - ##### Header5
	do {
		checkMatch = /(#+)\s(.*)(\n|$)/g.exec(notesString);
		if (checkMatch != null)
			if (checkMatch[1].length <= 5)
				notesString = notesString.replaceAll(`${checkMatch[1]} ${checkMatch[2]}${checkMatch[3]}`, `<h${checkMatch[1].length}>${checkMatch[2]}</h${checkMatch[1].length}>`);
			else
				notesString = notesString.replaceAll(`${checkMatch[1]} ${checkMatch[2]}`, `${checkMatch[2]}`);
	} while (checkMatch != null);
	// img
	// ![Alt Text](image url)
	do {
		checkMatch = /\!\[(.*)\]\(((http)(?:s)?(\:\/\/).*)\)/g.exec(notesString);
		if (checkMatch != null) {
			notesString = notesString.replaceAll(`![${checkMatch[1]}](${checkMatch[2]})`, `<img src="${checkMatch[2]}" alt="${checkMatch[1]}">`);
		}
	} while (checkMatch != null);
	// link
	// [Link Name](Link url)
	do {
		checkMatch = /\[(.*)\]\(((http)(?:s)?(\:\/\/).*)\)/g.exec(notesString);
		if (checkMatch != null) {
			checkMatch[2].slice(0, -1);
			checkMatch[2].slice(1);
			notesString = notesString.replaceAll(`[${checkMatch[1]}](${checkMatch[2]})`, `<a href="${checkMatch[2]}">${checkMatch[1]}</a>`);
		}
	} while (checkMatch != null);
	// Dice emojis
	do {
		checkMatch = /\[(\d)\]/g.exec(notesString);
		if (checkMatch != null) {
			let diceList = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
			if ("123456".includes(checkMatch[1]))
				notesString = notesString.replaceAll(`[${checkMatch[1]}]`, `<span style="font-size:1.4em;">${diceList[Number(checkMatch[1]) - 1]}</span>`);
		}
	} while (checkMatch != null);
	// Line break
	notesString = notesString.replaceAll(/[\r\n|\r|\n]/g, `<br>`)
	return notesString;
}

/*
███████  ██████   ██████ ██   ██ ███████ ████████ ███████
██      ██    ██ ██      ██  ██  ██         ██    ██
███████ ██    ██ ██      █████   █████      ██    ███████
     ██ ██    ██ ██      ██  ██  ██         ██         ██
███████  ██████   ██████ ██   ██ ███████    ██    ███████
*/
const socket = io();

socket.on('score', message => {
	getTrackers(message);
});

/*
██ ███    ██ ██ ████████ ██  █████  ██      ██ ███████ ███████
██ ████   ██ ██    ██    ██ ██   ██ ██      ██    ███  ██
██ ██ ██  ██ ██    ██    ██ ███████ ██      ██   ███   █████
██ ██  ██ ██ ██    ██    ██ ██   ██ ██      ██  ███    ██
██ ██   ████ ██    ██    ██ ██   ██ ███████ ██ ███████ ███████
*/

function init(mode) {
	if (mode == 'techpriest') {
		buildAccordions();
	} else {

		// Needs to run first if it wants to be included in pollIO() or accordions
		listBuild();

		buildAccordions();

		// Add links to wahaIcons
		wahaLinks();

		// Find all of the input and output elements
		pollIO();

		// Make weapons clickable
		weaponSelect();

		// Set up vp trackers
		for (var tracker of document.getElementsByClassName('vptracker')) {
			tracker.onchange = function() {
				// This must be set here and on the spinnerUp() function
				setTrackers(true);
			}
		}

		findUseTags();

		// Initialize spinners
		for (spinner of document.getElementsByClassName('spinner')) {
			spinner.addEventListener("mousedown", spinnerDown);
			spinner.addEventListener("touchstart", spinnerDown);
		}
		document.body.addEventListener("mousemove", spinnerDrag);
		document.body.addEventListener("mouseup", spinnerUp);
		document.body.addEventListener("touchmove", spinnerDrag);
		document.body.addEventListener("touchend", spinnerUp);
		document.body.addEventListener("touchcancel", spinnerUp);
		// Initialize swiper
		document.body.addEventListener("mousedown", swiperDown);
		document.body.addEventListener("touchstart", swiperDown);
		document.body.addEventListener("mousemove", swiperDrag);
		document.body.addEventListener("mouseup", swiperUp);
		document.body.addEventListener("touchmove", swiperDrag);
		document.body.addEventListener("touchend", swiperUp);
		document.body.addEventListener("touchcancel", swiperUp);

		for (phaseBox of document.getElementById('phaser').getElementsByClassName('phaseTag')) {
			let thisPhase = phaseBox;
			thisPhase.addEventListener("click", function(e) {
				for (nestedPhase of document.getElementById('phaser').getElementsByClassName('phaseTag')) {
					nestedPhase.classList.remove('isActive');
				}
				if (currentPhase == thisPhase.innerText) {
					currentPhase = '';
				} else {
					currentPhase = thisPhase.innerText;
					thisPhase.classList.add('isActive');
				}
				findUseTags();
			});
		}

		// CLick on whole modifier to check the related box (hits/wounds/etc)
		// for (mod of document.getElementsByClassName('mod')) {
		// 	let checkBox = mod.getElementsByClassName('selectMod');
		// 	if (checkBox[0]) {
		// 		mod.addEventListener('click', function() {
		// 			checkBox[0].checked = !checkBox[0].checked;
		// 		});
		// 	}
		// }
	}

	if (forceData.length == 2) {
		if (forceData[0].force.gametype != forceData[1].force.gametype) {
			output(`<span class="oR" title="This is non-fatal. You can still use the app, but probably with limited functionality.">Warning: </span>Forces' game types do not match!`);
		}
	}

	changeKolor(['classico', 'greyknight', 'morphG', 'morphP', 'pitchblack', 'starkwhite'][Math.floor(Math.random() * 4)])
	// changeKolor('greyknight')

}

function reload() {
	// Needs to run first if it wants to be included in pollIO() or accordions
	listBuild();
	buildAccordions();
	// Add links to wahaIcons
	wahaLinks();
	// Make weapons clickable
	weaponSelect();
	findUseTags();
}


/*
██      ██ ███████ ████████     ██████  ██    ██ ██ ██      ██████
██      ██ ██         ██        ██   ██ ██    ██ ██ ██      ██   ██
██      ██ ███████    ██        ██████  ██    ██ ██ ██      ██   ██
██      ██      ██    ██        ██   ██ ██    ██ ██ ██      ██   ██
███████ ██ ███████    ██        ██████   ██████  ██ ███████ ██████
*/

function listBuild() {
	let appendList;
	for (var force of forceData) {
		if (force.force) {
			// Get and erase the list for this force
			let thisListIndex = forceData.indexOf(force);
			// force = force.force;
			let thisList = document.getElementsByClassName('listView')[thisListIndex];
			thisList.innerHTML = '';
			// Add force name
			appendList = document.createElement('h1');
			appendList.innerText = force.force.name;
			thisList.append(appendList);

			// Add any custom notes
			if (force.force.customNotes) thisList.innerHTML += `<h3 class='textSans'>${customMarkdown(force.force.customNotes)}</p>`

			let forceHeader = document.createElement('div');
			forceHeader.classList.add('accordion-header', 'bg0', 'banner');
			forceHeader.innerText = 'Force Details';
			thisList.append(forceHeader);
			let forceContent = document.createElement('div');
			forceContent.classList.add('accordion-content', 'bg4');
			thisList.append(forceContent);

			//Add game type
			if (force.force.gametype) {
				//remove margin from bottom of last thing appended
				appendList.style.marginBottom = '0px';
				//then start a new append item
				appendList = document.createElement('h3');
				appendList.innerText = force.force.gametype;
				forceContent.append(appendList);

				// Uncomment to return secondaries to listbuild
				/*
				if (force.force.secondaries.length) {
					let secondList = {}
					//find all unique
					for (var secondCat of force.force.secondaries.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index)) {
						// Sort by category
						for (var second of force.force.secondaries) {
							if (secondCat == second.category) {
								if (secondList[secondCat])
								secondList[secondCat].push(second);
								else secondList[secondCat] = [second];
							}
						}
					}
					//
					for (var secondCat of Object.keys(secondList)) {
						appendList = document.createElement('h3');
						appendList.innerText = secondCat;
						thisList.append(appendList);
						appendList = document.createElement('select');
						thisList.append(appendList);
						appendOption = document.createElement('option');
						appendOption.innerText = "[ None ]";
						appendOption.value = undefined;
						appendList.append(appendOption);
						for (var second of secondList[secondCat]) {
							appendOption = document.createElement('option');
							let secondParse = second.name;
							let secondName = '';
							secondParse = secondParse.split(" ");
							for (let i = 0; i < secondParse.length; i++) {
								secondParse[i] = secondParse[i].toLowerCase();
								secondName += secondParse[i][0].toUpperCase() + secondParse[i].substr(1) + " ";
							}
							appendOption.innerText = secondName;
							appendOption.value = second.name
							appendList.append(appendOption);
						}
					}
				}
				*/
			}
			// Add costs
			appendList = document.createElement('div');
			appendList.classList.add('statRow', 'noBorder');
			for (var cost of Object.keys(force.force.costs)) {
				appendList.innerHTML += `
                <div class="statTag" title="">
                  <label for="${((thisListIndex) ? 'dfdr' : 'atkr')}_${cost}" class="bg4">${cost.toUpperCase()}</label>
                  <span class="bg7" id="${((thisListIndex) ? 'dfdr' : 'atkr')}_${cost}">${force.force.costs[cost]}</span>
                </div>
                `
			}
			forceContent.append(appendList);

			/*
			██████  ███████ ████████  █████   ██████ ██   ██ ███    ███ ███████ ███    ██ ████████
			██   ██ ██         ██    ██   ██ ██      ██   ██ ████  ████ ██      ████   ██    ██
			██   ██ █████      ██    ███████ ██      ███████ ██ ████ ██ █████   ██ ██  ██    ██
			██   ██ ██         ██    ██   ██ ██      ██   ██ ██  ██  ██ ██      ██  ██ ██    ██
			██████  ███████    ██    ██   ██  ██████ ██   ██ ██      ██ ███████ ██   ████    ██
			*/


			for (var detachment of force.force.detachments) {
				if (settings.forceSort == 'slot') detachment.units = sortBySlot(detachment.units);
				else if (['pts', 'pl', 'cp'].includes(settings.forceSort)) detachment.units = sortByCost(detachment.units, settings.forceSort);
				else if (settings.forceSort) detachment.units = sortByProperty(detachment.units, settings.forceSort);
				let newBox = document.createElement('div');
				newBox.classList.add('factionBox');

				// Add detachment faction image
				appendList = document.createElement('img');
				appendList.classList.add('factionIcon');
				if (detachment.factionIcon)
					appendList.src = detachment.factionIcon;
				// If it couldn't load the image
				newBox.append(appendList);
				// Add detachment name
				appendList = document.createElement('h3');
				appendList.innerText = ((detachment.customName) ? detachment.customName : detachment.name);
				newBox.append(appendList);
				// Add detachment faction
				appendList = document.createElement('h3');
				if (detachment.factionLink) appendList.innerHTML += `<a href="${detachment.factionLink}" target="_blank">${detachment.faction}</a>`;
				else appendList.innerText = detachment.faction;
				newBox.append(appendList);
				// Add detachment subfaction
				if (detachment.subfaction) {
					appendList = document.createElement('h3');
					appendList.innerHTML += `${detachment.subfaction}`;
					newBox.append(appendList);
				}
				// Add detachment variant
				if (detachment.variant) {
					appendList = document.createElement('h3');
					appendList.innerHTML += `${detachment.variant}`;
					newBox.append(appendList);
				}

				thisList.append(newBox);

				let unitHeader = document.createElement('div');
				unitHeader.classList.add('accordion-header', 'bg0', 'banner');
				unitHeader.innerText = 'Detachment Rules';
				thisList.append(unitHeader);
				let unitContent = document.createElement('div');
				unitContent.classList.add('accordion-content', 'bg4');
				for (var rule of detachment.rules) {
					let newrule = document.createElement('div');
					newrule.innerText = rule.name;
					newrule.classList.add('accordion-header', 'tag', 'mini', 'ruleTag', 'clickable');
					unitContent.append(newrule);
					let newruleContent = document.createElement('div');
					newruleContent.classList.add('accordion-content', 'hide', 'bg6', 'hlSome', 'textSmall', 'cLeft', 'textSans');
					newruleContent.innerHTML += customMarkdown(rule.desc);
					for (phase of Object.keys(phaseList)) {
						if (makeUseTag(rule.desc, phase)) newrule.classList.add(phase);
					}
					unitContent.append(newruleContent);
				}
				thisList.append(unitContent);
				// Start listing units
				/*
				██    ██ ███    ██ ██ ████████
				██    ██ ████   ██ ██    ██
				██    ██ ██ ██  ██ ██    ██
				██    ██ ██  ██ ██ ██    ██
				 ██████  ██   ████ ██    ██
				*/

				for (var unit of detachment.units) {
					if (!settings.slotIcons && settings.forceSort == 'slot') {
						// If no icons, see if this unit is a different slot and insert a header above if so
						if (detachment.units.indexOf(unit)) {
							if (detachment.units[detachment.units.indexOf(unit) - 1].slot != unit.slot)
								thisList.innerHTML += `<h3>${unit.slot}</h3>`
						} else {
							thisList.innerHTML += `<h3>${unit.slot}</h3>`
						}
					}
					unitHeader = document.createElement('div');
					unitHeader.classList.add('accordion-header', 'bg0', 'banner', 'unit');
					if (unit.customNotes) {
						let headerColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/.exec(unit.customNotes);
						if (headerColor) {
							unit.customNotes = unit.customNotes.replace(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g, '');
							unit.marker = headerColor[0]
						}
					}
					if (unit.marker) {
						// unitHeader.style.background = `linear-gradient(#000000 0%, #000000 80%, ${unit.marker} 100%)`;
						unitHeader.style.borderBottomWidth = `3px`;
						unitHeader.style.borderBottomColor = unit.marker;
						unitHeader.style.color = unit.marker;
						// This was supposed to match the loaded CSS, but cannot read because it's not in the DOM yet
						// let fadeColor = window.getComputedStyle(unitHeader);
						// console.log(fadeColor);
						// fadeColor = fadeColor.getPropertyValue("background-color");
						// console.log(fadeColor);
						// unitHeader.style.background = `linear-gradient(${fadeColor}, ${headerColor[0]})`;
					}
					// Role icon on left side
					if (settings.slotIcons && unitRoles.includes(unit.slot.replaceAll(' ', '').toLowerCase())) {
						unitHeader.innerHTML += `
						<img src="img/roles/${unit.slot.replaceAll(' ', '').toLowerCase()}.png" class="roleImg">
						`;
					}
					// Unit name
					let tempName = ((unit.customName) ? unit.customName : unit.name)
					if (tempName.length >= 22) tempName = tempName.substring(0, 20) + " ...";
					unitHeader.innerHTML += tempName;
					// Warlord icon on right side
					if (settings.slotIcons && unit.warlord) unitHeader.innerHTML += `<img src="img/roles/warlord.png" class="warlordImg">`;
					let unitContent = document.createElement('div');
					unitContent.classList.add('accordion-content', 'bg4', 'unitBox');
					if (unit.customNotes) unitContent.innerHTML += `<p class='textSmall unitNotes textSans'>${customMarkdown(unit.customNotes)}</p>`
					if (settings.forceSort == 'pts' || settings.forceSort == 'pl') {
						// Add costs
						let costDiv = document.createElement('div');
						costDiv.classList.add('statRow', 'noBorder');
						for (var cost of Object.keys(unit.costs)) {
							costDiv.innerHTML += `
			                <div class="statTag" title="">
			                  <label for="${((thisListIndex) ? 'dfdr' : 'atkr')}_${cost}" class="bg4">${cost.toUpperCase()}</label>
			                  <span class="bg7" id="${((thisListIndex) ? 'dfdr' : 'atkr')}_${cost}">${unit.costs[cost]}</span>
			                </div>
			                `
						}
						unitContent.append(costDiv);
					}
					/*
					███    ███  ██████  ██████  ███████ ██      ███████
					████  ████ ██    ██ ██   ██ ██      ██      ██
					██ ████ ██ ██    ██ ██   ██ █████   ██      ███████
					██  ██  ██ ██    ██ ██   ██ ██      ██           ██
					██      ██  ██████  ██████  ███████ ███████ ███████
					*/
					// Start listing models in this unit
					for (var model of unit.models) {
						let appendModel = document.createElement('div');
						appendModel.classList.add('accordion-header', 'bg1', 'banner');
						let tempName = ((model.customName) ? model.customName : model.name);
						if (tempName.length >= 22) tempName = tempName.substring(0, 22) + "...";
						appendModel.innerHTML += tempName;
						if (model.amount)
							appendModel.innerHTML += " x " + model.amount;
						if (model.customNotes) appendModel.innerHTML += `<p class='textSmall'>${model.customNotes[0]}</p>`;
						// Statline in header
						for (var statline of model.statlines) {
							let modelStatRow = document.createElement('div');
							modelStatRow.classList.add('statRow', 'noBorder');
							for (var stat of Object.keys(statline)) {
								let modelStatTag = document.createElement('div');
								modelStatTag.classList.add('statTag', 'naked');
								let modelStatLbl = document.createElement('label');
								modelStatLbl.classList.add('bg3', 'mini', 'naked', 'growy');
								if (settings.statIcons)
									modelStatLbl.innerHTML += `<img src="img/rules/statlines/${stat}.svg" class="modelStatIcon" title="${stat.toUpperCase()}">`;
								else
									modelStatLbl.innerHTML += stat;
								modelStatTag.append(modelStatLbl);
								let modelStatVl = document.createElement('span');
								modelStatVl.classList.add('bg5', 'mini', 'naked');
								modelStatVl.innerHTML += statline[stat]
								modelStatTag.append(modelStatVl);
								modelStatRow.append(modelStatTag);
							}
							appendModel.append(modelStatRow);
						}
						let modelContent = document.createElement('div');
						modelContent.classList.add('accordion-content', 'bg2', 'cCenter');
						/*
						██     ██ ███████  █████  ██████   ██████  ███    ██ ███████
						██     ██ ██      ██   ██ ██   ██ ██    ██ ████   ██ ██
						██  █  ██ █████   ███████ ██████  ██    ██ ██ ██  ██ ███████
						██ ███ ██ ██      ██   ██ ██      ██    ██ ██  ██ ██      ██
						 ███ ███  ███████ ██   ██ ██       ██████  ██   ████ ███████
						*/
						for (var weapon of model.weapons) {
							let weaponDiv = document.createElement('div');
							weaponDiv.classList.add('weaponBox', 'wide', 'bg6');
							let statRow = document.createElement('div');
							statRow.classList.add('statRow', 'noBorder');
							let nameDiv = document.createElement('div');
							nameDiv.setAttribute(`data-profile`, JSON.stringify({
								user: {
									name: model.name,
									customName: ((model.customName) ? model.customName : ''),
									statlines: model.statlines
								},
								...weapon
							}));
							nameDiv.classList.add('tag', 'wide', 'bg3', 'weapon', 'clickable');
							let abilTag = document.createElement('div');
							abilTag.classList.add('statTag')
							nameDiv.innerHTML += ((weapon.customName) ? weapon.customName : weapon.name);
							if (weapon.amount) nameDiv.innerHTML += ` x ${weapon.amount}`;
							weaponDiv.append(nameDiv);
							if (weapon.customNotes) weaponDiv.innerHTML += `<p class='textSmall textSans'>${customMarkdown(weapon.customNotes)}</p>`
							for (var stat of Object.keys(weapon)) {
								if (stat == 'abilities') {
									// THIS USED TO MAKE A BOX BUT THE UI GOT MESSY
									// let abilLbl = document.createElement('label');
									// abilLbl.classList.add('bg3', 'wide', 'flat', 'grow');
									// abilLbl.innerHTML += stat;
									// let abilVl = document.createElement('span');
									// abilVl.classList.add('bg7', 'wide', 'flat', 'grow');
									// abilVl.innerHTML += weapon[stat];
									// abilTag.append(abilLbl);
									// abilTag.append(abilVl);
								} else if (['range', 'type', 's', 'ap', 'd'].includes(stat)) {
									let statTag = document.createElement('div');
									statTag.classList.add('statTag', 'naked');
									let statLbl = document.createElement('label');
									statLbl.classList.add('bg3', 'flat', 'naked', 'grow');
									if (settings.statIcons)
										statLbl.innerHTML += `<img src="img/rules/weapons/stats/${stat}.svg" class="weaponStatIcon"  title="${stat.toUpperCase()}">`;
									else
										statLbl.innerHTML += stat.toUpperCase();
									let statVl = document.createElement('span');
									statVl.classList.add('bg7', 'flat', 'naked', 'grow');
									statVl.innerHTML += weapon[stat];
									statTag.append(statLbl);
									statTag.append(statVl);
									statRow.append(statTag);
								}
							}

							weaponDiv.append(statRow);
							if (weapon.abilities && weapon.abilities != '-') {
								// THIS WAS FOR THE UI BOX ABOVE
								// weaponDiv.append(abilTag);
								let abilText = weapon.abilities;
								if (settings.statIcons) {
									// THis needs a better way of handling special rules
									if (abilText.includes('Blast')) {
										abilText = abilText.replaceAll(/Blast[.]?/g, '');
										weaponDiv.innerHTML += `<img src='img/icons/weapon_abils/blast.png' title='Blast Weapons: When targetting outside of Engagement Range: minimum three attacks against units with 6+ models, and always make maximum number of attacks against units with 11+ models.' class='weaponIcon_abil'>`;
									}
									if (abilText.includes('Plague Weapon')) {
										abilText = abilText.replaceAll(/Plague Weapon[.]?/g, '').trim();
										weaponDiv.innerHTML += `<img src='img/icons/weapon_abils/plague.png' title='Plague Weapon: Each time an attack is made with this weapon, re-roll a wound roll of 1.' class='weaponIcon_abil'>`;
									}
									if (abilText.includes('Each time an attack is made with this weapon, that attack automatically hits the target')) {
										abilText = abilText.replaceAll(/Each time an attack is made with this weapon, that attack automatically hits the target[.]?/, '').trim();
										weaponDiv.innerHTML += `<img src='img/icons/weapon_abils/flamer.png' title='Flamer: Each time an attack is made with this weapon, that attack automatically hits the target.' class='weaponIcon_abil'>`;
									}
									if (abilText.includes('Each time an attack is made with this weapon profile, make')) {
										let multi = /Each time an attack is made with this weapon profile, make (\d)/g.exec(abilText);
										abilText = abilText.replaceAll(/Each time an attack is made with this weapon profile, make (\d) hit rolls instead of 1./g, '').trim();
										weaponDiv.innerHTML += `<img src='img/icons/weapon_abils/Ax${multi[1]}.svg' title='Multi-Attack ${multi[1]}: Each time an attack is made with this weapon profile, make ${multi[1]} hit rolls instead of 1.' class='weaponIcon_abil'>`;
									}
								}
								weaponDiv.innerHTML += `<p class='textSmall textSans'>${abilText}</p>`;
							}
							modelContent.append(weaponDiv);
						}
						unitContent.append(appendModel);
						unitContent.append(modelContent);
					}

					/*
					██   ██ ███████ ██    ██ ██     ██  ██████  ██████  ██████  ███████
					██  ██  ██       ██  ██  ██     ██ ██    ██ ██   ██ ██   ██ ██
					█████   █████     ████   ██  █  ██ ██    ██ ██████  ██   ██ ███████
					██  ██  ██         ██    ██ ███ ██ ██    ██ ██   ██ ██   ██      ██
					██   ██ ███████    ██     ███ ███   ██████  ██   ██ ██████  ███████
					*/
					// unitContent.innerHTML += `<h2>Keywords</h2>`;
					if (unit.warlord) {
						let newKeyword = document.createElement('div');
						newKeyword.classList.add('tag', 'mini', 'bg3');
						newKeyword.innerHTML = `Warlord`;
						unitContent.append(newKeyword)
					}
					for (var keyword of unit.keywords) {
						let newKeyword = document.createElement('div');
						newKeyword.classList.add('tag', 'mini', 'bg7');
						if (keyword == 'core') {
							newKeyword.classList.remove('bg7');
							newKeyword.classList.add('bg3');
						}
						for (var word of keyword.split(" ")) {
							newKeyword.innerHTML += word.charAt(0).toUpperCase() + word.slice(1) + " ";
						}
						unitContent.append(newKeyword)
					}
					/*
					███████ ██████  ███████ ██      ██      ███████
					██      ██   ██ ██      ██      ██      ██
					███████ ██████  █████   ██      ██      ███████
					     ██ ██      ██      ██      ██           ██
					███████ ██      ███████ ███████ ███████ ███████
					*/
					// unitContent.innerHTML += `<h2>Spells</h2>`;
					for (var spell of unit.spells) {
						let newSpell = document.createElement('div');
						newSpell.classList.add('accordion-header', 'tag', 'mini', 'spellTag', 'clickable');
						newSpell.innerHTML += ((spell.customName) ? spell.customName : spell.name)
						unitContent.append(newSpell)
						let newSpellContent = document.createElement('div');
						newSpellContent.classList.add('accordion-content', 'hide', 'bg6', 'hlSome');
						if (spell.customNotes) newSpellContent.innerHTML += `<p class='textSmall textSans'>${customMarkdown(spell.customNotes)}</p>`
						newSpellContent.innerHTML += `
							<div class="statRow noBorder">
							<div class="statTag">
							<label class="bg3 textSmall">Warp Charge</label>
							<span class="bg7 textSmall">${spell.warpcharge}</span>
							</div>
							<div class="statTag">
							<label class="bg3 textSmall">Range</label>
							<span class="bg7 textSmall">${spell.range}</span>
							</div>
							</div>
							<div class="textSmall cLeft textSans">${spell.details.replaceAll(currentPhase + " phase", `<span class="oR" title="${currentPhase}">${currentPhase} phase</span>`)}</div>`
						for (phase of Object.keys(phaseList)) {
							if (makeUseTag(spell.details, phase)) newSpell.classList.add(phase);
						}
						unitContent.append(newSpellContent)
					}
					/*
					██████  ██    ██ ██      ███████ ███████
					██   ██ ██    ██ ██      ██      ██
					██████  ██    ██ ██      █████   ███████
					██   ██ ██    ██ ██      ██           ██
					██   ██  ██████  ███████ ███████ ███████
					*/
					for (var rule of unit.rules) {
						let newRule = document.createElement('div');
						newRule.classList.add('accordion-header', 'tag', 'mini', 'ruleTag', 'clickable');
						newRule.innerHTML += ((rule.customName) ? rule.customName : rule.name)
						unitContent.append(newRule)
						let newRuleContent = document.createElement('div');
						newRuleContent.classList.add('accordion-content', 'hide', 'bg6', 'hlSome');
						if (rule.name == 'Explodes') {
							newRule.classList.add('permaUse');
							newRuleContent.innerHTML += `
							<div class="textSmall cLeft textSans">${rule.desc.replaceAll(currentPhase + " phase", `<span class="oR" title="${currentPhase}">${currentPhase} phase</span>`)}</div>
							<div class="statRow noBorder">
							<div class="statTag">
							<label class="bg3 textSmall">Roll</label>
							<span class="bg7 textSmall">${rule.roll}</span>
							</div>
							<div class="statTag">
							<label class="bg3 textSmall">Distance</label>
							<span class="bg7 textSmall">${rule.distance}</span>
							</div>
							<div class="statTag">
							<label class="bg3 textSmall">Damage</label>
							<span class="bg7 textSmall">${rule.damage}</span>
							</div>
							</div>`
						} else if (rule.name == 'Psyker') {
							newRule.classList.remove('ruleTag');
							newRule.classList.add('spellTag');
							newRuleContent.innerHTML += `
								<div class="statRow noBorder">
								<div class="statTag">
								<label class="bg3 textSmall">Cast</label>
								<span class="bg7 textSmall">${rule.cast}</span>
								</div>
								<div class="statTag">
								<label class="bg3 textSmall">Deny</label>
								<span class="bg7 textSmall">${rule.deny}</span>
								</div>
								</div>
								<div class="textSmall cCenter textSans">${rule.desc}</div>`
						} else {
							newRuleContent.innerHTML += `<div class="textSmall cLeft textSans">${((rule.customNotes) ? customMarkdown(rule.customNotes) : '')}<br>${rule.desc.replaceAll(currentPhase + " phase", `<span class="oR" title="${currentPhase}">${currentPhase} phase</span>`)}</div>`
						}
						for (phase of Object.keys(phaseList)) {
							if (makeUseTag(rule.desc, phase)) newRule.classList.add(phase);
						}
						unitContent.append(newRuleContent)
					}
					/*
					███████ ████████ ██████   █████  ████████  █████   ██████  ███████ ███    ███ ███████
					██         ██    ██   ██ ██   ██    ██    ██   ██ ██       ██      ████  ████ ██
					███████    ██    ██████  ███████    ██    ███████ ██   ███ █████   ██ ████ ██ ███████
					     ██    ██    ██   ██ ██   ██    ██    ██   ██ ██    ██ ██      ██  ██  ██      ██
					███████    ██    ██   ██ ██   ██    ██    ██   ██  ██████  ███████ ██      ██ ███████
					*/
					if (settings.stratagems) {
						for (var stratagem of unit.stratagems) {
							// Filter by faction, subfaction, and army of renown / variant
							if ((stratagem.type != 'Requisition') && (detachment.subfaction.length == 0 || detachment.subfaction == stratagem.subfaction || detachment.faction == stratagem.subfaction || detachment.variant == stratagem.subfaction)) {
								let newStratagem = document.createElement('div');
								if (detachment.faction != stratagem.subfaction)
									if (detachment.subfaction)
										newStratagem.setAttribute(`data-subfaction`, detachment.subfaction);
								newStratagem.classList.add('accordion-header', 'tag', 'mini', 'stratTag', 'clickable');
								let fileName = '';
								if ("0123456789".includes(stratagem.cp_cost)) fileName = stratagem.cp_cost;
								else fileName = 'null';
								// Startagem name from all aaps to first letter caps
								let stratParse = stratagem.name;
								let stratName = '';
								stratParse = stratParse.split(" ");
								for (let i = 0; i < stratParse.length; i++) {
									stratParse[i] = stratParse[i].toLowerCase();
									stratName += stratParse[i][0].toUpperCase() + stratParse[i].substr(1) + " ";
								}
								stratName = stratName.trim();
								newStratagem.innerHTML += `<img src="img/icons/cp${fileName}.svg" style="margin: 0px; padding: 0px; width: 12px; height: 12px;"> ${stratName}`;
								unitContent.append(newStratagem);
								let newStratagemContent = document.createElement('div');
								newStratagemContent.classList.add('accordion-content', 'hide', 'bg6', 'hlSome');
								newStratagemContent.innerHTML += `
								<p class="textSmall textSans">${stratagem.subfaction} - ${stratagem.type}</p>
		            <p class="textSmall cLeft textSans">${stratagem.description}</p>
		          	`;
								for (phase of Object.keys(phaseList)) {
									if (makeUseTag(stratagem.description, phase)) newStratagem.classList.add(phase);
								}
								unitContent.append(newStratagemContent);
							}
						}
					}
					let searchBox = document.createElement('div')
					// Wahapedia link
					if (unit.waha) {
						if (unit.waha.link) {
							let wahaIcon = document.createElement('img')
							wahaIcon.classList.add('linkImg');
							wahaIcon.setAttribute("title", `View Datasheet on Wahapedia`);
							wahaIcon.setAttribute("data-link", unit.waha.link);
							wahaIcon.src = 'https://wahapedia.ru/favicon.png';
							searchBox.appendChild(wahaIcon);
						}
					}
					// Pic Search
					let picSearch = document.createElement('img')
					picSearch.classList.add('linkImg');
					picSearch.setAttribute("title", `Search for images on Google`);
					picSearch.setAttribute("data-link", `https://www.google.com/search?tbm=isch&q=Warhammer%2040000%20${unit.name}%20miniature`);
					picSearch.src = 'img/icons/picsearch.png';
					searchBox.appendChild(picSearch);
					// Fandom search
					let fandomSearch = document.createElement('img')
					fandomSearch.classList.add('linkImg');
					fandomSearch.setAttribute("title", `Search for lore on Fandom`);
					fandomSearch.setAttribute("data-link", `https://warhammer40k.fandom.com/wiki/Special:Search?scope=internal&query=${unit.name}`);
					fandomSearch.src = 'img/icons/fandom.ico';
					searchBox.appendChild(fandomSearch);
					// GW Search
					let gwsearch = document.createElement('img')
					gwsearch.classList.add('linkImg');
					gwsearch.setAttribute("title", `Search in Games-Workshop catalogue`);
					gwsearch.setAttribute("data-link", `https://www.games-workshop.com/en-US/searchResults?_dyncharset=UTF-8&_dynSessConf=-5255390880923486912&qty=&sorting=&view=&Ntt=${unit.name}`);
					gwsearch.src = 'img/icons/gw.ico';
					searchBox.appendChild(gwsearch);
					// eBay search
					let ebaySearch = document.createElement('img')
					ebaySearch.classList.add('linkImg');
					ebaySearch.setAttribute("title", `Search on eBay`);
					ebaySearch.setAttribute("data-link", `https://www.ebay.com/sch/i.html?_nkw=40k+${unit.name}`);
					ebaySearch.src = 'img/icons/ebay.ico';
					searchBox.appendChild(ebaySearch);
					// Put it all in the list
					unitContent.appendChild(searchBox);
					thisList.append(unitHeader);
					thisList.append(unitContent);
				}
			}
			let downloadKFON = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(force.force));
			thisList.innerHTML += `
			<hr>
			<div class="accordion-header bg0 banner">Force Settings</div>
			<div class="accordion-content bg5 feedbackwrapper">
			<h2>Sort Units:</h2>
			Role<input type="radio" name="sortBy${forceData.indexOf(force)}" onchange="settings.forceSort = this.value; reload();" value="slot"${((settings.forceSort == 'slot') ? ' checked' : '')}>
			Marker<input type="radio" name="sortBy${forceData.indexOf(force)}" onchange="settings.forceSort = this.value; reload();" value="marker"${((settings.forceSort == 'marker') ? ' checked' : '')}>
			Name<input type="radio" name="sortBy${forceData.indexOf(force)}" onchange="settings.forceSort = this.value; reload();" value="name"${((settings.forceSort == 'name') ? ' checked' : '')}>
			<br>
			Points<input type="radio" name="sortBy${forceData.indexOf(force)}" onchange="settings.forceSort = this.value; reload();" value="pts"${((settings.forceSort == 'pts') ? ' checked' : '')}>
			Power<input type="radio" name="sortBy${forceData.indexOf(force)}" onchange="settings.forceSort = this.value; reload();" value="pl"${((settings.forceSort == 'pl') ? ' checked' : '')}>
			<hr>
			<h2>Import</h2>
			<form action="/upload" enctype="multipart/form-data" method="post">
			${((thisListIndex) ? '<label for="dfdr_file">Defender File</label><input type="file" class="fileSpot fileWidget bg7" name="dfdr_file" id="dfdr_file" accept="rosz"><br>' : '<label for="atkr_file">Attacker File</label><input type="file" class="fileSpot fileWidget bg7" name="atkr_file" id="atkr_file" accept="rosz"><br>')}
			<input type="hidden" name="gameCode" id="gameCode" value="${gameCode}">
			<input type="submit" value="Upload BattleScribe Roster" class="fileBtn fileWidget">
			<!-- <input type="button" value="Upload BattleScribe Rosters" class="fileBtn" onclick="uploadArmies()"> -->
			<hr>
			<h2>Export</h2>
			<button type="button" class="cCenter" onclick="window.location='uploads/${force.filename}'">Download .rosz</button>
			<a href="${downloadKFON}" download="${force.force.name}.kfon"><button type="button" class="cCenter"">Download .kfon</button></a>
			</form>
			</div>`;
		}
	}
}
