//https://stackoverflow.com/questions/3225251/how-can-i-share-code-between-node-js-and-the-browser

class Calculator {
	constructor() {
		this.atkr_weapon;
		this.dfdr_model;
		this.dice = {};
		this.resetDice();
	}

	calculate(ioList, verbose) {
		let ootpoot = '';

		// ATTACKS to HITS
		// Make the attacks
		// if random attacks not checked
		if (!ioList.sim_hit_attacks.checked) {
			this.dice.tohit = ioList.sim_atkr_mdls.value * ioList.sim_atkr_a.value;
		}
		// If random attacks
		else {
			this.dice.tohit = this.rollCalc(`${ioList.sim_hit_attacks_dice.value}D${ioList.sim_hit_attacks_faces.value}+${ioList.sim_hit_attacks_mod.value}`).o.total;
		}
		// console.log('attacks: ' + this.dice.tohit);
		ootpoot += '<p class="noGap">Attacks: ' + this.dice.tohit + '</p>';

		// HITS to WOUNDS
		// Make the hit roll to get towound
		// If they auto-hit without rolling (flamer)
		if (ioList.sim_hit_autohit.checked) {
			this.dice.towound = this.dice.tohit;
		} else {
			let argList = ':';
			if (ioList.sim_hit_reroll.checked) argList += 'r' + ioList.sim_hit_reroll_target.value;
			if (ioList.sim_hit_exploding.checked) argList += 'e' + ioList.sim_hit_exploding_target.value;
			if (ioList.sim_hit_autowound.checked) argList += 'w' + ioList.sim_hit_autowound_target.value;
			// if (ioList.sim_hit_mortals.checked) argList += 'm' + ioList.sim_hit_mortals_target.value;
			// if (ioList.sim_hit_mortals || ioList.sim_hit_autowound) argList += 'n' + ioList.sim_hit_reroll__target;
			let woundParse = this.rollCalc(`${this.dice.tohit}D6+${ioList.sim_hit_mod.value}>${ioList.sim_atkr_as.value}${argList}`);
			this.dice.towound = woundParse.o.successes;
			if (woundParse.o.autowound) {
				this.dice.tosave = woundParse.o.autowound;
				this.dice.towound -= woundParse.o.autowound;
				ootpoot += '<p class="noGap">Auto-Wounds: ' + woundParse.o.autowound + '</p>';
			}
			// if (woundParse.o.mortals) {
			// 	this.dice.mortals = woundParse.o.mortals;
			// 	ootpoot += '<p class="noGap">Mortals on Hit: ' + woundParse.o.mortals + '</p>';
			// }
		}
		// console.log('hits: ' + this.dice.towound);
		ootpoot += '<p class="noGap">Hits: ' + this.dice.towound + '</p>';

		//WOUNDS to SAVES
		// If they auto-hit without rolling
		let argList = ':';
		if (ioList.sim_wound_reroll.checked) argList += 'r' + ioList.sim_wound_reroll_target.value;
		if (ioList.sim_wound_ignore.checked) argList += 'i' + ioList.sim_wound_ignore_target.value;
		if (ioList.sim_wound_bonusap.checked) {
			argList += 'w' + ioList.sim_wound_bonusap_target.value;
			this.dice.apamount += ioList.sim_wound_bonusap_amount.value;
		}
		if (ioList.sim_wound_noinvuln.checked) this.dice.noinvuln += ioList.sim_wound_noinvuln.checked;
		// Calculate toughness target
		this.dice.woundtarget = ioList.sim_atkr_s.value / ioList.sim_dfdr_t.value;
		if (this.dice.woundtarget >= 2) {
			this.dice.woundtarget = 2
		} else if (this.dice.woundtarget > 1) {
			this.dice.woundtarget = 3
		} else if (this.dice.woundtarget == 1) {
			this.dice.woundtarget = 4
		} else if (this.dice.woundtarget > 0.5) {
			this.dice.woundtarget = 5
		} else {
			this.dice.woundtarget = 6
		}
		let saveParse = this.rollCalc(`${this.dice.towound}D6+${ioList.sim_wound_mod.value}>${this.dice.woundtarget}${argList}`);
		this.dice.tosave = saveParse.o.successes;
		if (saveParse.o.autowound) {
			this.dice.bonusap = saveParse.o.autowound;
			this.dice.tosave -= saveParse.o.autowound;
			ootpoot += '<p class="noGap">Increased AP Saves: ' + saveParse.o.autowound + '</p>';
		}
		ootpoot += '<p class="noGap">Wounds: ' + this.dice.tosave + '</p>';

		//Save Roll
		let allocateParse = this.rollCalc(`${this.dice.tosave}D6+${ioList.sim_save_mod.value}>${ioList.sim_dfdr_sv.value}${argList}`);
		this.dice.todamage = allocateParse.o.failures;
		ootpoot += '<p class="noGap">Allocated: ' + this.dice.todamage + '</p>';
		ootpoot += '<p class="noGap">Damage: ' + this.dice.todamage * ioList.sim_atkr_d.value + '</p>';

		return ootpoot;
	}

	resetDice() {
		this.dice = {
			tohit: 0,
			towound: 0,
			tosave: 0,
			tofnp: 0,
			toreanimate: 0
		}
	}

