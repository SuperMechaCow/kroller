var debug = false;

var iterations = 1;

function setit(battles) {
	iterations = battles;
}

function roll(multi = 1, denom = 6, mod = 0) {
	let result = 0;
	for (let rolls = 0; rolls < multi; rolls++) {

		result += Math.ceil(Math.random() * denom);
	}
	result += mod;
	return result;
}

function check(result, against, higher = true) {
	if (higher) return result >= against
	else return result <= against

}

function tickle() {
	$('#modbox').accordion('option', 'active', false);
}

function krunchit() {
	getBoxes();
	let total_hits = 0;
	let total_hitreroll = 0;
	let total_autohits = 0;
	let total_autowounds = 0;
	let total_woundreroll = 0;
	let total_wounds = 0;
	let total_apwounds = 0;
	let total_mortals = 0;
	let total_saves = 0;
	let total_invulns = 0;
	let total_ignored = 0;
	let total_damage = 0;
	let total_effdamage = 0;
	let total_shielded = 0;
	let total_modelsKilled = 0;
	let total_unfelt = 0;
	let total_epda = 0;
	let total_attacksMade = 0;
	let total_extraattack = 0;
	let total_squadwipe = 0;
	let total_foughtback = 0;
	let total_reanimated = 0;

	let modelHP = defenderW;

	//
	// Simulations
	//

	for (let iterate = 0; iterate < iterations; iterate++) {

		//
		// Models
		//

		let modelsToRean = 0;
		for (let model_i = 0; model_i < attackerModels; model_i++) {

			//
			// HITS
			//

			let attacks = 0;
			let attacksMade = 0;
			let extraattack = 0;
			let hits = 0;
			let autohits = 0;
			let hitreroll = 0;
			let wounds = 0;
			let autowounds = 0;
			// If random attacks are specified in the Hits tab
			if (randomAttacks || attackerA == 0) attacks += roll(randomAttacksDice, randomAttacksDenom, randomAttacksMod);
			// Otherwise use the A stat
			else attacks = attackerA;
			// All flamers hit without rolling
			if (flamer) {
				hits += attacks;
			} else {
				// Loop for every model's attacks
				for (let attack_i = 0; attack_i < attacks + extraattack; attack_i++) {
					// Increase attacks made tally
					attacksMade++;
					//Make the roll
					let result = roll(1, 6, hitMod);
					// If lower than reroll hit mod and NOT enough to score anyways
					if (check(result, rerollHITagainst, false) && !check(result, attackerAS)) {
						//Reroll now
						result = roll(1, 6, hitMod);
						// Increase reroll tally
						hitreroll++;
					}
					// Check for attacks on 6's, but not on bonus attacks
					if (exploding6s && check(result, 6) && attack_i < attacks) {
						extraattack++;
					} // Check for extra hits on 6's
					if (extrahit6 && check(result, 6)) {
						hits++;
						autohits++;
					}
					// Check for auto-wounding on 6's
					if (autowound6s && check(result, 6)) {
						wounds++;
						autowounds++;
					} else { // If it didn't auto-wound, make the roll
						hits += Number(check(result, attackerAS));
					}
				} //Hits end
			} //Flamer end
			total_attacksMade += attacksMade;
			total_hits += hits;
			total_extraattack += extraattack;
			total_hitreroll += hitreroll;
			total_autohits += autohits;
			total_autowounds += autowounds;


			//
			// WOUNDS
			//

			let woundreroll = 0;
			let mortals = 0;
			let apwounds = 0;
			let ignored = 0;
			for (let hits_i = 0; hits_i < hits; hits_i++) {
				let result = roll(1, 6, wMod);
				// Was it low enough to re-roll?
				if (check(result, rerollWDagainst, false)) {
					result = roll(1, 6, wMod);
					woundreroll++;
				}
				if (mortalson6s && check(result, 6)) {
					mortals++;
				}
				if (apon6s && check(result, 6)) {
					apwounds++;
				} else {
					//Calculate what the target is for wounding
					let against = 0;
					if (attackerS / 2 >= defenderT) against = 2;
					else if (attackerS > defenderT) against = 3;
					else if (attackerS == defenderT) against = 4;
					else if (attackerS > defenderT / 2) against = 5;
					else against = 6;
					//If the roll was below the ignore amount and the wound roll could have been made
					if (check(result, ignorebelowamount, false) && ignorebelowamount >= against) ignored++;
					//Otherwise, make a normal wound roll
					else wounds += Number(check(result, against))
				}
			} // Wounds end
			total_wounds += wounds;
			total_apwounds += apwounds;
			total_woundreroll += woundreroll;
			total_mortals += mortals;
			total_ignored += ignored;



			//
			// Saves
			//

			let saves = 0;
			let invulns = 0;
			for (let wounds_i = 0; wounds_i < wounds + apwounds; wounds_i++) {
				// Make one save roll
				let result = roll();
				let against = 0;
				let basicsave;
				if (wounds_i < wounds) basicsave = defenderSv + attackerAP;
				else basicsave = defenderSv + attackerAP + apo6amount;
				// A 1 on a save is always a fail
				if (result != 1) {
					if (basicsave > defenderInv && invuln) invulns += Number(check(result, defenderInv));
					else saves += Number(check(result, basicsave));
				}
			} // Saves end
			total_saves += saves;
			total_invulns += invulns;



			//
			// Damage
			//

			let shielded = 0;
			let damage = 0;
			let effdamage = 0;
			let unfelt = 0;
			let modelsKilled = 0;
			let squadwipe = 0;
			let foughtback = 0;
			for (let unsaved_i = 0; unsaved_i < wounds - saves; unsaved_i++) {
				let result;
				// If there's a random amount of Damage
				if (!attackerDmulti) result = attackerDdenom + attackerDmod;
				else result = roll(attackerDmulti, attackerDdenom, attackerDmod);
				// Shielding
				if (flatDR) {
					if (result - flatDR > 1) {
						result = result - flatDR;
						shielded -= flatDR - result;
					} else {
						result = 1;
					}
				}
				// Add to total damage and effective damage
				damage += result;
				effdamage += result;
				// Check each point of damage for FNP
				for (let damage_i = 0; damage_i < result; damage_i++) {
					if (fnp && check(roll(), defenderFNP)) {
						effdamage--;
						unfelt++;
					} else {
						// Hurt the model
						modelHP--;
						// If the model is dead
						if (modelHP <= 0) {
							modelsKilled++;
							// Can they fight back on death?
							if (fightback) foughtback += check(roll(), fightbackagainst);
							// If a number of models was given, have we killed enough of them?
							if (defenderModels) squadwipe = Math.floor(modelsKilled / defenderModels);
							// Reset model HP
							modelHP = defenderW;
							// Subtract remaining damage from effective damage
							effdamage -= result - (damage_i + 1)
							//Stop counting the damage from this damage roll. It doesn't carry over
							break;
						}
					}
				}


			} // Damage end

			total_shielded += shielded;
			total_damage += damage;
			total_effdamage += effdamage;
			total_unfelt += unfelt;
			total_modelsKilled += modelsKilled;
			modelsToRean += modelsKilled;
			total_squadwipe += squadwipe;
			total_foughtback += foughtback;

		} // Models end

		let reanimated = 0;
		if (reanimate && modelsToRean < defenderModels) {
			let reanimatesuccess = 0;
			for (let rean_i = 0; rean_i < modelsToRean * defenderW; rean_i++) {
				reanimatesuccess += Number(check(roll(), reanimateagainst))
			}
			reanimated = Math.floor(reanimatesuccess / defenderW);
		}
		total_reanimated += reanimated;
		total_effdamage -= reanimated * defenderW;
	} //Iterations end

	outputBox.innerHTML = "";
	if (total_attacksMade) outputBox.innerHTML += "<span class='outputCataR' title='The number of attacks made on the defending unit.'>Attacks</span>: " + total_attacksMade + " (" + Math.round(total_attacksMade / iterations) + ")<br>"
	if (total_extraattack) outputBox.innerHTML += "<span class='outputCataB' title='The number of extra attacks made on the Hit roll.'>Bonus attacks</span>: " + total_extraattack + " (" + Math.round(total_extraattack / iterations) + ")<br>"
	if (total_hits) outputBox.innerHTML += "<span class='outputCataR' title='The number of successful Hit rolls.'>Hits</span>: " + total_hits + " (" + Math.round(total_hits / iterations) + ")<br>"
	if (total_hitreroll) outputBox.innerHTML += "<span class='outputCataB' title='The number of Hit rerolls that would have been failures.'>Hit re-rolls</span>: " + total_hitreroll + " (" + Math.round(total_hitreroll / iterations) + ")<br>"
	if (total_autohits) outputBox.innerHTML += "<span class='outputCataB' title='How many auto-hits you scored'>Auto-hits</span>: " + total_autohits + " (" + Math.round(total_autohits / iterations) + ")<br>"
	if (total_wounds + total_apwounds) outputBox.innerHTML += "<span class='outputCataR' title='The number of successful Wound rolls'>Wounds</span>: " + Number(total_wounds + total_apwounds) + " (" + Math.round(Number(total_wounds + total_apwounds) / iterations) + ")<br>"
	if (total_apwounds) outputBox.innerHTML += "<span class='outputCataR' title='The number of wounds that had bonus AP from the wound roll.'>Bonus AP</span>: " + Number(total_apwounds) + " (" + Math.round(Number(total_apwounds) / iterations) + ")<br>"
	if (total_autowounds) outputBox.innerHTML += "<span class='outputCataB' title='How many auto-wounds you scored'>Auto-wounds</span>: " + total_autowounds + " (" + Math.round(total_autowounds / iterations) + ")<br>"
	if (total_woundreroll) outputBox.innerHTML += "<span class='outputCataB' title='The number of Wound rerolls that would have been failures.'>Wound re-rolls</span>: " + total_woundreroll + " (" + Math.round(total_woundreroll / iterations) + ")<br>"
	if (total_ignored) outputBox.innerHTML += "<span class='outputCataB' title='The number of wounds that were ignored that would have been successful.'>Ignored Wounds</span>: " + total_ignored + " (" + Math.round(total_ignored / iterations) + ")<br>"
	if (total_saves) outputBox.innerHTML += "<span class='outputCataB' title='The number of saves that the defender would have made normally.'>Saves</span>: " + total_saves + " (" + Math.round(total_saves / iterations) + ")<br>"
	if (total_invulns) outputBox.innerHTML += "<span class='outputCataB' title='The number of saves that the defender would have made with Invulnerable saves.'>Invulnerable Saves</span>: " + total_invulns + " (" + Math.round(total_invulns / iterations) + ")<br>"
	if (total_damage) outputBox.innerHTML += "<span class='outputCataR' title='The amount of damage that was rolled for, before considering target Wounds characteristic or mitigation.'>Damage</span>: " + total_damage + " (" + Math.round(total_damage / iterations) + ")<br>"
	if (total_unfelt) outputBox.innerHTML += "<span class='outputCataB' title='The amount of damage prevented by Feel No Pain'>Feel No Pains</span>: " + total_unfelt + " (" + Math.round(total_unfelt / iterations) + ")<br>"
	if (total_shielded) outputBox.innerHTML += "<span class='outputCataB' title='The amount of damage prevented by Damage Reduction'>Shielded</span>: " + total_shielded + " (" + Math.round(total_shielded / iterations) + ")<br>"
	if (total_mortals) outputBox.innerHTML += "<span class='outputCataR' title='The amount of Mortal wounds inflicted on the target.'>Mortal Wounds</span>: " + total_mortals + " (" + Math.round(total_mortals / iterations) + ")<br>"
	if (total_modelsKilled) outputBox.innerHTML += "<span class='outputCataR' title='The number of models in the defending unit would have killed.'>Models Killed</span>: " + total_modelsKilled + " (" + Math.round(total_modelsKilled / iterations) + ")<br>"
	if (total_foughtback) outputBox.innerHTML += "<span class='outputCataB' title='The number of models that fought back before dying in the defending unit.'>Fought back</span>: " + total_foughtback + " (" + Math.round(total_foughtback / iterations) + ")<br>"
	if (total_reanimated) outputBox.innerHTML += "<span class='outputCataB' title='The number of models that were brought back by Reanimation Protocol.'>Reanimated</span>: " + total_reanimated + " (" + Math.round(total_reanimated / iterations) + ")<br>"
	if (total_squadwipe) outputBox.innerHTML += "<span class='outputCataR' title='The number of times in this simulation the attacking unit completely destroyed the defneding unit.'>Squads Wiped</span>: " + total_squadwipe + " (" + Math.round(total_squadwipe / iterations) + ")<br>"
	outputBox.innerHTML += "<span class='outputCataR' title='The amount of damage you actually inflicted (excess damage not needed to kill a model is ignored, along with shields and abilities)'>Effective Damage</span>: " + total_effdamage +
		" (" + Math.round(total_effdamage / iterations) + ")<br>"
	outputBox.innerHTML += "<span class='outputCataG' title='Effective Damage Per Attack: How much damage each models attack would have done'>EDPA</span>: " + Number(total_effdamage / (total_attacksMade)) + "<br>"
	outputBox.innerHTML += "<span class='outputCataG' title='Effective Damage Per Unit: How much damage the whole units attack would have done'>EDPU</span>: " + Number(total_effdamage / iterations) + "<br>"
}

