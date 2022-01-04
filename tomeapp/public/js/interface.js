//Jquery. plz replace with basic javascript from here out
$(function() {
	var lastAccordion = 0;
	$("#content").accordion({
		active: 6,
		collapsible: true,
		heightStyle: 'content',
		animate: {
			easing: 'linear',
			duration: 100,
		},
		activate: function(event, ui) {
			var active = $("#content").accordion("option", "active");
			if (active === false && lastAccordion == 6) {
				$("#content").accordion("option", "active", 6);
				emulate();
			} else if (active === false && lastAccordion == 7) {
				// $("#content").accordion("option", "active", 7);
			} else if (active == 6) {
				document.getElementById('calculateButton').innerHTML = 'Tap to Calculate';
			} else if (active === false) {
				$("#content").accordion("option", "active", 6);
			}
			// document.getElementById('statlinesButton').innerHTML = 'Statlines';
		},
		beforeActivate: function(event, ui) {
			lastAccordion = $("#content").accordion("option", "active");
			if (lastAccordion == 7) {
				// document.getElementById('importButton').innerHTML = 'Import';
			} else if (lastAccordion == 6) {
				document.getElementById('calculateButton').innerHTML = 'Calculation';
			}
		}
	});
	$(document).tooltip({
		show: {
			delay: 1500,
			duration: 500
		},
		hide: {
			delay: 0,
			duration: 0
		}
	});
});


// for (spinner of document.getElementsByClassName('*')) {
//   spinner.addEventListener("mousedown", spinnerDrag);
// }

var gameType = 'matched'
var currentPhase = '';
// let phaseList = ["Command", "Movement", "Psychic", "Shooting", "Charge", "Fight", "Morale"]
let phaseList = {
	Command: [`placeholder phrase`],
	Movement: [`advance roll`, `advance`],
	Psychic: [`psychic test`, `manifest`, `deny the witch`],
	Shooting: [`an attack`, `a ranged attack`, 'shooting'],
	Charge: [`charge roll`, `heroic intervention`, 'charge'],
	Fight: [`an attack`, `a melee attack`, `fight`],
	Morale: [`morale test`, `leadership`, `combat attrition test`]
}

function updatePhaseTags() {
	for (nestedPhase of document.getElementById('phaser').getElementsByClassName('phaseTag')) {
		nestedPhase.classList.remove('phaseActive');
		if (currentPhase == nestedPhase.innerText) {
			nestedPhase.classList.add('phaseActive');
			// currentPhase = '';
		}
	}
	populateNav('leftSidenav', Stratagems);
	populateNav('rightSidenav', Stratagems);
}

for (phaseBox of document.getElementById('phaser').getElementsByClassName('phaseTag')) {
	let thisPhase = phaseBox;
	thisPhase.addEventListener("click", function(e) {
		for (nestedPhase of document.getElementById('phaser').getElementsByClassName('phaseTag')) {
			nestedPhase.classList.remove('phaseActive');
		}
		if (currentPhase == thisPhase.innerText) {
			currentPhase = '';
		} else {
			currentPhase = thisPhase.innerText;
			thisPhase.classList.add('phaseActive');
		}
		populateNav('leftSidenav', Stratagems);
		populateNav('rightSidenav', Stratagems);
	});
}

for (mod of document.getElementsByClassName('mod')) {
	let checkBox = mod.getElementsByClassName('selectMod');
	if (checkBox[0]) {
		mod.addEventListener('click', function() {
			checkBox[0].checked = !checkBox[0].checked;
		});
	}
}

var dragTarget;
var startValue;
var startPos;

for (spinner of document.getElementsByClassName('spinner')) {
	spinner.addEventListener("mousedown", spinnerDown);
	spinner.addEventListener("touchstart", spinnerDown);
}

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
		if (dragTarget.id == "atkr_pvp" || dragTarget.id == "dfdr_pvp") {
			dragTarget.value = startValue - (5 * Math.floor((drag - startPos) / 20));
		} else {
			dragTarget.value = startValue - Math.floor((drag - startPos) / 20);
		}
	}
}

