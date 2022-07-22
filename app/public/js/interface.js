var forceData;
var ioList = {};
var currentPhase = '';
var tickles = 0;
var gameType = 'matched'
var dice = ['🎲', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅']
var settings = {
	autoOpen: false
}
var phaseList = {
	Pregame: ['during deployment', 'at the start of the first battle round', 'Declare Reserves and Transports'],
	Command: [],
	Movement: [`advance roll`, `advance`],
	Psychic: [`psychic test`, `manifest`, `deny the witch`],
	Shooting: [`an attack`, `a ranged attack`, 'shooting'],
	Charge: [`charge roll`, `heroic intervention`, 'charge'],
	Fight: [`an attack`, `a melee attack`, `fight`],
	Morale: [`morale test`, `leadership`, `combat attrition test`]
}
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
]

/*
████████  ██████  ██    ██  ██████ ██   ██      ██████  ██████  ███    ██ ████████ ██████   ██████  ██      ███████
   ██    ██    ██ ██    ██ ██      ██   ██     ██      ██    ██ ████   ██    ██    ██   ██ ██    ██ ██      ██
   ██    ██    ██ ██    ██ ██      ███████     ██      ██    ██ ██ ██  ██    ██    ██████  ██    ██ ██      ███████
   ██    ██    ██ ██    ██ ██      ██   ██     ██      ██    ██ ██  ██ ██    ██    ██   ██ ██    ██ ██           ██
   ██     ██████   ██████   ██████ ██   ██      ██████  ██████  ██   ████    ██    ██   ██  ██████  ███████ ███████
*/


var dragTarget;
var startValue;
var startPos;
var spinSpeed = 0.05;
var swipeStartPos;
var swiping;

function spinnerDown(e) {
	dragTarget = e.currentTarget
	startValue = Number(dragTarget.value)
	startPos = Number(e.clientY || e.targetTouches[0].pageY)
}

function spinnerUp(e) {
	updateTrackers();
	dragTarget = null;
}

