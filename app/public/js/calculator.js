//https://stackoverflow.com/questions/3225251/how-can-i-share-code-between-node-js-and-the-browser

class Calculator {
	constructor() {
		this.atkr_weapon;
		this.dfdr_model;
		this.dice = {};
		this.resetDice();
	}
	calculate(ioList) {
		let ootpoot = '';
		// Make the number of attacks
		// if random attacks not checked
		if (!ioList.sim_hit_attacks.checked) {
			this.dice.tohit = ioList.sim_atkr_mdls.value * ioList.sim_atkr_a.value;
		}
		// If random number of attacks
		else {
			console.log(ioList.sim_hit_attacks_dice.value + "D" + ioList.sim_hit_attacks_faces.value + "+" + ioList.sim_hit_attacks_mod.value);
			this.dice.tohit = this.rollCalc(ioList.sim_hit_attacks_dice.value + "D" + ioList.sim_hit_attacks_faces.value + "+" + ioList.sim_hit_attacks_mod.value).o.total;
		}
		console.log("Number of attacks: " + this.dice.tohit);
		ootpoot += "<p>Number of attacks: " + this.dice.tohit + "<br>";
		// Make the hit roll to get towound
		// If they auto-hit without rolling (flamer)
		if (ioList.sim_hit_autohit.checked) {
			this.dice.towound = this.dice.tohit;
		} else {
			let argList = ':';
			if (ioList.sim_hit_reroll.checked) argList += 'r' + ioList.sim_hit_reroll_target.value;
			if (ioList.sim_hit_exploding.checked) argList += 'e' + ioList.sim_hit_exploding_target.value;
			if (ioList.sim_hit_autowound.checked) argList += 'w' + ioList.sim_hit_autowound_target.value;
			if (ioList.sim_hit_mortals.checked) argList += 'm' + ioList.sim_hit_mortals_target.value;
			// if (ioList.sim_hit_mortals || ioList.sim_hit_autowound) argList += 'n' + ioList.sim_hit_reroll__target;
			let woundParse = this.rollCalc(this.dice.tohit + "D6+" + ioList.sim_hit_mod.value + ">" + ioList.sim_atkr_as.value);

			this.dice.towound = woundParse.o.successes;
		}
		console.log("Number of hits: " + this.dice.towound);
		ootpoot += "Number of hits: " + this.dice.towound + "</p>";


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

	rollCalc(dice) {
		console.log(dice);
		this.resetDice();
		// 1 - ! - single or multi roll?
		// 2 - \d - number of dice
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
		if (dice[4] && !dice[3] && !dice[2]) { //No D, so [3] is the number of dice
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
		console.log(dice);
		if (dice[8]) {
			let argCheck; //Check each type of argument one by one
			let argList = {
				r: 'reroll',
				n: 'natural',
				m: 'mortals',
				w: 'autowound',
				e: 'exploding',
				p: 'plasma',
				i: 'ignore',
				a: 'ap'
			}
			for (var arg of Object.keys(argList)) {
				argCheck = dice[8].match(new RegExp(arg + '(\d+)')); // Check for each type of argument
				if (argCheck) i.args[argList[arg]] = argCheck[0].replace(arg, ""); // Save the number to the property
			}
			console.log(argList);
		}
		if (dice[1])
			i.single = true;
		if (!i.single) { // By default they make multiple checks
			if (!i.target) {
				// There may be a better formula for this: https://www.mathwords.com/e/expected_value.htm
				o.total = Math.round((i.dice + (i.dice * i.faces)) / 2) + i.mod;
			} else {
				//roll each die, add modifier, check against value, add each check to successes/failures
				let min = 1 + i.mod;
				let max = i.faces + i.mod;
				let multi = (i.target - min) / ((max - min) + 1);
				if (multi > 1) multi = 1;
				// Find formula for rerolling higher than 1's
				if (i.args.reroll) i.dice * (i.args.reroll / 6);
				if (i.comp = ">") {
					o.successes = i.dice - Math.round(i.dice * multi);
				} else {
					o.successes = Math.round(i.dice * multi);
				}
			}

			// Save this for simulator
			// for (let die = 0; die < i.dice; die++) {
			// 	o.values.push((die % i.faces) + 1 + i.mod);
			// }
		} else {
			// roll all dice, add mod, check against value once, return chance of success
			// Turns out you need calculus to see if the chances of hitting a target on X number of dice with Y faces and a Z modifier
			// min = dice+mon, max = dice*face+mod, avg = max-min / target-min
			let min = i.dice + i.mod;
			let max = (i.dice * i.faces) + i.mod;
			o.total = ((i.dice * i.faces - i.dice) / 2) + i.dice + i.mod;
		}
		return {
			i: i,
			o: o
		}
	}
}