	recurseDice(block) {
		try {

			if (block.dice * block.faces > 60)
				return { s: 0, t: 0, p: 0, err: 'Calculation too large' }
			let s = 0;
			let t = 0;
			for (let i = 0; i < block.dice; i++) {
				for (let j = 1; j <= block.faces; j++) {
					if (block.dice - 1) {
						// console.log('Checking a face: ' + j);
						let upstream = this.recurseDice({ dice: block.dice - 1, faces: block.faces, target: block.target, previous: block.previous + j, modifier: block.modifier })
						s += upstream.s
						t += upstream.t
					}
					else {
						t++;
						if (block.previous + j + block.modifier >= block.target) {
							// console.log('Met the target! ', block.previous, j, block.target);
							s++
						}
					}
					// console.log('Handled roll number: ' + t);
				}
				return { s: s, t: t, p: s / t, err: '' }
			}
		} catch (error) {
			return { s: 0, t: 0, p: 0, err: error }
		}
	}

	rollCalc(dice) {
		// console.log(dice);
		this.resetDice();
		// 1 - ! - single or multi roll?
		// 2 - \d - dice
		// 3 - D - denominator signifier
		// 4 - \d - dice faces
		// 5 - + or - and \d - modifier
		// 6 - > or < - comparator
		// 7 - \d - target
		// 8 - :* - arguments (like rerolls and naturals)
		// rX: reroll, nX: any natural, mX: mortals on, wX: autowounds, eX: exploding, pX: plasma self-wound, iX: transhuman, aX: AP
		dice = /(\!)?(\d+)*(D)?(\d+)([\+\-]\d+)?([><])?(\d+)?(\:.*)?/gi.exec(dice);
		let o = { //output
			total: 0,
			values: [],
			successes: undefined,
			failures: undefined
		}
		if (dice[4] && !dice[3] && !dice[2]) { //No D, so [3] is the dice
			dice[2] = dice[4];
			dice[4] = 6;
		} else if (!dice[2] && dice[4] && dice[3]) { //D, so there is 1 die
			dice[2] = 1;
		} else if (dice[2] && dice[4] && !dice[3]) { //D, so there is 1 die
			dice[2] = dice[2] + dice[4];
		}
		let i = { //input
			single: false,
			dice: Number(dice[2]),
			faces: Number(dice[4]),
			mod: ((dice[5]) ? Number(dice[5]) : 0),
			comp: dice[6],
			target: Number(dice[7]),
			args: {}
		}
		if (dice[8]) {
			let argCheck; //Check each type of argument one by one
			let argList = {
				r: 'reroll',		//Reroll this or lower
				n: 'natural',		//Greater than this before modifiers
				m: 'mortals',
				w: 'autowound',		//or bonus AP
				e: 'exploding',
				p: 'plasma',
				i: 'ignore',		//This number or below unmodified is a failure
				a: 'ap'
			}
			dice[8] = dice[8].replace(':', '');
			for (var arg of Object.keys(argList)) {
				argCheck = dice[8].match(new RegExp(`${arg}(\\d+)`)); // Check for each type of argument
				if (argCheck) i.args[argList[arg]] = argCheck[0].replace(arg, ''); // Save the number to the property
			}
			// console.log(i.args);
		}
		if (dice[1])
			i.single = true;
		if (!i.single) { // By default they make multiple checks
			//Check for ignore wounds below
			if (i.args.ignore) { i.dice -= Math.round(i.dice * (i.args.ignore / i.faces)); o.ignore = Math.round(i.dice * (i.args.ignore / i.faces)) }
			// Check for rerolls
			if (i.args.reroll) { i.dice += Math.round(i.dice * (i.args.reroll / i.faces)); o.rerolls = Math.round(i.dice * (i.args.reroll / i.faces)) }
			// Check for args that use natural or > triggers (unmodified)
			for (const arg of Object.keys(i.args)) {
				if (['natural', 'autowound', 'mortals', 'plasma'].includes(arg)) o[arg] = Math.round(i.dice * (((i.faces + 1) - i.args[arg]) / i.faces));
			}
			// This one requires two arguments
			// if (i.args.exploding) o.exploding = Math.round(i.dice * (i.args.exploding));
			if (!i.target) {
				// There may be a better formula for this: https://www.mathwords.com/e/expected_value.htm
				o.total = Math.round((i.dice + (i.dice * i.faces)) / 2) + i.mod;
			} else {
				//roll each die, add modifier, check against value, add each check to successes/failures
				let min = (i.args.ignore === undefined ? 0 : Number(i.args.ignore)) + 1 + i.mod;
				let max = i.faces + i.mod;
				let multi = (i.target - min) / ((max - min) + 1);
				if (multi > 1) multi = 1;
				// Check to see if the target was hit
				if (i.comp = '>') {
					o.successes = i.dice - Math.round(i.dice * multi);
				} else {
					o.successes = Math.round(i.dice * multi);
				}
				o.failures = i.dice - o.successes;
			}
			// Save this for simulator
			// for (let die = 0; die < i.dice; die++) {
			// 	o.values.push((die % i.faces) + 1 + i.mod);
			// }
		} else {
			o.total = this.recurseDice({ dice: i.dice, faces: i.faces, target: i.target, previous: 0, modifier: i.mod }).p
		}
		return {
			i: i,
			o: o
		}
	}
}