document.body.addEventListener("mousemove", spinnerDrag);
document.body.addEventListener("mouseup", spinnerUp);
document.body.addEventListener("touchmove", spinnerDrag);
document.body.addEventListener("touchend", spinnerUp);
document.body.addEventListener("touchcancel", spinnerUp);

var swipeStartPos;
var swiping;

document.body.addEventListener("mousedown", swiperDown);
document.body.addEventListener("touchstart", swiperDown);

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
		if (drag - swipeStartPos > swipeLength) {
			populateNav('leftSidenav', Stratagems);
			openNav('leftSidenav');
			swiping = false;
		} else if (drag - swipeStartPos < -swipeLength) {
			populateNav('rightSidenav', Stratagems);
			openNav('rightSidenav');
			swiping = false;
		}
	}
}

document.body.addEventListener("mousemove", swiperDrag);
document.body.addEventListener("mouseup", swiperUp);
document.body.addEventListener("touchmove", swiperDrag);
document.body.addEventListener("touchend", swiperUp);
document.body.addEventListener("touchcancel", swiperUp);

function updateTrackers() {
	for (tracker_player of document.getElementsByClassName('vpbox')) {
		let ttltracker = tracker_player.getElementsByClassName('vptotal')[0]
		ttltracker.innerText = '';
		for (tracker of tracker_player.getElementsByClassName('vptracker')) {
			ttltracker.innerText = Number(ttltracker.innerText) + Number(tracker.value);
		}
	}
}

