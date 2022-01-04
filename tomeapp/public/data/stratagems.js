var Stratagems = {
	deathguard: [{
		name: "Befouled Incubators",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Epic Deed Stratagem",
		desc: "Those fighting the Death Guard soon became carriers of disease, even if the plagues do not kill them outright. On occasion their plague boils up inside them, so that when they are struck down, they burst.",
		rules: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00030\" data-tooltip-content=\"#tooltip_content00030\" data-tooltip-anchor=\"#tooltip_content00030\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">CHARACTER</span></span> model from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by that model, roll one D6: on a 3+, that enemy model’s unit suffers 1 <span class=\"tooltip00037\" data-tooltip-content=\"#tooltip_content00037\"><span class=\"tt kwbu\">mortal</span> <span class=\"tt kwbu\">wound</span></span> after your model has resolved all of its attacks (a maximum of 3 mortal wounds can be inflicted per phase via this Stratagem).",
		rulesText: "Use this Stratagem in the Fight phase, when a DEATH GUARD CHARACTER model from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by that model, roll one D6: on a 3+, that enemy model’s unit suffers 1 mortal wound after your model has resolved all of its attacks (a maximum of 3 mortal wounds can be inflicted per phase via this Stratagem).",
		activate: {
			when: "in the",
			phase: "Fight"
		},
		links: ["Fight phase"],
		keywords: ["Death Guard", "CHARACTER", "mortal wound"],
		subkeys: ["DEATH", "GUARD", "CHARACTER", "mortal", "wound"]
	}, {
		name: "Belching Fumes",
		cost: "1CP/2CP",
		type: "matched",
		faction: "Death Guard",
		category: "Strategic Ploy Stratagem",
		desc: "Especially noxious fumes pour from the Myphitic Blight-haulers’ spouts, spewingforth in billowing clouds with wet rasps.",
		rules: "Use this Stratagem at the start of your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00110\" data-tooltip-content=\"#tooltip_content00110\" data-tooltip-anchor=\"#tooltip_content00110\"><span class=\"kwb kwbu\">MYPHITIC</span> <span class=\"kwb kwbu\">BLIGHT-HAULERS</span></span> unit from your army. Until the end of the phase, each time an enemy model makes an attack with a ranged weapon against that unit, reduce the <span class=\"tooltip00006\" data-tooltip-content=\"#tooltip_content00006\"><span class=\"tt kwbu\">number</span> <span class=\"tt kwbu\">of</span> <span class=\"tt kwbu\">attacks</span></span> made with that weapon by 1 (to a minimum of 1). If that unit contains 2 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
		rulesText: "Use this Stratagem at the start of your opponent’s Shooting phase. Select one MYPHITIC BLIGHT-HAULERS unit from your army. Until the end of the phase, each time an enemy model makes an attack with a ranged weapon against that unit, reduce the number of attacks made with that weapon by 1 (to a minimum of 1). If that unit contains 2 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
		activate: {
			when: "at the start of your opponent’s",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: ["MYPHITIC BLIGHT-HAULERS", "number of attacks"],
		subkeys: ["MYPHITIC", "BLIGHT-HAULERS", "number", "of", "attacks"]
	}, {
		name: "Bilious Blood-rush",
		cost: "1CP",
		type: "matched",
		faction: "Poxmongers",
		category: "Battle Tactic Stratagem",
		desc: "Consumed by rage, the Daemon Engines of the Poxmongers open fire at their enemies at extremely close ranges.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00056\" data-tooltip-content=\"#tooltip_content00056\" data-tooltip-anchor=\"#tooltip_content00056\"><span class=\"kwb kwbu\">POXMONGERS</span> <span class=\"kwb kwbu\">DAEMON</span> <span class=\"kwb kwbu\">ENGINE</span></span> unit from your army is selected to shoot. Until the end of the phase:<br><ul><li>Models in that unit can make attacks with <span class=\"tooltip00059\" data-tooltip-content=\"#tooltip_content00059\"><span class=\"tt kwbu\">Blast</span> <span class=\"tt kwbu\">weapons</span></span> against units within <span class=\"tooltip00028\" data-tooltip-content=\"#tooltip_content00028\"><span class=\"tt kwbu\">Engagement</span> <span class=\"tt kwbu\">Range</span></span> of their unit.</li><li>Each time a ranged attack is made by a model in that unit against an enemy unit that is within Engagement Range of their unit, add 1 to that attack’s <span class=\"tooltip00001\" data-tooltip-content=\"#tooltip_content00001\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">roll</span></span>.</li></ul>",
		rulesText: "Use this Stratagem in your Shooting phase, when a POXMONGERS DAEMON ENGINE unit from your army is selected to shoot. Until the end of the phase:\n\nModels in that unit can make attacks with Blast weapons against units within Engagement Range of their unit.\nEach time a ranged attack is made by a model in that unit against an enemy unit that is within Engagement Range of their unit, add 1 to that attack’s hit roll.",
		activate: {
			when: "in your",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: ["Poxmongers", "DAEMON ENGINE", "Blast weapons", "Engagement Range", "hit roll"],
		subkeys: ["POXMONGERS", "DAEMON", "ENGINE", "Blast", "weapons", "Engagement", "Range", "hit", "roll"]
	}, {
		name: "Blight Bombardment",
		cost: "2CP/3CP",
		type: "matched",
		faction: "Death Guard",
		category: "Strategic Ploy Stratagem",
		desc: "Utilising far away artillery, the Death Guard pound an area of the battlefield with flesh-starved blight spores that rampantly spread over any unfortunate enough to be nearby.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, if a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"tooltip00046\" data-tooltip-content=\"#tooltip_content00046\"><span class=\"tt kwbu\"><span class=\"kwb\">WARLORD</span></span></span> from your army is on the battlefield. Select one point on the battlefield and place a marker on that point. At the start of your next Command phase, roll one D6 for each unit within 6\" of the centre of that marker, adding 1 if the unit being rolled for is an <span class=\"kwb\">INFANTRY</span> unit and subtracting 1 if the unit being rolled for is a <span class=\"tooltip00035\" data-tooltip-content=\"#tooltip_content00035\"><span class=\"tt kwbu\"><span class=\"kwb\">CHARACTER</span></span></span>: on a 2-6, that unit suffers D3 <span class=\"tooltip00037\" data-tooltip-content=\"#tooltip_content00037\"><span class=\"tt kwbu\">mortal</span> <span class=\"tt kwbu\">wounds</span></span>; on a 7+, that unit suffers D6 mortal wounds. The marker is then removed. If your <span class=\"kwb\">WARLORD</span> has the <span class=\"tooltip00069\" data-tooltip-content=\"#tooltip_content00069\" data-tooltip-anchor=\"#tooltip_content00069\"><span class=\"kwb kwbu\">LORD</span> <span class=\"kwb2 kwbu\">OF</span> <span class=\"kwb kwbu\">VIRULENCE</span></span> keyword, this Stratagem costs 2CP; otherwise it costs 3CP. You can only use this Stratagem once.",
		rulesText: "Use this Stratagem in your Command phase, if a DEATH GUARD WARLORD from your army is on the battlefield. Select one point on the battlefield and place a marker on that point. At the start of your next Command phase, roll one D6 for each unit within 6\" of the centre of that marker, adding 1 if the unit being rolled for is an INFANTRY unit and subtracting 1 if the unit being rolled for is a CHARACTER: on a 2-6, that unit suffers D3 mortal wounds; on a 7+, that unit suffers D6 mortal wounds. The marker is then removed. If your WARLORD has the LORD OF VIRULENCE keyword, this Stratagem costs 2CP; otherwise it costs 3CP. You can only use this Stratagem once.",
		activate: {
			when: "in your",
			phase: "Command"
		},
		links: ["Command phase"],
		keywords: ["WARLORD", "CHARACTER", "mortal wounds", "LORD OF VIRULENCE"],
		subkeys: ["WARLORD", "WARLORD", "CHARACTER", "CHARACTER", "mortal", "wounds", "LORD", "OF", "VIRULENCE"]
	}, {
		name: "Break Their Spirits",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Strategic Ploy Stratagem",
		desc: "Terminators are terrifying foes to face. When Death Guard Terminators slice opponents in half or unleash plague weapons that turn living beings to pools of foetid slush, they shatter the spirits of those who still live and stand against them.",
		rules: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00102\" data-tooltip-content=\"#tooltip_content00102\" data-tooltip-anchor=\"#tooltip_content00102\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">TERMINATOR</span></span> model from your army destroys a model in an enemy <span class=\"kwb\">INFANTRY</span>, <span class=\"kwb\">BEASTS</span> or <span class=\"kwb\">SWARM</span> unit. Until the end of the turn, subtract 4 from the Leadership characteristic of models in that unit.",
		rulesText: "Use this Stratagem in the Fight phase, when a DEATH GUARD TERMINATOR model from your army destroys a model in an enemy INFANTRY, BEASTS or SWARM unit. Until the end of the turn, subtract 4 from the Leadership characteristic of models in that unit.",
		activate: {
			when: "in the",
			phase: "Fight"
		},
		links: ["Fight phase"],
		keywords: ["Death Guard", "TERMINATOR"],
		subkeys: ["DEATH", "GUARD", "TERMINATOR"]
	}, {
		name: "Callous Disregard",
		cost: "2CP",
		type: "matched",
		faction: "Terminus Est Assault Force",
		category: "Strategic Ploy Stratagem",
		desc: "Even when the hordes at the fore of an assault force have reached the enemy lines, the second wave simply opens fire, caring little for whether their shots hit friend or foe.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00013\" data-tooltip-content=\"#tooltip_content00013\" data-tooltip-anchor=\"#tooltip_content00013\"><span class=\"kwb kwbu\">BUBONIC</span> <span class=\"kwb kwbu\">ASTARTES</span></span> <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army that is eligible to shoot.<br><ul><li>Until the end of the turn, models in that unit can target enemy units within <span class=\"tooltip00028\" data-tooltip-content=\"#tooltip_content00028\"><span class=\"tt kwbu\">Engagement</span> <span class=\"tt kwbu\">Range</span></span> of friendly <span class=\"tooltip00015\" data-tooltip-content=\"#tooltip_content00015\" data-tooltip-anchor=\"#tooltip_content00015\"><span class=\"kwb kwbu\">POXWALKERS</span></span> or <span class=\"tooltip00017\" data-tooltip-content=\"#tooltip_content00017\" data-tooltip-anchor=\"#tooltip_content00017\"><span class=\"kwb kwbu\">PLAGUE</span> <span class=\"kwb kwbu\">FOLLOWERS</span></span> units from your army.</li><li>Each time a model in that unit makes an attack against an enemy unit within Engagement Range of a friendly <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit, subtract 1 from the <span class=\"tooltip00001\" data-tooltip-content=\"#tooltip_content00001\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">roll</span></span>, and if the hit roll is not successful, that attack scores a hit against that <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit instead.</li></ul>",
		rulesText: "Use this Stratagem in your Shooting phase. Select one BUBONIC ASTARTES TERMINUS EST ASSAULT FORCE unit from your army that is eligible to shoot.\n\nUntil the end of the turn, models in that unit can target enemy units within Engagement Range of friendly POXWALKERS or PLAGUE FOLLOWERS units from your army.\nEach time a model in that unit makes an attack against an enemy unit within Engagement Range of a friendly POXWALKERS or PLAGUE FOLLOWERS unit, subtract 1 from the hit roll, and if the hit roll is not successful, that attack scores a hit against that POXWALKERS or PLAGUE FOLLOWERS unit instead.",
		activate: {
			when: "in your",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: ["BUBONIC ASTARTES", "Engagement Range", "POXWALKERS", "PLAGUE FOLLOWERS", "hit roll"],
		subkeys: ["BUBONIC", "ASTARTES", "Engagement", "Range", "PLAGUE", "FOLLOWERS", "hit", "roll"]
	}, {
		name: "Champion Of Disease",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Requisition Stratagem",
		desc: "Some Death Guard are marked for greatness before they rise high in the Legion's ranks. Some of these warriors are gifted the opportunity to wield rare relic weapons in Nurglc’s name.",
		rules: "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"tooltip00013\" data-tooltip-content=\"#tooltip_content00013\" data-tooltip-anchor=\"#tooltip_content00013\"><span class=\"kwb kwbu\">BUBONIC</span> <span class=\"kwb kwbu\">ASTARTES</span></span> model from your army that has the word ‘Champion’ in their profile and give them one of the following <a href=\"/wh40k9ed/factions/death-guard/#Relics-of-Decay\">Relics of Decay</a> (this must be a Relic they could have): <a href=\"/wh40k9ed/factions/death-guard/#Reaper-of-Glorious-Entropy\">Reaper of Glorious Entropy</a>; <a href=\"/wh40k9ed/factions/death-guard/#Plague-Skull-of-Glothila\">Plague Skull of Glothila</a>; <a href=\"/wh40k9ed/factions/death-guard/#Plaguebringer\">Plaguebringer</a>; <a href=\"/wh40k9ed/factions/death-guard/#Suppurating-Plate\">Suppurating Plate</a>.<br><br>Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case, you can use this Stratagem twice) or an Onslaught battle (in which case, you can use this Stratagem three times).",
		rulesText: "Use this Stratagem before the battle, when you are mustering your army. Select one BUBONIC ASTARTES model from your army that has the word ‘Champion’ in their profile and give them one of the following Relics of Decay (this must be a Relic they could have): Reaper of Glorious Entropy; Plague Skull of Glothila; Plaguebringer; Suppurating Plate.\n\nEach Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case, you can use this Stratagem twice) or an Onslaught battle (in which case, you can use this Stratagem three times).",
		activate: {
			when: "before the battle, when you are mustering your army",
			phase: "Relics"
		},
		links: ["Relics of Decay", "Reaper of Glorious Entropy", "Plague Skull of Glothila", "Plaguebringer", "Suppurating Plate"],
		keywords: ["BUBONIC ASTARTES"],
		subkeys: ["BUBONIC", "ASTARTES"]
	}, {
		name: "Cloud Of Flies",
		cost: "2CP/4CP",
		type: "matched",
		faction: "Death Guard",
		category: "Strategic Ploy Stratagem",
		desc: "With a thrumming roar, a thick cloud of daemon flies whirls around the Death Guard and obscures them from the enemy's sight.",
		rules: "Use this Stratagem at the start of your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00095\" data-tooltip-content=\"#tooltip_content00095\" data-tooltip-anchor=\"#tooltip_content00095\"><span class=\"kwb kwbu\">BUBONIC</span> <span class=\"kwb kwbu\">ASTARTES</span> <span class=\"kwb kwbu\">INFANTRY</span></span> unit from your army. Until the end of the phase, each time an enemy model shoots, if that unit is not the closest eligible target or within 12\" of that model, then until that shooting is resolved, that model cannot target that unit. In addition, until the end of the phase, if the selected unit has the <span class=\"redfont\">Bodyguard</span> ability, it loses that ability. If the selected unit has the <span class=\"kwb\">TERMINATOR</span> keyword, this Stratagem costs 4CP; otherwise, it costs 2CP.",
		rulesText: "Use this Stratagem at the start of your opponent’s Shooting phase. Select one BUBONIC ASTARTES INFANTRY unit from your army. Until the end of the phase, each time an enemy model shoots, if that unit is not the closest eligible target or within 12\" of that model, then until that shooting is resolved, that model cannot target that unit. In addition, until the end of the phase, if the selected unit has the Bodyguard ability, it loses that ability. If the selected unit has the TERMINATOR keyword, this Stratagem costs 4CP; otherwise, it costs 2CP.",
		activate: {
			when: "at the start of your opponent’s",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: ["BUBONIC ASTARTES INFANTRY"],
		subkeys: ["BUBONIC", "ASTARTES", "INFANTRY"]
	}, {
		name: "Creeping Blight",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Battle Tactic Stratagem",
		desc: "This warp-plague spreads fingers of corrosion through armour, flesh, bone and even air with equal virulence.",
		rules: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack with a <span class=\"tooltip00011\" data-tooltip-content=\"#tooltip_content00011\"><span class=\"tt kwbu\">plague</span> <span class=\"tt kwbu\">weapon</span></span>, on an unmodified <span class=\"tooltip00002\" data-tooltip-content=\"#tooltip_content00002\"><span class=\"tt kwbu\">wound</span> <span class=\"tt kwbu\">roll</span></span> of 6, that attack has an Armour Penetration characteristic of -4.",
		rulesText: "Use this Stratagem in the Fight phase, when a DEATH GUARD unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack with a plague weapon, on an unmodified wound roll of 6, that attack has an Armour Penetration characteristic of -4.",
		activate: {
			when: "in the",
			phase: "Fight"
		},
		links: ["Fight phase"],
		keywords: ["plague weapon", "wound roll"],
		subkeys: ["plague", "weapon", "wound", "roll"]
	}, {
		name: "Daemonic Gluttony",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Strategic Ploy Stratagem",
		desc: "Daemons can restore their energy and strength by consuming the souls of mortals.",
		rules: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00121\" data-tooltip-content=\"#tooltip_content00121\" data-tooltip-anchor=\"#tooltip_content00121\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">DAEMON</span> <span class=\"kwb kwbu\">ENGINE</span></span> model from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by that model, that <span class=\"kwb\">DAEMON</span> <span class=\"kwb\">ENGINE</span> model regains 1 lost wound (to a maximum of 3 regained wounds per phase).",
		rulesText: "Use this Stratagem in the Fight phase, when a DEATH GUARD DAEMON ENGINE model from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by that model, that DAEMON ENGINE model regains 1 lost wound (to a maximum of 3 regained wounds per phase).",
		activate: {
			when: "in the",
			phase: "Fight"
		},
		links: ["Fight phase"],
		keywords: ["Death Guard", "DAEMON ENGINE"],
		subkeys: ["DEATH", "GUARD", "DAEMON", "ENGINE"]
	}, {
		name: "Dark Cravings",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Strategic Ploy Stratagem",
		desc: "The vicious daemons bound with Foetid Bloat-drones are particularly cruel and dangerous, hungering after enemies in ferocious pursuits.",
		rules: "Use this Stratagem in your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one <span class=\"tooltip00115\" data-tooltip-content=\"#tooltip_content00115\" data-tooltip-anchor=\"#tooltip_content00115\"><span class=\"kwb kwbu\">FOETID</span> <span class=\"kwb kwbu\">BLOAT-DRONE</span></span> unit from your army. Until the end of the phase, if that unit is within 6\" horizontally and 5\" vertically of any enemy units, it is eligible to <span class=\"tooltip00051\" data-tooltip-content=\"#tooltip_content00051\"><span class=\"tt kwbu\">perform</span> <span class=\"tt kwbu\">Heroic</span> <span class=\"tt kwbu\">Interventions</span></span> as if it was a <span class=\"tooltip00035\" data-tooltip-content=\"#tooltip_content00035\"><span class=\"tt kwbu\"><span class=\"kwb\">CHARACTER</span></span></span>. When doing so, it can move up to 6\" instead of 3\". All other rules for Heroic Interventions still apply.",
		rulesText: "Use this Stratagem in your opponent’s Charge phase. Select one FOETID BLOAT-DRONE unit from your army. Until the end of the phase, if that unit is within 6\" horizontally and 5\" vertically of any enemy units, it is eligible to perform Heroic Interventions as if it was a CHARACTER. When doing so, it can move up to 6\" instead of 3\". All other rules for Heroic Interventions still apply.",
		activate: {
			when: "in your opponent’s",
			phase: "Charge"
		},
		links: ["Charge phase"],
		keywords: ["FOETID BLOAT-DRONE", "perform Heroic Interventions", "CHARACTER"],
		subkeys: ["FOETID", "BLOAT-DRONE", "perform", "Heroic", "Interventions", "CHARACTER", "CHARACTER"]
	}, {
		name: "Diseased Effluents",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Epic Deed Stratagem",
		desc: "The foul liquids coursing through some Death Guard warriors are weapons in themselves. If unleashed, they drench a foe in toxic slime and effluvia that can kill in minutes.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00030\" data-tooltip-content=\"#tooltip_content00030\" data-tooltip-anchor=\"#tooltip_content00030\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">CHARACTER</span></span> model from your army (excluding <span class=\"tooltip00071\" data-tooltip-content=\"#tooltip_content00071\" data-tooltip-anchor=\"#tooltip_content00071\"><span class=\"kwb kwbu\">DAEMON</span></span> models) and one enemy unit within <span class=\"tooltip00028\" data-tooltip-content=\"#tooltip_content00028\"><span class=\"tt kwbu\">Engagement</span> <span class=\"tt kwbu\">Range</span></span> of that model. That model suffers 1 <span class=\"tooltip00037\" data-tooltip-content=\"#tooltip_content00037\"><span class=\"tt kwbu\">mortal</span> <span class=\"tt kwbu\">wound</span></span> and you then roll one D6: on a 2+, that enemy unit suffers 2D3 mortal wounds. If that enemy unit has the <span class=\"tooltip00035\" data-tooltip-content=\"#tooltip_content00035\"><span class=\"tt kwbu\"><span class=\"kwb\">CHARACTER</span></span></span> keyword (excluding <span class=\"kwb\">VEHICLE</span> units), it suffers D3 mortal wounds instead.",
		rulesText: "Use this Stratagem in your Command phase. Select one DEATH GUARD CHARACTER model from your army (excluding DAEMON models) and one enemy unit within Engagement Range of that model. That model suffers 1 mortal wound and you then roll one D6: on a 2+, that enemy unit suffers 2D3 mortal wounds. If that enemy unit has the CHARACTER keyword (excluding VEHICLE units), it suffers D3 mortal wounds instead.",
		activate: {
			when: "in your",
			phase: "Command"
		},
		links: ["Command phase"],
		keywords: ["Death Guard", "CHARACTER", "DAEMON", "Engagement Range", "mortal wound", "CHARACTER"],
		subkeys: ["DEATH", "GUARD", "CHARACTER", "Engagement", "Range", "mortal", "wound", "CHARACTER", "CHARACTER"]
	}, {
		name: "Disgusting Force",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Wargear Stratagem",
		desc: "Plagueburst Crawlers can fire rounds with additional potency and force that are overloaded with flesh-melting diseases and armourrusting poxes.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00093\" data-tooltip-content=\"#tooltip_content00093\" data-tooltip-anchor=\"#tooltip_content00093\"><span class=\"kwb kwbu\">PLAGUEBURST</span> <span class=\"kwb kwbu\">CRAWLER</span></span> model from your army is selected to shoot. Until the end of the phase:<br><ul><li>Each time that model makes an attack with a Plagueburst mortar, that attack has a Damage characteristic of 3.</li><li>After that model has shot, select one enemy unit that was hit by one or more attacks made with a Plagueburst mortar by that model this turn. Roll one D6 for each other unit within 3\" (excluding <span class=\"kwb\">NURGLE</span> units) of the selected unit: on a 4+, that unit suffers 1 <span class=\"tooltip00037\" data-tooltip-content=\"#tooltip_content00037\"><span class=\"tt kwbu\">mortal</span> <span class=\"tt kwbu\">wound</span></span>.</li></ul>",
		rulesText: "Use this Stratagem in your Shooting phase, when a PLAGUEBURST CRAWLER model from your army is selected to shoot. Until the end of the phase:\n\nEach time that model makes an attack with a Plagueburst mortar, that attack has a Damage characteristic of 3.\nAfter that model has shot, select one enemy unit that was hit by one or more attacks made with a Plagueburst mortar by that model this turn. Roll one D6 for each other unit within 3\" (excluding NURGLE units) of the selected unit: on a 4+, that unit suffers 1 mortal wound.",
		activate: {
			when: "in your",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: ["PLAGUEBURST CRAWLER", "mortal wound"],
		subkeys: ["PLAGUEBURST", "CRAWLER", "mortal", "wound"]
	}, {
		name: "Eruption Of Filth",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Epic Deed Stratagem",
		desc: "The slain warrior bursts like a fat, pox-laden buboe.",
		rules: "Use this Stratagem in any phase, when a <span class=\"tooltip00030\" data-tooltip-content=\"#tooltip_content00030\" data-tooltip-anchor=\"#tooltip_content00030\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">CHARACTER</span></span> model from your army is destroyed instead of using any other rules that are triggered when a model is destroyed (e.g. the <span class=\"redfont\">Putrid Explosion</span> ability). Before removing that model from play, roll one D6 for each other unit within 3\" (excluding <span class=\"kwb\">NURGLE</span> units): on a 2-5, that unit suffers 1 <span class=\"tooltip00037\" data-tooltip-content=\"#tooltip_content00037\"><span class=\"tt kwbu\">mortal</span> <span class=\"tt kwbu\">wound</span></span>; on a 6, that unit suffers D3 mortal wounds.",
		rulesText: "Use this Stratagem in any phase, when a DEATH GUARD CHARACTER model from your army is destroyed instead of using any other rules that are triggered when a model is destroyed (e.g. the Putrid Explosion ability). Before removing that model from play, roll one D6 for each other unit within 3\" (excluding NURGLE units): on a 2-5, that unit suffers 1 mortal wound; on a 6, that unit suffers D3 mortal wounds.",
		activate: {
			when: "in any phase, when a <span class=\"tooltip00030\" data-tooltip-content=\"#tooltip_content00030\" data-tooltip-anchor=\"#tooltip_content00030\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">CHARACTER</span></span> model from your army is destroyed instead of using any other rules that are triggered when a model is destroyed (e.g",
			phase: "Any"
		},
		links: [],
		keywords: ["Death Guard", "CHARACTER", "mortal wound"],
		subkeys: ["DEATH", "GUARD", "CHARACTER", "mortal", "wound"]
	}, {
		name: "Eternal Hatred",
		cost: "2CP",
		type: "matched",
		faction: "Death Guard",
		category: "Battle Tactic Stratagem",
		desc: "The hatred of the Traitor Legions has burned for millennia.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00095\" data-tooltip-content=\"#tooltip_content00095\" data-tooltip-anchor=\"#tooltip_content00095\"><span class=\"kwb kwbu\">BUBONIC</span> <span class=\"kwb kwbu\">ASTARTES</span> <span class=\"kwb kwbu\">INFANTRY</span></span> unit from your army is selected to shoot, or in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attacks <span class=\"tooltip00002\" data-tooltip-content=\"#tooltip_content00002\"><span class=\"tt kwbu\">wound</span> <span class=\"tt kwbu\">roll</span></span>.",
		rulesText: "Use this Stratagem in your Shooting phase, when a BUBONIC ASTARTES INFANTRY unit from your army is selected to shoot, or in the Fight phase, when a BUBONIC ASTARTES INFANTRY unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attacks wound roll.",
		activate: {
			when: "in your",
			phase: "Shooting"
		},
		links: ["Shooting phase", "Fight phase"],
		keywords: ["BUBONIC ASTARTES INFANTRY", "wound roll"],
		subkeys: ["BUBONIC", "ASTARTES", "INFANTRY", "wound", "roll"]
	}, {
		name: "Ferric Miasma",
		cost: "1CP",
		type: "matched",
		faction: "Inexorable",
		category: "Strategic Ploy Stratagem",
		desc: "As the foe press forward they are engulfed in a whirling storm of fleshrust flakes that clog lungs and eyes.",
		rules: "Use this Stratagem in your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>, when an <span class=\"kwb\">INEXORABLE</span> unit from your army is selected as a target of a charge. Until the end of the phase, subtract 2 from <span class=\"tooltip00029\" data-tooltip-content=\"#tooltip_content00029\"><span class=\"tt kwbu\">charge</span> <span class=\"tt kwbu\">rolls</span></span> made for any unit that declares a charge against that <span class=\"kwb\">INEXORABLE</span> unit (to a minimum of 1).",
		rulesText: "Use this Stratagem in your opponent’s Charge phase, when an INEXORABLE unit from your army is selected as a target of a charge. Until the end of the phase, subtract 2 from charge rolls made for any unit that declares a charge against that INEXORABLE unit (to a minimum of 1).",
		activate: {
			when: "in your opponent’s",
			phase: "Charge"
		},
		links: ["Charge phase"],
		keywords: ["charge rolls"],
		subkeys: ["charge", "rolls"]
	}, {
		name: "Fire Fever",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Battle Tactic Stratagem",
		desc: "Empyric fever-heat burns through the Helbrutes brain, causing it to fire with ever more frenzied ferocity as it rails against its agony.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00097\" data-tooltip-content=\"#tooltip_content00097\" data-tooltip-anchor=\"#tooltip_content00097\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">HELBRUTE</span></span> model from your army is selected to shoot. Until the end of the phase, that model can only target a single eligible enemy unit and each time an attack is made by that model, add 1 to that attacks <span class=\"tooltip00001\" data-tooltip-content=\"#tooltip_content00001\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">roll</span></span> and add 1 to that attack’s <span class=\"tooltip00002\" data-tooltip-content=\"#tooltip_content00002\"><span class=\"tt kwbu\">wound</span> <span class=\"tt kwbu\">roll</span></span>.",
		rulesText: "Use this Stratagem in your Shooting phase, when a DEATH GUARD HELBRUTE model from your army is selected to shoot. Until the end of the phase, that model can only target a single eligible enemy unit and each time an attack is made by that model, add 1 to that attacks hit roll and add 1 to that attack’s wound roll.",
		activate: {
			when: "in your",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: ["Death Guard", "HELBRUTE", "hit roll", "wound roll"],
		subkeys: ["DEATH", "GUARD", "HELBRUTE", "hit", "roll", "wound", "roll"]
	}, {
		name: "Flash Outbreak",
		cost: "2CP",
		type: "matched",
		faction: "Death Guard",
		category: "Strategic Ploy Stratagem",
		desc: "On occasion a contagion of Nurgle will flare up brilliantly in an all-consuming wave of infection.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00041\" data-tooltip-content=\"#tooltip_content00041\" data-tooltip-anchor=\"#tooltip_content00041\"><span class=\"kwb2 kwbu\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb kwbu\">COMPANY&gt;</span></span> unit with the <span class=\"tooltip00043\" data-tooltip-content=\"#tooltip_content00043\"><span class=\"tt kwbu\">Contagions</span> <span class=\"tt kwbu\">of</span> <span class=\"tt kwbu\">Nurgle</span></span> ability from your army:<br><ul><li>If there are any other <span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span> units from your army on the battlefield that have any <span class=\"tooltip00043\" data-tooltip-content=\"#tooltip_content00043\"><span class=\"tt kwbu\">Contagion</span> <span class=\"tt kwbu\">abilities</span></span> that the selected unit does not have, then until the start of your next Command phase, the selected unit has all of the same Contagion abilities (this is in addition to the ones it already has).</li><li>Until the start of your next Command phase, units from your army count the battle round number as one higher than the current battle round number for the purpose of determining the Contagion range of any Contagion abilities they have.</li></ul>",
		rulesText: "Use this Stratagem in your Command phase. Select one <PLAGUE COMPANY> unit with the Contagions of Nurgle ability from your army:\n\nIf there are any other <PLAGUE COMPANY> units from your army on the battlefield that have any Contagion abilities that the selected unit does not have, then until the start of your next Command phase, the selected unit has all of the same Contagion abilities (this is in addition to the ones it already has).\nUntil the start of your next Command phase, units from your army count the battle round number as one higher than the current battle round number for the purpose of determining the Contagion range of any Contagion abilities they have.",
		activate: {
			when: "in your",
			phase: "Command"
		},
		links: ["Command phase"],
		keywords: ["<PLAGUE COMPANY>", "Contagions of Nurgle", "Contagion abilities"],
		subkeys: ["<PLAGUE", "P", "COMPANY>", "Contagions", "of", "Nurgle", "Contagion", "abilities"]
	}, {
		name: "Foul Smokescreen",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Wargear Stratagem",
		desc: "Throwing down a hail of smoke grenades or deploying their smoke launchers, the Death Guard screen themselves from the enemy.",
		rules: "Use this Stratagem in your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00113\" data-tooltip-content=\"#tooltip_content00113\" data-tooltip-anchor=\"#tooltip_content00113\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">SMOKESCREEN</span></span> unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, subtract 1 from that attacks <span class=\"tooltip00001\" data-tooltip-content=\"#tooltip_content00001\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">roll</span></span>.",
		rulesText: "Use this Stratagem in your opponent’s Shooting phase, when a DEATH GUARD SMOKESCREEN unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, subtract 1 from that attacks hit roll.",
		activate: {
			when: "in your opponent’s",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: ["Death Guard", "SMOKESCREEN", "hit roll"],
		subkeys: ["DEATH", "GUARD", "SMOKESCREEN", "hit", "roll"]
	}, {
		name: "Gifts Of Decay",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Requisition Stratagem",
		desc: "Nurgle is a generous god, and through worship and devotion his followers can gain mighty rewards. Those who prove themselves most worthy wield suppurating weapons of unspeakable foulness, or gird themselves in weeping armour of filth.",
		rules: "Use this Stratagem before the battle, when you are mustering your army, if your <span class=\"tooltip00046\" data-tooltip-content=\"#tooltip_content00046\"><span class=\"tt kwbu\"><span class=\"kwb\">WARLORD</span></span></span> has the <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> keyword. Select one <span class=\"tooltip00030\" data-tooltip-content=\"#tooltip_content00030\" data-tooltip-anchor=\"#tooltip_content00030\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">CHARACTER</span></span> model from your army and give them one <a href=\"/wh40k9ed/factions/death-guard/#Relics-of-Decay\">Relic of Decay</a> (this must be a Relic they could have). Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case, you can use this Stratagem twice) or an Onslaught battle (in which case, you can use this Stratagem three times).",
		rulesText: "Use this Stratagem before the battle, when you are mustering your army, if your WARLORD has the DEATH GUARD keyword. Select one DEATH GUARD CHARACTER model from your army and give them one Relic of Decay (this must be a Relic they could have). Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case, you can use this Stratagem twice) or an Onslaught battle (in which case, you can use this Stratagem three times).",
		activate: {
			when: "before the battle, when you are mustering your army, if your",
			phase: "Relic"
		},
		links: ["Relic of Decay"],
		keywords: ["WARLORD", "Death Guard", "CHARACTER"],
		subkeys: ["WARLORD", "WARLORD", "DEATH", "GUARD", "CHARACTER"]
	}, {
		name: "Grandfatherly Influence",
		cost: "1CP/2CP",
		type: "matched",
		faction: "Death Guard",
		category: "Requisition Stratagem",
		desc: "The Chaos Spawn created thanks to Nurgle’s ‘blessings’ are hideously tough.",
		rules: "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"tooltip00065\" data-tooltip-content=\"#tooltip_content00065\" data-tooltip-anchor=\"#tooltip_content00065\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">CHAOS</span> <span class=\"kwb kwbu\">SPAWN</span></span> unit from your army:<br><ul><li>Add 1 to the Toughness characteristic of models in that unit.</li><li>That unit has the <span class=\"tooltip00132\" data-tooltip-content=\"#tooltip_content00132\"><span class=\"tt kwbu\">Disgustingly</span> <span class=\"tt kwbu\">Resilient</span></span> ability.</li></ul>If that unit contains 3 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
		rulesText: "Use this Stratagem before the battle, when you are mustering your army. Select one DEATH GUARD CHAOS SPAWN unit from your army:\n\nAdd 1 to the Toughness characteristic of models in that unit.\nThat unit has the Disgustingly Resilient ability.\nIf that unit contains 3 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
		activate: {
			when: "before the battle",
			phase: "when you are mustering your army"
		},
		links: [],
		keywords: ["Death Guard", "CHAOS SPAWN", "Disgustingly Resilient"],
		subkeys: ["DEATH", "GUARD", "CHAOS", "SPAWN", "Disgustingly", "Resilient"]
	}, {
		name: "Haze Of Corruption",
		cost: "2CP",
		type: "matched",
		faction: "Death Guard",
		category: "Battle Tactic Stratagem",
		desc: "The close combat weapons of many Death Guard warriors are coated with terrible venoms. When they swing these weapons, the air is filled with corruption that can infect those nearby.",
		rules: "Use this <a href=\"/wh40k9ed/the-rules/core-rules/#Stratagems\">Stratagem</a> in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00104\" data-tooltip-content=\"#tooltip_content00104\" data-tooltip-anchor=\"#tooltip_content00104\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">CORE</span></span> unit from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by a model in that unit, any excess damage inflicted by that attack is not lost and is instead suffered by another model in that unit (do not make a <span class=\"tooltip00057\" data-tooltip-content=\"#tooltip_content00057\"><span class=\"tt kwbu\">saving</span> <span class=\"tt kwbu\">throw</span></span> for that model). This continues until there is no excess damage remaining.",
		rulesText: "Use this Stratagem in the Fight phase, when a DEATH GUARD CORE unit from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by a model in that unit, any excess damage inflicted by that attack is not lost and is instead suffered by another model in that unit (do not make a saving throw for that model). This continues until there is no excess damage remaining.",
		activate: {
			when: "Use this",
			phase: "Stratagem"
		},
		links: ["Stratagem", "Fight phase"],
		keywords: ["Death Guard", "CORE", "saving throw"],
		subkeys: ["DEATH", "GUARD", "CORE", "saving", "throw"]
	}, {
		name: "Mutant Strain",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Battle Tactic Stratagem",
		desc: "Unholy diseases warp and mutate, sending their carriers into a froth-jawed killing fever to the ruin of all.",
		rules: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00015\" data-tooltip-content=\"#tooltip_content00015\" data-tooltip-anchor=\"#tooltip_content00015\"><span class=\"kwb kwbu\">POXWALKERS</span></span> unit from your army is selected to fight. Until the end of the phase, each time an attack is made by a model in that unit:<br><ul><li>An unmodified <span class=\"tooltip00001\" data-tooltip-content=\"#tooltip_content00001\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">roll</span></span> of 6 inflicts 1 <span class=\"tooltip00037\" data-tooltip-content=\"#tooltip_content00037\"><span class=\"tt kwbu\">mortal</span> <span class=\"tt kwbu\">wound</span></span> on the target in addition to any normal damage.</li><li>An unmodified hit roll of 1 inflicts 1 mortal wound on that <span class=\"kwb\">POXWALKERS</span> unit after that fight is resolved.</li></ul>",
		rulesText: "Use this Stratagem in the Fight phase, when a POXWALKERS unit from your army is selected to fight. Until the end of the phase, each time an attack is made by a model in that unit:\n\nAn unmodified hit roll of 6 inflicts 1 mortal wound on the target in addition to any normal damage.\nAn unmodified hit roll of 1 inflicts 1 mortal wound on that POXWALKERS unit after that fight is resolved.",
		activate: {
			when: "in the",
			phase: "Fight"
		},
		links: ["Fight phase"],
		keywords: ["POXWALKERS", "hit roll", "mortal wound"],
		subkeys: ["hit", "roll", "mortal", "wound"]
	}, {
		name: "On Droning Wings",
		cost: "1CP",
		type: "matched",
		faction: "Ferrymen",
		category: "Epic Deed Stratagem",
		desc: "Buzzing clouds of plague flies billow from these warriors, acting as vectors for their unholy gifts.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00060\" data-tooltip-content=\"#tooltip_content00060\" data-tooltip-anchor=\"#tooltip_content00060\"><span class=\"kwb kwbu\">FERRYMEN</span> <span class=\"kwb kwbu\">FOETID</span> <span class=\"kwb kwbu\">VIRION</span></span> model from your army, then select one of that model’s <span class=\"tooltip00010\" data-tooltip-content=\"#tooltip_content00010\"><span class=\"tt kwbu\">aura</span> <span class=\"tt kwbu\">abilities</span></span>. Until the start of your next Command phase, add 6\" to the range of that model’s selected aura ability (to a maximum of 12\").",
		rulesText: "Use this Stratagem in your Command phase. Select one FERRYMEN FOETID VIRION model from your army, then select one of that model’s aura abilities. Until the start of your next Command phase, add 6\" to the range of that model’s selected aura ability (to a maximum of 12\").",
		activate: {
			when: "in your",
			phase: "Command"
		},
		links: ["Command phase"],
		keywords: ["Ferrymen", "FOETID VIRION", "aura abilities"],
		subkeys: ["FERRYMEN", "FOETID", "VIRION", "aura", "abilities"]
	}, {
		name: "Overwhelming Generosity",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Wargear Stratagem",
		desc: "Unholy filth gushes from Nurgle’s faithful into their guns until the armaments threaten to burst like bloated corpses.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to shoot. Until the end of the phase, add 6\" to the Range characteristic of <span class=\"tooltip00133\" data-tooltip-content=\"#tooltip_content00133\"><span class=\"tt kwbu\">plague</span> <span class=\"tt kwbu\">weapons</span></span> models in that unit are equipped with.",
		rulesText: "Use this Stratagem in your Shooting phase, when a DEATH GUARD unit from your army is selected to shoot. Until the end of the phase, add 6\" to the Range characteristic of plague weapons models in that unit are equipped with.",
		activate: {
			when: "in your",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: ["plague weapons"],
		subkeys: ["plague", "weapons"]
	}, {
		name: "Pestilential Drop",
		cost: "2CP",
		type: "matched",
		faction: "Terminus Est Assault Force",
		category: "Strategic Ploy Stratagem",
		desc: "Assault force troops arrive on the battlefield amid billowing clouds of pestilence, diseased Drop Pod exhaust fumes, the leaking effluence of landing crafts and rot blooms expelled directly from their foetid teleportation chambers.",
		rules: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your Movement phases, when you set up a <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army on the battlefield using the <a href=\"/wh40k9ed/factions/death-guard/#Army-of-Renown:-Terminus-Est-Assault-Force\">Outbreak Assault</a> or <span class=\"tooltip00156\" data-tooltip-content=\"#tooltip_content00156\"><span class=\"tt kwbu\">Teleport</span> <span class=\"tt kwbu\">Strike</span></span> ability. Select one <span class=\"tooltip00043\" data-tooltip-content=\"#tooltip_content00043\"><span class=\"tt kwbu\">Contagion</span> <span class=\"tt kwbu\">of</span> <span class=\"tt kwbu\">Nurgle</span></span> ability that unit has; until the end of the turn, the Contagion Range of that ability is 12\" for that unit. This is not cumulative with any other abilities that increase <span class=\"tooltip00043\" data-tooltip-content=\"#tooltip_content00043\"><span class=\"tt kwbu\">Contagion</span> <span class=\"tt kwbu\">Range</span></span>.",
		rulesText: "Use this Stratagem in the Reinforcements step of your Movement phases, when you set up a TERMINUS EST ASSAULT FORCE unit from your army on the battlefield using the Outbreak Assault or Teleport Strike ability. Select one Contagion of Nurgle ability that unit has; until the end of the turn, the Contagion Range of that ability is 12\" for that unit. This is not cumulative with any other abilities that increase Contagion Range.",
		activate: {
			when: "in the",
			phase: "Reinforcements"
		},
		links: ["Reinforcements step", "Outbreak Assault"],
		keywords: ["Teleport Strike", "Contagion of Nurgle", "Contagion Range"],
		subkeys: ["Teleport", "Strike", "Contagion", "of", "Nurgle", "Contagion", "Range"]
	}, {
		name: "Plague Brewers",
		cost: "1CP",
		type: "matched",
		faction: "Mortarion’s Chosen Sons",
		category: "Battle Tactic Stratagem",
		desc: "No plague company boasts a more gruesome array of potions, poisons and unclean fluids than the 7th.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">MORTARION’S</span> <span class=\"kwb\">CHOSEN</span> <span class=\"kwb\">SONS</span> unit from your army is selected to shoot. Until the end of the phase, plague belchers, plaguespurt gauntlets and plague spewers models in that unit are equipped with have a Damage characteristic of 2.",
		rulesText: "Use this Stratagem in your Shooting phase, when a MORTARION’S CHOSEN SONS unit from your army is selected to shoot. Until the end of the phase, plague belchers, plaguespurt gauntlets and plague spewers models in that unit are equipped with have a Damage characteristic of 2.",
		activate: {
			when: "in your",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: [],
		subkeys: []
	}, {
		name: "Plague-chosen",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Requisition Stratagem",
		desc: "Many lords and champions of the Death Guard have favoured lieutenants within their ranks.",
		rules: "Use this Stratagem before the battle, when you are mustering your army, if your <span class=\"tooltip00046\" data-tooltip-content=\"#tooltip_content00046\"><span class=\"tt kwbu\"><span class=\"kwb\">WARLORD</span></span></span> has the <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> keyword. Select one <span class=\"tooltip00030\" data-tooltip-content=\"#tooltip_content00030\" data-tooltip-anchor=\"#tooltip_content00030\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">CHARACTER</span></span> model in your army (excluding named characters) and determine one <a href=\"/wh40k9ed/factions/death-guard/#Warlord-Traits\">Warlord Trait</a> for that model (this must be a Warlord Trait they can have); that model is only regarded as your <span class=\"kwb\">WARLORD</span> for the purposes of that Warlord Trait. Each Warlord Trait in your army must be unique (if randomly generated, re-roll duplicate results), and you cannot use this Stratagem to give a model two Warlord Traits. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice), or an Onslaught battle (in which case you can use this Stratagem three times).",
		rulesText: "Use this Stratagem before the battle, when you are mustering your army, if your WARLORD has the DEATH GUARD keyword. Select one DEATH GUARD CHARACTER model in your army (excluding named characters) and determine one Warlord Trait for that model (this must be a Warlord Trait they can have); that model is only regarded as your WARLORD for the purposes of that Warlord Trait. Each Warlord Trait in your army must be unique (if randomly generated, re-roll duplicate results), and you cannot use this Stratagem to give a model two Warlord Traits. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice), or an Onslaught battle (in which case you can use this Stratagem three times).",
		activate: {
			when: "before the battle, when you are mustering your army, if your",
			phase: "Warlord"
		},
		links: ["Warlord Trait"],
		keywords: ["WARLORD", "Death Guard", "CHARACTER"],
		subkeys: ["WARLORD", "WARLORD", "DEATH", "GUARD", "CHARACTER"]
	}, {
		name: "Putrid Detonation",
		cost: "1CP/2CP",
		type: "matched",
		faction: "Death Guard",
		category: "Strategic Ploy Stratagem",
		desc: "Upon their destruction, the seven-cursed hulls of Death Guard battle tanks have an alarming tendency to burst like ruptured boils, exploding in a swelling mass of pus and foulness.",
		rules: "Use this Stratagem in any phase, when a <span class=\"tooltip00080\" data-tooltip-content=\"#tooltip_content00080\" data-tooltip-anchor=\"#tooltip_content00080\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">VEHICLE</span></span> model from your army is destroyed. Do not roll to see if that model explodes: it does so automatically. If that model has a Wounds characteristic of 9 or less, this Stratagem costs 1CP; otherwise, it costs 2CP.",
		rulesText: "Use this Stratagem in any phase, when a DEATH GUARD VEHICLE model from your army is destroyed. Do not roll to see if that model explodes: it does so automatically. If that model has a Wounds characteristic of 9 or less, this Stratagem costs 1CP; otherwise, it costs 2CP.",
		activate: {
			when: "in any phase, when a <span class=\"tooltip00080\" data-tooltip-content=\"#tooltip_content00080\" data-tooltip-anchor=\"#tooltip_content00080\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">VEHICLE</span></span> model from your army is destroyed",
			phase: "Any"
		},
		links: [],
		keywords: ["Death Guard", "VEHICLE"],
		subkeys: ["DEATH", "GUARD", "VEHICLE"]
	}, {
		name: "Relaptic Assault",
		cost: "1CP",
		type: "matched",
		faction: "Mortarion’s Anvil",
		category: "Strategic Ploy Stratagem",
		desc: "Like a sickness flaring back to life, these stolid warriors erupt from their dug-in positions to counter attack.",
		rules: "Use this Stratagem in your opponents <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>, when an enemy unit finishes a charge move. Select any number of <span class=\"kwb\">MORTARION’S</span> <span class=\"kwb\">ANVIL</span> units from your army within 3\" of that enemy unit. Until the end of the phase, the selected units are eligible to <span class=\"tooltip00051\" data-tooltip-content=\"#tooltip_content00051\"><span class=\"tt kwbu\">perform</span> <span class=\"tt kwbu\">Heroic</span> <span class=\"tt kwbu\">Interventions</span></span> as if they were <span class=\"tooltip00035\" data-tooltip-content=\"#tooltip_content00035\"><span class=\"tt kwbu\"><span class=\"kwb\">CHARACTERS</span></span></span>.",
		rulesText: "Use this Stratagem in your opponents Charge phase, when an enemy unit finishes a charge move. Select any number of MORTARION’S ANVIL units from your army within 3\" of that enemy unit. Until the end of the phase, the selected units are eligible to perform Heroic Interventions as if they were CHARACTERS.",
		activate: {
			when: "in your opponents",
			phase: "Charge"
		},
		links: ["Charge phase"],
		keywords: ["perform Heroic Interventions", "CHARACTERS"],
		subkeys: ["perform", "Heroic", "Interventions", "CHARACTERS", "CHARACTERS"]
	}, {
		name: "Release The Toxins",
		cost: "2CP",
		type: "matched",
		faction: "Death Guard",
		category: "Epic Deed Stratagem",
		desc: "The artefacts of the Death Guard are foul objects and weapons, seeped in poisons of countless varieties. To unleash them is to grant the enemy a most horrible death.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00030\" data-tooltip-content=\"#tooltip_content00030\" data-tooltip-anchor=\"#tooltip_content00030\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">CHARACTER</span></span> model from your army that was equipped with a <a href=\"/wh40k9ed/factions/death-guard/#Relics-of-Decay\">Relic of Decay</a> at the start of the battle. Roll one D6 for each enemy unit within 7\" of that model: on a 2-5, that unit suffers 1 <span class=\"tooltip00037\" data-tooltip-content=\"#tooltip_content00037\"><span class=\"tt kwbu\">mortal</span> <span class=\"tt kwbu\">wound</span></span>; on a 6, that unit suffers D3 mortal wounds. A model can only be selected for this Stratagem once per battle.",
		rulesText: "Use this Stratagem in your Command phase. Select one DEATH GUARD CHARACTER model from your army that was equipped with a Relic of Decay at the start of the battle. Roll one D6 for each enemy unit within 7\" of that model: on a 2-5, that unit suffers 1 mortal wound; on a 6, that unit suffers D3 mortal wounds. A model can only be selected for this Stratagem once per battle.",
		activate: {
			when: "in your",
			phase: "Command"
		},
		links: ["Command phase", "Relic of Decay"],
		keywords: ["Death Guard", "CHARACTER", "mortal wound"],
		subkeys: ["DEATH", "GUARD", "CHARACTER", "mortal", "wound"]
	}, {
		name: "Rotting Tide",
		cost: "2CP/3CP",
		type: "matched",
		faction: "Terminus Est Assault Force",
		category: "Strategic Ploy Stratagem",
		desc: "The holds of the Terminus Est are crammed with hordes of mindless Poxwalkers to be unleashed on every world Typhus comes across.",
		rules: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your Movement phase. Select a <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> <span class=\"tooltip00015\" data-tooltip-content=\"#tooltip_content00015\" data-tooltip-anchor=\"#tooltip_content00015\"><span class=\"kwb kwbu\">POXWALKERS</span></span> unit from your army that is below <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Half-strength</a> and remove it from the battlefield, or select a <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> <span class=\"kwb\">POXWALKERS</span> unit from your army that has been destroyed. Set up that unit at its <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Starting Strength</a>, wholly within 6\" of any battlefield edge other than the enemy’s battlefield edge and more than 9\" away from any enemy models. You can only use this Stratagem once. If that unit has a Starting Strength of 10 or fewer models, this Stratagem costs 2CP; otherwise, it costs 3CP.",
		rulesText: "Use this Stratagem in the Reinforcements step of your Movement phase. Select a TERMINUS EST ASSAULT FORCE POXWALKERS unit from your army that is below Half-strength and remove it from the battlefield, or select a TERMINUS EST ASSAULT FORCE POXWALKERS unit from your army that has been destroyed. Set up that unit at its Starting Strength, wholly within 6\" of any battlefield edge other than the enemy’s battlefield edge and more than 9\" away from any enemy models. You can only use this Stratagem once. If that unit has a Starting Strength of 10 or fewer models, this Stratagem costs 2CP; otherwise, it costs 3CP.",
		activate: {
			when: "in the",
			phase: "Reinforcements"
		},
		links: ["Reinforcements step", "Half-strength", "Starting Strength"],
		keywords: ["POXWALKERS"],
		subkeys: []
	}, {
		name: "Sevenfold Blessings",
		cost: "1CP",
		type: "matched",
		faction: "Wretched",
		category: "Requisition Stratagem",
		desc: "This diseased sorcerer feels the rheumy eye of the Plague God upon him.",
		rules: "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"tooltip00055\" data-tooltip-content=\"#tooltip_content00055\" data-tooltip-anchor=\"#tooltip_content00055\"><span class=\"kwb kwbu\">WRETCHED</span> <span class=\"kwb kwbu\">PSYKER</span></span> model from your army.<br><ul><li>That model knows one additional psychic power from their chosen discipline.</li><li>Once per <a href=\"/wh40k9ed/the-rules/core-rules/#PSYCHIC-PHASE\">Psychic phase</a>, you can re-roll one <span class=\"tooltip00054\" data-tooltip-content=\"#tooltip_content00054\"><span class=\"tt kwbu\">Psychic</span> <span class=\"tt kwbu\">test</span></span> taken for that model.</li></ul>You can only use this Stratagem once.",
		rulesText: "Use this Stratagem before the battle, when you are mustering your army. Select one WRETCHED PSYKER model from your army.\n\nThat model knows one additional psychic power from their chosen discipline.\nOnce per Psychic phase, you can re-roll one Psychic test taken for that model.\nYou can only use this Stratagem once.",
		activate: {
			when: "before the battle, when you are mustering your army",
			phase: "Psychic"
		},
		links: ["Psychic phase"],
		keywords: ["Wretched", "PSYKER", "Psychic test"],
		subkeys: ["WRETCHED", "PSYKER", "Psychic", "test"]
	}, {
		name: "Sickly Corrosion",
		cost: "2CP",
		type: "matched",
		faction: "Death Guard",
		category: "Strategic Ploy Stratagem",
		desc: "When a foe is struck by a plague weapon, even if they survive they are made much weaker. Thus are they easy prey for further attacks.",
		rules: "Use this Stratagem in either the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a> or your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> model from your army makes an attack with a <span class=\"tooltip00011\" data-tooltip-content=\"#tooltip_content00011\"><span class=\"tt kwbu\">plague</span> <span class=\"tt kwbu\">weapon</span></span> that scores a hit against an enemy unit. Until the end of the turn, each time an attack is made by a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> model against that enemy unit, re-roll a <span class=\"tooltip00002\" data-tooltip-content=\"#tooltip_content00002\"><span class=\"tt kwbu\">wound</span> <span class=\"tt kwbu\">roll</span></span> of 1.",
		rulesText: "Use this Stratagem in either the Fight phase or your Shooting phase, when a DEATH GUARD model from your army makes an attack with a plague weapon that scores a hit against an enemy unit. Until the end of the turn, each time an attack is made by a DEATH GUARD model against that enemy unit, re-roll a wound roll of 1.",
		activate: {
			when: "in either the",
			phase: "Fight"
		},
		links: ["Fight phase", "Shooting phase"],
		keywords: ["plague weapon", "wound roll"],
		subkeys: ["plague", "weapon", "wound", "roll"]
	}, {
		name: "The Blightening",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Wargear Stratagem",
		desc: "The effects of blight grenades - so horrendous to their victims - have no impact on the Death Guard, who gladly use the devices in extreme close quarters with the enemy.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select up to three <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> models from your army. Until the end of the phase, <span class=\"tooltip00133\" data-tooltip-content=\"#tooltip_content00133\"><span class=\"tt kwbu\">plague</span> <span class=\"tt kwbu\">weapons</span></span> with the <span class=\"tooltip00031\" data-tooltip-content=\"#tooltip_content00031\"><span class=\"tt kwbu\">Grenade</span></span> type that those models are equipped with lose the <span class=\"tooltip00059\" data-tooltip-content=\"#tooltip_content00059\"><span class=\"tt kwbu\">Blast</span></span> ability, have a Type characteristic of <span class=\"tooltip00134\" data-tooltip-content=\"#tooltip_content00134\"><span class=\"tt kwbu\">Pistol</span> <span class=\"tt kwbu\">6</span></span>, and each time that model makes an attack with one of those weapons against an enemy unit within <span class=\"tooltip00028\" data-tooltip-content=\"#tooltip_content00028\"><span class=\"tt kwbu\">Engagement</span> <span class=\"tt kwbu\">Range</span></span> that attack automatically hits the target.",
		rulesText: "Use this Stratagem in your Shooting phase. Select up to three DEATH GUARD models from your army. Until the end of the phase, plague weapons with the Grenade type that those models are equipped with lose the Blast ability, have a Type characteristic of Pistol 6, and each time that model makes an attack with one of those weapons against an enemy unit within Engagement Range that attack automatically hits the target.",
		activate: {
			when: "in your",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: ["plague weapons", "Grenade", "Blast", "Pistol 6", "Engagement Range"],
		subkeys: ["plague", "weapons", "Pistol", "6", "Engagement", "Range"]
	}, {
		name: "The Dead Walk Again",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Strategic Ploy Stratagem",
		desc: "The groans of the Poxwalkers are spiritually infectious in their own right, spreading the curse carried by the shambling abominations far and wide.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00015\" data-tooltip-content=\"#tooltip_content00015\" data-tooltip-anchor=\"#tooltip_content00015\"><span class=\"kwb kwbu\">POXWALKERS</span></span> unit from your army and roll seven D6s: for each 3+, one of that unit’s destroyed models is added back to it with 1 wound remaining. Models added back to that unit in this way can be set up within <span class=\"tooltip00028\" data-tooltip-content=\"#tooltip_content00028\"><span class=\"tt kwbu\">Engagement</span> <span class=\"tt kwbu\">Range</span></span> of enemy units that are already within Engagement Range of that unit. Each unit can only be selected for this Stratagem once per battle.",
		rulesText: "Use this Stratagem in your Command phase. Select one POXWALKERS unit from your army and roll seven D6s: for each 3+, one of that unit’s destroyed models is added back to it with 1 wound remaining. Models added back to that unit in this way can be set up within Engagement Range of enemy units that are already within Engagement Range of that unit. Each unit can only be selected for this Stratagem once per battle.",
		activate: {
			when: "in your",
			phase: "Command"
		},
		links: ["Command phase"],
		keywords: ["POXWALKERS", "Engagement Range"],
		subkeys: ["Engagement", "Range"]
	}, {
		name: "The Wrathful Dead",
		cost: "1CP",
		type: "matched",
		faction: "Harbingers",
		category: "Strategic Ploy Stratagem",
		desc: "The Poxwalker hordes of the 1st Plague Company are as the tide in their offensive, their blows laying tow the living with terrifying inevitability.",
		rules: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00047\" data-tooltip-content=\"#tooltip_content00047\" data-tooltip-anchor=\"#tooltip_content00047\"><span class=\"kwb kwbu\">HARBINGERS</span> <span class=\"kwb kwbu\">POXWALKERS</span></span> unit is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, you can re-roll the <span class=\"tooltip00001\" data-tooltip-content=\"#tooltip_content00001\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">roll</span></span>.",
		rulesText: "Use this Stratagem in the Fight phase, when a HARBINGERS POXWALKERS unit is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, you can re-roll the hit roll.",
		activate: {
			when: "in the",
			phase: "Fight"
		},
		links: ["Fight phase"],
		keywords: ["Harbingers", "POXWALKERS", "hit roll"],
		subkeys: ["HARBINGERS", "POXWALKERS", "hit", "roll"]
	}, {
		name: "Trench Fighters",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Battle Tactic Stratagem",
		desc: "The Death Guard excel in the crush of close quarters, driving plague knives into their victims again and again.",
		rules: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00125\" data-tooltip-content=\"#tooltip_content00125\" data-tooltip-anchor=\"#tooltip_content00125\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">PLAGUE</span> <span class=\"kwb kwbu\">MARINES</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit fights, if it is equipped with any plague knives, it makes 1 additional attack with one of its plague knives.",
		rulesText: "Use this Stratagem in the Fight phase, when a DEATH GUARD PLAGUE MARINES unit from your army is selected to fight. Until the end of the phase, each time a model in that unit fights, if it is equipped with any plague knives, it makes 1 additional attack with one of its plague knives.",
		activate: {
			when: "in the",
			phase: "Fight"
		},
		links: ["Fight phase"],
		keywords: ["Death Guard", "PLAGUE MARINES"],
		subkeys: ["DEATH", "GUARD", "PLAGUE", "MARINES"]
	}, {
		name: "Unclean Machine Spirit",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Epic Deed Stratagem",
		desc: "The Death Guard have many tales of the corrupted machine spirits of their vehicles fighting on even after their crew have been slain or their critical systems are in the midst of failure.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00076\" data-tooltip-content=\"#tooltip_content00076\" data-tooltip-anchor=\"#tooltip_content00076\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">MACHINE</span> <span class=\"kwb kwbu\">SPIRIT</span></span> model from your army. Until the start of your next Command phase, that model is considered to have its full wounds remaining for the purposes of determining what characteristics on its profile to use.",
		rulesText: "Use this Stratagem in your Command phase. Select one DEATH GUARD MACHINE SPIRIT model from your army. Until the start of your next Command phase, that model is considered to have its full wounds remaining for the purposes of determining what characteristics on its profile to use.",
		activate: {
			when: "in your",
			phase: "Command"
		},
		links: ["Command phase"],
		keywords: ["Death Guard", "MACHINE SPIRIT"],
		subkeys: ["DEATH", "GUARD", "MACHINE", "SPIRIT"]
	}, {
		name: "Unleash The Horde",
		cost: "2CP",
		type: "matched",
		faction: "Terminus Est Assault Force",
		category: "Strategic Ploy Stratagem",
		desc: "When massed in sufficient numbers Poxwalkers are a formidable foe, with scores of grasping claws that soon find their way around the throats of the enemy.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when a <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> <span class=\"tooltip00015\" data-tooltip-content=\"#tooltip_content00015\" data-tooltip-anchor=\"#tooltip_content00015\"><span class=\"kwb kwbu\">POXWALKERS</span></span> unit from your army is selected to move, or in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> <span class=\"kwb\">POXWALKERS</span> unit from your army is selected to fight. Until the end of the turn, add 3\" to the Move characteristic of all <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> <span class=\"kwb\">POXWALKER</span> models in your army, and each time those models <span class=\"tooltip00155\" data-tooltip-content=\"#tooltip_content00155\"><span class=\"tt kwbu\">Pile</span> <span class=\"tt kwbu\">in</span></span>, they can move an additional 3\".",
		rulesText: "Use this Stratagem in your Movement phase, when a TERMINUS EST ASSAULT FORCE POXWALKERS unit from your army is selected to move, or in the Fight phase, when a TERMINUS EST ASSAULT FORCE POXWALKERS unit from your army is selected to fight. Until the end of the turn, add 3\" to the Move characteristic of all TERMINUS EST ASSAULT FORCE POXWALKER models in your army, and each time those models Pile in, they can move an additional 3\".",
		activate: {
			when: "in your",
			phase: "Movement"
		},
		links: ["Movement phase", "Fight phase"],
		keywords: ["POXWALKERS", "Pile in"],
		subkeys: ["Pile", "in"]
	}, {
		name: "Vermid Whispers",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Battle Tactic Stratagem",
		desc: "The compound eyes and keening whispers of countless daemonic flies help guide these warriors’ aim.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00102\" data-tooltip-content=\"#tooltip_content00102\" data-tooltip-anchor=\"#tooltip_content00102\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">TERMINATOR</span></span> unit from your army is selected to shoot, or in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">TERMINATOR</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attack’s <span class=\"tooltip00001\" data-tooltip-content=\"#tooltip_content00001\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">roll</span></span>.",
		rulesText: "Use this Stratagem in your Shooting phase, when a DEATH GUARD TERMINATOR unit from your army is selected to shoot, or in the Fight phase, when a DEATH GUARD TERMINATOR unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attack’s hit roll.",
		activate: {
			when: "in your",
			phase: "Shooting"
		},
		links: ["Shooting phase", "Fight phase"],
		keywords: ["Death Guard", "TERMINATOR", "hit roll"],
		subkeys: ["DEATH", "GUARD", "TERMINATOR", "hit", "roll"]
	}, {
		name: "Virulent Rounds",
		cost: "1CP",
		type: "matched",
		faction: "Death Guard",
		category: "Wargear Stratagem",
		desc: "The Death Guard know countless revolting ways to render their bolt rounds horrifically virulent.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00104\" data-tooltip-content=\"#tooltip_content00104\" data-tooltip-anchor=\"#tooltip_content00104\"><span class=\"kwb kwbu\">DEATH</span> <span class=\"kwb kwbu\">GUARD</span> <span class=\"kwb kwbu\">CORE</span></span> unit from your army is selected to shoot. Until the end of the phase, <span class=\"tooltip00005\" data-tooltip-content=\"#tooltip_content00005\"><span class=\"tt kwbu\">bolt</span> <span class=\"tt kwbu\">weapons</span></span> models in that unit are equipped with have the <span class=\"tooltip00011\" data-tooltip-content=\"#tooltip_content00011\"><span class=\"tt kwbu\">Plague</span> <span class=\"tt kwbu\">Weapon</span></span> ability.",
		rulesText: "Use this Stratagem in your Shooting phase, when a DEATH GUARD CORE unit from your army is selected to shoot. Until the end of the phase, bolt weapons models in that unit are equipped with have the Plague Weapon ability.",
		activate: {
			when: "in your",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: ["Death Guard", "CORE", "bolt weapons", "Plague Weapon"],
		subkeys: ["DEATH", "GUARD", "CORE", "bolt", "weapons", "Plague", "Weapon"]
	}],
	greyknights: [{
			name: "ADAPTIVE EXCORIATION",
			cost: "1CP",
			type: "matched",
			faction: "Silver Blades",
			category: "Strategic Ploy Stratagem",
			desc: "Countless prideful enemies have been cut down by the Silver Blades’ blistering firepower, having instantly turned an apparent withdrawal into retributive furore.",
			rules: {},
			rulesText: "Use this Stratagem in your Movement phase, when a SILVER BLADES CORE unit from your army Falls Back. That unit is still eligible to shoot this turn even though it Fell Back.",
			activate: {
				when: "in your",
				phase: "Movement"
			},
			links: [
				"Movement phase"
			],
			keywords: [
				"SILVER BLADES CORE",
				"Falls Back"
			],
			subkeys: [
				"SILVER",
				"BLADES",
				"CORE",
				"Falls",
				"Back"
			]
		},
		{
			name: "ALLOY OF DISCIPLINES",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Strategic Ploy Stratagem",
			desc: "The noble elite of the Chapter, the Paladins are drawn from across the brotherhoods, bringing together a wealth of skill and powers.",
			rules: {},
			rulesText: "Use this Stratagem in your Command phase. Select one PALADIN unit from your army. Select one psychic power from the Sanctic discipline that unit does not know to replace one of the psychic powers that it does.",
			activate: {
				when: "in your",
				phase: "Command"
			},
			links: [
				"Command phase",
				"Sanctic discipline"
			],
			keywords: [
				"PALADIN"
			],
			subkeys: []
		},
		{
			name: "ARMOURY OF TITAN",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Requisition Stratagem",
			desc: "The Chapter’s most sacred artefacts lie in hallowed vaults deep within the Citadel of Titan, guarded by unsleeping sentinels.",
			rules: {},
			rulesText: "Use this Stratagem before the battle, when you are mustering your army, if your WARLORD has the GREY KNIGHTS keyword. Select one GREY KNIGHTS CHARACTER model from your army and give them one Relic of Titan (this must be a Relic they could have). Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case, you can use this Stratagem twice) or an Onslaught battle (in which case, you can use this Stratagem three times).",
			activate: {
				when: "before the battle, when you are mustering your army, if your",
				phase: "Relic"
			},
			links: [
				"Relic of Titan"
			],
			keywords: [
				"WARLORD",
				"GREY KNIGHTS CHARACTER"
			],
			subkeys: [
				"WARLORD",
				"WARLORD",
				"GREY",
				"KNIGHTS",
				"CHARACTER"
			]
		},
		{
			name: "CHARGE OF THE ANCIENTS",
			cost: "1CP",
			type: "matched",
			faction: "Preservers",
			category: "Requisition Stratagem",
			desc: "Some Dreadnought chassis of the 5th Brotherhood have been maintained for millennia. Their ancient but singularly advanced servos enable those interred within to unleash their full fury.",
			rules: {},
			rulesText: "Use this Stratagem before the battle, when you muster your army. Select one PRESERVERS DREADNOUGHT model from your army.\n\nThat model has a Move characteristic of 8\".\nYou can re-roll charge rolls made for that model.\nEach time that model fights, if it made a charge move this turn, then until that fight is resolved, add 1 to the Damage characteristic of melee weapons that model is equipped with.\nYou can only use this Stratagem once, unless you are playing an Onslaught battle (in which case, you can use this Stratagem twice, on two different Preservers Dreadnought models from your army).",
			activate: {
				when: "before the battle",
				phase: "when you muster your army"
			},
			links: [],
			keywords: [
				"PRESERVERS DREADNOUGHT",
				"charge rolls",
				"charge move"
			],
			subkeys: [
				"PRESERVERS",
				"DREADNOUGHT",
				"charge",
				"rolls",
				"charge",
				"move"
			]
		},
		{
			name: "CHIRURGIC RESURRECTION",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Epic Deed Stratagem",
			desc: "With sanctified narthecium, blessed unguents and empyric ritual, Apothecaries swiftly return wounded brothers to the endless war.",
			rules: {},
			rulesText: "Use this Stratagem at the end of your Movement phase. Select one GREY KNIGHTS APOTHECARY unit from your army and then select one friendly GREY KNIGHTS INFANTRY unit that is not at its Starting Strength and is within 3\" of that APOTHECARY. One of the selected unit’s destroyed models is returned to its unit with its full wounds remaining.",
			activate: {
				when: "at the end of your",
				phase: "Movement"
			},
			links: [
				"Movement phase",
				"Starting Strength"
			],
			keywords: [
				"GREY KNIGHTS APOTHECARY",
				"GREY KNIGHTS INFANTRY"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"APOTHECARY",
				"GREY",
				"KNIGHTS",
				"INFANTRY"
			]
		},
		{
			name: "DEADLY EFFICACY",
			cost: "1CP",
			type: "matched",
			faction: "Rapiers",
			category: "Battle Tactic Stratagem",
			desc: "The 6th Brotherhood’s weapon masters teach that every blow counts. With matchless efficiency, economical attacks can parry, slash and pierce in a single strike.",
			rules: {},
			rulesText: "Use this Stratagem in the Fight phase when a RAPIERS unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, an unmodified hit roll of 6 scores 1 additional hit.",
			activate: {
				when: "in the",
				phase: "Fight"
			},
			links: [
				"Fight phase"
			],
			keywords: [
				"hit roll"
			],
			subkeys: [
				"hit",
				"roll"
			]
		},
		{
			name: "DEATH FROM THE WARP",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Battle Tactic Stratagem",
			desc: "Utilising their warp-attuned senses during the timeless instant of teleportation, Grey Knights know exactly where the enemy are before they arrive. 'They emerge from the blinding flare of warp energies already firing.",
			rules: {},
			rulesText: "Use this Stratagem in your Shooting phase, when a GREY KNIGHTS PSYKER unit from your army shoots. Until the end of the phase, each time a model in that unit makes a ranged attack, if that unit was set up on the battlefield using the Teleport Strike ability this turn, add 1 to that attack’s hit roll.",
			activate: {
				when: "in your",
				phase: "Shooting"
			},
			links: [
				"Shooting phase"
			],
			keywords: [
				"GREY KNIGHTS PSYKER",
				"Teleport Strike",
				"hit roll"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"PSYKER",
				"Teleport",
				"Strike",
				"hit",
				"roll"
			]
		},
		{
			name: "EMPYRIC DECLAMATION",
			cost: "2CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Epic Deed Stratagem",
			desc: "The Chaplain drives the force of his oratory with psychic fervour, ensuring his fiery inspiration is felt within his brothers’ very souls.",
			rules: {},
			rulesText: "Use this Stratagem at the start of any of your phases. Select one BROTHERHOOD CHAPLAIN unit from your army that has not recited a litany since the start of your last Command phase. That model can recite one litany it knows that has not already been recited by a friendly model since the start of your last Command phase. That litany is automatically inspiring (do not roll) and takes effect until the start of your next Command phase.",
			activate: {
				when: "at the start of any of your phases",
				phase: "Any"
			},
			links: [
				"Command phase"
			],
			keywords: [
				"BROTHERHOOD CHAPLAIN"
			],
			subkeys: [
				"BROTHERHOOD",
				"CHAPLAIN"
			]
		},
		{
			name: "ENDOWMENT IN EXTREMIS",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Requisition Stratagem",
			desc: "At the Prognosticars’ urging Titan’s reliquaries are opened and proven veterans are entrusted with artefacts of ancient power.",
			rules: {},
			rulesText: "Use this Stratagem before the battle. Select one GREY KNIGHTS model from your army that has one of the following in their profile: ‘Justicar’; ‘Paragon’; ‘Knight of the Flame’. That model can have one of the following Relics of Titan, even though they are not a CHARACTER: Domina Liber Daemonica; Sanctic Shard; Augurium Scrolls; Stave of Supremacy. All of the Relics your army includes must be different and be given to different models.",
			activate: {
				when: "before the battle",
				phase: "Domina"
			},
			links: [
				"Domina Liber Daemonica",
				"Sanctic Shard",
				"Augurium Scrolls",
				"Stave of Supremacy"
			],
			keywords: [
				"CHARACTER"
			],
			subkeys: [
				"CHARACTER",
				"CHARACTER"
			]
		},
		{
			name: "EXEMPLAR OF THE SILVERED HOST",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Requisition Stratagem",
			desc: "To be ordained as a Grey Knight is to succeed where millions are deemed unworthy, and some of their champions stand higher still.",
			rules: {},
			rulesText: "Use this Stratagem after nominating a GREY KNIGHTS CHARACTER model that is not a named character to be your WARLORD. Generate one additional Warlord Trait for them; this must be from the Grey Knights Warlord Traits table. Each Warlord Trait in your army must be unique (if randomly generated, re-roll duplicate results). You can only use this Stratagem once.",
			activate: {
				when: "after nominating a",
				phase: "Grey"
			},
			links: [
				"Grey Knights Warlord Traits"
			],
			keywords: [
				"GREY KNIGHTS CHARACTER",
				"WARLORD"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"CHARACTER",
				"WARLORD",
				"WARLORD"
			]
		},
		{
			name: "FIGHT ON THE MOVE",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Strategic Ploy Stratagem",
			desc: "Personal teleporters grant exceptional manoeuvrability to those with the specialist skills to endure repeated and rapid submersions in the warp.",
			rules: {},
			rulesText: "Use this Stratagem in your Movement phase, when a GREY KNIGHTS TELEPORTER unit from your army Falls Back. Until the end of the turn, that unit is still eligible to shoot and charge, even though it Fell Back.",
			activate: {
				when: "in your",
				phase: "Movement"
			},
			links: [
				"Movement phase"
			],
			keywords: [
				"GREY KNIGHTS TELEPORTER",
				"Falls Back"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"TELEPORTER",
				"Falls",
				"Back"
			]
		},
		{
			name: "FINAL JUSTICE",
			cost: "2CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Epic Deed Stratagem",
			desc: "Even imminent death will not prevent a Grey Knight from enacting his final justice upon the enemies of the Emperor.",
			rules: {},
			rulesText: "Use this Stratagem in the Fight phase, when a GREY KNIGHTS CHARACTER model (excluding CASTELLAN CROWE) from your army that has not already been selected to fight this phase is destroyed. Do not remove that model from play - it can fight after the attacking model’s unit has finished making attacks. After resolving the destroyed model’s attacks, it is then removed.",
			activate: {
				when: "in the",
				phase: "Fight"
			},
			links: [
				"Fight phase"
			],
			keywords: [
				"GREY KNIGHTS CHARACTER",
				"CASTELLAN CROWE"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"CHARACTER",
				"CASTELLAN",
				"CROWE"
			]
		},
		{
			name: "FINEST HOUR",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Epic Deed Stratagem",
			desc: "It is in the darkest times that the disciplined fury of the Grey Knights burns its brightest.",
			rules: {},
			rulesText: "Use this Stratagem at the start of any phase. Select one GREY KNIGHTS CHARACTER unit from your army. Until the end of the turn, add 3\" to the range of that unit’s aura abilities (to a maximum of 12\").",
			activate: {
				when: "at the start of any phase",
				phase: "Any"
			},
			links: [],
			keywords: [
				"GREY KNIGHTS CHARACTER",
				"aura abilities"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"CHARACTER",
				"aura",
				"abilities"
			]
		},
		{
			name: "FORESIGHT",
			cost: "1CP",
			type: "matched",
			faction: "Prescient Brethren",
			category: "Battle Tactic Stratagem",
			desc: "Targeting their strikes a split second in advance of the enemy, the 4th Brotherhood predict their foes’ movement, landing their shots and blows with preternatural accuracy.",
			rules: {},
			rulesText: "Use this Stratagem in your Shooting phase, when a PRESCIENT BRETHREN PSYKER unit from your army is selected to shoot, or in the Fight phase, when a PRESCIENT BRETHREN PSYKER unit from your army fights. Until the end of the phase, each time a model in that unit makes an attack, re-roll a hit roll of 1 and re-roll a wound roll of 1.",
			activate: {
				when: "in your",
				phase: "Shooting"
			},
			links: [
				"Shooting phase",
				"Fight phase"
			],
			keywords: [
				"PRESCIENT BRETHREN PSYKER",
				"hit roll",
				"wound roll"
			],
			subkeys: [
				"PRESCIENT",
				"BRETHREN",
				"PSYKER",
				"hit",
				"roll",
				"wound",
				"roll"
			]
		},
		{
			name: "FRAG ASSAULT LAUNCHERS",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Wargear Stratagem",
			desc: "These explosive charges shower the enemy in fiery shrapnel, forcing them to seek cover or suffer Titan’s judgement.",
			rules: {},
			rulesText: "Use this Stratagem at the start of your Charge phase. Select one GREY KNIGHTS ASSAULT LAUNCHERS unit from your army and one enemy unit (excluding VEHICLE or MONSTER units) within 9\" of that unit. That enemy unit can either brace or duck for cover.\n\nIf that unit braces, it suffers D3 mortal wounds.\nIf that unit ducks for cover, then until the end of the turn, subtract 1 from the Attacks characteristic of models in that unit, and that unit cannot fire Overwatch or Set to Defend.",
			activate: {
				when: "at the start of your",
				phase: "Charge"
			},
			links: [
				"Charge phase"
			],
			keywords: [
				"GREY KNIGHTS ASSAULT LAUNCHERS",
				"mortal wounds",
				"Overwatch",
				"Set to Defend"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"ASSAULT",
				"LAUNCHERS",
				"mortal",
				"wounds",
				"Set",
				"to",
				"Defend"
			]
		},
		{
			name: "HALOED IN SOULFIRE",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Strategic Ploy Stratagem",
			desc: "The blazing glare of ancient technology and the shrouding coils of the immaterium often linger, obscuring the Grey Knights presence.",
			rules: {},
			rulesText: "Use this Stratagem in your Movement phase, when a GREY KNIGHTS CORE unit from your army is set up on the battlefield using the Teleport Strike ability. Until the start of your next turn, each time an attack is made against that unit, subtract 1 from that attack’s hit roll.",
			activate: {
				when: "in your",
				phase: "Movement"
			},
			links: [
				"Movement phase"
			],
			keywords: [
				"GREY KNIGHTS CORE",
				"Teleport Strike",
				"hit roll"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"CORE",
				"Teleport",
				"Strike",
				"hit",
				"roll"
			]
		},
		{
			name: "HEXAGRAMMIC WARDS",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Wargear Stratagem",
			desc: "Upon induction into the Chapter, every Grey Knight is trained to steel himself against psychic assaults.",
			rules: {},
			rulesText: "Use this Stratagem in your opponent’s Psychic phase, before a Deny the Witch test is taken for a GREY KNIGHTS PSYKER unit from your army. When taking that test, roll one additional D6 and discard the lowest result.",
			activate: {
				when: "in your opponent’s",
				phase: "Psychic"
			},
			links: [
				"Psychic phase"
			],
			keywords: [
				"Deny the Witch test",
				"GREY KNIGHTS PSYKER"
			],
			subkeys: [
				"Deny",
				"the",
				"Witch",
				"test",
				"GREY",
				"KNIGHTS",
				"PSYKER"
			]
		},
		{
			name: "MARKED FOR DEATH",
			cost: "2CP",
			type: "matched",
			faction: "Swordbearers",
			category: "Battle Tactic Stratagem",
			desc: "The Swordbearers psychically upload the minutiae of the target's every move and position to their brothers, sealing the foes’ doom.",
			rules: {},
			rulesText: "Use this Stratagem at the start of your Shooting phase. Select one enemy unit within 12\" of and visible to a SWORDBEARERS PSYKER unit from your army. Until the end of the phase, each time a friendly SWORDBEARERS unit makes a ranged attack against that enemy unit, add 1 to that attack’s hit roll.",
			activate: {
				when: "at the start of your",
				phase: "Shooting"
			},
			links: [
				"Shooting phase"
			],
			keywords: [
				"SWORDBEARERS PSYKER",
				"hit roll"
			],
			subkeys: [
				"SWORDBEARERS",
				"PSYKER",
				"hit",
				"roll"
			]
		},
		{
			name: "MARTIAL PRESCIENCE",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Strategic Ploy Stratagem",
			desc: "With their superlative martial skills honed to perfection, Grey Knights can turn the enemy's blows against them.",
			rules: {},
			rulesText: "Use this Stratagem in the Fight phase, when a GREY KNIGHTS unit that is Set to Defend is selected as the target of an attack made by an enemy model. Until the end of the phase, each time an unmodified save roll of 6 is made for a model in that unit, after the attacking model’s unit has finished making its attacks, the attacking model’s unit suffers 1 mortal wound.",
			activate: {
				when: "in the",
				phase: "Fight"
			},
			links: [
				"Fight phase"
			],
			keywords: [
				"Set to Defend",
				"save roll",
				"mortal wound"
			],
			subkeys: [
				"Set",
				"to",
				"Defend",
				"save",
				"roll",
				"mortal",
				"wound"
			]
		},
		{
			name: "MASTERS OF THE WORD",
			cost: "1CP",
			type: "matched",
			faction: "Wardmakers",
			category: "Epic Deed Stratagem",
			desc: "Senior adepts of the Wardmakers can plumb deep wells of empyric knowledge and even pool their talents across space and time, ensuring no foe is beyond them.",
			rules: {},
			rulesText: "Use this Stratagem in your Command phase. Select one WARDMAKERS CHARACTER unit from your army. Select one psychic power from the Dominus discipline that model does not know to replace one of the psychic powers that it does.",
			activate: {
				when: "in your",
				phase: "Command"
			},
			links: [
				"Command phase",
				"Dominus discipline"
			],
			keywords: [
				"WARDMAKERS CHARACTER"
			],
			subkeys: [
				"WARDMAKERS",
				"CHARACTER"
			]
		},
		{
			name: "MENTAL FOCUS",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Strategic Ploy Stratagem",
			desc: "In the midst of battle, Grey Knights can shut out pain, distraction and emotion to bring their psychic might to bear again and again.",
			rules: {},
			rulesText: "Use this Stratagem in your Psychic phase. Select one GREY KNIGHTS PSYKER unit from your army. Until the end of the phase, that unit can attempt to manifest one more psychic power than normal.",
			activate: {
				when: "in your",
				phase: "Psychic"
			},
			links: [
				"Psychic phase"
			],
			keywords: [
				"GREY KNIGHTS PSYKER",
				"manifest"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"PSYKER"
			]
		},
		{
			name: "MISTS OF DEIMOS",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Wargear Stratagem",
			desc: "From hull-mounted launchers, Grey Knights’ vehicles fire smoke grenades whose effects are boosted by the obscuring powers of their psychic crews and sometimes called the Mists of Deimos.",
			rules: {},
			rulesText: "Use this Stratagem in your opponent’s Shooting phase, when a GREY KNIGHTS SMOKESCREEN unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, subtract 1 from that attack’s hit roll.",
			activate: {
				when: "in your opponent’s",
				phase: "Shooting"
			},
			links: [
				"Shooting phase"
			],
			keywords: [
				"GREY KNIGHTS SMOKESCREEN",
				"hit roll"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"SMOKESCREEN",
				"hit",
				"roll"
			]
		},
		{
			name: "POWERFUL ADEPT",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Battle Tactic Stratagem",
			desc: "Battle-brothers of the Grey Knights are masters of the arcane, capable of extending their powers through ritualistic projection.",
			rules: {},
			rulesText: "Use this Stratagem in your Psychic phase, when a GREY KNIGHTS PSYKER unit from your army is selected to manifest psychic powers. Until the end of the phase, each time a psychic power is manifested by that unit, increase the range of that psychic power by 6\".",
			activate: {
				when: "in your",
				phase: "Psychic"
			},
			links: [
				"Psychic phase"
			],
			keywords: [
				"GREY KNIGHTS PSYKER",
				"manifest"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"PSYKER"
			]
		},
		{
			name: "PSY-LANCE BOMBARDMENT",
			cost: "3CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Strategic Ploy Stratagem",
			desc: "When needs must, the Grey Knights can call down the awesome firepower of their orbital strike cruisers. A blinding column of energy lances down from the heavens, burning flesh to ash and reducing\n                        metal to heaps of molten slag.",
			rules: {},
			rulesText: "Use this Stratagem in your Command phase, if a GREY KNIGHTS WARLORD from your army is on the battlefield. Select one point on the battlefield and place a marker on that point. At the start of your next Command phase, roll one D6 for each unit within 6\" of the centre of that marker, adding 1 if the unit being rolled for is within 3\" of the centre of the marker and subtracting 1 if the unit being rolled for is a CHARACTER. On a 2-5, that unit suffers D3 mortal wounds, and on a 6+, that unit suffers D6 mortal wounds. The marker is then removed. You can only use this Stratagem once.",
			activate: {
				when: "in your",
				phase: "Command"
			},
			links: [
				"Command phase"
			],
			keywords: [
				"CHARACTER",
				"mortal wounds"
			],
			subkeys: [
				"CHARACTER",
				"CHARACTER",
				"mortal",
				"wounds"
			]
		},
		{
			name: "PSYBOLT AMMUNITION",
			cost: "1CP/2CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Wargear Stratagem",
			desc: "By entreating the machine spirit of his weapon with psychic incantations, a battle-brother can infuse the already deadly payload with explosive mental energy.",
			rules: {},
			rulesText: "Use this Stratagem in your Shooting phase, when a GREY KNIGHTS unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes a ranged attack with a bolt weapon:\n\nAn unmodified hit roll of 6 automatically wounds the target.\nImprove the Armour Penetration characteristic of that attack by 1.\nIf this unit has 6 or more models, this Stratagem costs 2CP; otherwise, it costs 1CP.",
			activate: {
				when: "in your",
				phase: "Shooting"
			},
			links: [
				"Shooting phase",
				"bolt weapon"
			],
			keywords: [
				"hit roll"
			],
			subkeys: [
				"hit",
				"roll"
			]
		},
		{
			name: "PSYCHIC CHANNELLING",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Battle Tactic Stratagem",
			desc: "Even in the midst of ferocious combat, a Grey Knight can unfetter the full potential of their finely crafted psychic talents.",
			rules: {},
			rulesText: "Use this Stratagem in your Psychic phase, when a GREY KNIGHTS PSYKER unit from your army is selected to manifest psychic powers. Until the end of the phase, each time a Psychic test is taken for that unit, roll one additional D6 and discard one of the dice.",
			activate: {
				when: "in your",
				phase: "Psychic"
			},
			links: [
				"Psychic phase"
			],
			keywords: [
				"GREY KNIGHTS PSYKER",
				"manifest",
				"Psychic test"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"PSYKER",
				"Psychic",
				"test"
			]
		},
		{
			name: "PSYCHIC LOCUS",
			cost: "2CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Epic Deed Stratagem",
			desc: "Brother-Captains maintain constant psychic contact with their warriors, focusing and strengthening their powers.",
			rules: {},
			rulesText: "Use this Stratagem at the start of your Psychic phase. Select one BROTHER-CAPTAIN model from your army. Until the end of the phase, that model gains the following ability: ‘Psychic Locus (Aura): While a friendly <BROTHERHOOD> PSYKER unit is within 6\" of this model, add 1 to Psychic tests taken for that unit.’",
			activate: {
				when: "at the start of your",
				phase: "Psychic"
			},
			links: [
				"Psychic phase"
			],
			keywords: [
				"BROTHER-CAPTAIN",
				"Psychic tests"
			],
			subkeys: [
				"Psychic",
				"tests"
			]
		},
		{
			name: "PSYCHIC ONSLAUGHT",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Battle Tactic Stratagem",
			desc: "Psi weaponry can be used to channel a battle-brother’s fury. The wrath of Titan is a cold and calm detestation that few can weather.",
			rules: {},
			rulesText: "Use this Stratagem in your Shooting phase, when a GREY KNIGHTS PSYKER unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes a ranged attack with a psi weapon, add 1 to the Strength characteristic of that attack and improve the Armour Penetration characteristic of that attack by 1.",
			activate: {
				when: "in your",
				phase: "Shooting"
			},
			links: [
				"Shooting phase",
				"psi weapon"
			],
			keywords: [
				"GREY KNIGHTS PSYKER"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"PSYKER"
			]
		},
		{
			name: "PSYK-OUT GRENADE",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Wargear Stratagem",
			desc: "Dabblers in unclean magics and xenos sorcerers suffer harrowing pain and confusion in the psi-shock caused by the particles released by these grenades.",
			rules: {},
			rulesText: "Use this Stratagem in your Shooting phase, when a GREY KNIGHTS PSYK-OUT GRENADES unit is selected to shoot. If that unit is not within Engagement Range of any enemy units, roll one D6: on a 2+, the closest enemy PSYKER unit that is within 6\" of and visible to your unit suffers Perils of the Warp.",
			activate: {
				when: "in your",
				phase: "Shooting"
			},
			links: [
				"Shooting phase"
			],
			keywords: [
				"GREY KNIGHTS PSYK-OUT GRENADES",
				"Engagement Range",
				"Perils of the Warp"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"PSYK-OUT",
				"GRENADES",
				"Engagement",
				"Range",
				"Perils",
				"of",
				"the",
				"Warp"
			]
		},
		{
			name: "PURITY OF THE MACHINE SPIRIT",
			cost: "2CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Epic Deed Stratagem",
			desc: "The most ancient and pure of the Grey Knights’ machine spirits are known to continue the fight with an inviolable sense of duty.",
			rules: {},
			rulesText: "Use this Stratagem in your Command phase. Select one GREY KNIGHTS MACHINE SPIRIT model from your army. Until the start of your next Command phase, that model is considered to have its full wounds remaining for the purposes of determining what characteristics on its profile to use.",
			activate: {
				when: "in your",
				phase: "Command"
			},
			links: [
				"Command phase"
			],
			keywords: [
				"GREY KNIGHTS MACHINE SPIRIT"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"MACHINE",
				"SPIRIT"
			]
		},
		{
			name: "RADIANT STRIKE",
			cost: "1CP",
			type: "matched",
			faction: "Blades of Victory",
			category: "Strategic Ploy Stratagem",
			desc: "Psychic fire rimes the armour and blades of the 2nd Brotherhood’s warriors as they charge at the foe, fanned by their battle fury. At the moment of contact, the empyric charge is\n                                        unleashed in a blast of azure light.",
			rules: {},
			rulesText: "Use this Stratagem in your Charge phase, when a BLADES OF VICTORY CORE INFANTRY unit from your army finishes a charge move. Select one enemy unit within Engagement Range of that BLADES OF VICTORY unit and roll one D6 for each model in that BLADES OF VICTORY unit that is within Engagement Range of that enemy unit. For each dice result that equals or exceeds that enemy unit’s Toughness characteristic, it suffers 1 mortal wound.",
			activate: {
				when: "in your",
				phase: "Charge"
			},
			links: [
				"Charge phase"
			],
			keywords: [
				"BLADES OF VICTORY CORE INFANTRY",
				"charge move",
				"Engagement Range",
				"mortal wound"
			],
			subkeys: [
				"BLADES",
				"OF",
				"VICTORY",
				"CORE",
				"INFANTRY",
				"charge",
				"move",
				"Engagement",
				"Range",
				"mortal",
				"wound"
			]
		},
		{
			name: "SANCTIC GUARDIANS",
			cost: "1CP",
			type: "matched",
			faction: "Exactors",
			category: "Strategic Ploy Stratagem",
			desc: "The Exactors embody the role of stern protectors, plunging into the fray to ensure no one faces the horrors of the galaxy alone.",
			rules: {},
			rulesText: "Use this Stratagem in the Heroic Interventions step of your opponent’s Charge phase. Select one EXACTORS unit from your army that is not within Engagement Range of any enemy units. Until the end of the phase, that unit can perform a Heroic Intervention as if it were a CHARACTER.",
			activate: {
				when: "in the",
				phase: "Heroic"
			},
			links: [
				"Heroic Interventions",
				"Charge phase"
			],
			keywords: [
				"Engagement Range",
				"perform a Heroic Intervention",
				"CHARACTER"
			],
			subkeys: [
				"Engagement",
				"Range",
				"perform",
				"a",
				"Heroic",
				"Intervention",
				"CHARACTER",
				"CHARACTER"
			]
		},
		{
			name: "SANCTIFIED KILL ZONE",
			cost: "2CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Battle Tactic Stratagem",
			desc: "The sheer volume of eviscerating firepower unleashed by Purgation Squads at close range forms an extreme kill zone in which there is little chance of survival.",
			rules: {},
			rulesText: "Use this Stratagem in your Shooting phase, when a PURGATION SQUAD unit from your army is selected to shoot. Until the end of the phase, each time a ranged attack made by a model in that unit targets an enemy unit within half range, add 1 to that attack’s wound roll.",
			activate: {
				when: "in your",
				phase: "Shooting"
			},
			links: [
				"Shooting phase"
			],
			keywords: [
				"PURGATION SQUAD",
				"wound roll"
			],
			subkeys: [
				"PURGATION",
				"SQUAD",
				"wound",
				"roll"
			]
		},
		{
			name: "SHADOW OF UNDYING LEGENDS",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Epic Deed Stratagem",
			desc: "Grey Knights Dreadnoughts are a link to the Chapter's glorious past. They are living legends, whose mere presence inspires those battle-brothers who fight in their shadow to great deeds.",
			rules: {},
			rulesText: "Use this Stratagem in your Command phase. Select one GREY KNIGHTS DREADNOUGHT model from your army. Until the start of your next Command phase, that model gains either the Rites of Battle ability or the Tactical Precision ability, as shown below:\n\nRites of Battle (Aura): While a friendly GREY KNIGHTS CORE unit is within 6\" of this model, each time a model in that unit makes an attack, re-roll a hit roll of 1.\nTactical Precision (Aura): While a friendly GREY KNIGHTS CORE unit is within 6\" of this model, each time a model in that unit makes an attack, re-roll a wound roll of 1.",
			activate: {
				when: "in your",
				phase: "Command"
			},
			links: [
				"Command phase"
			],
			keywords: [
				"GREY KNIGHTS DREADNOUGHT",
				"GREY KNIGHTS CORE",
				"hit roll",
				"wound roll"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"DREADNOUGHT",
				"GREY",
				"KNIGHTS",
				"CORE",
				"hit",
				"roll",
				"wound",
				"roll"
			]
		},
		{
			name: "SHIELD OF HUMANITY",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Requisition Stratagem",
			desc: "Between Humanity and the threat foreseen by the Emperor stand heroes whose names are lauded only in the Hall of Champions.",
			rules: {},
			rulesText: "Use this Stratagem before the battle, when you are mustering your army, if your WARLORD has the GREY KNIGHTS keyword. Select one GREY KNIGHTS CHARACTER from your army and determine one Warlord Trait for that model (this must be a Warlord Trait they could have); that model is only regarded as your WARLORD for the purposes of that Warlord Trait. Each Warlord Trait in your army must be unique (if randomly generated, re-roll duplicate results), and you cannot use this Stratagem to give a model two Warlord Traits. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case, you can use this Stratagem twice) or an Onslaught battle (in which case, you can use this Stratagem three times).",
			activate: {
				when: "before the battle, when you are mustering your army, if your",
				phase: "Warlord"
			},
			links: [
				"Warlord Traits"
			],
			keywords: [
				"WARLORD",
				"GREY KNIGHTS CHARACTER"
			],
			subkeys: [
				"WARLORD",
				"WARLORD",
				"GREY",
				"KNIGHTS",
				"CHARACTER"
			]
		},
		{
			name: "STEELY ADVANCE",
			cost: "2CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Strategic Ploy Stratagem",
			desc: "With a coldly determined advance, the Grey Knights unleash a steady stream of devastating fire with unerring accuracy.",
			rules: {},
			rulesText: "Use this Stratagem in your Movement phase, when a GREY KNIGHTS INFANTRY unit from your army makes a Normal Move. Until the end of the turn, that unit is considered to have Remained Stationary.",
			activate: {
				when: "in your",
				phase: "Movement"
			},
			links: [
				"Movement phase"
			],
			keywords: [
				"GREY KNIGHTS INFANTRY",
				"Normal Move",
				"Remained Stationary"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"INFANTRY",
				"Normal",
				"Move",
				"Remained",
				"Stationary"
			]
		},
		{
			name: "TELEPORTATION SHUNT",
			cost: "2CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Wargear Stratagem",
			desc: "Like a cleansing fire, Grey Knights equipped with personal teleporters can sweep across the entire battlefield.",
			rules: {},
			rulesText: "Use this Stratagem in your Movement phase, when a GREY KNIGHTS TELEPORTER unit from your army is selected to make a Normal Move. Instead of making a Normal Move with that unit, remove it from the battlefield and then set it back up on the battlefield, anywhere that is more than 9\" away from any enemy models. A unit can only be selected for this Stratagem once per battle.",
			activate: {
				when: "in your",
				phase: "Movement"
			},
			links: [
				"Movement phase"
			],
			keywords: [
				"GREY KNIGHTS TELEPORTER",
				"Normal Move"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"TELEPORTER",
				"Normal",
				"Move"
			]
		},
		{
			name: "THE NEED TO KNOW",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Strategic Ploy Stratagem",
			desc: "Adept in the precision removal of memories, the mind-wiping of informants and far more brutal means of information control, the Grey Knights maintain Humanity’s ignorance of the Chapter.",
			rules: {},
			rulesText: "You can only use this Stratagem if your army only contains GREY KNIGHTS Detachments. Use this Stratagem if you are playing a mission that requires you to select either secondary objectives or Agendas, after both players have revealed their selections. You can select one of your secondary objectives or Agendas, and replace it with a different one (make a note on your army roster as to your new selection and inform your opponent). All the normal rules for selecting secondary objectives and Agendas apply. If both players have a rule that allows them to select new secondary objectives or Agendas, both players make their new selections before revealing them simultaneously to their opponent.",
			activate: {
				when: "",
				phase: ""
			},
			links: [
				"GREY KNIGHTS Detachments",
				"secondary objectives",
				"Agendas",
				"army roster"
			],
			keywords: [],
			subkeys: []
		},
		{
			name: "THE STEEL HEART",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Battle Tactic Stratagem",
			desc: "Terminator-armoured warriors are the steel heart of the Grey Knights’ strikes. They exemplify the Chapters’ qualities as truly potent combatants.",
			rules: {},
			rulesText: "Use this Stratagem in your Fight phase, when a GREY KNIGHTS TERMINATOR unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, add 1 to that attack’s hit roll.",
			activate: {
				when: "in your",
				phase: "Fight"
			},
			links: [
				"Fight phase"
			],
			keywords: [
				"GREY KNIGHTS TERMINATOR",
				"hit roll"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"TERMINATOR",
				"hit",
				"roll"
			]
		},
		{
			name: "THUNDEROUS STRIDE",
			cost: "1CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Epic Deed Stratagem",
			desc: "Capable of the subtlety and finesse of a blade, Dreadknight suits can also be wielded with the force of a descending hammerblow.",
			rules: {},
			rulesText: "Use this Stratagem in your Charge phase, when a NEMESIS DREADKNIGHT model from your army finishes a charge move. Select one enemy unit within Engagement Range of that model, and roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds.",
			activate: {
				when: "in your",
				phase: "Charge"
			},
			links: [
				"Charge phase"
			],
			keywords: [
				"NEMESIS DREADKNIGHT",
				"charge move",
				"Engagement Range",
				"mortal wounds"
			],
			subkeys: [
				"NEMESIS",
				"DREADKNIGHT",
				"charge",
				"move",
				"Engagement",
				"Range",
				"mortal",
				"wounds"
			]
		},
		{
			name: "TRUESILVER ARMOUR",
			cost: "2CP/3CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Wargear Stratagem",
			desc: "Grey Knights battle-plate incorporates litanies of purity, strands of sanctified silver and other sacred wards.",
			rules: {},
			rulesText: "Use this Stratagem in any phase, when a GREY KNIGHTS CORE INFANTRY unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, an unmodified wound roll of 1-3 for that attack fails, irrespective of any abilities that the weapon or the model making the attack may have. If that unit contains 5 or fewer models, this Stratagem costs 2CP; otherwise, it costs 3CP.",
			activate: {
				when: "in any phase, when a <span class=\"tooltip\" data-tooltip-content=\"#tooltip_content00154\" data-tooltip-anchor=\"#tooltip_content00154\"><span class=\"kwb kwbu\">GREY</span> <span class=\"kwb kwbu\">KNIGHTS</span>\n                            <span class=\"kwb kwbu\">CORE</span> <span class=\"kwb kwbu\">INFANTRY</span></span> unit from your army is selected as the target of an attack",
				phase: "Any"
			},
			links: [],
			keywords: [
				"GREY KNIGHTS CORE INFANTRY",
				"wound roll"
			],
			subkeys: [
				"GREY",
				"KNIGHTS",
				"CORE",
				"INFANTRY",
				"wound",
				"roll"
			]
		},
		{
			name: "UNTAINTED AND UNBOWED",
			cost: "2CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Strategic Ploy Stratagem",
			desc: "Utterly incorruptible, the warriors of the Order of Purifiers stand strong, even in the face of the darkest evils.",
			rules: {},
			rulesText: "Use this Stratagem in any phase, when a PURIFIER SQUAD unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is allocated to a model in that unit, subtract 1 from the Damage characteristic of that attack (to a minimum of 1).",
			activate: {
				when: "in any phase, when a <span class=\"tooltip\" data-tooltip-content=\"#tooltip_content00197\" data-tooltip-anchor=\"#tooltip_content00197\"><span class=\"kwb kwbu\">PURIFIER</span> <span class=\"kwb kwbu\">SQUAD</span></span> unit from your army is selected as the target of an attack",
				phase: "Any"
			},
			links: [],
			keywords: [
				"PURIFIER SQUAD"
			],
			subkeys: [
				"PURIFIER",
				"SQUAD"
			]
		},
		{
			name: "ZONE OF WARDING",
			cost: "1CP/2CP",
			type: "matched",
			faction: "Grey Knights",
			category: "Wargear Stratagem",
			desc: "Nemesis warding staves contain multiple refractor field generators in their hafts. When primed with the wielder’s psychic energy, they project a zone of force that repulses his enemies’ attacks.",
			rules: {},
			rulesText: "Use this Stratagem in any phase, when a GREY KNIGHTS unit from your army is selected as the target of a ranged attack. Until the end of the phase, while that unit contains a model equipped with a Nemesis warding stave, models in that unit have a 5+ invulnerable save (TERMINATOR models instead have a 4+ invulnerable save). If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
			activate: {
				when: "in any phase, when a <span class=\"kwb\">GREY</span> <span class=\"kwb\">KNIGHTS</span> unit from your army is selected as the target of a ranged attack",
				phase: "Any"
			},
			links: [],
			keywords: [
				"invulnerable save"
			],
			subkeys: [
				"invulnerable",
				"save"
			]
		}
	],
	thousandsons: [{
		name: "Aetheric Saturation",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Strategic Ploy Stratagem",
		desc: "The Sorcerer absorbs the chaotic energies flowing thickly around a Mutalith Vortex Beast, healing injuries he has sustained.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#PSYCHIC-PHASE\">Psychic phase</a>, when a <span class=\"tooltip00085\" data-tooltip-content=\"#tooltip_content00085\" data-tooltip-anchor=\"#tooltip_content00085\"><span class=\"kwb kwbu\">PSYKER</span> <span class=\"kwb kwbu\">CHARACTER</span></span> from your army within 12\" of a friendly <span class=\"tooltip00081\" data-tooltip-content=\"#tooltip_content00081\" data-tooltip-anchor=\"#tooltip_content00081\"><span class=\"kwb kwbu\">MUTALITH</span> <span class=\"kwb kwbu\">VORTEX</span> <span class=\"kwb kwbu\">BEAST</span></span> model is selected to <span class=\"tooltip00005\" data-tooltip-content=\"#tooltip_content00005\"><span class=\"tt kwbu\">manifest</span></span> psychic powers. Instead of manifesting one psychic power with that model, it is healed and regains up to D3 lost wounds. Each model can only be healed once per turn.",
		rulesText: "Use this Stratagem in your Psychic phase, when a PSYKER CHARACTER from your army within 12\" of a friendly MUTALITH VORTEX BEAST model is selected to manifest psychic powers. Instead of manifesting one psychic power with that model, it is healed and regains up to D3 lost wounds. Each model can only be healed once per turn.",
		activate: {
			when: "in your",
			phase: "Psychic"
		},
		links: ["Psychic phase"],
		keywords: ["PSYKER CHARACTER", "MUTALITH VORTEX BEAST", "manifest"],
		subkeys: ["PSYKER", "CHARACTER", "MUTALITH", "VORTEX", "BEAST"]
	}, {
		name: "Arcane Smokescreen",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Wargear Stratagem",
		desc: "Thousand Sons vehicles are often outfitted with smoke launchers. Their brimstone smog obscures the tanks from view.",
		rules: "Use this Stratagem in your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00098\" data-tooltip-content=\"#tooltip_content00098\" data-tooltip-anchor=\"#tooltip_content00098\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">SMOKESCREEN</span></span> unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, subtract 1 from that attack’s <span class=\"tooltip00017\" data-tooltip-content=\"#tooltip_content00017\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">roll</span></span>.",
		rulesText: "Use this Stratagem in your opponent’s Shooting phase, when a THOUSAND SONS SMOKESCREEN unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, subtract 1 from that attack’s hit roll.",
		activate: {
			when: "in your opponent’s",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: ["Thousand Sons", "SMOKESCREEN", "hit roll"],
		subkeys: ["THOUSAND", "SONS", "SMOKESCREEN", "hit", "roll"]
	}, {
		name: "Aspiring Magister",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Requisition Stratagem",
		desc: "Many Thousand Sons Sorcerers seek to rise to the rank of Magister Templi, amassing powerful relics to aid them in their quest.",
		rules: "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"kwb\">THOUSAND</span> <span class=\"kwb\">SONS</span> Aspiring Sorcerer model or one <span class=\"kwb\">THOUSAND</span> <span class=\"kwb\">SONS</span> Scarab Occult Sorcerer model in your army. That model can have one of the following Sorcerous Arcana Relics, even though they are not a <span class=\"tooltip00116\" data-tooltip-content=\"#tooltip_content00116\"><span class=\"tt kwbu\"><span class=\"kwb\">CHARACTER</span></span></span>: <a href=\"/wh40k9ed/factions/thousand-sons/#Coruscator\">Coruscator</a>; <a href=\"/wh40k9ed/factions/thousand-sons/#Skaeloch-s-Talon\">Skaeloch’s Talon</a>; <a href=\"/wh40k9ed/factions/thousand-sons/#Incandaeum\">Incandaeum</a>; <a href=\"/wh40k9ed/factions/thousand-sons/#The-Stave-Abominus\">The Stave Abominus</a>. Each Relic in your army must be unique and be given to a different model.",
		rulesText: "Use this Stratagem before the battle, when you are mustering your army. Select one THOUSAND SONS Aspiring Sorcerer model or one THOUSAND SONS Scarab Occult Sorcerer model in your army. That model can have one of the following Sorcerous Arcana Relics, even though they are not a CHARACTER: Coruscator; Skaeloch’s Talon; Incandaeum; The Stave Abominus. Each Relic in your army must be unique and be given to a different model.",
		activate: {
			when: "before the battle, when you are mustering your army",
			phase: "Coruscator"
		},
		links: ["Coruscator", "Skaeloch’s Talon", "Incandaeum", "The Stave Abominus"],
		keywords: ["CHARACTER"],
		subkeys: ["CHARACTER", "CHARACTER"]
	}, {
		name: "Biomechanical Mutation",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Epic Deed Stratagem",
		desc: "The war engines of the Thousand Sons seethe with warp energies that can cause their sundered hulls to flow and reseal like wax.",
		rules: "Use this Stratagem in any phase, when a <span class=\"tooltip00092\" data-tooltip-content=\"#tooltip_content00092\" data-tooltip-anchor=\"#tooltip_content00092\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">VEHICLE</span></span> model from your army would lose a wound as the result of a <span class=\"tooltip00027\" data-tooltip-content=\"#tooltip_content00027\"><span class=\"tt kwbu\">mortal</span> <span class=\"tt kwbu\">wound</span></span>. Until the end of the phase, each time that model would lose a wound as the result of a mortal wound, roll one D6: on a 5+, that wound is not lost.",
		rulesText: "Use this Stratagem in any phase, when a THOUSAND SONS VEHICLE model from your army would lose a wound as the result of a mortal wound. Until the end of the phase, each time that model would lose a wound as the result of a mortal wound, roll one D6: on a 5+, that wound is not lost.",
		activate: {
			when: "in any phase, when a <span class=\"tooltip00092\" data-tooltip-content=\"#tooltip_content00092\" data-tooltip-anchor=\"#tooltip_content00092\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">VEHICLE</span></span> model from your army would lose a wound as the result of a <span class=\"tooltip00027\" data-tooltip-content=\"#tooltip_content00027\"><span class=\"tt kwbu\">mortal</span> <span class=\"tt kwbu\">wound</span></span>",
			phase: "Any"
		},
		links: [],
		keywords: ["Thousand Sons", "VEHICLE", "mortal wound"],
		subkeys: ["THOUSAND", "SONS", "VEHICLE", "mortal", "wound"]
	}, {
		name: "Coruscating Beam",
		cost: "3CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Strategic Ploy Stratagem",
		desc: "Silver Towers possess incredible power. When unleashed against the enemy on the ground below, the effect is as horrific as it is devastating.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, if a <span class=\"kwb\">THOUSAND</span> <span class=\"kwb\">SONS</span> <span class=\"kwb\">WARLORD</span> from your army is on the battlefield. Select one point on the battlefield and place a marker on that point. At the start of your next Command phase, place another marker on the battlefield within 9\" of the centre of that marker and draw a line between the centre of each of the markers. Roll one D6 for each unit that line would pass over or through, adding 1 if the unit being rolled for contains 11 or more models and subtracting 1 if the unit being rolled for is a <span class=\"tooltip00116\" data-tooltip-content=\"#tooltip_content00116\"><span class=\"tt kwbu\"><span class=\"kwb\">CHARACTER</span></span></span>. On a 4+, that unit suffers D3 <span class=\"tooltip00027\" data-tooltip-content=\"#tooltip_content00027\"><span class=\"tt kwbu\">mortal</span> <span class=\"tt kwbu\">wounds</span></span>. The markers are then removed. You can only use this Stratagem once.",
		rulesText: "Use this Stratagem in your Command phase, if a THOUSAND SONS WARLORD from your army is on the battlefield. Select one point on the battlefield and place a marker on that point. At the start of your next Command phase, place another marker on the battlefield within 9\" of the centre of that marker and draw a line between the centre of each of the markers. Roll one D6 for each unit that line would pass over or through, adding 1 if the unit being rolled for contains 11 or more models and subtracting 1 if the unit being rolled for is a CHARACTER. On a 4+, that unit suffers D3 mortal wounds. The markers are then removed. You can only use this Stratagem once.",
		activate: {
			when: "in your",
			phase: "Command"
		},
		links: ["Command phase"],
		keywords: ["CHARACTER", "mortal wounds"],
		subkeys: ["CHARACTER", "CHARACTER", "mortal", "wounds"]
	}, {
		name: "Empyric Reservoir",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Strategic Ploy Stratagem",
		desc: "The churning and roiling energies that surround Mutalith Vortex Beasts are immense sources of power for those with the talent, skill and will to manipulate them.",
		rules: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#PSYCHIC-PHASE\">Psychic phase</a>. Select one model from your army within 6\" of a friendly <span class=\"tooltip00081\" data-tooltip-content=\"#tooltip_content00081\" data-tooltip-anchor=\"#tooltip_content00081\"><span class=\"kwb kwbu\">MUTALITH</span> <span class=\"kwb kwbu\">VORTEX</span> <span class=\"kwb kwbu\">BEAST</span></span> model. If that model generates <span class=\"tooltip00003\" data-tooltip-content=\"#tooltip_content00003\"><span class=\"tt kwbu\">Cabal</span> <span class=\"tt kwbu\">points</span></span>, generate D3 additional Cabal points.",
		rulesText: "Use this Stratagem at the start of your Psychic phase. Select one model from your army within 6\" of a friendly MUTALITH VORTEX BEAST model. If that model generates Cabal points, generate D3 additional Cabal points.",
		activate: {
			when: "at the start of your",
			phase: "Psychic"
		},
		links: ["Psychic phase"],
		keywords: ["MUTALITH VORTEX BEAST", "Cabal points"],
		subkeys: ["MUTALITH", "VORTEX", "BEAST", "Cabal", "points"]
	}, {
		name: "Ensorcelled Infusion",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Battle Tactic Stratagem",
		desc: "Utilising the fell powers of the warp, thousand Sons Sorcerers infuse vehicles with empyric energies to render them even deadlier.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00092\" data-tooltip-content=\"#tooltip_content00092\" data-tooltip-anchor=\"#tooltip_content00092\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">VEHICLE</span></span> model from your army within 6\" of a friendly <span class=\"tooltip00078\" data-tooltip-content=\"#tooltip_content00078\" data-tooltip-anchor=\"#tooltip_content00078\"><span class=\"kwb kwbu\">ARCANA</span> <span class=\"kwb kwbu\">ASTARTES</span> <span class=\"kwb kwbu\">PSYKER</span></span> unit is selected to shoot. Until the end of the phase, improve the Armour Penetration characteristic of ranged weapons that model is equipped with by 1.",
		rulesText: "Use this Stratagem in your Shooting phase, when a THOUSAND SONS VEHICLE model from your army within 6\" of a friendly ARCANA ASTARTES PSYKER unit is selected to shoot. Until the end of the phase, improve the Armour Penetration characteristic of ranged weapons that model is equipped with by 1.",
		activate: {
			when: "in your",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: ["Thousand Sons", "VEHICLE", "ARCANA ASTARTES PSYKER"],
		subkeys: ["THOUSAND", "SONS", "VEHICLE", "ARCANA", "ASTARTES", "PSYKER"]
	}, {
		name: "Fated Mutation",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Battle Tactic Stratagem",
		desc: "Many minions of Tzeentch possess horrific mutations, which change and fluctuate at random times. The faithful see such an event as proof that Tzeentch’s eye is upon them.",
		rules: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00107\" data-tooltip-content=\"#tooltip_content00107\" data-tooltip-anchor=\"#tooltip_content00107\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">CHAOS</span> <span class=\"kwb kwbu\">SPAWN</span></span> unit from your army is selected to fight. Until the end of the phase, instead of rolling for that unit’s <span class=\"redfont\">Mutated Beyond Reason</span> ability, you can select the result. Until the end of the phase, each time you determine the number of Attacks a model in that unit can make, add 1 to the result.",
		rulesText: "Use this Stratagem in the Fight phase, when a THOUSAND SONS CHAOS SPAWN unit from your army is selected to fight. Until the end of the phase, instead of rolling for that unit’s Mutated Beyond Reason ability, you can select the result. Until the end of the phase, each time you determine the number of Attacks a model in that unit can make, add 1 to the result.",
		activate: {
			when: "in the",
			phase: "Fight"
		},
		links: ["Fight phase"],
		keywords: ["Thousand Sons", "CHAOS SPAWN"],
		subkeys: ["THOUSAND", "SONS", "CHAOS", "SPAWN"]
	}, {
		name: "Great Sorcerer",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Epic Deed Stratagem",
		desc: "Those not driven mad by their worship of Tzeentch gain the power to harness the energies of the warp like few others.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#PSYCHIC-PHASE\">Psychic phase</a>. Select one <span class=\"tooltip00083\" data-tooltip-content=\"#tooltip_content00083\" data-tooltip-anchor=\"#tooltip_content00083\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">PSYKER</span></span> model from your army. That unit can attempt to <span class=\"tooltip00005\" data-tooltip-content=\"#tooltip_content00005\"><span class=\"tt kwbu\">manifest</span></span> one additional psychic power this turn.",
		rulesText: "Use this Stratagem in your Psychic phase. Select one THOUSAND SONS PSYKER model from your army. That unit can attempt to manifest one additional psychic power this turn.",
		activate: {
			when: "in your",
			phase: "Psychic"
		},
		links: ["Psychic phase"],
		keywords: ["Thousand Sons", "PSYKER", "manifest"],
		subkeys: ["THOUSAND", "SONS", "PSYKER"]
	}, {
		name: "High Acolytes",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Requisition Stratagem",
		desc: "The greatest champions of Tzeentch can call upon their thralls and other lesser minions to serve as their sorcerous lieutenants in battle.",
		rules: "Use this Stratagem before the battle, when you are mustering your army, if your <span class=\"tooltip00115\" data-tooltip-content=\"#tooltip_content00115\"><span class=\"tt kwbu\"><span class=\"kwb\">WARLORD</span></span></span> has the <span class=\"kwb\">THOUSAND</span> <span class=\"kwb\">SONS</span> keyword. Select one <span class=\"tooltip00064\" data-tooltip-content=\"#tooltip_content00064\" data-tooltip-anchor=\"#tooltip_content00064\"><span class=\"kwb kwbu\">ARCANA</span> <span class=\"kwb kwbu\">ASTARTES</span> <span class=\"kwb kwbu\">CHARACTER</span></span> model in your army (excluding named characters) and determine one Warlord Trait for that model (this must be a Warlord Trait they can have); that model it is only regarded as your <span class=\"kwb\">WARLORD</span> for the purposes of that Warlord Trait. Each Warlord Trait in your army must be unique (if randomly generated, re-roll duplicate results), and you cannot use this Stratagem to give a model two Warlord Traits. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice) or an Onslaught battle (in which case you can use this Stratagem three times).",
		rulesText: "Use this Stratagem before the battle, when you are mustering your army, if your WARLORD has the THOUSAND SONS keyword. Select one ARCANA ASTARTES CHARACTER model in your army (excluding named characters) and determine one Warlord Trait for that model (this must be a Warlord Trait they can have); that model it is only regarded as your WARLORD for the purposes of that Warlord Trait. Each Warlord Trait in your army must be unique (if randomly generated, re-roll duplicate results), and you cannot use this Stratagem to give a model two Warlord Traits. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice) or an Onslaught battle (in which case you can use this Stratagem three times).",
		activate: {
			when: "before the battle",
			phase: "when you are mustering your army"
		},
		links: [],
		keywords: ["WARLORD", "ARCANA ASTARTES CHARACTER"],
		subkeys: ["WARLORD", "WARLORD", "ARCANA", "ASTARTES", "CHARACTER"]
	}, {
		name: "Implacable Guardians",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Strategic Ploy Stratagem",
		desc: "The Rubricae are superlative, enduring guardians who can absorb great storms of fire directed at their masters.",
		rules: "Use this Stratagem at the start of your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00064\" data-tooltip-content=\"#tooltip_content00064\" data-tooltip-anchor=\"#tooltip_content00064\"><span class=\"kwb kwbu\">ARCANA</span> <span class=\"kwb kwbu\">ASTARTES</span> <span class=\"kwb kwbu\">CHARACTER</span></span> model from your army (excluding <span class=\"tooltip00045\" data-tooltip-content=\"#tooltip_content00045\" data-tooltip-anchor=\"#tooltip_content00045\"><span class=\"kwb kwbu\">MAGNUS</span> <span class=\"kwb2 kwbu\">THE</span> <span class=\"kwb kwbu\">RED</span></span>). Until the end of the phase, while that model is within 3\" of any friendly <span class=\"tooltip00011\" data-tooltip-content=\"#tooltip_content00011\" data-tooltip-anchor=\"#tooltip_content00011\"><span class=\"kwb kwbu\">RUBRIC</span> <span class=\"kwb kwbu\">MARINES</span></span> or <span class=\"tooltip00029\" data-tooltip-content=\"#tooltip_content00029\" data-tooltip-anchor=\"#tooltip_content00029\"><span class=\"kwb kwbu\">SCARAB</span> <span class=\"kwb kwbu\">OCCULT</span> <span class=\"kwb kwbu\">TERMINATORS</span></span> units, enemy models cannot target that model with ranged weapons.",
		rulesText: "Use this Stratagem at the start of your opponent’s Shooting phase. Select one ARCANA ASTARTES CHARACTER model from your army (excluding MAGNUS THE RED). Until the end of the phase, while that model is within 3\" of any friendly RUBRIC MARINES or SCARAB OCCULT TERMINATORS units, enemy models cannot target that model with ranged weapons.",
		activate: {
			when: "at the start of your opponent’s",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: ["ARCANA ASTARTES CHARACTER", "MAGNUS THE RED", "RUBRIC MARINES", "SCARAB OCCULT TERMINATORS"],
		subkeys: ["ARCANA", "ASTARTES", "CHARACTER", "MAGNUS", "THE", "RED", "RUBRIC", "MARINES", "SCARAB", "OCCULT", "TERMINATORS"]
	}, {
		name: "Inescapable Forewarning",
		cost: "2CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Strategic Ploy Stratagem",
		desc: "The Thousand Sons’ mastery of time means they know of an enemy’s arrival on the battlefield before the foe even realises it is to go to war.",
		rules: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, if an enemy unit was set up as Reinforcements within 18\" of an <span class=\"tooltip00078\" data-tooltip-content=\"#tooltip_content00078\" data-tooltip-anchor=\"#tooltip_content00078\"><span class=\"kwb kwbu\">ARCANA</span> <span class=\"kwb kwbu\">ASTARTES</span> <span class=\"kwb kwbu\">PSYKER</span></span> unit from your army. Select one <span class=\"tooltip00079\" data-tooltip-content=\"#tooltip_content00079\" data-tooltip-anchor=\"#tooltip_content00079\"><span class=\"kwb kwbu\">ARCANA</span> <span class=\"kwb kwbu\">ASTARTES</span> <span class=\"kwb kwbu\">CORE</span></span> unit from your army that is within 6\" of that <span class=\"kwb\">ARCANA</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">PSYKER</span> unit and not within <span class=\"tooltip00015\" data-tooltip-content=\"#tooltip_content00015\"><span class=\"tt kwbu\">Engagement</span> <span class=\"tt kwbu\">Range</span></span> of any enemy units. That <span class=\"kwb\">ARCANA</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">CORE</span> unit can shoot as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, but its models can only target a single eligible enemy unit that was set up as Reinforcements this turn within 18\" of their unit and that <span class=\"kwb\">ARCANA</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">PSYKER</span> unit when doing so.",
		rulesText: "Use this Stratagem at the end of the Reinforcements step of your opponent’s Movement phase, if an enemy unit was set up as Reinforcements within 18\" of an ARCANA ASTARTES PSYKER unit from your army. Select one ARCANA ASTARTES CORE unit from your army that is within 6\" of that ARCANA ASTARTES PSYKER unit and not within Engagement Range of any enemy units. That ARCANA ASTARTES CORE unit can shoot as if it were your Shooting phase, but its models can only target a single eligible enemy unit that was set up as Reinforcements this turn within 18\" of their unit and that ARCANA ASTARTES PSYKER unit when doing so.",
		activate: {
			when: "at the end of the",
			phase: "Reinforcements"
		},
		links: ["Reinforcements step", "Movement phase", "Shooting phase"],
		keywords: ["ARCANA ASTARTES PSYKER", "ARCANA ASTARTES CORE", "Engagement Range"],
		subkeys: ["ARCANA", "ASTARTES", "PSYKER", "ARCANA", "ASTARTES", "CORE", "Engagement", "Range"]
	}, {
		name: "Infernal Fusillade",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Battle Tactic Stratagem",
		desc: "Arcane invocations imbue the Thousand Sons’ weapons with sorcerous power, rendering them still more lethal to the foe.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when an <span class=\"tooltip00074\" data-tooltip-content=\"#tooltip_content00074\" data-tooltip-anchor=\"#tooltip_content00074\"><span class=\"kwb kwbu\">ARCANA</span> <span class=\"kwb kwbu\">ASTARTES</span> <span class=\"kwb kwbu\">INFANTRY</span></span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit shoots a <a href=\"/wh40k9ed/factions/thousand-sons/#Bolt-Weapons\">bolt weapon</a>, make one additional attack with that weapon. For example, a model shooting an inferno combi-bolter at a target within half range would make 5 attacks.",
		rulesText: "Use this Stratagem in your Shooting phase, when an ARCANA ASTARTES INFANTRY unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit shoots a bolt weapon, make one additional attack with that weapon. For example, a model shooting an inferno combi-bolter at a target within half range would make 5 attacks.",
		activate: {
			when: "in your",
			phase: "Shooting"
		},
		links: ["Shooting phase", "bolt weapon"],
		keywords: ["ARCANA ASTARTES INFANTRY"],
		subkeys: ["ARCANA", "ASTARTES", "INFANTRY"]
	}, {
		name: "Inhuman Savagery",
		cost: "2CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Battle Tactic Stratagem",
		desc: "Tzaangors are ferocious creatures, capable of reaching incredible levels of savagery in the fury of combat.",
		rules: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00032\" data-tooltip-content=\"#tooltip_content00032\" data-tooltip-anchor=\"#tooltip_content00032\"><span class=\"kwb kwbu\">TZAANGOR</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, you can re-roll the <span class=\"tooltip00017\" data-tooltip-content=\"#tooltip_content00017\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">roll</span></span>.",
		rulesText: "Use this Stratagem in the Fight phase, when a TZAANGOR unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, you can re-roll the hit roll.",
		activate: {
			when: "in the",
			phase: "Fight"
		},
		links: ["Fight phase"],
		keywords: ["TZAANGOR", "hit roll"],
		subkeys: ["hit", "roll"]
	}, {
		name: "Malefic Scroll",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Wargear Stratagem",
		desc: "The Thousand Sons have vast libraries full of ancient texts. The knowledge contained within can enhance the Sorcerers’ power.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#PSYCHIC-PHASE\">Psychic phase</a>, when a <span class=\"tooltip00083\" data-tooltip-content=\"#tooltip_content00083\" data-tooltip-anchor=\"#tooltip_content00083\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">PSYKER</span></span> unit from your army (excluding <span class=\"tooltip00045\" data-tooltip-content=\"#tooltip_content00045\" data-tooltip-anchor=\"#tooltip_content00045\"><span class=\"kwb kwbu\">MAGNUS</span> <span class=\"kwb2 kwbu\">THE</span> <span class=\"kwb kwbu\">RED</span></span>) <span class=\"tooltip00005\" data-tooltip-content=\"#tooltip_content00005\"><span class=\"tt kwbu\">manifests</span></span> the <span class=\"tooltip00006\" data-tooltip-content=\"#tooltip_content00006\"><span class=\"tt kwbu\">Smite</span></span> psychic power. That manifestation inflicts 3 <span class=\"tooltip00027\" data-tooltip-content=\"#tooltip_content00027\"><span class=\"tt kwbu\">mortal</span> <span class=\"tt kwbu\">wounds</span></span> instead of D3 or D6 (no dice roll is made).",
		rulesText: "Use this Stratagem in your Psychic phase, when a THOUSAND SONS PSYKER unit from your army (excluding MAGNUS THE RED) manifests the Smite psychic power. That manifestation inflicts 3 mortal wounds instead of D3 or D6 (no dice roll is made).",
		activate: {
			when: "in your",
			phase: "Psychic"
		},
		links: ["Psychic phase"],
		keywords: ["Thousand Sons", "PSYKER", "MAGNUS THE RED", "manifests", "Smite", "mortal wounds"],
		subkeys: ["THOUSAND", "SONS", "PSYKER", "MAGNUS", "THE", "RED", "mortal", "wounds"]
	}, {
		name: "Malevolent Machine Spirit",
		cost: "2CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Epic Deed Stratagem",
		desc: "Many Heretic Astartes vehicles’ machine spirits are highly malicious, striking at enemies even without crew or when their critical systems are failing.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00069\" data-tooltip-content=\"#tooltip_content00069\" data-tooltip-anchor=\"#tooltip_content00069\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">MACHINE</span> <span class=\"kwb kwbu\">SPIRIT</span></span> model from your army. Until the start of your next Command phase, that model is considered to have its full wounds remaining for the purposes of determining what characteristics on its profile to use.",
		rulesText: "Use this Stratagem in your Command phase. Select one THOUSAND SONS MACHINE SPIRIT model from your army. Until the start of your next Command phase, that model is considered to have its full wounds remaining for the purposes of determining what characteristics on its profile to use.",
		activate: {
			when: "in your",
			phase: "Command"
		},
		links: ["Command phase"],
		keywords: ["Thousand Sons", "MACHINE SPIRIT"],
		subkeys: ["THOUSAND", "SONS", "MACHINE", "SPIRIT"]
	}, {
		name: "Malignant Pact",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Epic Deed Stratagem",
		desc: "It is not uncommon for Sorcerers to offer the souls of others to the creatures of the warp in exchange for power.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, when an <span class=\"tooltip00071\" data-tooltip-content=\"#tooltip_content00071\" data-tooltip-anchor=\"#tooltip_content00071\"><span class=\"kwb kwbu\">INFERNAL</span> <span class=\"kwb kwbu\">MASTER</span></span> model from your army is unsuccessful in <a href=\"/wh40k9ed/factions/thousand-sons/#Infernal-Pacts\">making a pact</a>. Select one friendly <span class=\"tooltip00009\" data-tooltip-content=\"#tooltip_content00009\" data-tooltip-anchor=\"#tooltip_content00009\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">INFANTRY</span></span> or <span class=\"tooltip00072\" data-tooltip-content=\"#tooltip_content00072\" data-tooltip-anchor=\"#tooltip_content00072\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">CAVALRY</span></span> unit within 6\" of that model. That unit suffers 1 <span class=\"tooltip00027\" data-tooltip-content=\"#tooltip_content00027\"><span class=\"tt kwbu\">mortal</span> <span class=\"tt kwbu\">wound</span></span> and that pact is successful.",
		rulesText: "Use this Stratagem in your Command phase, when an INFERNAL MASTER model from your army is unsuccessful in making a pact. Select one friendly THOUSAND SONS INFANTRY or THOUSAND SONS CAVALRY unit within 6\" of that model. That unit suffers 1 mortal wound and that pact is successful.",
		activate: {
			when: "in your",
			phase: "Command"
		},
		links: ["Command phase", "making a pact"],
		keywords: ["INFERNAL MASTER", "Thousand Sons", "INFANTRY", "Thousand Sons", "CAVALRY", "mortal wound"],
		subkeys: ["INFERNAL", "MASTER", "THOUSAND", "SONS", "INFANTRY", "THOUSAND", "SONS", "CAVALRY", "mortal", "wound"]
	}, {
		name: "Masters Of The Immaterium",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Epic Deed Stratagem",
		desc: "Though the empyrean is a dangerous weapon to wield, the Thousand Sons know better than most how to take the greatest risks and remain unharmed.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#PSYCHIC-PHASE\">Psychic phase</a>, when a <span class=\"tooltip00083\" data-tooltip-content=\"#tooltip_content00083\" data-tooltip-anchor=\"#tooltip_content00083\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">PSYKER</span></span> unit from your army would suffer <span class=\"tooltip00114\" data-tooltip-content=\"#tooltip_content00114\"><span class=\"tt kwbu\">Perils</span> <span class=\"tt kwbu\">of</span> <span class=\"tt kwbu\">the</span> <span class=\"tt kwbu\">Warp</span></span>. That unit does not suffer Perils of the Warp.",
		rulesText: "Use this Stratagem in your Psychic phase, when a THOUSAND SONS PSYKER unit from your army would suffer Perils of the Warp. That unit does not suffer Perils of the Warp.",
		activate: {
			when: "in your",
			phase: "Psychic"
		},
		links: ["Psychic phase"],
		keywords: ["Thousand Sons", "PSYKER", "Perils of the Warp"],
		subkeys: ["THOUSAND", "SONS", "PSYKER", "Perils", "of", "the", "Warp"]
	}, {
		name: "Metaphysical Focus",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Epic Deed Stratagem",
		desc: "Even the gathered gheists of the Thousand Sons sing with sorcery. On occasion this manifests in destructive fashion.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#PSYCHIC-PHASE\">Psychic phase</a>, after attempting to perform a <a href=\"/wh40k9ed/the-rules/core-rules/#Performing-Psychic-Actions\">psychic action</a> with an <span class=\"tooltip00078\" data-tooltip-content=\"#tooltip_content00078\" data-tooltip-anchor=\"#tooltip_content00078\"><span class=\"kwb kwbu\">ARCANA</span> <span class=\"kwb kwbu\">ASTARTES</span> <span class=\"kwb kwbu\">PSYKER</span></span> unit from your army. That unit can attempt to <span class=\"tooltip00005\" data-tooltip-content=\"#tooltip_content00005\"><span class=\"tt kwbu\">manifest</span></span> one psychic power this phase.",
		rulesText: "Use this Stratagem in your Psychic phase, after attempting to perform a psychic action with an ARCANA ASTARTES PSYKER unit from your army. That unit can attempt to manifest one psychic power this phase.",
		activate: {
			when: "in your",
			phase: "Psychic"
		},
		links: ["Psychic phase", "psychic action"],
		keywords: ["ARCANA ASTARTES PSYKER", "manifest"],
		subkeys: ["ARCANA", "ASTARTES", "PSYKER"]
	}, {
		name: "Psychic Dominion",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Epic Deed Stratagem",
		desc: "To pit oneself against the psychic might of the Thousand Sons is to be trapped, helpless and screaming, within your own mind.",
		rules: "Use this Stratagem in your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#PSYCHIC-PHASE\">Psychic phase</a>, when a <span class=\"tooltip00083\" data-tooltip-content=\"#tooltip_content00083\" data-tooltip-anchor=\"#tooltip_content00083\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">PSYKER</span></span> unit from your army is selected to attempt to deny a psychic power. So long as that unit is within 6\" of another friendly <span class=\"kwb\">THOUSAND</span> <span class=\"kwb\">SONS</span> <span class=\"kwb\">PSYKER</span> unit that could also attempt to deny that psychic power, when taking that <span class=\"tooltip00008\" data-tooltip-content=\"#tooltip_content00008\"><span class=\"tt kwbu\">Deny</span> <span class=\"tt kwbu\">the</span> <span class=\"tt kwbu\">Witch</span> <span class=\"tt kwbu\">test</span></span>, roll one additional D6.",
		rulesText: "Use this Stratagem in your opponent’s Psychic phase, when a THOUSAND SONS PSYKER unit from your army is selected to attempt to deny a psychic power. So long as that unit is within 6\" of another friendly THOUSAND SONS PSYKER unit that could also attempt to deny that psychic power, when taking that Deny the Witch test, roll one additional D6.",
		activate: {
			when: "in your opponent’s",
			phase: "Psychic"
		},
		links: ["Psychic phase"],
		keywords: ["Thousand Sons", "PSYKER", "Deny the Witch test"],
		subkeys: ["THOUSAND", "SONS", "PSYKER", "Deny", "the", "Witch", "test"]
	}, {
		name: "Risen Rubricae",
		cost: "2CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Strategic Ploy Stratagem",
		desc: "A plan decades in the making comes to fruition as hidden, silent Rubricae emerge at a fateful hour to deliver the killing blow.",
		rules: "Use this Stratagem during deployment, when setting up a <span class=\"tooltip00011\" data-tooltip-content=\"#tooltip_content00011\" data-tooltip-anchor=\"#tooltip_content00011\"><span class=\"kwb kwbu\">RUBRIC</span> <span class=\"kwb kwbu\">MARINES</span></span> unit from your army. That unit can be set up anywhere on the battlefield that is more than 9\" away from the enemy deployment zone and any enemy models. You can only use this Stratagem once.",
		rulesText: "Use this Stratagem during deployment, when setting up a RUBRIC MARINES unit from your army. That unit can be set up anywhere on the battlefield that is more than 9\" away from the enemy deployment zone and any enemy models. You can only use this Stratagem once.",
		activate: {
			when: "during deployment",
			phase: "when setting up a <span class=\"tooltip00011\" data-tooltip-content=\"#tooltip_content00011\" data-tooltip-anchor=\"#tooltip_content00011\"><span class=\"kwb kwbu\">RUBRIC</span> <span class=\"kwb kwbu\">MARINES</span></span> unit from your army"
		},
		links: [],
		keywords: ["RUBRIC MARINES"],
		subkeys: ["RUBRIC", "MARINES"]
	}, {
		name: "Schemes Of Change",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Strategic Ploy Stratagem",
		desc: "The complexities of fate are incredibly difficult to grasp, and even the slightest change can have profound consequences.",
		rules: "You can only use this Stratagem if your army only contains <a href=\"/wh40k9ed/factions/thousand-sons/#Detachment-Rules\"><span class=\"kwb\">THOUSAND</span> <span class=\"kwb\">SONS</span> Detachments</a>. Use this Stratagem if you are playing a mission that requires you to select either <a href=\"/wh40k9ed/the-rules/matched-play/#Secondary-Objectives\">secondary objectives</a> or <a href=\"/wh40k9ed/the-rules/narrative-play/#Agendas\">Agendas</a>, after both players have revealed their selections. You can select one of your secondary objectives or Agendas, and replace it with a different one (make a note on your <a href=\"/wh40k9ed/the-rules/core-rules/#Battle-forged-Army-Roster\">army roster</a> as to your new selection and inform your opponent). All the normal rules for selecting secondary objectives and Agendas apply. If both players have a rule that allows them to select new secondary objectives or Agendas, both players make their new selections before revealing them simultaneously to their opponent.",
		rulesText: "You can only use this Stratagem if your army only contains THOUSAND SONS Detachments. Use this Stratagem if you are playing a mission that requires you to select either secondary objectives or Agendas, after both players have revealed their selections. You can select one of your secondary objectives or Agendas, and replace it with a different one (make a note on your army roster as to your new selection and inform your opponent). All the normal rules for selecting secondary objectives and Agendas apply. If both players have a rule that allows them to select new secondary objectives or Agendas, both players make their new selections before revealing them simultaneously to their opponent.",
		activate: {
			when: "",
			phase: ""
		},
		links: ["THOUSAND SONS Detachments", "secondary objectives", "Agendas", "army roster"],
		keywords: [],
		subkeys: []
	}, {
		name: "Selfless Automata",
		cost: "2CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Strategic Ploy Stratagem",
		desc: "The Sorcerers of the Thousand Sons are able to wield their enthralled Rubricae like weapons in their own defence.",
		rules: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Heroic-Interventions\">Heroic Interventions</a> step of your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one enemy unit that finished a <span class=\"tooltip00047\" data-tooltip-content=\"#tooltip_content00047\"><span class=\"tt kwbu\">charge</span> <span class=\"tt kwbu\">move</span></span> within <span class=\"tooltip00015\" data-tooltip-content=\"#tooltip_content00015\"><span class=\"tt kwbu\">Engagement</span> <span class=\"tt kwbu\">Range</span></span> of any <span class=\"tooltip00064\" data-tooltip-content=\"#tooltip_content00064\" data-tooltip-anchor=\"#tooltip_content00064\"><span class=\"kwb kwbu\">ARCANA</span> <span class=\"kwb kwbu\">ASTARTES</span> <span class=\"kwb kwbu\">CHARACTER</span></span> units from your army that phase: one friendly <span class=\"tooltip00011\" data-tooltip-content=\"#tooltip_content00011\" data-tooltip-anchor=\"#tooltip_content00011\"><span class=\"kwb kwbu\">RUBRIC</span> <span class=\"kwb kwbu\">MARINES</span></span> or <span class=\"tooltip00029\" data-tooltip-content=\"#tooltip_content00029\" data-tooltip-anchor=\"#tooltip_content00029\"><span class=\"kwb kwbu\">SCARAB</span> <span class=\"kwb kwbu\">OCCULT</span> <span class=\"kwb kwbu\">TERMINATORS</span></span> unit that is within 12\" of that enemy unit and not within Engagement Range of any enemy units can <span class=\"tooltip00118\" data-tooltip-content=\"#tooltip_content00118\"><span class=\"tt kwbu\">perform</span> <span class=\"tt kwbu\">a</span> <span class=\"tt kwbu\">Heroic</span> <span class=\"tt kwbu\">Intervention</span></span>. When performing that Heroic Intervention, each model in that unit can move up to 2D6\" instead of up to 3\" and does not have to finish that move closer to the closest enemy model; instead, at least one model from that unit must end that move within Engagement Range of the selected enemy unit, and no models from that unit can end that move within Engagement Range of any other enemy units (otherwise it does not move).",
		rulesText: "Use this Stratagem in the Heroic Interventions step of your opponent’s Charge phase. Select one enemy unit that finished a charge move within Engagement Range of any ARCANA ASTARTES CHARACTER units from your army that phase: one friendly RUBRIC MARINES or SCARAB OCCULT TERMINATORS unit that is within 12\" of that enemy unit and not within Engagement Range of any enemy units can perform a Heroic Intervention. When performing that Heroic Intervention, each model in that unit can move up to 2D6\" instead of up to 3\" and does not have to finish that move closer to the closest enemy model; instead, at least one model from that unit must end that move within Engagement Range of the selected enemy unit, and no models from that unit can end that move within Engagement Range of any other enemy units (otherwise it does not move).",
		activate: {
			when: "in the",
			phase: "Heroic"
		},
		links: ["Heroic Interventions", "Charge phase"],
		keywords: ["charge move", "Engagement Range", "ARCANA ASTARTES CHARACTER", "RUBRIC MARINES", "SCARAB OCCULT TERMINATORS", "perform a Heroic Intervention"],
		subkeys: ["charge", "move", "Engagement", "Range", "ARCANA", "ASTARTES", "CHARACTER", "RUBRIC", "MARINES", "SCARAB", "OCCULT", "TERMINATORS", "perform", "a", "Heroic", "Intervention"]
	}, {
		name: "Slow And Purposeful",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Strategic Ploy Stratagem",
		desc: "The warriors of the Thousand Sons advance inexorably upon their foes while laying down a hail of weapons fire. Unable to falter even if they wished to, they remain deadly accurate at all times.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when an <span class=\"tooltip00074\" data-tooltip-content=\"#tooltip_content00074\" data-tooltip-anchor=\"#tooltip_content00074\"><span class=\"kwb kwbu\">ARCANA</span> <span class=\"kwb kwbu\">ASTARTES</span> <span class=\"kwb kwbu\">INFANTRY</span></span> unit from your army makes a <span class=\"tooltip00052\" data-tooltip-content=\"#tooltip_content00052\"><span class=\"tt kwbu\">Normal</span> <span class=\"tt kwbu\">Move</span></span>. Until the start of your next turn, that unit is considered to have <span class=\"tooltip00025\" data-tooltip-content=\"#tooltip_content00025\"><span class=\"tt kwbu\">Remained</span> <span class=\"tt kwbu\">Stationary</span></span>.",
		rulesText: "Use this Stratagem in your Movement phase, when an ARCANA ASTARTES INFANTRY unit from your army makes a Normal Move. Until the start of your next turn, that unit is considered to have Remained Stationary.",
		activate: {
			when: "in your",
			phase: "Movement"
		},
		links: ["Movement phase"],
		keywords: ["ARCANA ASTARTES INFANTRY", "Normal Move", "Remained Stationary"],
		subkeys: ["ARCANA", "ASTARTES", "INFANTRY", "Normal", "Move", "Remained", "Stationary"]
	}, {
		name: "Sorcerous Arcana",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Requisition Stratagem",
		desc: "The halls of Tizca are replete with sorcerous esoterica, gathered by Magnus and his gene-sons over thousands of years.",
		rules: "Use this Stratagem before the battle, when you are mustering your army, if your <span class=\"tooltip00115\" data-tooltip-content=\"#tooltip_content00115\"><span class=\"tt kwbu\"><span class=\"kwb\">WARLORD</span></span></span> has the <span class=\"kwb\">THOUSAND</span> <span class=\"kwb\">SONS</span> keyword. Select one <span class=\"tooltip00066\" data-tooltip-content=\"#tooltip_content00066\" data-tooltip-anchor=\"#tooltip_content00066\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">CHARACTER</span></span> model in your army and give them one <a href=\"/wh40k9ed/factions/thousand-sons/#Sorcerous-Arcana\">Sorcerous Arcana</a> Relic (this must be a Relic they can have). Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice) or an Onslaught battle (in which case you can use this Stratagem three times).",
		rulesText: "Use this Stratagem before the battle, when you are mustering your army, if your WARLORD has the THOUSAND SONS keyword. Select one THOUSAND SONS CHARACTER model in your army and give them one Sorcerous Arcana Relic (this must be a Relic they can have). Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice) or an Onslaught battle (in which case you can use this Stratagem three times).",
		activate: {
			when: "before the battle, when you are mustering your army, if your",
			phase: "Sorcerous"
		},
		links: ["Sorcerous Arcana"],
		keywords: ["WARLORD", "Thousand Sons", "CHARACTER"],
		subkeys: ["WARLORD", "WARLORD", "THOUSAND", "SONS", "CHARACTER"]
	}, {
		name: "Sorcerous Might",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Epic Deed Stratagem",
		desc: "The most powerful Sorcerers of the Thousand Sons are battle-psykers who can, if the need is dire enough, siphon a sliver of their corrupted souls into their force staves to temporarily boost their lethality.",
		rules: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00110\" data-tooltip-content=\"#tooltip_content00110\" data-tooltip-anchor=\"#tooltip_content00110\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">SORCERER</span></span> or <span class=\"tooltip00040\" data-tooltip-content=\"#tooltip_content00040\" data-tooltip-anchor=\"#tooltip_content00040\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">EXALTED</span> <span class=\"kwb kwbu\">SORCERER</span></span> unit from your army that is equipped with a force stave (excluding Relics) is selected to fight. Until the end of the phase, the Damage characteristic of that force stave is changed to D3+1.",
		rulesText: "Use this Stratagem in the Fight phase, when a THOUSAND SONS SORCERER or THOUSAND SONS EXALTED SORCERER unit from your army that is equipped with a force stave (excluding Relics) is selected to fight. Until the end of the phase, the Damage characteristic of that force stave is changed to D3+1.",
		activate: {
			when: "in the",
			phase: "Fight"
		},
		links: ["Fight phase"],
		keywords: ["Thousand Sons", "SORCERER", "Thousand Sons", "EXALTED SORCERER"],
		subkeys: ["THOUSAND", "SONS", "SORCERER", "THOUSAND", "SONS", "EXALTED", "SORCERER"]
	}, {
		name: "Soul Reap",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Wargear Stratagem",
		desc: "Faced with numerous enemies, the Thousand Sons psychically enhance their soulreaper cannons to increase their rate of fire.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">THOUSAND</span> <span class=\"kwb\">SONS</span> unit from your army is selected to shoot. Until the end of the phase, soulreaper cannons models in that unit are equipped with gain the following ability: ‘Each time an attack is made with this weapon against a unit that contains 11 or more models, make 2 <span class=\"tooltip00017\" data-tooltip-content=\"#tooltip_content00017\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">rolls</span></span> instead of 1.’",
		rulesText: "Use this Stratagem in your Shooting phase, when a THOUSAND SONS unit from your army is selected to shoot. Until the end of the phase, soulreaper cannons models in that unit are equipped with gain the following ability: ‘Each time an attack is made with this weapon against a unit that contains 11 or more models, make 2 hit rolls instead of 1.’",
		activate: {
			when: "in your",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: ["hit rolls"],
		subkeys: ["hit", "rolls"]
	}, {
		name: "Unholy Susurrus",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Epic Deed Stratagem",
		desc: "Many lesser warp entities whisper dark secrets to selected individuals that can shift the tide of battle.",
		rules: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#PSYCHIC-PHASE\">Psychic phase</a>. Select one <span class=\"tooltip00083\" data-tooltip-content=\"#tooltip_content00083\" data-tooltip-anchor=\"#tooltip_content00083\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">PSYKER</span></span> unit from your army. Select one psychic power from the disciplines it has access to. That psychic power replaces one psychic power that unit knows.",
		rulesText: "Use this Stratagem at the start of your Psychic phase. Select one THOUSAND SONS PSYKER unit from your army. Select one psychic power from the disciplines it has access to. That psychic power replaces one psychic power that unit knows.",
		activate: {
			when: "at the start of your",
			phase: "Psychic"
		},
		links: ["Psychic phase"],
		keywords: ["Thousand Sons", "PSYKER"],
		subkeys: ["THOUSAND", "SONS", "PSYKER"]
	}, {
		name: "Unwavering Phalanx",
		cost: "1CP/3CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Battle Tactic Stratagem",
		desc: "Massed as one, the sheer unnatural resilience of the thousand Sons’ footsoldiers is magnified to a terrifying degree.",
		rules: "Use this Stratagem in your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00100\" data-tooltip-content=\"#tooltip_content00100\" data-tooltip-anchor=\"#tooltip_content00100\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">RUBRIC</span> <span class=\"kwb kwbu\">MARINES</span></span> or <span class=\"tooltip00101\" data-tooltip-content=\"#tooltip_content00101\" data-tooltip-anchor=\"#tooltip_content00101\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">SCARAB</span> <span class=\"kwb kwbu\">OCCULT</span> <span class=\"kwb kwbu\">TERMINATORS</span></span> unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, subtract 1 from the Damage characteristic of that attack (to a minimum of 1). If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise it costs 3CP.",
		rulesText: "Use this Stratagem in your opponent’s Shooting phase, when a THOUSAND SONS RUBRIC MARINES or THOUSAND SONS SCARAB OCCULT TERMINATORS unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, subtract 1 from the Damage characteristic of that attack (to a minimum of 1). If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise it costs 3CP.",
		activate: {
			when: "in your opponent’s",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: ["Thousand Sons", "RUBRIC MARINES", "Thousand Sons", "SCARAB OCCULT TERMINATORS"],
		subkeys: ["THOUSAND", "SONS", "RUBRIC", "MARINES", "THOUSAND", "SONS", "SCARAB", "OCCULT", "TERMINATORS"]
	}, {
		name: "Vector Strike",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Strategic Ploy Stratagem",
		desc: "The aerial daemons bound within the ironclad forms of Thousand Sons Heldrakes are no strangers to soaring nimbly through their enemies, ripping and tearing as they fly.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, after making a <span class=\"tooltip00052\" data-tooltip-content=\"#tooltip_content00052\"><span class=\"tt kwbu\">Normal</span> <span class=\"tt kwbu\">Move</span></span> with a <span class=\"tooltip00076\" data-tooltip-content=\"#tooltip_content00076\" data-tooltip-anchor=\"#tooltip_content00076\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">HELDRAKE</span></span> model from your army. Select one enemy unit this model moved across that is not a <span class=\"tooltip00116\" data-tooltip-content=\"#tooltip_content00116\"><span class=\"tt kwbu\"><span class=\"kwb\">CHARACTER</span></span></span> with a Wounds characteristic of 9 or less and roll one D6: on a 2+, that unit suffers D3 <span class=\"tooltip00027\" data-tooltip-content=\"#tooltip_content00027\"><span class=\"tt kwbu\">mortal</span> <span class=\"tt kwbu\">wounds</span></span>. If that unit can <span class=\"tooltip00117\" data-tooltip-content=\"#tooltip_content00117\"><span class=\"tt kwbu\"><span class=\"kwb\">FLY</span></span></span>, on a 2+ it suffers 3 mortal wounds instead.",
		rulesText: "Use this Stratagem in your Movement phase, after making a Normal Move with a THOUSAND SONS HELDRAKE model from your army. Select one enemy unit this model moved across that is not a CHARACTER with a Wounds characteristic of 9 or less and roll one D6: on a 2+, that unit suffers D3 mortal wounds. If that unit can FLY, on a 2+ it suffers 3 mortal wounds instead.",
		activate: {
			when: "in your",
			phase: "Movement"
		},
		links: ["Movement phase"],
		keywords: ["Normal Move", "Thousand Sons", "HELDRAKE", "CHARACTER", "mortal wounds", "FLY"],
		subkeys: ["Normal", "Move", "THOUSAND", "SONS", "HELDRAKE", "CHARACTER", "CHARACTER", "mortal", "wounds", "FLY", "FLY"]
	}, {
		name: "Vengeance For Prospero",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Battle Tactic Stratagem",
		desc: "The Thousand Sons have never forgiven the sons of Leman Russ for the devastation of their home world millennia ago.",
		rules: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">THOUSAND</span> <span class=\"kwb\">SONS</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack against a <span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> unit, you can re-roll the <span class=\"tooltip00017\" data-tooltip-content=\"#tooltip_content00017\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">roll</span></span> and the <span class=\"tooltip00048\" data-tooltip-content=\"#tooltip_content00048\"><span class=\"tt kwbu\">wound</span> <span class=\"tt kwbu\">roll</span></span>.",
		rulesText: "Use this Stratagem in the Fight phase, when a THOUSAND SONS unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack against a SPACE WOLVES unit, you can re-roll the hit roll and the wound roll.",
		activate: {
			when: "in the",
			phase: "Fight"
		},
		links: ["Fight phase"],
		keywords: ["hit roll", "wound roll"],
		subkeys: ["hit", "roll", "wound", "roll"]
	}, {
		name: "Warped Regeneration",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Epic Deed Stratagem",
		desc: "The sorceries of the Thousand Sons can alter reality itself, rendering whole that which has been put asunder.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#PSYCHIC-PHASE\">Psychic phase</a>, after <span class=\"tooltip00005\" data-tooltip-content=\"#tooltip_content00005\"><span class=\"tt kwbu\">manifesting</span></span> a psychic power with a <span class=\"kwb\">THOUSAND</span> <span class=\"kwb\">SONS</span> unit from your army with an unmodified <span class=\"tooltip00004\" data-tooltip-content=\"#tooltip_content00004\"><span class=\"tt kwbu\">Psychic</span> <span class=\"tt kwbu\">test</span></span> of 9 or more. If that unit contains a model that has lost any wounds, that model is healed and regains up to D3 lost wounds (each model can only be healed once per turn). Otherwise, if any models in that unit have been destroyed, you can return one of those models to the battlefield with all of its wounds remaining, placing it in <span class=\"tooltip00056\" data-tooltip-content=\"#tooltip_content00056\"><span class=\"tt kwbu\">unit</span> <span class=\"tt kwbu\">coherency</span></span>.",
		rulesText: "Use this Stratagem in your Psychic phase, after manifesting a psychic power with a THOUSAND SONS unit from your army with an unmodified Psychic test of 9 or more. If that unit contains a model that has lost any wounds, that model is healed and regains up to D3 lost wounds (each model can only be healed once per turn). Otherwise, if any models in that unit have been destroyed, you can return one of those models to the battlefield with all of its wounds remaining, placing it in unit coherency.",
		activate: {
			when: "in your",
			phase: "Psychic"
		},
		links: ["Psychic phase"],
		keywords: ["manifesting", "Psychic test", "unit coherency"],
		subkeys: ["Psychic", "test", "unit", "coherency"]
	}, {
		name: "Warpflame Gargoyles",
		cost: "1CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Wargear Stratagem",
		desc: "On the hulls of vehicles swollen with the power of Tzeentch, gnashing maws open to spew warpfire over those nearby.",
		rules: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00104\" data-tooltip-content=\"#tooltip_content00104\" data-tooltip-anchor=\"#tooltip_content00104\"><span class=\"kwb kwbu\">ARCANA</span> <span class=\"kwb kwbu\">ASTARTES</span> <span class=\"kwb kwbu\">VEHICLE</span></span> model from your army (excluding <span class=\"tooltip00105\" data-tooltip-content=\"#tooltip_content00105\" data-tooltip-anchor=\"#tooltip_content00105\"><span class=\"kwb kwbu\">HELBRUTE</span></span>s). Roll one D6 for each other unit within <span class=\"tooltip00015\" data-tooltip-content=\"#tooltip_content00015\"><span class=\"tt kwbu\">Engagement</span> <span class=\"tt kwbu\">Range</span></span> of that model, subtracting 2 if the unit being rolled for is a <span class=\"kwb\">CHARACTER</span> or <span class=\"kwb\">VEHICLE</span> unit: on a 4+, that unit suffers D3 <span class=\"tooltip00027\" data-tooltip-content=\"#tooltip_content00027\"><span class=\"tt kwbu\">mortal</span> <span class=\"tt kwbu\">wounds</span></span>.",
		rulesText: "Use this Stratagem at the start of the Fight phase. Select one ARCANA ASTARTES VEHICLE model from your army (excluding HELBRUTEs). Roll one D6 for each other unit within Engagement Range of that model, subtracting 2 if the unit being rolled for is a CHARACTER or VEHICLE unit: on a 4+, that unit suffers D3 mortal wounds.",
		activate: {
			when: "at the start of the",
			phase: "Fight"
		},
		links: ["Fight phase"],
		keywords: ["ARCANA ASTARTES VEHICLE", "HELBRUTE", "Engagement Range", "mortal wounds"],
		subkeys: ["ARCANA", "ASTARTES", "VEHICLE", "Engagement", "Range", "mortal", "wounds"]
	}, {
		name: "Webway Infiltration",
		cost: "2CP/3CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Strategic Ploy Stratagem",
		desc: "By breaking into and traversing the winding paths of the webway, the Thousand Sons are able to outflank their foes.",
		rules: "Use this Stratagem during deployment. If you spend 2CP, you can set up one <span class=\"tooltip00009\" data-tooltip-content=\"#tooltip_content00009\" data-tooltip-anchor=\"#tooltip_content00009\"><span class=\"kwb kwbu\">THOUSAND</span> <span class=\"kwb kwbu\">SONS</span> <span class=\"kwb kwbu\">INFANTRY</span></span> unit from your army in the webway instead of setting it up on the battlefield. If you spend 3CP, you can set up two <span class=\"kwb\">THOUSAND</span> <span class=\"kwb\">SONS</span> <span class=\"kwb\">INFANTRY</span> units from your army in the webway instead of setting them up on the battlefield. If you do, then for each of those units, in the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of one of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phases</a> you can set them up anywhere on the battlefield that is more than 9\" away from any enemy models. You can only use this Stratagem once.",
		rulesText: "Use this Stratagem during deployment. If you spend 2CP, you can set up one THOUSAND SONS INFANTRY unit from your army in the webway instead of setting it up on the battlefield. If you spend 3CP, you can set up two THOUSAND SONS INFANTRY units from your army in the webway instead of setting them up on the battlefield. If you do, then for each of those units, in the Reinforcements step of one of your Movement phases you can set them up anywhere on the battlefield that is more than 9\" away from any enemy models. You can only use this Stratagem once.",
		activate: {
			when: "during deployment",
			phase: "Reinforcements"
		},
		links: ["Reinforcements step", "Movement phases"],
		keywords: ["Thousand Sons", "INFANTRY"],
		subkeys: ["THOUSAND", "SONS", "INFANTRY"]
	}, {
		name: "Wrath Of The Wronged",
		cost: "2CP",
		type: "matched",
		faction: "Thousand Sons",
		category: "Battle Tactic Stratagem",
		desc: "Bitterness has consumed the souls of many thousand Sons champions, seeping from their thoughts into their Rubricae.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when an <span class=\"tooltip00074\" data-tooltip-content=\"#tooltip_content00074\" data-tooltip-anchor=\"#tooltip_content00074\"><span class=\"kwb kwbu\">ARCANA</span> <span class=\"kwb kwbu\">ASTARTES</span> <span class=\"kwb kwbu\">INFANTRY</span></span> unit from your army is selected to shoot, or in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"kwb\">ARCANA</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attack’s <span class=\"tooltip00048\" data-tooltip-content=\"#tooltip_content00048\"><span class=\"tt kwbu\">wound</span> <span class=\"tt kwbu\">roll</span></span>.",
		rulesText: "Use this Stratagem in your Shooting phase, when an ARCANA ASTARTES INFANTRY unit from your army is selected to shoot, or in the Fight phase, when an ARCANA ASTARTES INFANTRY unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attack’s wound roll.",
		activate: {
			when: "in your",
			phase: "Shooting"
		},
		links: ["Shooting phase", "Fight phase"],
		keywords: ["ARCANA ASTARTES INFANTRY", "wound roll"],
		subkeys: ["ARCANA", "ASTARTES", "INFANTRY", "wound", "roll"]
	}],
	tyranids: [{
		name: "Aggressive Adaptation",
		cost: "1CP",
		type: "matched",
		faction: "Tyranids",
		category: "",
		desc: "Biomorphic resin sharpens at the touch of enemy blood.",
		rules: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an enemy unit is destroyed as a result of an attack made by a <span class=\"kwb2\">&lt;<span class=\"kwb3\">H</span>IVE</span> <span class=\"kwb\">FLEET&gt;</span> model from your army. Until the end of the battle, improve the Armour Penetration characteristic of melee weapons that models in that model’s unit are equipped with by 1. Each unit can only be affected by this Stratagem once per battle.",
		rulesText: "Use this Stratagem in the Fight phase, when an enemy unit is destroyed as a result of an attack made by a <HIVE FLEET> model from your army. Until the end of the battle, improve the Armour Penetration characteristic of melee weapons that models in that model’s unit are equipped with by 1. Each unit can only be affected by this Stratagem once per battle.",
		activate: {
			when: "in the",
			phase: "Fight"
		},
		links: ["Fight phase"],
		keywords: [],
		subkeys: []
	}, {
		name: "Alpha Leader-beast",
		cost: "1CP",
		type: "matched",
		faction: "Leviathan",
		category: "",
		desc: "This leader-beast possesses a superior ability to out-think its prey, and the Hive Mind has used it to overthrow countless star systems.",
		rules: "Use this Stratagem before the battle, when mustering your army, after nominating a <span class=\"tooltip00061\" data-tooltip-content=\"#tooltip_content00061\" data-tooltip-anchor=\"#tooltip_content00061\"><span class=\"kwb kwbu\">LEVIATHAN</span> <span class=\"kwb kwbu\">CHARACTER</span></span> model that is not a named character to be your <span class=\"tooltip00037\" data-tooltip-content=\"#tooltip_content00037\"><span class=\"tt kwbu\"><span class=\"kwb\">WARLORD</span></span></span>. You can generate one additional Warlord Trait for them from the <a href=\"/wh40k9ed/factions/tyranids/#Warlord-Traits-1\">Leviathan Warlord Traits</a> table. Each Warlord Trait in your army must be unique (if randomly generated, re-roll duplicate results). You can only use this Stratagem once.",
		rulesText: "Use this Stratagem before the battle, when mustering your army, after nominating a LEVIATHAN CHARACTER model that is not a named character to be your WARLORD. You can generate one additional Warlord Trait for them from the Leviathan Warlord Traits table. Each Warlord Trait in your army must be unique (if randomly generated, re-roll duplicate results). You can only use this Stratagem once.",
		activate: {
			when: "before the battle, when mustering your army, after nominating a",
			phase: "Leviathan"
		},
		links: ["Leviathan Warlord Traits"],
		keywords: [],
		subkeys: []
	}, {
		name: "Animated By The Hive Mind",
		cost: "1CP",
		type: "matched",
		faction: "Leviathan",
		category: "",
		desc: "Even though a creature’s autonomous cerebral functions have ceased, the Hive Mind - through its own indomitable will - is able to animate the dead flesh.",
		rules: "Use this Stratagem in any phase, when a <span class=\"tooltip00119\" data-tooltip-content=\"#tooltip_content00119\" data-tooltip-anchor=\"#tooltip_content00119\"><span class=\"kwb kwbu\">LEVIATHAN</span> <span class=\"kwb kwbu\">MONSTER</span></span> model from your army (excluding <span class=\"tooltip00120\" data-tooltip-content=\"#tooltip_content00120\" data-tooltip-anchor=\"#tooltip_content00120\"><span class=\"kwb kwbu\">TITANIC</span></span> models) is destroyed. If that model has an ability that is triggered on a dice roll upon its destruction (e.g. <span class=\"redfont\">Death Throes</span>) do not roll to see if that ability is triggered: it does so automatically.",
		rulesText: "Use this Stratagem in any phase, when a LEVIATHAN MONSTER model from your army (excluding TITANIC models) is destroyed. If that model has an ability that is triggered on a dice roll upon its destruction (e.g. Death Throes) do not roll to see if that ability is triggered: it does so automatically.",
		activate: {
			when: "in any phase, when a <span class=\"tooltip00119\" data-tooltip-content=\"#tooltip_content00119\" data-tooltip-anchor=\"#tooltip_content00119\"><span class=\"kwb kwbu\">LEVIATHAN</span> <span class=\"kwb kwbu\">MONSTER</span></span> model from your army (excluding <span class=\"tooltip00120\" data-tooltip-content=\"#tooltip_content00120\" data-tooltip-anchor=\"#tooltip_content00120\"><span class=\"kwb kwbu\">TITANIC</span></span> models) is destroyed",
			phase: "Any"
		},
		links: [],
		keywords: [],
		subkeys: []
	}, {
		name: "Bio-adapted Borer Grubs",
		cost: "1CP/2CP",
		type: "matched",
		faction: "Leviathan",
		category: "",
		desc: "The Hive Mind has adapted a borer beetle that is perfectly formed to annihilate this world’s native fauna. Indeed, the beetles are far more complex biocreatures than the warrior-organisms that bear them to battle.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> when a <span class=\"kwb\">LEVIATHAN</span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes an attack with a fleshborer or fleshborer hive, on an unmodified <span class=\"tooltip00043\" data-tooltip-content=\"#tooltip_content00043\"><span class=\"tt kwbu\">wound</span> <span class=\"tt kwbu\">roll</span></span> of 6, that attack inflicts 1 <span class=\"tooltip00125\" data-tooltip-content=\"#tooltip_content00125\"><span class=\"tt kwbu\">mortal</span> <span class=\"tt kwbu\">wound</span></span> on the target in addition to the normal damage (a maximum of 6 mortal wounds can be inflicted per phase via this Stratagem). If that unit is a <span class=\"tooltip00092\" data-tooltip-content=\"#tooltip_content00092\" data-tooltip-anchor=\"#tooltip_content00092\"><span class=\"kwb kwbu\">TYRANNOFEX</span></span>, this Stratagem costs 2CP; otherwise, it costs 1CP. You cannot use this Stratagem and the <span class=\"tooltip00090\" data-tooltip-content=\"#tooltip_content00090\"><span class=\"tt kwbu\">Scorch</span> <span class=\"tt kwbu\">Bugs</span></span> Stratagem on the same unit during the same phase.",
		rulesText: "Use this Stratagem in your Shooting phase when a LEVIATHAN unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes an attack with a fleshborer or fleshborer hive, on an unmodified wound roll of 6, that attack inflicts 1 mortal wound on the target in addition to the normal damage (a maximum of 6 mortal wounds can be inflicted per phase via this Stratagem). If that unit is a TYRANNOFEX, this Stratagem costs 2CP; otherwise, it costs 1CP. You cannot use this Stratagem and the Scorch Bugs Stratagem on the same unit during the same phase.",
		activate: {
			when: "in your",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: [],
		subkeys: []
	}, {
		name: "Bioweapon Bond",
		cost: "",
		type: "matched",
		faction: "Tyranid Warriors ",
		category: "Synaptic Link",
		desc: "Some Tyranids are much more biologically sophisticated. They are capable of handling their weapons with greater skill, acting as examples to others in their vicinity.",
		rules: "Each time an attack is made by a model in this unit, add 1 to that attacks <span class=\"tooltip00004\" data-tooltip-content=\"#tooltip_content00004\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">roll</span></span>.",
		rulesText: "Each time an attack is made by a model in this unit, add 1 to that attacks hit roll.",
		activate: {
			when: "Each time an attack is made by a model in this unit",
			phase: "add 1 to that attacks <span class=\"tooltip00004\" data-tooltip-content=\"#tooltip_content00004\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">roll</span></span>."
		},
		links: [],
		keywords: [],
		subkeys: []
	}, {
		name: "Buried Threats",
		cost: "1CP",
		type: "matched",
		faction: "Tyranids",
		category: "",
		desc: "Burrowing feeder organisms can surge just beneath the surface, their advance shrouded in sprays of earth.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when a <span class=\"tooltip00070\" data-tooltip-content=\"#tooltip_content00070\" data-tooltip-anchor=\"#tooltip_content00070\"><span class=\"kwb kwbu\">RIPPERS</span></span> unit from your army is set up on the battlefield using the <span class=\"redfont\">Burrowers</span> ability. For as long as that unit <span class=\"tooltip00128\" data-tooltip-content=\"#tooltip_content00128\"><span class=\"tt kwbu\">Remains</span> <span class=\"tt kwbu\">Stationary</span></span>, when resolving an attack made with a ranged weapon against that unit, subtract 1 from the <span class=\"tooltip00004\" data-tooltip-content=\"#tooltip_content00004\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">roll</span></span>.",
		rulesText: "Use this Stratagem in your Movement phase, when a RIPPERS unit from your army is set up on the battlefield using the Burrowers ability. For as long as that unit Remains Stationary, when resolving an attack made with a ranged weapon against that unit, subtract 1 from the hit roll.",
		activate: {
			when: "in your",
			phase: "Movement"
		},
		links: ["Movement phase"],
		keywords: [],
		subkeys: []
	}, {
		name: "Control Of The Swarm",
		cost: "1CP",
		type: "matched",
		faction: "Leviathan",
		category: "",
		desc: "Should one leader-beast be slain, the Hive Mind will simply subsume the mind of another chosen vessel.",
		rules: "Use this Stratagem if a <span class=\"kwb\">LEVIATHAN</span> <span class=\"kwb\">WARLORD</span> from your army is destroyed. You can immediately select another <span class=\"tooltip00122\" data-tooltip-content=\"#tooltip_content00122\" data-tooltip-anchor=\"#tooltip_content00122\"><span class=\"kwb kwbu\">LEVIATHAN</span> <span class=\"kwb kwbu\">SYNAPSE</span> <span class=\"kwb kwbu\">CHARACTER</span></span> model from your army that does not have a Warlord Trait, then select a Warlord Trait that no model in your army has (this must be a Warlord Trait that the model you just selected can have). Until the end of the battle, that model gains that Warlord Trait and for all rules purposes now counts as your <span class=\"kwb\">WARLORD</span>. If any mission objective, <a href=\"/wh40k9ed/the-rules/matched-play/#Secondary-Objectives\">secondary objective</a>, tactical objective or <a href=\"/wh40k9ed/the-rules/narrative-play/#Agendas\">Agenda</a> rules are triggered when your original <span class=\"kwb\">WARLORD</span> is destroyed, those rules are not triggered until after your new <span class=\"kwb\">WARLORD</span> is destroyed.",
		rulesText: "Use this Stratagem if a LEVIATHAN WARLORD from your army is destroyed. You can immediately select another LEVIATHAN SYNAPSE CHARACTER model from your army that does not have a Warlord Trait, then select a Warlord Trait that no model in your army has (this must be a Warlord Trait that the model you just selected can have). Until the end of the battle, that model gains that Warlord Trait and for all rules purposes now counts as your WARLORD. If any mission objective, secondary objective, tactical objective or Agenda rules are triggered when your original WARLORD is destroyed, those rules are not triggered until after your new WARLORD is destroyed.",
		activate: {
			when: "if a",
			phase: "secondary"
		},
		links: ["secondary objective", "Agenda"],
		keywords: [],
		subkeys: []
	}, {
		name: "Encephalic Diffusion",
		cost: "2CP",
		type: "matched",
		faction: "Tyranids",
		category: "",
		desc: "Glistening brain-arrays pulse with diffusive energies.",
		rules: "Use this Stratagem at the start of the turn. Select one <span class=\"tooltip00064\" data-tooltip-content=\"#tooltip_content00064\" data-tooltip-anchor=\"#tooltip_content00064\"><span class=\"kwb kwbu\">MALECEPTOR</span></span> model from your army. Until the end of that turn, that model gains the following ability: ‘<span class=\"redfont\">Encephalic Diffusion (Aura)</span><b>:</b> Each time a ranged attack is made against a friendly <span class=\"kwb2\">&lt;<span class=\"kwb3\">H</span>IVE</span> <span class=\"kwb\">FLEET&gt;</span> unit within 6\" of this model, subtract 1 from the Strength characteristic of that attack (to a minimum of 1).’",
		rulesText: "Use this Stratagem at the start of the turn. Select one MALECEPTOR model from your army. Until the end of that turn, that model gains the following ability: ‘Encephalic Diffusion (Aura): Each time a ranged attack is made against a friendly <HIVE FLEET> unit within 6\" of this model, subtract 1 from the Strength characteristic of that attack (to a minimum of 1).’",
		activate: {
			when: "at the start of the turn"
		},
		links: [],
		keywords: [],
		subkeys: []
	}, {
		name: "Feed",
		cost: "",
		type: "matched",
		faction: "Trygon Prime ",
		category: "Synaptic Link",
		desc: "The Trygon Prime feeds psychic energy into nearby Tyranids, urging them on to viciously counter-attack the enemy.",
		rules: "This unit is eligible to <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">shoot</a> and <span class=\"tooltip00012\" data-tooltip-content=\"#tooltip_content00012\"><span class=\"tt kwbu\">declare</span> <span class=\"tt kwbu\">a</span> <span class=\"tt kwbu\">charge</span></span> in a turn in which it <span class=\"tooltip00023\" data-tooltip-content=\"#tooltip_content00023\"><span class=\"tt kwbu\">Fell</span> <span class=\"tt kwbu\">Back</span></span>.",
		rulesText: "This unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
		activate: {
			when: "This unit is eligible to",
			phase: "shoot"
		},
		links: ["shoot"],
		keywords: [],
		subkeys: []
	}, {
		name: "Feeding The Hunger",
		cost: "1CP",
		type: "matched",
		faction: "Tyranids",
		category: "",
		desc: "The Haruspex’s instinctive need to consume is insatiable.",
		rules: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00108\" data-tooltip-content=\"#tooltip_content00108\" data-tooltip-anchor=\"#tooltip_content00108\"><span class=\"kwb kwbu\">HARUSPEX</span></span> unit from your army is chosen to fight with. Until the end of that phase, when resolving an attack made by that model, you can re-roll the <span class=\"tooltip00004\" data-tooltip-content=\"#tooltip_content00004\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">roll</span></span>.",
		rulesText: "Use this Stratagem in the Fight phase, when a HARUSPEX unit from your army is chosen to fight with. Until the end of that phase, when resolving an attack made by that model, you can re-roll the hit roll.",
		activate: {
			when: "in the",
			phase: "Fight"
		},
		links: ["Fight phase"],
		keywords: [],
		subkeys: []
	}, {
		name: "Feral Instincts",
		cost: "1CP",
		type: "matched",
		faction: "Tyranids",
		category: "",
		desc: "Talons are unconsciously directed at throats and eyes.",
		rules: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00048\" data-tooltip-content=\"#tooltip_content00048\" data-tooltip-anchor=\"#tooltip_content00048\"><span class=\"kwb kwbu\">HORMAGAUNTS</span></span> unit from your army. Until the end of that phase, improve the Armour Penetration characteristic of melee weapons models in that unit are equipped with by 1.",
		rulesText: "Use this Stratagem in the Fight phase. Select one HORMAGAUNTS unit from your army. Until the end of that phase, improve the Armour Penetration characteristic of melee weapons models in that unit are equipped with by 1.",
		activate: {
			when: "in the",
			phase: "Fight"
		},
		links: ["Fight phase"],
		keywords: [],
		subkeys: []
	}, {
		name: "Focal Essence",
		cost: "",
		type: "matched",
		faction: "Maleceptor ",
		category: "Synaptic Link",
		desc: "While these towering battering rams lack the gift of sight, the Hive Mind has granted them the power to sense their surroundings with their prodigious psychic abilities. On the battlefield, this allows them to identify the weak points of enemy forces in a way that no other adaptation can.",
		rules: "Each time a model in this unit makes an attack:<br><ul><li>On an unmodified <span class=\"tooltip00043\" data-tooltip-content=\"#tooltip_content00043\"><span class=\"tt kwbu\">wound</span> <span class=\"tt kwbu\">roll</span></span> of 6, improve the Armour Penetration characteristic of that attack by 1.</li><li>You can re-roll the damage roll.</li></ul>",
		rulesText: "Each time a model in this unit makes an attack:\n\nOn an unmodified wound roll of 6, improve the Armour Penetration characteristic of that attack by 1.\nYou can re-roll the damage roll.",
		activate: {
			when: "Each time a model in this unit makes an attack:<br><ul><li>On an unmodified <span class=\"tooltip00043\" data-tooltip-content=\"#tooltip_content00043\"><span class=\"tt kwbu\">wound</span> <span class=\"tt kwbu\">roll</span></span> of 6",
			phase: "improve the Armour Penetration characteristic of that attack by 1.</li><li>You can re-roll the damage roll.</li></ul>"
		},
		links: [],
		keywords: [],
		subkeys: []
	}, {
		name: "Grasping Tendrils",
		cost: "1CP",
		type: "matched",
		faction: "Tyranids",
		category: "",
		desc: "None escape the deadly reach of these toxic appendages.",
		rules: "Use this Stratagem in your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when an enemy unit that does not have a <a href=\"/wh40k9ed/the-rules/core-rules/#Minimum-Move\">minimum Move</a> characteristic and is within <span class=\"tooltip00011\" data-tooltip-content=\"#tooltip_content00011\"><span class=\"tt kwbu\">Engagement</span> <span class=\"tt kwbu\">Range</span></span> of any <span class=\"tooltip00076\" data-tooltip-content=\"#tooltip_content00076\" data-tooltip-anchor=\"#tooltip_content00076\"><span class=\"kwb kwbu\">TOXICRENE</span></span> units from your army is chosen to <span class=\"tooltip00023\" data-tooltip-content=\"#tooltip_content00023\"><span class=\"tt kwbu\">Fall</span> <span class=\"tt kwbu\">Back</span></span>. Roll one D6, adding 1 to the result if that unit is an <span class=\"kwb\">INFANTRY</span> unit; on a 3+ that enemy unit cannot Fall Back this turn.",
		rulesText: "Use this Stratagem in your opponent’s Movement phase, when an enemy unit that does not have a minimum Move characteristic and is within Engagement Range of any TOXICRENE units from your army is chosen to Fall Back. Roll one D6, adding 1 to the result if that unit is an INFANTRY unit; on a 3+ that enemy unit cannot Fall Back this turn.",
		activate: {
			when: "in your opponent’s",
			phase: "Movement"
		},
		links: ["Movement phase", "minimum Move"],
		keywords: [],
		subkeys: []
	}, {
		name: "Hive Instinct",
		cost: "1CP",
		type: "matched",
		faction: "Tyranids",
		category: "",
		desc: "With a psychic summons, the swarm is gathered.",
		rules: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one enemy unit that is within <span class=\"tooltip00011\" data-tooltip-content=\"#tooltip_content00011\"><span class=\"tt kwbu\">Engagement</span> <span class=\"tt kwbu\">Range</span></span> of any <span class=\"tooltip00057\" data-tooltip-content=\"#tooltip_content00057\" data-tooltip-anchor=\"#tooltip_content00057\"><span class=\"kwb2 kwbu\">&lt;<span class=\"kwb3\">H</span>IVE</span> <span class=\"kwb kwbu\">FLEET&gt;</span> <span class=\"kwb kwbu\">SYNAPSE</span></span> units from your army. Until the end of that phase, when a <span class=\"tooltip00012\" data-tooltip-content=\"#tooltip_content00012\"><span class=\"tt kwbu\">charge</span> <span class=\"tt kwbu\">roll</span></span> is made for a friendly <span class=\"kwb2\">&lt;<span class=\"kwb3\">H</span>IVE</span> <span class=\"kwb\">FLEET&gt;</span> unit that targets that enemy unit, roll one additional D6 and discard one of the dice. The first model you move as part of that charge must end its charge move within Engagement Range of that enemy unit, otherwise the charge fails and no models in the charging unit move this phase.",
		rulesText: "Use this Stratagem at the start of your Charge phase. Select one enemy unit that is within Engagement Range of any <HIVE FLEET> SYNAPSE units from your army. Until the end of that phase, when a charge roll is made for a friendly <HIVE FLEET> unit that targets that enemy unit, roll one additional D6 and discard one of the dice. The first model you move as part of that charge must end its charge move within Engagement Range of that enemy unit, otherwise the charge fails and no models in the charging unit move this phase.",
		activate: {
			when: "at the start of your",
			phase: "Charge"
		},
		links: ["Charge phase"],
		keywords: [],
		subkeys: []
	}, {
		name: "Hive Mind Imperative",
		cost: "1CP",
		type: "matched",
		faction: "Leviathan",
		category: "",
		desc: "The synaptic control exerted by Leviathan leader-beasts is so absolute that lesser beings can sometimes act at the behest of several consciousnesses.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"kwb\">LEVIATHAN</span> unit from your army that is within 12\" of a friendly <span class=\"tooltip00066\" data-tooltip-content=\"#tooltip_content00066\" data-tooltip-anchor=\"#tooltip_content00066\"><span class=\"kwb kwbu\">LEVIATHAN</span> <span class=\"kwb kwbu\">SYNAPSE</span></span> unit. Until the start of your next Command phase:<br><ul><li>The unit you selected gains the <span class=\"tooltip00152\" data-tooltip-content=\"#tooltip_content00152\"><span class=\"tt kwbu\">Objective</span> <span class=\"tt kwbu\">Secured</span></span> ability. If a model in that unit already has this ability, it counts as one additional model when determining control of an <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a>.</li><li>If the unit you selected <a href=\"/wh40k9ed/the-rules/core-rules/#Performing-Actions\">performs an action</a>, it can shoot without that action failing.</li></ul>",
		rulesText: "Use this Stratagem in your Command phase. Select one LEVIATHAN unit from your army that is within 12\" of a friendly LEVIATHAN SYNAPSE unit. Until the start of your next Command phase:\n\nThe unit you selected gains the Objective Secured ability. If a model in that unit already has this ability, it counts as one additional model when determining control of an objective marker.\nIf the unit you selected performs an action, it can shoot without that action failing.",
		activate: {
			when: "in your",
			phase: "Command"
		},
		links: ["Command phase", "objective marker", "performs an action"],
		keywords: [],
		subkeys: []
	}, {
		name: "Hunter’s Drive",
		cost: "1CP",
		type: "matched",
		faction: "Tyranids",
		category: "",
		desc: "Saturating its kills with motes of synaptic energy, the leader-beast drives its minions towards any survivors.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one <span class=\"kwb2\">&lt;<span class=\"kwb3\">H</span>IVE</span> <span class=\"kwb\">FLEET&gt;</span> unit from your army. Until the end of the phase, when that unit declares a charge that targets any enemy units that had one or more models destroyed as a result of ranged attacks made by friendly <span class=\"tooltip00057\" data-tooltip-content=\"#tooltip_content00057\" data-tooltip-anchor=\"#tooltip_content00057\"><span class=\"kwb2 kwbu\">&lt;<span class=\"kwb3\">H</span>IVE</span> <span class=\"kwb kwbu\">FLEET&gt;</span> <span class=\"kwb kwbu\">SYNAPSE</span></span> models this turn, roll one additional D6 and discard one of the dice when making the <span class=\"tooltip00012\" data-tooltip-content=\"#tooltip_content00012\"><span class=\"tt kwbu\">charge</span> <span class=\"tt kwbu\">roll</span></span>.",
		rulesText: "Use this Stratagem in your Charge phase. Select one <HIVE FLEET> unit from your army. Until the end of the phase, when that unit declares a charge that targets any enemy units that had one or more models destroyed as a result of ranged attacks made by friendly <HIVE FLEET> SYNAPSE models this turn, roll one additional D6 and discard one of the dice when making the charge roll.",
		activate: {
			when: "in your",
			phase: "Charge"
		},
		links: ["Charge phase"],
		keywords: [],
		subkeys: []
	}, {
		name: "Hyper Adaptation",
		cost: "2CP",
		type: "matched",
		faction: "Leviathan",
		category: "",
		desc: "Leviathan is the latest creation of the Hive Mind, but it has billions of years of previous adaptations it can draw upon to modify the hunting style of its latest warrior-organisms.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"kwb\">LEVIATHAN</span> unit from your army, then select one <a href=\"/wh40k9ed/factions/tyranids/#Hive-Fleet-Adaptations\">Hive Fleet Adaptation</a>. Until the end of the turn, models in that unit have the selected Hive Fleet Adaptation, instead of the <a href=\"/wh40k9ed/factions/tyranids/#Leviathan:-Synaptic-Imperative\">Synaptic Imperative</a> Hive Fleet Adaptation.",
		rulesText: "Use this Stratagem in your Command phase. Select one LEVIATHAN unit from your army, then select one Hive Fleet Adaptation. Until the end of the turn, models in that unit have the selected Hive Fleet Adaptation, instead of the Synaptic Imperative Hive Fleet Adaptation.",
		activate: {
			when: "in your",
			phase: "Command"
		},
		links: ["Command phase", "Hive Fleet Adaptation", "Synaptic Imperative"],
		keywords: [],
		subkeys: []
	}, {
		name: "Malicious Direction",
		cost: "",
		type: "matched",
		faction: "Hive Tyrant ",
		category: "Synaptic Link",
		desc: "These malicious creatures are alone amongst their species in exhibiting some small degree of autonomy, allowing them the ability to coordinate the actions of the other hive fleet creatures, reacting aggressively to new threats as they present themselves.",
		rules: "Each time a model in this unit makes a <span class=\"tooltip00013\" data-tooltip-content=\"#tooltip_content00013\"><span class=\"tt kwbu\">pile-in</span> <span class=\"tt kwbu\">move</span></span>, it can move up to an additional 3\" (to a maximum of 6\").",
		rulesText: "Each time a model in this unit makes a pile-in move, it can move up to an additional 3\" (to a maximum of 6\").",
		activate: {
			when: "Each time a model in this unit makes a <span class=\"tooltip00013\" data-tooltip-content=\"#tooltip_content00013\"><span class=\"tt kwbu\">pile-in</span> <span class=\"tt kwbu\">move</span></span>",
			phase: "it can move up to an additional 3\" (to a maximum of 6\")."
		},
		links: [],
		keywords: [],
		subkeys: []
	}, {
		name: "Mastery Of The Shadows",
		cost: "",
		type: "matched",
		faction: "Broodlord ",
		category: "Synaptic Link",
		desc: "Broodlords have an innate understanding of how to conceal themselves. They can imbue this knowledge into Genestealers around them.",
		rules: "<ul><li>Models in this unit are treated as having the benefits of <span class=\"tooltip00126\" data-tooltip-content=\"#tooltip_content00126\"><span class=\"tt kwbu\">Light</span> <span class=\"tt kwbu\">Cover</span></span> and <span class=\"tooltip00127\" data-tooltip-content=\"#tooltip_content00127\"><span class=\"tt kwbu\">Heavy</span> <span class=\"tt kwbu\">Cover</span></span>.</li><li>Each time a ranged attack is made against this unit (excluding <span class=\"tooltip00052\" data-tooltip-content=\"#tooltip_content00052\" data-tooltip-anchor=\"#tooltip_content00052\"><span class=\"kwb kwbu\">MONSTER</span></span> units), if the attacker is more than 12\" away, then this unit is treated as having the benefits of <span class=\"tooltip00147\" data-tooltip-content=\"#tooltip_content00147\"><span class=\"tt kwbu\">Dense</span> <span class=\"tt kwbu\">Cover</span></span>.</li></ul>",
		rulesText: "Models in this unit are treated as having the benefits of Light Cover and Heavy Cover.\nEach time a ranged attack is made against this unit (excluding MONSTER units), if the attacker is more than 12\" away, then this unit is treated as having the benefits of Dense Cover.",
		activate: {
			when: "<ul><li>Models in this unit are treated as having the benefits of <span class=\"tooltip00126\" data-tooltip-content=\"#tooltip_content00126\"><span class=\"tt kwbu\">Light</span> <span class=\"tt kwbu\">Cover</span></span> and <span class=\"tooltip00127\" data-tooltip-content=\"#tooltip_content00127\"><span class=\"tt kwbu\">Heavy</span> <span class=\"tt kwbu\">Cover</span></span>.</li><li>Each time a ranged attack is made against this unit (excluding <span class=\"tooltip00052\" data-tooltip-content=\"#tooltip_content00052\" data-tooltip-anchor=\"#tooltip_content00052\"><span class=\"kwb kwbu\">MONSTER</span></span> units)",
			phase: "if the attacker is more than 12\" away"
		},
		links: [],
		keywords: [],
		subkeys: []
	}, {
		name: "Progeny Of The Hive",
		cost: "1CP",
		type: "matched",
		faction: "Tyranids",
		category: "",
		desc: "Nothing can hold back the terrifying speed at which the hive fleets adapt their diverse organisms.",
		rules: "Use this Stratagem before the battle. Select one <span class=\"tooltip00027\" data-tooltip-content=\"#tooltip_content00027\" data-tooltip-anchor=\"#tooltip_content00027\"><span class=\"kwb kwbu\">TYRANIDS</span> <span class=\"kwb kwbu\">INFANTRY</span></span> unit or one <span class=\"tooltip00059\" data-tooltip-content=\"#tooltip_content00059\" data-tooltip-anchor=\"#tooltip_content00059\"><span class=\"kwb kwbu\">TYRANIDS</span> <span class=\"kwb kwbu\">MONSTER</span></span> model from your army that does not have an <a href=\"/wh40k9ed/factions/tyranids/#Adaptive-Physiology\">Adaptive Physiology</a>, and then select one <a href=\"/wh40k9ed/factions/tyranids/#Adaptive-Physiology\">Adaptive Physiology</a> to apply to that unit or model until the end of the battle. You can only use this Stratagem once per battle.",
		rulesText: "Use this Stratagem before the battle. Select one TYRANIDS INFANTRY unit or one TYRANIDS MONSTER model from your army that does not have an Adaptive Physiology, and then select one Adaptive Physiology to apply to that unit or model until the end of the battle. You can only use this Stratagem once per battle.",
		activate: {
			when: "before the battle",
			phase: "Adaptive"
		},
		links: ["Adaptive Physiology", "Adaptive Physiology"],
		keywords: [],
		subkeys: []
	}, {
		name: "Psychic Channeling",
		cost: "",
		type: "matched",
		faction: "Zoanthropes ",
		category: "Synaptic Link",
		desc: "Zoanthropes can use their psychic power to connect to a node creature in a brood and funnel their energies through it.",
		rules: "Each time a <span class=\"tooltip00040\" data-tooltip-content=\"#tooltip_content00040\"><span class=\"tt kwbu\">Psychic</span> <span class=\"tt kwbu\">test</span></span> is taken for this unit, roll one additional D6 and discard one of the dice.",
		rulesText: "Each time a Psychic test is taken for this unit, roll one additional D6 and discard one of the dice.",
		activate: {
			when: "Each time a <span class=\"tooltip00040\" data-tooltip-content=\"#tooltip_content00040\"><span class=\"tt kwbu\">Psychic</span> <span class=\"tt kwbu\">test</span></span> is taken for this unit",
			phase: "roll one additional D6 and discard one of the dice."
		},
		links: [],
		keywords: [],
		subkeys: []
	}, {
		name: "Psychic Creep",
		cost: "",
		type: "matched",
		faction: "Neurothrope ",
		category: "Synaptic Link",
		desc: "Such is a Neurothrope’s extraordinary psychic strength, its mere presence is enough to induce an enormous sense of dread in the enemy.",
		rules: "This unit has the following ability:<br><br>‘<span class=\"redfont\">Psychic Creep (Aura)</span><b>:</b> While an enemy unit is within 6\" of this unit, subtract 1 from the Leadership characteristic of models in that enemy unit and subtract 1 from <span class=\"tooltip00148\" data-tooltip-content=\"#tooltip_content00148\"><span class=\"tt kwbu\">Combat</span> <span class=\"tt kwbu\">Attrition</span> <span class=\"tt kwbu\">tests</span></span> taken for that enemy unit.’",
		rulesText: "This unit has the following ability:\n\n‘Psychic Creep (Aura): While an enemy unit is within 6\" of this unit, subtract 1 from the Leadership characteristic of models in that enemy unit and subtract 1 from Combat Attrition tests taken for that enemy unit.’",
		activate: {
			when: "This unit has the following ability:<br><br>‘<span class=\"redfont\">Psychic Creep (Aura)</span><b>:</b> While an enemy unit is within 6\" of this unit",
			phase: "subtract 1 from the Leadership characteristic of models in that enemy unit and subtract 1 from <span class=\"tooltip00148\" data-tooltip-content=\"#tooltip_content00148\"><span class=\"tt kwbu\">Combat</span> <span class=\"tt kwbu\">Attrition</span> <span class=\"tt kwbu\">tests</span></span> taken for that enemy unit.’"
		},
		links: [],
		keywords: [],
		subkeys: []
	}, {
		name: "Psychic Fissure",
		cost: "2CP",
		type: "matched",
		faction: "Tyranids",
		category: "",
		desc: "The Shadow in the Warp poses many dangers to those who would draw upon the immaterium’s energies.",
		rules: "Use this Stratagem at the start of your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#PSYCHIC-PHASE\">Psychic phase</a>. Until the end of that phase, all <span class=\"tooltip00057\" data-tooltip-content=\"#tooltip_content00057\" data-tooltip-anchor=\"#tooltip_content00057\"><span class=\"kwb2 kwbu\">&lt;<span class=\"kwb3\">H</span>IVE</span> <span class=\"kwb kwbu\">FLEET&gt;</span> <span class=\"kwb kwbu\">SYNAPSE</span></span> units from your army gain the following ability: ‘<span class=\"redfont\">Psychic Fissure (Aura)</span><b>:</b> While an enemy unit is within 12\" of this unit, each time a <span class=\"tooltip00040\" data-tooltip-content=\"#tooltip_content00040\"><span class=\"tt kwbu\">Psychic</span> <span class=\"tt kwbu\">test</span></span> is taken for that enemy unit and the test is failed, that enemy unit suffers D3 <span class=\"tooltip00125\" data-tooltip-content=\"#tooltip_content00125\"><span class=\"tt kwbu\">mortal</span> <span class=\"tt kwbu\">wounds</span></span>.’",
		rulesText: "Use this Stratagem at the start of your opponent’s Psychic phase. Until the end of that phase, all <HIVE FLEET> SYNAPSE units from your army gain the following ability: ‘Psychic Fissure (Aura): While an enemy unit is within 12\" of this unit, each time a Psychic test is taken for that enemy unit and the test is failed, that enemy unit suffers D3 mortal wounds.’",
		activate: {
			when: "at the start of your opponent’s",
			phase: "Psychic"
		},
		links: ["Psychic phase"],
		keywords: [],
		subkeys: []
	}, {
		name: "Questing Tendrils",
		cost: "1CP",
		type: "matched",
		faction: "Leviathan",
		category: "",
		desc: "Leviathan does not attack on one front, but seeks to outflank and encircle its prey with several questing tendrils.",
		rules: "Use this Stratagem in your second <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when you set up a <span class=\"kwb\">LEVIATHAN</span> unit from your army that has arrived from <a href=\"/wh40k9ed/the-rules/core-rules/#Strategic-Reserves\">Strategic Reserves</a>. You can set that unit up as if it was battle round 3.",
		rulesText: "Use this Stratagem in your second Movement phase, when you set up a LEVIATHAN unit from your army that has arrived from Strategic Reserves. You can set that unit up as if it was battle round 3.",
		activate: {
			when: "in your second",
			phase: "Movement"
		},
		links: ["Movement phase", "Strategic Reserves"],
		keywords: [],
		subkeys: []
	}, {
		name: "Relentless Flurry",
		cost: "1CP/2CP",
		type: "matched",
		faction: "Leviathan",
		category: "",
		desc: "Leviathan swarms seek to overwhelm their prey in a flurry of attacks from every angle.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when you select a <span class=\"kwb\">LEVIATHAN</span> unit from your army to shoot or fight. Until the end of the phase, each time an attack is made by a model in that unit, an unmodified <span class=\"tooltip00004\" data-tooltip-content=\"#tooltip_content00004\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">roll</span></span> of 6 scores 1 additional hit (if that unit currently contains 11 or more models, then it scores 2 additional hits instead). If that unit is a <span class=\"tooltip00094\" data-tooltip-content=\"#tooltip_content00094\" data-tooltip-anchor=\"#tooltip_content00094\"><span class=\"kwb kwbu\">GENESTEALER</span></span> unit, this Stratagem costs 2CP; otherwise, it costs 1CP.",
		rulesText: "Use this Stratagem in your Shooting phase or in the Fight phase, when you select a LEVIATHAN unit from your army to shoot or fight. Until the end of the phase, each time an attack is made by a model in that unit, an unmodified hit roll of 6 scores 1 additional hit (if that unit currently contains 11 or more models, then it scores 2 additional hits instead). If that unit is a GENESTEALER unit, this Stratagem costs 2CP; otherwise, it costs 1CP.",
		activate: {
			when: "in your",
			phase: "Shooting"
		},
		links: ["Shooting phase", "Fight phase"],
		keywords: [],
		subkeys: []
	}, {
		name: "Savage Distraction",
		cost: "1CP",
		type: "matched",
		faction: "Tyranids",
		category: "",
		desc: "With their comrades’ gore dripping from nearby talons, even disciplined warriors struggle to avert their guns.",
		rules: "Use this Stratagem in the Fight phase, when an enemy unit is destroyed as a result of an attack made by a model in a <span class=\"kwb2\">&lt;<span class=\"kwb3\">H</span>IVE</span> <span class=\"kwb\">FLEET&gt;</span> unit from your army. In your opponent’s next Shooting phase, that <span class=\"kwb2\">&lt;<span class=\"kwb3\">H</span>IVE</span> <span class=\"kwb\">FLEET&gt;</span> unit gains the following ability: ‘<span class=\"redfont\">Savage Distraction (Aura)</span><b>:</b> While an enemy unit is within 6\" of this unit, each time a model in that enemy unit makes a ranged attack against another unit from your army, subtract 1 from that attack’s hit roll.’",
		rulesText: "Use this Stratagem in the Fight phase, when an enemy unit is destroyed as a result of an attack made by a model in a <HIVE FLEET> unit from your army. In your opponent’s next Shooting phase, that <HIVE FLEET> unit gains the following ability: ‘Savage Distraction (Aura): While an enemy unit is within 6\" of this unit, each time a model in that enemy unit makes a ranged attack against another unit from your army, subtract 1 from that attack’s hit roll.’",
		activate: {
			when: "in the Fight phase",
			phase: "when an enemy unit is destroyed as a result of an attack made by a model in a <span class=\"kwb2\">&lt;<span class=\"kwb3\">H</span>IVE</span> <span class=\"kwb\">FLEET&gt;</span> unit from your army"
		},
		links: [],
		keywords: [],
		subkeys: []
	}, {
		name: "Skyswarm Fusillade",
		cost: "1CP",
		type: "matched",
		faction: "Tyranids",
		category: "",
		desc: "The instinctive and fluid agility of skyswarm bioforms allow acidic shots to be fired at extreme close-quarters.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00049\" data-tooltip-content=\"#tooltip_content00049\" data-tooltip-anchor=\"#tooltip_content00049\"><span class=\"kwb kwbu\">GARGOYLES</span></span> unit from your army. Until the end of the phase, fleshborers that models in that unit are equipped with have a Type characteristic of <span class=\"tooltip00129\" data-tooltip-content=\"#tooltip_content00129\"><span class=\"tt kwbu\">Pistol</span> <span class=\"tt kwbu\">1</span></span>.",
		rulesText: "Use this Stratagem in your Shooting phase. Select one GARGOYLES unit from your army. Until the end of the phase, fleshborers that models in that unit are equipped with have a Type characteristic of Pistol 1.",
		activate: {
			when: "in your",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: [],
		subkeys: []
	}, {
		name: "Surprise Ambush",
		cost: "1CP",
		type: "matched",
		faction: "Tyranids",
		category: "",
		desc: "Lictors can approach within feet of their prey unnoticed.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one <span class=\"tooltip00018\" data-tooltip-content=\"#tooltip_content00018\" data-tooltip-anchor=\"#tooltip_content00018\"><span class=\"kwb kwbu\">LICTOR</span></span> unit from your army that is entirely on or within a <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-Features-1\">terrain feature</a>, or was set up on the battlefield this turn using the <span class=\"redfont\">Hidden Hunter</span> ability. Until the end of the turn:<br><ul><li>Enemy units cannot fire <span class=\"tooltip00055\" data-tooltip-content=\"#tooltip_content00055\"><span class=\"tt kwbu\">Overwatch</span></span> at that unit.</li><li>Add 1 to <span class=\"tooltip00012\" data-tooltip-content=\"#tooltip_content00012\"><span class=\"tt kwbu\">charge</span> <span class=\"tt kwbu\">rolls</span></span> made for that unit.</li></ul>",
		rulesText: "Use this Stratagem in your Charge phase. Select one LICTOR unit from your army that is entirely on or within a terrain feature, or was set up on the battlefield this turn using the Hidden Hunter ability. Until the end of the turn:\n\nEnemy units cannot fire Overwatch at that unit.\nAdd 1 to charge rolls made for that unit.",
		activate: {
			when: "in your",
			phase: "Charge"
		},
		links: ["Charge phase", "terrain feature"],
		keywords: [],
		subkeys: []
	}, {
		name: "Symbiotic Devastation",
		cost: "1CP",
		type: "matched",
		faction: "Tyranids",
		category: "",
		desc: "In thrall to its symbiote, the Exocrine obeys its every will.",
		rules: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00087\" data-tooltip-content=\"#tooltip_content00087\" data-tooltip-anchor=\"#tooltip_content00087\"><span class=\"kwb kwbu\">EXOCRINE</span></span> unit from your army that has not <span class=\"tooltip00001\" data-tooltip-content=\"#tooltip_content00001\"><span class=\"tt kwbu\">Advanced</span></span> during this turn; until the end of that phase, that unit is treated as having <span class=\"tooltip00128\" data-tooltip-content=\"#tooltip_content00128\"><span class=\"tt kwbu\">Remained</span> <span class=\"tt kwbu\">Stationary</span></span>.",
		rulesText: "Use this Stratagem at the start of your Shooting phase. Select one EXOCRINE unit from your army that has not Advanced during this turn; until the end of that phase, that unit is treated as having Remained Stationary.",
		activate: {
			when: "at the start of your",
			phase: "Shooting"
		},
		links: ["Shooting phase"],
		keywords: [],
		subkeys: []
	}, {
		name: "Synaptic Channelling",
		cost: "1CP",
		type: "matched",
		faction: "Tyranids",
		category: "",
		desc: "Individuality is a disadvantage that Tyranids surpass.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#PSYCHIC-PHASE\">Psychic phase</a>. Select one <span class=\"tooltip00056\" data-tooltip-content=\"#tooltip_content00056\" data-tooltip-anchor=\"#tooltip_content00056\"><span class=\"kwb2 kwbu\">&lt;<span class=\"kwb3\">H</span>IVE</span> <span class=\"kwb kwbu\">FLEET&gt;</span> <span class=\"kwb kwbu\">PSYKER</span></span> unit from your army. Until the end of that phase, that unit knows all of the psychic powers known by friendly <span class=\"kwb2\">&lt;<span class=\"kwb3\">H</span>IVE</span> <span class=\"kwb\">FLEET&gt;</span> <span class=\"kwb\">PSYKER</span> units that are on the battlefield.",
		rulesText: "Use this Stratagem in your Psychic phase. Select one <HIVE FLEET> PSYKER unit from your army. Until the end of that phase, that unit knows all of the psychic powers known by friendly <HIVE FLEET> PSYKER units that are on the battlefield.",
		activate: {
			when: "in your",
			phase: "Psychic"
		},
		links: ["Psychic phase"],
		keywords: [],
		subkeys: []
	}, {
		name: "Synaptic Domination",
		cost: "1CP",
		type: "matched",
		faction: "Leviathan",
		category: "",
		desc: "The synaptic link between warrior-organism and leader-beast in Hive Fleet Leviathan is so strong that no biocreature is ever truly cut off from the Hive Mind’s will.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#PSYCHIC-PHASE\">Psychic phase</a>. Select one friendly <span class=\"tooltip00066\" data-tooltip-content=\"#tooltip_content00066\" data-tooltip-anchor=\"#tooltip_content00066\"><span class=\"kwb kwbu\">LEVIATHAN</span> <span class=\"kwb kwbu\">SYNAPSE</span></span> unit from your army, then select one friendly <span class=\"kwb\">LEVIATHAN</span> non-<span class=\"kwb\">SYNAPSE</span> unit from your army. Until the start of your next Psychic phase, while that <span class=\"kwb\">SYNAPSE</span> unit is on the battlefield, that non-<span class=\"kwb\">SYNAPSE</span> unit always counts as being within range of that <span class=\"kwb\">SYNAPSE</span> unit for the purposes of the Synapse and <span class=\"tooltip00003\" data-tooltip-content=\"#tooltip_content00003\"><span class=\"tt kwbu\">Instinctive</span> <span class=\"tt kwbu\">behaviour</span></span> abilities.",
		rulesText: "Use this Stratagem in your Psychic phase. Select one friendly LEVIATHAN SYNAPSE unit from your army, then select one friendly LEVIATHAN non-SYNAPSE unit from your army. Until the start of your next Psychic phase, while that SYNAPSE unit is on the battlefield, that non-SYNAPSE unit always counts as being within range of that SYNAPSE unit for the purposes of the Synapse and Instinctive behaviour abilities.",
		activate: {
			when: "in your",
			phase: "Psychic"
		},
		links: ["Psychic phase"],
		keywords: [],
		subkeys: []
	}, {
		name: "The Void In The Warp",
		cost: "1CP",
		type: "matched",
		faction: "Leviathan",
		category: "",
		desc: "The Shadow in the Warp cast by Leviathan is darker than those of other hive fleets, rendering their prey's attempts to harness otherworldly powers a hopeless cause.",
		rules: "Use this Stratagem in your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#PSYCHIC-PHASE\">Psychic phase</a>, after a <span class=\"tooltip00040\" data-tooltip-content=\"#tooltip_content00040\"><span class=\"tt kwbu\">Psychic</span> <span class=\"tt kwbu\">test</span></span> is passed for an enemy <span class=\"kwb\">PSYKER</span> unit and after any <span class=\"tooltip00151\" data-tooltip-content=\"#tooltip_content00151\"><span class=\"tt kwbu\">Deny</span> <span class=\"tt kwbu\">the</span> <span class=\"tt kwbu\">Witch</span></span> attempt is made (if any). If that enemy <span class=\"kwb\">PSYKER</span> unit is within 24\" of any <span class=\"tooltip00066\" data-tooltip-content=\"#tooltip_content00066\" data-tooltip-anchor=\"#tooltip_content00066\"><span class=\"kwb kwbu\">LEVIATHAN</span> <span class=\"kwb kwbu\">SYNAPSE</span></span> units from your army, roll one D6: on a 4+, that psychic power is <span class=\"tooltip00151\" data-tooltip-content=\"#tooltip_content00151\"><span class=\"tt kwbu\">denied</span></span>.",
		rulesText: "Use this Stratagem in your opponent’s Psychic phase, after a Psychic test is passed for an enemy PSYKER unit and after any Deny the Witch attempt is made (if any). If that enemy PSYKER unit is within 24\" of any LEVIATHAN SYNAPSE units from your army, roll one D6: on a 4+, that psychic power is denied.",
		activate: {
			when: "in your opponent’s",
			phase: "Psychic"
		},
		links: ["Psychic phase"],
		keywords: [],
		subkeys: []
	}, {
		name: "Unchecked Ferocity",
		cost: "",
		type: "matched",
		faction: "Tyranid Prime ",
		category: "Synaptic Link",
		desc: "Tyranid Primes are paragons of destruction. Such is their martial prowess that it can be imprinted onto other bioforms.",
		rules: "Each time a melee attack is made by a model in this unit, an unmodified <span class=\"tooltip00004\" data-tooltip-content=\"#tooltip_content00004\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">roll</span></span> of 6 automatically wounds the target.",
		rulesText: "Each time a melee attack is made by a model in this unit, an unmodified hit roll of 6 automatically wounds the target.",
		activate: {
			when: "Each time a melee attack is made by a model in this unit",
			phase: "an unmodified <span class=\"tooltip00004\" data-tooltip-content=\"#tooltip_content00004\"><span class=\"tt kwbu\">hit</span> <span class=\"tt kwbu\">roll</span></span> of 6 automatically wounds the target."
		},
		links: [],
		keywords: [],
		subkeys: []
	}, {
		name: "Unexpected Incursion",
		cost: "1CP",
		type: "matched",
		faction: "Tyranids",
		category: "",
		desc: "Mawlocs are capable of bursts of subterranean speed, catching more of their surface prey unawares.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when a <span class=\"tooltip00007\" data-tooltip-content=\"#tooltip_content00007\" data-tooltip-anchor=\"#tooltip_content00007\"><span class=\"kwb kwbu\">MAWLOC</span></span> model from your army is set up on the battlefield using the <span class=\"redfont\">Terror from the Deep</span> ability. When determining the number of <span class=\"tooltip00125\" data-tooltip-content=\"#tooltip_content00125\"><span class=\"tt kwbu\">mortal</span> <span class=\"tt kwbu\">wounds</span></span> an enemy unit suffers from that model’s <span class=\"redfont\">Terror from the Deep</span> ability that phase, add 2 to the roll.",
		rulesText: "Use this Stratagem in your Movement phase, when a MAWLOC model from your army is set up on the battlefield using the Terror from the Deep ability. When determining the number of mortal wounds an enemy unit suffers from that model’s Terror from the Deep ability that phase, add 2 to the roll.",
		activate: {
			when: "in your",
			phase: "Movement"
		},
		links: ["Movement phase"],
		keywords: [],
		subkeys: []
	}, {
		name: "Unyielding Chitin",
		cost: "1CP",
		type: "matched",
		faction: "Tyranids",
		category: "",
		desc: "At a synaptic stimulus, carapaces thicken to become as dense as stone.",
		rules: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a> or your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00096\" data-tooltip-content=\"#tooltip_content00096\" data-tooltip-anchor=\"#tooltip_content00096\"><span class=\"kwb kwbu\">TYRANID</span> <span class=\"kwb kwbu\">PRIME</span></span> or <span class=\"tooltip00097\" data-tooltip-content=\"#tooltip_content00097\" data-tooltip-anchor=\"#tooltip_content00097\"><span class=\"kwb kwbu\">TYRANID</span> <span class=\"kwb kwbu\">WARRIORS</span></span> unit from your army is chosen as the target for an attack made with a ranged weapon. Until the end of that phase, when resolving a ranged attack against that unit, reduce the Damage characteristic of that attack by 1 (to a minimum of 1).",
		rulesText: "Use this Stratagem in your Charge phase or your opponent’s Shooting phase, when a TYRANID PRIME or TYRANID WARRIORS unit from your army is chosen as the target for an attack made with a ranged weapon. Until the end of that phase, when resolving a ranged attack against that unit, reduce the Damage characteristic of that attack by 1 (to a minimum of 1).",
		activate: {
			when: "in your",
			phase: "Charge"
		},
		links: ["Charge phase", "Shooting phase"],
		keywords: [],
		subkeys: []
	}, {
		name: "Weaponised Gestation",
		cost: "",
		type: "matched",
		faction: "Tervigon ",
		category: "Synaptic Link",
		desc: "In much the same way as this hulking monstrosity acts as an incubator for others of its ravenous kind, it is able to germinate more voracious strains of the living ammunition used by all Tyranid ranged weaponry.",
		rules: "Each time a model in this unit makes a ranged attack, you can re-roll an unmodified <span class=\"tooltip00043\" data-tooltip-content=\"#tooltip_content00043\"><span class=\"tt kwbu\">wound</span> <span class=\"tt kwbu\">roll</span></span> of 1-2.",
		rulesText: "Each time a model in this unit makes a ranged attack, you can re-roll an unmodified wound roll of 1-2.",
		activate: {
			when: "Each time a model in this unit makes a ranged attack",
			phase: "you can re-roll an unmodified <span class=\"tooltip00043\" data-tooltip-content=\"#tooltip_content00043\"><span class=\"tt kwbu\">wound</span> <span class=\"tt kwbu\">roll</span></span> of 1-2."
		},
		links: [],
		keywords: [],
		subkeys: []
	}]
}