function spinnerDrag(e) {
	if (dragTarget) {
		let drag = e.clientY || e.targetTouches[0].pageY;
		dragTarget.value = startValue - Math.floor((drag - startPos) * spinSpeed);
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

function output(message) {
	for (var header of document.getElementsByClassName('accordion-header')) {
		// If it's open, close it
		if (header.classList.contains('isOpen'))
			toggleAccordion(header)
		// If it's the Output header, open it back up
		if (header.innerText == 'Output')
			toggleAccordion(header)
		ioList.output.innerHTML = message;
	}
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
		el.innerHTML = "&#9776;"
	} else {
		target.classList.add('isActive');
		target.classList.add('isOpen');
		otarget.classList.remove('isActive');
		el.innerText = 'X';
	}
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
			window.open(e.path[0].getAttribute("data-link"), '_blank');
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

function updateTrackers() {
	for (tracker_player of document.getElementsByClassName('vpbox')) {
		let ttltracker = tracker_player.getElementsByClassName('vptotal')[0]
		ttltracker.innerText = '';
		for (tracker of tracker_player.getElementsByClassName('vptracker')) {
			ttltracker.innerText = Number(ttltracker.innerText) + Number(tracker.value);
		}
	}
	if (gameCode) {
		socket.emit('updateScoreboard', {
			gameCode: gameCode,
			score: 0
		});
	}
}

function makeUseTag(text, phase) {
	let thisPhase = currentPhase;
	if (phase) thisPhase = phase;
	if (thisPhase.length) {
		if (text.includes(thisPhase + " phase")) {
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

function tickle() {
	tickles++;
	if (tickles == 10) {
		document.getElementById('banner').style.color = '#FF0000';
		document.getElementById('banner').innerText = '四十カローラー';
		document.getElementById('subbanner').innerText = 'ウォーハンマー40k試合電卓';
	}
}

/*
███████  ██████   ██████ ██   ██ ███████ ████████ ███████
██      ██    ██ ██      ██  ██  ██         ██    ██
███████ ██    ██ ██      █████   █████      ██    ███████
     ██ ██    ██ ██      ██  ██  ██         ██         ██
███████  ██████   ██████ ██   ██ ███████    ██    ███████
*/

// socket.on('message', message => {
// 	console.log(message);
// })

/*
██ ███    ██ ██ ████████ ██  █████  ██      ██ ███████ ███████
██ ████   ██ ██    ██    ██ ██   ██ ██      ██    ███  ██
██ ██ ██  ██ ██    ██    ██ ███████ ██      ██   ███   █████
██ ██  ██ ██ ██    ██    ██ ██   ██ ██      ██  ███    ██
██ ██   ████ ██    ██    ██ ██   ██ ███████ ██ ███████ ███████
*/

function init() {

	// Needs to run first if it wants to be included in pollIO() or accordions
	listBuild();

	buildAccordions();

	// Add links to wahaIcons
	wahaLinks();

	pollIO();

	// Set up vp trackers
	for (var tracker of document.getElementsByClassName('vptracker')) {
		tracker.onchange = function() {
			updateTrackers();
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
		console.log(force);
		if (force.force) {
			// Get and erase the list for this force
			let thisListIndex = forceData.indexOf(force);
			force = force.force;
			let thisList = document.getElementsByClassName('listView')[thisListIndex];
			thisList.innerHTML = '';
			// Add force name
			appendList = document.createElement('h1');
			appendList.innerText = force.name;
			thisList.append(appendList);
			if (force.customNotes) thisList.innerHTML += `<h3 class='textSmall'>${force.customNotes.replace(/\n/g, "<br />")}</p>`
			// Add costs
			appendList = document.createElement('div');
			appendList.classList.add('statRow', 'noBorder');
			for (var cost of Object.keys(force.costs)) {
				appendList.innerHTML += `
                <div class="statTag" title="">
                  <label for="${((thisListIndex) ? 'dfdr' : 'atkr')}_${cost}" class="bg4">${cost}</label>
                  <span class="bg7" id="${((thisListIndex) ? 'dfdr' : 'atkr')}_${cost}">${force.costs[cost]}</span>
                </div>
                `
			}
			thisList.append(appendList);
			/*
			██████  ███████ ████████  █████   ██████ ██   ██ ███    ███ ███████ ███    ██ ████████
			██   ██ ██         ██    ██   ██ ██      ██   ██ ████  ████ ██      ████   ██    ██
			██   ██ █████      ██    ███████ ██      ███████ ██ ████ ██ █████   ██ ██  ██    ██
			██   ██ ██         ██    ██   ██ ██      ██   ██ ██  ██  ██ ██      ██  ██ ██    ██
			██████  ███████    ██    ██   ██  ██████ ██   ██ ██      ██ ███████ ██   ████    ██
			*/

			for (var detachment of force.detachments) {
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
				// Start listing units
				/*
				██    ██ ███    ██ ██ ████████
				██    ██ ████   ██ ██    ██
				██    ██ ██ ██  ██ ██    ██
				██    ██ ██  ██ ██ ██    ██
				 ██████  ██   ████ ██    ██
				*/

				for (var unit of detachment.units) {
					unitHeader = document.createElement('div');
					unitHeader.classList.add('accordion-header', 'bg0', 'banner', 'unit');
					// Role icon on left side
					if (unitRoles.includes(unit.slot.replaceAll(' ', '').toLowerCase())) {
						unitHeader.innerHTML += `
						<img src="img/roles/${unit.slot.replaceAll(' ', '').toLowerCase()}.png" class="roleImg">
						`;
					}
					// Unit name
					let tempName = ((unit.customName) ? unit.customName : unit.name)
					if (tempName.length >= 22) tempName = tempName.substring(0, 20) + " ...";
					unitHeader.innerHTML += tempName;
					// Warlord icon on left side
					if (unit.warlord) unitHeader.innerHTML += `<img src="img/icons/warlord.png" class="warlordImg">`;
					let unitContent = document.createElement('div');
					unitContent.classList.add('accordion-content', 'bg4', 'unitBox');
					if (unit.customNotes) unitContent.innerHTML += `<p class='textSmall unitNotes'>${unit.customNotes}</p>`
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
						if (model.customNotes) appendModel.innerHTML += `<p class='textSmall'>${model.customNotes[0]}</p>`;
						// Statline in header
						let modelStatRow = document.createElement('div');
						modelStatRow.classList.add('statRow', 'noBorder');
						for (var stat of Object.keys(model.statlines)) {
							let modelStatTag = document.createElement('div');
							modelStatTag.classList.add('statTag', 'naked');
							let modelStatLbl = document.createElement('label');
							modelStatLbl.classList.add('bg3', 'mini', 'naked');
							modelStatLbl.innerHTML += stat;
							modelStatTag.append(modelStatLbl);
							let modelStatVl = document.createElement('span');
							modelStatVl.classList.add('bg5', 'mini', 'naked');
							modelStatVl.innerHTML += model.statlines[stat]
							modelStatTag.append(modelStatVl);
							modelStatRow.append(modelStatTag);
						}
						appendModel.append(modelStatRow);
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
							weaponDiv.classList.add('tag', 'wide', 'bg6');
							let statRow = document.createElement('div');
							statRow.classList.add('statRow', 'noBorder');
							let nameDiv = document.createElement('div');
							nameDiv.classList.add('tag', 'wide', 'bg3');
							let abilTag = document.createElement('div');
							abilTag.classList.add('statTag')
							nameDiv.innerHTML += ((weapon.customName) ? weapon.customName : weapon.name);
							if (weapon.amount) nameDiv.innerHTML += ` x ${weapon.amount}`;
							weaponDiv.append(nameDiv);
							if (weapon.customNotes) weaponDiv.innerHTML += `<p class='textSmall'>${weapon.customNotes}</p>`
							for (var stat of Object.keys(weapon)) {
								if (stat == 'Abilities') {
									// THIS USED TO MAKE A BOX BUT THE UI GOT MESSY
									// let abilLbl = document.createElement('label');
									// abilLbl.classList.add('bg3', 'wide', 'flat', 'grow');
									// abilLbl.innerHTML += stat;
									// let abilVl = document.createElement('span');
									// abilVl.classList.add('bg7', 'wide', 'flat', 'grow');
									// abilVl.innerHTML += weapon[stat];
									// abilTag.append(abilLbl);
									// abilTag.append(abilVl);
								} else if (!['amount', 'name', 'customName', 'customNotes'].includes(stat)) {
									let statTag = document.createElement('div');
									statTag.classList.add('statTag', 'naked');
									let statLbl = document.createElement('label');
									statLbl.classList.add('bg3', 'flat', 'naked', 'grow');
									statLbl.innerHTML += stat;
									let statVl = document.createElement('span');
									statVl.classList.add('bg7', 'flat', 'naked', 'grow');
									statVl.innerHTML += weapon[stat];
									statTag.append(statLbl);
									statTag.append(statVl);
									statRow.append(statTag);
								}
							}
							weaponDiv.append(statRow);
							if (weapon["Abilities"] != '-')
								// THIS WAS FOR THE UI BOX ABOVE
								// weaponDiv.append(abilTag);
								weaponDiv.innerHTML += `<p class='textSmall'>${weapon["Abilities"]}</p>`
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
					for (var keyword of unit.keywords) {
						let newKeyword = document.createElement('div');
						newKeyword.classList.add('tag', 'mini', 'bg7');
						if (keyword == 'core') {
							newKeyword.classList.remove('bg7');
							newKeyword.classList.add('bg3');
						}
						newKeyword.innerHTML += keyword;
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
						if (spell.customNotes) newSpellContent.innerHTML += `<p class='textSmall'>${spell.customNotes}</p>`
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
							<div class="textSmall cLeft">${spell.details.replaceAll(currentPhase + " phase", `<span class="outputCataR" title="${currentPhase}">${currentPhase} phase</span>`)}</div>`
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
							<div class="textSmall cLeft">${rule.desc.replaceAll(currentPhase + " phase", `<span class="outputCataR" title="${currentPhase}">${currentPhase} phase</span>`)}</div>
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
								<div class="textSmall cCenter">${rule.desc}</div>`
						} else {
							newRuleContent.innerHTML += `<div class="textSmall cLeft">${rule.desc.replaceAll(currentPhase + " phase", `<span class="outputCataR" title="${currentPhase}">${currentPhase} phase</span>`)}</div>`
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
					for (var stratagem of unit.stratagems) {
						if (detachment.subfaction.length == 0 || detachment.subfaction == stratagem.subfaction || detachment.faction == stratagem.subfaction || detachment.variant == stratagem.subfaction) {
							let newStratagem = document.createElement('div');
							if (detachment.faction != stratagem.subfaction)
								if (detachment.subfaction)
									newStratagem.setAttribute(`data-subfaction`, detachment.subfaction);
							newStratagem.classList.add('accordion-header', 'tag', 'mini', 'stratTag', 'clickable');
							let fileName = '';
							if ("0123456789".includes(stratagem.cp_cost)) fileName = stratagem.cp_cost;
							else fileName = 'null';
							newStratagem.innerHTML += `<img src="img/icons/cp${fileName}.png" style="margin: 0px; padding: 0px; width: 12px; height: 12px;"> ${stratagem.name}`;
							unitContent.append(newStratagem);
							let newStratagemContent = document.createElement('div');
							newStratagemContent.classList.add('accordion-content', 'hide', 'bg6', 'hlSome');
							newStratagemContent.innerHTML += `
								<p class="textSmall">${stratagem.subfaction} - ${stratagem.type}</p>
		            <p class="textSmall cLeft">${stratagem.description}</p>
		          	`;
							for (phase of Object.keys(phaseList)) {
								if (makeUseTag(stratagem.description, phase)) newStratagem.classList.add(phase);
							}
							unitContent.append(newStratagemContent)
						}
					}
					let searchBox = document.createElement('div')
					// Wahapedia link
					if (unit.waha) {
						if (unit.waha.link) {
							let wahaIcon = document.createElement('img')
							wahaIcon.classList.add('linkImg');
							wahaIcon.setAttribute("data-link", unit.waha.link);
							wahaIcon.src = 'https://wahapedia.ru/favicon.png';
							searchBox.appendChild(wahaIcon);
						}
					}
					// Pic Search
					let picSearch = document.createElement('img')
					picSearch.classList.add('linkImg');
					picSearch.setAttribute("data-link", `https://www.google.com/search?tbm=isch&q=Warhammer%2040000%20${unit.name}%20miniature`);
					picSearch.src = 'img/icons/picsearch.png';
					searchBox.appendChild(picSearch);
					// GW Search
					let gwsearch = document.createElement('img')
					gwsearch.classList.add('linkImg');
					gwsearch.setAttribute("data-link", `https://www.games-workshop.com/en-US/searchResults?_dyncharset=UTF-8&_dynSessConf=-5255390880923486912&qty=&sorting=&view=&Ntt=${unit.name}`);
					gwsearch.src = 'img/icons/gw.ico';
					searchBox.appendChild(gwsearch);
					// eBay search
					let ebaySearch = document.createElement('img')
					ebaySearch.classList.add('linkImg');
					ebaySearch.setAttribute("data-link", `https://www.ebay.com/sch/i.html?_nkw=40k+${unit.name}`);
					ebaySearch.src = 'img/icons/ebay.ico';
					searchBox.appendChild(ebaySearch);
					// Put it all in the list
					unitContent.appendChild(searchBox);
					thisList.append(unitHeader);
					thisList.append(unitContent);
				}
			}
			thisList.innerHTML += `
			<hr>
			<div class="accordion-header bg0 banner">Import New</div>
			<div class="accordion-content bg5 feedbackwrapper">
			<form action="/upload" enctype="multipart/form-data" method="post">
			<label for="atkr_file">Attacker File</label>
			<input type="file" class="fileSpot fileWidget bg7" name="atkr_file" id="atkr_file" accept="rosz"><br>
			<label for="dfdr_file">Defender File</label>
			<input type="file" class="fileSpot fileWidget bg7" name="dfdr_file" id="dfdr_file" accept="rosz"><br>
			<input type="hidden" name="gameCode" id="gameCode" value="${gameCode}">
			<input type="submit" value="Upload BattleScribe Rosters" class="fileBtn fileWidget">
			<!-- <input type="button" value="Upload BattleScribe Rosters" class="fileBtn" onclick="uploadArmies()"> -->
			</form>
			</div>`;
		}
	}
}
