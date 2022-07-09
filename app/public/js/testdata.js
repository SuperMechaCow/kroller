var forceData = [{
			"name": "2k Wendigo Prince",
			"detachments": [{
				"name": "Battalion Detachment 0CP",
        "customName": "Deerfarts",
				"faction": "Death Guard",
				"units": [{
						"name": "Malignant Plaguecaster",
            "slot": "HQ",
						"faction": [
							"Chaos",
							"Heretic Astartes",
							"<Plague Company>",
							"Nurgle",
							"Death Guard"
						],
						"keywords": [
							"infantry",
							"malignant plaguecaster",
							"bubonic astartes",
							"character",
							"psyker"
						],
						"models": [{
							"name": "Malignant Plaguecaster",
							"faction": "",
							"keywords": [],
							"weapons": [{
									"name": "Corrupted staff",
									"amount": "1",
									"Range": "Melee",
									"Type": "Melee",
									"S": "+3",
									"AP": "-1",
									"D": "D3",
									"Abilities": "Plague Weapon."
								},
								{
									"name": "Blight grenades",
									"amount": "1",
									"Range": "6\"",
									"Type": "Grenade D6",
									"S": "4",
									"AP": "0",
									"D": "1",
									"Abilities": "Plague Weapon. Blast."
								},
								{
									"name": "Krak grenades",
									"amount": "1",
									"Range": "6\"",
									"Type": "Grenade 1",
									"S": "6",
									"AP": "-1",
									"D": "D3",
									"Abilities": "-"
								}
							],
							"wargear": [],
							"statlines": {
								"M": "5",
								"WS": "3",
								"BS": "3",
								"S": "4",
								"T": "5",
								"W": "4",
								"A": "4",
								"Ld": "8",
								"Sv": "3"
							}
						}],
						"rules": [{
								"name": "Contagions of Nurgle",
								"desc": "If every unit from your army has the DEATH GUARD keyword (excluding UNALIGNED units), this unit gains the following ability:\n\nNurgle's Gift (Contagion): While an enemy unit is within Contagion Range of this unit (see below), subtract 1 from the Toughness characteristic of models in that unit.",
								"subkeys": [
									"DEATH",
									"GUARD",
									"UNALIGNED"
								],
								"targets": [
									"DEATH GUARD",
									"UNALIGNED"
								],
								"phases": []
							},
							{
								"name": "Inexorable Advance",
								"desc": "- This unit counts as having Remained Stationary if it did not Fall Back or Advance in your previous Movement phase.\n- If this unit has the VEHICLE keyword, it does not suffer the penalty incurred to its hit rolls for firing Heavy weapons at enemy units that are within Engagement Range of it.\n- If this unit has the INFANTRY keyword, it can ignore any or all modifiers to its Move characteristic, Advance rolls and charge rolls.",
								"subkeys": [
									"VEHICLE",
									"INFANTRY"
								],
								"targets": [
									"VEHICLE",
									"INFANTRY"
								],
								"phases": [
									"Movement"
								]
							},
							{
								"name": "Torrent of Putrefaction",
								"desc": "Each time this model successfully manifests a psychic power, if the result of the Psychic test was 7 or more, the closest enemy unit within 12\" suffers D3 mortal wounds. Otherwise, the closest enemy unit within 6\" suffers 1 mortal wound.",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Disgustingly Resilient",
								"desc": "Each time an attack is allocated to a model in this unit, subtract 1 from the Damage characteristic of that attack (to a minimum of 1).",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Sevenfold Blessings",
								"desc": "Use this Stratagem before the battle, when you are mustering your army. Select one WRETCHED PSYKER model from your army.\n- That model knows one additional psychic power from their chosen discipline.\n- Once per Psychic phase, you can re-roll one Psychic test taken for that model.",
								"subkeys": [
									"WRETCHED",
									"PSYKER"
								],
								"targets": [
									"WRETCHED PSYKER"
								],
								"phases": []
							}
						],
						"spells": [{
								"name": "Smite",
								"warpcharge": "5",
								"range": "18\"",
								"details": "Smite has a warp charge value of 5. If manifested, the closest visible enemy unit within 18\" of the psyker suffers D3 mortal wounds (pg 181). If the result of the Psychic test was more than 10 the target suffers D6 mortal wounds instead."
							},
							{
								"name": "Miasma of Pestilence",
								"warpcharge": "6",
								"range": "18\"",
								"details": "Blessing: If manifested, select one friendly DEATH GUARD unit within 18\" of this PSYKER. Until the start of your next Psychic phase, each time an attack is made against that unit, subtract 1 from that attack's hit roll."
							},
							{
								"name": "Plague Wind",
								"warpcharge": "6",
								"range": "18\"",
								"details": "Witchfire: If manifested, select one enemy unit within 18\" of and visible to this PSYKER. Roll one D6 for each model in that unit. For each 6, that unit suffers 1 mortal wound. If the result of the Psychic test was 9+, that unit suffers 1 mortal wound for each 5+ instead."
							},
							{
								"name": "Putrescent Vitality",
								"warpcharge": "7",
								"range": "18\"",
								"details": "Blessing: If manifested, select one friendly DEATH GUARD INFANTRY unit within 18\" of this PSYKER. Until the start of your next Psychic phase, add 1 to the Strength and Toughness characteristics of models in that unit."
							}
						],
						"stratagems": [{
								"faction_id": "DG",
								"name": "PESTILENTIAL DROP",
								"type": "Terminus Est Assault Force – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "Assault force troops arrive on the battlefield amid billowing clouds of pestilence, diseased Drop Pod exhaust fumes, the leaking effluence of landing crafts and rot blooms expelled directly from their foetid teleportation chambers.",
								"source_id": "000000153",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your Movement phases, when you set up a <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army on the battlefield using the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Army-of-Renown:-Terminus-Est-Assault-Force\">Outbreak Assault</a> or <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Teleport-Strike-1\">Teleport Strike</a> ability. Select one <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion of Nurgle</a> ability that unit has; until the end of the turn, the Contagion Range of that ability is 12\" for that unit. This is not cumulative with any other abilities that increase <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion Range</a>.",
								"id": "000005448004",
								"field9": "",
								"keys": [
									"terminus",
									"est",
									"assault",
									"force"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your Movement phases, when you set up a <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army on the battlefield using the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Army-of-Renown:-Terminus-Est-Assault-Force\">Outbreak Assault</a> or <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Teleport-Strike-1\">Teleport Strike</a> ability. Select one <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion of Nurgle</a> ability that unit has; until the end of the turn, the Contagion Range of that ability is 12\" for that unit. This is not cumulative with any other abilities that increase <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion Range</a>."
							},
							{
								"faction_id": "DG",
								"name": "CREEPING BLIGHT",
								"type": "Death Guard – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "This warp-plague spreads fingers of corrosion through armour, flesh, bone and even air with equal virulence.",
								"source_id": "",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapon\">plague weapon</a>, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, that attack has an Armour Penetration characteristic of -4.",
								"id": "000002327003",
								"field9": "",
								"keys": [
									"death",
									"guard"
								],
								"activate": [
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapon\">plague weapon</a>, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, that attack has an Armour Penetration characteristic of -4."
							},
							{
								"faction_id": "DG",
								"name": "SEVENFOLD BLESSINGS",
								"type": "Wretched – Requisition Stratagem",
								"cp_cost": "1",
								"legend": "This diseased sorcerer feels the rheumy eye of the Plague God upon him.",
								"source_id": "",
								"description": "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"tooltip00396\" data-tooltip-content=\"#tooltip_content00396\" data-tooltip-anchor=\"#tooltip_content00396\"><span class=\"kwb\">WRETCHED</span> <span class=\"kwb\">PSYKER</span></span> model from your army.<br><ul><li>That model knows one additional psychic power from their chosen discipline.</li><li>Once per <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#PSYCHIC-PHASE\">Psychic phase</a>, you can re-roll one <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Psychic-Tests\">Psychic test</a> taken for that model.</li></ul>You can only use this Stratagem once.",
								"id": "000005157002",
								"field9": "",
								"keys": [
									"wretched psyker",
									"wretched",
									"psyker"
								],
								"activate": [
									"Before battle"
								],
								"descText": "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"tooltip00396\" data-tooltip-content=\"#tooltip_content00396\" data-tooltip-anchor=\"#tooltip_content00396\"><span class=\"kwb\">WRETCHED</span> <span class=\"kwb\">PSYKER</span></span> model from your army.<br><ul><li>That model knows one additional psychic power from their chosen discipline.</li><li>Once per <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#PSYCHIC-PHASE\">Psychic phase</a>, you can re-roll one <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Psychic-Tests\">Psychic test</a> taken for that model.</li></ul>You can only use this Stratagem once."
							},
							{
								"faction_id": "DG",
								"name": "OVERWHELMING GENEROSITY",
								"type": "Death Guard – Wargear Stratagem",
								"cp_cost": "1",
								"legend": "Unholy filth gushes from Nurgle’s faithful into their guns until the armaments threaten to burst like bloated corpses.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to shoot. Until the end of the phase, add 6\" to the Range characteristic of <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapons\">plague weapons</a> models in that unit are equipped with.",
								"id": "000002327030",
								"field9": "",
								"keys": [
									"death",
									"guard"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to shoot. Until the end of the phase, add 6\" to the Range characteristic of <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapons\">plague weapons</a> models in that unit are equipped with."
							},
							{
								"faction_id": "DG",
								"name": "FLASH OUTBREAK",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "On occasion a contagion of Nurgle will flare up brilliantly in an all-consuming wave of infection.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00379\" data-tooltip-content=\"#tooltip_content00379\" data-tooltip-anchor=\"#tooltip_content00379\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span></span> unit with the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagions of Nurgle</a> ability from your army:<br><ul><li>If there are any other <span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span> units from your army on the battlefield that have any <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion abilities</a> that the selected unit does not have, then until the start of your next Command phase, the selected unit has all of the same Contagion abilities (this is in addition to the ones it already has).</li><li>Until the start of your next Command phase, units from your army count the battle round number as one higher than the current battle round number for the purpose of determining the Contagion range of any Contagion abilities they have.</li></ul>",
								"id": "000002327026",
								"field9": "",
								"keys": [
									"&lt;plague company&gt;",
									"p",
									"company&gt;",
									"p",
									"company&gt;"
								],
								"activate": [
									"Command phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00379\" data-tooltip-content=\"#tooltip_content00379\" data-tooltip-anchor=\"#tooltip_content00379\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span></span> unit with the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagions of Nurgle</a> ability from your army:<br><ul><li>If there are any other <span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span> units from your army on the battlefield that have any <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion abilities</a> that the selected unit does not have, then until the start of your next Command phase, the selected unit has all of the same Contagion abilities (this is in addition to the ones it already has).</li><li>Until the start of your next Command phase, units from your army count the battle round number as one higher than the current battle round number for the purpose of determining the Contagion range of any Contagion abilities they have.</li></ul>"
							},
							{
								"faction_id": "DG",
								"name": "GIFTS OF DECAY",
								"type": "Death Guard – Requisition Stratagem",
								"cp_cost": "1",
								"legend": "Nurgle is a generous god, and through worship and devotion his followers can gain mighty rewards. Those who prove themselves most worthy wield suppurating weapons of unspeakable foulness, or gird themselves in weeping armour of filth.",
								"source_id": "",
								"description": "Use this Stratagem before the battle, when you are mustering your army, if your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> has the <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> keyword. Select one <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army and give them one <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Relics-of-Decay\">Relic of Decay</a> (this must be a Relic they could have). Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case, you can use this Stratagem twice) or an Onslaught battle (in which case, you can use this Stratagem three times).",
								"id": "000002327015",
								"field9": "",
								"keys": [
									"death guard character",
									"warlord",
									"death",
									"guard",
									"death",
									"guard",
									"character"
								],
								"activate": [
									"Before battle"
								],
								"descText": "Use this Stratagem before the battle, when you are mustering your army, if your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> has the <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> keyword. Select one <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army and give them one <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Relics-of-Decay\">Relic of Decay</a> (this must be a Relic they could have). Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case, you can use this Stratagem twice) or an Onslaught battle (in which case, you can use this Stratagem three times)."
							},
							{
								"faction_id": "DG",
								"name": "BEFOULED INCUBATORS",
								"type": "Death Guard – Epic Deed Stratagem",
								"cp_cost": "1",
								"legend": "Those fighting the Death Guard soon became carriers of disease, even if the plagues do not kill them outright. On occasion their plague boils up inside them, so that when they are struck down, they burst.",
								"source_id": "",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by that model, roll one D6: on a 3+, that enemy model’s unit suffers 1 <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> after your model has resolved all of its attacks (a maximum of 3 mortal wounds can be inflicted per phase via this Stratagem).",
								"id": "000002327011",
								"field9": "",
								"keys": [
									"death guard character",
									"death",
									"guard",
									"character"
								],
								"activate": [
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by that model, roll one D6: on a 3+, that enemy model’s unit suffers 1 <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> after your model has resolved all of its attacks (a maximum of 3 mortal wounds can be inflicted per phase via this Stratagem)."
							},
							{
								"faction_id": "DG",
								"name": "ERUPTION OF FILTH",
								"type": "Death Guard – Epic Deed Stratagem",
								"cp_cost": "1",
								"legend": "The slain warrior bursts like a fat, pox-laden buboe.",
								"source_id": "",
								"description": "Use this Stratagem in any phase, when a <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army is destroyed instead of using any other rules that are triggered when a model is destroyed (e.g. the <span class=\"redfont\">Putrid Explosion</span> ability). Before removing that model from play, roll one D6 for each other unit within 3\" (excluding <span class=\"kwb\">NURGLE</span> units): on a 2-5, that unit suffers 1 <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a>; on a 6, that unit suffers D3 mortal wounds.",
								"id": "000002327013",
								"field9": "",
								"keys": [
									"death guard character",
									"death",
									"guard",
									"character",
									"putrid explosion",
									"nurgle"
								],
								"activate": [
									"Enemy Morale phase",
									"Enemy Fight phase",
									"Movement phase",
									"Psychic phase",
									"Shooting phase",
									"Charge phase",
									"Fight phase",
									"Morale phase",
									"Enemy Movement phase",
									"Enemy Psychic phase",
									"Enemy Shooting phase",
									"Enemy Charge phase"
								],
								"descText": "Use this Stratagem in any phase, when a <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army is destroyed instead of using any other rules that are triggered when a model is destroyed (e.g. the <span class=\"redfont\">Putrid Explosion</span> ability). Before removing that model from play, roll one D6 for each other unit within 3\" (excluding <span class=\"kwb\">NURGLE</span> units): on a 2-5, that unit suffers 1 <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a>; on a 6, that unit suffers D3 mortal wounds."
							},
							{
								"faction_id": "DG",
								"name": "DISEASED EFFLUENTS",
								"type": "Death Guard – Epic Deed Stratagem",
								"cp_cost": "1",
								"legend": "The foul liquids coursing through some Death Guard warriors are weapons in themselves. If unleashed, they drench a foe in toxic slime and effluvia that can kill in minutes.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army (excluding <span class=\"tooltip00375\" data-tooltip-content=\"#tooltip_content00375\" data-tooltip-anchor=\"#tooltip_content00375\"><span class=\"kwb\">DAEMON</span></span> models) and one enemy unit within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of that model. That model suffers 1 <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> and you then roll one D6: on a 2+, that enemy unit suffers 2D3 mortal wounds. If that enemy unit has the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> keyword (excluding <span class=\"kwb\">VEHICLE</span> units), it suffers D3 mortal wounds instead.",
								"id": "000002327009",
								"field9": "",
								"keys": [
									"death guard character",
									"daemon",
									"death",
									"guard",
									"character",
									"daemon",
									"character",
									"vehicle"
								],
								"activate": [
									"Command phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army (excluding <span class=\"tooltip00375\" data-tooltip-content=\"#tooltip_content00375\" data-tooltip-anchor=\"#tooltip_content00375\"><span class=\"kwb\">DAEMON</span></span> models) and one enemy unit within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of that model. That model suffers 1 <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> and you then roll one D6: on a 2+, that enemy unit suffers 2D3 mortal wounds. If that enemy unit has the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> keyword (excluding <span class=\"kwb\">VEHICLE</span> units), it suffers D3 mortal wounds instead."
							},
							{
								"faction_id": "DG",
								"name": "CLOUD OF FLIES",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "2/4",
								"legend": "With a thrumming roar, a thick cloud of daemon flies whirls around the Death Guard and obscures them from the enemy's sight.",
								"source_id": "",
								"description": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00371\" data-tooltip-content=\"#tooltip_content00371\" data-tooltip-anchor=\"#tooltip_content00371\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, each time an enemy model shoots, if that unit is not the closest eligible target or within 12\" of that model, then until that shooting is resolved, that model cannot target that unit. In addition, until the end of the phase, if the selected unit has the <span class=\"redfont\">Bodyguard</span> ability, it loses that ability. If the selected unit has the <span class=\"kwb\">TERMINATOR</span> keyword, this Stratagem costs 4CP; otherwise, it costs 2CP.",
								"id": "000002327022",
								"field9": "",
								"keys": [
									"bubonic astartes infantry",
									"bubonic",
									"astartes",
									"infantry",
									"bodyguard",
									"terminator"
								],
								"activate": [
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00371\" data-tooltip-content=\"#tooltip_content00371\" data-tooltip-anchor=\"#tooltip_content00371\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, each time an enemy model shoots, if that unit is not the closest eligible target or within 12\" of that model, then until that shooting is resolved, that model cannot target that unit. In addition, until the end of the phase, if the selected unit has the <span class=\"redfont\">Bodyguard</span> ability, it loses that ability. If the selected unit has the <span class=\"kwb\">TERMINATOR</span> keyword, this Stratagem costs 4CP; otherwise, it costs 2CP."
							},
							{
								"faction_id": "DG",
								"name": "THE BLIGHTENING",
								"type": "Death Guard – Wargear Stratagem",
								"cp_cost": "1",
								"legend": "The effects of blight grenades - so horrendous to their victims - have no impact on the Death Guard, who gladly use the devices in extreme close quarters with the enemy.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select up to three <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> models from your army. Until the end of the phase, <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapons\">plague weapons</a> with the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#GRENADE\">Grenade</a> type that those models are equipped with lose the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Blast-Weapons\">Blast</a> ability, have a Type characteristic of <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol 6</a>, and each time that model makes an attack with one of those weapons against an enemy unit within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> that attack automatically hits the target.",
								"id": "000002327029",
								"field9": "",
								"keys": [
									"death",
									"guard"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select up to three <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> models from your army. Until the end of the phase, <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapons\">plague weapons</a> with the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#GRENADE\">Grenade</a> type that those models are equipped with lose the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Blast-Weapons\">Blast</a> ability, have a Type characteristic of <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol 6</a>, and each time that model makes an attack with one of those weapons against an enemy unit within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> that attack automatically hits the target."
							},
							{
								"faction_id": "DG",
								"name": "ETERNAL HATRED",
								"type": "Death Guard – Battle Tactic Stratagem",
								"cp_cost": "2",
								"legend": "The hatred of the Traitor Legions has burned for millennia.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00371\" data-tooltip-content=\"#tooltip_content00371\" data-tooltip-anchor=\"#tooltip_content00371\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected to shoot, or in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attacks <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
								"id": "000002327007",
								"field9": "",
								"keys": [
									"bubonic astartes infantry",
									"bubonic",
									"astartes",
									"infantry",
									"bubonic",
									"astartes",
									"infantry"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00371\" data-tooltip-content=\"#tooltip_content00371\" data-tooltip-anchor=\"#tooltip_content00371\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected to shoot, or in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attacks <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>."
							},
							{
								"faction_id": "DG",
								"name": "RELEASE THE TOXINS",
								"type": "Death Guard – Epic Deed Stratagem",
								"cp_cost": "2",
								"legend": "The artefacts of the Death Guard are foul objects and weapons, seeped in poisons of countless varieties. To unleash them is to grant the enemy a most horrible death.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army that was equipped with a <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Relics-of-Decay\">Relic of Decay</a> at the start of the battle. Roll one D6 for each enemy unit within 7\" of that model: on a 2-5, that unit suffers 1 <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a>; on a 6, that unit suffers D3 mortal wounds. A model can only be selected for this Stratagem once per battle.",
								"id": "000002327012",
								"field9": "",
								"keys": [
									"death guard character",
									"death",
									"guard",
									"character"
								],
								"activate": [
									"Command phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army that was equipped with a <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Relics-of-Decay\">Relic of Decay</a> at the start of the battle. Roll one D6 for each enemy unit within 7\" of that model: on a 2-5, that unit suffers 1 <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a>; on a 6, that unit suffers D3 mortal wounds. A model can only be selected for this Stratagem once per battle."
							},
							{
								"faction_id": "DG",
								"name": "CALLOUS DISREGARD",
								"type": "Terminus Est Assault Force – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "Even when the hordes at the fore of an assault force have reached the enemy lines, the second wave simply opens fire, caring little for whether their shots hit friend or foe.",
								"source_id": "000000153",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00377\" data-tooltip-content=\"#tooltip_content00377\" data-tooltip-anchor=\"#tooltip_content00377\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span></span> <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army that is eligible to shoot.<br><ul><li>Until the end of the turn, models in that unit can target enemy units within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of friendly <span class=\"tooltip03020\" data-tooltip-content=\"#tooltip_content03020\" data-tooltip-anchor=\"#tooltip_content03020\"><span class=\"kwb\">POXWALKERS</span></span> or <span class=\"tooltip03351\" data-tooltip-content=\"#tooltip_content03351\" data-tooltip-anchor=\"#tooltip_content03351\"><span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span></span> units from your army.</li><li>Each time a model in that unit makes an attack against an enemy unit within Engagement Range of a friendly <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit, subtract 1 from the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>, and if the hit roll is not successful, that attack scores a hit against that <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit instead.</li></ul>",
								"id": "000005448005",
								"field9": "",
								"keys": [
									"bubonic astartes",
									"poxwalkers",
									"plague followers",
									"bubonic",
									"astartes",
									"terminus",
									"est",
									"assault",
									"force",
									"poxwalkers",
									"plague",
									"followers",
									"poxwalkers",
									"plague",
									"followers",
									"poxwalkers",
									"plague",
									"followers"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00377\" data-tooltip-content=\"#tooltip_content00377\" data-tooltip-anchor=\"#tooltip_content00377\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span></span> <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army that is eligible to shoot.<br><ul><li>Until the end of the turn, models in that unit can target enemy units within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of friendly <span class=\"tooltip03020\" data-tooltip-content=\"#tooltip_content03020\" data-tooltip-anchor=\"#tooltip_content03020\"><span class=\"kwb\">POXWALKERS</span></span> or <span class=\"tooltip03351\" data-tooltip-content=\"#tooltip_content03351\" data-tooltip-anchor=\"#tooltip_content03351\"><span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span></span> units from your army.</li><li>Each time a model in that unit makes an attack against an enemy unit within Engagement Range of a friendly <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit, subtract 1 from the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>, and if the hit roll is not successful, that attack scores a hit against that <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit instead.</li></ul>"
							},
							{
								"faction_id": "DG",
								"name": "PLAGUE-CHOSEN",
								"type": "Death Guard – Requisition Stratagem",
								"cp_cost": "1",
								"legend": "Many lords and champions of the Death Guard have favoured lieutenants within their ranks.",
								"source_id": "",
								"description": "Use this Stratagem before the battle, when you are mustering your army, if your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> has the <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> keyword. Select one <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model in your army (excluding named characters) and determine one <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Warlord-Traits\">Warlord Trait</a> for that model (this must be a Warlord Trait they can have); that model is only regarded as your <span class=\"kwb\">WARLORD</span> for the purposes of that Warlord Trait. Each Warlord Trait in your army must be unique (if randomly generated, re-roll duplicate results), and you cannot use this Stratagem to give a model two Warlord Traits. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice), or an Onslaught battle (in which case you can use this Stratagem three times).",
								"id": "000002327016",
								"field9": "",
								"keys": [
									"death guard character",
									"warlord",
									"death",
									"guard",
									"death",
									"guard",
									"character",
									"warlord"
								],
								"activate": [
									"Before battle"
								],
								"descText": "Use this Stratagem before the battle, when you are mustering your army, if your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> has the <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> keyword. Select one <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model in your army (excluding named characters) and determine one <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Warlord-Traits\">Warlord Trait</a> for that model (this must be a Warlord Trait they can have); that model is only regarded as your <span class=\"kwb\">WARLORD</span> for the purposes of that Warlord Trait. Each Warlord Trait in your army must be unique (if randomly generated, re-roll duplicate results), and you cannot use this Stratagem to give a model two Warlord Traits. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice), or an Onslaught battle (in which case you can use this Stratagem three times)."
							}
						],
						"waha": {
							"id": "000001055",
							"name": "Malignant Plaguecaster",
							"link": "https://wahapedia.ruhttps://wahapedia.ru/wh40k9ed/factions/death-guard/Malignant-Plaguecaster",
							"faction_id": "DG",
							"source_id": "000000014",
							"role": "HQ",
							"unit_composition": "A Malignant Plaguecaster is equipped with: corrupted staff; blight grenades; krak grenades.",
							"transport": "",
							"power_points": "5",
							"priest": "",
							"psyker": "This model can attempt to <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Manifesting-Psychic-Powers\">manifest</a> two psychic powers in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#PSYCHIC-PHASE\">Psychic phase</a> and attempt to <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Deny-the-Witch\">deny</a> one psychic power in your opponent’s Psychic phase. It knows <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Smite\">Smite</a> and two psychic powers from the <b><a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagion-Discipline\">Contagion discipline</a></b>.",
							"open_play_only": "false",
							"crusade_only": "false",
							"virtual": "false",
							"Cost": "",
							"cost_per_unit": "Нет",
							"field17": ""
						}
					},
					{
						"name": "Blightlord Terminators",
						"slot": "Elites",
						"faction": [
							"Death Guard",
							"Nurgle",
							"<Plague Company>",
							"Chaos",
							"Heretic Astartes"
						],
						"keywords": [
							"infantry",
							"terminator",
							"core",
							"blightlord terminators",
							"bubonic astartes"
						],
						"models": [{
								"name": "Blightlord Champion",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Combi-bolter",
										"amount": "1",
										"Range": "24\"",
										"Type": "Rapid Fire 2",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Bubotic Axe",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "+2",
										"AP": "-2",
										"D": "1",
										"Abilities": "Plague Weapon"
									}
								],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "5",
									"WS": "3",
									"BS": "3",
									"S": "4",
									"T": "5",
									"W": "3",
									"A": "4",
									"Ld": "9",
									"Sv": "2"
								}
							},
							{
								"name": "Blightlord Terminator",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Combi-bolter",
										"amount": "1",
										"Range": "24\"",
										"Type": "Rapid Fire 2",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Bubotic Axe",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "+2",
										"AP": "-2",
										"D": "1",
										"Abilities": "Plague Weapon"
									}
								],
								"wargear": [],
								"amount": 4,
								"statlines": {
									"M": "5",
									"WS": "3",
									"BS": "3",
									"S": "4",
									"T": "5",
									"W": "3",
									"A": "3",
									"Ld": "8",
									"Sv": "2"
								}
							}
						],
						"rules": [{
								"name": "Contagions of Nurgle",
								"desc": "If every unit from your army has the DEATH GUARD keyword (excluding UNALIGNED units), this unit gains the following ability:\n\nNurgle's Gift (Contagion): While an enemy unit is within Contagion Range of this unit (see below), subtract 1 from the Toughness characteristic of models in that unit.",
								"subkeys": [
									"DEATH",
									"GUARD",
									"UNALIGNED"
								],
								"targets": [
									"DEATH GUARD",
									"UNALIGNED"
								],
								"phases": []
							},
							{
								"name": "Inexorable Advance",
								"desc": "- This unit counts as having Remained Stationary if it did not Fall Back or Advance in your previous Movement phase.\n- If this unit has the VEHICLE keyword, it does not suffer the penalty incurred to its hit rolls for firing Heavy weapons at enemy units that are within Engagement Range of it.\n- If this unit has the INFANTRY keyword, it can ignore any or all modifiers to its Move characteristic, Advance rolls and charge rolls.",
								"subkeys": [
									"VEHICLE",
									"INFANTRY"
								],
								"targets": [
									"VEHICLE",
									"INFANTRY"
								],
								"phases": [
									"Movement"
								]
							},
							{
								"name": "Malicious Volleys",
								"desc": "Instead of following the normal rules for Rapid Fire weapons, models in this unit shooting Rapid Fire bolt weapons make double the number of attacks if any of the following apply:\n• The shooting model’s target is within half the weapon’s range.\n• The shooting model is Infantry and its unit Remained\nStationary in your previous Movement phase.\n• The shooting model is a Terminator.\nFor the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon (as defined on page 88) with the Rapid Fire type.",
								"subkeys": null,
								"targets": null,
								"phases": [
									"Movement"
								]
							},
							{
								"name": "Disgustingly Resilient",
								"desc": "Each time an attack is allocated to a model in this unit, subtract 1 from the Damage characteristic of that attack (to a minimum of 1).",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Diseased Terminator Armour",
								"desc": "Models in this unit have a 4+ invulnerable save.",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Teleport Strike",
								"desc": "During deployment, if every model in this unit has this ability, then you can set up this unit in a teleportarium chamber instead of setting it up on the battlefield. If you do, then in the Reinforcements step of one of your Movement phases you can set up this unit anywhere on the battlefield that is more than 9\" away from any enemy models.",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Remorseless",
								"desc": "Each time a Combat Attrition test is taken for this unit, ignore any or all modifiers.",
								"subkeys": null,
								"targets": null,
								"phases": []
							}
						],
						"spells": [],
						"stratagems": [{
								"faction_id": "DG",
								"name": "ETERNAL HATRED",
								"type": "Death Guard – Battle Tactic Stratagem",
								"cp_cost": "2",
								"legend": "The hatred of the Traitor Legions has burned for millennia.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00371\" data-tooltip-content=\"#tooltip_content00371\" data-tooltip-anchor=\"#tooltip_content00371\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected to shoot, or in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attacks <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
								"id": "000002327007",
								"field9": "",
								"keys": [
									"bubonic astartes infantry",
									"bubonic",
									"astartes",
									"infantry",
									"bubonic",
									"astartes",
									"infantry"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00371\" data-tooltip-content=\"#tooltip_content00371\" data-tooltip-anchor=\"#tooltip_content00371\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected to shoot, or in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attacks <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>."
							},
							{
								"faction_id": "DG",
								"name": "OVERWHELMING GENEROSITY",
								"type": "Death Guard – Wargear Stratagem",
								"cp_cost": "1",
								"legend": "Unholy filth gushes from Nurgle’s faithful into their guns until the armaments threaten to burst like bloated corpses.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to shoot. Until the end of the phase, add 6\" to the Range characteristic of <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapons\">plague weapons</a> models in that unit are equipped with.",
								"id": "000002327030",
								"field9": "",
								"keys": [
									"death",
									"guard"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to shoot. Until the end of the phase, add 6\" to the Range characteristic of <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapons\">plague weapons</a> models in that unit are equipped with."
							},
							{
								"faction_id": "DG",
								"name": "VIRULENT ROUNDS",
								"type": "Death Guard – Wargear Stratagem",
								"cp_cost": "1",
								"legend": "The Death Guard know countless revolting ways to render their bolt rounds horrifically virulent.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00370\" data-tooltip-content=\"#tooltip_content00370\" data-tooltip-anchor=\"#tooltip_content00370\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot. Until the end of the phase, <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Bolt-Weapons\">bolt weapons</a> models in that unit are equipped with have the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapon\">Plague Weapon</a> ability.",
								"id": "000002327031",
								"field9": "",
								"keys": [
									"death guard core",
									"death",
									"guard",
									"core"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00370\" data-tooltip-content=\"#tooltip_content00370\" data-tooltip-anchor=\"#tooltip_content00370\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot. Until the end of the phase, <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Bolt-Weapons\">bolt weapons</a> models in that unit are equipped with have the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapon\">Plague Weapon</a> ability."
							},
							{
								"faction_id": "DG",
								"name": "PESTILENTIAL DROP",
								"type": "Terminus Est Assault Force – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "Assault force troops arrive on the battlefield amid billowing clouds of pestilence, diseased Drop Pod exhaust fumes, the leaking effluence of landing crafts and rot blooms expelled directly from their foetid teleportation chambers.",
								"source_id": "000000153",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your Movement phases, when you set up a <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army on the battlefield using the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Army-of-Renown:-Terminus-Est-Assault-Force\">Outbreak Assault</a> or <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Teleport-Strike-1\">Teleport Strike</a> ability. Select one <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion of Nurgle</a> ability that unit has; until the end of the turn, the Contagion Range of that ability is 12\" for that unit. This is not cumulative with any other abilities that increase <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion Range</a>.",
								"id": "000005448004",
								"field9": "",
								"keys": [
									"terminus",
									"est",
									"assault",
									"force"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your Movement phases, when you set up a <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army on the battlefield using the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Army-of-Renown:-Terminus-Est-Assault-Force\">Outbreak Assault</a> or <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Teleport-Strike-1\">Teleport Strike</a> ability. Select one <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion of Nurgle</a> ability that unit has; until the end of the turn, the Contagion Range of that ability is 12\" for that unit. This is not cumulative with any other abilities that increase <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion Range</a>."
							},
							{
								"faction_id": "DG",
								"name": "CLOUD OF FLIES",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "2/4",
								"legend": "With a thrumming roar, a thick cloud of daemon flies whirls around the Death Guard and obscures them from the enemy's sight.",
								"source_id": "",
								"description": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00371\" data-tooltip-content=\"#tooltip_content00371\" data-tooltip-anchor=\"#tooltip_content00371\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, each time an enemy model shoots, if that unit is not the closest eligible target or within 12\" of that model, then until that shooting is resolved, that model cannot target that unit. In addition, until the end of the phase, if the selected unit has the <span class=\"redfont\">Bodyguard</span> ability, it loses that ability. If the selected unit has the <span class=\"kwb\">TERMINATOR</span> keyword, this Stratagem costs 4CP; otherwise, it costs 2CP.",
								"id": "000002327022",
								"field9": "",
								"keys": [
									"bubonic astartes infantry",
									"bubonic",
									"astartes",
									"infantry",
									"bodyguard",
									"terminator"
								],
								"activate": [
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00371\" data-tooltip-content=\"#tooltip_content00371\" data-tooltip-anchor=\"#tooltip_content00371\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, each time an enemy model shoots, if that unit is not the closest eligible target or within 12\" of that model, then until that shooting is resolved, that model cannot target that unit. In addition, until the end of the phase, if the selected unit has the <span class=\"redfont\">Bodyguard</span> ability, it loses that ability. If the selected unit has the <span class=\"kwb\">TERMINATOR</span> keyword, this Stratagem costs 4CP; otherwise, it costs 2CP."
							},
							{
								"faction_id": "DG",
								"name": "CALLOUS DISREGARD",
								"type": "Terminus Est Assault Force – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "Even when the hordes at the fore of an assault force have reached the enemy lines, the second wave simply opens fire, caring little for whether their shots hit friend or foe.",
								"source_id": "000000153",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00377\" data-tooltip-content=\"#tooltip_content00377\" data-tooltip-anchor=\"#tooltip_content00377\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span></span> <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army that is eligible to shoot.<br><ul><li>Until the end of the turn, models in that unit can target enemy units within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of friendly <span class=\"tooltip03020\" data-tooltip-content=\"#tooltip_content03020\" data-tooltip-anchor=\"#tooltip_content03020\"><span class=\"kwb\">POXWALKERS</span></span> or <span class=\"tooltip03351\" data-tooltip-content=\"#tooltip_content03351\" data-tooltip-anchor=\"#tooltip_content03351\"><span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span></span> units from your army.</li><li>Each time a model in that unit makes an attack against an enemy unit within Engagement Range of a friendly <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit, subtract 1 from the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>, and if the hit roll is not successful, that attack scores a hit against that <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit instead.</li></ul>",
								"id": "000005448005",
								"field9": "",
								"keys": [
									"bubonic astartes",
									"poxwalkers",
									"plague followers",
									"bubonic",
									"astartes",
									"terminus",
									"est",
									"assault",
									"force",
									"poxwalkers",
									"plague",
									"followers",
									"poxwalkers",
									"plague",
									"followers",
									"poxwalkers",
									"plague",
									"followers"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00377\" data-tooltip-content=\"#tooltip_content00377\" data-tooltip-anchor=\"#tooltip_content00377\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span></span> <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army that is eligible to shoot.<br><ul><li>Until the end of the turn, models in that unit can target enemy units within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of friendly <span class=\"tooltip03020\" data-tooltip-content=\"#tooltip_content03020\" data-tooltip-anchor=\"#tooltip_content03020\"><span class=\"kwb\">POXWALKERS</span></span> or <span class=\"tooltip03351\" data-tooltip-content=\"#tooltip_content03351\" data-tooltip-anchor=\"#tooltip_content03351\"><span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span></span> units from your army.</li><li>Each time a model in that unit makes an attack against an enemy unit within Engagement Range of a friendly <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit, subtract 1 from the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>, and if the hit roll is not successful, that attack scores a hit against that <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit instead.</li></ul>"
							},
							{
								"faction_id": "DG",
								"name": "VERMID WHISPERS",
								"type": "Death Guard – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The compound eyes and keening whispers of countless daemonic flies help guide these warriors’ aim.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00369\" data-tooltip-content=\"#tooltip_content00369\" data-tooltip-anchor=\"#tooltip_content00369\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">TERMINATOR</span></span> unit from your army is selected to shoot, or in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">TERMINATOR</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attack’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
								"id": "000002327005",
								"field9": "",
								"keys": [
									"death guard terminator",
									"death",
									"guard",
									"terminator",
									"death",
									"guard",
									"terminator"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00369\" data-tooltip-content=\"#tooltip_content00369\" data-tooltip-anchor=\"#tooltip_content00369\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">TERMINATOR</span></span> unit from your army is selected to shoot, or in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">TERMINATOR</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attack’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>."
							},
							{
								"faction_id": "DG",
								"name": "FLASH OUTBREAK",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "On occasion a contagion of Nurgle will flare up brilliantly in an all-consuming wave of infection.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00379\" data-tooltip-content=\"#tooltip_content00379\" data-tooltip-anchor=\"#tooltip_content00379\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span></span> unit with the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagions of Nurgle</a> ability from your army:<br><ul><li>If there are any other <span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span> units from your army on the battlefield that have any <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion abilities</a> that the selected unit does not have, then until the start of your next Command phase, the selected unit has all of the same Contagion abilities (this is in addition to the ones it already has).</li><li>Until the start of your next Command phase, units from your army count the battle round number as one higher than the current battle round number for the purpose of determining the Contagion range of any Contagion abilities they have.</li></ul>",
								"id": "000002327026",
								"field9": "",
								"keys": [
									"&lt;plague company&gt;",
									"p",
									"company&gt;",
									"p",
									"company&gt;"
								],
								"activate": [
									"Command phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00379\" data-tooltip-content=\"#tooltip_content00379\" data-tooltip-anchor=\"#tooltip_content00379\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span></span> unit with the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagions of Nurgle</a> ability from your army:<br><ul><li>If there are any other <span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span> units from your army on the battlefield that have any <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion abilities</a> that the selected unit does not have, then until the start of your next Command phase, the selected unit has all of the same Contagion abilities (this is in addition to the ones it already has).</li><li>Until the start of your next Command phase, units from your army count the battle round number as one higher than the current battle round number for the purpose of determining the Contagion range of any Contagion abilities they have.</li></ul>"
							},
							{
								"faction_id": "DG",
								"name": "BREAK THEIR SPIRITS",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Terminators are terrifying foes to face. When Death Guard Terminators slice opponents in half or unleash plague weapons that turn living beings to pools of foetid slush, they shatter the spirits of those who still live and stand against them.",
								"source_id": "",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00369\" data-tooltip-content=\"#tooltip_content00369\" data-tooltip-anchor=\"#tooltip_content00369\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">TERMINATOR</span></span> model from your army destroys a model in an enemy <span class=\"kwb\">INFANTRY</span>, <span class=\"kwb\">BEASTS</span> or <span class=\"kwb\">SWARM</span> unit. Until the end of the turn, subtract 4 from the Leadership characteristic of models in that unit.",
								"id": "000002327023",
								"field9": "",
								"keys": [
									"death guard terminator",
									"death",
									"guard",
									"terminator",
									"infantry",
									"beasts",
									"swarm"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00369\" data-tooltip-content=\"#tooltip_content00369\" data-tooltip-anchor=\"#tooltip_content00369\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">TERMINATOR</span></span> model from your army destroys a model in an enemy <span class=\"kwb\">INFANTRY</span>, <span class=\"kwb\">BEASTS</span> or <span class=\"kwb\">SWARM</span> unit. Until the end of the turn, subtract 4 from the Leadership characteristic of models in that unit."
							},
							{
								"faction_id": "DG",
								"name": "CREEPING BLIGHT",
								"type": "Death Guard – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "This warp-plague spreads fingers of corrosion through armour, flesh, bone and even air with equal virulence.",
								"source_id": "",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapon\">plague weapon</a>, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, that attack has an Armour Penetration characteristic of -4.",
								"id": "000002327003",
								"field9": "",
								"keys": [
									"death",
									"guard"
								],
								"activate": [
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapon\">plague weapon</a>, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, that attack has an Armour Penetration characteristic of -4."
							},
							{
								"faction_id": "DG",
								"name": "CHAMPION OF DISEASE",
								"type": "Death Guard – Requisition Stratagem",
								"cp_cost": "1",
								"legend": "Some Death Guard are marked for greatness before they rise high in the Legion's ranks. Some of these warriors are gifted the opportunity to wield rare relic weapons in Nurglc’s name.",
								"source_id": "",
								"description": "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"tooltip00377\" data-tooltip-content=\"#tooltip_content00377\" data-tooltip-anchor=\"#tooltip_content00377\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span></span> model from your army that has the word ‘Champion’ in their profile and give them one of the following <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Relics-of-Decay\">Relics of Decay</a> (this must be a Relic they could have): <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Reaper-of-Glorious-Entropy\">Reaper of Glorious Entropy</a>; <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Skull-of-Glothila\">Plague Skull of Glothila</a>; <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plaguebringer\">Plaguebringer</a>; <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Suppurating-Plate\">Suppurating Plate</a>.<br><br>Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case, you can use this Stratagem twice) or an Onslaught battle (in which case, you can use this Stratagem three times).",
								"id": "000002327014",
								"field9": "",
								"keys": [
									"bubonic astartes",
									"bubonic",
									"astartes"
								],
								"activate": [
									"Before battle"
								],
								"descText": "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"tooltip00377\" data-tooltip-content=\"#tooltip_content00377\" data-tooltip-anchor=\"#tooltip_content00377\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span></span> model from your army that has the word ‘Champion’ in their profile and give them one of the following <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Relics-of-Decay\">Relics of Decay</a> (this must be a Relic they could have): <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Reaper-of-Glorious-Entropy\">Reaper of Glorious Entropy</a>; <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Skull-of-Glothila\">Plague Skull of Glothila</a>; <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plaguebringer\">Plaguebringer</a>; <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Suppurating-Plate\">Suppurating Plate</a>.<br><br>Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case, you can use this Stratagem twice) or an Onslaught battle (in which case, you can use this Stratagem three times)."
							},
							{
								"faction_id": "DG",
								"name": "HAZE OF CORRUPTION",
								"type": "Death Guard – Battle Tactic Stratagem",
								"cp_cost": "2",
								"legend": "The close combat weapons of many Death Guard warriors are coated with terrible venoms. When they swing these weapons, the air is filled with corruption that can infect those nearby.",
								"source_id": "",
								"description": "Use this <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Stratagems\">Stratagem</a> in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00370\" data-tooltip-content=\"#tooltip_content00370\" data-tooltip-anchor=\"#tooltip_content00370\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by a model in that unit, any excess damage inflicted by that attack is not lost and is instead suffered by another model in that unit (do not make a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a> for that model). This continues until there is no excess damage remaining.",
								"id": "000002327006",
								"field9": "",
								"keys": [
									"death guard core",
									"death",
									"guard",
									"core"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Stratagems\">Stratagem</a> in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00370\" data-tooltip-content=\"#tooltip_content00370\" data-tooltip-anchor=\"#tooltip_content00370\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by a model in that unit, any excess damage inflicted by that attack is not lost and is instead suffered by another model in that unit (do not make a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a> for that model). This continues until there is no excess damage remaining."
							}
						],
						"waha": {
							"id": "000001372",
							"name": "Blightlord Terminators",
							"link": "https://wahapedia.ruhttps://wahapedia.ru/wh40k9ed/factions/death-guard/Blightlord-Terminators",
							"faction_id": "DG",
							"source_id": "000000014",
							"role": "Elites",
							"unit_composition": "If this unit contains 6 or more models, it has <b>Power Rating 20</b>. Every model is equipped with: combi-bolter; balesword.",
							"transport": "",
							"power_points": "10",
							"priest": "",
							"psyker": "",
							"open_play_only": "false",
							"crusade_only": "false",
							"virtual": "false",
							"Cost": "",
							"cost_per_unit": "Нет",
							"field17": ""
						}
					},
					{
						"name": "Deathshroud Terminators",
						"slot": "Elites",
						"faction": [
							"Death Guard",
							"Nurgle",
							"Heretic Astartes",
							"Chaos",
							"<Plague Company>"
						],
						"keywords": [
							"terminator",
							"deathshroud terminators",
							"infantry",
							"bubonic astartes",
							"core"
						],
						"models": [{
								"name": "Deathshroud Champion",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Plaguespurt gauntlet",
										"amount": "1",
										"Range": "12\"",
										"Type": "Pistol D6",
										"S": "3",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Each time an attack is made with this weapon, that attack automatically hits the target."
									},
									{
										"name": "Manreaper",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "+3",
										"AP": "-3",
										"D": "2",
										"Abilities": "Plague Weapon. Each time an attack is made with this weapon profile, subtract 1 from that attack's hit roll."
									},
									{
										"name": "Manreaper",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "+1",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon. Each time an attack is made with this weapon profile, make 2 hit rolls instead of 1."
									}
								],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "5",
									"WS": "2",
									"BS": "3",
									"S": "4",
									"T": "5",
									"W": "3",
									"A": "5",
									"Ld": "9",
									"Sv": "2"
								}
							},
							{
								"name": "Deathshroud Terminator",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Plaguespurt gauntlet",
										"amount": "4",
										"Range": "12\"",
										"Type": "Pistol D6",
										"S": "3",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Each time an attack is made with this weapon, that attack automatically hits the target."
									},
									{
										"name": "Manreaper",
										"amount": "4",
										"Range": "Melee",
										"Type": "Melee",
										"S": "+3",
										"AP": "-3",
										"D": "2",
										"Abilities": "Plague Weapon. Each time an attack is made with this weapon profile, subtract 1 from that attack's hit roll."
									},
									{
										"name": "Manreaper",
										"amount": "4",
										"Range": "Melee",
										"Type": "Melee",
										"S": "+1",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon. Each time an attack is made with this weapon profile, make 2 hit rolls instead of 1."
									}
								],
								"wargear": [],
								"amount": "4",
								"statlines": {
									"M": "5",
									"WS": "2",
									"BS": "3",
									"S": "4",
									"T": "5",
									"W": "3",
									"A": "4",
									"Ld": "8",
									"Sv": "2"
								}
							}
						],
						"rules": [{
								"name": "Inexorable Advance",
								"desc": "- This unit counts as having Remained Stationary if it did not Fall Back or Advance in your previous Movement phase.\n- If this unit has the VEHICLE keyword, it does not suffer the penalty incurred to its hit rolls for firing Heavy weapons at enemy units that are within Engagement Range of it.\n- If this unit has the INFANTRY keyword, it can ignore any or all modifiers to its Move characteristic, Advance rolls and charge rolls.",
								"subkeys": [
									"VEHICLE",
									"INFANTRY"
								],
								"targets": [
									"VEHICLE",
									"INFANTRY"
								],
								"phases": [
									"Movement"
								]
							},
							{
								"name": "Contagions of Nurgle",
								"desc": "If every unit from your army has the DEATH GUARD keyword (excluding UNALIGNED units), this unit gains the following ability:\n\nNurgle's Gift (Contagion): While an enemy unit is within Contagion Range of this unit (see below), subtract 1 from the Toughness characteristic of models in that unit.",
								"subkeys": [
									"DEATH",
									"GUARD",
									"UNALIGNED"
								],
								"targets": [
									"DEATH GUARD",
									"UNALIGNED"
								],
								"phases": []
							},
							{
								"name": "Bodyguard (Aura)",
								"desc": "While a friendly <PLAGUE COMPANY> CHARACTER unit that has a Wounds characteristic of 9 or less is within 3\" of this unit, enemy models cannot target that CHARACTER unit with ranged attacks.",
								"subkeys": [
									"PLAGUE",
									"COMPANY",
									"CHARACTER",
									"CHARACTER"
								],
								"targets": [
									"PLAGUE COMPANY",
									"CHARACTER",
									"CHARACTER"
								],
								"phases": []
							},
							{
								"name": "Disgustingly Resilient",
								"desc": "Each time an attack is allocated to a model in this unit, subtract 1 from the Damage characteristic of that attack (to a minimum of 1).",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Diseased Terminator Armour",
								"desc": "Models in this unit have a 4+ invulnerable save.",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Teleport Strike",
								"desc": "During deployment, if every model in this unit has this ability, then you can set up this unit in a teleportarium chamber instead of setting it up on the battlefield. If you do, then in the Reinforcements step of one of your Movement phases you can set up this unit anywhere on the battlefield that is more than 9\" away from any enemy models.",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Remorseless",
								"desc": "Each time a Combat Attrition test is taken for this unit, ignore any or all modifiers.",
								"subkeys": null,
								"targets": null,
								"phases": []
							}
						],
						"spells": [],
						"stratagems": [{
								"faction_id": "DG",
								"name": "ETERNAL HATRED",
								"type": "Death Guard – Battle Tactic Stratagem",
								"cp_cost": "2",
								"legend": "The hatred of the Traitor Legions has burned for millennia.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00371\" data-tooltip-content=\"#tooltip_content00371\" data-tooltip-anchor=\"#tooltip_content00371\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected to shoot, or in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attacks <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
								"id": "000002327007",
								"field9": "",
								"keys": [
									"bubonic astartes infantry",
									"bubonic",
									"astartes",
									"infantry",
									"bubonic",
									"astartes",
									"infantry"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00371\" data-tooltip-content=\"#tooltip_content00371\" data-tooltip-anchor=\"#tooltip_content00371\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected to shoot, or in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attacks <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>."
							},
							{
								"faction_id": "DG",
								"name": "CHAMPION OF DISEASE",
								"type": "Death Guard – Requisition Stratagem",
								"cp_cost": "1",
								"legend": "Some Death Guard are marked for greatness before they rise high in the Legion's ranks. Some of these warriors are gifted the opportunity to wield rare relic weapons in Nurglc’s name.",
								"source_id": "",
								"description": "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"tooltip00377\" data-tooltip-content=\"#tooltip_content00377\" data-tooltip-anchor=\"#tooltip_content00377\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span></span> model from your army that has the word ‘Champion’ in their profile and give them one of the following <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Relics-of-Decay\">Relics of Decay</a> (this must be a Relic they could have): <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Reaper-of-Glorious-Entropy\">Reaper of Glorious Entropy</a>; <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Skull-of-Glothila\">Plague Skull of Glothila</a>; <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plaguebringer\">Plaguebringer</a>; <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Suppurating-Plate\">Suppurating Plate</a>.<br><br>Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case, you can use this Stratagem twice) or an Onslaught battle (in which case, you can use this Stratagem three times).",
								"id": "000002327014",
								"field9": "",
								"keys": [
									"bubonic astartes",
									"bubonic",
									"astartes"
								],
								"activate": [
									"Before battle"
								],
								"descText": "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"tooltip00377\" data-tooltip-content=\"#tooltip_content00377\" data-tooltip-anchor=\"#tooltip_content00377\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span></span> model from your army that has the word ‘Champion’ in their profile and give them one of the following <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Relics-of-Decay\">Relics of Decay</a> (this must be a Relic they could have): <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Reaper-of-Glorious-Entropy\">Reaper of Glorious Entropy</a>; <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Skull-of-Glothila\">Plague Skull of Glothila</a>; <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plaguebringer\">Plaguebringer</a>; <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Suppurating-Plate\">Suppurating Plate</a>.<br><br>Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case, you can use this Stratagem twice) or an Onslaught battle (in which case, you can use this Stratagem three times)."
							},
							{
								"faction_id": "DG",
								"name": "OVERWHELMING GENEROSITY",
								"type": "Death Guard – Wargear Stratagem",
								"cp_cost": "1",
								"legend": "Unholy filth gushes from Nurgle’s faithful into their guns until the armaments threaten to burst like bloated corpses.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to shoot. Until the end of the phase, add 6\" to the Range characteristic of <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapons\">plague weapons</a> models in that unit are equipped with.",
								"id": "000002327030",
								"field9": "",
								"keys": [
									"death",
									"guard"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to shoot. Until the end of the phase, add 6\" to the Range characteristic of <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapons\">plague weapons</a> models in that unit are equipped with."
							},
							{
								"faction_id": "DG",
								"name": "VERMID WHISPERS",
								"type": "Death Guard – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The compound eyes and keening whispers of countless daemonic flies help guide these warriors’ aim.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00369\" data-tooltip-content=\"#tooltip_content00369\" data-tooltip-anchor=\"#tooltip_content00369\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">TERMINATOR</span></span> unit from your army is selected to shoot, or in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">TERMINATOR</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attack’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
								"id": "000002327005",
								"field9": "",
								"keys": [
									"death guard terminator",
									"death",
									"guard",
									"terminator",
									"death",
									"guard",
									"terminator"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00369\" data-tooltip-content=\"#tooltip_content00369\" data-tooltip-anchor=\"#tooltip_content00369\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">TERMINATOR</span></span> unit from your army is selected to shoot, or in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">TERMINATOR</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attack’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>."
							},
							{
								"faction_id": "DG",
								"name": "CALLOUS DISREGARD",
								"type": "Terminus Est Assault Force – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "Even when the hordes at the fore of an assault force have reached the enemy lines, the second wave simply opens fire, caring little for whether their shots hit friend or foe.",
								"source_id": "000000153",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00377\" data-tooltip-content=\"#tooltip_content00377\" data-tooltip-anchor=\"#tooltip_content00377\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span></span> <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army that is eligible to shoot.<br><ul><li>Until the end of the turn, models in that unit can target enemy units within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of friendly <span class=\"tooltip03020\" data-tooltip-content=\"#tooltip_content03020\" data-tooltip-anchor=\"#tooltip_content03020\"><span class=\"kwb\">POXWALKERS</span></span> or <span class=\"tooltip03351\" data-tooltip-content=\"#tooltip_content03351\" data-tooltip-anchor=\"#tooltip_content03351\"><span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span></span> units from your army.</li><li>Each time a model in that unit makes an attack against an enemy unit within Engagement Range of a friendly <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit, subtract 1 from the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>, and if the hit roll is not successful, that attack scores a hit against that <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit instead.</li></ul>",
								"id": "000005448005",
								"field9": "",
								"keys": [
									"bubonic astartes",
									"poxwalkers",
									"plague followers",
									"bubonic",
									"astartes",
									"terminus",
									"est",
									"assault",
									"force",
									"poxwalkers",
									"plague",
									"followers",
									"poxwalkers",
									"plague",
									"followers",
									"poxwalkers",
									"plague",
									"followers"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00377\" data-tooltip-content=\"#tooltip_content00377\" data-tooltip-anchor=\"#tooltip_content00377\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span></span> <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army that is eligible to shoot.<br><ul><li>Until the end of the turn, models in that unit can target enemy units within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of friendly <span class=\"tooltip03020\" data-tooltip-content=\"#tooltip_content03020\" data-tooltip-anchor=\"#tooltip_content03020\"><span class=\"kwb\">POXWALKERS</span></span> or <span class=\"tooltip03351\" data-tooltip-content=\"#tooltip_content03351\" data-tooltip-anchor=\"#tooltip_content03351\"><span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span></span> units from your army.</li><li>Each time a model in that unit makes an attack against an enemy unit within Engagement Range of a friendly <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit, subtract 1 from the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>, and if the hit roll is not successful, that attack scores a hit against that <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit instead.</li></ul>"
							},
							{
								"faction_id": "DG",
								"name": "PESTILENTIAL DROP",
								"type": "Terminus Est Assault Force – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "Assault force troops arrive on the battlefield amid billowing clouds of pestilence, diseased Drop Pod exhaust fumes, the leaking effluence of landing crafts and rot blooms expelled directly from their foetid teleportation chambers.",
								"source_id": "000000153",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your Movement phases, when you set up a <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army on the battlefield using the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Army-of-Renown:-Terminus-Est-Assault-Force\">Outbreak Assault</a> or <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Teleport-Strike-1\">Teleport Strike</a> ability. Select one <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion of Nurgle</a> ability that unit has; until the end of the turn, the Contagion Range of that ability is 12\" for that unit. This is not cumulative with any other abilities that increase <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion Range</a>.",
								"id": "000005448004",
								"field9": "",
								"keys": [
									"terminus",
									"est",
									"assault",
									"force"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your Movement phases, when you set up a <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army on the battlefield using the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Army-of-Renown:-Terminus-Est-Assault-Force\">Outbreak Assault</a> or <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Teleport-Strike-1\">Teleport Strike</a> ability. Select one <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion of Nurgle</a> ability that unit has; until the end of the turn, the Contagion Range of that ability is 12\" for that unit. This is not cumulative with any other abilities that increase <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion Range</a>."
							},
							{
								"faction_id": "DG",
								"name": "HAZE OF CORRUPTION",
								"type": "Death Guard – Battle Tactic Stratagem",
								"cp_cost": "2",
								"legend": "The close combat weapons of many Death Guard warriors are coated with terrible venoms. When they swing these weapons, the air is filled with corruption that can infect those nearby.",
								"source_id": "",
								"description": "Use this <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Stratagems\">Stratagem</a> in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00370\" data-tooltip-content=\"#tooltip_content00370\" data-tooltip-anchor=\"#tooltip_content00370\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by a model in that unit, any excess damage inflicted by that attack is not lost and is instead suffered by another model in that unit (do not make a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a> for that model). This continues until there is no excess damage remaining.",
								"id": "000002327006",
								"field9": "",
								"keys": [
									"death guard core",
									"death",
									"guard",
									"core"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Stratagems\">Stratagem</a> in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00370\" data-tooltip-content=\"#tooltip_content00370\" data-tooltip-anchor=\"#tooltip_content00370\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by a model in that unit, any excess damage inflicted by that attack is not lost and is instead suffered by another model in that unit (do not make a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a> for that model). This continues until there is no excess damage remaining."
							},
							{
								"faction_id": "DG",
								"name": "FLASH OUTBREAK",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "On occasion a contagion of Nurgle will flare up brilliantly in an all-consuming wave of infection.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00379\" data-tooltip-content=\"#tooltip_content00379\" data-tooltip-anchor=\"#tooltip_content00379\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span></span> unit with the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagions of Nurgle</a> ability from your army:<br><ul><li>If there are any other <span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span> units from your army on the battlefield that have any <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion abilities</a> that the selected unit does not have, then until the start of your next Command phase, the selected unit has all of the same Contagion abilities (this is in addition to the ones it already has).</li><li>Until the start of your next Command phase, units from your army count the battle round number as one higher than the current battle round number for the purpose of determining the Contagion range of any Contagion abilities they have.</li></ul>",
								"id": "000002327026",
								"field9": "",
								"keys": [
									"&lt;plague company&gt;",
									"p",
									"company&gt;",
									"p",
									"company&gt;"
								],
								"activate": [
									"Command phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00379\" data-tooltip-content=\"#tooltip_content00379\" data-tooltip-anchor=\"#tooltip_content00379\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span></span> unit with the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagions of Nurgle</a> ability from your army:<br><ul><li>If there are any other <span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span> units from your army on the battlefield that have any <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion abilities</a> that the selected unit does not have, then until the start of your next Command phase, the selected unit has all of the same Contagion abilities (this is in addition to the ones it already has).</li><li>Until the start of your next Command phase, units from your army count the battle round number as one higher than the current battle round number for the purpose of determining the Contagion range of any Contagion abilities they have.</li></ul>"
							},
							{
								"faction_id": "DG",
								"name": "BREAK THEIR SPIRITS",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Terminators are terrifying foes to face. When Death Guard Terminators slice opponents in half or unleash plague weapons that turn living beings to pools of foetid slush, they shatter the spirits of those who still live and stand against them.",
								"source_id": "",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00369\" data-tooltip-content=\"#tooltip_content00369\" data-tooltip-anchor=\"#tooltip_content00369\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">TERMINATOR</span></span> model from your army destroys a model in an enemy <span class=\"kwb\">INFANTRY</span>, <span class=\"kwb\">BEASTS</span> or <span class=\"kwb\">SWARM</span> unit. Until the end of the turn, subtract 4 from the Leadership characteristic of models in that unit.",
								"id": "000002327023",
								"field9": "",
								"keys": [
									"death guard terminator",
									"death",
									"guard",
									"terminator",
									"infantry",
									"beasts",
									"swarm"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00369\" data-tooltip-content=\"#tooltip_content00369\" data-tooltip-anchor=\"#tooltip_content00369\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">TERMINATOR</span></span> model from your army destroys a model in an enemy <span class=\"kwb\">INFANTRY</span>, <span class=\"kwb\">BEASTS</span> or <span class=\"kwb\">SWARM</span> unit. Until the end of the turn, subtract 4 from the Leadership characteristic of models in that unit."
							},
							{
								"faction_id": "DG",
								"name": "CREEPING BLIGHT",
								"type": "Death Guard – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "This warp-plague spreads fingers of corrosion through armour, flesh, bone and even air with equal virulence.",
								"source_id": "",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapon\">plague weapon</a>, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, that attack has an Armour Penetration characteristic of -4.",
								"id": "000002327003",
								"field9": "",
								"keys": [
									"death",
									"guard"
								],
								"activate": [
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapon\">plague weapon</a>, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, that attack has an Armour Penetration characteristic of -4."
							},
							{
								"faction_id": "DG",
								"name": "CLOUD OF FLIES",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "2/4",
								"legend": "With a thrumming roar, a thick cloud of daemon flies whirls around the Death Guard and obscures them from the enemy's sight.",
								"source_id": "",
								"description": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00371\" data-tooltip-content=\"#tooltip_content00371\" data-tooltip-anchor=\"#tooltip_content00371\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, each time an enemy model shoots, if that unit is not the closest eligible target or within 12\" of that model, then until that shooting is resolved, that model cannot target that unit. In addition, until the end of the phase, if the selected unit has the <span class=\"redfont\">Bodyguard</span> ability, it loses that ability. If the selected unit has the <span class=\"kwb\">TERMINATOR</span> keyword, this Stratagem costs 4CP; otherwise, it costs 2CP.",
								"id": "000002327022",
								"field9": "",
								"keys": [
									"bubonic astartes infantry",
									"bubonic",
									"astartes",
									"infantry",
									"bodyguard",
									"terminator"
								],
								"activate": [
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00371\" data-tooltip-content=\"#tooltip_content00371\" data-tooltip-anchor=\"#tooltip_content00371\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, each time an enemy model shoots, if that unit is not the closest eligible target or within 12\" of that model, then until that shooting is resolved, that model cannot target that unit. In addition, until the end of the phase, if the selected unit has the <span class=\"redfont\">Bodyguard</span> ability, it loses that ability. If the selected unit has the <span class=\"kwb\">TERMINATOR</span> keyword, this Stratagem costs 4CP; otherwise, it costs 2CP."
							}
						],
						"waha": {
							"id": "000001371",
							"name": "Deathshroud Terminators",
							"link": "https://wahapedia.ruhttps://wahapedia.ru/wh40k9ed/factions/death-guard/Deathshroud-Terminators",
							"faction_id": "DG",
							"source_id": "000000014",
							"role": "Elites",
							"unit_composition": "If this unit contains 4 or more models, it has <b>Power Rating 14</b>. Every model is equipped with: plaguespurt gauntlet; manreaper.",
							"transport": "",
							"power_points": "7",
							"priest": "",
							"psyker": "",
							"open_play_only": "false",
							"crusade_only": "false",
							"virtual": "false",
							"Cost": "",
							"cost_per_unit": "Нет",
							"field17": ""
						}
					},
					{
						"name": "Plague Marines",
						"slot": "Elites",
						"faction": [
							"<Legion>",
							"Nurgle",
							"Chaos",
							"Heretic Astartes"
						],
						"keywords": [
							"infantry",
							"plague marines"
						],
						"models": [{
								"name": "Plague Champion",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Boltgun",
										"amount": "3",
										"Range": "24\"",
										"Type": "Rapid Fire 1",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Blight grenades",
										"amount": "3",
										"Range": "6\"",
										"Type": "Grenade D6",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Blast."
									},
									{
										"name": "Krak grenades",
										"amount": "3",
										"Range": "6\"",
										"Type": "Grenade 1",
										"S": "6",
										"AP": "-1",
										"D": "D3",
										"Abilities": "-"
									},
									{
										"name": "Plague knife",
										"amount": "3",
										"Range": "Melee",
										"Type": "Melee",
										"S": "User",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon"
									},
									{
										"name": "Plague knife",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "User",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon"
									},
									{
										"name": "Blight grenades",
										"amount": "1",
										"Range": "6\"",
										"Type": "Grenade D6",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Blast."
									},
									{
										"name": "Krak grenades",
										"amount": "1",
										"Range": "6\"",
										"Type": "Grenade 1",
										"S": "6",
										"AP": "-1",
										"D": "D3",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "5",
									"WS": "3",
									"BS": "3",
									"S": "4",
									"T": "5",
									"W": "2",
									"A": "3",
									"Ld": "8",
									"Sv": "3"
								}
							},
							{
								"name": "Plague Marine",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Boltgun",
										"amount": "3",
										"Range": "24\"",
										"Type": "Rapid Fire 1",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Blight grenades",
										"amount": "3",
										"Range": "6\"",
										"Type": "Grenade D6",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Blast."
									},
									{
										"name": "Krak grenades",
										"amount": "3",
										"Range": "6\"",
										"Type": "Grenade 1",
										"S": "6",
										"AP": "-1",
										"D": "D3",
										"Abilities": "-"
									},
									{
										"name": "Plague knife",
										"amount": "3",
										"Range": "Melee",
										"Type": "Melee",
										"S": "User",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon"
									},
									{
										"name": "Plague knife",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "User",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon"
									},
									{
										"name": "Blight grenades",
										"amount": "1",
										"Range": "6\"",
										"Type": "Grenade D6",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Blast."
									},
									{
										"name": "Krak grenades",
										"amount": "1",
										"Range": "6\"",
										"Type": "Grenade 1",
										"S": "6",
										"AP": "-1",
										"D": "D3",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"statlines": {
									"M": "5",
									"WS": "3",
									"BS": "3",
									"S": "4",
									"T": "5",
									"W": "2",
									"A": "2",
									"Ld": "7",
									"Sv": "3"
								}
							}
						],
						"rules": [{
								"name": "Contagions of Nurgle",
								"desc": "If every unit from your army has the DEATH GUARD keyword (excluding UNALIGNED units), this unit gains the following ability:\n\nNurgle's Gift (Contagion): While an enemy unit is within Contagion Range of this unit (see below), subtract 1 from the Toughness characteristic of models in that unit.",
								"subkeys": [
									"DEATH",
									"GUARD",
									"UNALIGNED"
								],
								"targets": [
									"DEATH GUARD",
									"UNALIGNED"
								],
								"phases": []
							},
							{
								"name": "Inexorable Advance",
								"desc": "- This unit counts as having Remained Stationary if it did not Fall Back or Advance in your previous Movement phase.\n- If this unit has the VEHICLE keyword, it does not suffer the penalty incurred to its hit rolls for firing Heavy weapons at enemy units that are within Engagement Range of it.\n- If this unit has the INFANTRY keyword, it can ignore any or all modifiers to its Move characteristic, Advance rolls and charge rolls.",
								"subkeys": [
									"VEHICLE",
									"INFANTRY"
								],
								"targets": [
									"VEHICLE",
									"INFANTRY"
								],
								"phases": [
									"Movement"
								]
							},
							{
								"name": "Objective Secured",
								"desc": "A player controls an objective marker if they have any models with this ability within range of that objective marker, even if there are more enemy models within range of that objective marker. If an enemy model within range of an objective marker also has this ability (or a similar ability), then the objective marker is controlled by the player who has the most models within range of that objective marker as normal.",
								"subkeys": [
									"A"
								],
								"targets": null,
								"phases": []
							},
							{
								"name": "Malicious Volleys",
								"desc": "Instead of following the normal rules for Rapid Fire weapons, models in this unit shooting Rapid Fire bolt weapons make double the number of attacks if any of the following apply:\n• The shooting model’s target is within half the weapon’s range.\n• The shooting model is Infantry and its unit Remained\nStationary in your previous Movement phase.\n• The shooting model is a Terminator.\nFor the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon (as defined on page 88) with the Rapid Fire type.",
								"subkeys": null,
								"targets": null,
								"phases": [
									"Movement"
								]
							},
							{
								"name": "Vectors of Death",
								"desc": "A Plague Marine equipped with 2 melee plague weapons has an Attacks characteristic of 3.",
								"subkeys": [
									"A"
								],
								"targets": null,
								"phases": []
							},
							{
								"name": "Disgustingly Resilient",
								"desc": "Each time an attack is allocated to a model in this unit, subtract 1 from the Damage characteristic of that attack (to a minimum of 1).",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Remorseless",
								"desc": "Each time a Combat Attrition test is taken for this unit, ignore any or all modifiers.",
								"subkeys": null,
								"targets": null,
								"phases": []
							}
						],
						"spells": [],
						"stratagems": [{
								"faction_id": "CSM",
								"name": "EXCESS OF VIOLENCE",
								"type": "Emperor’s Children – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The visceral sensation of every fresh kill causes the warriors of the Emperor’s Children to enter an ecstatic frenzy of butchery and dismemberment.",
								"source_id": "000000161",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when you choose an <span class=\"tooltip00305\" data-tooltip-content=\"#tooltip_content00305\" data-tooltip-anchor=\"#tooltip_content00305\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to fight with. Until the end of that phase, if an attack made by a model in that unit destroys an enemy model, the attacking model can make one additional attack against the same unit using the same weapon.",
								"id": "000003830003",
								"field9": "",
								"keys": [
									"emperor’s children infantry",
									"emperor’s",
									"children",
									"infantry"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when you choose an <span class=\"tooltip00305\" data-tooltip-content=\"#tooltip_content00305\" data-tooltip-anchor=\"#tooltip_content00305\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to fight with. Until the end of that phase, if an attack made by a model in that unit destroys an enemy model, the attacking model can make one additional attack against the same unit using the same weapon."
							},
							{
								"faction_id": "CSM",
								"name": "LET THE GALAXY BURN",
								"type": "Black Legion – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The Black Legion attack with a terrible ferocity.",
								"source_id": "000000161",
								"description": "Use this Stratagem when a <span class=\"tooltip00270\" data-tooltip-content=\"#tooltip_content00270\" data-tooltip-anchor=\"#tooltip_content00270\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00271\" data-tooltip-content=\"#tooltip_content00271\" data-tooltip-anchor=\"#tooltip_content00271\"><span class=\"kwb\">BIKER</span></span> unit from your army is picked to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase. You can re-roll all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 1 for that unit for the rest of the phase. If the unit is a <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">SPACE</span> <span class=\"kwb\">MARINES</span> unit, you can re-roll hit rolls for it instead.",
								"id": "000003298002",
								"field9": "",
								"keys": [
									"black legion infantry",
									"biker",
									"black",
									"legion",
									"infantry",
									"biker",
									"chaos",
									"space",
									"marines"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase",
									"Shooting phase"
								],
								"descText": "Use this Stratagem when a <span class=\"tooltip00270\" data-tooltip-content=\"#tooltip_content00270\" data-tooltip-anchor=\"#tooltip_content00270\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00271\" data-tooltip-content=\"#tooltip_content00271\" data-tooltip-anchor=\"#tooltip_content00271\"><span class=\"kwb\">BIKER</span></span> unit from your army is picked to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase. You can re-roll all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 1 for that unit for the rest of the phase. If the unit is a <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">SPACE</span> <span class=\"kwb\">MARINES</span> unit, you can re-roll hit rolls for it instead."
							},
							{
								"faction_id": "CSM",
								"name": "GRANDFATHER’S BLESSINGS",
								"type": "Chaos Space Marines Stratagem",
								"cp_cost": "2",
								"legend": "Grandfather Nurgle is eager to bestow daemonic fecundity upon his faithful servants, sealing their gaping wounds with pulsating growths and replacing their spilt blood with curdling ichor.",
								"source_id": "",
								"description": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select a <span class=\"tooltip00288\" data-tooltip-content=\"#tooltip_content00288\" data-tooltip-anchor=\"#tooltip_content00288\"><span class=\"kwb\">HERETIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">NURGLE</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00289\" data-tooltip-content=\"#tooltip_content00289\" data-tooltip-anchor=\"#tooltip_content00289\"><span class=\"kwb\">BIKER</span></span> unit. One model in the unit heals D3 wounds. If there are no wounded models in the unit, a single model in the unit that was slain earlier in the battle is returned to the unit with a single wound remaining.",
								"id": "000002235008",
								"field9": "",
								"keys": [
									"heretic astartes nurgle infantry",
									"biker",
									"heretic",
									"astartes",
									"nurgle",
									"infantry",
									"biker"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select a <span class=\"tooltip00288\" data-tooltip-content=\"#tooltip_content00288\" data-tooltip-anchor=\"#tooltip_content00288\"><span class=\"kwb\">HERETIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">NURGLE</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00289\" data-tooltip-content=\"#tooltip_content00289\" data-tooltip-anchor=\"#tooltip_content00289\"><span class=\"kwb\">BIKER</span></span> unit. One model in the unit heals D3 wounds. If there are no wounded models in the unit, a single model in the unit that was slain earlier in the battle is returned to the unit with a single wound remaining."
							},
							{
								"faction_id": "CSM",
								"name": "APOPLECTIC FRENZY",
								"type": "World Eaters – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Howling in rage, World Eaters surge towards the foe.",
								"source_id": "000000161",
								"description": "Use this Stratagem during deployment, when you set up a <span class=\"tooltip00337\" data-tooltip-content=\"#tooltip_content00337\" data-tooltip-anchor=\"#tooltip_content00337\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first.",
								"id": "000003831003",
								"field9": "",
								"keys": [
									"world eaters infantry",
									"world",
									"eaters",
									"infantry"
								],
								"activate": [
									"During deployment"
								],
								"descText": "Use this Stratagem during deployment, when you set up a <span class=\"tooltip00337\" data-tooltip-content=\"#tooltip_content00337\" data-tooltip-anchor=\"#tooltip_content00337\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first."
							},
							{
								"faction_id": "CSM",
								"name": "VETERANS OF THE LONG WAR",
								"type": "Chaos Space Marines Stratagem",
								"cp_cost": "1",
								"legend": "The hatred of the Traitor Legions has burned for millennia.",
								"source_id": "",
								"description": "Use this Stratagem when a <span class=\"tooltip00293\" data-tooltip-content=\"#tooltip_content00293\" data-tooltip-anchor=\"#tooltip_content00293\"><span class=\"kwb\">HERETIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00299\" data-tooltip-content=\"#tooltip_content00299\" data-tooltip-anchor=\"#tooltip_content00299\"><span class=\"kwb\">BIKER</span></span> unit is selected to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase (excluding units from Renegade Chapters). You can add 1 to all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound rolls</a> made for the unit until the end of the phase.",
								"id": "000002235007",
								"field9": "",
								"keys": [
									"heretic astartes infantry",
									"biker",
									"heretic",
									"astartes",
									"infantry",
									"biker"
								],
								"activate": [
									"Shooting phase",
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem when a <span class=\"tooltip00293\" data-tooltip-content=\"#tooltip_content00293\" data-tooltip-anchor=\"#tooltip_content00293\"><span class=\"kwb\">HERETIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00299\" data-tooltip-content=\"#tooltip_content00299\" data-tooltip-anchor=\"#tooltip_content00299\"><span class=\"kwb\">BIKER</span></span> unit is selected to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase (excluding units from Renegade Chapters). You can add 1 to all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound rolls</a> made for the unit until the end of the phase."
							},
							{
								"faction_id": "CSM",
								"name": "THE MASTER IS WATCHING",
								"type": "Creations of Bile – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Feeling Bile’s expectant gaze from across the battlefield, his enhanced warriors strive slavishly to impress.",
								"source_id": "000000161",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) that is visible to and within 12\" of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> is chosen to shoot or fight with. Until the end of that phase, when resolving an attack made by a model in that unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
								"id": "000004296005",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"chaos cultists",
									"creations",
									"of",
									"bile",
									"infantry",
									"chaos",
									"cultists",
									"warlord"
								],
								"activate": [
									"Shooting phase",
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) that is visible to and within 12\" of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> is chosen to shoot or fight with. Until the end of that phase, when resolving an attack made by a model in that unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>."
							},
							{
								"faction_id": "CSM",
								"name": "FROM THE NIGHT",
								"type": "Night Lords – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The sons of Nostramo strike from the dark.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is entirely on or within a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Terrain-Features-1\">terrain</a> feature. Until the end of the turn:<br><ul><li>When a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made for that unit, add 2 to the result.</li><li>When resolving an attack made with a melee weapon by a model in that unit, add 1 to the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.</li></ul>",
								"id": "000003827007",
								"field9": "",
								"keys": [
									"night lords infantry",
									"night",
									"lords",
									"infantry"
								],
								"activate": [
									"Charge phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is entirely on or within a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Terrain-Features-1\">terrain</a> feature. Until the end of the turn:<br><ul><li>When a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made for that unit, add 2 to the result.</li><li>When resolving an attack made with a melee weapon by a model in that unit, add 1 to the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.</li></ul>"
							},
							{
								"faction_id": "CSM",
								"name": "DERMAL CHITINATION",
								"type": "Creations of Bile – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "These fighters secrete a hardening resin through their skin, temporarily toughening their already resilient hides.",
								"source_id": "000000161",
								"description": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> when a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) is selected as the target of any attacks. Add 1 to that unit’s Toughness characteristic until the end of that phase.",
								"id": "000004296006",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"chaos cultists",
									"creations",
									"of",
									"bile",
									"infantry",
									"chaos",
									"cultists"
								],
								"activate": [
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> when a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) is selected as the target of any attacks. Add 1 to that unit’s Toughness characteristic until the end of that phase."
							},
							{
								"faction_id": "CSM",
								"name": "TAKEN ALIVE",
								"type": "Creations of Bile – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "To be snatched away by Fabius Bile and his creations for experimentation is an altogether nightmarish fate.",
								"source_id": "000000161",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a> when a model from an enemy unit is destroyed as the result of an attack made with a melee weapon by a model from a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. For the rest of the battle, when taking a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Morale-Tests\">Morale test</a> for that enemy model’s unit, each model in that unit that was destroyed that turn is treated as two models for the purposes of taking that Morale test. Each enemy unit can only be selected for this Stratagem once.",
								"id": "000004296007",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"creations",
									"of",
									"bile",
									"infantry"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a> when a model from an enemy unit is destroyed as the result of an attack made with a melee weapon by a model from a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. For the rest of the battle, when taking a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Morale-Tests\">Morale test</a> for that enemy model’s unit, each model in that unit that was destroyed that turn is treated as two models for the purposes of taking that Morale test. Each enemy unit can only be selected for this Stratagem once."
							},
							{
								"faction_id": "CSM",
								"name": "RENASCENT INFILTRATION",
								"type": "Alpha Legion – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Disappear and reappear for the final strike.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is more than 3\" away from any enemy models (you cannot select a unit that arrived as <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">reinforcements</a> this turn). Remove that unit from the battlefield. At the end of your next Movement phase, set up that unit on the battlefield again, anywhere that is more than 9\" away from any enemy models. Any models that cannot be set up in this way are destroyed. If the battle ends before that unit is set back up, it is destroyed.",
								"id": "000003828006",
								"field9": "",
								"keys": [
									"alpha legion infantry",
									"alpha",
									"legion",
									"infantry"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is more than 3\" away from any enemy models (you cannot select a unit that arrived as <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">reinforcements</a> this turn). Remove that unit from the battlefield. At the end of your next Movement phase, set up that unit on the battlefield again, anywhere that is more than 9\" away from any enemy models. Any models that cannot be set up in this way are destroyed. If the battle ends before that unit is set back up, it is destroyed."
							},
							{
								"faction_id": "CSM",
								"name": "FORWARD OPERATIVES",
								"type": "Alpha Legion – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "The Alpha Legion are as illusive as a shadow.",
								"source_id": "000000161",
								"description": "Use this Stratagem during deployment, when you set up an <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
								"id": "000003828002",
								"field9": "",
								"keys": [
									"alpha legion infantry",
									"alpha",
									"legion",
									"infantry"
								],
								"activate": [
									"During deployment"
								],
								"descText": "Use this Stratagem during deployment, when you set up an <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle."
							},
							{
								"faction_id": "CSM",
								"name": "IN MIDNIGHT CLAD",
								"type": "Night Lords Stratagem",
								"cp_cost": "1",
								"legend": "Having fought countless campaigns of terror in complete darkness, the Night Lords know how to make an ally of the shadows.",
								"source_id": "",
								"description": "Use this Stratagem when a <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit is targeted by a shooting attack. For the rest of the phase, your opponent must subtract 1 from all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> that target that unit.",
								"id": "000002235024",
								"field9": "",
								"keys": [
									"night lords infantry",
									"night",
									"lords",
									"infantry"
								],
								"activate": [
									"Being targeted"
								],
								"descText": "Use this Stratagem when a <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit is targeted by a shooting attack. For the rest of the phase, your opponent must subtract 1 from all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> that target that unit."
							},
							{
								"faction_id": "CSM",
								"name": "FORWARD OPERATIVES",
								"type": "Alpha Legion Stratagem",
								"cp_cost": "1",
								"legend": "The deceitful strategies of the Alpha Legion are as illusive as a shadow and as tangled as a nest of vipers.",
								"source_id": "",
								"description": "Use this Stratagem during deployment, when you set up an <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
								"id": "000002235019",
								"field9": "",
								"keys": [
									"alpha legion infantry",
									"alpha",
									"legion",
									"infantry"
								],
								"activate": [
									"During deployment"
								],
								"descText": "Use this Stratagem during deployment, when you set up an <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle."
							},
							{
								"faction_id": "CSM",
								"name": "EXCESS OF VIOLENCE",
								"type": "Emperor’s Children Stratagem",
								"cp_cost": "1",
								"legend": "The visceral sensation of every fresh kill causes the warriors of the Emperor’s Children to enter an ecstatic frenzy of butchery and dismemberment.",
								"source_id": "",
								"description": "Use this Stratagem just before an <span class=\"tooltip00305\" data-tooltip-content=\"#tooltip_content00305\" data-tooltip-anchor=\"#tooltip_content00305\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> <span class=\"kwb\">INFANTRY</span></span> unit attacks in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Each time a model in your unit slays an enemy model, it can immediately make another <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> using the same weapon at the same target (these bonus attacks cannot themselves generate any further attacks).",
								"id": "000002235023",
								"field9": "",
								"keys": [
									"emperor’s children infantry",
									"emperor’s",
									"children",
									"infantry"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem just before an <span class=\"tooltip00305\" data-tooltip-content=\"#tooltip_content00305\" data-tooltip-anchor=\"#tooltip_content00305\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> <span class=\"kwb\">INFANTRY</span></span> unit attacks in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Each time a model in your unit slays an enemy model, it can immediately make another <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> using the same weapon at the same target (these bonus attacks cannot themselves generate any further attacks)."
							},
							{
								"faction_id": "CSM",
								"name": "WE CANNOT FAIL",
								"type": "Flawless Host – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The self-belief and desire for perfection that drives the warriors of the Flawless Host is such that their fighting skills far exceed those of less disciplined forces.",
								"source_id": "000000161",
								"description": "Use this Stratagem when you pick a <span class=\"tooltip00310\" data-tooltip-content=\"#tooltip_content00310\" data-tooltip-anchor=\"#tooltip_content00310\"><span class=\"kwb\">FLAWLESS</span> <span class=\"kwb\">HOST</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to fight with in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase you can re-roll <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> for attacks made by that unit.",
								"id": "000003299007",
								"field9": "",
								"keys": [
									"flawless host infantry",
									"flawless",
									"host",
									"infantry"
								],
								"activate": [
									"Fight phase"
								],
								"descText": "Use this Stratagem when you pick a <span class=\"tooltip00310\" data-tooltip-content=\"#tooltip_content00310\" data-tooltip-anchor=\"#tooltip_content00310\"><span class=\"kwb\">FLAWLESS</span> <span class=\"kwb\">HOST</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to fight with in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase you can re-roll <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> for attacks made by that unit."
							},
							{
								"faction_id": "CSM",
								"name": "MONSTROUS VISAGES",
								"type": "Creations of Bile – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Bile’s experimental ministrations have left these warriors as freakish monsters. Cursed with clusters of compound eyes, distended, fang-stuffed jaws or myriad other grotesqueries, they are hideous to behold.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of any phase. Select one <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>). Until the end of the turn, that unit has the following ability: ‘<span class=\"redfont\">Monstrous Visages (Aura)</span><b>:</b> While an enemy model is within 6\" of this unit, each time that model makes an attack, subtract 1 from the hit roll.’",
								"id": "000004296003",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"chaos cultists",
									"creations",
									"of",
									"bile",
									"infantry",
									"chaos",
									"cultists",
									"monstrous visages (aura)"
								],
								"activate": [
									"Enemy Morale phase",
									"Movement phase",
									"Enemy Fight phase",
									"Psychic phase",
									"Enemy Charge phase",
									"Shooting phase",
									"Charge phase",
									"Fight phase",
									"Morale phase",
									"Enemy Movement phase",
									"Enemy Psychic phase",
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem at the start of any phase. Select one <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>). Until the end of the turn, that unit has the following ability: ‘<span class=\"redfont\">Monstrous Visages (Aura)</span><b>:</b> While an enemy model is within 6\" of this unit, each time that model makes an attack, subtract 1 from the hit roll.’"
							},
							{
								"faction_id": "CSM",
								"name": "LET THE GALAXY BURN",
								"type": "Black Legion Stratagem",
								"cp_cost": "1",
								"legend": "Drawing upon millennia of festering bitterness and hate, the Black Legion attack with a ferocity that is terrible to behold.",
								"source_id": "",
								"description": "Use this Stratagem when a <span class=\"tooltip00270\" data-tooltip-content=\"#tooltip_content00270\" data-tooltip-anchor=\"#tooltip_content00270\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00271\" data-tooltip-content=\"#tooltip_content00271\" data-tooltip-anchor=\"#tooltip_content00271\"><span class=\"kwb\">BIKER</span></span> unit is selected to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase. You can re-roll all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 1 for that unit for the rest of the phase. If the unit is a <a href=\"https://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/Chaos-Space-Marines\">Chaos Space Marine squad</a>, you can re-roll all failed hit rolls for it instead.",
								"id": "000002235025",
								"field9": "",
								"keys": [
									"black legion infantry",
									"biker",
									"black",
									"legion",
									"infantry",
									"biker"
								],
								"activate": [
									"Shooting phase",
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem when a <span class=\"tooltip00270\" data-tooltip-content=\"#tooltip_content00270\" data-tooltip-anchor=\"#tooltip_content00270\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00271\" data-tooltip-content=\"#tooltip_content00271\" data-tooltip-anchor=\"#tooltip_content00271\"><span class=\"kwb\">BIKER</span></span> unit is selected to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase. You can re-roll all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 1 for that unit for the rest of the phase. If the unit is a <a href=\"https://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/Chaos-Space-Marines\">Chaos Space Marine squad</a>, you can re-roll all failed hit rolls for it instead."
							},
							{
								"faction_id": "CSM",
								"name": "COMBAT ELIXIRS",
								"type": "Emperor’s Children – Requisition Stratagem",
								"cp_cost": "2",
								"legend": "Concoctions of hideous euphoria empower the minds of these sensationalist warriors.",
								"source_id": "000000161",
								"description": "Use this Stratagem before the battle. Select one <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> unit from your army that is not a <span class=\"tooltip00304\" data-tooltip-content=\"#tooltip_content00304\" data-tooltip-anchor=\"#tooltip_content00304\"><span class=\"kwb\">VEHICLE</span></span> or <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span>, then select one of the following effects to apply to models in that unit until the end of the battle:<br><ul><li>+1 to Attacks characteristic</li><li>+1 to Strength characteristic</li><li>+2\" to Move characteristic</li><li>+1 to Toughness characteristic</li></ul>You can only use this Stratagem once per battle.",
								"id": "000003830002",
								"field9": "",
								"keys": [
									"vehicle",
									"chaos cultist",
									"emperor’s",
									"children",
									"vehicle",
									"chaos",
									"cultist"
								],
								"activate": [
									"Before battle"
								],
								"descText": "Use this Stratagem before the battle. Select one <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> unit from your army that is not a <span class=\"tooltip00304\" data-tooltip-content=\"#tooltip_content00304\" data-tooltip-anchor=\"#tooltip_content00304\"><span class=\"kwb\">VEHICLE</span></span> or <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span>, then select one of the following effects to apply to models in that unit until the end of the battle:<br><ul><li>+1 to Attacks characteristic</li><li>+1 to Strength characteristic</li><li>+2\" to Move characteristic</li><li>+1 to Toughness characteristic</li></ul>You can only use this Stratagem once per battle."
							},
							{
								"faction_id": "CSM",
								"name": "MACROTENSILE SINEWS",
								"type": "Creations of Bile – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Injecting auto-stimulants into their enhanced muscles, these warriors leap and bound across the battlefield.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) from your army. Until the end of the turn:<br><ul><li>That unit is eligible to declare charge with in a turn which they Advanced.</li><li>Add 1 to <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> and <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge rolls</a> made for that unit.</li></ul>",
								"id": "000004296004",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"chaos cultists",
									"creations",
									"of",
									"bile",
									"infantry",
									"chaos",
									"cultists"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) from your army. Until the end of the turn:<br><ul><li>That unit is eligible to declare charge with in a turn which they Advanced.</li><li>Add 1 to <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> and <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge rolls</a> made for that unit.</li></ul>"
							},
							{
								"faction_id": "CSM",
								"name": "CONCEAL",
								"type": "Alpha Legion – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "These clandestine warriors will disappear at a moment’s notice.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of that phase, enemy models can only target that unit if it is the closest visible target.",
								"id": "000003828003",
								"field9": "",
								"keys": [
									"alpha legion infantry",
									"alpha",
									"legion",
									"infantry"
								],
								"activate": [
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of that phase, enemy models can only target that unit if it is the closest visible target."
							},
							{
								"faction_id": "CSM",
								"name": "PRESCIENCE",
								"type": "Scourged – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "Tzeentch has gifted the Scourged with a measure of foresight, allowing them to read the enemy’s signals and know exactly where they will strike.",
								"source_id": "000000161",
								"description": "Use this Stratagem after your opponent sets up a unit that is arriving on the battlefield as <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">reinforcements</a>. Pick one <span class=\"tooltip00321\" data-tooltip-content=\"#tooltip_content00321\" data-tooltip-anchor=\"#tooltip_content00321\"><span class=\"kwb\">SCOURGED</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is within 12\" of that enemy unit. Your unit can immediately shoot at that enemy unit as if it were your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>.",
								"id": "000003299006",
								"field9": "",
								"keys": [
									"scourged infantry",
									"scourged",
									"infantry"
								],
								"activate": [
									"Enemy Movement phase"
								],
								"descText": "Use this Stratagem after your opponent sets up a unit that is arriving on the battlefield as <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">reinforcements</a>. Pick one <span class=\"tooltip00321\" data-tooltip-content=\"#tooltip_content00321\" data-tooltip-anchor=\"#tooltip_content00321\"><span class=\"kwb\">SCOURGED</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is within 12\" of that enemy unit. Your unit can immediately shoot at that enemy unit as if it were your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>."
							},
							{
								"faction_id": "CSM",
								"name": "TANK HUNTERS",
								"type": "Iron Warriors – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "No armour is safe from the guns of the IV Legion.",
								"source_id": "000000161",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when you choose an <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) to shoot or fight with. Select one enemy <span class=\"kwb\">VEHICLE</span> unit. Until the end of that phase, when resolving an attack made by a model in that <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> unit against the selected unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
								"id": "000003829006",
								"field9": "",
								"keys": [
									"chaos cultists",
									"iron",
									"warriors",
									"chaos",
									"cultists",
									"vehicle",
									"iron",
									"warriors"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase",
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when you choose an <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) to shoot or fight with. Select one enemy <span class=\"kwb\">VEHICLE</span> unit. Until the end of that phase, when resolving an attack made by a model in that <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> unit against the selected unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>."
							},
							{
								"faction_id": "CSM",
								"name": "STOKE THE NAILS",
								"type": "World Eaters – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Aggression stimulators implanted into the brains of the World Eaters drive them into uncontrollable rages.",
								"source_id": "000000161",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00337\" data-tooltip-content=\"#tooltip_content00337\" data-tooltip-anchor=\"#tooltip_content00337\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00338\" data-tooltip-content=\"#tooltip_content00338\" data-tooltip-anchor=\"#tooltip_content00338\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">BIKER</span></span> unit from your army that is not a <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span> is chosen to fight with. Until the end of that phase:<br><ul><li>That unit’s <a href=\"https://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/#Death-to-the-False-Emperor\">Death to the False Emperor</a> ability takes effect when targeting any enemy units, not just <span class=\"kwb\">IMPERIUM</span> units.</li><li>When targeting <span class=\"kwb\">IMPERIUM</span> units, the ability takes effect on <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 5+.</li></ul>",
								"id": "000003831008",
								"field9": "",
								"keys": [
									"world eaters infantry",
									"world eaters biker",
									"chaos cultist",
									"world",
									"eaters",
									"infantry",
									"world",
									"eaters",
									"biker",
									"chaos",
									"cultist",
									"imperium",
									"imperium"
								],
								"activate": [
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00337\" data-tooltip-content=\"#tooltip_content00337\" data-tooltip-anchor=\"#tooltip_content00337\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00338\" data-tooltip-content=\"#tooltip_content00338\" data-tooltip-anchor=\"#tooltip_content00338\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">BIKER</span></span> unit from your army that is not a <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span> is chosen to fight with. Until the end of that phase:<br><ul><li>That unit’s <a href=\"https://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/#Death-to-the-False-Emperor\">Death to the False Emperor</a> ability takes effect when targeting any enemy units, not just <span class=\"kwb\">IMPERIUM</span> units.</li><li>When targeting <span class=\"kwb\">IMPERIUM</span> units, the ability takes effect on <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 5+.</li></ul>"
							},
							{
								"faction_id": "CSM",
								"name": "CRUEL DUELLISTS",
								"type": "Emperor’s Children – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Fulgrim’s scions are renowned for their blade-craft.",
								"source_id": "000000161",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip00303\" data-tooltip-content=\"#tooltip_content00303\" data-tooltip-anchor=\"#tooltip_content00303\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span></span> unit from your army that is not a <span class=\"tooltip00304\" data-tooltip-content=\"#tooltip_content00304\" data-tooltip-anchor=\"#tooltip_content00304\"><span class=\"kwb\">VEHICLE</span></span> or <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span> is chosen to fight with. Until the end of that phase, when resolving an attack made with a melee weapon by a model in that unit, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6 that weapon has an Armour Penetration characteristic of -3 for that attack.",
								"id": "000003830007",
								"field9": "",
								"keys": [
									"emperor’s children",
									"vehicle",
									"chaos cultist",
									"emperor’s",
									"children",
									"vehicle",
									"chaos",
									"cultist"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip00303\" data-tooltip-content=\"#tooltip_content00303\" data-tooltip-anchor=\"#tooltip_content00303\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span></span> unit from your army that is not a <span class=\"tooltip00304\" data-tooltip-content=\"#tooltip_content00304\" data-tooltip-anchor=\"#tooltip_content00304\"><span class=\"kwb\">VEHICLE</span></span> or <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span> is chosen to fight with. Until the end of that phase, when resolving an attack made with a melee weapon by a model in that unit, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6 that weapon has an Armour Penetration characteristic of -3 for that attack."
							},
							{
								"faction_id": "CSM",
								"name": "CANNON FODDER",
								"type": "Iron Warriors – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "Clog up their guns with the flesh and bones of the weak.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00313\" data-tooltip-content=\"#tooltip_content00313\" data-tooltip-anchor=\"#tooltip_content00313\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army then select one friendly <span class=\"tooltip03316\" data-tooltip-content=\"#tooltip_content03316\" data-tooltip-anchor=\"#tooltip_content03316\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span> unit wholly within 6\" of that unit. Until the end of that phase, enemy models cannot target that <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">INFANTRY</span> unit if the selected <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span> unit is a closer visible target.",
								"id": "000003829008",
								"field9": "",
								"keys": [
									"iron warriors infantry",
									"iron warriors chaos cultists",
									"iron",
									"warriors",
									"infantry",
									"iron",
									"warriors",
									"chaos",
									"cultists",
									"iron",
									"warriors",
									"infantry",
									"iron",
									"warriors",
									"chaos",
									"cultists"
								],
								"activate": [
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00313\" data-tooltip-content=\"#tooltip_content00313\" data-tooltip-anchor=\"#tooltip_content00313\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army then select one friendly <span class=\"tooltip03316\" data-tooltip-content=\"#tooltip_content03316\" data-tooltip-anchor=\"#tooltip_content03316\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span> unit wholly within 6\" of that unit. Until the end of that phase, enemy models cannot target that <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">INFANTRY</span> unit if the selected <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span> unit is a closer visible target."
							},
							{
								"faction_id": "CSM",
								"name": "IN MIDNIGHT CLAD",
								"type": "Night Lords – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Having fought countless campaigns of terror in complete darkness, the Night Lords know how to make an ally of the shadows.",
								"source_id": "000000161",
								"description": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is targeted by a shooting attack. Until the end of that phase, when resolving an attack against that unit, subtract 1 from the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
								"id": "000003827002",
								"field9": "",
								"keys": [
									"night lords infantry",
									"night",
									"lords",
									"infantry"
								],
								"activate": [
									"Being targeted"
								],
								"descText": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is targeted by a shooting attack. Until the end of that phase, when resolving an attack against that unit, subtract 1 from the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>."
							}
						],
						"waha": {
							"id": "000000950",
							"name": "Plague Marines",
							"link": "https://wahapedia.ruhttps://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/Plague-Marines",
							"faction_id": "CSM",
							"source_id": "000000012",
							"role": "Elites",
							"unit_composition": "This unit contains 1 Plague Champion and 4 Plague Marines. It can include up to 2 additional Plague Marines (<b>Power Rating +2</b>), up to 5 additional Plague Marines (<b>Power Rating +4</b>), up to 10 additional Plague Marines (<b>Power Rating +9</b>) or up to 15 additional Plague Marines (<b>Power Rating +14</b>). Each model is armed with a plague knife, boltgun, blight grenades and krak grenades.",
							"transport": "",
							"power_points": "6",
							"priest": "",
							"psyker": "",
							"open_play_only": "false",
							"crusade_only": "false",
							"virtual": "false",
							"Cost": "",
							"cost_per_unit": "Нет",
							"field17": ""
						}
					},
					{
						"name": "Plague Marines",
						"slot": "Elites",
						"faction": [
							"<Legion>",
							"Nurgle",
							"Chaos",
							"Heretic Astartes"
						],
						"keywords": [
							"infantry",
							"plague marines"
						],
						"models": [{
								"name": "Plague Champion",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Boltgun",
										"amount": "3",
										"Range": "24\"",
										"Type": "Rapid Fire 1",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Blight grenades",
										"amount": "3",
										"Range": "6\"",
										"Type": "Grenade D6",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Blast."
									},
									{
										"name": "Krak grenades",
										"amount": "3",
										"Range": "6\"",
										"Type": "Grenade 1",
										"S": "6",
										"AP": "-1",
										"D": "D3",
										"Abilities": "-"
									},
									{
										"name": "Plague knife",
										"amount": "3",
										"Range": "Melee",
										"Type": "Melee",
										"S": "User",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon"
									},
									{
										"name": "Plague knife",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "User",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon"
									},
									{
										"name": "Blight grenades",
										"amount": "1",
										"Range": "6\"",
										"Type": "Grenade D6",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Blast."
									},
									{
										"name": "Krak grenades",
										"amount": "1",
										"Range": "6\"",
										"Type": "Grenade 1",
										"S": "6",
										"AP": "-1",
										"D": "D3",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "5",
									"WS": "3",
									"BS": "3",
									"S": "4",
									"T": "5",
									"W": "2",
									"A": "3",
									"Ld": "8",
									"Sv": "3"
								}
							},
							{
								"name": "Plague Marine",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Boltgun",
										"amount": "3",
										"Range": "24\"",
										"Type": "Rapid Fire 1",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Blight grenades",
										"amount": "3",
										"Range": "6\"",
										"Type": "Grenade D6",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Blast."
									},
									{
										"name": "Krak grenades",
										"amount": "3",
										"Range": "6\"",
										"Type": "Grenade 1",
										"S": "6",
										"AP": "-1",
										"D": "D3",
										"Abilities": "-"
									},
									{
										"name": "Plague knife",
										"amount": "3",
										"Range": "Melee",
										"Type": "Melee",
										"S": "User",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon"
									},
									{
										"name": "Plague knife",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "User",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon"
									},
									{
										"name": "Blight grenades",
										"amount": "1",
										"Range": "6\"",
										"Type": "Grenade D6",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Blast."
									},
									{
										"name": "Krak grenades",
										"amount": "1",
										"Range": "6\"",
										"Type": "Grenade 1",
										"S": "6",
										"AP": "-1",
										"D": "D3",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"statlines": {
									"M": "5",
									"WS": "3",
									"BS": "3",
									"S": "4",
									"T": "5",
									"W": "2",
									"A": "2",
									"Ld": "7",
									"Sv": "3"
								}
							}
						],
						"rules": [{
								"name": "Contagions of Nurgle",
								"desc": "If every unit from your army has the DEATH GUARD keyword (excluding UNALIGNED units), this unit gains the following ability:\n\nNurgle's Gift (Contagion): While an enemy unit is within Contagion Range of this unit (see below), subtract 1 from the Toughness characteristic of models in that unit.",
								"subkeys": [
									"DEATH",
									"GUARD",
									"UNALIGNED"
								],
								"targets": [
									"DEATH GUARD",
									"UNALIGNED"
								],
								"phases": []
							},
							{
								"name": "Inexorable Advance",
								"desc": "- This unit counts as having Remained Stationary if it did not Fall Back or Advance in your previous Movement phase.\n- If this unit has the VEHICLE keyword, it does not suffer the penalty incurred to its hit rolls for firing Heavy weapons at enemy units that are within Engagement Range of it.\n- If this unit has the INFANTRY keyword, it can ignore any or all modifiers to its Move characteristic, Advance rolls and charge rolls.",
								"subkeys": [
									"VEHICLE",
									"INFANTRY"
								],
								"targets": [
									"VEHICLE",
									"INFANTRY"
								],
								"phases": [
									"Movement"
								]
							},
							{
								"name": "Objective Secured",
								"desc": "A player controls an objective marker if they have any models with this ability within range of that objective marker, even if there are more enemy models within range of that objective marker. If an enemy model within range of an objective marker also has this ability (or a similar ability), then the objective marker is controlled by the player who has the most models within range of that objective marker as normal.",
								"subkeys": [
									"A"
								],
								"targets": null,
								"phases": []
							},
							{
								"name": "Malicious Volleys",
								"desc": "Instead of following the normal rules for Rapid Fire weapons, models in this unit shooting Rapid Fire bolt weapons make double the number of attacks if any of the following apply:\n• The shooting model’s target is within half the weapon’s range.\n• The shooting model is Infantry and its unit Remained\nStationary in your previous Movement phase.\n• The shooting model is a Terminator.\nFor the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon (as defined on page 88) with the Rapid Fire type.",
								"subkeys": null,
								"targets": null,
								"phases": [
									"Movement"
								]
							},
							{
								"name": "Vectors of Death",
								"desc": "A Plague Marine equipped with 2 melee plague weapons has an Attacks characteristic of 3.",
								"subkeys": [
									"A"
								],
								"targets": null,
								"phases": []
							},
							{
								"name": "Disgustingly Resilient",
								"desc": "Each time an attack is allocated to a model in this unit, subtract 1 from the Damage characteristic of that attack (to a minimum of 1).",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Remorseless",
								"desc": "Each time a Combat Attrition test is taken for this unit, ignore any or all modifiers.",
								"subkeys": null,
								"targets": null,
								"phases": []
							}
						],
						"spells": [],
						"stratagems": [{
								"faction_id": "CSM",
								"name": "EXCESS OF VIOLENCE",
								"type": "Emperor’s Children – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The visceral sensation of every fresh kill causes the warriors of the Emperor’s Children to enter an ecstatic frenzy of butchery and dismemberment.",
								"source_id": "000000161",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when you choose an <span class=\"tooltip00305\" data-tooltip-content=\"#tooltip_content00305\" data-tooltip-anchor=\"#tooltip_content00305\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to fight with. Until the end of that phase, if an attack made by a model in that unit destroys an enemy model, the attacking model can make one additional attack against the same unit using the same weapon.",
								"id": "000003830003",
								"field9": "",
								"keys": [
									"emperor’s children infantry",
									"emperor’s",
									"children",
									"infantry"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when you choose an <span class=\"tooltip00305\" data-tooltip-content=\"#tooltip_content00305\" data-tooltip-anchor=\"#tooltip_content00305\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to fight with. Until the end of that phase, if an attack made by a model in that unit destroys an enemy model, the attacking model can make one additional attack against the same unit using the same weapon."
							},
							{
								"faction_id": "CSM",
								"name": "LET THE GALAXY BURN",
								"type": "Black Legion – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The Black Legion attack with a terrible ferocity.",
								"source_id": "000000161",
								"description": "Use this Stratagem when a <span class=\"tooltip00270\" data-tooltip-content=\"#tooltip_content00270\" data-tooltip-anchor=\"#tooltip_content00270\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00271\" data-tooltip-content=\"#tooltip_content00271\" data-tooltip-anchor=\"#tooltip_content00271\"><span class=\"kwb\">BIKER</span></span> unit from your army is picked to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase. You can re-roll all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 1 for that unit for the rest of the phase. If the unit is a <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">SPACE</span> <span class=\"kwb\">MARINES</span> unit, you can re-roll hit rolls for it instead.",
								"id": "000003298002",
								"field9": "",
								"keys": [
									"black legion infantry",
									"biker",
									"black",
									"legion",
									"infantry",
									"biker",
									"chaos",
									"space",
									"marines"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase",
									"Shooting phase"
								],
								"descText": "Use this Stratagem when a <span class=\"tooltip00270\" data-tooltip-content=\"#tooltip_content00270\" data-tooltip-anchor=\"#tooltip_content00270\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00271\" data-tooltip-content=\"#tooltip_content00271\" data-tooltip-anchor=\"#tooltip_content00271\"><span class=\"kwb\">BIKER</span></span> unit from your army is picked to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase. You can re-roll all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 1 for that unit for the rest of the phase. If the unit is a <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">SPACE</span> <span class=\"kwb\">MARINES</span> unit, you can re-roll hit rolls for it instead."
							},
							{
								"faction_id": "CSM",
								"name": "GRANDFATHER’S BLESSINGS",
								"type": "Chaos Space Marines Stratagem",
								"cp_cost": "2",
								"legend": "Grandfather Nurgle is eager to bestow daemonic fecundity upon his faithful servants, sealing their gaping wounds with pulsating growths and replacing their spilt blood with curdling ichor.",
								"source_id": "",
								"description": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select a <span class=\"tooltip00288\" data-tooltip-content=\"#tooltip_content00288\" data-tooltip-anchor=\"#tooltip_content00288\"><span class=\"kwb\">HERETIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">NURGLE</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00289\" data-tooltip-content=\"#tooltip_content00289\" data-tooltip-anchor=\"#tooltip_content00289\"><span class=\"kwb\">BIKER</span></span> unit. One model in the unit heals D3 wounds. If there are no wounded models in the unit, a single model in the unit that was slain earlier in the battle is returned to the unit with a single wound remaining.",
								"id": "000002235008",
								"field9": "",
								"keys": [
									"heretic astartes nurgle infantry",
									"biker",
									"heretic",
									"astartes",
									"nurgle",
									"infantry",
									"biker"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select a <span class=\"tooltip00288\" data-tooltip-content=\"#tooltip_content00288\" data-tooltip-anchor=\"#tooltip_content00288\"><span class=\"kwb\">HERETIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">NURGLE</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00289\" data-tooltip-content=\"#tooltip_content00289\" data-tooltip-anchor=\"#tooltip_content00289\"><span class=\"kwb\">BIKER</span></span> unit. One model in the unit heals D3 wounds. If there are no wounded models in the unit, a single model in the unit that was slain earlier in the battle is returned to the unit with a single wound remaining."
							},
							{
								"faction_id": "CSM",
								"name": "APOPLECTIC FRENZY",
								"type": "World Eaters – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Howling in rage, World Eaters surge towards the foe.",
								"source_id": "000000161",
								"description": "Use this Stratagem during deployment, when you set up a <span class=\"tooltip00337\" data-tooltip-content=\"#tooltip_content00337\" data-tooltip-anchor=\"#tooltip_content00337\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first.",
								"id": "000003831003",
								"field9": "",
								"keys": [
									"world eaters infantry",
									"world",
									"eaters",
									"infantry"
								],
								"activate": [
									"During deployment"
								],
								"descText": "Use this Stratagem during deployment, when you set up a <span class=\"tooltip00337\" data-tooltip-content=\"#tooltip_content00337\" data-tooltip-anchor=\"#tooltip_content00337\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first."
							},
							{
								"faction_id": "CSM",
								"name": "VETERANS OF THE LONG WAR",
								"type": "Chaos Space Marines Stratagem",
								"cp_cost": "1",
								"legend": "The hatred of the Traitor Legions has burned for millennia.",
								"source_id": "",
								"description": "Use this Stratagem when a <span class=\"tooltip00293\" data-tooltip-content=\"#tooltip_content00293\" data-tooltip-anchor=\"#tooltip_content00293\"><span class=\"kwb\">HERETIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00299\" data-tooltip-content=\"#tooltip_content00299\" data-tooltip-anchor=\"#tooltip_content00299\"><span class=\"kwb\">BIKER</span></span> unit is selected to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase (excluding units from Renegade Chapters). You can add 1 to all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound rolls</a> made for the unit until the end of the phase.",
								"id": "000002235007",
								"field9": "",
								"keys": [
									"heretic astartes infantry",
									"biker",
									"heretic",
									"astartes",
									"infantry",
									"biker"
								],
								"activate": [
									"Shooting phase",
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem when a <span class=\"tooltip00293\" data-tooltip-content=\"#tooltip_content00293\" data-tooltip-anchor=\"#tooltip_content00293\"><span class=\"kwb\">HERETIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00299\" data-tooltip-content=\"#tooltip_content00299\" data-tooltip-anchor=\"#tooltip_content00299\"><span class=\"kwb\">BIKER</span></span> unit is selected to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase (excluding units from Renegade Chapters). You can add 1 to all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound rolls</a> made for the unit until the end of the phase."
							},
							{
								"faction_id": "CSM",
								"name": "THE MASTER IS WATCHING",
								"type": "Creations of Bile – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Feeling Bile’s expectant gaze from across the battlefield, his enhanced warriors strive slavishly to impress.",
								"source_id": "000000161",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) that is visible to and within 12\" of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> is chosen to shoot or fight with. Until the end of that phase, when resolving an attack made by a model in that unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
								"id": "000004296005",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"chaos cultists",
									"creations",
									"of",
									"bile",
									"infantry",
									"chaos",
									"cultists",
									"warlord"
								],
								"activate": [
									"Shooting phase",
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) that is visible to and within 12\" of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> is chosen to shoot or fight with. Until the end of that phase, when resolving an attack made by a model in that unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>."
							},
							{
								"faction_id": "CSM",
								"name": "FROM THE NIGHT",
								"type": "Night Lords – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The sons of Nostramo strike from the dark.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is entirely on or within a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Terrain-Features-1\">terrain</a> feature. Until the end of the turn:<br><ul><li>When a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made for that unit, add 2 to the result.</li><li>When resolving an attack made with a melee weapon by a model in that unit, add 1 to the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.</li></ul>",
								"id": "000003827007",
								"field9": "",
								"keys": [
									"night lords infantry",
									"night",
									"lords",
									"infantry"
								],
								"activate": [
									"Charge phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is entirely on or within a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Terrain-Features-1\">terrain</a> feature. Until the end of the turn:<br><ul><li>When a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made for that unit, add 2 to the result.</li><li>When resolving an attack made with a melee weapon by a model in that unit, add 1 to the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.</li></ul>"
							},
							{
								"faction_id": "CSM",
								"name": "DERMAL CHITINATION",
								"type": "Creations of Bile – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "These fighters secrete a hardening resin through their skin, temporarily toughening their already resilient hides.",
								"source_id": "000000161",
								"description": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> when a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) is selected as the target of any attacks. Add 1 to that unit’s Toughness characteristic until the end of that phase.",
								"id": "000004296006",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"chaos cultists",
									"creations",
									"of",
									"bile",
									"infantry",
									"chaos",
									"cultists"
								],
								"activate": [
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> when a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) is selected as the target of any attacks. Add 1 to that unit’s Toughness characteristic until the end of that phase."
							},
							{
								"faction_id": "CSM",
								"name": "TAKEN ALIVE",
								"type": "Creations of Bile – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "To be snatched away by Fabius Bile and his creations for experimentation is an altogether nightmarish fate.",
								"source_id": "000000161",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a> when a model from an enemy unit is destroyed as the result of an attack made with a melee weapon by a model from a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. For the rest of the battle, when taking a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Morale-Tests\">Morale test</a> for that enemy model’s unit, each model in that unit that was destroyed that turn is treated as two models for the purposes of taking that Morale test. Each enemy unit can only be selected for this Stratagem once.",
								"id": "000004296007",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"creations",
									"of",
									"bile",
									"infantry"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a> when a model from an enemy unit is destroyed as the result of an attack made with a melee weapon by a model from a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. For the rest of the battle, when taking a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Morale-Tests\">Morale test</a> for that enemy model’s unit, each model in that unit that was destroyed that turn is treated as two models for the purposes of taking that Morale test. Each enemy unit can only be selected for this Stratagem once."
							},
							{
								"faction_id": "CSM",
								"name": "RENASCENT INFILTRATION",
								"type": "Alpha Legion – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Disappear and reappear for the final strike.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is more than 3\" away from any enemy models (you cannot select a unit that arrived as <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">reinforcements</a> this turn). Remove that unit from the battlefield. At the end of your next Movement phase, set up that unit on the battlefield again, anywhere that is more than 9\" away from any enemy models. Any models that cannot be set up in this way are destroyed. If the battle ends before that unit is set back up, it is destroyed.",
								"id": "000003828006",
								"field9": "",
								"keys": [
									"alpha legion infantry",
									"alpha",
									"legion",
									"infantry"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is more than 3\" away from any enemy models (you cannot select a unit that arrived as <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">reinforcements</a> this turn). Remove that unit from the battlefield. At the end of your next Movement phase, set up that unit on the battlefield again, anywhere that is more than 9\" away from any enemy models. Any models that cannot be set up in this way are destroyed. If the battle ends before that unit is set back up, it is destroyed."
							},
							{
								"faction_id": "CSM",
								"name": "FORWARD OPERATIVES",
								"type": "Alpha Legion – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "The Alpha Legion are as illusive as a shadow.",
								"source_id": "000000161",
								"description": "Use this Stratagem during deployment, when you set up an <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
								"id": "000003828002",
								"field9": "",
								"keys": [
									"alpha legion infantry",
									"alpha",
									"legion",
									"infantry"
								],
								"activate": [
									"During deployment"
								],
								"descText": "Use this Stratagem during deployment, when you set up an <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle."
							},
							{
								"faction_id": "CSM",
								"name": "IN MIDNIGHT CLAD",
								"type": "Night Lords Stratagem",
								"cp_cost": "1",
								"legend": "Having fought countless campaigns of terror in complete darkness, the Night Lords know how to make an ally of the shadows.",
								"source_id": "",
								"description": "Use this Stratagem when a <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit is targeted by a shooting attack. For the rest of the phase, your opponent must subtract 1 from all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> that target that unit.",
								"id": "000002235024",
								"field9": "",
								"keys": [
									"night lords infantry",
									"night",
									"lords",
									"infantry"
								],
								"activate": [
									"Being targeted"
								],
								"descText": "Use this Stratagem when a <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit is targeted by a shooting attack. For the rest of the phase, your opponent must subtract 1 from all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> that target that unit."
							},
							{
								"faction_id": "CSM",
								"name": "FORWARD OPERATIVES",
								"type": "Alpha Legion Stratagem",
								"cp_cost": "1",
								"legend": "The deceitful strategies of the Alpha Legion are as illusive as a shadow and as tangled as a nest of vipers.",
								"source_id": "",
								"description": "Use this Stratagem during deployment, when you set up an <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
								"id": "000002235019",
								"field9": "",
								"keys": [
									"alpha legion infantry",
									"alpha",
									"legion",
									"infantry"
								],
								"activate": [
									"During deployment"
								],
								"descText": "Use this Stratagem during deployment, when you set up an <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle."
							},
							{
								"faction_id": "CSM",
								"name": "EXCESS OF VIOLENCE",
								"type": "Emperor’s Children Stratagem",
								"cp_cost": "1",
								"legend": "The visceral sensation of every fresh kill causes the warriors of the Emperor’s Children to enter an ecstatic frenzy of butchery and dismemberment.",
								"source_id": "",
								"description": "Use this Stratagem just before an <span class=\"tooltip00305\" data-tooltip-content=\"#tooltip_content00305\" data-tooltip-anchor=\"#tooltip_content00305\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> <span class=\"kwb\">INFANTRY</span></span> unit attacks in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Each time a model in your unit slays an enemy model, it can immediately make another <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> using the same weapon at the same target (these bonus attacks cannot themselves generate any further attacks).",
								"id": "000002235023",
								"field9": "",
								"keys": [
									"emperor’s children infantry",
									"emperor’s",
									"children",
									"infantry"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem just before an <span class=\"tooltip00305\" data-tooltip-content=\"#tooltip_content00305\" data-tooltip-anchor=\"#tooltip_content00305\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> <span class=\"kwb\">INFANTRY</span></span> unit attacks in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Each time a model in your unit slays an enemy model, it can immediately make another <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> using the same weapon at the same target (these bonus attacks cannot themselves generate any further attacks)."
							},
							{
								"faction_id": "CSM",
								"name": "WE CANNOT FAIL",
								"type": "Flawless Host – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The self-belief and desire for perfection that drives the warriors of the Flawless Host is such that their fighting skills far exceed those of less disciplined forces.",
								"source_id": "000000161",
								"description": "Use this Stratagem when you pick a <span class=\"tooltip00310\" data-tooltip-content=\"#tooltip_content00310\" data-tooltip-anchor=\"#tooltip_content00310\"><span class=\"kwb\">FLAWLESS</span> <span class=\"kwb\">HOST</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to fight with in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase you can re-roll <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> for attacks made by that unit.",
								"id": "000003299007",
								"field9": "",
								"keys": [
									"flawless host infantry",
									"flawless",
									"host",
									"infantry"
								],
								"activate": [
									"Fight phase"
								],
								"descText": "Use this Stratagem when you pick a <span class=\"tooltip00310\" data-tooltip-content=\"#tooltip_content00310\" data-tooltip-anchor=\"#tooltip_content00310\"><span class=\"kwb\">FLAWLESS</span> <span class=\"kwb\">HOST</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to fight with in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase you can re-roll <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> for attacks made by that unit."
							},
							{
								"faction_id": "CSM",
								"name": "MONSTROUS VISAGES",
								"type": "Creations of Bile – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Bile’s experimental ministrations have left these warriors as freakish monsters. Cursed with clusters of compound eyes, distended, fang-stuffed jaws or myriad other grotesqueries, they are hideous to behold.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of any phase. Select one <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>). Until the end of the turn, that unit has the following ability: ‘<span class=\"redfont\">Monstrous Visages (Aura)</span><b>:</b> While an enemy model is within 6\" of this unit, each time that model makes an attack, subtract 1 from the hit roll.’",
								"id": "000004296003",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"chaos cultists",
									"creations",
									"of",
									"bile",
									"infantry",
									"chaos",
									"cultists",
									"monstrous visages (aura)"
								],
								"activate": [
									"Enemy Morale phase",
									"Movement phase",
									"Enemy Fight phase",
									"Psychic phase",
									"Enemy Charge phase",
									"Shooting phase",
									"Charge phase",
									"Fight phase",
									"Morale phase",
									"Enemy Movement phase",
									"Enemy Psychic phase",
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem at the start of any phase. Select one <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>). Until the end of the turn, that unit has the following ability: ‘<span class=\"redfont\">Monstrous Visages (Aura)</span><b>:</b> While an enemy model is within 6\" of this unit, each time that model makes an attack, subtract 1 from the hit roll.’"
							},
							{
								"faction_id": "CSM",
								"name": "LET THE GALAXY BURN",
								"type": "Black Legion Stratagem",
								"cp_cost": "1",
								"legend": "Drawing upon millennia of festering bitterness and hate, the Black Legion attack with a ferocity that is terrible to behold.",
								"source_id": "",
								"description": "Use this Stratagem when a <span class=\"tooltip00270\" data-tooltip-content=\"#tooltip_content00270\" data-tooltip-anchor=\"#tooltip_content00270\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00271\" data-tooltip-content=\"#tooltip_content00271\" data-tooltip-anchor=\"#tooltip_content00271\"><span class=\"kwb\">BIKER</span></span> unit is selected to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase. You can re-roll all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 1 for that unit for the rest of the phase. If the unit is a <a href=\"https://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/Chaos-Space-Marines\">Chaos Space Marine squad</a>, you can re-roll all failed hit rolls for it instead.",
								"id": "000002235025",
								"field9": "",
								"keys": [
									"black legion infantry",
									"biker",
									"black",
									"legion",
									"infantry",
									"biker"
								],
								"activate": [
									"Shooting phase",
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem when a <span class=\"tooltip00270\" data-tooltip-content=\"#tooltip_content00270\" data-tooltip-anchor=\"#tooltip_content00270\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00271\" data-tooltip-content=\"#tooltip_content00271\" data-tooltip-anchor=\"#tooltip_content00271\"><span class=\"kwb\">BIKER</span></span> unit is selected to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase. You can re-roll all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 1 for that unit for the rest of the phase. If the unit is a <a href=\"https://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/Chaos-Space-Marines\">Chaos Space Marine squad</a>, you can re-roll all failed hit rolls for it instead."
							},
							{
								"faction_id": "CSM",
								"name": "COMBAT ELIXIRS",
								"type": "Emperor’s Children – Requisition Stratagem",
								"cp_cost": "2",
								"legend": "Concoctions of hideous euphoria empower the minds of these sensationalist warriors.",
								"source_id": "000000161",
								"description": "Use this Stratagem before the battle. Select one <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> unit from your army that is not a <span class=\"tooltip00304\" data-tooltip-content=\"#tooltip_content00304\" data-tooltip-anchor=\"#tooltip_content00304\"><span class=\"kwb\">VEHICLE</span></span> or <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span>, then select one of the following effects to apply to models in that unit until the end of the battle:<br><ul><li>+1 to Attacks characteristic</li><li>+1 to Strength characteristic</li><li>+2\" to Move characteristic</li><li>+1 to Toughness characteristic</li></ul>You can only use this Stratagem once per battle.",
								"id": "000003830002",
								"field9": "",
								"keys": [
									"vehicle",
									"chaos cultist",
									"emperor’s",
									"children",
									"vehicle",
									"chaos",
									"cultist"
								],
								"activate": [
									"Before battle"
								],
								"descText": "Use this Stratagem before the battle. Select one <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> unit from your army that is not a <span class=\"tooltip00304\" data-tooltip-content=\"#tooltip_content00304\" data-tooltip-anchor=\"#tooltip_content00304\"><span class=\"kwb\">VEHICLE</span></span> or <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span>, then select one of the following effects to apply to models in that unit until the end of the battle:<br><ul><li>+1 to Attacks characteristic</li><li>+1 to Strength characteristic</li><li>+2\" to Move characteristic</li><li>+1 to Toughness characteristic</li></ul>You can only use this Stratagem once per battle."
							},
							{
								"faction_id": "CSM",
								"name": "MACROTENSILE SINEWS",
								"type": "Creations of Bile – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Injecting auto-stimulants into their enhanced muscles, these warriors leap and bound across the battlefield.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) from your army. Until the end of the turn:<br><ul><li>That unit is eligible to declare charge with in a turn which they Advanced.</li><li>Add 1 to <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> and <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge rolls</a> made for that unit.</li></ul>",
								"id": "000004296004",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"chaos cultists",
									"creations",
									"of",
									"bile",
									"infantry",
									"chaos",
									"cultists"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) from your army. Until the end of the turn:<br><ul><li>That unit is eligible to declare charge with in a turn which they Advanced.</li><li>Add 1 to <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> and <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge rolls</a> made for that unit.</li></ul>"
							},
							{
								"faction_id": "CSM",
								"name": "CONCEAL",
								"type": "Alpha Legion – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "These clandestine warriors will disappear at a moment’s notice.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of that phase, enemy models can only target that unit if it is the closest visible target.",
								"id": "000003828003",
								"field9": "",
								"keys": [
									"alpha legion infantry",
									"alpha",
									"legion",
									"infantry"
								],
								"activate": [
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of that phase, enemy models can only target that unit if it is the closest visible target."
							},
							{
								"faction_id": "CSM",
								"name": "PRESCIENCE",
								"type": "Scourged – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "Tzeentch has gifted the Scourged with a measure of foresight, allowing them to read the enemy’s signals and know exactly where they will strike.",
								"source_id": "000000161",
								"description": "Use this Stratagem after your opponent sets up a unit that is arriving on the battlefield as <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">reinforcements</a>. Pick one <span class=\"tooltip00321\" data-tooltip-content=\"#tooltip_content00321\" data-tooltip-anchor=\"#tooltip_content00321\"><span class=\"kwb\">SCOURGED</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is within 12\" of that enemy unit. Your unit can immediately shoot at that enemy unit as if it were your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>.",
								"id": "000003299006",
								"field9": "",
								"keys": [
									"scourged infantry",
									"scourged",
									"infantry"
								],
								"activate": [
									"Enemy Movement phase"
								],
								"descText": "Use this Stratagem after your opponent sets up a unit that is arriving on the battlefield as <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">reinforcements</a>. Pick one <span class=\"tooltip00321\" data-tooltip-content=\"#tooltip_content00321\" data-tooltip-anchor=\"#tooltip_content00321\"><span class=\"kwb\">SCOURGED</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is within 12\" of that enemy unit. Your unit can immediately shoot at that enemy unit as if it were your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>."
							},
							{
								"faction_id": "CSM",
								"name": "TANK HUNTERS",
								"type": "Iron Warriors – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "No armour is safe from the guns of the IV Legion.",
								"source_id": "000000161",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when you choose an <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) to shoot or fight with. Select one enemy <span class=\"kwb\">VEHICLE</span> unit. Until the end of that phase, when resolving an attack made by a model in that <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> unit against the selected unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
								"id": "000003829006",
								"field9": "",
								"keys": [
									"chaos cultists",
									"iron",
									"warriors",
									"chaos",
									"cultists",
									"vehicle",
									"iron",
									"warriors"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase",
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when you choose an <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) to shoot or fight with. Select one enemy <span class=\"kwb\">VEHICLE</span> unit. Until the end of that phase, when resolving an attack made by a model in that <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> unit against the selected unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>."
							},
							{
								"faction_id": "CSM",
								"name": "STOKE THE NAILS",
								"type": "World Eaters – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Aggression stimulators implanted into the brains of the World Eaters drive them into uncontrollable rages.",
								"source_id": "000000161",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00337\" data-tooltip-content=\"#tooltip_content00337\" data-tooltip-anchor=\"#tooltip_content00337\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00338\" data-tooltip-content=\"#tooltip_content00338\" data-tooltip-anchor=\"#tooltip_content00338\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">BIKER</span></span> unit from your army that is not a <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span> is chosen to fight with. Until the end of that phase:<br><ul><li>That unit’s <a href=\"https://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/#Death-to-the-False-Emperor\">Death to the False Emperor</a> ability takes effect when targeting any enemy units, not just <span class=\"kwb\">IMPERIUM</span> units.</li><li>When targeting <span class=\"kwb\">IMPERIUM</span> units, the ability takes effect on <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 5+.</li></ul>",
								"id": "000003831008",
								"field9": "",
								"keys": [
									"world eaters infantry",
									"world eaters biker",
									"chaos cultist",
									"world",
									"eaters",
									"infantry",
									"world",
									"eaters",
									"biker",
									"chaos",
									"cultist",
									"imperium",
									"imperium"
								],
								"activate": [
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00337\" data-tooltip-content=\"#tooltip_content00337\" data-tooltip-anchor=\"#tooltip_content00337\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00338\" data-tooltip-content=\"#tooltip_content00338\" data-tooltip-anchor=\"#tooltip_content00338\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">BIKER</span></span> unit from your army that is not a <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span> is chosen to fight with. Until the end of that phase:<br><ul><li>That unit’s <a href=\"https://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/#Death-to-the-False-Emperor\">Death to the False Emperor</a> ability takes effect when targeting any enemy units, not just <span class=\"kwb\">IMPERIUM</span> units.</li><li>When targeting <span class=\"kwb\">IMPERIUM</span> units, the ability takes effect on <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 5+.</li></ul>"
							},
							{
								"faction_id": "CSM",
								"name": "CRUEL DUELLISTS",
								"type": "Emperor’s Children – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Fulgrim’s scions are renowned for their blade-craft.",
								"source_id": "000000161",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip00303\" data-tooltip-content=\"#tooltip_content00303\" data-tooltip-anchor=\"#tooltip_content00303\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span></span> unit from your army that is not a <span class=\"tooltip00304\" data-tooltip-content=\"#tooltip_content00304\" data-tooltip-anchor=\"#tooltip_content00304\"><span class=\"kwb\">VEHICLE</span></span> or <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span> is chosen to fight with. Until the end of that phase, when resolving an attack made with a melee weapon by a model in that unit, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6 that weapon has an Armour Penetration characteristic of -3 for that attack.",
								"id": "000003830007",
								"field9": "",
								"keys": [
									"emperor’s children",
									"vehicle",
									"chaos cultist",
									"emperor’s",
									"children",
									"vehicle",
									"chaos",
									"cultist"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip00303\" data-tooltip-content=\"#tooltip_content00303\" data-tooltip-anchor=\"#tooltip_content00303\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span></span> unit from your army that is not a <span class=\"tooltip00304\" data-tooltip-content=\"#tooltip_content00304\" data-tooltip-anchor=\"#tooltip_content00304\"><span class=\"kwb\">VEHICLE</span></span> or <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span> is chosen to fight with. Until the end of that phase, when resolving an attack made with a melee weapon by a model in that unit, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6 that weapon has an Armour Penetration characteristic of -3 for that attack."
							},
							{
								"faction_id": "CSM",
								"name": "CANNON FODDER",
								"type": "Iron Warriors – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "Clog up their guns with the flesh and bones of the weak.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00313\" data-tooltip-content=\"#tooltip_content00313\" data-tooltip-anchor=\"#tooltip_content00313\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army then select one friendly <span class=\"tooltip03316\" data-tooltip-content=\"#tooltip_content03316\" data-tooltip-anchor=\"#tooltip_content03316\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span> unit wholly within 6\" of that unit. Until the end of that phase, enemy models cannot target that <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">INFANTRY</span> unit if the selected <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span> unit is a closer visible target.",
								"id": "000003829008",
								"field9": "",
								"keys": [
									"iron warriors infantry",
									"iron warriors chaos cultists",
									"iron",
									"warriors",
									"infantry",
									"iron",
									"warriors",
									"chaos",
									"cultists",
									"iron",
									"warriors",
									"infantry",
									"iron",
									"warriors",
									"chaos",
									"cultists"
								],
								"activate": [
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00313\" data-tooltip-content=\"#tooltip_content00313\" data-tooltip-anchor=\"#tooltip_content00313\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army then select one friendly <span class=\"tooltip03316\" data-tooltip-content=\"#tooltip_content03316\" data-tooltip-anchor=\"#tooltip_content03316\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span> unit wholly within 6\" of that unit. Until the end of that phase, enemy models cannot target that <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">INFANTRY</span> unit if the selected <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span> unit is a closer visible target."
							},
							{
								"faction_id": "CSM",
								"name": "IN MIDNIGHT CLAD",
								"type": "Night Lords – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Having fought countless campaigns of terror in complete darkness, the Night Lords know how to make an ally of the shadows.",
								"source_id": "000000161",
								"description": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is targeted by a shooting attack. Until the end of that phase, when resolving an attack against that unit, subtract 1 from the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
								"id": "000003827002",
								"field9": "",
								"keys": [
									"night lords infantry",
									"night",
									"lords",
									"infantry"
								],
								"activate": [
									"Being targeted"
								],
								"descText": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is targeted by a shooting attack. Until the end of that phase, when resolving an attack against that unit, subtract 1 from the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>."
							}
						],
						"waha": {
							"id": "000000950",
							"name": "Plague Marines",
							"link": "https://wahapedia.ruhttps://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/Plague-Marines",
							"faction_id": "CSM",
							"source_id": "000000012",
							"role": "Elites",
							"unit_composition": "This unit contains 1 Plague Champion and 4 Plague Marines. It can include up to 2 additional Plague Marines (<b>Power Rating +2</b>), up to 5 additional Plague Marines (<b>Power Rating +4</b>), up to 10 additional Plague Marines (<b>Power Rating +9</b>) or up to 15 additional Plague Marines (<b>Power Rating +14</b>). Each model is armed with a plague knife, boltgun, blight grenades and krak grenades.",
							"transport": "",
							"power_points": "6",
							"priest": "",
							"psyker": "",
							"open_play_only": "false",
							"crusade_only": "false",
							"virtual": "false",
							"Cost": "",
							"cost_per_unit": "Нет",
							"field17": ""
						}
					},
					{
						"name": "Plague Marines",
						"slot": "Elites",
						"faction": [
							"<Legion>",
							"Nurgle",
							"Chaos",
							"Heretic Astartes"
						],
						"keywords": [
							"infantry",
							"plague marines"
						],
						"models": [{
								"name": "Plague Champion",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Boltgun",
										"amount": "3",
										"Range": "24\"",
										"Type": "Rapid Fire 1",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Blight grenades",
										"amount": "3",
										"Range": "6\"",
										"Type": "Grenade D6",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Blast."
									},
									{
										"name": "Krak grenades",
										"amount": "3",
										"Range": "6\"",
										"Type": "Grenade 1",
										"S": "6",
										"AP": "-1",
										"D": "D3",
										"Abilities": "-"
									},
									{
										"name": "Plague knife",
										"amount": "3",
										"Range": "Melee",
										"Type": "Melee",
										"S": "User",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon"
									},
									{
										"name": "Plague knife",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "User",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon"
									},
									{
										"name": "Blight grenades",
										"amount": "1",
										"Range": "6\"",
										"Type": "Grenade D6",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Blast."
									},
									{
										"name": "Krak grenades",
										"amount": "1",
										"Range": "6\"",
										"Type": "Grenade 1",
										"S": "6",
										"AP": "-1",
										"D": "D3",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "5",
									"WS": "3",
									"BS": "3",
									"S": "4",
									"T": "5",
									"W": "2",
									"A": "3",
									"Ld": "8",
									"Sv": "3"
								}
							},
							{
								"name": "Plague Marine",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Boltgun",
										"amount": "3",
										"Range": "24\"",
										"Type": "Rapid Fire 1",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Blight grenades",
										"amount": "3",
										"Range": "6\"",
										"Type": "Grenade D6",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Blast."
									},
									{
										"name": "Krak grenades",
										"amount": "3",
										"Range": "6\"",
										"Type": "Grenade 1",
										"S": "6",
										"AP": "-1",
										"D": "D3",
										"Abilities": "-"
									},
									{
										"name": "Plague knife",
										"amount": "3",
										"Range": "Melee",
										"Type": "Melee",
										"S": "User",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon"
									},
									{
										"name": "Plague knife",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "User",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon"
									},
									{
										"name": "Blight grenades",
										"amount": "1",
										"Range": "6\"",
										"Type": "Grenade D6",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Blast."
									},
									{
										"name": "Krak grenades",
										"amount": "1",
										"Range": "6\"",
										"Type": "Grenade 1",
										"S": "6",
										"AP": "-1",
										"D": "D3",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"statlines": {
									"M": "5",
									"WS": "3",
									"BS": "3",
									"S": "4",
									"T": "5",
									"W": "2",
									"A": "2",
									"Ld": "7",
									"Sv": "3"
								}
							}
						],
						"rules": [{
								"name": "Contagions of Nurgle",
								"desc": "If every unit from your army has the DEATH GUARD keyword (excluding UNALIGNED units), this unit gains the following ability:\n\nNurgle's Gift (Contagion): While an enemy unit is within Contagion Range of this unit (see below), subtract 1 from the Toughness characteristic of models in that unit.",
								"subkeys": [
									"DEATH",
									"GUARD",
									"UNALIGNED"
								],
								"targets": [
									"DEATH GUARD",
									"UNALIGNED"
								],
								"phases": []
							},
							{
								"name": "Inexorable Advance",
								"desc": "- This unit counts as having Remained Stationary if it did not Fall Back or Advance in your previous Movement phase.\n- If this unit has the VEHICLE keyword, it does not suffer the penalty incurred to its hit rolls for firing Heavy weapons at enemy units that are within Engagement Range of it.\n- If this unit has the INFANTRY keyword, it can ignore any or all modifiers to its Move characteristic, Advance rolls and charge rolls.",
								"subkeys": [
									"VEHICLE",
									"INFANTRY"
								],
								"targets": [
									"VEHICLE",
									"INFANTRY"
								],
								"phases": [
									"Movement"
								]
							},
							{
								"name": "Objective Secured",
								"desc": "A player controls an objective marker if they have any models with this ability within range of that objective marker, even if there are more enemy models within range of that objective marker. If an enemy model within range of an objective marker also has this ability (or a similar ability), then the objective marker is controlled by the player who has the most models within range of that objective marker as normal.",
								"subkeys": [
									"A"
								],
								"targets": null,
								"phases": []
							},
							{
								"name": "Malicious Volleys",
								"desc": "Instead of following the normal rules for Rapid Fire weapons, models in this unit shooting Rapid Fire bolt weapons make double the number of attacks if any of the following apply:\n• The shooting model’s target is within half the weapon’s range.\n• The shooting model is Infantry and its unit Remained\nStationary in your previous Movement phase.\n• The shooting model is a Terminator.\nFor the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon (as defined on page 88) with the Rapid Fire type.",
								"subkeys": null,
								"targets": null,
								"phases": [
									"Movement"
								]
							},
							{
								"name": "Vectors of Death",
								"desc": "A Plague Marine equipped with 2 melee plague weapons has an Attacks characteristic of 3.",
								"subkeys": [
									"A"
								],
								"targets": null,
								"phases": []
							},
							{
								"name": "Disgustingly Resilient",
								"desc": "Each time an attack is allocated to a model in this unit, subtract 1 from the Damage characteristic of that attack (to a minimum of 1).",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Remorseless",
								"desc": "Each time a Combat Attrition test is taken for this unit, ignore any or all modifiers.",
								"subkeys": null,
								"targets": null,
								"phases": []
							}
						],
						"spells": [],
						"stratagems": [{
								"faction_id": "CSM",
								"name": "EXCESS OF VIOLENCE",
								"type": "Emperor’s Children – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The visceral sensation of every fresh kill causes the warriors of the Emperor’s Children to enter an ecstatic frenzy of butchery and dismemberment.",
								"source_id": "000000161",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when you choose an <span class=\"tooltip00305\" data-tooltip-content=\"#tooltip_content00305\" data-tooltip-anchor=\"#tooltip_content00305\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to fight with. Until the end of that phase, if an attack made by a model in that unit destroys an enemy model, the attacking model can make one additional attack against the same unit using the same weapon.",
								"id": "000003830003",
								"field9": "",
								"keys": [
									"emperor’s children infantry",
									"emperor’s",
									"children",
									"infantry"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when you choose an <span class=\"tooltip00305\" data-tooltip-content=\"#tooltip_content00305\" data-tooltip-anchor=\"#tooltip_content00305\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to fight with. Until the end of that phase, if an attack made by a model in that unit destroys an enemy model, the attacking model can make one additional attack against the same unit using the same weapon."
							},
							{
								"faction_id": "CSM",
								"name": "LET THE GALAXY BURN",
								"type": "Black Legion – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The Black Legion attack with a terrible ferocity.",
								"source_id": "000000161",
								"description": "Use this Stratagem when a <span class=\"tooltip00270\" data-tooltip-content=\"#tooltip_content00270\" data-tooltip-anchor=\"#tooltip_content00270\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00271\" data-tooltip-content=\"#tooltip_content00271\" data-tooltip-anchor=\"#tooltip_content00271\"><span class=\"kwb\">BIKER</span></span> unit from your army is picked to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase. You can re-roll all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 1 for that unit for the rest of the phase. If the unit is a <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">SPACE</span> <span class=\"kwb\">MARINES</span> unit, you can re-roll hit rolls for it instead.",
								"id": "000003298002",
								"field9": "",
								"keys": [
									"black legion infantry",
									"biker",
									"black",
									"legion",
									"infantry",
									"biker",
									"chaos",
									"space",
									"marines"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase",
									"Shooting phase"
								],
								"descText": "Use this Stratagem when a <span class=\"tooltip00270\" data-tooltip-content=\"#tooltip_content00270\" data-tooltip-anchor=\"#tooltip_content00270\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00271\" data-tooltip-content=\"#tooltip_content00271\" data-tooltip-anchor=\"#tooltip_content00271\"><span class=\"kwb\">BIKER</span></span> unit from your army is picked to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase. You can re-roll all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 1 for that unit for the rest of the phase. If the unit is a <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">SPACE</span> <span class=\"kwb\">MARINES</span> unit, you can re-roll hit rolls for it instead."
							},
							{
								"faction_id": "CSM",
								"name": "GRANDFATHER’S BLESSINGS",
								"type": "Chaos Space Marines Stratagem",
								"cp_cost": "2",
								"legend": "Grandfather Nurgle is eager to bestow daemonic fecundity upon his faithful servants, sealing their gaping wounds with pulsating growths and replacing their spilt blood with curdling ichor.",
								"source_id": "",
								"description": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select a <span class=\"tooltip00288\" data-tooltip-content=\"#tooltip_content00288\" data-tooltip-anchor=\"#tooltip_content00288\"><span class=\"kwb\">HERETIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">NURGLE</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00289\" data-tooltip-content=\"#tooltip_content00289\" data-tooltip-anchor=\"#tooltip_content00289\"><span class=\"kwb\">BIKER</span></span> unit. One model in the unit heals D3 wounds. If there are no wounded models in the unit, a single model in the unit that was slain earlier in the battle is returned to the unit with a single wound remaining.",
								"id": "000002235008",
								"field9": "",
								"keys": [
									"heretic astartes nurgle infantry",
									"biker",
									"heretic",
									"astartes",
									"nurgle",
									"infantry",
									"biker"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select a <span class=\"tooltip00288\" data-tooltip-content=\"#tooltip_content00288\" data-tooltip-anchor=\"#tooltip_content00288\"><span class=\"kwb\">HERETIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">NURGLE</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00289\" data-tooltip-content=\"#tooltip_content00289\" data-tooltip-anchor=\"#tooltip_content00289\"><span class=\"kwb\">BIKER</span></span> unit. One model in the unit heals D3 wounds. If there are no wounded models in the unit, a single model in the unit that was slain earlier in the battle is returned to the unit with a single wound remaining."
							},
							{
								"faction_id": "CSM",
								"name": "APOPLECTIC FRENZY",
								"type": "World Eaters – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Howling in rage, World Eaters surge towards the foe.",
								"source_id": "000000161",
								"description": "Use this Stratagem during deployment, when you set up a <span class=\"tooltip00337\" data-tooltip-content=\"#tooltip_content00337\" data-tooltip-anchor=\"#tooltip_content00337\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first.",
								"id": "000003831003",
								"field9": "",
								"keys": [
									"world eaters infantry",
									"world",
									"eaters",
									"infantry"
								],
								"activate": [
									"During deployment"
								],
								"descText": "Use this Stratagem during deployment, when you set up a <span class=\"tooltip00337\" data-tooltip-content=\"#tooltip_content00337\" data-tooltip-anchor=\"#tooltip_content00337\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first."
							},
							{
								"faction_id": "CSM",
								"name": "VETERANS OF THE LONG WAR",
								"type": "Chaos Space Marines Stratagem",
								"cp_cost": "1",
								"legend": "The hatred of the Traitor Legions has burned for millennia.",
								"source_id": "",
								"description": "Use this Stratagem when a <span class=\"tooltip00293\" data-tooltip-content=\"#tooltip_content00293\" data-tooltip-anchor=\"#tooltip_content00293\"><span class=\"kwb\">HERETIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00299\" data-tooltip-content=\"#tooltip_content00299\" data-tooltip-anchor=\"#tooltip_content00299\"><span class=\"kwb\">BIKER</span></span> unit is selected to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase (excluding units from Renegade Chapters). You can add 1 to all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound rolls</a> made for the unit until the end of the phase.",
								"id": "000002235007",
								"field9": "",
								"keys": [
									"heretic astartes infantry",
									"biker",
									"heretic",
									"astartes",
									"infantry",
									"biker"
								],
								"activate": [
									"Shooting phase",
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem when a <span class=\"tooltip00293\" data-tooltip-content=\"#tooltip_content00293\" data-tooltip-anchor=\"#tooltip_content00293\"><span class=\"kwb\">HERETIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00299\" data-tooltip-content=\"#tooltip_content00299\" data-tooltip-anchor=\"#tooltip_content00299\"><span class=\"kwb\">BIKER</span></span> unit is selected to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase (excluding units from Renegade Chapters). You can add 1 to all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound rolls</a> made for the unit until the end of the phase."
							},
							{
								"faction_id": "CSM",
								"name": "THE MASTER IS WATCHING",
								"type": "Creations of Bile – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Feeling Bile’s expectant gaze from across the battlefield, his enhanced warriors strive slavishly to impress.",
								"source_id": "000000161",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) that is visible to and within 12\" of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> is chosen to shoot or fight with. Until the end of that phase, when resolving an attack made by a model in that unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
								"id": "000004296005",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"chaos cultists",
									"creations",
									"of",
									"bile",
									"infantry",
									"chaos",
									"cultists",
									"warlord"
								],
								"activate": [
									"Shooting phase",
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) that is visible to and within 12\" of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> is chosen to shoot or fight with. Until the end of that phase, when resolving an attack made by a model in that unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>."
							},
							{
								"faction_id": "CSM",
								"name": "FROM THE NIGHT",
								"type": "Night Lords – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The sons of Nostramo strike from the dark.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is entirely on or within a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Terrain-Features-1\">terrain</a> feature. Until the end of the turn:<br><ul><li>When a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made for that unit, add 2 to the result.</li><li>When resolving an attack made with a melee weapon by a model in that unit, add 1 to the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.</li></ul>",
								"id": "000003827007",
								"field9": "",
								"keys": [
									"night lords infantry",
									"night",
									"lords",
									"infantry"
								],
								"activate": [
									"Charge phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is entirely on or within a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Terrain-Features-1\">terrain</a> feature. Until the end of the turn:<br><ul><li>When a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made for that unit, add 2 to the result.</li><li>When resolving an attack made with a melee weapon by a model in that unit, add 1 to the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.</li></ul>"
							},
							{
								"faction_id": "CSM",
								"name": "DERMAL CHITINATION",
								"type": "Creations of Bile – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "These fighters secrete a hardening resin through their skin, temporarily toughening their already resilient hides.",
								"source_id": "000000161",
								"description": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> when a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) is selected as the target of any attacks. Add 1 to that unit’s Toughness characteristic until the end of that phase.",
								"id": "000004296006",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"chaos cultists",
									"creations",
									"of",
									"bile",
									"infantry",
									"chaos",
									"cultists"
								],
								"activate": [
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> when a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) is selected as the target of any attacks. Add 1 to that unit’s Toughness characteristic until the end of that phase."
							},
							{
								"faction_id": "CSM",
								"name": "TAKEN ALIVE",
								"type": "Creations of Bile – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "To be snatched away by Fabius Bile and his creations for experimentation is an altogether nightmarish fate.",
								"source_id": "000000161",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a> when a model from an enemy unit is destroyed as the result of an attack made with a melee weapon by a model from a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. For the rest of the battle, when taking a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Morale-Tests\">Morale test</a> for that enemy model’s unit, each model in that unit that was destroyed that turn is treated as two models for the purposes of taking that Morale test. Each enemy unit can only be selected for this Stratagem once.",
								"id": "000004296007",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"creations",
									"of",
									"bile",
									"infantry"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a> when a model from an enemy unit is destroyed as the result of an attack made with a melee weapon by a model from a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. For the rest of the battle, when taking a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Morale-Tests\">Morale test</a> for that enemy model’s unit, each model in that unit that was destroyed that turn is treated as two models for the purposes of taking that Morale test. Each enemy unit can only be selected for this Stratagem once."
							},
							{
								"faction_id": "CSM",
								"name": "RENASCENT INFILTRATION",
								"type": "Alpha Legion – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Disappear and reappear for the final strike.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is more than 3\" away from any enemy models (you cannot select a unit that arrived as <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">reinforcements</a> this turn). Remove that unit from the battlefield. At the end of your next Movement phase, set up that unit on the battlefield again, anywhere that is more than 9\" away from any enemy models. Any models that cannot be set up in this way are destroyed. If the battle ends before that unit is set back up, it is destroyed.",
								"id": "000003828006",
								"field9": "",
								"keys": [
									"alpha legion infantry",
									"alpha",
									"legion",
									"infantry"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is more than 3\" away from any enemy models (you cannot select a unit that arrived as <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">reinforcements</a> this turn). Remove that unit from the battlefield. At the end of your next Movement phase, set up that unit on the battlefield again, anywhere that is more than 9\" away from any enemy models. Any models that cannot be set up in this way are destroyed. If the battle ends before that unit is set back up, it is destroyed."
							},
							{
								"faction_id": "CSM",
								"name": "FORWARD OPERATIVES",
								"type": "Alpha Legion – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "The Alpha Legion are as illusive as a shadow.",
								"source_id": "000000161",
								"description": "Use this Stratagem during deployment, when you set up an <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
								"id": "000003828002",
								"field9": "",
								"keys": [
									"alpha legion infantry",
									"alpha",
									"legion",
									"infantry"
								],
								"activate": [
									"During deployment"
								],
								"descText": "Use this Stratagem during deployment, when you set up an <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle."
							},
							{
								"faction_id": "CSM",
								"name": "IN MIDNIGHT CLAD",
								"type": "Night Lords Stratagem",
								"cp_cost": "1",
								"legend": "Having fought countless campaigns of terror in complete darkness, the Night Lords know how to make an ally of the shadows.",
								"source_id": "",
								"description": "Use this Stratagem when a <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit is targeted by a shooting attack. For the rest of the phase, your opponent must subtract 1 from all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> that target that unit.",
								"id": "000002235024",
								"field9": "",
								"keys": [
									"night lords infantry",
									"night",
									"lords",
									"infantry"
								],
								"activate": [
									"Being targeted"
								],
								"descText": "Use this Stratagem when a <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit is targeted by a shooting attack. For the rest of the phase, your opponent must subtract 1 from all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> that target that unit."
							},
							{
								"faction_id": "CSM",
								"name": "FORWARD OPERATIVES",
								"type": "Alpha Legion Stratagem",
								"cp_cost": "1",
								"legend": "The deceitful strategies of the Alpha Legion are as illusive as a shadow and as tangled as a nest of vipers.",
								"source_id": "",
								"description": "Use this Stratagem during deployment, when you set up an <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
								"id": "000002235019",
								"field9": "",
								"keys": [
									"alpha legion infantry",
									"alpha",
									"legion",
									"infantry"
								],
								"activate": [
									"During deployment"
								],
								"descText": "Use this Stratagem during deployment, when you set up an <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle."
							},
							{
								"faction_id": "CSM",
								"name": "EXCESS OF VIOLENCE",
								"type": "Emperor’s Children Stratagem",
								"cp_cost": "1",
								"legend": "The visceral sensation of every fresh kill causes the warriors of the Emperor’s Children to enter an ecstatic frenzy of butchery and dismemberment.",
								"source_id": "",
								"description": "Use this Stratagem just before an <span class=\"tooltip00305\" data-tooltip-content=\"#tooltip_content00305\" data-tooltip-anchor=\"#tooltip_content00305\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> <span class=\"kwb\">INFANTRY</span></span> unit attacks in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Each time a model in your unit slays an enemy model, it can immediately make another <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> using the same weapon at the same target (these bonus attacks cannot themselves generate any further attacks).",
								"id": "000002235023",
								"field9": "",
								"keys": [
									"emperor’s children infantry",
									"emperor’s",
									"children",
									"infantry"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem just before an <span class=\"tooltip00305\" data-tooltip-content=\"#tooltip_content00305\" data-tooltip-anchor=\"#tooltip_content00305\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> <span class=\"kwb\">INFANTRY</span></span> unit attacks in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Each time a model in your unit slays an enemy model, it can immediately make another <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> using the same weapon at the same target (these bonus attacks cannot themselves generate any further attacks)."
							},
							{
								"faction_id": "CSM",
								"name": "WE CANNOT FAIL",
								"type": "Flawless Host – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The self-belief and desire for perfection that drives the warriors of the Flawless Host is such that their fighting skills far exceed those of less disciplined forces.",
								"source_id": "000000161",
								"description": "Use this Stratagem when you pick a <span class=\"tooltip00310\" data-tooltip-content=\"#tooltip_content00310\" data-tooltip-anchor=\"#tooltip_content00310\"><span class=\"kwb\">FLAWLESS</span> <span class=\"kwb\">HOST</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to fight with in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase you can re-roll <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> for attacks made by that unit.",
								"id": "000003299007",
								"field9": "",
								"keys": [
									"flawless host infantry",
									"flawless",
									"host",
									"infantry"
								],
								"activate": [
									"Fight phase"
								],
								"descText": "Use this Stratagem when you pick a <span class=\"tooltip00310\" data-tooltip-content=\"#tooltip_content00310\" data-tooltip-anchor=\"#tooltip_content00310\"><span class=\"kwb\">FLAWLESS</span> <span class=\"kwb\">HOST</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to fight with in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase you can re-roll <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> for attacks made by that unit."
							},
							{
								"faction_id": "CSM",
								"name": "MONSTROUS VISAGES",
								"type": "Creations of Bile – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Bile’s experimental ministrations have left these warriors as freakish monsters. Cursed with clusters of compound eyes, distended, fang-stuffed jaws or myriad other grotesqueries, they are hideous to behold.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of any phase. Select one <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>). Until the end of the turn, that unit has the following ability: ‘<span class=\"redfont\">Monstrous Visages (Aura)</span><b>:</b> While an enemy model is within 6\" of this unit, each time that model makes an attack, subtract 1 from the hit roll.’",
								"id": "000004296003",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"chaos cultists",
									"creations",
									"of",
									"bile",
									"infantry",
									"chaos",
									"cultists",
									"monstrous visages (aura)"
								],
								"activate": [
									"Enemy Morale phase",
									"Movement phase",
									"Enemy Fight phase",
									"Psychic phase",
									"Enemy Charge phase",
									"Shooting phase",
									"Charge phase",
									"Fight phase",
									"Morale phase",
									"Enemy Movement phase",
									"Enemy Psychic phase",
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem at the start of any phase. Select one <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>). Until the end of the turn, that unit has the following ability: ‘<span class=\"redfont\">Monstrous Visages (Aura)</span><b>:</b> While an enemy model is within 6\" of this unit, each time that model makes an attack, subtract 1 from the hit roll.’"
							},
							{
								"faction_id": "CSM",
								"name": "LET THE GALAXY BURN",
								"type": "Black Legion Stratagem",
								"cp_cost": "1",
								"legend": "Drawing upon millennia of festering bitterness and hate, the Black Legion attack with a ferocity that is terrible to behold.",
								"source_id": "",
								"description": "Use this Stratagem when a <span class=\"tooltip00270\" data-tooltip-content=\"#tooltip_content00270\" data-tooltip-anchor=\"#tooltip_content00270\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00271\" data-tooltip-content=\"#tooltip_content00271\" data-tooltip-anchor=\"#tooltip_content00271\"><span class=\"kwb\">BIKER</span></span> unit is selected to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase. You can re-roll all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 1 for that unit for the rest of the phase. If the unit is a <a href=\"https://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/Chaos-Space-Marines\">Chaos Space Marine squad</a>, you can re-roll all failed hit rolls for it instead.",
								"id": "000002235025",
								"field9": "",
								"keys": [
									"black legion infantry",
									"biker",
									"black",
									"legion",
									"infantry",
									"biker"
								],
								"activate": [
									"Shooting phase",
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem when a <span class=\"tooltip00270\" data-tooltip-content=\"#tooltip_content00270\" data-tooltip-anchor=\"#tooltip_content00270\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00271\" data-tooltip-content=\"#tooltip_content00271\" data-tooltip-anchor=\"#tooltip_content00271\"><span class=\"kwb\">BIKER</span></span> unit is selected to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase. You can re-roll all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 1 for that unit for the rest of the phase. If the unit is a <a href=\"https://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/Chaos-Space-Marines\">Chaos Space Marine squad</a>, you can re-roll all failed hit rolls for it instead."
							},
							{
								"faction_id": "CSM",
								"name": "COMBAT ELIXIRS",
								"type": "Emperor’s Children – Requisition Stratagem",
								"cp_cost": "2",
								"legend": "Concoctions of hideous euphoria empower the minds of these sensationalist warriors.",
								"source_id": "000000161",
								"description": "Use this Stratagem before the battle. Select one <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> unit from your army that is not a <span class=\"tooltip00304\" data-tooltip-content=\"#tooltip_content00304\" data-tooltip-anchor=\"#tooltip_content00304\"><span class=\"kwb\">VEHICLE</span></span> or <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span>, then select one of the following effects to apply to models in that unit until the end of the battle:<br><ul><li>+1 to Attacks characteristic</li><li>+1 to Strength characteristic</li><li>+2\" to Move characteristic</li><li>+1 to Toughness characteristic</li></ul>You can only use this Stratagem once per battle.",
								"id": "000003830002",
								"field9": "",
								"keys": [
									"vehicle",
									"chaos cultist",
									"emperor’s",
									"children",
									"vehicle",
									"chaos",
									"cultist"
								],
								"activate": [
									"Before battle"
								],
								"descText": "Use this Stratagem before the battle. Select one <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> unit from your army that is not a <span class=\"tooltip00304\" data-tooltip-content=\"#tooltip_content00304\" data-tooltip-anchor=\"#tooltip_content00304\"><span class=\"kwb\">VEHICLE</span></span> or <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span>, then select one of the following effects to apply to models in that unit until the end of the battle:<br><ul><li>+1 to Attacks characteristic</li><li>+1 to Strength characteristic</li><li>+2\" to Move characteristic</li><li>+1 to Toughness characteristic</li></ul>You can only use this Stratagem once per battle."
							},
							{
								"faction_id": "CSM",
								"name": "MACROTENSILE SINEWS",
								"type": "Creations of Bile – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Injecting auto-stimulants into their enhanced muscles, these warriors leap and bound across the battlefield.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) from your army. Until the end of the turn:<br><ul><li>That unit is eligible to declare charge with in a turn which they Advanced.</li><li>Add 1 to <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> and <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge rolls</a> made for that unit.</li></ul>",
								"id": "000004296004",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"chaos cultists",
									"creations",
									"of",
									"bile",
									"infantry",
									"chaos",
									"cultists"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) from your army. Until the end of the turn:<br><ul><li>That unit is eligible to declare charge with in a turn which they Advanced.</li><li>Add 1 to <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> and <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge rolls</a> made for that unit.</li></ul>"
							},
							{
								"faction_id": "CSM",
								"name": "CONCEAL",
								"type": "Alpha Legion – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "These clandestine warriors will disappear at a moment’s notice.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of that phase, enemy models can only target that unit if it is the closest visible target.",
								"id": "000003828003",
								"field9": "",
								"keys": [
									"alpha legion infantry",
									"alpha",
									"legion",
									"infantry"
								],
								"activate": [
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of that phase, enemy models can only target that unit if it is the closest visible target."
							},
							{
								"faction_id": "CSM",
								"name": "PRESCIENCE",
								"type": "Scourged – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "Tzeentch has gifted the Scourged with a measure of foresight, allowing them to read the enemy’s signals and know exactly where they will strike.",
								"source_id": "000000161",
								"description": "Use this Stratagem after your opponent sets up a unit that is arriving on the battlefield as <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">reinforcements</a>. Pick one <span class=\"tooltip00321\" data-tooltip-content=\"#tooltip_content00321\" data-tooltip-anchor=\"#tooltip_content00321\"><span class=\"kwb\">SCOURGED</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is within 12\" of that enemy unit. Your unit can immediately shoot at that enemy unit as if it were your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>.",
								"id": "000003299006",
								"field9": "",
								"keys": [
									"scourged infantry",
									"scourged",
									"infantry"
								],
								"activate": [
									"Enemy Movement phase"
								],
								"descText": "Use this Stratagem after your opponent sets up a unit that is arriving on the battlefield as <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">reinforcements</a>. Pick one <span class=\"tooltip00321\" data-tooltip-content=\"#tooltip_content00321\" data-tooltip-anchor=\"#tooltip_content00321\"><span class=\"kwb\">SCOURGED</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is within 12\" of that enemy unit. Your unit can immediately shoot at that enemy unit as if it were your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>."
							},
							{
								"faction_id": "CSM",
								"name": "TANK HUNTERS",
								"type": "Iron Warriors – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "No armour is safe from the guns of the IV Legion.",
								"source_id": "000000161",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when you choose an <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) to shoot or fight with. Select one enemy <span class=\"kwb\">VEHICLE</span> unit. Until the end of that phase, when resolving an attack made by a model in that <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> unit against the selected unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
								"id": "000003829006",
								"field9": "",
								"keys": [
									"chaos cultists",
									"iron",
									"warriors",
									"chaos",
									"cultists",
									"vehicle",
									"iron",
									"warriors"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase",
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when you choose an <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) to shoot or fight with. Select one enemy <span class=\"kwb\">VEHICLE</span> unit. Until the end of that phase, when resolving an attack made by a model in that <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> unit against the selected unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>."
							},
							{
								"faction_id": "CSM",
								"name": "STOKE THE NAILS",
								"type": "World Eaters – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Aggression stimulators implanted into the brains of the World Eaters drive them into uncontrollable rages.",
								"source_id": "000000161",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00337\" data-tooltip-content=\"#tooltip_content00337\" data-tooltip-anchor=\"#tooltip_content00337\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00338\" data-tooltip-content=\"#tooltip_content00338\" data-tooltip-anchor=\"#tooltip_content00338\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">BIKER</span></span> unit from your army that is not a <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span> is chosen to fight with. Until the end of that phase:<br><ul><li>That unit’s <a href=\"https://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/#Death-to-the-False-Emperor\">Death to the False Emperor</a> ability takes effect when targeting any enemy units, not just <span class=\"kwb\">IMPERIUM</span> units.</li><li>When targeting <span class=\"kwb\">IMPERIUM</span> units, the ability takes effect on <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 5+.</li></ul>",
								"id": "000003831008",
								"field9": "",
								"keys": [
									"world eaters infantry",
									"world eaters biker",
									"chaos cultist",
									"world",
									"eaters",
									"infantry",
									"world",
									"eaters",
									"biker",
									"chaos",
									"cultist",
									"imperium",
									"imperium"
								],
								"activate": [
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00337\" data-tooltip-content=\"#tooltip_content00337\" data-tooltip-anchor=\"#tooltip_content00337\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00338\" data-tooltip-content=\"#tooltip_content00338\" data-tooltip-anchor=\"#tooltip_content00338\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">BIKER</span></span> unit from your army that is not a <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span> is chosen to fight with. Until the end of that phase:<br><ul><li>That unit’s <a href=\"https://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/#Death-to-the-False-Emperor\">Death to the False Emperor</a> ability takes effect when targeting any enemy units, not just <span class=\"kwb\">IMPERIUM</span> units.</li><li>When targeting <span class=\"kwb\">IMPERIUM</span> units, the ability takes effect on <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 5+.</li></ul>"
							},
							{
								"faction_id": "CSM",
								"name": "CRUEL DUELLISTS",
								"type": "Emperor’s Children – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Fulgrim’s scions are renowned for their blade-craft.",
								"source_id": "000000161",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip00303\" data-tooltip-content=\"#tooltip_content00303\" data-tooltip-anchor=\"#tooltip_content00303\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span></span> unit from your army that is not a <span class=\"tooltip00304\" data-tooltip-content=\"#tooltip_content00304\" data-tooltip-anchor=\"#tooltip_content00304\"><span class=\"kwb\">VEHICLE</span></span> or <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span> is chosen to fight with. Until the end of that phase, when resolving an attack made with a melee weapon by a model in that unit, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6 that weapon has an Armour Penetration characteristic of -3 for that attack.",
								"id": "000003830007",
								"field9": "",
								"keys": [
									"emperor’s children",
									"vehicle",
									"chaos cultist",
									"emperor’s",
									"children",
									"vehicle",
									"chaos",
									"cultist"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip00303\" data-tooltip-content=\"#tooltip_content00303\" data-tooltip-anchor=\"#tooltip_content00303\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span></span> unit from your army that is not a <span class=\"tooltip00304\" data-tooltip-content=\"#tooltip_content00304\" data-tooltip-anchor=\"#tooltip_content00304\"><span class=\"kwb\">VEHICLE</span></span> or <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span> is chosen to fight with. Until the end of that phase, when resolving an attack made with a melee weapon by a model in that unit, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6 that weapon has an Armour Penetration characteristic of -3 for that attack."
							},
							{
								"faction_id": "CSM",
								"name": "CANNON FODDER",
								"type": "Iron Warriors – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "Clog up their guns with the flesh and bones of the weak.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00313\" data-tooltip-content=\"#tooltip_content00313\" data-tooltip-anchor=\"#tooltip_content00313\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army then select one friendly <span class=\"tooltip03316\" data-tooltip-content=\"#tooltip_content03316\" data-tooltip-anchor=\"#tooltip_content03316\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span> unit wholly within 6\" of that unit. Until the end of that phase, enemy models cannot target that <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">INFANTRY</span> unit if the selected <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span> unit is a closer visible target.",
								"id": "000003829008",
								"field9": "",
								"keys": [
									"iron warriors infantry",
									"iron warriors chaos cultists",
									"iron",
									"warriors",
									"infantry",
									"iron",
									"warriors",
									"chaos",
									"cultists",
									"iron",
									"warriors",
									"infantry",
									"iron",
									"warriors",
									"chaos",
									"cultists"
								],
								"activate": [
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00313\" data-tooltip-content=\"#tooltip_content00313\" data-tooltip-anchor=\"#tooltip_content00313\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army then select one friendly <span class=\"tooltip03316\" data-tooltip-content=\"#tooltip_content03316\" data-tooltip-anchor=\"#tooltip_content03316\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span> unit wholly within 6\" of that unit. Until the end of that phase, enemy models cannot target that <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">INFANTRY</span> unit if the selected <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span> unit is a closer visible target."
							},
							{
								"faction_id": "CSM",
								"name": "IN MIDNIGHT CLAD",
								"type": "Night Lords – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Having fought countless campaigns of terror in complete darkness, the Night Lords know how to make an ally of the shadows.",
								"source_id": "000000161",
								"description": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is targeted by a shooting attack. Until the end of that phase, when resolving an attack against that unit, subtract 1 from the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
								"id": "000003827002",
								"field9": "",
								"keys": [
									"night lords infantry",
									"night",
									"lords",
									"infantry"
								],
								"activate": [
									"Being targeted"
								],
								"descText": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is targeted by a shooting attack. Until the end of that phase, when resolving an attack against that unit, subtract 1 from the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>."
							}
						],
						"waha": {
							"id": "000000950",
							"name": "Plague Marines",
							"link": "https://wahapedia.ruhttps://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/Plague-Marines",
							"faction_id": "CSM",
							"source_id": "000000012",
							"role": "Elites",
							"unit_composition": "This unit contains 1 Plague Champion and 4 Plague Marines. It can include up to 2 additional Plague Marines (<b>Power Rating +2</b>), up to 5 additional Plague Marines (<b>Power Rating +4</b>), up to 10 additional Plague Marines (<b>Power Rating +9</b>) or up to 15 additional Plague Marines (<b>Power Rating +14</b>). Each model is armed with a plague knife, boltgun, blight grenades and krak grenades.",
							"transport": "",
							"power_points": "6",
							"priest": "",
							"psyker": "",
							"open_play_only": "false",
							"crusade_only": "false",
							"virtual": "false",
							"Cost": "",
							"cost_per_unit": "Нет",
							"field17": ""
						}
					},
					{
						"name": "Plague Marines",
						"slot": "Elites",
						"faction": [
							"<Legion>",
							"Nurgle",
							"Chaos",
							"Heretic Astartes"
						],
						"keywords": [
							"infantry",
							"plague marines"
						],
						"models": [{
								"name": "Plague Champion",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Boltgun",
										"amount": "3",
										"Range": "24\"",
										"Type": "Rapid Fire 1",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Blight grenades",
										"amount": "3",
										"Range": "6\"",
										"Type": "Grenade D6",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Blast."
									},
									{
										"name": "Krak grenades",
										"amount": "3",
										"Range": "6\"",
										"Type": "Grenade 1",
										"S": "6",
										"AP": "-1",
										"D": "D3",
										"Abilities": "-"
									},
									{
										"name": "Plague knife",
										"amount": "3",
										"Range": "Melee",
										"Type": "Melee",
										"S": "User",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon"
									},
									{
										"name": "Plague knife",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "User",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon"
									},
									{
										"name": "Blight grenades",
										"amount": "1",
										"Range": "6\"",
										"Type": "Grenade D6",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Blast."
									},
									{
										"name": "Krak grenades",
										"amount": "1",
										"Range": "6\"",
										"Type": "Grenade 1",
										"S": "6",
										"AP": "-1",
										"D": "D3",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "5",
									"WS": "3",
									"BS": "3",
									"S": "4",
									"T": "5",
									"W": "2",
									"A": "3",
									"Ld": "8",
									"Sv": "3"
								}
							},
							{
								"name": "Plague Marine",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Boltgun",
										"amount": "3",
										"Range": "24\"",
										"Type": "Rapid Fire 1",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Blight grenades",
										"amount": "3",
										"Range": "6\"",
										"Type": "Grenade D6",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Blast."
									},
									{
										"name": "Krak grenades",
										"amount": "3",
										"Range": "6\"",
										"Type": "Grenade 1",
										"S": "6",
										"AP": "-1",
										"D": "D3",
										"Abilities": "-"
									},
									{
										"name": "Plague knife",
										"amount": "3",
										"Range": "Melee",
										"Type": "Melee",
										"S": "User",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon"
									},
									{
										"name": "Plague knife",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "User",
										"AP": "-1",
										"D": "1",
										"Abilities": "Plague Weapon"
									},
									{
										"name": "Blight grenades",
										"amount": "1",
										"Range": "6\"",
										"Type": "Grenade D6",
										"S": "4",
										"AP": "0",
										"D": "1",
										"Abilities": "Plague Weapon. Blast."
									},
									{
										"name": "Krak grenades",
										"amount": "1",
										"Range": "6\"",
										"Type": "Grenade 1",
										"S": "6",
										"AP": "-1",
										"D": "D3",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"statlines": {
									"M": "5",
									"WS": "3",
									"BS": "3",
									"S": "4",
									"T": "5",
									"W": "2",
									"A": "2",
									"Ld": "7",
									"Sv": "3"
								}
							}
						],
						"rules": [{
								"name": "Contagions of Nurgle",
								"desc": "If every unit from your army has the DEATH GUARD keyword (excluding UNALIGNED units), this unit gains the following ability:\n\nNurgle's Gift (Contagion): While an enemy unit is within Contagion Range of this unit (see below), subtract 1 from the Toughness characteristic of models in that unit.",
								"subkeys": [
									"DEATH",
									"GUARD",
									"UNALIGNED"
								],
								"targets": [
									"DEATH GUARD",
									"UNALIGNED"
								],
								"phases": []
							},
							{
								"name": "Inexorable Advance",
								"desc": "- This unit counts as having Remained Stationary if it did not Fall Back or Advance in your previous Movement phase.\n- If this unit has the VEHICLE keyword, it does not suffer the penalty incurred to its hit rolls for firing Heavy weapons at enemy units that are within Engagement Range of it.\n- If this unit has the INFANTRY keyword, it can ignore any or all modifiers to its Move characteristic, Advance rolls and charge rolls.",
								"subkeys": [
									"VEHICLE",
									"INFANTRY"
								],
								"targets": [
									"VEHICLE",
									"INFANTRY"
								],
								"phases": [
									"Movement"
								]
							},
							{
								"name": "Objective Secured",
								"desc": "A player controls an objective marker if they have any models with this ability within range of that objective marker, even if there are more enemy models within range of that objective marker. If an enemy model within range of an objective marker also has this ability (or a similar ability), then the objective marker is controlled by the player who has the most models within range of that objective marker as normal.",
								"subkeys": [
									"A"
								],
								"targets": null,
								"phases": []
							},
							{
								"name": "Malicious Volleys",
								"desc": "Instead of following the normal rules for Rapid Fire weapons, models in this unit shooting Rapid Fire bolt weapons make double the number of attacks if any of the following apply:\n• The shooting model’s target is within half the weapon’s range.\n• The shooting model is Infantry and its unit Remained\nStationary in your previous Movement phase.\n• The shooting model is a Terminator.\nFor the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon (as defined on page 88) with the Rapid Fire type.",
								"subkeys": null,
								"targets": null,
								"phases": [
									"Movement"
								]
							},
							{
								"name": "Vectors of Death",
								"desc": "A Plague Marine equipped with 2 melee plague weapons has an Attacks characteristic of 3.",
								"subkeys": [
									"A"
								],
								"targets": null,
								"phases": []
							},
							{
								"name": "Disgustingly Resilient",
								"desc": "Each time an attack is allocated to a model in this unit, subtract 1 from the Damage characteristic of that attack (to a minimum of 1).",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Remorseless",
								"desc": "Each time a Combat Attrition test is taken for this unit, ignore any or all modifiers.",
								"subkeys": null,
								"targets": null,
								"phases": []
							}
						],
						"spells": [],
						"stratagems": [{
								"faction_id": "CSM",
								"name": "EXCESS OF VIOLENCE",
								"type": "Emperor’s Children – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The visceral sensation of every fresh kill causes the warriors of the Emperor’s Children to enter an ecstatic frenzy of butchery and dismemberment.",
								"source_id": "000000161",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when you choose an <span class=\"tooltip00305\" data-tooltip-content=\"#tooltip_content00305\" data-tooltip-anchor=\"#tooltip_content00305\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to fight with. Until the end of that phase, if an attack made by a model in that unit destroys an enemy model, the attacking model can make one additional attack against the same unit using the same weapon.",
								"id": "000003830003",
								"field9": "",
								"keys": [
									"emperor’s children infantry",
									"emperor’s",
									"children",
									"infantry"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when you choose an <span class=\"tooltip00305\" data-tooltip-content=\"#tooltip_content00305\" data-tooltip-anchor=\"#tooltip_content00305\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to fight with. Until the end of that phase, if an attack made by a model in that unit destroys an enemy model, the attacking model can make one additional attack against the same unit using the same weapon."
							},
							{
								"faction_id": "CSM",
								"name": "LET THE GALAXY BURN",
								"type": "Black Legion – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The Black Legion attack with a terrible ferocity.",
								"source_id": "000000161",
								"description": "Use this Stratagem when a <span class=\"tooltip00270\" data-tooltip-content=\"#tooltip_content00270\" data-tooltip-anchor=\"#tooltip_content00270\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00271\" data-tooltip-content=\"#tooltip_content00271\" data-tooltip-anchor=\"#tooltip_content00271\"><span class=\"kwb\">BIKER</span></span> unit from your army is picked to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase. You can re-roll all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 1 for that unit for the rest of the phase. If the unit is a <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">SPACE</span> <span class=\"kwb\">MARINES</span> unit, you can re-roll hit rolls for it instead.",
								"id": "000003298002",
								"field9": "",
								"keys": [
									"black legion infantry",
									"biker",
									"black",
									"legion",
									"infantry",
									"biker",
									"chaos",
									"space",
									"marines"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase",
									"Shooting phase"
								],
								"descText": "Use this Stratagem when a <span class=\"tooltip00270\" data-tooltip-content=\"#tooltip_content00270\" data-tooltip-anchor=\"#tooltip_content00270\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00271\" data-tooltip-content=\"#tooltip_content00271\" data-tooltip-anchor=\"#tooltip_content00271\"><span class=\"kwb\">BIKER</span></span> unit from your army is picked to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase. You can re-roll all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 1 for that unit for the rest of the phase. If the unit is a <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">SPACE</span> <span class=\"kwb\">MARINES</span> unit, you can re-roll hit rolls for it instead."
							},
							{
								"faction_id": "CSM",
								"name": "GRANDFATHER’S BLESSINGS",
								"type": "Chaos Space Marines Stratagem",
								"cp_cost": "2",
								"legend": "Grandfather Nurgle is eager to bestow daemonic fecundity upon his faithful servants, sealing their gaping wounds with pulsating growths and replacing their spilt blood with curdling ichor.",
								"source_id": "",
								"description": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select a <span class=\"tooltip00288\" data-tooltip-content=\"#tooltip_content00288\" data-tooltip-anchor=\"#tooltip_content00288\"><span class=\"kwb\">HERETIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">NURGLE</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00289\" data-tooltip-content=\"#tooltip_content00289\" data-tooltip-anchor=\"#tooltip_content00289\"><span class=\"kwb\">BIKER</span></span> unit. One model in the unit heals D3 wounds. If there are no wounded models in the unit, a single model in the unit that was slain earlier in the battle is returned to the unit with a single wound remaining.",
								"id": "000002235008",
								"field9": "",
								"keys": [
									"heretic astartes nurgle infantry",
									"biker",
									"heretic",
									"astartes",
									"nurgle",
									"infantry",
									"biker"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select a <span class=\"tooltip00288\" data-tooltip-content=\"#tooltip_content00288\" data-tooltip-anchor=\"#tooltip_content00288\"><span class=\"kwb\">HERETIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">NURGLE</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00289\" data-tooltip-content=\"#tooltip_content00289\" data-tooltip-anchor=\"#tooltip_content00289\"><span class=\"kwb\">BIKER</span></span> unit. One model in the unit heals D3 wounds. If there are no wounded models in the unit, a single model in the unit that was slain earlier in the battle is returned to the unit with a single wound remaining."
							},
							{
								"faction_id": "CSM",
								"name": "APOPLECTIC FRENZY",
								"type": "World Eaters – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Howling in rage, World Eaters surge towards the foe.",
								"source_id": "000000161",
								"description": "Use this Stratagem during deployment, when you set up a <span class=\"tooltip00337\" data-tooltip-content=\"#tooltip_content00337\" data-tooltip-anchor=\"#tooltip_content00337\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first.",
								"id": "000003831003",
								"field9": "",
								"keys": [
									"world eaters infantry",
									"world",
									"eaters",
									"infantry"
								],
								"activate": [
									"During deployment"
								],
								"descText": "Use this Stratagem during deployment, when you set up a <span class=\"tooltip00337\" data-tooltip-content=\"#tooltip_content00337\" data-tooltip-anchor=\"#tooltip_content00337\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first."
							},
							{
								"faction_id": "CSM",
								"name": "VETERANS OF THE LONG WAR",
								"type": "Chaos Space Marines Stratagem",
								"cp_cost": "1",
								"legend": "The hatred of the Traitor Legions has burned for millennia.",
								"source_id": "",
								"description": "Use this Stratagem when a <span class=\"tooltip00293\" data-tooltip-content=\"#tooltip_content00293\" data-tooltip-anchor=\"#tooltip_content00293\"><span class=\"kwb\">HERETIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00299\" data-tooltip-content=\"#tooltip_content00299\" data-tooltip-anchor=\"#tooltip_content00299\"><span class=\"kwb\">BIKER</span></span> unit is selected to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase (excluding units from Renegade Chapters). You can add 1 to all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound rolls</a> made for the unit until the end of the phase.",
								"id": "000002235007",
								"field9": "",
								"keys": [
									"heretic astartes infantry",
									"biker",
									"heretic",
									"astartes",
									"infantry",
									"biker"
								],
								"activate": [
									"Shooting phase",
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem when a <span class=\"tooltip00293\" data-tooltip-content=\"#tooltip_content00293\" data-tooltip-anchor=\"#tooltip_content00293\"><span class=\"kwb\">HERETIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00299\" data-tooltip-content=\"#tooltip_content00299\" data-tooltip-anchor=\"#tooltip_content00299\"><span class=\"kwb\">BIKER</span></span> unit is selected to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase (excluding units from Renegade Chapters). You can add 1 to all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound rolls</a> made for the unit until the end of the phase."
							},
							{
								"faction_id": "CSM",
								"name": "THE MASTER IS WATCHING",
								"type": "Creations of Bile – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Feeling Bile’s expectant gaze from across the battlefield, his enhanced warriors strive slavishly to impress.",
								"source_id": "000000161",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) that is visible to and within 12\" of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> is chosen to shoot or fight with. Until the end of that phase, when resolving an attack made by a model in that unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
								"id": "000004296005",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"chaos cultists",
									"creations",
									"of",
									"bile",
									"infantry",
									"chaos",
									"cultists",
									"warlord"
								],
								"activate": [
									"Shooting phase",
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) that is visible to and within 12\" of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> is chosen to shoot or fight with. Until the end of that phase, when resolving an attack made by a model in that unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>."
							},
							{
								"faction_id": "CSM",
								"name": "FROM THE NIGHT",
								"type": "Night Lords – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The sons of Nostramo strike from the dark.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is entirely on or within a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Terrain-Features-1\">terrain</a> feature. Until the end of the turn:<br><ul><li>When a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made for that unit, add 2 to the result.</li><li>When resolving an attack made with a melee weapon by a model in that unit, add 1 to the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.</li></ul>",
								"id": "000003827007",
								"field9": "",
								"keys": [
									"night lords infantry",
									"night",
									"lords",
									"infantry"
								],
								"activate": [
									"Charge phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is entirely on or within a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Terrain-Features-1\">terrain</a> feature. Until the end of the turn:<br><ul><li>When a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made for that unit, add 2 to the result.</li><li>When resolving an attack made with a melee weapon by a model in that unit, add 1 to the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.</li></ul>"
							},
							{
								"faction_id": "CSM",
								"name": "DERMAL CHITINATION",
								"type": "Creations of Bile – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "These fighters secrete a hardening resin through their skin, temporarily toughening their already resilient hides.",
								"source_id": "000000161",
								"description": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> when a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) is selected as the target of any attacks. Add 1 to that unit’s Toughness characteristic until the end of that phase.",
								"id": "000004296006",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"chaos cultists",
									"creations",
									"of",
									"bile",
									"infantry",
									"chaos",
									"cultists"
								],
								"activate": [
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> when a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) is selected as the target of any attacks. Add 1 to that unit’s Toughness characteristic until the end of that phase."
							},
							{
								"faction_id": "CSM",
								"name": "TAKEN ALIVE",
								"type": "Creations of Bile – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "To be snatched away by Fabius Bile and his creations for experimentation is an altogether nightmarish fate.",
								"source_id": "000000161",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a> when a model from an enemy unit is destroyed as the result of an attack made with a melee weapon by a model from a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. For the rest of the battle, when taking a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Morale-Tests\">Morale test</a> for that enemy model’s unit, each model in that unit that was destroyed that turn is treated as two models for the purposes of taking that Morale test. Each enemy unit can only be selected for this Stratagem once.",
								"id": "000004296007",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"creations",
									"of",
									"bile",
									"infantry"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a> when a model from an enemy unit is destroyed as the result of an attack made with a melee weapon by a model from a <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. For the rest of the battle, when taking a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Morale-Tests\">Morale test</a> for that enemy model’s unit, each model in that unit that was destroyed that turn is treated as two models for the purposes of taking that Morale test. Each enemy unit can only be selected for this Stratagem once."
							},
							{
								"faction_id": "CSM",
								"name": "RENASCENT INFILTRATION",
								"type": "Alpha Legion – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Disappear and reappear for the final strike.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is more than 3\" away from any enemy models (you cannot select a unit that arrived as <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">reinforcements</a> this turn). Remove that unit from the battlefield. At the end of your next Movement phase, set up that unit on the battlefield again, anywhere that is more than 9\" away from any enemy models. Any models that cannot be set up in this way are destroyed. If the battle ends before that unit is set back up, it is destroyed.",
								"id": "000003828006",
								"field9": "",
								"keys": [
									"alpha legion infantry",
									"alpha",
									"legion",
									"infantry"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is more than 3\" away from any enemy models (you cannot select a unit that arrived as <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">reinforcements</a> this turn). Remove that unit from the battlefield. At the end of your next Movement phase, set up that unit on the battlefield again, anywhere that is more than 9\" away from any enemy models. Any models that cannot be set up in this way are destroyed. If the battle ends before that unit is set back up, it is destroyed."
							},
							{
								"faction_id": "CSM",
								"name": "FORWARD OPERATIVES",
								"type": "Alpha Legion – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "The Alpha Legion are as illusive as a shadow.",
								"source_id": "000000161",
								"description": "Use this Stratagem during deployment, when you set up an <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
								"id": "000003828002",
								"field9": "",
								"keys": [
									"alpha legion infantry",
									"alpha",
									"legion",
									"infantry"
								],
								"activate": [
									"During deployment"
								],
								"descText": "Use this Stratagem during deployment, when you set up an <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle."
							},
							{
								"faction_id": "CSM",
								"name": "IN MIDNIGHT CLAD",
								"type": "Night Lords Stratagem",
								"cp_cost": "1",
								"legend": "Having fought countless campaigns of terror in complete darkness, the Night Lords know how to make an ally of the shadows.",
								"source_id": "",
								"description": "Use this Stratagem when a <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit is targeted by a shooting attack. For the rest of the phase, your opponent must subtract 1 from all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> that target that unit.",
								"id": "000002235024",
								"field9": "",
								"keys": [
									"night lords infantry",
									"night",
									"lords",
									"infantry"
								],
								"activate": [
									"Being targeted"
								],
								"descText": "Use this Stratagem when a <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit is targeted by a shooting attack. For the rest of the phase, your opponent must subtract 1 from all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> that target that unit."
							},
							{
								"faction_id": "CSM",
								"name": "FORWARD OPERATIVES",
								"type": "Alpha Legion Stratagem",
								"cp_cost": "1",
								"legend": "The deceitful strategies of the Alpha Legion are as illusive as a shadow and as tangled as a nest of vipers.",
								"source_id": "",
								"description": "Use this Stratagem during deployment, when you set up an <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
								"id": "000002235019",
								"field9": "",
								"keys": [
									"alpha legion infantry",
									"alpha",
									"legion",
									"infantry"
								],
								"activate": [
									"During deployment"
								],
								"descText": "Use this Stratagem during deployment, when you set up an <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. At the start of the first battle round but before the first turn begins, you can move that unit up to 9\". It cannot end this move within 9\" of any enemy models. If both players have units that can move before the first turn begins, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle."
							},
							{
								"faction_id": "CSM",
								"name": "EXCESS OF VIOLENCE",
								"type": "Emperor’s Children Stratagem",
								"cp_cost": "1",
								"legend": "The visceral sensation of every fresh kill causes the warriors of the Emperor’s Children to enter an ecstatic frenzy of butchery and dismemberment.",
								"source_id": "",
								"description": "Use this Stratagem just before an <span class=\"tooltip00305\" data-tooltip-content=\"#tooltip_content00305\" data-tooltip-anchor=\"#tooltip_content00305\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> <span class=\"kwb\">INFANTRY</span></span> unit attacks in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Each time a model in your unit slays an enemy model, it can immediately make another <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> using the same weapon at the same target (these bonus attacks cannot themselves generate any further attacks).",
								"id": "000002235023",
								"field9": "",
								"keys": [
									"emperor’s children infantry",
									"emperor’s",
									"children",
									"infantry"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem just before an <span class=\"tooltip00305\" data-tooltip-content=\"#tooltip_content00305\" data-tooltip-anchor=\"#tooltip_content00305\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> <span class=\"kwb\">INFANTRY</span></span> unit attacks in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Each time a model in your unit slays an enemy model, it can immediately make another <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> using the same weapon at the same target (these bonus attacks cannot themselves generate any further attacks)."
							},
							{
								"faction_id": "CSM",
								"name": "WE CANNOT FAIL",
								"type": "Flawless Host – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "The self-belief and desire for perfection that drives the warriors of the Flawless Host is such that their fighting skills far exceed those of less disciplined forces.",
								"source_id": "000000161",
								"description": "Use this Stratagem when you pick a <span class=\"tooltip00310\" data-tooltip-content=\"#tooltip_content00310\" data-tooltip-anchor=\"#tooltip_content00310\"><span class=\"kwb\">FLAWLESS</span> <span class=\"kwb\">HOST</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to fight with in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase you can re-roll <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> for attacks made by that unit.",
								"id": "000003299007",
								"field9": "",
								"keys": [
									"flawless host infantry",
									"flawless",
									"host",
									"infantry"
								],
								"activate": [
									"Fight phase"
								],
								"descText": "Use this Stratagem when you pick a <span class=\"tooltip00310\" data-tooltip-content=\"#tooltip_content00310\" data-tooltip-anchor=\"#tooltip_content00310\"><span class=\"kwb\">FLAWLESS</span> <span class=\"kwb\">HOST</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to fight with in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase you can re-roll <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> for attacks made by that unit."
							},
							{
								"faction_id": "CSM",
								"name": "MONSTROUS VISAGES",
								"type": "Creations of Bile – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Bile’s experimental ministrations have left these warriors as freakish monsters. Cursed with clusters of compound eyes, distended, fang-stuffed jaws or myriad other grotesqueries, they are hideous to behold.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of any phase. Select one <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>). Until the end of the turn, that unit has the following ability: ‘<span class=\"redfont\">Monstrous Visages (Aura)</span><b>:</b> While an enemy model is within 6\" of this unit, each time that model makes an attack, subtract 1 from the hit roll.’",
								"id": "000004296003",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"chaos cultists",
									"creations",
									"of",
									"bile",
									"infantry",
									"chaos",
									"cultists",
									"monstrous visages (aura)"
								],
								"activate": [
									"Enemy Morale phase",
									"Movement phase",
									"Enemy Fight phase",
									"Psychic phase",
									"Enemy Charge phase",
									"Shooting phase",
									"Charge phase",
									"Fight phase",
									"Morale phase",
									"Enemy Movement phase",
									"Enemy Psychic phase",
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem at the start of any phase. Select one <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>). Until the end of the turn, that unit has the following ability: ‘<span class=\"redfont\">Monstrous Visages (Aura)</span><b>:</b> While an enemy model is within 6\" of this unit, each time that model makes an attack, subtract 1 from the hit roll.’"
							},
							{
								"faction_id": "CSM",
								"name": "LET THE GALAXY BURN",
								"type": "Black Legion Stratagem",
								"cp_cost": "1",
								"legend": "Drawing upon millennia of festering bitterness and hate, the Black Legion attack with a ferocity that is terrible to behold.",
								"source_id": "",
								"description": "Use this Stratagem when a <span class=\"tooltip00270\" data-tooltip-content=\"#tooltip_content00270\" data-tooltip-anchor=\"#tooltip_content00270\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00271\" data-tooltip-content=\"#tooltip_content00271\" data-tooltip-anchor=\"#tooltip_content00271\"><span class=\"kwb\">BIKER</span></span> unit is selected to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase. You can re-roll all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 1 for that unit for the rest of the phase. If the unit is a <a href=\"https://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/Chaos-Space-Marines\">Chaos Space Marine squad</a>, you can re-roll all failed hit rolls for it instead.",
								"id": "000002235025",
								"field9": "",
								"keys": [
									"black legion infantry",
									"biker",
									"black",
									"legion",
									"infantry",
									"biker"
								],
								"activate": [
									"Shooting phase",
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem when a <span class=\"tooltip00270\" data-tooltip-content=\"#tooltip_content00270\" data-tooltip-anchor=\"#tooltip_content00270\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00271\" data-tooltip-content=\"#tooltip_content00271\" data-tooltip-anchor=\"#tooltip_content00271\"><span class=\"kwb\">BIKER</span></span> unit is selected to attack in a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight</a> phase. You can re-roll all <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 1 for that unit for the rest of the phase. If the unit is a <a href=\"https://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/Chaos-Space-Marines\">Chaos Space Marine squad</a>, you can re-roll all failed hit rolls for it instead."
							},
							{
								"faction_id": "CSM",
								"name": "COMBAT ELIXIRS",
								"type": "Emperor’s Children – Requisition Stratagem",
								"cp_cost": "2",
								"legend": "Concoctions of hideous euphoria empower the minds of these sensationalist warriors.",
								"source_id": "000000161",
								"description": "Use this Stratagem before the battle. Select one <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> unit from your army that is not a <span class=\"tooltip00304\" data-tooltip-content=\"#tooltip_content00304\" data-tooltip-anchor=\"#tooltip_content00304\"><span class=\"kwb\">VEHICLE</span></span> or <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span>, then select one of the following effects to apply to models in that unit until the end of the battle:<br><ul><li>+1 to Attacks characteristic</li><li>+1 to Strength characteristic</li><li>+2\" to Move characteristic</li><li>+1 to Toughness characteristic</li></ul>You can only use this Stratagem once per battle.",
								"id": "000003830002",
								"field9": "",
								"keys": [
									"vehicle",
									"chaos cultist",
									"emperor’s",
									"children",
									"vehicle",
									"chaos",
									"cultist"
								],
								"activate": [
									"Before battle"
								],
								"descText": "Use this Stratagem before the battle. Select one <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span> unit from your army that is not a <span class=\"tooltip00304\" data-tooltip-content=\"#tooltip_content00304\" data-tooltip-anchor=\"#tooltip_content00304\"><span class=\"kwb\">VEHICLE</span></span> or <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span>, then select one of the following effects to apply to models in that unit until the end of the battle:<br><ul><li>+1 to Attacks characteristic</li><li>+1 to Strength characteristic</li><li>+2\" to Move characteristic</li><li>+1 to Toughness characteristic</li></ul>You can only use this Stratagem once per battle."
							},
							{
								"faction_id": "CSM",
								"name": "MACROTENSILE SINEWS",
								"type": "Creations of Bile – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Injecting auto-stimulants into their enhanced muscles, these warriors leap and bound across the battlefield.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) from your army. Until the end of the turn:<br><ul><li>That unit is eligible to declare charge with in a turn which they Advanced.</li><li>Add 1 to <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> and <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge rolls</a> made for that unit.</li></ul>",
								"id": "000004296004",
								"field9": "",
								"keys": [
									"creations of bile infantry",
									"chaos cultists",
									"creations",
									"of",
									"bile",
									"infantry",
									"chaos",
									"cultists"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00300\" data-tooltip-content=\"#tooltip_content00300\" data-tooltip-anchor=\"#tooltip_content00300\"><span class=\"kwb\">CREATIONS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb\">BILE</span> <span class=\"kwb\">INFANTRY</span></span> unit (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) from your army. Until the end of the turn:<br><ul><li>That unit is eligible to declare charge with in a turn which they Advanced.</li><li>Add 1 to <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> and <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge rolls</a> made for that unit.</li></ul>"
							},
							{
								"faction_id": "CSM",
								"name": "CONCEAL",
								"type": "Alpha Legion – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "These clandestine warriors will disappear at a moment’s notice.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of that phase, enemy models can only target that unit if it is the closest visible target.",
								"id": "000003828003",
								"field9": "",
								"keys": [
									"alpha legion infantry",
									"alpha",
									"legion",
									"infantry"
								],
								"activate": [
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00269\" data-tooltip-content=\"#tooltip_content00269\" data-tooltip-anchor=\"#tooltip_content00269\"><span class=\"kwb\">ALPHA</span> <span class=\"kwb\">LEGION</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of that phase, enemy models can only target that unit if it is the closest visible target."
							},
							{
								"faction_id": "CSM",
								"name": "PRESCIENCE",
								"type": "Scourged – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "Tzeentch has gifted the Scourged with a measure of foresight, allowing them to read the enemy’s signals and know exactly where they will strike.",
								"source_id": "000000161",
								"description": "Use this Stratagem after your opponent sets up a unit that is arriving on the battlefield as <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">reinforcements</a>. Pick one <span class=\"tooltip00321\" data-tooltip-content=\"#tooltip_content00321\" data-tooltip-anchor=\"#tooltip_content00321\"><span class=\"kwb\">SCOURGED</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is within 12\" of that enemy unit. Your unit can immediately shoot at that enemy unit as if it were your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>.",
								"id": "000003299006",
								"field9": "",
								"keys": [
									"scourged infantry",
									"scourged",
									"infantry"
								],
								"activate": [
									"Enemy Movement phase"
								],
								"descText": "Use this Stratagem after your opponent sets up a unit that is arriving on the battlefield as <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">reinforcements</a>. Pick one <span class=\"tooltip00321\" data-tooltip-content=\"#tooltip_content00321\" data-tooltip-anchor=\"#tooltip_content00321\"><span class=\"kwb\">SCOURGED</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is within 12\" of that enemy unit. Your unit can immediately shoot at that enemy unit as if it were your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>."
							},
							{
								"faction_id": "CSM",
								"name": "TANK HUNTERS",
								"type": "Iron Warriors – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "No armour is safe from the guns of the IV Legion.",
								"source_id": "000000161",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when you choose an <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) to shoot or fight with. Select one enemy <span class=\"kwb\">VEHICLE</span> unit. Until the end of that phase, when resolving an attack made by a model in that <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> unit against the selected unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
								"id": "000003829006",
								"field9": "",
								"keys": [
									"chaos cultists",
									"iron",
									"warriors",
									"chaos",
									"cultists",
									"vehicle",
									"iron",
									"warriors"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase",
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when you choose an <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> unit from your army (excluding <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span>) to shoot or fight with. Select one enemy <span class=\"kwb\">VEHICLE</span> unit. Until the end of that phase, when resolving an attack made by a model in that <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> unit against the selected unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>."
							},
							{
								"faction_id": "CSM",
								"name": "STOKE THE NAILS",
								"type": "World Eaters – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Aggression stimulators implanted into the brains of the World Eaters drive them into uncontrollable rages.",
								"source_id": "000000161",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00337\" data-tooltip-content=\"#tooltip_content00337\" data-tooltip-anchor=\"#tooltip_content00337\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00338\" data-tooltip-content=\"#tooltip_content00338\" data-tooltip-anchor=\"#tooltip_content00338\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">BIKER</span></span> unit from your army that is not a <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span> is chosen to fight with. Until the end of that phase:<br><ul><li>That unit’s <a href=\"https://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/#Death-to-the-False-Emperor\">Death to the False Emperor</a> ability takes effect when targeting any enemy units, not just <span class=\"kwb\">IMPERIUM</span> units.</li><li>When targeting <span class=\"kwb\">IMPERIUM</span> units, the ability takes effect on <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 5+.</li></ul>",
								"id": "000003831008",
								"field9": "",
								"keys": [
									"world eaters infantry",
									"world eaters biker",
									"chaos cultist",
									"world",
									"eaters",
									"infantry",
									"world",
									"eaters",
									"biker",
									"chaos",
									"cultist",
									"imperium",
									"imperium"
								],
								"activate": [
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00337\" data-tooltip-content=\"#tooltip_content00337\" data-tooltip-anchor=\"#tooltip_content00337\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip00338\" data-tooltip-content=\"#tooltip_content00338\" data-tooltip-anchor=\"#tooltip_content00338\"><span class=\"kwb\">WORLD</span> <span class=\"kwb\">EATERS</span> <span class=\"kwb\">BIKER</span></span> unit from your army that is not a <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span> is chosen to fight with. Until the end of that phase:<br><ul><li>That unit’s <a href=\"https://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/#Death-to-the-False-Emperor\">Death to the False Emperor</a> ability takes effect when targeting any enemy units, not just <span class=\"kwb\">IMPERIUM</span> units.</li><li>When targeting <span class=\"kwb\">IMPERIUM</span> units, the ability takes effect on <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> of 5+.</li></ul>"
							},
							{
								"faction_id": "CSM",
								"name": "CRUEL DUELLISTS",
								"type": "Emperor’s Children – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Fulgrim’s scions are renowned for their blade-craft.",
								"source_id": "000000161",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip00303\" data-tooltip-content=\"#tooltip_content00303\" data-tooltip-anchor=\"#tooltip_content00303\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span></span> unit from your army that is not a <span class=\"tooltip00304\" data-tooltip-content=\"#tooltip_content00304\" data-tooltip-anchor=\"#tooltip_content00304\"><span class=\"kwb\">VEHICLE</span></span> or <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span> is chosen to fight with. Until the end of that phase, when resolving an attack made with a melee weapon by a model in that unit, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6 that weapon has an Armour Penetration characteristic of -3 for that attack.",
								"id": "000003830007",
								"field9": "",
								"keys": [
									"emperor’s children",
									"vehicle",
									"chaos cultist",
									"emperor’s",
									"children",
									"vehicle",
									"chaos",
									"cultist"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip00303\" data-tooltip-content=\"#tooltip_content00303\" data-tooltip-anchor=\"#tooltip_content00303\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">CHILDREN</span></span> unit from your army that is not a <span class=\"tooltip00304\" data-tooltip-content=\"#tooltip_content00304\" data-tooltip-anchor=\"#tooltip_content00304\"><span class=\"kwb\">VEHICLE</span></span> or <span class=\"tooltip03311\" data-tooltip-content=\"#tooltip_content03311\" data-tooltip-anchor=\"#tooltip_content03311\"><span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTIST</span></span> is chosen to fight with. Until the end of that phase, when resolving an attack made with a melee weapon by a model in that unit, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6 that weapon has an Armour Penetration characteristic of -3 for that attack."
							},
							{
								"faction_id": "CSM",
								"name": "CANNON FODDER",
								"type": "Iron Warriors – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "Clog up their guns with the flesh and bones of the weak.",
								"source_id": "000000161",
								"description": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00313\" data-tooltip-content=\"#tooltip_content00313\" data-tooltip-anchor=\"#tooltip_content00313\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army then select one friendly <span class=\"tooltip03316\" data-tooltip-content=\"#tooltip_content03316\" data-tooltip-anchor=\"#tooltip_content03316\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span> unit wholly within 6\" of that unit. Until the end of that phase, enemy models cannot target that <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">INFANTRY</span> unit if the selected <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span> unit is a closer visible target.",
								"id": "000003829008",
								"field9": "",
								"keys": [
									"iron warriors infantry",
									"iron warriors chaos cultists",
									"iron",
									"warriors",
									"infantry",
									"iron",
									"warriors",
									"chaos",
									"cultists",
									"iron",
									"warriors",
									"infantry",
									"iron",
									"warriors",
									"chaos",
									"cultists"
								],
								"activate": [
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00313\" data-tooltip-content=\"#tooltip_content00313\" data-tooltip-anchor=\"#tooltip_content00313\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army then select one friendly <span class=\"tooltip03316\" data-tooltip-content=\"#tooltip_content03316\" data-tooltip-anchor=\"#tooltip_content03316\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span></span> unit wholly within 6\" of that unit. Until the end of that phase, enemy models cannot target that <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">INFANTRY</span> unit if the selected <span class=\"kwb\">IRON</span> <span class=\"kwb\">WARRIORS</span> <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">CULTISTS</span> unit is a closer visible target."
							},
							{
								"faction_id": "CSM",
								"name": "IN MIDNIGHT CLAD",
								"type": "Night Lords – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Having fought countless campaigns of terror in complete darkness, the Night Lords know how to make an ally of the shadows.",
								"source_id": "000000161",
								"description": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is targeted by a shooting attack. Until the end of that phase, when resolving an attack against that unit, subtract 1 from the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
								"id": "000003827002",
								"field9": "",
								"keys": [
									"night lords infantry",
									"night",
									"lords",
									"infantry"
								],
								"activate": [
									"Being targeted"
								],
								"descText": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00319\" data-tooltip-content=\"#tooltip_content00319\" data-tooltip-anchor=\"#tooltip_content00319\"><span class=\"kwb\">NIGHT</span> <span class=\"kwb\">LORDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is targeted by a shooting attack. Until the end of that phase, when resolving an attack against that unit, subtract 1 from the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>."
							}
						],
						"waha": {
							"id": "000000950",
							"name": "Plague Marines",
							"link": "https://wahapedia.ruhttps://wahapedia.ru/wh40k9ed/factions/chaos-space-marines/Plague-Marines",
							"faction_id": "CSM",
							"source_id": "000000012",
							"role": "Elites",
							"unit_composition": "This unit contains 1 Plague Champion and 4 Plague Marines. It can include up to 2 additional Plague Marines (<b>Power Rating +2</b>), up to 5 additional Plague Marines (<b>Power Rating +4</b>), up to 10 additional Plague Marines (<b>Power Rating +9</b>) or up to 15 additional Plague Marines (<b>Power Rating +14</b>). Each model is armed with a plague knife, boltgun, blight grenades and krak grenades.",
							"transport": "",
							"power_points": "6",
							"priest": "",
							"psyker": "",
							"open_play_only": "false",
							"crusade_only": "false",
							"virtual": "false",
							"Cost": "",
							"cost_per_unit": "Нет",
							"field17": ""
						}
					},
					{
						"name": "Foul Blightspawn",
						"slot": "Elites",
						"faction": [
							"Heretic Astartes",
							"Chaos",
							"<Plague Company>",
							"Nurgle",
							"Death Guard"
						],
						"keywords": [
							"foetid virion",
							"bubonic astartes",
							"infantry",
							"character",
							"foul blightspawn"
						],
						"models": [{
							"name": "Foul Blightspawn",
							"faction": "",
							"keywords": [],
							"weapons": [{
									"name": "Blight grenades",
									"amount": "1",
									"Range": "6\"",
									"Type": "Grenade D6",
									"S": "4",
									"AP": "0",
									"D": "1",
									"Abilities": "Plague Weapon. Blast."
								},
								{
									"name": "Krak grenades",
									"amount": "1",
									"Range": "6\"",
									"Type": "Grenade 1",
									"S": "6",
									"AP": "-1",
									"D": "D3",
									"Abilities": "-"
								},
								{
									"name": "Plague sprayer",
									"amount": "1",
									"Range": "12\"",
									"Type": "Assault D6",
									"S": "7",
									"AP": "-3",
									"D": "2",
									"Abilities": "Plague Weapon. Each time an attack is made with this weapon, that attack automatically hits the target."
								},
								{
									"name": "Unholy death's head grenade",
									"amount": "1",
									"Range": "6\"",
									"Type": "Grenade 2D6",
									"S": "5",
									"AP": "-1",
									"D": "1",
									"Abilities": "Blast. Plague Weapon. The bearer can only shoot with this weapon once per battle."
								}
							],
							"wargear": [],
							"statlines": {
								"M": "5",
								"WS": "3",
								"BS": "3",
								"S": "4",
								"T": "5",
								"W": "4",
								"A": "4",
								"Ld": "8",
								"Sv": "3"
							}
						}],
						"rules": [{
								"name": "Contagions of Nurgle",
								"desc": "If every unit from your army has the DEATH GUARD keyword (excluding UNALIGNED units), this unit gains the following ability:\n\nNurgle's Gift (Contagion): While an enemy unit is within Contagion Range of this unit (see below), subtract 1 from the Toughness characteristic of models in that unit.",
								"subkeys": [
									"DEATH",
									"GUARD",
									"UNALIGNED"
								],
								"targets": [
									"DEATH GUARD",
									"UNALIGNED"
								],
								"phases": []
							},
							{
								"name": "Inexorable Advance",
								"desc": "- This unit counts as having Remained Stationary if it did not Fall Back or Advance in your previous Movement phase.\n- If this unit has the VEHICLE keyword, it does not suffer the penalty incurred to its hit rolls for firing Heavy weapons at enemy units that are within Engagement Range of it.\n- If this unit has the INFANTRY keyword, it can ignore any or all modifiers to its Move characteristic, Advance rolls and charge rolls.",
								"subkeys": [
									"VEHICLE",
									"INFANTRY"
								],
								"targets": [
									"VEHICLE",
									"INFANTRY"
								],
								"phases": [
									"Movement"
								]
							},
							{
								"name": "Putrefying Stink",
								"desc": "At the start of the Fight phase, you can select one enemy unit within 3\" of this model. That unit is not eligible to fight this phase until after all eligible units from your army have done so.",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Disgustingly Resilient",
								"desc": "Each time an attack is allocated to a model in this unit, subtract 1 from the Damage characteristic of that attack (to a minimum of 1).",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Revolting Stench (Aura)",
								"desc": "While an enemy unit is within 6\" of the bearer, that unit cannot make use of any rules that allow it to fight first and never counts as having made a charge move this turn, irrespective of any abilities that unit may have.",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Eater Plague (Contagion)",
								"desc": "While an enemy unit is within Contagion Range of this unit, each time an attack is made by a friendly WRETCHED model against that enemy unit, an unmodified hit roll of 6 automatically wounds the target.",
								"subkeys": [
									"WRETCHED"
								],
								"targets": [
									"WRETCHED"
								],
								"phases": []
							},
							{
								"name": "Viscous Death",
								"desc": "Each time you roll to determine the number of attacks made with this weapon, you can re-roll the result.",
								"subkeys": null,
								"targets": null,
								"phases": []
							}
						],
						"spells": [],
						"stratagems": [{
								"faction_id": "DG",
								"name": "THE BLIGHTENING",
								"type": "Death Guard – Wargear Stratagem",
								"cp_cost": "1",
								"legend": "The effects of blight grenades - so horrendous to their victims - have no impact on the Death Guard, who gladly use the devices in extreme close quarters with the enemy.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select up to three <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> models from your army. Until the end of the phase, <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapons\">plague weapons</a> with the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#GRENADE\">Grenade</a> type that those models are equipped with lose the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Blast-Weapons\">Blast</a> ability, have a Type characteristic of <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol 6</a>, and each time that model makes an attack with one of those weapons against an enemy unit within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> that attack automatically hits the target.",
								"id": "000002327029",
								"field9": "",
								"keys": [
									"death",
									"guard"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select up to three <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> models from your army. Until the end of the phase, <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapons\">plague weapons</a> with the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#GRENADE\">Grenade</a> type that those models are equipped with lose the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Blast-Weapons\">Blast</a> ability, have a Type characteristic of <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol 6</a>, and each time that model makes an attack with one of those weapons against an enemy unit within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> that attack automatically hits the target."
							},
							{
								"faction_id": "DG",
								"name": "GIFTS OF DECAY",
								"type": "Death Guard – Requisition Stratagem",
								"cp_cost": "1",
								"legend": "Nurgle is a generous god, and through worship and devotion his followers can gain mighty rewards. Those who prove themselves most worthy wield suppurating weapons of unspeakable foulness, or gird themselves in weeping armour of filth.",
								"source_id": "",
								"description": "Use this Stratagem before the battle, when you are mustering your army, if your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> has the <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> keyword. Select one <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army and give them one <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Relics-of-Decay\">Relic of Decay</a> (this must be a Relic they could have). Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case, you can use this Stratagem twice) or an Onslaught battle (in which case, you can use this Stratagem three times).",
								"id": "000002327015",
								"field9": "",
								"keys": [
									"death guard character",
									"warlord",
									"death",
									"guard",
									"death",
									"guard",
									"character"
								],
								"activate": [
									"Before battle"
								],
								"descText": "Use this Stratagem before the battle, when you are mustering your army, if your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> has the <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> keyword. Select one <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army and give them one <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Relics-of-Decay\">Relic of Decay</a> (this must be a Relic they could have). Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case, you can use this Stratagem twice) or an Onslaught battle (in which case, you can use this Stratagem three times)."
							},
							{
								"faction_id": "DG",
								"name": "CLOUD OF FLIES",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "2/4",
								"legend": "With a thrumming roar, a thick cloud of daemon flies whirls around the Death Guard and obscures them from the enemy's sight.",
								"source_id": "",
								"description": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00371\" data-tooltip-content=\"#tooltip_content00371\" data-tooltip-anchor=\"#tooltip_content00371\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, each time an enemy model shoots, if that unit is not the closest eligible target or within 12\" of that model, then until that shooting is resolved, that model cannot target that unit. In addition, until the end of the phase, if the selected unit has the <span class=\"redfont\">Bodyguard</span> ability, it loses that ability. If the selected unit has the <span class=\"kwb\">TERMINATOR</span> keyword, this Stratagem costs 4CP; otherwise, it costs 2CP.",
								"id": "000002327022",
								"field9": "",
								"keys": [
									"bubonic astartes infantry",
									"bubonic",
									"astartes",
									"infantry",
									"bodyguard",
									"terminator"
								],
								"activate": [
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00371\" data-tooltip-content=\"#tooltip_content00371\" data-tooltip-anchor=\"#tooltip_content00371\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, each time an enemy model shoots, if that unit is not the closest eligible target or within 12\" of that model, then until that shooting is resolved, that model cannot target that unit. In addition, until the end of the phase, if the selected unit has the <span class=\"redfont\">Bodyguard</span> ability, it loses that ability. If the selected unit has the <span class=\"kwb\">TERMINATOR</span> keyword, this Stratagem costs 4CP; otherwise, it costs 2CP."
							},
							{
								"faction_id": "DG",
								"name": "PLAGUE-CHOSEN",
								"type": "Death Guard – Requisition Stratagem",
								"cp_cost": "1",
								"legend": "Many lords and champions of the Death Guard have favoured lieutenants within their ranks.",
								"source_id": "",
								"description": "Use this Stratagem before the battle, when you are mustering your army, if your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> has the <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> keyword. Select one <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model in your army (excluding named characters) and determine one <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Warlord-Traits\">Warlord Trait</a> for that model (this must be a Warlord Trait they can have); that model is only regarded as your <span class=\"kwb\">WARLORD</span> for the purposes of that Warlord Trait. Each Warlord Trait in your army must be unique (if randomly generated, re-roll duplicate results), and you cannot use this Stratagem to give a model two Warlord Traits. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice), or an Onslaught battle (in which case you can use this Stratagem three times).",
								"id": "000002327016",
								"field9": "",
								"keys": [
									"death guard character",
									"warlord",
									"death",
									"guard",
									"death",
									"guard",
									"character",
									"warlord"
								],
								"activate": [
									"Before battle"
								],
								"descText": "Use this Stratagem before the battle, when you are mustering your army, if your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> has the <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> keyword. Select one <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model in your army (excluding named characters) and determine one <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Warlord-Traits\">Warlord Trait</a> for that model (this must be a Warlord Trait they can have); that model is only regarded as your <span class=\"kwb\">WARLORD</span> for the purposes of that Warlord Trait. Each Warlord Trait in your army must be unique (if randomly generated, re-roll duplicate results), and you cannot use this Stratagem to give a model two Warlord Traits. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice), or an Onslaught battle (in which case you can use this Stratagem three times)."
							},
							{
								"faction_id": "DG",
								"name": "BEFOULED INCUBATORS",
								"type": "Death Guard – Epic Deed Stratagem",
								"cp_cost": "1",
								"legend": "Those fighting the Death Guard soon became carriers of disease, even if the plagues do not kill them outright. On occasion their plague boils up inside them, so that when they are struck down, they burst.",
								"source_id": "",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by that model, roll one D6: on a 3+, that enemy model’s unit suffers 1 <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> after your model has resolved all of its attacks (a maximum of 3 mortal wounds can be inflicted per phase via this Stratagem).",
								"id": "000002327011",
								"field9": "",
								"keys": [
									"death guard character",
									"death",
									"guard",
									"character"
								],
								"activate": [
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by that model, roll one D6: on a 3+, that enemy model’s unit suffers 1 <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> after your model has resolved all of its attacks (a maximum of 3 mortal wounds can be inflicted per phase via this Stratagem)."
							},
							{
								"faction_id": "DG",
								"name": "FLASH OUTBREAK",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "On occasion a contagion of Nurgle will flare up brilliantly in an all-consuming wave of infection.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00379\" data-tooltip-content=\"#tooltip_content00379\" data-tooltip-anchor=\"#tooltip_content00379\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span></span> unit with the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagions of Nurgle</a> ability from your army:<br><ul><li>If there are any other <span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span> units from your army on the battlefield that have any <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion abilities</a> that the selected unit does not have, then until the start of your next Command phase, the selected unit has all of the same Contagion abilities (this is in addition to the ones it already has).</li><li>Until the start of your next Command phase, units from your army count the battle round number as one higher than the current battle round number for the purpose of determining the Contagion range of any Contagion abilities they have.</li></ul>",
								"id": "000002327026",
								"field9": "",
								"keys": [
									"&lt;plague company&gt;",
									"p",
									"company&gt;",
									"p",
									"company&gt;"
								],
								"activate": [
									"Command phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00379\" data-tooltip-content=\"#tooltip_content00379\" data-tooltip-anchor=\"#tooltip_content00379\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span></span> unit with the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagions of Nurgle</a> ability from your army:<br><ul><li>If there are any other <span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span> units from your army on the battlefield that have any <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion abilities</a> that the selected unit does not have, then until the start of your next Command phase, the selected unit has all of the same Contagion abilities (this is in addition to the ones it already has).</li><li>Until the start of your next Command phase, units from your army count the battle round number as one higher than the current battle round number for the purpose of determining the Contagion range of any Contagion abilities they have.</li></ul>"
							},
							{
								"faction_id": "DG",
								"name": "ERUPTION OF FILTH",
								"type": "Death Guard – Epic Deed Stratagem",
								"cp_cost": "1",
								"legend": "The slain warrior bursts like a fat, pox-laden buboe.",
								"source_id": "",
								"description": "Use this Stratagem in any phase, when a <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army is destroyed instead of using any other rules that are triggered when a model is destroyed (e.g. the <span class=\"redfont\">Putrid Explosion</span> ability). Before removing that model from play, roll one D6 for each other unit within 3\" (excluding <span class=\"kwb\">NURGLE</span> units): on a 2-5, that unit suffers 1 <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a>; on a 6, that unit suffers D3 mortal wounds.",
								"id": "000002327013",
								"field9": "",
								"keys": [
									"death guard character",
									"death",
									"guard",
									"character",
									"putrid explosion",
									"nurgle"
								],
								"activate": [
									"Enemy Morale phase",
									"Enemy Fight phase",
									"Movement phase",
									"Psychic phase",
									"Shooting phase",
									"Charge phase",
									"Fight phase",
									"Morale phase",
									"Enemy Movement phase",
									"Enemy Psychic phase",
									"Enemy Shooting phase",
									"Enemy Charge phase"
								],
								"descText": "Use this Stratagem in any phase, when a <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army is destroyed instead of using any other rules that are triggered when a model is destroyed (e.g. the <span class=\"redfont\">Putrid Explosion</span> ability). Before removing that model from play, roll one D6 for each other unit within 3\" (excluding <span class=\"kwb\">NURGLE</span> units): on a 2-5, that unit suffers 1 <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a>; on a 6, that unit suffers D3 mortal wounds."
							},
							{
								"faction_id": "DG",
								"name": "ETERNAL HATRED",
								"type": "Death Guard – Battle Tactic Stratagem",
								"cp_cost": "2",
								"legend": "The hatred of the Traitor Legions has burned for millennia.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00371\" data-tooltip-content=\"#tooltip_content00371\" data-tooltip-anchor=\"#tooltip_content00371\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected to shoot, or in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attacks <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
								"id": "000002327007",
								"field9": "",
								"keys": [
									"bubonic astartes infantry",
									"bubonic",
									"astartes",
									"infantry",
									"bubonic",
									"astartes",
									"infantry"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00371\" data-tooltip-content=\"#tooltip_content00371\" data-tooltip-anchor=\"#tooltip_content00371\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected to shoot, or in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, add 1 to that attacks <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>."
							},
							{
								"faction_id": "DG",
								"name": "OVERWHELMING GENEROSITY",
								"type": "Death Guard – Wargear Stratagem",
								"cp_cost": "1",
								"legend": "Unholy filth gushes from Nurgle’s faithful into their guns until the armaments threaten to burst like bloated corpses.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to shoot. Until the end of the phase, add 6\" to the Range characteristic of <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapons\">plague weapons</a> models in that unit are equipped with.",
								"id": "000002327030",
								"field9": "",
								"keys": [
									"death",
									"guard"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to shoot. Until the end of the phase, add 6\" to the Range characteristic of <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapons\">plague weapons</a> models in that unit are equipped with."
							},
							{
								"faction_id": "DG",
								"name": "DISEASED EFFLUENTS",
								"type": "Death Guard – Epic Deed Stratagem",
								"cp_cost": "1",
								"legend": "The foul liquids coursing through some Death Guard warriors are weapons in themselves. If unleashed, they drench a foe in toxic slime and effluvia that can kill in minutes.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army (excluding <span class=\"tooltip00375\" data-tooltip-content=\"#tooltip_content00375\" data-tooltip-anchor=\"#tooltip_content00375\"><span class=\"kwb\">DAEMON</span></span> models) and one enemy unit within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of that model. That model suffers 1 <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> and you then roll one D6: on a 2+, that enemy unit suffers 2D3 mortal wounds. If that enemy unit has the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> keyword (excluding <span class=\"kwb\">VEHICLE</span> units), it suffers D3 mortal wounds instead.",
								"id": "000002327009",
								"field9": "",
								"keys": [
									"death guard character",
									"daemon",
									"death",
									"guard",
									"character",
									"daemon",
									"character",
									"vehicle"
								],
								"activate": [
									"Command phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army (excluding <span class=\"tooltip00375\" data-tooltip-content=\"#tooltip_content00375\" data-tooltip-anchor=\"#tooltip_content00375\"><span class=\"kwb\">DAEMON</span></span> models) and one enemy unit within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of that model. That model suffers 1 <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> and you then roll one D6: on a 2+, that enemy unit suffers 2D3 mortal wounds. If that enemy unit has the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> keyword (excluding <span class=\"kwb\">VEHICLE</span> units), it suffers D3 mortal wounds instead."
							},
							{
								"faction_id": "DG",
								"name": "CALLOUS DISREGARD",
								"type": "Terminus Est Assault Force – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "Even when the hordes at the fore of an assault force have reached the enemy lines, the second wave simply opens fire, caring little for whether their shots hit friend or foe.",
								"source_id": "000000153",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00377\" data-tooltip-content=\"#tooltip_content00377\" data-tooltip-anchor=\"#tooltip_content00377\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span></span> <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army that is eligible to shoot.<br><ul><li>Until the end of the turn, models in that unit can target enemy units within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of friendly <span class=\"tooltip03020\" data-tooltip-content=\"#tooltip_content03020\" data-tooltip-anchor=\"#tooltip_content03020\"><span class=\"kwb\">POXWALKERS</span></span> or <span class=\"tooltip03351\" data-tooltip-content=\"#tooltip_content03351\" data-tooltip-anchor=\"#tooltip_content03351\"><span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span></span> units from your army.</li><li>Each time a model in that unit makes an attack against an enemy unit within Engagement Range of a friendly <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit, subtract 1 from the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>, and if the hit roll is not successful, that attack scores a hit against that <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit instead.</li></ul>",
								"id": "000005448005",
								"field9": "",
								"keys": [
									"bubonic astartes",
									"poxwalkers",
									"plague followers",
									"bubonic",
									"astartes",
									"terminus",
									"est",
									"assault",
									"force",
									"poxwalkers",
									"plague",
									"followers",
									"poxwalkers",
									"plague",
									"followers",
									"poxwalkers",
									"plague",
									"followers"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00377\" data-tooltip-content=\"#tooltip_content00377\" data-tooltip-anchor=\"#tooltip_content00377\"><span class=\"kwb\">BUBONIC</span> <span class=\"kwb\">ASTARTES</span></span> <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army that is eligible to shoot.<br><ul><li>Until the end of the turn, models in that unit can target enemy units within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of friendly <span class=\"tooltip03020\" data-tooltip-content=\"#tooltip_content03020\" data-tooltip-anchor=\"#tooltip_content03020\"><span class=\"kwb\">POXWALKERS</span></span> or <span class=\"tooltip03351\" data-tooltip-content=\"#tooltip_content03351\" data-tooltip-anchor=\"#tooltip_content03351\"><span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span></span> units from your army.</li><li>Each time a model in that unit makes an attack against an enemy unit within Engagement Range of a friendly <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit, subtract 1 from the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>, and if the hit roll is not successful, that attack scores a hit against that <span class=\"kwb\">POXWALKERS</span> or <span class=\"kwb\">PLAGUE</span> <span class=\"kwb\">FOLLOWERS</span> unit instead.</li></ul>"
							},
							{
								"faction_id": "DG",
								"name": "ON DRONING WINGS",
								"type": "Ferrymen – Epic Deed Stratagem",
								"cp_cost": "1",
								"legend": "Buzzing clouds of plague flies billow from these warriors, acting as vectors for their unholy gifts.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00386\" data-tooltip-content=\"#tooltip_content00386\" data-tooltip-anchor=\"#tooltip_content00386\"><span class=\"kwb\">FERRYMEN</span> <span class=\"kwb\">FOETID</span> <span class=\"kwb\">VIRION</span></span> model from your army, then select one of that model’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Aura-Abilities\">aura abilities</a>. Until the start of your next Command phase, add 6\" to the range of that model’s selected aura ability (to a maximum of 12\").",
								"id": "000005159002",
								"field9": "",
								"keys": [
									"ferrymen foetid virion",
									"ferrymen",
									"foetid",
									"virion"
								],
								"activate": [
									"Command phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00386\" data-tooltip-content=\"#tooltip_content00386\" data-tooltip-anchor=\"#tooltip_content00386\"><span class=\"kwb\">FERRYMEN</span> <span class=\"kwb\">FOETID</span> <span class=\"kwb\">VIRION</span></span> model from your army, then select one of that model’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Aura-Abilities\">aura abilities</a>. Until the start of your next Command phase, add 6\" to the range of that model’s selected aura ability (to a maximum of 12\")."
							},
							{
								"faction_id": "DG",
								"name": "PESTILENTIAL DROP",
								"type": "Terminus Est Assault Force – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "Assault force troops arrive on the battlefield amid billowing clouds of pestilence, diseased Drop Pod exhaust fumes, the leaking effluence of landing crafts and rot blooms expelled directly from their foetid teleportation chambers.",
								"source_id": "000000153",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your Movement phases, when you set up a <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army on the battlefield using the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Army-of-Renown:-Terminus-Est-Assault-Force\">Outbreak Assault</a> or <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Teleport-Strike-1\">Teleport Strike</a> ability. Select one <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion of Nurgle</a> ability that unit has; until the end of the turn, the Contagion Range of that ability is 12\" for that unit. This is not cumulative with any other abilities that increase <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion Range</a>.",
								"id": "000005448004",
								"field9": "",
								"keys": [
									"terminus",
									"est",
									"assault",
									"force"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your Movement phases, when you set up a <span class=\"kwb\">TERMINUS</span> <span class=\"kwb\">EST</span> <span class=\"kwb\">ASSAULT</span> <span class=\"kwb\">FORCE</span> unit from your army on the battlefield using the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Army-of-Renown:-Terminus-Est-Assault-Force\">Outbreak Assault</a> or <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Teleport-Strike-1\">Teleport Strike</a> ability. Select one <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion of Nurgle</a> ability that unit has; until the end of the turn, the Contagion Range of that ability is 12\" for that unit. This is not cumulative with any other abilities that increase <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion Range</a>."
							},
							{
								"faction_id": "DG",
								"name": "RELEASE THE TOXINS",
								"type": "Death Guard – Epic Deed Stratagem",
								"cp_cost": "2",
								"legend": "The artefacts of the Death Guard are foul objects and weapons, seeped in poisons of countless varieties. To unleash them is to grant the enemy a most horrible death.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army that was equipped with a <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Relics-of-Decay\">Relic of Decay</a> at the start of the battle. Roll one D6 for each enemy unit within 7\" of that model: on a 2-5, that unit suffers 1 <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a>; on a 6, that unit suffers D3 mortal wounds. A model can only be selected for this Stratagem once per battle.",
								"id": "000002327012",
								"field9": "",
								"keys": [
									"death guard character",
									"death",
									"guard",
									"character"
								],
								"activate": [
									"Command phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00373\" data-tooltip-content=\"#tooltip_content00373\" data-tooltip-anchor=\"#tooltip_content00373\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">CHARACTER</span></span> model from your army that was equipped with a <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Relics-of-Decay\">Relic of Decay</a> at the start of the battle. Roll one D6 for each enemy unit within 7\" of that model: on a 2-5, that unit suffers 1 <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a>; on a 6, that unit suffers D3 mortal wounds. A model can only be selected for this Stratagem once per battle."
							}
						],
						"waha": {
							"id": "000001367",
							"name": "Foul Blightspawn",
							"link": "https://wahapedia.ruhttps://wahapedia.ru/wh40k9ed/factions/death-guard/Foul-Blightspawn",
							"faction_id": "DG",
							"source_id": "000000014",
							"role": "Elites",
							"unit_composition": "A Foul Blightspawn is equipped with: plague sprayer; blight grenades; krak grenades; unholy death’s head grenade.",
							"transport": "",
							"power_points": "4",
							"priest": "",
							"psyker": "",
							"open_play_only": "false",
							"crusade_only": "false",
							"virtual": "false",
							"Cost": "",
							"cost_per_unit": "Нет",
							"field17": ""
						}
					},
					{
						"name": "Foetid Bloat-drone",
						"slot": "Fast Attack",
						"faction": [
							"Heretic Astartes",
							"Chaos",
							"<Plague Company>",
							"Nurgle",
							"Death Guard"
						],
						"keywords": [
							"fly",
							"foetid bloat-drone",
							"vehicle",
							"daemon",
							"daemon engine"
						],
						"models": [{
							"name": "Foetid Bloat-drone",
							"faction": "",
							"keywords": [],
							"weapons": [{
									"name": "Plague probe",
									"amount": "1",
									"Range": "Melee",
									"Type": "Melee",
									"S": "User",
									"AP": "-2",
									"D": "1",
									"Abilities": "Plague Weapon"
								},
								{
									"name": "Fleshmower",
									"amount": "1",
									"Range": "Melee",
									"Type": "Melee",
									"S": "+1",
									"AP": "-2",
									"D": "2",
									"Abilities": "Plague Weapon. Each time an attack is made with this weapon, make 3 hit rolls instead of 1."
								}
							],
							"wargear": [],
							"statlines": {
								"M": "10",
								"WS": "3",
								"BS": "3",
								"S": "6",
								"T": "7",
								"W": "9",
								"A": "4",
								"Ld": "8",
								"Sv": "3"
							}
						}],
						"rules": [{
								"name": "Contagions of Nurgle",
								"desc": "If every unit from your army has the DEATH GUARD keyword (excluding UNALIGNED units), this unit gains the following ability:\n\nNurgle's Gift (Contagion): While an enemy unit is within Contagion Range of this unit (see below), subtract 1 from the Toughness characteristic of models in that unit.",
								"subkeys": [
									"DEATH",
									"GUARD",
									"UNALIGNED"
								],
								"targets": [
									"DEATH GUARD",
									"UNALIGNED"
								],
								"phases": []
							},
							{
								"name": "Putrid Explosion",
								"desc": "When this model is destroyed, roll one D6 before removing it from play. On a 4+ it explodes, and each unit (excluding NURGLE units) within 6\" suffers 1 mortal wound.",
								"subkeys": [
									"NURGLE"
								],
								"targets": [
									"NURGLE"
								],
								"phases": []
							},
							{
								"name": "Disgustingly Resilient",
								"desc": "Each time an attack is allocated to a model in this unit, subtract 1 from the Damage characteristic of that attack (to a minimum of 1).",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Daemonic",
								"desc": "Models in this unit have a 5+ invulnerable save.",
								"subkeys": null,
								"targets": null,
								"phases": []
							}
						],
						"spells": [],
						"stratagems": [{
								"faction_id": "DG",
								"name": "PUTRID DETONATION",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "1/2",
								"legend": "Upon their destruction, the seven-cursed hulls of Death Guard battle tanks have an alarming tendency to burst like ruptured boils, exploding in a swelling mass of pus and foulness.",
								"source_id": "",
								"description": "Use this Stratagem in any phase, when a <span class=\"tooltip00378\" data-tooltip-content=\"#tooltip_content00378\" data-tooltip-anchor=\"#tooltip_content00378\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">VEHICLE</span></span> model from your army is destroyed. Do not roll to see if that model explodes: it does so automatically. If that model has a Wounds characteristic of 9 or less, this Stratagem costs 1CP; otherwise, it costs 2CP.",
								"id": "000002327027",
								"field9": "",
								"keys": [
									"death guard vehicle",
									"death",
									"guard",
									"vehicle"
								],
								"activate": [
									"Fight phase",
									"Morale phase",
									"Charge phase",
									"Shooting phase",
									"Psychic phase",
									"Movement phase",
									"Enemy Movement phase",
									"Enemy Psychic phase",
									"Enemy Shooting phase",
									"Enemy Charge phase",
									"Enemy Fight phase",
									"Enemy Morale phase"
								],
								"descText": "Use this Stratagem in any phase, when a <span class=\"tooltip00378\" data-tooltip-content=\"#tooltip_content00378\" data-tooltip-anchor=\"#tooltip_content00378\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">VEHICLE</span></span> model from your army is destroyed. Do not roll to see if that model explodes: it does so automatically. If that model has a Wounds characteristic of 9 or less, this Stratagem costs 1CP; otherwise, it costs 2CP."
							},
							{
								"faction_id": "DG",
								"name": "DAEMONIC GLUTTONY",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Daemons can restore their energy and strength by consuming the souls of mortals.",
								"source_id": "",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00380\" data-tooltip-content=\"#tooltip_content00380\" data-tooltip-anchor=\"#tooltip_content00380\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">DAEMON</span> <span class=\"kwb\">ENGINE</span></span> model from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by that model, that <span class=\"kwb\">DAEMON</span> <span class=\"kwb\">ENGINE</span> model regains 1 lost wound (to a maximum of 3 regained wounds per phase).",
								"id": "000002327025",
								"field9": "",
								"keys": [
									"death guard daemon engine",
									"death",
									"guard",
									"daemon",
									"engine",
									"daemon",
									"engine"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00380\" data-tooltip-content=\"#tooltip_content00380\" data-tooltip-anchor=\"#tooltip_content00380\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">DAEMON</span> <span class=\"kwb\">ENGINE</span></span> model from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by that model, that <span class=\"kwb\">DAEMON</span> <span class=\"kwb\">ENGINE</span> model regains 1 lost wound (to a maximum of 3 regained wounds per phase)."
							},
							{
								"faction_id": "DG",
								"name": "FLASH OUTBREAK",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "On occasion a contagion of Nurgle will flare up brilliantly in an all-consuming wave of infection.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00379\" data-tooltip-content=\"#tooltip_content00379\" data-tooltip-anchor=\"#tooltip_content00379\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span></span> unit with the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagions of Nurgle</a> ability from your army:<br><ul><li>If there are any other <span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span> units from your army on the battlefield that have any <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion abilities</a> that the selected unit does not have, then until the start of your next Command phase, the selected unit has all of the same Contagion abilities (this is in addition to the ones it already has).</li><li>Until the start of your next Command phase, units from your army count the battle round number as one higher than the current battle round number for the purpose of determining the Contagion range of any Contagion abilities they have.</li></ul>",
								"id": "000002327026",
								"field9": "",
								"keys": [
									"&lt;plague company&gt;",
									"p",
									"company&gt;",
									"p",
									"company&gt;"
								],
								"activate": [
									"Command phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00379\" data-tooltip-content=\"#tooltip_content00379\" data-tooltip-anchor=\"#tooltip_content00379\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span></span> unit with the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagions of Nurgle</a> ability from your army:<br><ul><li>If there are any other <span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span> units from your army on the battlefield that have any <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion abilities</a> that the selected unit does not have, then until the start of your next Command phase, the selected unit has all of the same Contagion abilities (this is in addition to the ones it already has).</li><li>Until the start of your next Command phase, units from your army count the battle round number as one higher than the current battle round number for the purpose of determining the Contagion range of any Contagion abilities they have.</li></ul>"
							},
							{
								"faction_id": "DG",
								"name": "DARK CRAVINGS",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "The vicious daemons bound with Foetid Bloat-drones are particularly cruel and dangerous, hungering after enemies in ferocious pursuits.",
								"source_id": "",
								"description": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one <span class=\"tooltip03345\" data-tooltip-content=\"#tooltip_content03345\" data-tooltip-anchor=\"#tooltip_content03345\"><span class=\"kwb\">FOETID</span> <span class=\"kwb\">BLOAT-DRONE</span></span> unit from your army. Until the end of the phase, if that unit is within 6\" horizontally and 5\" vertically of any enemy units, it is eligible to <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Performing-a-Heroic-Intervention\">perform Heroic Interventions</a> as if it was a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>. When doing so, it can move up to 6\" instead of 3\". All other rules for Heroic Interventions still apply.",
								"id": "000002327024",
								"field9": "",
								"keys": [
									"foetid bloat-drone",
									"foetid",
									"bloat-drone",
									"character"
								],
								"activate": [
									"Enemy Charge phase"
								],
								"descText": "Use this Stratagem in your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one <span class=\"tooltip03345\" data-tooltip-content=\"#tooltip_content03345\" data-tooltip-anchor=\"#tooltip_content03345\"><span class=\"kwb\">FOETID</span> <span class=\"kwb\">BLOAT-DRONE</span></span> unit from your army. Until the end of the phase, if that unit is within 6\" horizontally and 5\" vertically of any enemy units, it is eligible to <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Performing-a-Heroic-Intervention\">perform Heroic Interventions</a> as if it was a <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>. When doing so, it can move up to 6\" instead of 3\". All other rules for Heroic Interventions still apply."
							},
							{
								"faction_id": "DG",
								"name": "CREEPING BLIGHT",
								"type": "Death Guard – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "This warp-plague spreads fingers of corrosion through armour, flesh, bone and even air with equal virulence.",
								"source_id": "",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapon\">plague weapon</a>, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, that attack has an Armour Penetration characteristic of -4.",
								"id": "000002327003",
								"field9": "",
								"keys": [
									"death",
									"guard"
								],
								"activate": [
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapon\">plague weapon</a>, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, that attack has an Armour Penetration characteristic of -4."
							},
							{
								"faction_id": "DG",
								"name": "OVERWHELMING GENEROSITY",
								"type": "Death Guard – Wargear Stratagem",
								"cp_cost": "1",
								"legend": "Unholy filth gushes from Nurgle’s faithful into their guns until the armaments threaten to burst like bloated corpses.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to shoot. Until the end of the phase, add 6\" to the Range characteristic of <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapons\">plague weapons</a> models in that unit are equipped with.",
								"id": "000002327030",
								"field9": "",
								"keys": [
									"death",
									"guard"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to shoot. Until the end of the phase, add 6\" to the Range characteristic of <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapons\">plague weapons</a> models in that unit are equipped with."
							},
							{
								"faction_id": "DG",
								"name": "BILIOUS BLOOD-RUSH",
								"type": "Poxmongers – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Consumed by rage, the Daemon Engines of the Poxmongers open fire at their enemies at extremely close ranges.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00394\" data-tooltip-content=\"#tooltip_content00394\" data-tooltip-anchor=\"#tooltip_content00394\"><span class=\"kwb\">POXMONGERS</span> <span class=\"kwb\">DAEMON</span> <span class=\"kwb\">ENGINE</span></span> unit from your army is selected to shoot. Until the end of the phase:<br><ul><li>Models in that unit can make attacks with <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Blast-Weapons\">Blast weapons</a> against units within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of their unit.</li><li>Each time a ranged attack is made by a model in that unit against an enemy unit that is within Engagement Range of their unit, add 1 to that attack’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.</li></ul>",
								"id": "000005158002",
								"field9": "",
								"keys": [
									"poxmongers daemon engine",
									"poxmongers",
									"daemon",
									"engine"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00394\" data-tooltip-content=\"#tooltip_content00394\" data-tooltip-anchor=\"#tooltip_content00394\"><span class=\"kwb\">POXMONGERS</span> <span class=\"kwb\">DAEMON</span> <span class=\"kwb\">ENGINE</span></span> unit from your army is selected to shoot. Until the end of the phase:<br><ul><li>Models in that unit can make attacks with <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Blast-Weapons\">Blast weapons</a> against units within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of their unit.</li><li>Each time a ranged attack is made by a model in that unit against an enemy unit that is within Engagement Range of their unit, add 1 to that attack’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.</li></ul>"
							}
						],
						"waha": {
							"id": "000001057",
							"name": "Foetid Bloat-drone",
							"link": "https://wahapedia.ruhttps://wahapedia.ru/wh40k9ed/factions/death-guard/Foetid-Bloat-drone",
							"faction_id": "DG",
							"source_id": "000000014",
							"role": "Fast Attack",
							"unit_composition": "A Foetid Bloat-drone is equipped with: fleshmower; plague probe.",
							"transport": "",
							"power_points": "7",
							"priest": "",
							"psyker": "",
							"open_play_only": "false",
							"crusade_only": "false",
							"virtual": "false",
							"Cost": "",
							"cost_per_unit": "Нет",
							"field17": ""
						}
					},
					{
						"name": "Myphitic Blight-haulers",
						"slot": "Fast Attack",
						"faction": [
							"Heretic Astartes",
							"Chaos",
							"<Plague Company>",
							"Nurgle",
							"Death Guard"
						],
						"keywords": [
							"vehicle",
							"daemon",
							"myphitic blight-haulers",
							"daemon engine"
						],
						"models": [{
							"name": "Myphitic Blight-hauler",
							"faction": "",
							"keywords": [],
							"weapons": [{
									"name": "Gnashing maw",
									"amount": "1",
									"Range": "Melee",
									"Type": "Melee",
									"S": "User",
									"AP": "-2",
									"D": "1",
									"Abilities": "Plague Weapon"
								},
								{
									"name": "Bile spurt",
									"amount": "1",
									"Range": "12\"",
									"Type": "Assault D3",
									"S": "6",
									"AP": "-1",
									"D": "1",
									"Abilities": "Blast. Plague Weapon. This weapon can be used to make attacks against an enemy unit within Engagement Range of the bearer's unit."
								},
								{
									"name": "Missile launcher",
									"amount": "1",
									"Range": "48\"",
									"Type": "Heavy D6",
									"S": "4",
									"AP": "0",
									"D": "1",
									"Abilities": "Blast."
								},
								{
									"name": "Missile launcher",
									"amount": "1",
									"Range": "48\"",
									"Type": "Heavy 1",
									"S": "8",
									"AP": "-2",
									"D": "D6",
									"Abilities": "-"
								},
								{
									"name": "Multi-melta",
									"amount": "1",
									"Range": "24\"",
									"Type": "Heavy 2",
									"S": "8",
									"AP": "-4",
									"D": "D6",
									"Abilities": "Each time an attack made with this weapon targets a unit within half range, that attack has a Damage characteristic of D6+2."
								},
								{
									"name": "Gnashing maw",
									"amount": "1",
									"Range": "Melee",
									"Type": "Melee",
									"S": "User",
									"AP": "-2",
									"D": "1",
									"Abilities": "Plague Weapon"
								},
								{
									"name": "Bile spurt",
									"amount": "1",
									"Range": "12\"",
									"Type": "Assault D3",
									"S": "6",
									"AP": "-1",
									"D": "1",
									"Abilities": "Blast. Plague Weapon. This weapon can be used to make attacks against an enemy unit within Engagement Range of the bearer's unit."
								},
								{
									"name": "Missile launcher",
									"amount": "1",
									"Range": "48\"",
									"Type": "Heavy D6",
									"S": "4",
									"AP": "0",
									"D": "1",
									"Abilities": "Blast."
								},
								{
									"name": "Missile launcher",
									"amount": "1",
									"Range": "48\"",
									"Type": "Heavy 1",
									"S": "8",
									"AP": "-2",
									"D": "D6",
									"Abilities": "-"
								},
								{
									"name": "Multi-melta",
									"amount": "1",
									"Range": "24\"",
									"Type": "Heavy 2",
									"S": "8",
									"AP": "-4",
									"D": "D6",
									"Abilities": "Each time an attack made with this weapon targets a unit within half range, that attack has a Damage characteristic of D6+2."
								}
							],
							"wargear": [],
							"statlines": {
								"M": "10",
								"WS": "3",
								"BS": "3",
								"S": "6",
								"T": "7",
								"W": "9",
								"A": "4",
								"Ld": "8",
								"Sv": "3"
							}
						}],
						"rules": [{
								"name": "Contagions of Nurgle",
								"desc": "If every unit from your army has the DEATH GUARD keyword (excluding UNALIGNED units), this unit gains the following ability:\n\nNurgle's Gift (Contagion): While an enemy unit is within Contagion Range of this unit (see below), subtract 1 from the Toughness characteristic of models in that unit.",
								"subkeys": [
									"DEATH",
									"GUARD",
									"UNALIGNED"
								],
								"targets": [
									"DEATH GUARD",
									"UNALIGNED"
								],
								"phases": []
							},
							{
								"name": "Foul Stench",
								"desc": "Each time a melee attack is made against this unit, subtract 1 from that attack's hit roll.",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Putrid Explosion",
								"desc": "Each time a model in this unit is destroyed, roll one D6 before removing it from play. On a 4+ it explodes, and each unit (excluding NURGLE units) within 6\" suffers 1 mortal wound.",
								"subkeys": [
									"NURGLE"
								],
								"targets": [
									"NURGLE"
								],
								"phases": []
							},
							{
								"name": "Disgustingly Resilient",
								"desc": "Each time an attack is allocated to a model in this unit, subtract 1 from the Damage characteristic of that attack (to a minimum of 1).",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Daemonic",
								"desc": "Models in this unit have a 5+ invulnerable save.",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Remorseless",
								"desc": "Each time a Combat Attrition test is taken for this unit, ignore any or all modifiers.",
								"subkeys": null,
								"targets": null,
								"phases": []
							}
						],
						"spells": [],
						"stratagems": [{
								"faction_id": "DG",
								"name": "CREEPING BLIGHT",
								"type": "Death Guard – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "This warp-plague spreads fingers of corrosion through armour, flesh, bone and even air with equal virulence.",
								"source_id": "",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapon\">plague weapon</a>, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, that attack has an Armour Penetration characteristic of -4.",
								"id": "000002327003",
								"field9": "",
								"keys": [
									"death",
									"guard"
								],
								"activate": [
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapon\">plague weapon</a>, on an unmodified <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, that attack has an Armour Penetration characteristic of -4."
							},
							{
								"faction_id": "DG",
								"name": "PUTRID DETONATION",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "1/2",
								"legend": "Upon their destruction, the seven-cursed hulls of Death Guard battle tanks have an alarming tendency to burst like ruptured boils, exploding in a swelling mass of pus and foulness.",
								"source_id": "",
								"description": "Use this Stratagem in any phase, when a <span class=\"tooltip00378\" data-tooltip-content=\"#tooltip_content00378\" data-tooltip-anchor=\"#tooltip_content00378\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">VEHICLE</span></span> model from your army is destroyed. Do not roll to see if that model explodes: it does so automatically. If that model has a Wounds characteristic of 9 or less, this Stratagem costs 1CP; otherwise, it costs 2CP.",
								"id": "000002327027",
								"field9": "",
								"keys": [
									"death guard vehicle",
									"death",
									"guard",
									"vehicle"
								],
								"activate": [
									"Fight phase",
									"Morale phase",
									"Charge phase",
									"Shooting phase",
									"Psychic phase",
									"Movement phase",
									"Enemy Movement phase",
									"Enemy Psychic phase",
									"Enemy Shooting phase",
									"Enemy Charge phase",
									"Enemy Fight phase",
									"Enemy Morale phase"
								],
								"descText": "Use this Stratagem in any phase, when a <span class=\"tooltip00378\" data-tooltip-content=\"#tooltip_content00378\" data-tooltip-anchor=\"#tooltip_content00378\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">VEHICLE</span></span> model from your army is destroyed. Do not roll to see if that model explodes: it does so automatically. If that model has a Wounds characteristic of 9 or less, this Stratagem costs 1CP; otherwise, it costs 2CP."
							},
							{
								"faction_id": "DG",
								"name": "BELCHING FUMES",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "1/2",
								"legend": "Especially noxious fumes pour from the Myphitic Blight-haulers’ spouts, spewingforth in billowing clouds with wet rasps.",
								"source_id": "",
								"description": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip03343\" data-tooltip-content=\"#tooltip_content03343\" data-tooltip-anchor=\"#tooltip_content03343\"><span class=\"kwb\">MYPHITIC</span> <span class=\"kwb\">BLIGHT-HAULERS</span></span> unit from your army. Until the end of the phase, each time an enemy model makes an attack with a ranged weapon against that unit, reduce the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Number-of-Attacks\">number of attacks</a> made with that weapon by 1 (to a minimum of 1). If that unit contains 2 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
								"id": "000002327019",
								"field9": "",
								"keys": [
									"myphitic blight-haulers",
									"myphitic",
									"blight-haulers"
								],
								"activate": [
									"Enemy Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your opponent’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip03343\" data-tooltip-content=\"#tooltip_content03343\" data-tooltip-anchor=\"#tooltip_content03343\"><span class=\"kwb\">MYPHITIC</span> <span class=\"kwb\">BLIGHT-HAULERS</span></span> unit from your army. Until the end of the phase, each time an enemy model makes an attack with a ranged weapon against that unit, reduce the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Number-of-Attacks\">number of attacks</a> made with that weapon by 1 (to a minimum of 1). If that unit contains 2 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP."
							},
							{
								"faction_id": "DG",
								"name": "OVERWHELMING GENEROSITY",
								"type": "Death Guard – Wargear Stratagem",
								"cp_cost": "1",
								"legend": "Unholy filth gushes from Nurgle’s faithful into their guns until the armaments threaten to burst like bloated corpses.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to shoot. Until the end of the phase, add 6\" to the Range characteristic of <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapons\">plague weapons</a> models in that unit are equipped with.",
								"id": "000002327030",
								"field9": "",
								"keys": [
									"death",
									"guard"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> unit from your army is selected to shoot. Until the end of the phase, add 6\" to the Range characteristic of <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Plague-Weapons\">plague weapons</a> models in that unit are equipped with."
							},
							{
								"faction_id": "DG",
								"name": "DAEMONIC GLUTTONY",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "1",
								"legend": "Daemons can restore their energy and strength by consuming the souls of mortals.",
								"source_id": "",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00380\" data-tooltip-content=\"#tooltip_content00380\" data-tooltip-anchor=\"#tooltip_content00380\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">DAEMON</span> <span class=\"kwb\">ENGINE</span></span> model from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by that model, that <span class=\"kwb\">DAEMON</span> <span class=\"kwb\">ENGINE</span> model regains 1 lost wound (to a maximum of 3 regained wounds per phase).",
								"id": "000002327025",
								"field9": "",
								"keys": [
									"death guard daemon engine",
									"death",
									"guard",
									"daemon",
									"engine",
									"daemon",
									"engine"
								],
								"activate": [
									"Enemy Fight phase",
									"Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00380\" data-tooltip-content=\"#tooltip_content00380\" data-tooltip-anchor=\"#tooltip_content00380\"><span class=\"kwb\">DEATH</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">DAEMON</span> <span class=\"kwb\">ENGINE</span></span> model from your army is selected to fight. Until the end of the phase, each time an enemy model is destroyed by an attack made by that model, that <span class=\"kwb\">DAEMON</span> <span class=\"kwb\">ENGINE</span> model regains 1 lost wound (to a maximum of 3 regained wounds per phase)."
							},
							{
								"faction_id": "DG",
								"name": "FLASH OUTBREAK",
								"type": "Death Guard – Strategic Ploy Stratagem",
								"cp_cost": "2",
								"legend": "On occasion a contagion of Nurgle will flare up brilliantly in an all-consuming wave of infection.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00379\" data-tooltip-content=\"#tooltip_content00379\" data-tooltip-anchor=\"#tooltip_content00379\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span></span> unit with the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagions of Nurgle</a> ability from your army:<br><ul><li>If there are any other <span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span> units from your army on the battlefield that have any <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion abilities</a> that the selected unit does not have, then until the start of your next Command phase, the selected unit has all of the same Contagion abilities (this is in addition to the ones it already has).</li><li>Until the start of your next Command phase, units from your army count the battle round number as one higher than the current battle round number for the purpose of determining the Contagion range of any Contagion abilities they have.</li></ul>",
								"id": "000002327026",
								"field9": "",
								"keys": [
									"&lt;plague company&gt;",
									"p",
									"company&gt;",
									"p",
									"company&gt;"
								],
								"activate": [
									"Command phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00379\" data-tooltip-content=\"#tooltip_content00379\" data-tooltip-anchor=\"#tooltip_content00379\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span></span> unit with the <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagions of Nurgle</a> ability from your army:<br><ul><li>If there are any other <span class=\"kwb2\">&lt;<span class=\"kwb3\">P</span>LAGUE</span> <span class=\"kwb\">COMPANY&gt;</span> units from your army on the battlefield that have any <a href=\"https://wahapedia.ru/wh40k9ed/factions/death-guard/#Contagions-of-Nurgle\">Contagion abilities</a> that the selected unit does not have, then until the start of your next Command phase, the selected unit has all of the same Contagion abilities (this is in addition to the ones it already has).</li><li>Until the start of your next Command phase, units from your army count the battle round number as one higher than the current battle round number for the purpose of determining the Contagion range of any Contagion abilities they have.</li></ul>"
							},
							{
								"faction_id": "DG",
								"name": "BILIOUS BLOOD-RUSH",
								"type": "Poxmongers – Battle Tactic Stratagem",
								"cp_cost": "1",
								"legend": "Consumed by rage, the Daemon Engines of the Poxmongers open fire at their enemies at extremely close ranges.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00394\" data-tooltip-content=\"#tooltip_content00394\" data-tooltip-anchor=\"#tooltip_content00394\"><span class=\"kwb\">POXMONGERS</span> <span class=\"kwb\">DAEMON</span> <span class=\"kwb\">ENGINE</span></span> unit from your army is selected to shoot. Until the end of the phase:<br><ul><li>Models in that unit can make attacks with <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Blast-Weapons\">Blast weapons</a> against units within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of their unit.</li><li>Each time a ranged attack is made by a model in that unit against an enemy unit that is within Engagement Range of their unit, add 1 to that attack’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.</li></ul>",
								"id": "000005158002",
								"field9": "",
								"keys": [
									"poxmongers daemon engine",
									"poxmongers",
									"daemon",
									"engine"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip00394\" data-tooltip-content=\"#tooltip_content00394\" data-tooltip-anchor=\"#tooltip_content00394\"><span class=\"kwb\">POXMONGERS</span> <span class=\"kwb\">DAEMON</span> <span class=\"kwb\">ENGINE</span></span> unit from your army is selected to shoot. Until the end of the phase:<br><ul><li>Models in that unit can make attacks with <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Blast-Weapons\">Blast weapons</a> against units within <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of their unit.</li><li>Each time a ranged attack is made by a model in that unit against an enemy unit that is within Engagement Range of their unit, add 1 to that attack’s <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.</li></ul>"
							}
						],
						"waha": {
							"id": "000001374",
							"name": "Myphitic Blight-haulers",
							"link": "https://wahapedia.ruhttps://wahapedia.ru/wh40k9ed/factions/death-guard/Myphitic-Blight-haulers",
							"faction_id": "DG",
							"source_id": "000000014",
							"role": "Fast Attack",
							"unit_composition": "If this unit contains 2 models, it has <b>Power Rating 14</b>. If this unit contains 3 models, it has <b>Power Rating 21</b>. Every model is equipped with: bile spurt; missile launcher; multi-melta; gnashing maw.",
							"transport": "",
							"power_points": "7",
							"priest": "",
							"psyker": "",
							"open_play_only": "false",
							"crusade_only": "false",
							"virtual": "false",
							"Cost": "",
							"cost_per_unit": "Нет",
							"field17": ""
						}
					}
				],
				"wahaFaction": "DG"
			}],
			"costs": {
				"PL": 107,

				"CP": 10,

				"pts": 2000
			}
		},
		{
			"name": "Dual Riptides w/ Enforcer",
			"detachments": [{
				"name": "Battalion Detachment 0CP",
				"faction": "T'au Empire",
				"units": [{
						"name": "Cadre Fireblade",
						"slot": "HQ",
						"faction": [
							"T’au Empire",
							"<Sept>"
						],
						"keywords": [
							"infantry",
							"character",
							"cadre fireblade"
						],
						"models": [{
							"name": "Cadre Fireblade",
							"faction": "",
							"keywords": [],
							"weapons": [{
								"name": "Fireblade Pulse Rifle",
								"amount": "1",
								"Range": "36\"",
								"Type": "Rapid Fire 1",
								"S": "5",
								"AP": "-2",
								"D": "2",
								"Abilities": "-"
							}],
							"wargear": [],
							"statlines": {
								"M": "6",
								"WS": "4",
								"BS": "3",
								"S": "3",
								"T": "3",
								"W": "4",
								"A": "3",
								"Ld": "8",
								"Sv": "4"
							}
						}],
						"rules": [{
								"name": "Target Sighted",
								"desc": "In your Command phase, select one friendly <SEPT> FIRE WARRIOR TEAM unit within 9\" of this unit's CADRE FIREBLADE model, until the start of your next Command phase, each time a CORE model in that unit makes a ranged attack, re-roll a hit roll of 1.",
								"subkeys": [
									"SEPT",
									"FIRE",
									"WARRIOR",
									"TEAM",
									"CADRE",
									"FIREBLADE",
									"CORE"
								],
								"targets": [
									"SEPT",
									"FIRE WARRIOR",
									"TEAM",
									"CADRE FIREBLADE",
									"CORE"
								],
								"phases": []
							},
							{
								"name": "Volley Fire (Aura)",
								"desc": "While a friendly <SEPT> CORE unit is within 6\" of this unit's CADRE FIREBLADE model, each time a CORE model in that unit makes an attack with a pulse weapon (pg 130), an unmodified hit roll of 6 scores one additional hit.",
								"subkeys": [
									"SEPT",
									"CORE",
									"CADRE",
									"FIREBLADE",
									"CORE"
								],
								"targets": [
									"SEPT",
									"CORE",
									"CADRE FIREBLADE",
									"CORE"
								],
								"phases": []
							},
							{
								"name": "Markerlight",
								"desc": "The bearer gains the MARKERLIGHT keyword.",
								"subkeys": [
									"MARKERLIGHT"
								],
								"targets": [
									"MARKERLIGHT"
								],
								"phases": []
							},
							{
								"name": "4. Through Boldness, Victory",
								"desc": "In your Command phase, select one friendly <SEPT> CORE unit within 9\" of this WARLORD. Until the start of your next Command phase, each time a CORE model in that unit makes a ranged attack, an unmodified hit roll of 6 automatically wounds the target.",
								"subkeys": [
									"SEPT",
									"CORE",
									"WARLORD",
									"CORE"
								],
								"targets": [
									"SEPT",
									"CORE",
									"WARLORD",
									"CORE"
								],
								"phases": []
							},
							{
								"name": "Ohr'tu's Lantern",
								"desc": "Model equipped with a markerlight only. Each time this model performs the Fire Markerlights action (pg 93), roll five additional D6s (each of which causes the enemy unit to gain one Markerlight token on a roll of 3+).",
								"subkeys": null,
								"targets": null,
								"phases": []
							}
						],
						"spells": [],
						"stratagems": [{
								"faction_id": "TAU",
								"name": "ORBITAL MARKER DISTRIBUTION UPLINK",
								"type": "Sa’cea Stratagem",
								"cp_cost": "2",
								"legend": "Sa’cea Sept has innovated the use of markerlight scatter-flares, dropped from the upper atmosphere by networked Recon Drones to illuminate the greatest concentrations of enemy troops.",
								"source_id": "",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Pick an enemy unit visible to a <span class=\"tooltip00819\" data-tooltip-content=\"#tooltip_content00819\" data-tooltip-anchor=\"#tooltip_content00819\"><span class=\"kwb\">SA’CEA</span> <span class=\"kwb\">SEPT</span> <span class=\"kwb\">CHARACTER</span></span> from your army. That unit and all other enemy units within 6\" of it gain a <a href=\"https://wahapedia.ru/wh40k9ed/factions/t-au-empire/#Markerlights-1\">markerlight</a> counter.",
								"id": "000002714025",
								"field9": "",
								"keys": [
									"sa’cea sept character",
									"sa’cea",
									"sept",
									"character"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Pick an enemy unit visible to a <span class=\"tooltip00819\" data-tooltip-content=\"#tooltip_content00819\" data-tooltip-anchor=\"#tooltip_content00819\"><span class=\"kwb\">SA’CEA</span> <span class=\"kwb\">SEPT</span> <span class=\"kwb\">CHARACTER</span></span> from your army. That unit and all other enemy units within 6\" of it gain a <a href=\"https://wahapedia.ru/wh40k9ed/factions/t-au-empire/#Markerlights-1\">markerlight</a> counter."
							},
							{
								"faction_id": "TAU",
								"name": "EMERGENCY DISPENSATION",
								"type": "T’au Empire Stratagem",
								"cp_cost": "1/3",
								"legend": "Multiple advanced prototypes and ultra-rare technologies have been provided for the war effort by Ethereal decree.",
								"source_id": "",
								"description": "Use this Stratagem before the battle. Your army can have one extra <a href=\"https://wahapedia.ru/wh40k9ed/factions/t-au-empire/#Signature-Systems\">Signature System</a> for 1 CP, or two extra Signature Systems for 3 CPs. All of the Signature Systems that you include must be different and be given to different <span class=\"tooltip00824\" data-tooltip-content=\"#tooltip_content00824\" data-tooltip-anchor=\"#tooltip_content00824\"><span class=\"kwb\">T’AU</span> <span class=\"kwb\">EMPIRE</span> <span class=\"kwb\">CHARACTERS</span></span>. You can only use this Stratagem once per battle.",
								"id": "000002714014",
								"field9": "",
								"keys": [
									"t’au empire characters",
									"t’au",
									"empire",
									"characters"
								],
								"activate": [
									"Before battle"
								],
								"descText": "Use this Stratagem before the battle. Your army can have one extra <a href=\"https://wahapedia.ru/wh40k9ed/factions/t-au-empire/#Signature-Systems\">Signature System</a> for 1 CP, or two extra Signature Systems for 3 CPs. All of the Signature Systems that you include must be different and be given to different <span class=\"tooltip00824\" data-tooltip-content=\"#tooltip_content00824\" data-tooltip-anchor=\"#tooltip_content00824\"><span class=\"kwb\">T’AU</span> <span class=\"kwb\">EMPIRE</span> <span class=\"kwb\">CHARACTERS</span></span>. You can only use this Stratagem once per battle."
							},
							{
								"faction_id": "TAU",
								"name": "HOT-BLOODED",
								"type": "Vior’la Stratagem",
								"cp_cost": "2",
								"legend": "The daredevil Fire Warriors of Vior’la stray dangerously close to enemy formations in order to maximise the killing power of their pulse volleys.",
								"source_id": "",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">shooting phase</a>. Pick a <span class=\"tooltip00842\" data-tooltip-content=\"#tooltip_content00842\" data-tooltip-anchor=\"#tooltip_content00842\"><span class=\"kwb\">VIOR’LA</span> <span class=\"kwb\">SEPT</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. That unit may be chosen to shoot twice this phase, but all models in the unit must target the closest enemy unit each time they do so.",
								"id": "000002714024",
								"field9": "",
								"keys": [
									"vior’la sept infantry",
									"vior’la",
									"sept",
									"infantry"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">shooting phase</a>. Pick a <span class=\"tooltip00842\" data-tooltip-content=\"#tooltip_content00842\" data-tooltip-anchor=\"#tooltip_content00842\"><span class=\"kwb\">VIOR’LA</span> <span class=\"kwb\">SEPT</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. That unit may be chosen to shoot twice this phase, but all models in the unit must target the closest enemy unit each time they do so."
							},
							{
								"faction_id": "TAU",
								"name": "SWORN BODYGUARDS",
								"type": "T’au Empire Stratagem",
								"cp_cost": "1",
								"legend": "Crisis Bodyguards rush to the aid of their charge, ready to fight hand-to-hand if necessary to protect them.",
								"source_id": "000000116",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip03499\" data-tooltip-content=\"#tooltip_content03499\" data-tooltip-anchor=\"#tooltip_content03499\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">S</span>EPT&gt;</span> <span class=\"kwb\">XV8</span> <span class=\"kwb\">CRISIS</span> <span class=\"kwb\">BODYGUARDS</span></span> unit from your army is chosen to fight with. Until the end of that phase, when resolving an attack made with a melee weapon by a model in that unit whilst a friendly <span class=\"tooltip00831\" data-tooltip-content=\"#tooltip_content00831\" data-tooltip-anchor=\"#tooltip_content00831\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">S</span>EPT&gt;</span> <span class=\"kwb\">CHARACTER</span></span> unit is within 3\" of that model’s unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> and you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
								"id": "000004019002",
								"field9": "",
								"keys": [
									"&lt;sept&gt; xv8 crisis bodyguards",
									"&lt;sept&gt; character",
									"s",
									"xv8",
									"crisis",
									"bodyguards",
									"s",
									"character"
								],
								"activate": [
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip03499\" data-tooltip-content=\"#tooltip_content03499\" data-tooltip-anchor=\"#tooltip_content03499\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">S</span>EPT&gt;</span> <span class=\"kwb\">XV8</span> <span class=\"kwb\">CRISIS</span> <span class=\"kwb\">BODYGUARDS</span></span> unit from your army is chosen to fight with. Until the end of that phase, when resolving an attack made with a melee weapon by a model in that unit whilst a friendly <span class=\"tooltip00831\" data-tooltip-content=\"#tooltip_content00831\" data-tooltip-anchor=\"#tooltip_content00831\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">S</span>EPT&gt;</span> <span class=\"kwb\">CHARACTER</span></span> unit is within 3\" of that model’s unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> and you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>."
							},
							{
								"faction_id": "TAU",
								"name": "PROMISING PUPIL",
								"type": "T’au Empire Stratagem",
								"cp_cost": "1",
								"legend": "The Fire caste academies imbue in all Fire Warriors the importance of raising up the particularly skilled of their number, for the Greater Good.",
								"source_id": "000000116",
								"description": "Use this Stratagem before the battle, after nominating your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\">Warlord</a>. Select one <span class=\"tooltip00831\" data-tooltip-content=\"#tooltip_content00831\" data-tooltip-anchor=\"#tooltip_content00831\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">S</span>EPT&gt;</span> <span class=\"kwb\">CHARACTER</span></span> model from your army that does not have a Warlord Trait and determine one <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Warlord-Traits\">Warlord Trait</a> for it; it is regarded as your Warlord for the purposes of that Warlord Trait. Each Warlord Trait in your army must be unique (if randomly generated, re-roll duplicate results).",
								"id": "000004019016",
								"field9": "",
								"keys": [
									"&lt;sept&gt; character",
									"s",
									"character"
								],
								"activate": [
									"Before battle"
								],
								"descText": "Use this Stratagem before the battle, after nominating your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\">Warlord</a>. Select one <span class=\"tooltip00831\" data-tooltip-content=\"#tooltip_content00831\" data-tooltip-anchor=\"#tooltip_content00831\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">S</span>EPT&gt;</span> <span class=\"kwb\">CHARACTER</span></span> model from your army that does not have a Warlord Trait and determine one <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Warlord-Traits\">Warlord Trait</a> for it; it is regarded as your Warlord for the purposes of that Warlord Trait. Each Warlord Trait in your army must be unique (if randomly generated, re-roll duplicate results)."
							}
						],
						"waha": {
							"id": "000000405",
							"name": "Cadre Fireblade",
							"link": "https://wahapedia.ruhttps://wahapedia.ru/wh40k9ed/factions/t-au-empire/Cadre-Fireblade",
							"faction_id": "TAU",
							"source_id": "000000028",
							"role": "HQ",
							"unit_composition": "A Cadre Fireblade is a single model armed with a markerlight, pulse rifle and photon grenades. It may be accompanied by up to 2 <a href=\"https://wahapedia.ru/wh40k9ed/factions/t-au-empire/Tactical-Drones\">Tactical Drones</a> (<b>Power Rating +1 per two models</b>).",
							"transport": "",
							"power_points": "3",
							"priest": "",
							"psyker": "",
							"open_play_only": "false",
							"crusade_only": "false",
							"virtual": "false",
							"Cost": "",
							"cost_per_unit": "Нет",
							"field17": ""
						}
					},
					{
						"name": "Ethereal",
						"slot": "HQ",
						"faction": [
							"<Sept>",
							"T’au Empire"
						],
						"keywords": [
							"ethereal",
							"character",
							"infantry"
						],
						"models": [{
							"name": "Ethereal (Hover Drone)",
							"faction": "",
							"keywords": [],
							"weapons": [{
								"name": "Honour Blade",
								"amount": "1",
								"Range": "Melee",
								"Type": "Melee",
								"S": "+2",
								"AP": "-1",
								"D": "2",
								"Abilities": "Each time an attack is made with this weapon, subtract 1 from that attack's hit roll."
							}],
							"wargear": [],
							"statlines": {
								"M": "10",
								"WS": "3",
								"BS": "4",
								"S": "3",
								"T": "3",
								"W": "4",
								"A": "3",
								"Ld": "10",
								"Sv": "5"
							}
						}],
						"rules": [{
								"name": "Inspired to Greatness",
								"desc": "In your Command phase, select one friendly T'AU EMPIRE CORE or T'AU AUXILIARY unit within 6\" of this unit's ETHEREAL model (excluding FARSIGHT ENCLAVES units). Until the start of your next Command phase, while that unit is performing an action, it can make ranged attacks without that action failing.",
								"subkeys": [
									"T",
									"AU",
									"EMPIRE",
									"CORE",
									"T",
									"AU",
									"AUXILIARY",
									"ETHEREAL",
									"FARSIGHT",
									"ENCLAVES"
								],
								"targets": [
									"AU EMPIRE",
									"CORE",
									"AU AUXILIARY",
									"ETHEREAL",
									"FARSIGHT ENCLAVES"
								],
								"phases": [
									"Command"
								]
							},
							{
								"name": "Failure Is Not An Option (Aura)",
								"desc": "While a friendly T'AU EMPIRE CORE unit (excluding FARSIGHT ENCLAVES and T'AU AUXILIARY units) is within 6\" of this unit's ETHEREAL model, models in that unit can use this model's Leadership characteristic instead of their own.",
								"subkeys": [
									"T",
									"AU",
									"EMPIRE",
									"CORE",
									"FARSIGHT",
									"ENCLAVES",
									"T",
									"AU",
									"AUXILIARY",
									"ETHEREAL"
								],
								"targets": [
									"AU EMPIRE",
									"CORE",
									"FARSIGHT ENCLAVES",
									"AU AUXILIARY",
									"ETHEREAL"
								],
								"phases": []
							},
							{
								"name": "Embodiments of the Empire",
								"desc": "This model cannot be drawn from the FARSIGHT ENCLAVES Sept.",
								"subkeys": [
									"FARSIGHT",
									"ENCLAVES"
								],
								"targets": [
									"FARSIGHT ENCLAVES"
								],
								"phases": []
							},
							{
								"name": "Serene Unifier (Ethereal)",
								"desc": "This model knows two invocations from the Invocations of the Ethereals (pg 76). In your Command phase, if this model is on the battlefield, it can intone one Invocation it knows that has not already been inspired by a friendly model this turn. Roll one D6: on a 3+, the intoned invocation is inspiring and takes affect until the start of your next Command phase.",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Hover Drone",
								"desc": "The bearer has a Move characteristic of 10 and the FLY keyword.",
								"subkeys": [
									"FLY"
								],
								"targets": [
									"FLY"
								],
								"phases": []
							},
							{
								"name": "The Humble Stave",
								"desc": "- In your Command phase, if the bearer is on the battlefield, it can intone one additional invocation it knows from the Invocations of the Ethereals (pg 76) that has not already been intoned by a friendly model that turn.\n- Each time the bearer intones an Invocation, add 1 to the roll to see if it is inspiring.",
								"subkeys": null,
								"targets": null,
								"phases": []
							}
						],
						"spells": [],
						"stratagems": [{
								"faction_id": "TAU",
								"name": "EMERGENCY DISPENSATION",
								"type": "T’au Empire Stratagem",
								"cp_cost": "1/3",
								"legend": "Multiple advanced prototypes and ultra-rare technologies have been provided for the war effort by Ethereal decree.",
								"source_id": "",
								"description": "Use this Stratagem before the battle. Your army can have one extra <a href=\"https://wahapedia.ru/wh40k9ed/factions/t-au-empire/#Signature-Systems\">Signature System</a> for 1 CP, or two extra Signature Systems for 3 CPs. All of the Signature Systems that you include must be different and be given to different <span class=\"tooltip00824\" data-tooltip-content=\"#tooltip_content00824\" data-tooltip-anchor=\"#tooltip_content00824\"><span class=\"kwb\">T’AU</span> <span class=\"kwb\">EMPIRE</span> <span class=\"kwb\">CHARACTERS</span></span>. You can only use this Stratagem once per battle.",
								"id": "000002714014",
								"field9": "",
								"keys": [
									"t’au empire characters",
									"t’au",
									"empire",
									"characters"
								],
								"activate": [
									"Before battle"
								],
								"descText": "Use this Stratagem before the battle. Your army can have one extra <a href=\"https://wahapedia.ru/wh40k9ed/factions/t-au-empire/#Signature-Systems\">Signature System</a> for 1 CP, or two extra Signature Systems for 3 CPs. All of the Signature Systems that you include must be different and be given to different <span class=\"tooltip00824\" data-tooltip-content=\"#tooltip_content00824\" data-tooltip-anchor=\"#tooltip_content00824\"><span class=\"kwb\">T’AU</span> <span class=\"kwb\">EMPIRE</span> <span class=\"kwb\">CHARACTERS</span></span>. You can only use this Stratagem once per battle."
							},
							{
								"faction_id": "TAU",
								"name": "PROMISING PUPIL",
								"type": "T’au Empire Stratagem",
								"cp_cost": "1",
								"legend": "The Fire caste academies imbue in all Fire Warriors the importance of raising up the particularly skilled of their number, for the Greater Good.",
								"source_id": "000000116",
								"description": "Use this Stratagem before the battle, after nominating your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\">Warlord</a>. Select one <span class=\"tooltip00831\" data-tooltip-content=\"#tooltip_content00831\" data-tooltip-anchor=\"#tooltip_content00831\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">S</span>EPT&gt;</span> <span class=\"kwb\">CHARACTER</span></span> model from your army that does not have a Warlord Trait and determine one <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Warlord-Traits\">Warlord Trait</a> for it; it is regarded as your Warlord for the purposes of that Warlord Trait. Each Warlord Trait in your army must be unique (if randomly generated, re-roll duplicate results).",
								"id": "000004019016",
								"field9": "",
								"keys": [
									"&lt;sept&gt; character",
									"s",
									"character"
								],
								"activate": [
									"Before battle"
								],
								"descText": "Use this Stratagem before the battle, after nominating your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#The-Warlord\">Warlord</a>. Select one <span class=\"tooltip00831\" data-tooltip-content=\"#tooltip_content00831\" data-tooltip-anchor=\"#tooltip_content00831\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">S</span>EPT&gt;</span> <span class=\"kwb\">CHARACTER</span></span> model from your army that does not have a Warlord Trait and determine one <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Warlord-Traits\">Warlord Trait</a> for it; it is regarded as your Warlord for the purposes of that Warlord Trait. Each Warlord Trait in your army must be unique (if randomly generated, re-roll duplicate results)."
							},
							{
								"faction_id": "TAU",
								"name": "SWORN BODYGUARDS",
								"type": "T’au Empire Stratagem",
								"cp_cost": "1",
								"legend": "Crisis Bodyguards rush to the aid of their charge, ready to fight hand-to-hand if necessary to protect them.",
								"source_id": "000000116",
								"description": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip03499\" data-tooltip-content=\"#tooltip_content03499\" data-tooltip-anchor=\"#tooltip_content03499\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">S</span>EPT&gt;</span> <span class=\"kwb\">XV8</span> <span class=\"kwb\">CRISIS</span> <span class=\"kwb\">BODYGUARDS</span></span> unit from your army is chosen to fight with. Until the end of that phase, when resolving an attack made with a melee weapon by a model in that unit whilst a friendly <span class=\"tooltip00831\" data-tooltip-content=\"#tooltip_content00831\" data-tooltip-anchor=\"#tooltip_content00831\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">S</span>EPT&gt;</span> <span class=\"kwb\">CHARACTER</span></span> unit is within 3\" of that model’s unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> and you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
								"id": "000004019002",
								"field9": "",
								"keys": [
									"&lt;sept&gt; xv8 crisis bodyguards",
									"&lt;sept&gt; character",
									"s",
									"xv8",
									"crisis",
									"bodyguards",
									"s",
									"character"
								],
								"activate": [
									"Fight phase",
									"Enemy Fight phase"
								],
								"descText": "Use this Stratagem in the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip03499\" data-tooltip-content=\"#tooltip_content03499\" data-tooltip-anchor=\"#tooltip_content03499\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">S</span>EPT&gt;</span> <span class=\"kwb\">XV8</span> <span class=\"kwb\">CRISIS</span> <span class=\"kwb\">BODYGUARDS</span></span> unit from your army is chosen to fight with. Until the end of that phase, when resolving an attack made with a melee weapon by a model in that unit whilst a friendly <span class=\"tooltip00831\" data-tooltip-content=\"#tooltip_content00831\" data-tooltip-anchor=\"#tooltip_content00831\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">S</span>EPT&gt;</span> <span class=\"kwb\">CHARACTER</span></span> unit is within 3\" of that model’s unit, you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> and you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>."
							},
							{
								"faction_id": "TAU",
								"name": "WISDOM OF THE MANY",
								"type": "T’au Empire Stratagem",
								"cp_cost": "1",
								"legend": "The wisest of the T’au Ethereals know how powerful the combined strength of the four castes can be.",
								"source_id": "000000116",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip02934\" data-tooltip-content=\"#tooltip_content02934\" data-tooltip-anchor=\"#tooltip_content02934\"><span class=\"kwb\">ETHEREAL</span></span> unit from your army. Until the end of that phase, that unit can invoke one additional elemental power using its <span class=\"redfont\">Invocation of the Elements</span> ability, so long as that elemental power has not already been invoked by that unit in that phase.",
								"id": "000004019005",
								"field9": "",
								"keys": [
									"ethereal",
									"ethereal",
									"invocation of the elements"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip02934\" data-tooltip-content=\"#tooltip_content02934\" data-tooltip-anchor=\"#tooltip_content02934\"><span class=\"kwb\">ETHEREAL</span></span> unit from your army. Until the end of that phase, that unit can invoke one additional elemental power using its <span class=\"redfont\">Invocation of the Elements</span> ability, so long as that elemental power has not already been invoked by that unit in that phase."
							},
							{
								"faction_id": "TAU",
								"name": "ORBITAL MARKER DISTRIBUTION UPLINK",
								"type": "Sa’cea Stratagem",
								"cp_cost": "2",
								"legend": "Sa’cea Sept has innovated the use of markerlight scatter-flares, dropped from the upper atmosphere by networked Recon Drones to illuminate the greatest concentrations of enemy troops.",
								"source_id": "",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Pick an enemy unit visible to a <span class=\"tooltip00819\" data-tooltip-content=\"#tooltip_content00819\" data-tooltip-anchor=\"#tooltip_content00819\"><span class=\"kwb\">SA’CEA</span> <span class=\"kwb\">SEPT</span> <span class=\"kwb\">CHARACTER</span></span> from your army. That unit and all other enemy units within 6\" of it gain a <a href=\"https://wahapedia.ru/wh40k9ed/factions/t-au-empire/#Markerlights-1\">markerlight</a> counter.",
								"id": "000002714025",
								"field9": "",
								"keys": [
									"sa’cea sept character",
									"sa’cea",
									"sept",
									"character"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Pick an enemy unit visible to a <span class=\"tooltip00819\" data-tooltip-content=\"#tooltip_content00819\" data-tooltip-anchor=\"#tooltip_content00819\"><span class=\"kwb\">SA’CEA</span> <span class=\"kwb\">SEPT</span> <span class=\"kwb\">CHARACTER</span></span> from your army. That unit and all other enemy units within 6\" of it gain a <a href=\"https://wahapedia.ru/wh40k9ed/factions/t-au-empire/#Markerlights-1\">markerlight</a> counter."
							},
							{
								"faction_id": "TAU",
								"name": "HOT-BLOODED",
								"type": "Vior’la Stratagem",
								"cp_cost": "2",
								"legend": "The daredevil Fire Warriors of Vior’la stray dangerously close to enemy formations in order to maximise the killing power of their pulse volleys.",
								"source_id": "",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">shooting phase</a>. Pick a <span class=\"tooltip00842\" data-tooltip-content=\"#tooltip_content00842\" data-tooltip-anchor=\"#tooltip_content00842\"><span class=\"kwb\">VIOR’LA</span> <span class=\"kwb\">SEPT</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. That unit may be chosen to shoot twice this phase, but all models in the unit must target the closest enemy unit each time they do so.",
								"id": "000002714024",
								"field9": "",
								"keys": [
									"vior’la sept infantry",
									"vior’la",
									"sept",
									"infantry"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">shooting phase</a>. Pick a <span class=\"tooltip00842\" data-tooltip-content=\"#tooltip_content00842\" data-tooltip-anchor=\"#tooltip_content00842\"><span class=\"kwb\">VIOR’LA</span> <span class=\"kwb\">SEPT</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. That unit may be chosen to shoot twice this phase, but all models in the unit must target the closest enemy unit each time they do so."
							}
						],
						"waha": {
							"id": "000000404",
							"name": "Ethereal",
							"link": "https://wahapedia.ruhttps://wahapedia.ru/wh40k9ed/factions/t-au-empire/Ethereal",
							"faction_id": "TAU",
							"source_id": "000000028",
							"role": "HQ",
							"unit_composition": "An Ethereal is a single model armed with an honour blade. It may be accompanied by up to 2 <a href=\"https://wahapedia.ru/wh40k9ed/factions/t-au-empire/Tactical-Drones\">Tactical Drones</a> (<b>Power Rating +1 per two models</b>).",
							"transport": "",
							"power_points": "3",
							"priest": "",
							"psyker": "",
							"open_play_only": "false",
							"crusade_only": "false",
							"virtual": "false",
							"Cost": "",
							"cost_per_unit": "Нет",
							"field17": ""
						}
					},
					{
						"name": "Commander in Coldstar Battlesuit",
						"slot": "HQ",
						"faction": "T'au Empire",
						"keywords": [
							"battlesuit",
							"character",
							"fly",
							"jet pack",
							"coldstar",
							"commander",
							"infantry"
						],
						"models": [{
								"name": "Shield Drone",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "High-output Burst Cannon",
										"amount": "1",
										"Range": "18\"",
										"Type": "Assault 10",
										"S": "5",
										"AP": "-1",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Burst Cannon",
										"amount": "1",
										"Range": "18\"",
										"Type": "Assault 6",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "2",
								"statlines": {
									"M": "10",
									"WS": "5",
									"BS": "5",
									"S": "3",
									"T": "4",
									"W": "2",
									"A": "1",
									"Ld": "6",
									"Sv": "4"
								}
							},
							{
								"name": "Commander in Coldstar Battlesuit",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "High-output Burst Cannon",
										"amount": "1",
										"Range": "18\"",
										"Type": "Assault 10",
										"S": "5",
										"AP": "-1",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Burst Cannon",
										"amount": "1",
										"Range": "18\"",
										"Type": "Assault 6",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"statlines": {
									"M": "14",
									"WS": "3",
									"BS": "2",
									"S": "5",
									"T": "5",
									"W": "7",
									"A": "4",
									"Ld": "10",
									"Sv": "3"
								}
							}
						],
						"rules": [{
								"name": "Battlesuits",
								"desc": "BATTLESUIT models in this unit can make attacks with ranged weapons even when their unit is within Engagement Range of enemy units, but they can only make such attacks against enemy units that they are within Engagement Range of. In such circumstances, these models can target an enemy unit even if other friendly units are within Engagement Range of the same enemy unit.\n\nNote that if a BATTLESUIT model has more than one ranged weapon, you can still choose to target units that are not within Engagement Range of its unit, but it will only be able to make the attacks with that weapon if all enemy units within Engagement Range of its unit have been destroyed when you come to resolve these attacks. In addition, when a BATTLESUIT model shoots a Heavy weapon, subtract 1 from the hit rolls when resolving that weapon's attacks while any enemy units are within Engagement Range of that model's unit.",
								"subkeys": [
									"BATTLESUIT",
									"BATTLESUIT",
									"BATTLESUIT"
								],
								"targets": [
									"BATTLESUIT",
									"BATTLESUIT",
									"BATTLESUIT"
								],
								"phases": []
							},
							{
								"name": "Manta Strike",
								"desc": "During deployment, you can set up this unit as a Manta hold instead of setting it up on the battlefield. If you do, then in the Reinforcements step of one of your Movement phases you can set up this unit anywhere on the battlefield that is more than 9\" away from any enemy models.",
								"subkeys": null,
								"targets": null,
								"phases": [
									"Movement"
								]
							},
							{
								"name": "Master of War (Aura) (Coldstar)",
								"desc": "While a friendly T'AU EMPIRE CORE unit is within 6\" of this unit's COLDSTAR BATTLESUIT COMMANDER model, each time a CORE model in this unit makes an attack, re-roll a hit-roll of 1.",
								"subkeys": [
									"T",
									"AU",
									"EMPIRE",
									"CORE",
									"COLDSTAR",
									"BATTLESUIT",
									"COMMANDER",
									"CORE"
								],
								"targets": [
									"AU EMPIRE",
									"CORE",
									"COLDSTAR BATTLESUIT",
									"COMMANDER",
									"CORE"
								],
								"phases": []
							},
							{
								"name": "Aggressive Tactics",
								"desc": "In your Command phase, you can select one friendly <SEPT> CRISIS CORE unit within 9\" of this unit's COLDSTAR BATTLESUIT COMMANDER model. Until the end of the turn, each time this unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 8\" to the Move characteristic of models in this unit.",
								"subkeys": [
									"SEPT",
									"CRISIS",
									"CORE",
									"COLDSTAR",
									"BATTLESUIT",
									"COMMANDER"
								],
								"targets": [
									"SEPT",
									"CRISIS CORE",
									"COLDSTAR BATTLESUIT",
									"COMMANDER"
								],
								"phases": []
							},
							{
								"name": "High-altitude Manoeuvres",
								"desc": "Once per battle, at the start of your Movement phase, you can remove this unit from the battlefield. If you do, then in the Reinforcements step of that phase, you can do one of the following:\n\n- Set this unit back up on the battlefield, anywhere that is more than 9\" away from any enemy models.\n- If the mission you are playing is using the Strategic Reserves rule, place this unit into Strategic Reserves.",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Target Lock",
								"desc": "Each time the bearer makes a ranged attack, the target does not receive the benefits of Light Cover against that attack.",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Shield Generator",
								"desc": "The bearer has a 4+ invulnerable save.",
								"subkeys": null,
								"targets": null,
								"phases": []
							}
						],
						"spells": [],
						"stratagems": []
					},
					{
						"name": "Strike Team",
						"slot": "Troops",
						"faction": [
							"<Sept>",
							"T’au Empire"
						],
						"keywords": [
							"infantry",
							"drone",
							"strike team",
							"guardian drone",
							"fly"
						],
						"models": [{
								"name": "Fire Warrior Shas'ui",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Pulse Pistol",
										"amount": "1",
										"Range": "12\"",
										"Type": "Pistol 1",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Pulse Rifle",
										"amount": "1",
										"Range": "36\"",
										"Type": "Rapid Fire 1",
										"S": "5",
										"AP": "-1",
										"D": "1",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "6",
									"WS": "5",
									"BS": "4",
									"S": "3",
									"T": "3",
									"W": "1",
									"A": "2",
									"Ld": "8",
									"Sv": "4"
								}
							},
							{
								"name": "Fire Warrior",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Pulse Rifle",
										"amount": "9",
										"Range": "36\"",
										"Type": "Rapid Fire 1",
										"S": "5",
										"AP": "-1",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Pulse Pistol",
										"amount": "9",
										"Range": "12\"",
										"Type": "Pistol 1",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "9",
								"statlines": {
									"M": "6",
									"WS": "5",
									"BS": "4",
									"S": "3",
									"T": "3",
									"W": "1",
									"A": "1",
									"Ld": "7",
									"Sv": "4"
								}
							},
							{
								"name": "Marker Drone",
								"faction": "",
								"keywords": [],
								"weapons": [],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "10",
									"WS": "5",
									"BS": "5",
									"S": "3",
									"T": "4",
									"W": "1",
									"A": "1",
									"Ld": "6",
									"Sv": "4"
								}
							}
						],
						"rules": [{
							"name": "Set up Turret",
							"desc": "If this unit contains a Support Turret, that model is not set up until the unit performs the following action:\n\n'Deploy Turret (Action): In your Command phase, any number of BREACHER TEAM or STRIKE TEAM units from your army can start to perform this action. This action is completed at the end of your next Movement phase. When it is completed, if that unit contains a Support Turret model that is not on the battlefield and has not been destroyed, set that Support Turret model up on the battlefield in Unit Coherency with that unit.'",
							"subkeys": [
								"BREACHER",
								"TEAM",
								"STRIKE",
								"TEAM"
							],
							"targets": [
								"BREACHER TEAM",
								"STRIKE TEAM"
							],
							"phases": []
						}],
						"spells": [],
						"stratagems": [{
								"faction_id": "TAU",
								"name": "DANGER CLOSE",
								"type": "Farsight Enclaves Stratagem",
								"cp_cost": "1",
								"legend": "Fire Warrior teams of the Farsight Enclaves receive extensive training in close-quarters combat.",
								"source_id": "000000116",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip03495\" data-tooltip-content=\"#tooltip_content03495\" data-tooltip-anchor=\"#tooltip_content03495\"><span class=\"kwb\">BREACHER</span> <span class=\"kwb\">TEAM</span></span> or <span class=\"tooltip03496\" data-tooltip-content=\"#tooltip_content03496\" data-tooltip-anchor=\"#tooltip_content03496\"><span class=\"kwb\">STRIKE</span> <span class=\"kwb\">TEAM</span></span> unit from your army is chosen to shoot with. Until the end of that phase, when resolving an attack made with a ranged weapon by a model in that unit against an enemy unit within 12\", you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
								"id": "000004033004",
								"field9": "",
								"keys": [
									"breacher team",
									"strike team",
									"breacher",
									"team",
									"strike",
									"team"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip03495\" data-tooltip-content=\"#tooltip_content03495\" data-tooltip-anchor=\"#tooltip_content03495\"><span class=\"kwb\">BREACHER</span> <span class=\"kwb\">TEAM</span></span> or <span class=\"tooltip03496\" data-tooltip-content=\"#tooltip_content03496\" data-tooltip-anchor=\"#tooltip_content03496\"><span class=\"kwb\">STRIKE</span> <span class=\"kwb\">TEAM</span></span> unit from your army is chosen to shoot with. Until the end of that phase, when resolving an attack made with a ranged weapon by a model in that unit against an enemy unit within 12\", you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>."
							},
							{
								"faction_id": "TAU",
								"name": "SUPPORT TURRET REPLACEMENT",
								"type": "T’au Empire Stratagem",
								"cp_cost": "1",
								"legend": "Field-logistics drones swoop down from above, bearing a replacement support turret in an underslung grav-harness.",
								"source_id": "",
								"description": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Pick a friendly <span class=\"tooltip03496\" data-tooltip-content=\"#tooltip_content03496\" data-tooltip-anchor=\"#tooltip_content03496\"><span class=\"kwb\">STRIKE</span> <span class=\"kwb\">TEAM</span></span> or <span class=\"tooltip03495\" data-tooltip-content=\"#tooltip_content03495\" data-tooltip-anchor=\"#tooltip_content03495\"><span class=\"kwb\">BREACHER</span> <span class=\"kwb\">TEAM</span></span> whose DS8 Tactical Support Turret has been destroyed. You may immediately set up a new DS8 Tactical Support Turret in <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Unit-Coherency\">unit coherency</a> with the unit as described in their <span class=\"redfont\">DS8 Tactical Support Turret</span> ability.",
								"id": "000002714012",
								"field9": "",
								"keys": [
									"strike team",
									"breacher team",
									"strike",
									"team",
									"breacher",
									"team",
									"ds8 tactical support turret"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Pick a friendly <span class=\"tooltip03496\" data-tooltip-content=\"#tooltip_content03496\" data-tooltip-anchor=\"#tooltip_content03496\"><span class=\"kwb\">STRIKE</span> <span class=\"kwb\">TEAM</span></span> or <span class=\"tooltip03495\" data-tooltip-content=\"#tooltip_content03495\" data-tooltip-anchor=\"#tooltip_content03495\"><span class=\"kwb\">BREACHER</span> <span class=\"kwb\">TEAM</span></span> whose DS8 Tactical Support Turret has been destroyed. You may immediately set up a new DS8 Tactical Support Turret in <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Unit-Coherency\">unit coherency</a> with the unit as described in their <span class=\"redfont\">DS8 Tactical Support Turret</span> ability."
							},
							{
								"faction_id": "TAU",
								"name": "HOT-BLOODED",
								"type": "Vior’la Stratagem",
								"cp_cost": "2",
								"legend": "The daredevil Fire Warriors of Vior’la stray dangerously close to enemy formations in order to maximise the killing power of their pulse volleys.",
								"source_id": "",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">shooting phase</a>. Pick a <span class=\"tooltip00842\" data-tooltip-content=\"#tooltip_content00842\" data-tooltip-anchor=\"#tooltip_content00842\"><span class=\"kwb\">VIOR’LA</span> <span class=\"kwb\">SEPT</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. That unit may be chosen to shoot twice this phase, but all models in the unit must target the closest enemy unit each time they do so.",
								"id": "000002714024",
								"field9": "",
								"keys": [
									"vior’la sept infantry",
									"vior’la",
									"sept",
									"infantry"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">shooting phase</a>. Pick a <span class=\"tooltip00842\" data-tooltip-content=\"#tooltip_content00842\" data-tooltip-anchor=\"#tooltip_content00842\"><span class=\"kwb\">VIOR’LA</span> <span class=\"kwb\">SEPT</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. That unit may be chosen to shoot twice this phase, but all models in the unit must target the closest enemy unit each time they do so."
							}
						],
						"waha": {
							"id": "000000411",
							"name": "Strike Team",
							"link": "https://wahapedia.ruhttps://wahapedia.ru/wh40k9ed/factions/t-au-empire/Strike-Team",
							"faction_id": "TAU",
							"source_id": "000000028",
							"role": "Troops",
							"unit_composition": "This unit contains 5 Fire Warriors. It can include up to 5 additional Fire Warriors (<b>Power Rating +2</b>), or up to 7 additional Fire Warriors (<b>Power Rating +3</b>). A Fire Warrior Shas’ui can take the place of one Fire Warrior. Each model is armed with a pulse rifle and photon grenades. This unit may be accompanied by 2 <a href=\"https://wahapedia.ru/wh40k9ed/factions/t-au-empire/Tactical-Drones\">Tactical Drones</a> or 1 Tactical Drone and 1 MV36 Guardian Drone (<b>Power Rating +1 per two models</b>).",
							"transport": "",
							"power_points": "2",
							"priest": "",
							"psyker": "",
							"open_play_only": "false",
							"crusade_only": "false",
							"virtual": "false",
							"Cost": "",
							"cost_per_unit": "Нет",
							"field17": ""
						}
					},
					{
						"name": "Breacher Team",
						"slot": "Troops",
						"faction": [
							"T’au Empire",
							"<Sept>"
						],
						"keywords": [
							"guardian drone",
							"fly",
							"breacher team",
							"infantry",
							"drone"
						],
						"models": [{
								"name": "Fire Warrior",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Pulse Blaster",
										"amount": "9",
										"Range": "8\"",
										"Type": "Assault 2",
										"S": "6",
										"AP": "-2",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Pulse Blaster",
										"amount": "9",
										"Range": "14\"",
										"Type": "Assault 2",
										"S": "5",
										"AP": "-1",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Pulse Pistol",
										"amount": "9",
										"Range": "12\"",
										"Type": "Pistol 1",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "9",
								"statlines": {
									"M": "6",
									"WS": "5",
									"BS": "4",
									"S": "3",
									"T": "3",
									"W": "1",
									"A": "1",
									"Ld": "7",
									"Sv": "4"
								}
							},
							{
								"name": "Fire Warrior Shas'ui",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Pulse Blaster",
										"amount": "1",
										"Range": "8\"",
										"Type": "Assault 2",
										"S": "6",
										"AP": "-2",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Pulse Blaster",
										"amount": "1",
										"Range": "14\"",
										"Type": "Assault 2",
										"S": "5",
										"AP": "-1",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Pulse Pistol",
										"amount": "1",
										"Range": "12\"",
										"Type": "Pistol 1",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "6",
									"WS": "5",
									"BS": "4",
									"S": "3",
									"T": "3",
									"W": "1",
									"A": "2",
									"Ld": "8",
									"Sv": "4"
								}
							},
							{
								"name": "Marker Drone",
								"faction": "",
								"keywords": [],
								"weapons": [],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "10",
									"WS": "5",
									"BS": "5",
									"S": "3",
									"T": "4",
									"W": "1",
									"A": "1",
									"Ld": "6",
									"Sv": "4"
								}
							}
						],
						"rules": [{
							"name": "Set up Turret",
							"desc": "If this unit contains a Support Turret, that model is not set up until the unit performs the following action:\n\n'Deploy Turret (Action): In your Command phase, any number of BREACHER TEAM or STRIKE TEAM units from your army can start to perform this action. This action is completed at the end of your next Movement phase. When it is completed, if that unit contains a Support Turret model that is not on the battlefield and has not been destroyed, set that Support Turret model up on the battlefield in Unit Coherency with that unit.'",
							"subkeys": [
								"BREACHER",
								"TEAM",
								"STRIKE",
								"TEAM"
							],
							"targets": [
								"BREACHER TEAM",
								"STRIKE TEAM"
							],
							"phases": []
						}],
						"spells": [],
						"stratagems": [{
								"faction_id": "TAU",
								"name": "SUPPORT TURRET REPLACEMENT",
								"type": "T’au Empire Stratagem",
								"cp_cost": "1",
								"legend": "Field-logistics drones swoop down from above, bearing a replacement support turret in an underslung grav-harness.",
								"source_id": "",
								"description": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Pick a friendly <span class=\"tooltip03496\" data-tooltip-content=\"#tooltip_content03496\" data-tooltip-anchor=\"#tooltip_content03496\"><span class=\"kwb\">STRIKE</span> <span class=\"kwb\">TEAM</span></span> or <span class=\"tooltip03495\" data-tooltip-content=\"#tooltip_content03495\" data-tooltip-anchor=\"#tooltip_content03495\"><span class=\"kwb\">BREACHER</span> <span class=\"kwb\">TEAM</span></span> whose DS8 Tactical Support Turret has been destroyed. You may immediately set up a new DS8 Tactical Support Turret in <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Unit-Coherency\">unit coherency</a> with the unit as described in their <span class=\"redfont\">DS8 Tactical Support Turret</span> ability.",
								"id": "000002714012",
								"field9": "",
								"keys": [
									"strike team",
									"breacher team",
									"strike",
									"team",
									"breacher",
									"team",
									"ds8 tactical support turret"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Pick a friendly <span class=\"tooltip03496\" data-tooltip-content=\"#tooltip_content03496\" data-tooltip-anchor=\"#tooltip_content03496\"><span class=\"kwb\">STRIKE</span> <span class=\"kwb\">TEAM</span></span> or <span class=\"tooltip03495\" data-tooltip-content=\"#tooltip_content03495\" data-tooltip-anchor=\"#tooltip_content03495\"><span class=\"kwb\">BREACHER</span> <span class=\"kwb\">TEAM</span></span> whose DS8 Tactical Support Turret has been destroyed. You may immediately set up a new DS8 Tactical Support Turret in <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Unit-Coherency\">unit coherency</a> with the unit as described in their <span class=\"redfont\">DS8 Tactical Support Turret</span> ability."
							},
							{
								"faction_id": "TAU",
								"name": "PULSE ONSLAUGHT",
								"type": "T’au Empire Stratagem",
								"cp_cost": "1",
								"legend": "Where the situation calls for it, Breacher Teams can overcharge their pulse blasters.",
								"source_id": "000000116",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip03495\" data-tooltip-content=\"#tooltip_content03495\" data-tooltip-anchor=\"#tooltip_content03495\"><span class=\"kwb\">BREACHER</span> <span class=\"kwb\">TEAM</span></span> unit from your army is chosen to shoot with. Until the end of that phase, the Range characteristics of the ‘Close range’ and ‘Medium range’ profiles for pulse blasters models in that unit are equipped with are increased to 15\".",
								"id": "000004019006",
								"field9": "",
								"keys": [
									"breacher team",
									"breacher",
									"team"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip03495\" data-tooltip-content=\"#tooltip_content03495\" data-tooltip-anchor=\"#tooltip_content03495\"><span class=\"kwb\">BREACHER</span> <span class=\"kwb\">TEAM</span></span> unit from your army is chosen to shoot with. Until the end of that phase, the Range characteristics of the ‘Close range’ and ‘Medium range’ profiles for pulse blasters models in that unit are equipped with are increased to 15\"."
							},
							{
								"faction_id": "TAU",
								"name": "BREACH AND CLEAR!",
								"type": "T’au Empire Stratagem",
								"cp_cost": "1",
								"legend": "Breacher Teams excel at clearing enemy-held structures with blinding photon grenades and disciplined bursts of pulse fire.",
								"source_id": "",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, before a <span class=\"tooltip03495\" data-tooltip-content=\"#tooltip_content03495\" data-tooltip-anchor=\"#tooltip_content03495\"><span class=\"kwb\">BREACHER</span> <span class=\"kwb\">TEAM</span></span> from your army shoots at an enemy unit that is receiving the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefit of cover</a>. The Breacher Team <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Re-rolls\">re-rolls</a> failed <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound rolls</a> against the enemy unit until the end of this phase.",
								"id": "000002714016",
								"field9": "",
								"keys": [
									"breacher team",
									"breacher",
									"team"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, before a <span class=\"tooltip03495\" data-tooltip-content=\"#tooltip_content03495\" data-tooltip-anchor=\"#tooltip_content03495\"><span class=\"kwb\">BREACHER</span> <span class=\"kwb\">TEAM</span></span> from your army shoots at an enemy unit that is receiving the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefit of cover</a>. The Breacher Team <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Re-rolls\">re-rolls</a> failed <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound rolls</a> against the enemy unit until the end of this phase."
							},
							{
								"faction_id": "TAU",
								"name": "DANGER CLOSE",
								"type": "Farsight Enclaves Stratagem",
								"cp_cost": "1",
								"legend": "Fire Warrior teams of the Farsight Enclaves receive extensive training in close-quarters combat.",
								"source_id": "000000116",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip03495\" data-tooltip-content=\"#tooltip_content03495\" data-tooltip-anchor=\"#tooltip_content03495\"><span class=\"kwb\">BREACHER</span> <span class=\"kwb\">TEAM</span></span> or <span class=\"tooltip03496\" data-tooltip-content=\"#tooltip_content03496\" data-tooltip-anchor=\"#tooltip_content03496\"><span class=\"kwb\">STRIKE</span> <span class=\"kwb\">TEAM</span></span> unit from your army is chosen to shoot with. Until the end of that phase, when resolving an attack made with a ranged weapon by a model in that unit against an enemy unit within 12\", you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
								"id": "000004033004",
								"field9": "",
								"keys": [
									"breacher team",
									"strike team",
									"breacher",
									"team",
									"strike",
									"team"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip03495\" data-tooltip-content=\"#tooltip_content03495\" data-tooltip-anchor=\"#tooltip_content03495\"><span class=\"kwb\">BREACHER</span> <span class=\"kwb\">TEAM</span></span> or <span class=\"tooltip03496\" data-tooltip-content=\"#tooltip_content03496\" data-tooltip-anchor=\"#tooltip_content03496\"><span class=\"kwb\">STRIKE</span> <span class=\"kwb\">TEAM</span></span> unit from your army is chosen to shoot with. Until the end of that phase, when resolving an attack made with a ranged weapon by a model in that unit against an enemy unit within 12\", you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>."
							},
							{
								"faction_id": "TAU",
								"name": "HOT-BLOODED",
								"type": "Vior’la Stratagem",
								"cp_cost": "2",
								"legend": "The daredevil Fire Warriors of Vior’la stray dangerously close to enemy formations in order to maximise the killing power of their pulse volleys.",
								"source_id": "",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">shooting phase</a>. Pick a <span class=\"tooltip00842\" data-tooltip-content=\"#tooltip_content00842\" data-tooltip-anchor=\"#tooltip_content00842\"><span class=\"kwb\">VIOR’LA</span> <span class=\"kwb\">SEPT</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. That unit may be chosen to shoot twice this phase, but all models in the unit must target the closest enemy unit each time they do so.",
								"id": "000002714024",
								"field9": "",
								"keys": [
									"vior’la sept infantry",
									"vior’la",
									"sept",
									"infantry"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">shooting phase</a>. Pick a <span class=\"tooltip00842\" data-tooltip-content=\"#tooltip_content00842\" data-tooltip-anchor=\"#tooltip_content00842\"><span class=\"kwb\">VIOR’LA</span> <span class=\"kwb\">SEPT</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. That unit may be chosen to shoot twice this phase, but all models in the unit must target the closest enemy unit each time they do so."
							}
						],
						"waha": {
							"id": "000000412",
							"name": "Breacher Team",
							"link": "https://wahapedia.ruhttps://wahapedia.ru/wh40k9ed/factions/t-au-empire/Breacher-Team",
							"faction_id": "TAU",
							"source_id": "000000028",
							"role": "Troops",
							"unit_composition": "This unit contains 5 Fire Warriors. It can include up to 5 additional Fire Warriors (<b>Power Rating +2</b>). A Fire Warrior Shas’ui can take the place of one Fire Warrior. Each Fire Warrior and Fire Warrior Shas’ui is armed with a pulse blaster and photon grenades. This unit may be accompanied by 2 <a href=\"https://wahapedia.ru/wh40k9ed/factions/t-au-empire/Tactical-Drones\">Tactical Drones</a> or 1 Tactical Drone and 1 MV36 Guardian Drone (<b>Power Rating +1 per two models</b>).",
							"transport": "",
							"power_points": "2",
							"priest": "",
							"psyker": "",
							"open_play_only": "false",
							"crusade_only": "false",
							"virtual": "false",
							"Cost": "",
							"cost_per_unit": "Нет",
							"field17": ""
						}
					},
					{
						"name": "Strike Team",
						"slot": "Troops",
						"faction": [
							"<Sept>",
							"T’au Empire"
						],
						"keywords": [
							"infantry",
							"drone",
							"strike team",
							"guardian drone",
							"fly"
						],
						"models": [{
								"name": "Fire Warrior Shas'ui",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Pulse Pistol",
										"amount": "1",
										"Range": "12\"",
										"Type": "Pistol 1",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Pulse Rifle",
										"amount": "1",
										"Range": "36\"",
										"Type": "Rapid Fire 1",
										"S": "5",
										"AP": "-1",
										"D": "1",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "6",
									"WS": "5",
									"BS": "4",
									"S": "3",
									"T": "3",
									"W": "1",
									"A": "2",
									"Ld": "8",
									"Sv": "4"
								}
							},
							{
								"name": "Fire Warrior",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Pulse Rifle",
										"amount": "9",
										"Range": "36\"",
										"Type": "Rapid Fire 1",
										"S": "5",
										"AP": "-1",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Pulse Pistol",
										"amount": "9",
										"Range": "12\"",
										"Type": "Pistol 1",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "9",
								"statlines": {
									"M": "6",
									"WS": "5",
									"BS": "4",
									"S": "3",
									"T": "3",
									"W": "1",
									"A": "1",
									"Ld": "7",
									"Sv": "4"
								}
							},
							{
								"name": "Marker Drone",
								"faction": "",
								"keywords": [],
								"weapons": [],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "10",
									"WS": "5",
									"BS": "5",
									"S": "3",
									"T": "4",
									"W": "1",
									"A": "1",
									"Ld": "6",
									"Sv": "4"
								}
							}
						],
						"rules": [{
							"name": "Set up Turret",
							"desc": "If this unit contains a Support Turret, that model is not set up until the unit performs the following action:\n\n'Deploy Turret (Action): In your Command phase, any number of BREACHER TEAM or STRIKE TEAM units from your army can start to perform this action. This action is completed at the end of your next Movement phase. When it is completed, if that unit contains a Support Turret model that is not on the battlefield and has not been destroyed, set that Support Turret model up on the battlefield in Unit Coherency with that unit.'",
							"subkeys": [
								"BREACHER",
								"TEAM",
								"STRIKE",
								"TEAM"
							],
							"targets": [
								"BREACHER TEAM",
								"STRIKE TEAM"
							],
							"phases": []
						}],
						"spells": [],
						"stratagems": [{
								"faction_id": "TAU",
								"name": "DANGER CLOSE",
								"type": "Farsight Enclaves Stratagem",
								"cp_cost": "1",
								"legend": "Fire Warrior teams of the Farsight Enclaves receive extensive training in close-quarters combat.",
								"source_id": "000000116",
								"description": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip03495\" data-tooltip-content=\"#tooltip_content03495\" data-tooltip-anchor=\"#tooltip_content03495\"><span class=\"kwb\">BREACHER</span> <span class=\"kwb\">TEAM</span></span> or <span class=\"tooltip03496\" data-tooltip-content=\"#tooltip_content03496\" data-tooltip-anchor=\"#tooltip_content03496\"><span class=\"kwb\">STRIKE</span> <span class=\"kwb\">TEAM</span></span> unit from your army is chosen to shoot with. Until the end of that phase, when resolving an attack made with a ranged weapon by a model in that unit against an enemy unit within 12\", you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
								"id": "000004033004",
								"field9": "",
								"keys": [
									"breacher team",
									"strike team",
									"breacher",
									"team",
									"strike",
									"team"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem in your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip03495\" data-tooltip-content=\"#tooltip_content03495\" data-tooltip-anchor=\"#tooltip_content03495\"><span class=\"kwb\">BREACHER</span> <span class=\"kwb\">TEAM</span></span> or <span class=\"tooltip03496\" data-tooltip-content=\"#tooltip_content03496\" data-tooltip-anchor=\"#tooltip_content03496\"><span class=\"kwb\">STRIKE</span> <span class=\"kwb\">TEAM</span></span> unit from your army is chosen to shoot with. Until the end of that phase, when resolving an attack made with a ranged weapon by a model in that unit against an enemy unit within 12\", you can re-roll the <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>."
							},
							{
								"faction_id": "TAU",
								"name": "SUPPORT TURRET REPLACEMENT",
								"type": "T’au Empire Stratagem",
								"cp_cost": "1",
								"legend": "Field-logistics drones swoop down from above, bearing a replacement support turret in an underslung grav-harness.",
								"source_id": "",
								"description": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Pick a friendly <span class=\"tooltip03496\" data-tooltip-content=\"#tooltip_content03496\" data-tooltip-anchor=\"#tooltip_content03496\"><span class=\"kwb\">STRIKE</span> <span class=\"kwb\">TEAM</span></span> or <span class=\"tooltip03495\" data-tooltip-content=\"#tooltip_content03495\" data-tooltip-anchor=\"#tooltip_content03495\"><span class=\"kwb\">BREACHER</span> <span class=\"kwb\">TEAM</span></span> whose DS8 Tactical Support Turret has been destroyed. You may immediately set up a new DS8 Tactical Support Turret in <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Unit-Coherency\">unit coherency</a> with the unit as described in their <span class=\"redfont\">DS8 Tactical Support Turret</span> ability.",
								"id": "000002714012",
								"field9": "",
								"keys": [
									"strike team",
									"breacher team",
									"strike",
									"team",
									"breacher",
									"team",
									"ds8 tactical support turret"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem at the end of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Pick a friendly <span class=\"tooltip03496\" data-tooltip-content=\"#tooltip_content03496\" data-tooltip-anchor=\"#tooltip_content03496\"><span class=\"kwb\">STRIKE</span> <span class=\"kwb\">TEAM</span></span> or <span class=\"tooltip03495\" data-tooltip-content=\"#tooltip_content03495\" data-tooltip-anchor=\"#tooltip_content03495\"><span class=\"kwb\">BREACHER</span> <span class=\"kwb\">TEAM</span></span> whose DS8 Tactical Support Turret has been destroyed. You may immediately set up a new DS8 Tactical Support Turret in <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#Unit-Coherency\">unit coherency</a> with the unit as described in their <span class=\"redfont\">DS8 Tactical Support Turret</span> ability."
							},
							{
								"faction_id": "TAU",
								"name": "HOT-BLOODED",
								"type": "Vior’la Stratagem",
								"cp_cost": "2",
								"legend": "The daredevil Fire Warriors of Vior’la stray dangerously close to enemy formations in order to maximise the killing power of their pulse volleys.",
								"source_id": "",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">shooting phase</a>. Pick a <span class=\"tooltip00842\" data-tooltip-content=\"#tooltip_content00842\" data-tooltip-anchor=\"#tooltip_content00842\"><span class=\"kwb\">VIOR’LA</span> <span class=\"kwb\">SEPT</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. That unit may be chosen to shoot twice this phase, but all models in the unit must target the closest enemy unit each time they do so.",
								"id": "000002714024",
								"field9": "",
								"keys": [
									"vior’la sept infantry",
									"vior’la",
									"sept",
									"infantry"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">shooting phase</a>. Pick a <span class=\"tooltip00842\" data-tooltip-content=\"#tooltip_content00842\" data-tooltip-anchor=\"#tooltip_content00842\"><span class=\"kwb\">VIOR’LA</span> <span class=\"kwb\">SEPT</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. That unit may be chosen to shoot twice this phase, but all models in the unit must target the closest enemy unit each time they do so."
							}
						],
						"waha": {
							"id": "000000411",
							"name": "Strike Team",
							"link": "https://wahapedia.ruhttps://wahapedia.ru/wh40k9ed/factions/t-au-empire/Strike-Team",
							"faction_id": "TAU",
							"source_id": "000000028",
							"role": "Troops",
							"unit_composition": "This unit contains 5 Fire Warriors. It can include up to 5 additional Fire Warriors (<b>Power Rating +2</b>), or up to 7 additional Fire Warriors (<b>Power Rating +3</b>). A Fire Warrior Shas’ui can take the place of one Fire Warrior. Each model is armed with a pulse rifle and photon grenades. This unit may be accompanied by 2 <a href=\"https://wahapedia.ru/wh40k9ed/factions/t-au-empire/Tactical-Drones\">Tactical Drones</a> or 1 Tactical Drone and 1 MV36 Guardian Drone (<b>Power Rating +1 per two models</b>).",
							"transport": "",
							"power_points": "2",
							"priest": "",
							"psyker": "",
							"open_play_only": "false",
							"crusade_only": "false",
							"virtual": "false",
							"Cost": "",
							"cost_per_unit": "Нет",
							"field17": ""
						}
					},
					{
						"name": "Crisis Battlesuits",
						"slot": "Elites",
						"faction": "T'au Empire",
						"keywords": [
							"battlesuit",
							"fly",
							"jet pack",
							"infantry",
							"core",
							"crisis"
						],
						"models": [{
								"name": "Crisis Shas'vre",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Burst Cannon",
										"amount": "1",
										"Range": "18\"",
										"Type": "Assault 6",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Plasma Rifle",
										"amount": "1",
										"Range": "30\"",
										"Type": "Assault 1",
										"S": "8",
										"AP": "-4",
										"D": "3",
										"Abilities": "-"
									},
									{
										"name": "Fusion Blaster",
										"amount": "1",
										"Range": "18\"",
										"Type": "Assault 1",
										"S": "8",
										"AP": "-4",
										"D": "D6",
										"Abilities": "Each time an attack made with this weapon targets a unit within half range, that attack has a Damage characteristic of D6+2."
									}
								],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "10",
									"WS": "5",
									"BS": "4",
									"S": "5",
									"T": "5",
									"W": "4",
									"A": "4",
									"Ld": "9",
									"Sv": "3"
								}
							},
							{
								"name": "Crisis Shas'ui",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Burst Cannon",
										"amount": "1",
										"Range": "18\"",
										"Type": "Assault 6",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Plasma Rifle",
										"amount": "1",
										"Range": "30\"",
										"Type": "Assault 1",
										"S": "8",
										"AP": "-4",
										"D": "3",
										"Abilities": "-"
									},
									{
										"name": "Fusion Blaster",
										"amount": "1",
										"Range": "18\"",
										"Type": "Assault 1",
										"S": "8",
										"AP": "-4",
										"D": "D6",
										"Abilities": "Each time an attack made with this weapon targets a unit within half range, that attack has a Damage characteristic of D6+2."
									}
								],
								"wargear": [],
								"amount": 2,
								"statlines": {
									"M": "10",
									"WS": "5",
									"BS": "4",
									"S": "5",
									"T": "5",
									"W": "4",
									"A": "3",
									"Ld": "8",
									"Sv": "3"
								}
							},
							{
								"name": "Shield Drone",
								"faction": "",
								"keywords": [],
								"weapons": [],
								"wargear": [],
								"amount": "2",
								"statlines": {
									"M": "10",
									"WS": "5",
									"BS": "5",
									"S": "3",
									"T": "4",
									"W": "2",
									"A": "1",
									"Ld": "6",
									"Sv": "4"
								}
							}
						],
						"rules": [{
								"name": "Battlesuits",
								"desc": "BATTLESUIT models in this unit can make attacks with ranged weapons even when their unit is within Engagement Range of enemy units, but they can only make such attacks against enemy units that they are within Engagement Range of. In such circumstances, these models can target an enemy unit even if other friendly units are within Engagement Range of the same enemy unit.\n\nNote that if a BATTLESUIT model has more than one ranged weapon, you can still choose to target units that are not within Engagement Range of its unit, but it will only be able to make the attacks with that weapon if all enemy units within Engagement Range of its unit have been destroyed when you come to resolve these attacks. In addition, when a BATTLESUIT model shoots a Heavy weapon, subtract 1 from the hit rolls when resolving that weapon's attacks while any enemy units are within Engagement Range of that model's unit.",
								"subkeys": [
									"BATTLESUIT",
									"BATTLESUIT",
									"BATTLESUIT"
								],
								"targets": [
									"BATTLESUIT",
									"BATTLESUIT",
									"BATTLESUIT"
								],
								"phases": []
							},
							{
								"name": "Manta Strike",
								"desc": "During deployment, you can set up this unit as a Manta hold instead of setting it up on the battlefield. If you do, then in the Reinforcements step of one of your Movement phases you can set up this unit anywhere on the battlefield that is more than 9\" away from any enemy models.",
								"subkeys": null,
								"targets": null,
								"phases": [
									"Movement"
								]
							}
						],
						"spells": [],
						"stratagems": []
					},
					{
						"name": "Crisis Battlesuits",
						"slot": "Elites",
						"faction": "T'au Empire",
						"keywords": [
							"battlesuit",
							"fly",
							"jet pack",
							"infantry",
							"core",
							"crisis"
						],
						"models": [{
								"name": "Crisis Shas'vre",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Burst Cannon",
										"amount": "1",
										"Range": "18\"",
										"Type": "Assault 6",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Plasma Rifle",
										"amount": "1",
										"Range": "30\"",
										"Type": "Assault 1",
										"S": "8",
										"AP": "-4",
										"D": "3",
										"Abilities": "-"
									},
									{
										"name": "Fusion Blaster",
										"amount": "1",
										"Range": "18\"",
										"Type": "Assault 1",
										"S": "8",
										"AP": "-4",
										"D": "D6",
										"Abilities": "Each time an attack made with this weapon targets a unit within half range, that attack has a Damage characteristic of D6+2."
									}
								],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "10",
									"WS": "5",
									"BS": "4",
									"S": "5",
									"T": "5",
									"W": "4",
									"A": "4",
									"Ld": "9",
									"Sv": "3"
								}
							},
							{
								"name": "Crisis Shas'ui",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Burst Cannon",
										"amount": "1",
										"Range": "18\"",
										"Type": "Assault 6",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Plasma Rifle",
										"amount": "1",
										"Range": "30\"",
										"Type": "Assault 1",
										"S": "8",
										"AP": "-4",
										"D": "3",
										"Abilities": "-"
									},
									{
										"name": "Fusion Blaster",
										"amount": "1",
										"Range": "18\"",
										"Type": "Assault 1",
										"S": "8",
										"AP": "-4",
										"D": "D6",
										"Abilities": "Each time an attack made with this weapon targets a unit within half range, that attack has a Damage characteristic of D6+2."
									}
								],
								"wargear": [],
								"amount": 2,
								"statlines": {
									"M": "10",
									"WS": "5",
									"BS": "4",
									"S": "5",
									"T": "5",
									"W": "4",
									"A": "3",
									"Ld": "8",
									"Sv": "3"
								}
							},
							{
								"name": "Shield Drone",
								"faction": "",
								"keywords": [],
								"weapons": [],
								"wargear": [],
								"amount": "2",
								"statlines": {
									"M": "10",
									"WS": "5",
									"BS": "5",
									"S": "3",
									"T": "4",
									"W": "2",
									"A": "1",
									"Ld": "6",
									"Sv": "4"
								}
							}
						],
						"rules": [{
								"name": "Battlesuits",
								"desc": "BATTLESUIT models in this unit can make attacks with ranged weapons even when their unit is within Engagement Range of enemy units, but they can only make such attacks against enemy units that they are within Engagement Range of. In such circumstances, these models can target an enemy unit even if other friendly units are within Engagement Range of the same enemy unit.\n\nNote that if a BATTLESUIT model has more than one ranged weapon, you can still choose to target units that are not within Engagement Range of its unit, but it will only be able to make the attacks with that weapon if all enemy units within Engagement Range of its unit have been destroyed when you come to resolve these attacks. In addition, when a BATTLESUIT model shoots a Heavy weapon, subtract 1 from the hit rolls when resolving that weapon's attacks while any enemy units are within Engagement Range of that model's unit.",
								"subkeys": [
									"BATTLESUIT",
									"BATTLESUIT",
									"BATTLESUIT"
								],
								"targets": [
									"BATTLESUIT",
									"BATTLESUIT",
									"BATTLESUIT"
								],
								"phases": []
							},
							{
								"name": "Manta Strike",
								"desc": "During deployment, you can set up this unit as a Manta hold instead of setting it up on the battlefield. If you do, then in the Reinforcements step of one of your Movement phases you can set up this unit anywhere on the battlefield that is more than 9\" away from any enemy models.",
								"subkeys": null,
								"targets": null,
								"phases": [
									"Movement"
								]
							}
						],
						"spells": [],
						"stratagems": []
					},
					{
						"name": "Pathfinder Team",
						"slot": "Fast Attack",
						"faction": [
							"T’au Empire",
							"<Sept>"
						],
						"keywords": [
							"support drones",
							"fly",
							"fly",
							"recon drone",
							"infantry",
							"drone",
							"drone",
							"pathfinder team"
						],
						"models": [{
								"name": "Pathfinder Shas'ui",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Pulse Pistol",
										"amount": "1",
										"Range": "12\"",
										"Type": "Pistol 1",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Pulse Carbine",
										"amount": "1",
										"Range": "24\"",
										"Type": "Assault 2",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "7",
									"WS": "5",
									"BS": "4",
									"S": "3",
									"T": "3",
									"W": "1",
									"A": "2",
									"Ld": "8",
									"Sv": "5"
								}
							},
							{
								"name": "Pathfinder",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Pulse Carbine",
										"amount": "5",
										"Range": "24\"",
										"Type": "Assault 2",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Pulse Pistol",
										"amount": "5",
										"Range": "12\"",
										"Type": "Pistol 1",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "5",
								"statlines": {
									"M": "7",
									"WS": "5",
									"BS": "4",
									"S": "3",
									"T": "3",
									"W": "1",
									"A": "1",
									"Ld": "7",
									"Sv": "5"
								}
							},
							{
								"name": "Grav-inhibitor Drone",
								"faction": "",
								"keywords": [],
								"weapons": [],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "10",
									"WS": "5",
									"BS": "5",
									"S": "3",
									"T": "4",
									"W": "1",
									"A": "1",
									"Ld": "6",
									"Sv": "4"
								}
							},
							{
								"name": "Pathfinder",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Rail Rifle",
										"amount": "3",
										"Range": "30\"",
										"Type": "Heavy 1",
										"S": "8",
										"AP": "-4",
										"D": "3",
										"Abilities": "Each time a successful wound roll is made for an attack made with this weapon, the target suffers 1 mortal wound in addition to any other damage."
									},
									{
										"name": "Pulse Pistol",
										"amount": "3",
										"Range": "12\"",
										"Type": "Pistol 1",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "3",
								"statlines": {
									"M": "7",
									"WS": "5",
									"BS": "4",
									"S": "3",
									"T": "3",
									"W": "1",
									"A": "1",
									"Ld": "7",
									"Sv": "5"
								}
							},
							{
								"name": "Pathfinder",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Semi-automatic Grenade Launcher",
										"amount": "1",
										"Range": "20\"",
										"Type": "Assault 1",
										"S": "3",
										"AP": "0",
										"D": "1",
										"Abilities": "Each time a successful hit is made for an attack made with this weapon, if the target is a VEHICLE unit (excluding TITANIC units) whose characteristics change as it loses wounds, then, until the start of your next Shooting phase, it halves the number of wounds it has remaining when determining which characteristics to use."
									},
									{
										"name": "Semi-automatic Grenade Launcher",
										"amount": "1",
										"Range": "20\"",
										"Type": "Assault 1",
										"S": "6",
										"AP": "-1",
										"D": "3",
										"Abilities": "-"
									},
									{
										"name": "Pulse Carbine",
										"amount": "1",
										"Range": "24\"",
										"Type": "Assault 2",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Pulse Pistol",
										"amount": "1",
										"Range": "12\"",
										"Type": "Pistol 1",
										"S": "5",
										"AP": "0",
										"D": "1",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "7",
									"WS": "5",
									"BS": "4",
									"S": "3",
									"T": "3",
									"W": "1",
									"A": "1",
									"Ld": "7",
									"Sv": "5"
								}
							}
						],
						"rules": [{
								"name": "Vanguard",
								"desc": "At the start of the first battle round, this model can make a Normal Move of up to 7\". They cannot end this move within 9\" of any enemy models.",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Target Uploaded",
								"desc": "This unit can start the Fire Markerlights action at the end of your Movement phase, instead of the start.",
								"subkeys": null,
								"targets": null,
								"phases": []
							},
							{
								"name": "Gravity Wave Projector",
								"desc": "Subtract 2 from charge rolls made for any units that declare a charge against this unit.",
								"subkeys": null,
								"targets": null,
								"phases": []
							}
						],
						"spells": [],
						"stratagems": [{
								"faction_id": "TAU",
								"name": "HOT-BLOODED",
								"type": "Vior’la Stratagem",
								"cp_cost": "2",
								"legend": "The daredevil Fire Warriors of Vior’la stray dangerously close to enemy formations in order to maximise the killing power of their pulse volleys.",
								"source_id": "",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">shooting phase</a>. Pick a <span class=\"tooltip00842\" data-tooltip-content=\"#tooltip_content00842\" data-tooltip-anchor=\"#tooltip_content00842\"><span class=\"kwb\">VIOR’LA</span> <span class=\"kwb\">SEPT</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. That unit may be chosen to shoot twice this phase, but all models in the unit must target the closest enemy unit each time they do so.",
								"id": "000002714024",
								"field9": "",
								"keys": [
									"vior’la sept infantry",
									"vior’la",
									"sept",
									"infantry"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">shooting phase</a>. Pick a <span class=\"tooltip00842\" data-tooltip-content=\"#tooltip_content00842\" data-tooltip-anchor=\"#tooltip_content00842\"><span class=\"kwb\">VIOR’LA</span> <span class=\"kwb\">SEPT</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. That unit may be chosen to shoot twice this phase, but all models in the unit must target the closest enemy unit each time they do so."
							},
							{
								"faction_id": "TAU",
								"name": "POSITIONAL RELAY",
								"type": "T’au Empire Stratagem",
								"cp_cost": "2",
								"legend": "Zeroing in on the pulse flares of a Recon Drone, T’au reinforcements strike their target drop zone with unerring accuracy.",
								"source_id": "",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Pick a <SEPT> <a href=\"https://wahapedia.ru/wh40k9ed/factions/t-au-empire/Pathfinder-Team\">MB3 Recon Drone</a> from your army. One of your <span class=\"tooltip00832\" data-tooltip-content=\"#tooltip_content00832\" data-tooltip-anchor=\"#tooltip_content00832\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">S</span>EPT&gt;</span></span> units that has been set up in a Manta hold can perform a low-altitude drop instead of a Manta strike. Set up the unit wholly within 6\" of the MB3 Recon Drone.",
								"id": "000002714020",
								"field9": "",
								"keys": [
									"&lt;sept&gt;",
									"s"
								],
								"activate": [
									"Movement phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Pick a <SEPT> <a href=\"https://wahapedia.ru/wh40k9ed/factions/t-au-empire/Pathfinder-Team\">MB3 Recon Drone</a> from your army. One of your <span class=\"tooltip00832\" data-tooltip-content=\"#tooltip_content00832\" data-tooltip-anchor=\"#tooltip_content00832\"><span class=\"kwb2\">&lt;<span class=\"kwb3\">S</span>EPT&gt;</span></span> units that has been set up in a Manta hold can perform a low-altitude drop instead of a Manta strike. Set up the unit wholly within 6\" of the MB3 Recon Drone."
							},
							{
								"faction_id": "TAU",
								"name": "RECON SWEEP",
								"type": "T’au Empire Stratagem",
								"cp_cost": "1",
								"legend": "Pathfinders are the eyes and ears of the T’au war machine, always operating ten steps ahead of the foe.",
								"source_id": "",
								"description": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select a <span class=\"tooltip02868\" data-tooltip-content=\"#tooltip_content02868\" data-tooltip-anchor=\"#tooltip_content02868\"><span class=\"kwb\">PATHFINDER</span> <span class=\"kwb\">TEAM</span></span> from your army. That unit can immediately move 2D6\" but cannot shoot or charge this turn.",
								"id": "000002714017",
								"field9": "",
								"keys": [
									"pathfinder team",
									"pathfinder",
									"team"
								],
								"activate": [
									"Shooting phase"
								],
								"descText": "Use this Stratagem at the start of your <a href=\"https://wahapedia.ru/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select a <span class=\"tooltip02868\" data-tooltip-content=\"#tooltip_content02868\" data-tooltip-anchor=\"#tooltip_content02868\"><span class=\"kwb\">PATHFINDER</span> <span class=\"kwb\">TEAM</span></span> from your army. That unit can immediately move 2D6\" but cannot shoot or charge this turn."
							}
						],
						"waha": {
							"id": "000000422",
							"name": "Pathfinder Team",
							"link": "https://wahapedia.ruhttps://wahapedia.ru/wh40k9ed/factions/t-au-empire/Pathfinder-Team",
							"faction_id": "TAU",
							"source_id": "000000028",
							"role": "Fast Attack",
							"unit_composition": "This unit contains 5 Pathfinders. It can include up to 5 additional Pathfinders (<b>Power Rating +2</b>). A Pathfinder Shas’ui can take the place of one Pathfinder. Each model is armed with a markerlight, pulse carbine and photon grenades. This unit may be accompanied by up to 2 <a href=\"https://wahapedia.ru/wh40k9ed/factions/t-au-empire/Tactical-Drones\">Tactical Drones</a> (<b>Power Rating +1 per two models</b>) and/or an MB3 Recon Drone (<b>Power Rating +1 per model</b>) equipped with a burst cannon and up to 2 Support Drones: 1 MV31 Pulse Accelerator Drone and/or 1 MV33 Grav-inhibitor Drone (<b>Power Rating +1 per two models</b>).",
							"transport": "",
							"power_points": "3",
							"priest": "",
							"psyker": "",
							"open_play_only": "false",
							"crusade_only": "false",
							"virtual": "false",
							"Cost": "",
							"cost_per_unit": "Нет",
							"field17": ""
						}
					},
					{
						"name": "Broadside Battlesuits",
						"slot": "Heavy Support",
						"faction": "T'au Empire",
						"keywords": [
							"battlesuit",
							"broadside battlesuits",
							"infantry",
							"core"
						],
						"models": [{
								"name": "Broadside Shas'vre",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Crushing Bulk",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "+1",
										"AP": "-1",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "Twin Smart Missile System",
										"amount": "1",
										"Range": "30\"",
										"Type": "Heavy 8",
										"S": "5",
										"AP": "-1",
										"D": "1",
										"Abilities": "This weapon can target units that are not visible to the bearer. Each time an attack is made with this weapon, the target unit does not receive the benefits of Light Cover against that attack."
									},
									{
										"name": "2x High-yield Missile Pod",
										"amount": "1",
										"Range": "30\"",
										"Type": "Heavy 4",
										"S": "7",
										"AP": "-2",
										"D": "2",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "1",
								"statlines": {
									"M": "5",
									"WS": "5",
									"BS": "4",
									"S": "5",
									"T": "5",
									"W": "8",
									"A": "4",
									"Ld": "9",
									"Sv": "2"
								}
							},
							{
								"name": "Broadside Shas'ui",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Crushing Bulk",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "+1",
										"AP": "-1",
										"D": "1",
										"Abilities": "-"
									},
									{
										"name": "2x High-yield Missile Pod",
										"amount": "1",
										"Range": "30\"",
										"Type": "Heavy 4",
										"S": "7",
										"AP": "-2",
										"D": "2",
										"Abilities": "-"
									},
									{
										"name": "Twin Smart Missile System",
										"amount": "1",
										"Range": "30\"",
										"Type": "Heavy 8",
										"S": "5",
										"AP": "-1",
										"D": "1",
										"Abilities": "This weapon can target units that are not visible to the bearer. Each time an attack is made with this weapon, the target unit does not receive the benefits of Light Cover against that attack."
									}
								],
								"wargear": [],
								"amount": 2,
								"statlines": {
									"M": "5",
									"WS": "5",
									"BS": "4",
									"S": "5",
									"T": "5",
									"W": "8",
									"A": "3",
									"Ld": "8",
									"Sv": "2"
								}
							},
							{
								"name": "Shield Drone",
								"faction": "",
								"keywords": [],
								"weapons": [],
								"wargear": [],
								"amount": "6",
								"statlines": {
									"M": "10",
									"WS": "5",
									"BS": "5",
									"S": "3",
									"T": "4",
									"W": "2",
									"A": "1",
									"Ld": "6",
									"Sv": "4"
								}
							}
						],
						"rules": [{
							"name": "Battlesuits",
							"desc": "BATTLESUIT models in this unit can make attacks with ranged weapons even when their unit is within Engagement Range of enemy units, but they can only make such attacks against enemy units that they are within Engagement Range of. In such circumstances, these models can target an enemy unit even if other friendly units are within Engagement Range of the same enemy unit.\n\nNote that if a BATTLESUIT model has more than one ranged weapon, you can still choose to target units that are not within Engagement Range of its unit, but it will only be able to make the attacks with that weapon if all enemy units within Engagement Range of its unit have been destroyed when you come to resolve these attacks. In addition, when a BATTLESUIT model shoots a Heavy weapon, subtract 1 from the hit rolls when resolving that weapon's attacks while any enemy units are within Engagement Range of that model's unit.",
							"subkeys": [
								"BATTLESUIT",
								"BATTLESUIT",
								"BATTLESUIT"
							],
							"targets": [
								"BATTLESUIT",
								"BATTLESUIT",
								"BATTLESUIT"
							],
							"phases": []
						}],
						"spells": [],
						"stratagems": []
					},
					{
						"name": "Riptide Battlesuit",
						"slot": "Heavy Support",
						"faction": "T'au Empire",
						"keywords": [
							"fly",
							"battlesuit",
							"jet pack",
							"riptide battlesuit",
							"vehicle"
						],
						"models": [{
								"name": "Shielded Missile Drone",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Riptide Fists",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "+1",
										"AP": "-2",
										"D": "2",
										"Abilities": "-"
									},
									{
										"name": "Heavy Burst Cannon",
										"amount": "1",
										"Range": "36\"",
										"Type": "Heavy 12",
										"S": "6",
										"AP": "-2",
										"D": "2",
										"Abilities": "-"
									},
									{
										"name": "2x Plasma Rifle",
										"amount": "1",
										"Range": "30\"",
										"Type": "Assault 1",
										"S": "8",
										"AP": "-4",
										"D": "3",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "2",
								"statlines": {
									"M": "10",
									"WS": "5",
									"BS": "5",
									"S": "3",
									"T": "4",
									"W": "2",
									"A": "1",
									"Ld": "6",
									"Sv": "4"
								}
							},
							{
								"name": "Riptide Battlesuit [1] (7-14+ Wounds Remaining)",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Riptide Fists",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "+1",
										"AP": "-2",
										"D": "2",
										"Abilities": "-"
									},
									{
										"name": "Heavy Burst Cannon",
										"amount": "1",
										"Range": "36\"",
										"Type": "Heavy 12",
										"S": "6",
										"AP": "-2",
										"D": "2",
										"Abilities": "-"
									},
									{
										"name": "2x Plasma Rifle",
										"amount": "1",
										"Range": "30\"",
										"Type": "Assault 1",
										"S": "8",
										"AP": "-4",
										"D": "3",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"statlines": {
									"M": "12",
									"WS": "5",
									"BS": "4",
									"S": "6",
									"T": "7",
									"W": "14",
									"A": "6",
									"Ld": "9",
									"Sv": "2"
								}
							},
							{
								"name": "Riptide Battlesuit [2] (4-6 Wounds Remaining)",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Riptide Fists",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "+1",
										"AP": "-2",
										"D": "2",
										"Abilities": "-"
									},
									{
										"name": "Heavy Burst Cannon",
										"amount": "1",
										"Range": "36\"",
										"Type": "Heavy 12",
										"S": "6",
										"AP": "-2",
										"D": "2",
										"Abilities": "-"
									},
									{
										"name": "2x Plasma Rifle",
										"amount": "1",
										"Range": "30\"",
										"Type": "Assault 1",
										"S": "8",
										"AP": "-4",
										"D": "3",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"statlines": {
									"M": "8",
									"WS": "5",
									"BS": "5",
									"S": "6",
									"T": "7",
									"W": "*",
									"A": "5",
									"Ld": "9",
									"Sv": "2"
								}
							},
							{
								"name": "Riptide Battlesuit [3] (1-3 Wounds Remaining)",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Riptide Fists",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "+1",
										"AP": "-2",
										"D": "2",
										"Abilities": "-"
									},
									{
										"name": "Heavy Burst Cannon",
										"amount": "1",
										"Range": "36\"",
										"Type": "Heavy 12",
										"S": "6",
										"AP": "-2",
										"D": "2",
										"Abilities": "-"
									},
									{
										"name": "2x Plasma Rifle",
										"amount": "1",
										"Range": "30\"",
										"Type": "Assault 1",
										"S": "8",
										"AP": "-4",
										"D": "3",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"statlines": {
									"M": "4",
									"WS": "5",
									"BS": "6",
									"S": "6",
									"T": "7",
									"W": "*",
									"A": "4",
									"Ld": "9",
									"Sv": "2"
								}
							}
						],
						"rules": [{
								"name": "Battlesuits",
								"desc": "BATTLESUIT models in this unit can make attacks with ranged weapons even when their unit is within Engagement Range of enemy units, but they can only make such attacks against enemy units that they are within Engagement Range of. In such circumstances, these models can target an enemy unit even if other friendly units are within Engagement Range of the same enemy unit.\n\nNote that if a BATTLESUIT model has more than one ranged weapon, you can still choose to target units that are not within Engagement Range of its unit, but it will only be able to make the attacks with that weapon if all enemy units within Engagement Range of its unit have been destroyed when you come to resolve these attacks. In addition, when a BATTLESUIT model shoots a Heavy weapon, subtract 1 from the hit rolls when resolving that weapon's attacks while any enemy units are within Engagement Range of that model's unit.",
								"subkeys": [
									"BATTLESUIT",
									"BATTLESUIT",
									"BATTLESUIT"
								],
								"targets": [
									"BATTLESUIT",
									"BATTLESUIT",
									"BATTLESUIT"
								],
								"phases": []
							},
							{
								"name": "Riptide Shield Generator",
								"desc": "This unit's RIPTIDE model has a 4+ invulnerable save.",
								"subkeys": [
									"RIPTIDE"
								],
								"targets": [
									"RIPTIDE"
								],
								"phases": []
							},
							{
								"name": "Explodes (Riptide)",
								"desc": "When this unit's RIPTIDE model is destroyed, roll one D6 before removing it from play. On a 6 it explodes, and each unit within 6\" suffers D3 mortal wounds.",
								"subkeys": [
									"RIPTIDE"
								],
								"targets": [
									"RIPTIDE"
								],
								"phases": []
							},
							{
								"name": "Nova Reactor (Riptide)",
								"desc": "In your Command phase, this unit's RIPTIDE model can use its Nova Reactor. If it does, roll 2D6, if the result is greater than the remaining wounds of this RIPTIDE model, its Nova Reactor is burned out and this ability cannot be used again this battle, otherwise, you can select one of the following reactor abilities:\n\n- Nova Shield: Until the start of your next Command phase, each time this model would lose a wound, roll one D6: on a 5+, that wound is not lost.\n- Boost: In your next Charge phase, this unit can make a Normal Move of up to 2D6\". If it does, until the end of the phase, you cannot declare a charge with this unit.\n- Nova Charge: Until the start of your next COmmand phase, if this model is equipped with a heavy burst cannon, that weapon has a Type characteristic of Heavy 16, otherwise, both profiles of that model's ion accelerator have a type characteristic of Heavy 8.",
								"subkeys": [
									"RIPTIDE",
									"RIPTIDE",
									"CO"
								],
								"targets": [
									"RIPTIDE",
									"RIPTIDE"
								],
								"phases": []
							},
							{
								"name": "Early Warning Override",
								"desc": "- Each time the bearer fires Overwatch, it scores hits on unmodified hit rolls of 5+, instead of 6.\n- Each time you use the Fire Overwatch Stratagem, if the bearer is on the battlefield and its unit is selected to fire Overwatch, reduce the CP cost of that Stratagem by 1CP (to a minimum of 0CP). Note that the CP cost is only reduced by 1CP for that use of the Stratagem, any future usages of it cost the normal amount of CPs.",
								"subkeys": [
									"CP",
									"CP",
									"CP"
								],
								"targets": null,
								"phases": []
							},
							{
								"name": "Counterfire Defence System",
								"desc": "The bearer gains the COUNTERFIRE DEFENCE SYSTEM keyword.",
								"subkeys": [
									"COUNTERFIRE",
									"DEFENCE",
									"SYSTEM"
								],
								"targets": [
									"COUNTERFIRE DEFENCE",
									"SYSTEM"
								],
								"phases": []
							},
							{
								"name": "Target Lock",
								"desc": "Each time the bearer makes a ranged attack, the target does not receive the benefits of Light Cover against that attack.",
								"subkeys": null,
								"targets": null,
								"phases": []
							}
						],
						"spells": [],
						"stratagems": []
					},
					{
						"name": "Riptide Battlesuit",
						"slot": "Heavy Support",
						"faction": "T'au Empire",
						"keywords": [
							"fly",
							"battlesuit",
							"jet pack",
							"riptide battlesuit",
							"vehicle"
						],
						"models": [{
								"name": "Shielded Missile Drone",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Riptide Fists",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "+1",
										"AP": "-2",
										"D": "2",
										"Abilities": "-"
									},
									{
										"name": "2x Plasma Rifle",
										"amount": "1",
										"Range": "30\"",
										"Type": "Assault 1",
										"S": "8",
										"AP": "-4",
										"D": "3",
										"Abilities": "-"
									},
									{
										"name": "Ion Accelerator",
										"amount": "1",
										"Range": "72\"",
										"Type": "Heavy 6",
										"S": "8",
										"AP": "-3",
										"D": "4",
										"Abilities": "Each time an unmodified hit roll of 1 is made for an attack with this weapon profile, the bearer's unit suffers 1 mortal wound after shooting with this weapon."
									},
									{
										"name": "Ion Accelerator",
										"amount": "1",
										"Range": "72\"",
										"Type": "Heavy 6",
										"S": "7",
										"AP": "-3",
										"D": "3",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"amount": "2",
								"statlines": {
									"M": "10",
									"WS": "5",
									"BS": "5",
									"S": "3",
									"T": "4",
									"W": "2",
									"A": "1",
									"Ld": "6",
									"Sv": "4"
								}
							},
							{
								"name": "Riptide Battlesuit [1] (7-14+ Wounds Remaining)",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Riptide Fists",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "+1",
										"AP": "-2",
										"D": "2",
										"Abilities": "-"
									},
									{
										"name": "2x Plasma Rifle",
										"amount": "1",
										"Range": "30\"",
										"Type": "Assault 1",
										"S": "8",
										"AP": "-4",
										"D": "3",
										"Abilities": "-"
									},
									{
										"name": "Ion Accelerator",
										"amount": "1",
										"Range": "72\"",
										"Type": "Heavy 6",
										"S": "8",
										"AP": "-3",
										"D": "4",
										"Abilities": "Each time an unmodified hit roll of 1 is made for an attack with this weapon profile, the bearer's unit suffers 1 mortal wound after shooting with this weapon."
									},
									{
										"name": "Ion Accelerator",
										"amount": "1",
										"Range": "72\"",
										"Type": "Heavy 6",
										"S": "7",
										"AP": "-3",
										"D": "3",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"statlines": {
									"M": "12",
									"WS": "5",
									"BS": "4",
									"S": "6",
									"T": "7",
									"W": "14",
									"A": "6",
									"Ld": "9",
									"Sv": "2"
								}
							},
							{
								"name": "Riptide Battlesuit [2] (4-6 Wounds Remaining)",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Riptide Fists",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "+1",
										"AP": "-2",
										"D": "2",
										"Abilities": "-"
									},
									{
										"name": "2x Plasma Rifle",
										"amount": "1",
										"Range": "30\"",
										"Type": "Assault 1",
										"S": "8",
										"AP": "-4",
										"D": "3",
										"Abilities": "-"
									},
									{
										"name": "Ion Accelerator",
										"amount": "1",
										"Range": "72\"",
										"Type": "Heavy 6",
										"S": "8",
										"AP": "-3",
										"D": "4",
										"Abilities": "Each time an unmodified hit roll of 1 is made for an attack with this weapon profile, the bearer's unit suffers 1 mortal wound after shooting with this weapon."
									},
									{
										"name": "Ion Accelerator",
										"amount": "1",
										"Range": "72\"",
										"Type": "Heavy 6",
										"S": "7",
										"AP": "-3",
										"D": "3",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"statlines": {
									"M": "8",
									"WS": "5",
									"BS": "5",
									"S": "6",
									"T": "7",
									"W": "*",
									"A": "5",
									"Ld": "9",
									"Sv": "2"
								}
							},
							{
								"name": "Riptide Battlesuit [3] (1-3 Wounds Remaining)",
								"faction": "",
								"keywords": [],
								"weapons": [{
										"name": "Riptide Fists",
										"amount": "1",
										"Range": "Melee",
										"Type": "Melee",
										"S": "+1",
										"AP": "-2",
										"D": "2",
										"Abilities": "-"
									},
									{
										"name": "2x Plasma Rifle",
										"amount": "1",
										"Range": "30\"",
										"Type": "Assault 1",
										"S": "8",
										"AP": "-4",
										"D": "3",
										"Abilities": "-"
									},
									{
										"name": "Ion Accelerator",
										"amount": "1",
										"Range": "72\"",
										"Type": "Heavy 6",
										"S": "8",
										"AP": "-3",
										"D": "4",
										"Abilities": "Each time an unmodified hit roll of 1 is made for an attack with this weapon profile, the bearer's unit suffers 1 mortal wound after shooting with this weapon."
									},
									{
										"name": "Ion Accelerator",
										"amount": "1",
										"Range": "72\"",
										"Type": "Heavy 6",
										"S": "7",
										"AP": "-3",
										"D": "3",
										"Abilities": "-"
									}
								],
								"wargear": [],
								"statlines": {
									"M": "4",
									"WS": "5",
									"BS": "6",
									"S": "6",
									"T": "7",
									"W": "*",
									"A": "4",
									"Ld": "9",
									"Sv": "2"
								}
							}
						],
						"rules": [{
								"name": "Battlesuits",
								"desc": "BATTLESUIT models in this unit can make attacks with ranged weapons even when their unit is within Engagement Range of enemy units, but they can only make such attacks against enemy units that they are within Engagement Range of. In such circumstances, these models can target an enemy unit even if other friendly units are within Engagement Range of the same enemy unit.\n\nNote that if a BATTLESUIT model has more than one ranged weapon, you can still choose to target units that are not within Engagement Range of its unit, but it will only be able to make the attacks with that weapon if all enemy units within Engagement Range of its unit have been destroyed when you come to resolve these attacks. In addition, when a BATTLESUIT model shoots a Heavy weapon, subtract 1 from the hit rolls when resolving that weapon's attacks while any enemy units are within Engagement Range of that model's unit.",
								"subkeys": [
									"BATTLESUIT",
									"BATTLESUIT",
									"BATTLESUIT"
								],
								"targets": [
									"BATTLESUIT",
									"BATTLESUIT",
									"BATTLESUIT"
								],
								"phases": []
							},
							{
								"name": "Riptide Shield Generator",
								"desc": "This unit's RIPTIDE model has a 4+ invulnerable save.",
								"subkeys": [
									"RIPTIDE"
								],
								"targets": [
									"RIPTIDE"
								],
								"phases": []
							},
							{
								"name": "Explodes (Riptide)",
								"desc": "When this unit's RIPTIDE model is destroyed, roll one D6 before removing it from play. On a 6 it explodes, and each unit within 6\" suffers D3 mortal wounds.",
								"subkeys": [
									"RIPTIDE"
								],
								"targets": [
									"RIPTIDE"
								],
								"phases": []
							},
							{
								"name": "Nova Reactor (Riptide)",
								"desc": "In your Command phase, this unit's RIPTIDE model can use its Nova Reactor. If it does, roll 2D6, if the result is greater than the remaining wounds of this RIPTIDE model, its Nova Reactor is burned out and this ability cannot be used again this battle, otherwise, you can select one of the following reactor abilities:\n\n- Nova Shield: Until the start of your next Command phase, each time this model would lose a wound, roll one D6: on a 5+, that wound is not lost.\n- Boost: In your next Charge phase, this unit can make a Normal Move of up to 2D6\". If it does, until the end of the phase, you cannot declare a charge with this unit.\n- Nova Charge: Until the start of your next COmmand phase, if this model is equipped with a heavy burst cannon, that weapon has a Type characteristic of Heavy 16, otherwise, both profiles of that model's ion accelerator have a type characteristic of Heavy 8.",
								"subkeys": [
									"RIPTIDE",
									"RIPTIDE",
									"CO"
								],
								"targets": [
									"RIPTIDE",
									"RIPTIDE"
								],
								"phases": []
							},
							{
								"name": "Early Warning Override",
								"desc": "- Each time the bearer fires Overwatch, it scores hits on unmodified hit rolls of 5+, instead of 6.\n- Each time you use the Fire Overwatch Stratagem, if the bearer is on the battlefield and its unit is selected to fire Overwatch, reduce the CP cost of that Stratagem by 1CP (to a minimum of 0CP). Note that the CP cost is only reduced by 1CP for that use of the Stratagem, any future usages of it cost the normal amount of CPs.",
								"subkeys": [
									"CP",
									"CP",
									"CP"
								],
								"targets": null,
								"phases": []
							},
							{
								"name": "Counterfire Defence System",
								"desc": "The bearer gains the COUNTERFIRE DEFENCE SYSTEM keyword.",
								"subkeys": [
									"COUNTERFIRE",
									"DEFENCE",
									"SYSTEM"
								],
								"targets": [
									"COUNTERFIRE DEFENCE",
									"SYSTEM"
								],
								"phases": []
							},
							{
								"name": "Target Lock",
								"desc": "Each time the bearer makes a ranged attack, the target does not receive the benefits of Light Cover against that attack.",
								"subkeys": null,
								"targets": null,
								"phases": []
							}
						],
						"spells": [],
						"stratagems": []
					}
				]
			}],
			"costs": {
					"PL": 105,
					"CP": 16,
					"pts": 1999
				}

		},
	]

/*
atkr_file and dfdr_file become an array
costs becomes and object
*/