// https://davidwalsh.name/query-string-javascript
function importFromQuery() {
	var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.get('import')) {
		if (urlParams.get('return') == 'json') {
			document.write(JSON.stringify(parseImport(urlParams.get('import'))));
		} else {
			parseImport(urlParams.get('import'))
		}
	}
}



function emulate() {

	getBoxes();
	let attacks = 0;
	let hits = 0;
	let wounds = 0;
	let saves = 0;
	let apsaves = 0;
	let damages = 0;
	let apdamages = 0;
	let total_damage = 0;
	let mortals = 0;

	//
	// Attacks
	//

	// If random attacks are specified in the Hits tab
	if (randomAttacks || attackerA == 0) attacks += roll(randomAttacksDice, randomAttacksDenom, randomAttacksMod);
	// Otherwise use the A stat
	else attacks = attackerA;
	// All flamers hit without rolling
	attacks *= attackerModels

	// HITS
	// HITS
	// HITS

	let calc_extraattack = 0;
	let calc_hitreroll = 0;
	let calc_extrahit = 0;
	let calc_autowound = 0;
	let calc_mortalsOnHIT = 0;

	if (autohit) {
		hits += attacks;
	} else {
		//Bonus attacks
		calc_extraattack = calcCheck(attacks, extraattack_target, 0, 0).successes * extraattack_amount;
		if (extraattack) attacks += calc_extraattack;
		//Roll all attacks for hits
		hits += calcCheck(attacks, attackerAS, hitMod, rerollHIT_target).successes;
		//rerolls
		calc_hitreroll = calcCheck(attacks, attackerAS, hitMod, rerollHIT_target).rerolls;
		if (rerollHIT) hits += calc_hitreroll;
		//bonus hits
		calc_extrahit = calcCheck(attacks, extrahit_target, 0, 0).successes * extrahit_target;
		if (extrahit) hits += calc_extrahit;
		//autowound
		calc_autowound = calcCheck(attacks, autowound_target, 0, 0).successes;
		if (autowound) wounds += calc_autowound;
		//mortals on hit
		calc_mortalsOnHIT = calcCheck(attacks, mortalsOnHIT_target, 0, 0).successes;
		if (mortalsOnHIT) mortals += calc_mortalsOnHIT;
	}

	// Wounds
	// Wounds
	// Wounds

	let wound_target = 6;
	let natWD_target = 6;
	if (attackerS >= defenderT * 2) natWD_target = 2;
	else if (attackerS > defenderT) natWD_target = 3;
	else if (attackerS == defenderT) natWD_target = 4;
	else if (attackerS < defenderT) natWD_target = 5;
	if (ignorebelow && ignorebelow_target > natWD_target) wound_target = ignorebelow_target;
	else wound_target = natWD_target;
	wounds += calcCheck(hits, wound_target, wMod, rerollHIT_target).successes;
	//reroll hits
	let calc_rerollWD = calcCheck(hits, wound_target, wMod, rerollWD_target).rerolls;
	if (rerollWD) wounds += calc_rerollWD;
	//ignore below successes
	let ignorebonus = 0;
	if (ignorebelow && ignorebelow_target > natWD_target) ignorebonus = calcCheck(hits, wound_target, wMod, rerollHIT_target).failures;
	//bonus ap on
	let calc_bonusap = calcCheck(hits, bonusap_target, 0, 0).successes;
	if (bonusap) apsaves += calc_bonusap;
	//bonus ap on
	let calc_autodamage = calcCheck(hits, autodamage_target, 0, 0).successes;
	if (autodamage) damages += calc_autodamage;
	//mortals on wounds
	let calc_mortalsOnWD = calcCheck(hits, mortalsOnWD_target, 0, 0).successes * mortalsOnWD_amount;
	if (mortalsOnWD) mortals += calc_mortalsOnWD;

	// Saves
	// Saves
	// Saves

	let save_target = 7;
	if (invuln && invuln_target < defenderSv + attackerAP - svMod) save_target = invuln;
	else save_target = defenderSv + attackerAP;
	damages += calcCheck(wounds, save_target, svMod, 0).failures;
	if (apsaves) {
		if (invuln && invuln_target < defenderSv + attackerAP - svMod) save_target = invuln;
		else save_target = defenderSv + attackerAP;
		apdamages = calcCheck(wounds, save_target, svMod, 0).failures;
		damages += apdamages
	}

	// Damages
	// Damages
	// Damages

	let damage_amount = 0;
	let nonlethal_damages = 0;
	let lethal_damages = 0;
	let ineffective = 0;
	let effective = 0;
	let leftover = defenderW;
	let fnp_saves = 0;

	for (let i = 0; i < mortals + damages; i++) {
		if (i >= mortals) {
			if (randomDamage) {
				damage_amount = averageRoll(randomDamageDice, randomDamageDenom, randomDamageMod)
			} else {
				damage_amount = attackerD;
			}
		} else {
			damage_amount = 1;
		}
		leftover = leftover - damage_amount;
		if (leftover > 0) {
			nonlethal_damages++;
			effective += damage_amount;
			total_damage += damage_amount;
		} else {
			lethal_damages++;
			ineffective += leftover;
			effective += leftover + damage_amount;
			leftover = defenderW;
			total_damage += damage_amount;
		}
	}

	// Output
	// Output
	// Output

	if (total_damage) outputBox.innerHTML =
		`<span title='A quick glance at the key numbers done in the damage phase.'>Damage Spread</span>: [
		<span class='outputCataG' title='Max Damage: If the damage was done to a single target with infinite wounds.'> ${total_damage} </span>|
		<span class='outputCataR' title='Models Killed: The number of damage rolls that killed a model.'> ${lethal_damages} </span>|
		<span class='outputCataB' title='Effective Damage: Damage that was not lost by wounding a model with less remaining wounds than the incoming damage.'> ${effective} </span>]<br><br>`
	else outputBox.innerHTML = '';
	if (attacks) outputBox.innerHTML += "<span class='outputCataR' title='The number of attacks made on the defending unit.'>Attacks</span>: " + attacks + "<br>"
	if (hits) outputBox.innerHTML += "<span class='outputCataR' title='The number of successful Hit rolls.'>Hits</span>: " + hits + "<br>"
	if (extraattack) outputBox.innerHTML += "<span class='outputCataB' title='The number of extra attacks made on the Hit roll.'>Bonus attacks</span>: " + calc_extraattack + "<br>"
	if (rerollHIT) outputBox.innerHTML += "<span class='outputCataB' title='The number of Hit rerolls that would have been failures.'>Hit re-rolls</span>: " + calc_hitreroll + "<br>"
	if (extrahit) outputBox.innerHTML += "<span class='outputCataB' title='The number of extra hits made on the Hit roll.'>Bonus hits</span>: " + calc_extrahit + "<br>"
	if (autowound) outputBox.innerHTML += "<span class='outputCataB' title='The number of extra attacks made on the Hit roll.'>Autowounds</span>: " + calc_autowound + "<br>"
	if (mortalsOnHIT) outputBox.innerHTML += "<span class='outputCataB' title='The number of extra attacks made on the Hit roll.'>Mortals On Hit</span>: " + calc_mortalsOnHIT + "<br>"
	if (wounds) outputBox.innerHTML += "<span class='outputCataR' title='The number of successful Wound rolls.'>Wounds</span>: " + wounds + "<br>"
	if (rerollWD) outputBox.innerHTML += "<span class='outputCataB' title='The number of Wound rerolls that would have been failures.'>Wound re-rolls</span>: " + calc_rerollWD + "<br>"
	if (ignorebonus) outputBox.innerHTML += "<span class='outputCataB' title='The number of Wound rolls blocked by Ignore Wounds Below'>Ignored</span>: " + ignorebonus + "<br>"
	if (apsaves) outputBox.innerHTML += "<span class='outputCataB' title='The number of saves that have a bonus -" + bonusap_amount + "AP'>Bonus AP Saves</span>: " + apsaves + "<br>"
	if (autodamage) outputBox.innerHTML += "<span class='outputCataB' title='The number of wounds that bypass the save roll and automatically inflict damage.'>Auto Damage</span>: " + calc_autodamage + "<br>"
	if (mortalsOnWD) outputBox.innerHTML += "<span class='outputCataB' title='The number of extra attacks made on the Wound roll.'>Mortals On Wound</span>: " + calc_mortalsOnWD + "<br>"
	if (damages) outputBox.innerHTML += "<span class='outputCataR' title='The number of failed save rolls'>Failed Saves</span>: " + damages + "<br>"
	if (total_damage) outputBox.innerHTML += "<span class='outputCataG' title='The number of failed save rolls'>Max Damage</span>: " + total_damage + "<br>"
	if (lethal_damages) outputBox.innerHTML += "<span class='outputCataR' title='The number of failed save rolls'>Models Killed</span>: " + lethal_damages + "<br>"
	if (effective) outputBox.innerHTML += "<span class='outputCataB' title='The number of failed save rolls'>Effective Damage</span>: " + effective + "<br>"
	if (ineffective) outputBox.innerHTML += "<span class='outputCataR' title='The number of failed save rolls'>Wasted Damage</span>: " + ineffective + "<br>"
}

// calcCheck
// calcCheck
// calcCheck

function calcCheck(amt, vs, modify, reroll) {
	console.log(amt + " " + vs + " " + modify + " " + reroll);
	let succ = Math.round(amt * ((7 - vs - modify) / 6));
	let unmod = Math.round(amt * (7 - vs / 6));
	let fail = amt - succ
	let rerollsucc = 0;
	if (reroll > 0) {
		if ((vs - modify) < reroll) {
			rerollsucc = Math.round(((7 - vs - modify) / 6));
		} else {
			rerollsucc = Math.round(fail * (reroll / 6));
		}
	}
	succ += rerollsucc
	fail -= rerollsucc
	return {
		successes: succ,
		unmodified: unmod,
		failures: fail,
		rerolls: rerollsucc
	}
}

function averageRoll(dice, denom, mod) {
	let average = 0;
	let lower = dice;
	let upper = dice * denom
	average = (upper - lower) / 2
	average += dice - 1
	average = Math.round(average)
	return average + mod
}
