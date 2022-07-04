//
// Instead of parseBS, just give the bs data to a class constructor for a force

var fD_model = {

}

var abil_model = {

}

var objective_model = {

}

var spellbook_model = {
	name: 'spellbook name',
	//psychic, litanies, etc
	type: '',
	spells: [spell_model]
}

var spell_model = {
	name: 'spell name',
	warpcharge: 0,
	target: '',
	effect: '',
	duration: ''
}

var relic_model = {
	name: 'relic name',
	eligible: (target) => {},
	statline: {},
	ability: abil_model
}

var stratagem_model = {
	name: '',
	faction: '',
	subfaction: '',
	keys: [''],
	activate: {
		type: 'passive/p_aura/triggered/t_aura/activated/a_aura',
		when: 'beginning/in/end',
		who: 'your/the/enemy',
		phase: 'command/movement/psychic/charge/fight/morale/any',
		trigger: 'freeform description ("when a unit you control is selected...")'
	},
	rules: 'Text with <links>',
	rules_text: 'Text without links'
}

var unit_model = {
	name: '',
	cost: {
		pts: (models, wargear) => {},
		pl: (models) => {}
	},
	models: [model_model],
	abilities: [abil_model],
	psyker: {
		cast: 0,
		deny: 0,
		spellbook: [spellbook_model],
		known: [spell_model],
		smite: [spell_model],
	},
	faction_keys: [''],
	keys: ['']
}

var model_model = {
	name: '',
	//return true or false if this model can be added to this unit
	limit_rules: (army, unit) => {},
	statline: {},
	abilties: [abil_model],
	wargear: [wargear_model],
	//determine what wargear it can pick from in the wargear section
	wargear_options: [(unit) => {}]
}

var wargear_model = {
	name: 'wargear name',
	pts: 0,
	//weapon, bolter, plague weapon, flame weapon, wargear, etc.
	type: [''],
	profiles: [{
		name: 'profile name',
		statline: {}
	}],
	abilities: [abil_model]
}

var factionData_model = {
	name: 'faction name',
	// Is this a detachment?
	modes: [''],
	//Bonuses gained for taking a detachment of only this faction
	battleforged: {
		// calculate if every unit in a given detachment is of this faction
		detachmentCheck: (detach) => {},
		// All units get these abilities
		detachament_rules: [abil_model],
		stratagems: [stratagem_model],
		//Models and weapons that can be selected for upgrade
		upgrades: [{
			name: 'upgrade name',
			eligible: (target) => {},
			abilities: [abil_model]
		}],
		battleround: [],
		subfaction: [{
			name: 'subfaction name',
			bonus: abil_model,
		}]
	},
	// Units get access to these abilities no matter what
	army_rules: {
		warlord_traits: [abil_model],
		relics: [relic_model],
		//spellbooks include any table of abilties
		spellbooks: [spellbook_model]
	},
	// You can get these in matched play games
	matched_rules: {
		objectives: [objective_model]
	},
	crusade_rules: {

	},
	datasheets: [unit_model],
	waregear: [wargear_model],
	//Scans all datasheets and wargear for points costs and returns dictionary
	points: () => {}
}















/*
 █████  ██   ████████ ███████ ██████  ███    ██  █████  ████████ ██ ██    ██ ███████      ██████   █████  ███    ███ ███████
██   ██ ██      ██    ██      ██   ██ ████   ██ ██   ██    ██    ██ ██    ██ ██          ██       ██   ██ ████  ████ ██
███████ ██      ██    █████   ██████  ██ ██  ██ ███████    ██    ██ ██    ██ █████       ██   ███ ███████ ██ ████ ██ █████
██   ██ ██      ██    ██      ██   ██ ██  ██ ██ ██   ██    ██    ██  ██  ██  ██          ██    ██ ██   ██ ██  ██  ██ ██
██   ██ ███████ ██    ███████ ██   ██ ██   ████ ██   ██    ██    ██   ████   ███████      ██████  ██   ██ ██      ██ ███████
*/

//////////////////////////////////////////////////////////////////////////////

// 6's always fail
// 1's are criticals and critical saves


class Augment {
	//Modifies a target wargear, spell, or ability
	constructor() {

	}
}

class Spell {
	//Spells are just a category of abilities
	constructor() {

	}
}

class Wargear {
	//wargear are just a category of abilities
	constructor() {

	}
}

class Ability {
	constructor() {
		this.name = '';
		this.type = '';
		this.aura = 0;		// 0 means not an aura, > 0 is aura range
		this.trigger = '';
		this.fluff = '';
		this.rules = '';
		this.targets = [];
		this.check = '';	//This stat that has to pass 3/5 checks to succeed
		this.cost = 0;		//The number of strat points needed to use this
	}
	/* Types
		passive: always happening
		passive aura: always happening in and aura
		triggered: when something happens
		triggered aura: when something happens within a range
		All "activated" abilities are triggered on start of phase
	*/
}

class Model {
	constructor() {
		this.statline = {
			//Red traits
			pwr: 3,			// Rolls lower than this are an impact
			def: 3,			// Rolls < reduce impact damage by 1
			wnd: 2,			// hit points
			//Green Traits
			movement: {
				vault: 1, 	// Inches you can move vertically for free
				rally: 3, 	// Combat move immediately before or after attack
				move: 6,	// How far can you move total after free movement
				rush: 2	// Minimum value you can get on a rush or charge die
			},
			hit: 3,			// Rolls < this hit the target
			sav: 3,			// Rolls < this negate the impact
			//Blue Traits
			mag: 3,			// < adds 1 to the number of successes when casting
			mdf: 3,			// Rolls < reduce magic impact damage by 1
			cha: 3			// Max squad size is top two models cha combined
							// < adds to number of successes when unit uses strat
							// Increases strat points if leader of unit
		}
	}
}

class Unit {
	//A group of identical models in a unit
	constructor() {

	}
}

class Formation {
	constructor() {

	}
}

class Detachment {
	constructor() {

	}
}

class Force {
	constructor() {

	}
}