function getBoxes() {
	// Attack/Defend values
	attackerName = document.getElementById('attackerName').innerHTML;
	attackerModels = Number(document.getElementById('attackerModelsbox').value);
	attackerA = Number(document.getElementById('attackerAbox').value);
	attackerAS = Number(document.getElementById('attackerASbox').value);
	attackerS = Number(document.getElementById('attackerSbox').value);
	attackerAP = Number(document.getElementById('attackerAPbox').value);
	attackerD = Number(document.getElementById('attackerDbox').value);
	defenderModels = Number(document.getElementById('defenderModelsbox').value);
	defenderT = Number(document.getElementById('defenderTbox').value);
	defenderW = Number(document.getElementById('defenderWbox').value);
	defenderSv = Number(document.getElementById('defenderSvbox').value);
	defenderName = document.getElementById('defenderName').innerHTML;

	// Attack/Defend values
	attackerName_box = document.getElementById('attackerName');
	attackerModels_box = document.getElementById('attackerModelsbox');
	attackerA_box = document.getElementById('attackerAbox');
	attackerAS_box = document.getElementById('attackerASbox');
	attackerS_box = document.getElementById('attackerSbox');
	attackerAP_box = document.getElementById('attackerAPbox')
	attackerD_box = document.getElementById('attackerDbox');;
	defenderModels_box = document.getElementById('defenderModelsbox');
	defenderT_box = document.getElementById('defenderTbox');
	defenderW_box = document.getElementById('defenderWbox');
	defenderSv_box = document.getElementById('defenderSvbox');
	defenderName_box = document.getElementById('defenderName');

	//Attack Modifiers
	randomAttacks = document.getElementById('randomAttacks').checked
	randomAttacksDice = Number(document.getElementById('randomAttacksDice').value)
	randomAttacksDenom = Number(document.getElementById('randomAttacksDenom').value)
	randomAttacksMod = Number(document.getElementById('randomAttacksMod').value)

	//Hit Modifiers
	hitMod = Number(document.getElementById('HitMod').value)
	autohit = document.getElementById('autohit').checked
	//bonus attacks
	extraattack = document.getElementById('extraattack').checked
	extraattack_amount = Number(document.getElementById('extraattack_amount').value)
	extraattack_target = Number(document.getElementById('extraattack_target').value)

	//Reroll hits
	rerollHIT = document.getElementById('rerollhit').checked
	rerollHIT_target = Number(document.getElementById('rerollHIT_target').value)

	//bonus hits
	extrahit = document.getElementById('extrahit').checked
	extrahit_amount = Number(document.getElementById('extrahit_amount').value)
	extrahit_target = Number(document.getElementById('extrahit_target').value)

	//auto-wound
	autowound = document.getElementById('autowound').checked
	autowound_target = Number(document.getElementById('autowound_target').value)

	//Mortals on Hit
	mortalsOnHIT = document.getElementById('mortalsOnHIT').checked
	mortalsOnHIT_target = Number(document.getElementById('mortalsOnHIT_target').value)

	//Mortals on Hit
	mortalsOnHIT = document.getElementById('mortalsOnHIT').checked
	mortalsOnHIT_target = Number(document.getElementById('mortalsOnHIT_target').value)

	//Wounds Modifiers
	wMod = Number(document.getElementById('WMod').value)
	//Ignore below
	ignorebelow = document.getElementById('ignorebelow').checked
	ignorebelow_target = Number(document.getElementById('ignorebelow_target').value);
	//Reroll wounds
	rerollWD = document.getElementById('rerollWD').checked
	rerollWD_target = Number(document.getElementById('rerollWD_target').value)
	//Mortals on Wound
	mortalsOnWD = document.getElementById('mortalsOnWD').checked
	mortalsOnWD_target = Number(document.getElementById('mortalsOnWD_target').value)
	mortalsOnWD_amount = Number(document.getElementById('mortalsOnWD_amount').value)

	//Auto damage on wound
	autodamage = document.getElementById('autodamage').checked
	autodamage_target = Number(document.getElementById('autodamage_target').value)

	bonusap = document.getElementById('bonusap').checked;
	bonusap_amount = Number(document.getElementById('bonusap_amount').value);
	bonusap_target = Number(document.getElementById('bonusap_target').value);
	//Save Modifiers
	svMod = document.getElementById('SvMod').checked;
	invuln = document.getElementById('invuln').checked;
	invuln_target = Number(document.getElementById('invuln_target').value);
	fnp = document.getElementById('fnp').checked;
	fnp_target = Number(document.getElementById('fnp_target').value);
	//Damage Modifiers
	//Attack Modifiers
	randomDamage = document.getElementById('randomDamage').checked
	randomDamageDice = Number(document.getElementById('randomDamageDice').value)
	randomDamageDenom = Number(document.getElementById('randomDamageDenom').value)
	randomDamageMod = Number(document.getElementById('randomDamageMod').value)
	randomDamage_box = document.getElementById('randomDamage');
	randomDamageDice_box = document.getElementById('randomDamageDice');
	randomDamageDenom_box = document.getElementById('randomDamageDenom');
	randomDamageMod_box = document.getElementById('randomDamageMod');

	flatDR = Number(document.getElementById('flatDRbox').value);
	fightback = document.getElementById('fightback').checked;
	fightbackagainst = Number(document.getElementById('fightbackagainst').value);
	reanimate = document.getElementById('reanimate').checked;
	reanimateagainst = Number(document.getElementById('reanimateagainst').value);
	// reanimatereroll = Number(document.getElementById('reanimatereroll').value);
	// reanimatemod = Number(document.getElementById('reanimatemod').value);

	randomAttacks_box = document.getElementById('randomAttacks').checked;
	randomAttacksDice_box = document.getElementById('randomAttacksDice');
	randomAttacksDenom_box = document.getElementById('randomAttacksDenom');
	randomAttacksMod_box = document.getElementById('randomAttacksMod');
	//Output box
	outputBox = document.getElementById('output');
	importBox = document.getElementById('importBox');
	weaponsBox = document.getElementById('weaponsBox');
}



//
function openNav(navDiv) {
	document.getElementById(navDiv).style.width = "310px";
	document.getElementById(navDiv).style.backgroundColor = "#332211";
	for (bar of Array.from(document.getElementsByClassName('sidenav')).concat(Array.from(document.getElementsByClassName('sidenav')))) {
		bar.style.opacity = '1';
		if (window.innerWidth > 900) {
			bar.style.transform = "none";
		} else {
			/* transform: translateX(-50%); */
			bar.style.transform = "translateX(-50%)";
		}
	}
	if (window.innerWidth > 900) {
		document.getElementById('leftSidenav').style.left = "0";
		document.getElementById('rightSidenav').style.left = "none";
		document.getElementById('rightSidenav').style.right = "0";

	} else {
		/* transform: translateX(-50%); */
		document.getElementById('leftSidenav').style.left = "50%";
		document.getElementById('rightSidenav').style.left = "50%";
		document.getElementById('rightSidenav').style.right = "none";

	}
}

