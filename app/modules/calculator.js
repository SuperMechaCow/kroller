class Calculator {
	constructor() {
		this.atkr_weapon;
		this.dfdr_model;
		this.dice = {
			tohit: 0,
			towound: 0,
			tosave: 0,
			tofnp: 0,
			toreanimate: 0
		}
	}
	calculate() {
		// if random attacks not checked
		// this.tohit = atkr_weapon.models * atkr_weapon.a
		// else
		// this.tohit = for each dice, roll 1-face, then add mod

	}
	rollCalc(dice) {
		// 1 - ! - single or multi roll?
		// 2 - \d - number of dice
		// 3 - D - denominator signifier
		// 4 - \d - dice faces
		// 5 - + or - and \d - modifier
		// 6 - > or < - comparator
		// 7 - \d - target
		// 8 - :* - arguments (like rerolls and naturals)
		dice = /(\!)?(\d+)*(D)?(\d+)([\+\-]\d+)?([><])?(\d+)?(:.*)?$/gi.exec(dice);
		let o = { //output
			total: 0,
			s: undefined,
			f: undefined
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
			re: undefined,
			nat: undefined
		}
		if (dice[8]) {
			let argCheck; //Check each type of argument one by one
			// Rerolls (r)
			argCheck = dice[8].match(/r(\d+|f)/);
			if (argCheck)
				i.re = argCheck[0].replace("r", "");
			// Naturals
			argCheck = dice[8].match(/n(\d+)/);
			if (argCheck)
				i.nat = Number(argCheck[0].replace("n", ""));
		}
		if (dice[1])
			i.single = true;
		if (!i.single) { // By default they make multiple checks
			if (!i.target) {
				// There may be a better formula for this: https://www.mathwords.com/e/expected_value.htm
				o.total = Math.round((i.dice + (i.dice * i.faces)) / 2) + i.mod;
			} else {
				//roll each die, add modifier, check against value, add each check to s/f
				let min = 1 + i.mod;
				let max = i.faces + i.mod;
				let multi = (i.target - min) / ((max - min) + 1);
				if (i.comp = ">") {
					o.f = Math.round(i.dice * multi);
				} else {
					o.s = Math.round(i.dice * multi);
				}
			}
			if (o.f > 1)
				o.f = 1;
			if (o.f < 0)
				o.f = 0;
			if (o.f != undefined)
				o.s = i.dice - o.f;
			if (o.s != undefined)
				o.f = i.dice - o.s;
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

exports.Calculator = Calculator;