function closeNav() {
	for (bar of document.getElementsByClassName('sidenav')) {
		bar.style.width = "0";
		bar.style.backgroundColor = "#000000";
		// bar.style.opacity = '0';
	}
	for (bar of Array.from(document.getElementsByClassName('sidenav')).concat(Array.from(document.getElementsByClassName('sidenav')))) {
		bar.style.opacity = '0';
	}
	$(".detNav").accordion("destroy");
}

function makeUseTag(text) {
	if (currentPhase) {
		if (text.includes(currentPhase + " phase")) {
			return true
		}
		for (searchPhrase of phaseList[currentPhase]) {
			if (text.toLowerCase().includes(searchPhrase)) {
				return true
			}
		}
	}
	return false
}

function populateNav(navDiv, stratList) {
	//We will populate the current army later
	let currentArmy;
	let atkrdfdr;
	// Grab the correct sidebar
	let sideBarNav = document.getElementById(navDiv)
	//Create a close button
	let closeButton = document.createElement('a');
	closeButton.appendChild(document.createTextNode("×"));
	closeButton.classList.add('closebtn');
	//Get the side of screen you will be viewing
	//And populate the current army with the correct side
	if (navDiv == 'leftSidenav') {
		if (typeof atkr_army != "undefined") {
			closeButton.classList.add('leftPos');
			currentArmy = atkr_army;
			atkrdfdr = 'attacker';
			var currentNav = document.getElementsByClassName('sidenav')[0];
		} else {
			return
		}
	} else if (navDiv == 'rightSidenav') {
		if (typeof dfdr_army != "undefined") {
			closeButton.classList.add('rightPos');
			currentArmy = dfdr_army;
			atkrdfdr = 'defender';
			var currentNav = document.getElementsByClassName('sidenav')[1];
		} else {
			return
		}
	}
	closeButton.href = 'javascript:void(0)';
	closeButton.setAttribute('onclick', 'closeNav(this.parentNode)');
	//Clear old data from sidebar
	sideBarNav.innerHTML = '';

	//Banner for the Army Name
	newArmyHeader = document.createElement('h1');
	newArmyHeader.style.textAlign = "center"
	if (currentArmy.customName) newArmyHeader.appendChild(document.createTextNode(currentArmy.customName));
	else newArmyHeader.appendChild(document.createTextNode(currentArmy.name));
	sideBarNav.appendChild(newArmyHeader);

	//Paragraph for custom notes added in Battlescribe
	if (currentArmy.customNotes) {
		newNotePara = document.createElement('p');
		newNotePara.style.textAlign = "center"
		newNotePara.appendChild(document.createTextNode(currentArmy.customNotes));
		sideBarNav.appendChild(newNotePara);
	}

	for (detachment of currentArmy.detachments) {

		//Do they have a faction? Print it.
		if (detachment.faction) {
			newFactionHeader = document.createElement('h2');
			newFactionHeader.style.textAlign = "center"
			newFactionHeader.style.marginBottom = "0px"
			newFactionHeader.appendChild(document.createTextNode(detachment.faction));
			sideBarNav.appendChild(newFactionHeader);
		}

		//Banner for name and cost of detachment
		newDetHeader = document.createElement('h2');
		newDetHeader.style.textAlign = "center"
		newDetHeader.style.marginTop = "0px"
		if (detachment.customName) newDetHeader.appendChild(document.createTextNode(detachment.customName));
		else newDetHeader.appendChild(document.createTextNode(detachment.name));
		sideBarNav.appendChild(newDetHeader);


		newDet = document.createElement('div');
		newDet.classList.add('detNav');

		//Declare the units and models trackers
		let newUnit, newModel;
		//Loop through every unit in the army
		detachment.units.forEach((unit, i) => {

			let containsUseTag = false;

			newUnitHeader = document.createElement('h3');
			if (unit.slot) {
				let slotIcon = document.createElement('img')
				slotIcon.style.height = '19px'
				slotIcon.style.width = '19px'
				slotIcon.style.float = 'left'
				slotIcon.src = 'img/' + unit.slot.toLowerCase().replaceAll(" ", "") + '.png'
				newUnitHeader.appendChild(slotIcon)
			}
			if (unit.waha) {
				if (unit.waha.link) {
					let wahaIcon = document.createElement('img')
					wahaIcon.style.height = '19px'
					wahaIcon.style.width = '19px'
					wahaIcon.style.float = 'right'
					wahaIcon.src = 'https://wahapedia.ru/favicon.png'
					newUnitHeader.appendChild(wahaIcon);
					wahaIcon.addEventListener("click", function(e) {
						//stackoverflow fix for onlick in an onclick
						if (!e) var e = window.event;
						e.cancelBubble = true;
						if (e.stopPropagation) e.stopPropagation();
						window.open(unit.waha.link, '_blank');
					});
				}
			}


			if (unit.customName) newUnitHeader.appendChild(document.createTextNode(unit.customName));
			else newUnitHeader.appendChild(document.createTextNode(unit.name));
			// newUnitHeader.style.padding = '0px'
			// newUnitHeader.style.height = '24px'
			newUnit = document.createElement('div');
			newUnit.classList.add('unitNav');
			newDet.appendChild(newUnitHeader);

			if (unit.customName) {
				let newName = document.createElement('div');
				newName.appendChild(document.createTextNode(unit.name));
				newUnit.appendChild(newName);
			}
			if (unit.customNotes) {
				let newNotes = document.createElement('div');
				newNotes.appendChild(document.createTextNode(unit.customNotes));
				newNotes.style.fontSize = '0.8em';
				newNotes.style.color = 'black';
				newUnit.appendChild(newNotes);
			}

			//Loop through models
			unit.models.forEach((model, j) => {
				newModel = document.createElement('div');
				// newModel.setAttribute("onclick", 'closeNav()');
				newModel.classList.add('modelNav');
				let newName = document.createElement('div');
				newName.classList.add('modelName');
				let amountString = ''
				if (model.amount) amountString = ' x ' + model.amount
				if (model.customName) newName.appendChild(document.createTextNode(model.customName + amountString));
				else newName.appendChild(document.createTextNode(model.name + amountString));
				let targetIcon = document.createElement('img')
				targetIcon.style.height = '19px'
				targetIcon.style.width = '19px'
				targetIcon.style.float = 'left'
				targetIcon.src = 'img/target.png'
				newModel.appendChild(targetIcon)
				newModel.appendChild(newName);

				targetIcon.addEventListener("click", function(e) {
					//stackoverflow fix for onlick in an onclick
					if (!e) var e = window.event;
					e.cancelBubble = true;
					if (e.stopPropagation) e.stopPropagation();

					getBoxes()
					defenderName_box.innerHTML = model.name
					let defenders = 1;
					if (model.amount) defenders *= Number(model.amount)
					defenderModels_box.value = defenders
					defenderT_box.value = Number(model.statlines.T)
					defenderW_box.value = Number(model.statlines.W)
					defenderSv_box.value = Number(model.statlines.Sv)
					$("#content").accordion("option", "active", 1);
					closeNav()

				});

				// newModel.appendChild(document.createElement('br'));

				let statBox = document.createElement('div');
				statBox.classList.add('statBox')

				let statValue = document.createElement('div');
				statValue.classList.add('statStats')

				let statLine = ["M", model.statlines.M, "WS", model.statlines.WS, "BS", model.statlines.BS, "S", model.statlines.S, "T", model.statlines.T, "W", model.statlines.W, "A", model.statlines.A, "Ld", model.statlines.Ld, "Sv", model.statlines.Sv]
				for (let i = 0; i < statLine.length; i += 2) {
					let statCol = document.createElement('div');
					statCol.classList.add('statCol')
					let topTag = document.createElement('div');
					topTag.classList.add('tag', 'statTag', 'statTopTag')
					topTag.appendChild(document.createTextNode(statLine[i]));
					let botTag = document.createElement('div');
					botTag.classList.add('tag', 'statTag', 'statBotTag')
					botTag.appendChild(document.createTextNode(statLine[i + 1]));
					statCol.appendChild(topTag);
					statCol.appendChild(botTag);
					statValue.appendChild(statCol);
				}
				statBox.appendChild(statValue);
				newModel.appendChild(statBox);



				// for (stat in model.statlines) {
				// 	let newStat = document.createElement('div');
				// 	newStat.classList.add('tag')
				// 	newStat.appendChild(document.createTextNode(stat + " " + model.statlines[stat] + " "));
				// 	newModel.appendChild(newStat);
				// }

				model.weapons.forEach((weap, i) => {
					let newWeap = document.createElement('div');
					newWeap.classList.add('weapBox')

					let weapName = document.createElement('div');
					weapName.classList.add('tag', 'statName', 'darkTag')
					if (weap.customName) newName.appendChild(document.createTextNode(weap.customName + " x" + weap.amount));
					else weapName.appendChild(document.createTextNode(weap.name + " x" + weap.amount));
					newWeap.appendChild(weapName)

					let weapStats = document.createElement('div');
					weapStats.classList.add('statStats')
					let statLine = ["Range", weap.Range, "Type", weap.Type, "S", weap.S, "AP", weap.AP, "D", weap.D]
					for (let i = 0; i < statLine.length; i += 2) {
						let statCol = document.createElement('div');
						statCol.classList.add('statCol')
						let topTag = document.createElement('div');
						topTag.classList.add('tag', 'statTag', 'statTopTag')
						topTag.appendChild(document.createTextNode(statLine[i]));
						let botTag = document.createElement('div');
						botTag.classList.add('tag', 'statTag', 'statBotTag')
						botTag.appendChild(document.createTextNode(statLine[i + 1]));
						statCol.appendChild(topTag);
						statCol.appendChild(botTag);
						weapStats.appendChild(statCol);
					}

					newWeap.appendChild(weapStats)

					let weapAbil = document.createElement('div');
					weapAbil.classList.add('tag', 'statAbil', 'statTopTag')
					weapAbil.appendChild(document.createTextNode("Abilities"));
					newWeap.appendChild(weapAbil)
					weapAbil = document.createElement('div');
					weapAbil.classList.add('tag', 'statAbil', 'statBotTag')
					weapAbil.appendChild(document.createTextNode(weap.Abilities));
					newWeap.appendChild(weapAbil)
					newWeap.style.display = "none";
					// newWeap.classList.add('tag', 'weapTag')
					newWeap.addEventListener("click", function(e) {
						//stackoverflow fix for onlick in an onclick
						if (!e) var e = window.event;
						e.cancelBubble = true;
						if (e.stopPropagation) e.stopPropagation();
						getBoxes()
						attackerName_box.innerHTML = model.name;
						let attackers = 1;
						if (model.amount) attackers *= Number(model.amount)
						if (weap.amount) attackers *= Number(weap.amount)
						attackerModels_box.value = Number(attackers);
						if (weap.Type == "Melee") {
							currentPhase = 'Fight'
							attackerA_box.value = Number(weap.A);
							attackerAS_box.value = Number(model.statlines.WS);
							let calcS = Number(model.statlines.S)
							if (weap.S[0] == "+") calcS += Number(weap.S[1])
							else if (weap.S[0] == "x") calcS *= Number(weap.S[1])
							else if (weap.S != "User") calcS *= Number(weap.S)
							attackerAS_box.value = calcS;
							attackerS_box.value = calcS;
						} else {
							currentPhase = 'Shooting'
							//Still has to be split from Type
							// attackerA_box.value = Number(weap.A);
							attackerAS_box.value = Number(model.statlines.BS);
							attackerS_box.value = Number(weap.S);
						}
						attackerAP_box.value = Number(weap.AP);
						$("#content").accordion("option", "active", 1);
						updatePhaseTags()
						closeNav()

					});
					newModel.appendChild(newWeap);
				});

				newModel.addEventListener("click", function(e) {
					//stackoverflow fix for onlick in an onclick
					if (!e) var e = window.event;
					e.cancelBubble = true;
					if (e.stopPropagation) e.stopPropagation();
					for (var weapNode of this.getElementsByClassName('weapBox')) {
						if (weapNode.style.display == "none") {
							weapNode.style.display = "block";
						} else {
							weapNode.style.display = "none";
						}
					}
				});
				newUnit.appendChild(newModel);
			});


			let newAbil = document.createElement('div')
			newAbil.classList.add('abilNav');
			unit.rules.forEach((abil, i) => {
				let ability = document.createElement('div');
				ability.appendChild(document.createTextNode(abil.name));
				ability.classList.add('tag', 'abilTag')
				//Make tooltip
				// ability.title = abil.desc
				let augmentAbil = `<span class="outputCataG" title="Unit Ability: ${unit.name}">${abil.name}</span><p>${abil.desc}</p>`
				for (phase of Object.keys(phaseList)) {
					if (makeUseTag(augmentAbil)) {
						ability.classList.add('useTag')
						containsUseTag = true;
					}
					augmentAbil = augmentAbil.replaceAll(phase + " phase", `<span class="outputCataR" title="${phase}">${phase} phase</span>`)
				}
				// for (keyword of strat.keywords) {
				// 	augmentAbil = augmentAbil.replaceAll(keyword, `<span class="outputCataG" title="${keyword}">${keyword}</span>`)
				// }
				ability.addEventListener("click", function(e) {
					$("#content").accordion("option", "active", 6);
					getBoxes()
					outputBox.innerHTML = augmentAbil;
					closeNav()
				});
				newAbil.appendChild(ability);
			});

			//Match faction to stratagem list key
			let unitStrats = []
			for (factionName of Object.keys(stratList)) {
				//If the faction in the strat list is the same as the detachment's name
				let thisFaction = detachment.faction.toLowerCase().replaceAll(" ", "") || unit.faction.toLowerCase().replaceAll(" ", "")
				if (factionName == thisFaction) {
					for (strat of stratList[factionName]) {
						let prevStrat = ''
						for (subkey of strat.subkeys.concat(strat.keywords)) {
							unit.keywords.forEach((keyword, i) => {
								if (keyword.toLowerCase().replaceAll(" ", "") == subkey.toLowerCase().replaceAll(" ", "")) {
									if (strat.type == gameType && strat.category != "Requisition Stratagem") {
										let stratTag = document.createElement('div');
										stratTag.appendChild(document.createTextNode(strat.name));
										stratTag.classList.add('tag', 'stratTag')
										//Make tooltip
										// stratTag.title = strat.desc
										let augmentStrat = `<p>${strat.rulesText}</p>`
										for (phase of Object.keys(phaseList)) {
											augmentStrat = augmentStrat.replaceAll(phase + " phase", `<span class="outputCataR" title="${phase}">${phase} phase</span>`)
										}
										for (keyword of strat.keywords) {
											augmentStrat = augmentStrat.replaceAll(keyword, `<span class="outputCataG" title="${keyword}">${keyword}</span>`)
										}
										augmentStrat = `<span class="outputCataG" title="${detachment.faction}">${strat.name}</span><span class="outputCataB" style="float: right;" title="Command Point Cost: ${strat.cost}">${strat.cost}</span><p>${strat.category}</p><p class="outputFlavor">${strat.desc}</p>` + augmentStrat
										if (makeUseTag(augmentStrat)) {
											stratTag.classList.add('useTag');
											containsUseTag = true;
										}
										stratTag.addEventListener("click", function(e) {
											$("#content").accordion("option", "active", 6);
											getBoxes()
											outputBox.innerHTML = augmentStrat
											closeNav()
										});
										if (JSON.stringify(stratTag) != JSON.stringify(prevStrat)) {
											newAbil.appendChild(stratTag);
											prevStrat = stratTag
										}
									}
								}
							});
						};
					}
				}
				newUnit.appendChild(newAbil);
			}
			if (containsUseTag) newUnitHeader.classList.add('useTag');
			newDet.appendChild(newUnit);
		});
		sideBarNav.appendChild(newDet);
	}
	sideBarNav.appendChild(closeButton);

	$(".detNav").accordion({
		active: false,
		collapsible: true,
		heightStyle: 'content',
		animate: {
			easing: 'linear',
			duration: 100,
		}
	});
}
