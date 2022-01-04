var data = {
	"roster": {
		"id": "895a-beb9-0ac4-8eb9",
		"name": "New Roster",
		"battleScribeVersion": "2.03",
		"gameSystemId": "28ec-711c-d87f-3aeb",
		"gameSystemName": "Warhammer 40,000 9th Edition",
		"gameSystemRevision": "192",
		"xmlns": "http://www.battlescribe.net/schema/rosterSchema",
		"costs": {
			"cost": [{
				"name": " PL",
				"typeId": "e356-c769-5920-6e14",
				"value": "65.0"
			}, {
				"name": "CP",
				"typeId": "2d3b-b544-ad49-fb75",
				"value": "6.0"
			}, {
				"name": "pts",
				"typeId": "points",
				"value": "997.0"
			}]
		},
		"forces": {
			"force": {
				"id": "907c-12a8-203f-0c83",
				"name": "Patrol Detachment 0CP",
				"entryId": "a0c7-2a71-bae0-215d",
				"catalogueId": "0cc2-3545-6762-a3f7",
				"catalogueRevision": "96",
				"catalogueName": "Imperium - Grey Knights",
				"selections": {
					"selection": [{
						"id": "4705-2687-c929-8fd2",
						"name": "Brotherhood",
						"entryId": "833a-7d38-836c-f157::b3b9-70f1-126f-4bcc",
						"number": "1",
						"type": "upgrade",
						"selections": {
							"selection": {
								"id": "30bb-6a7a-e367-29a5",
								"name": "Rapiers",
								"entryId": "833a-7d38-836c-f157::684f-7b7b-7951-7a91::68e8-4053-6e4e-6afb",
								"entryGroupId": "833a-7d38-836c-f157::684f-7b7b-7951-7a91::0a52-40e7-e75f-89dc",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "833a-7d38-836c-f157::684f-7b7b-7951-7a91::85e9-38e9-9dc1-046e::7c16-88cb-8d75-d1a5",
										"name": "Symphonic Strike",
										"hidden": "false",
										"typeId": "ae70-4738-0161-bec0",
										"typeName": "Psychic Power",
										"characteristics": {
											"characteristic": [{
												"name": "Warp Charge",
												"typeId": "5ffd-b800-c317-532a",
												"$t": "6"
											}, {
												"name": "Range",
												"typeId": "fd64-cbc4-94de-24cc",
												"$t": "Self"
											}, {
												"name": "Details",
												"typeId": "ad96-dfa4-b4ed-656d",
												"$t": "Blessing: If manifested, until the start of your next Psychic phase, add 1 to the Attacks characteristic of models in this Psyker's unit."
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}]
								}
							}
						},
						"costs": {
							"cost": [{
								"name": " PL",
								"typeId": "e356-c769-5920-6e14",
								"value": "0.0"
							}, {
								"name": "CP",
								"typeId": "2d3b-b544-ad49-fb75",
								"value": "0.0"
							}, {
								"name": "pts",
								"typeId": "points",
								"value": "0.0"
							}]
						},
						"categories": {
							"category": {
								"id": "07d2-a459-1f48-2a16",
								"name": "Configuration",
								"entryId": "fcff-0f21-93e6-1ddc",
								"primary": "true"
							}
						}
					}, {
						"id": "8812-5fc1-d93a-ccc7",
						"name": "Detachment Command Cost",
						"entryId": "ec87-f19e-eee2-1ba8::9d97-2793-9882-d48a",
						"number": "1",
						"type": "upgrade",
						"costs": {
							"cost": [{
								"name": " PL",
								"typeId": "e356-c769-5920-6e14",
								"value": "0.0"
							}, {
								"name": "CP",
								"typeId": "2d3b-b544-ad49-fb75",
								"value": "0.0"
							}, {
								"name": "pts",
								"typeId": "points",
								"value": "0.0"
							}]
						},
						"categories": {
							"category": {
								"id": "d271-d1f8-9781-8761",
								"name": "Configuration",
								"entryId": "fcff-0f21-93e6-1ddc",
								"primary": "true"
							}
						}
					}, {
						"id": "b4a1-0a12-51c4-cafe",
						"name": "Paladin Squad",
						"entryId": "05bc-4c32-0e62-f81e::feb0-e13f-7b59-7e07",
						"number": "1",
						"type": "unit",
						"rules": {
							"rule": [{
								"id": "05bc-4c32-0e62-f81e::6ac9-a963-fd13-e3b9::a29c-ad1e-441b-2167",
								"name": "Teleport Strike",
								"hidden": "false",
								"description": "During deployment, you can set up this unit in a teleportarium chamber instead of placing it on the battlefield. At the end of any of your Movement phases this unit can teleport into battle - set it up anywhere on the battlefield that is more than 9\" away from any enemy models."
							}, {
								"id": "05bc-4c32-0e62-f81e::c6ef-0714-ae87-6781::c046-073b-7a50-c436",
								"name": "Combat Squads",
								"hidden": "false",
								"description": "Before any models are deployed at the start of the game, if this unit contains 10 models it may be split into two units, each containing 5 models."
							}, {
								"id": "05bc-4c32-0e62-f81e::2cfb-7e09-8bec-4a65::b6bb-8129-1b30-4d52",
								"name": "Crux Terminatus",
								"hidden": "false",
								"description": "All models in this unit have a 5+ invulnerable save."
							}, {
								"id": "05bc-4c32-0e62-f81e::a09d-9d35-02aa-c364::a26c-3bc4-cd1f-10bf",
								"name": "Knights of Titan",
								"publicationId": "0cc2-3545-pubN112001",
								"page": "96",
								"hidden": "false",
								"description": "This unit has the following abilities: And They Shall Know No Fear, Bolter Discipline, Master of the Warp"
							}]
						},
						"profiles": {
							"profile": [{
								"id": "05bc-4c32-0e62-f81e::c8f6-f141-0dd6-60c8::100e-a5f5-4af4-8c40",
								"name": "Psyker",
								"hidden": "false",
								"typeId": "bc97-dea9-9e88-bb7d",
								"typeName": "Psyker",
								"characteristics": {
									"characteristic": [{
										"name": "Cast",
										"typeId": "5afb-9914-904b-d3b3",
										"$t": "1"
									}, {
										"name": "Deny",
										"typeId": "b5ac-9c20-5d5a-6f9b",
										"$t": "1"
									}, {
										"name": "Powers Known",
										"typeId": "69d7-b45e-00a2-7e46",
										"$t": "1"
									}, {
										"name": "Other",
										"typeId": "c2e2-f115-0003-5d7b",
										"$t": "Smite"
									}]
								}
							}, {
								"id": "05bc-4c32-0e62-f81e::d7fb-c77a-e10f-c33a::84d6-49a4-a9ff-162b",
								"name": "Smite",
								"hidden": "false",
								"typeId": "ae70-4738-0161-bec0",
								"typeName": "Psychic Power",
								"characteristics": {
									"characteristic": [{
										"name": "Warp Charge",
										"typeId": "5ffd-b800-c317-532a",
										"$t": "5"
									}, {
										"name": "Range",
										"typeId": "fd64-cbc4-94de-24cc",
										"$t": "18\""
									}, {
										"name": "Details",
										"typeId": "ad96-dfa4-b4ed-656d",
										"$t": "If manifested, the closest enemy unit within 18\" suffers D3 mortal wounds. If the result of the Psychic test was more than 10, the target suffers D6 mortal wounds instead."
									}]
								}
							}]
						},
						"selections": {
							"selection": [{
								"id": "6053-8357-2229-98da",
								"name": "Paragon",
								"entryId": "05bc-4c32-0e62-f81e::b9f6-aec7-0bd3-cfd3",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "05bc-4c32-0e62-f81e::5097-20b0-4dbb-4271::037c-79d7-85a6-86e0",
										"name": "Paragon",
										"hidden": "false",
										"typeId": "800f-21d0-4387-c943",
										"typeName": "Unit",
										"characteristics": {
											"characteristic": [{
												"name": "M",
												"typeId": "0bdf-a96e-9e38-7779",
												"$t": "5\""
											}, {
												"name": "WS",
												"typeId": "e7f0-1278-0250-df0c",
												"$t": "2+"
											}, {
												"name": "BS",
												"typeId": "381b-eb28-74c3-df5f",
												"$t": "3+"
											}, {
												"name": "S",
												"typeId": "2218-aa3c-265f-2939",
												"$t": "4"
											}, {
												"name": "T",
												"typeId": "9c9f-9774-a358-3a39",
												"$t": "4"
											}, {
												"name": "W",
												"typeId": "f330-5e6e-4110-0978",
												"$t": "3"
											}, {
												"name": "A",
												"typeId": "13fc-b29b-31f2-ab9f",
												"$t": "5"
											}, {
												"name": "Ld",
												"typeId": "00ca-f8b8-876d-b705",
												"$t": "9"
											}, {
												"name": "Save",
												"typeId": "c0df-df94-abd7-e8d3",
												"$t": "2+"
											}]
										}
									}
								},
								"selections": {
									"selection": [{
										"id": "20ea-9124-7cb8-2492",
										"name": "Storm Bolter",
										"entryId": "05bc-4c32-0e62-f81e::be4c-1a6d-06f8-e4e2::fded-edb8-1d1e-99a5",
										"number": "1",
										"type": "upgrade",
										"profiles": {
											"profile": {
												"id": "05bc-4c32-0e62-f81e::be4c-1a6d-06f8-e4e2::f69c-aca7-7af0-704a::505e-a5aa-edab-6d5b",
												"name": "Storm bolter",
												"page": "",
												"hidden": "false",
												"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
												"typeName": "Weapon",
												"characteristics": {
													"characteristic": [{
														"name": "Range",
														"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
														"$t": "24\""
													}, {
														"name": "Type",
														"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
														"$t": "Rapid Fire 2"
													}, {
														"name": "S",
														"typeId": "59b1-319e-ec13-d466",
														"$t": "4"
													}, {
														"name": "AP",
														"typeId": "75aa-a838-b675-6484",
														"$t": "0"
													}, {
														"name": "D",
														"typeId": "ae8a-3137-d65b-4ca7",
														"$t": "1"
													}, {
														"name": "Abilities",
														"typeId": "837d-5e63-aeb7-1410",
														"$t": "-"
													}]
												}
											}
										},
										"costs": {
											"cost": [{
												"name": " PL",
												"typeId": "e356-c769-5920-6e14",
												"value": "0.0"
											}, {
												"name": "CP",
												"typeId": "2d3b-b544-ad49-fb75",
												"value": "0.0"
											}, {
												"name": "pts",
												"typeId": "points",
												"value": "0.0"
											}]
										}
									}, {
										"id": "3f6e-9240-d65f-beb1",
										"name": "Nemesis Force Sword",
										"entryId": "05bc-4c32-0e62-f81e::d2bd-ac47-c330-1546::fa60-c456-1d3f-4065",
										"entryGroupId": "05bc-4c32-0e62-f81e::d2bd-ac47-c330-1546::2619-cbc9-7327-dc75",
										"number": "1",
										"type": "upgrade",
										"selections": {
											"selection": {
												"id": "3f11-ab73-a88c-0f6f",
												"name": "Nemesis Force Sword",
												"entryId": "05bc-4c32-0e62-f81e::d2bd-ac47-c330-1546::2e71-4c1e-e4f1-00c7::9b71-6e0f-e71f-eacc",
												"number": "1",
												"type": "upgrade",
												"profiles": {
													"profile": {
														"id": "05bc-4c32-0e62-f81e::d2bd-ac47-c330-1546::2e71-4c1e-e4f1-00c7::0e2a-2983-22bf-6e39::ad6d-a483-9837-233a",
														"name": "Nemesis Force Sword",
														"hidden": "false",
														"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
														"typeName": "Weapon",
														"characteristics": {
															"characteristic": [{
																"name": "Range",
																"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
																"$t": "Melee"
															}, {
																"name": "Type",
																"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
																"$t": "Melee"
															}, {
																"name": "S",
																"typeId": "59b1-319e-ec13-d466",
																"$t": "+1"
															}, {
																"name": "AP",
																"typeId": "75aa-a838-b675-6484",
																"$t": "-3"
															}, {
																"name": "D",
																"typeId": "ae8a-3137-d65b-4ca7",
																"$t": "2"
															}, {
																"name": "Abilities",
																"typeId": "837d-5e63-aeb7-1410",
																"$t": "-"
															}]
														}
													}
												},
												"costs": {
													"cost": [{
														"name": " PL",
														"typeId": "e356-c769-5920-6e14",
														"value": "0.0"
													}, {
														"name": "CP",
														"typeId": "2d3b-b544-ad49-fb75",
														"value": "0.0"
													}, {
														"name": "pts",
														"typeId": "points",
														"value": "0.0"
													}]
												}
											}
										},
										"costs": {
											"cost": [{
												"name": " PL",
												"typeId": "e356-c769-5920-6e14",
												"value": "0.0"
											}, {
												"name": "pts",
												"typeId": "points",
												"value": "0.0"
											}, {
												"name": "CP",
												"typeId": "2d3b-b544-ad49-fb75",
												"value": "0.0"
											}]
										}
									}]
								},
								"costs": {
									"cost": [{
										"name": "pts",
										"typeId": "points",
										"value": "47.0"
									}, {
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "b461-e49f-4854-1463",
								"name": "Frag & Krak grenades",
								"entryId": "05bc-4c32-0e62-f81e::e485-f89d-551e-d749::cddf-945e-1335-e681",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": [{
										"id": "05bc-4c32-0e62-f81e::e485-f89d-551e-d749::61a4-e2d3-522d-c838::fdd8-1a5f-5722-d6ee",
										"name": "Frag grenades",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "6\""
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Grenade D6"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "3"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "0"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "1"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410",
												"$t": "Blast."
											}]
										}
									}, {
										"id": "05bc-4c32-0e62-f81e::e485-f89d-551e-d749::b250-1f2e-4904-0eb4::3bf6-b4f7-6b2f-bb7b",
										"name": "Krak grenades",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "6\""
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Grenade 1"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "6"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "-1"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "D3"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410",
												"$t": "-"
											}]
										}
									}]
								},
								"costs": {
									"cost": [{
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "07f0-f310-cfbf-daf2",
								"name": "Psyk-out Grenade",
								"entryId": "05bc-4c32-0e62-f81e::f511-3627-bfa9-09fb::37bc-bbf1-18fd-7294",
								"number": "1",
								"type": "upgrade",
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "2de3-91c2-3134-f5a5",
								"name": "Paladin (Sword)",
								"entryId": "05bc-4c32-0e62-f81e::7b0c-c64c-55ce-9268",
								"entryGroupId": "05bc-4c32-0e62-f81e::a313-e2fe-afb2-600a",
								"number": "5",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "05bc-4c32-0e62-f81e::f1c2-f2a1-299a-5d59::046b-995d-0d40-cc61",
										"name": "Paladin",
										"hidden": "false",
										"typeId": "800f-21d0-4387-c943",
										"typeName": "Unit",
										"characteristics": {
											"characteristic": [{
												"name": "M",
												"typeId": "0bdf-a96e-9e38-7779",
												"$t": "5\""
											}, {
												"name": "WS",
												"typeId": "e7f0-1278-0250-df0c",
												"$t": "2+"
											}, {
												"name": "BS",
												"typeId": "381b-eb28-74c3-df5f",
												"$t": "3+"
											}, {
												"name": "S",
												"typeId": "2218-aa3c-265f-2939",
												"$t": "4"
											}, {
												"name": "T",
												"typeId": "9c9f-9774-a358-3a39",
												"$t": "4"
											}, {
												"name": "W",
												"typeId": "f330-5e6e-4110-0978",
												"$t": "3"
											}, {
												"name": "A",
												"typeId": "13fc-b29b-31f2-ab9f",
												"$t": "4"
											}, {
												"name": "Ld",
												"typeId": "00ca-f8b8-876d-b705",
												"$t": "8"
											}, {
												"name": "Save",
												"typeId": "c0df-df94-abd7-e8d3",
												"$t": "2+"
											}]
										}
									}
								},
								"selections": {
									"selection": [{
										"id": "1d36-0bb6-6b31-b251",
										"name": "Nemesis Force Sword",
										"entryId": "05bc-4c32-0e62-f81e::9f74-a91d-715d-185e::9b71-6e0f-e71f-eacc",
										"number": "5",
										"type": "upgrade",
										"profiles": {
											"profile": {
												"id": "05bc-4c32-0e62-f81e::9f74-a91d-715d-185e::0e2a-2983-22bf-6e39::ad6d-a483-9837-233a",
												"name": "Nemesis Force Sword",
												"hidden": "false",
												"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
												"typeName": "Weapon",
												"characteristics": {
													"characteristic": [{
														"name": "Range",
														"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
														"$t": "Melee"
													}, {
														"name": "Type",
														"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
														"$t": "Melee"
													}, {
														"name": "S",
														"typeId": "59b1-319e-ec13-d466",
														"$t": "+1"
													}, {
														"name": "AP",
														"typeId": "75aa-a838-b675-6484",
														"$t": "-3"
													}, {
														"name": "D",
														"typeId": "ae8a-3137-d65b-4ca7",
														"$t": "2"
													}, {
														"name": "Abilities",
														"typeId": "837d-5e63-aeb7-1410",
														"$t": "-"
													}]
												}
											}
										},
										"costs": {
											"cost": [{
												"name": " PL",
												"typeId": "e356-c769-5920-6e14",
												"value": "0.0"
											}, {
												"name": "CP",
												"typeId": "2d3b-b544-ad49-fb75",
												"value": "0.0"
											}, {
												"name": "pts",
												"typeId": "points",
												"value": "0.0"
											}]
										}
									}, {
										"id": "1f66-a5df-64d7-b008",
										"name": "Storm Bolter",
										"entryId": "05bc-4c32-0e62-f81e::342d-7ce2-a93a-f646::fded-edb8-1d1e-99a5",
										"number": "5",
										"type": "upgrade",
										"profiles": {
											"profile": {
												"id": "05bc-4c32-0e62-f81e::342d-7ce2-a93a-f646::f69c-aca7-7af0-704a::505e-a5aa-edab-6d5b",
												"name": "Storm bolter",
												"page": "",
												"hidden": "false",
												"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
												"typeName": "Weapon",
												"characteristics": {
													"characteristic": [{
														"name": "Range",
														"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
														"$t": "24\""
													}, {
														"name": "Type",
														"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
														"$t": "Rapid Fire 2"
													}, {
														"name": "S",
														"typeId": "59b1-319e-ec13-d466",
														"$t": "4"
													}, {
														"name": "AP",
														"typeId": "75aa-a838-b675-6484",
														"$t": "0"
													}, {
														"name": "D",
														"typeId": "ae8a-3137-d65b-4ca7",
														"$t": "1"
													}, {
														"name": "Abilities",
														"typeId": "837d-5e63-aeb7-1410",
														"$t": "-"
													}]
												}
											}
										},
										"costs": {
											"cost": [{
												"name": " PL",
												"typeId": "e356-c769-5920-6e14",
												"value": "0.0"
											}, {
												"name": "CP",
												"typeId": "2d3b-b544-ad49-fb75",
												"value": "0.0"
											}, {
												"name": "pts",
												"typeId": "points",
												"value": "0.0"
											}]
										}
									}]
								},
								"costs": {
									"cost": [{
										"name": "pts",
										"typeId": "points",
										"value": "235.0"
									}, {
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "fdcc-3033-8e0c-b998",
								"name": "4: Purifying Flame",
								"entryId": "05bc-4c32-0e62-f81e::f9cb-7422-ee9c-7918::2fd4-2549-8dfc-b14e",
								"entryGroupId": "05bc-4c32-0e62-f81e::f9cb-7422-ee9c-7918::5ba6-82ba-1388-2a47",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "05bc-4c32-0e62-f81e::f9cb-7422-ee9c-7918::b554-8a73-d997-1c22::d187-57f3-cdcc-19e4",
										"name": "Purifying Flame",
										"hidden": "false",
										"typeId": "ae70-4738-0161-bec0",
										"typeName": "Psychic Power",
										"characteristics": {
											"characteristic": [{
												"name": "Warp Charge",
												"typeId": "5ffd-b800-c317-532a",
												"$t": "5"
											}, {
												"name": "Range",
												"typeId": "fd64-cbc4-94de-24cc",
												"$t": "9\""
											}, {
												"name": "Details",
												"typeId": "ad96-dfa4-b4ed-656d",
												"$t": "Witchfire: If manifested, the closest enemy unit within 9\" of and visible to this Psyker suffers 3 mortal wounds. If the result of the Psychic test was 11+ that unit suffers D3+3 mortal wounds instead"
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}]
								}
							}, {
								"id": "4616-326d-41f7-08a2",
								"name": "5: Armoured Resilience",
								"entryId": "05bc-4c32-0e62-f81e::f9cb-7422-ee9c-7918::5e7c-e73d-a95e-6ae4",
								"entryGroupId": "05bc-4c32-0e62-f81e::f9cb-7422-ee9c-7918::5ba6-82ba-1388-2a47",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "05bc-4c32-0e62-f81e::f9cb-7422-ee9c-7918::41e6-e4c8-8e31-db2d::4a77-29f3-dd9f-820f",
										"name": "Armored Resilience",
										"publicationId": "0cc2-3545-pubN112001",
										"hidden": "false",
										"typeId": "ae70-4738-0161-bec0",
										"typeName": "Psychic Power",
										"characteristics": {
											"characteristic": [{
												"name": "Warp Charge",
												"typeId": "5ffd-b800-c317-532a",
												"$t": "6"
											}, {
												"name": "Range",
												"typeId": "fd64-cbc4-94de-24cc",
												"$t": "Self"
											}, {
												"name": "Details",
												"typeId": "ad96-dfa4-b4ed-656d",
												"$t": "Blessing: If manifested, until the start of your next Psychic phase, add 1 to armour saving throws made for models in this Psyker's unit"
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}]
						},
						"costs": {
							"cost": [{
								"name": " PL",
								"typeId": "e356-c769-5920-6e14",
								"value": "26.0"
							}, {
								"name": "pts",
								"typeId": "points",
								"value": "0.0"
							}, {
								"name": "CP",
								"typeId": "2d3b-b544-ad49-fb75",
								"value": "0.0"
							}]
						},
						"categories": {
							"category": [{
								"id": "cb22-0f51-ee5c-9657",
								"name": "Faction: Grey Knights",
								"entryId": "31b6-b037-4c7a-f850",
								"primary": "false"
							}, {
								"id": "3c45-d634-d46d-d93e",
								"name": "Psyker",
								"entryId": "e691-aad7-d21c-1023",
								"primary": "false"
							}, {
								"id": "0b88-8865-2afd-a011",
								"name": "Terminator",
								"entryId": "2821-762a-49dc-5a17",
								"primary": "false"
							}, {
								"id": "5a76-7045-33db-11d1",
								"name": "Elites",
								"entryId": "638d74c6-bd97-4de5-b65a-6aaa24e9f4b2",
								"primary": "true"
							}, {
								"id": "8b68-c749-0668-44a7",
								"name": "Infantry",
								"entryId": "3d52-fccf-10c0-3fae",
								"primary": "false"
							}, {
								"id": "f2f6-e0df-944c-c95b",
								"name": "Paladin",
								"entryId": "93ce-c53b-02d5-24f5",
								"primary": "false"
							}, {
								"id": "118c-5201-f195-4a6a",
								"name": "Paladin Squad",
								"entryId": "599b-fb10-960a-a29f",
								"primary": "false"
							}, {
								"id": "8d3e-3cde-3df5-9592",
								"name": "Faction: Imperium",
								"entryId": "84e2-9fa9-ebe6-1d18",
								"primary": "false"
							}, {
								"id": "46b9-20c9-d7b9-a6f0",
								"name": "Honoured Knight",
								"entryId": "736c-5b2d-201e-6df9",
								"primary": "false"
							}, {
								"id": "5e98-09ab-7f5f-c871",
								"name": "Faction: Sanctic Astartes",
								"entryId": "bb46-a10a-ef92-c764",
								"primary": "false"
							}, {
								"id": "3795-5345-cc01-260b",
								"name": "Core",
								"entryId": "08f1-d244-eb44-7e01",
								"primary": "false"
							}, {
								"id": "ef5b-8c4a-0069-1105",
								"name": "Psyk-out Grenades",
								"entryId": "e08a-4705-eaae-e4c2",
								"primary": "false"
							}]
						}
					}, {
						"id": "687c-1f48-eb65-dd4b",
						"name": "Nemesis Dreadknight",
						"entryId": "79fb-ade6-e3c1-eebb::7c6d-f81e-621d-f141",
						"number": "1",
						"type": "model",
						"rules": {
							"rule": [{
								"id": "79fb-ade6-e3c1-eebb::6549-dfdd-af87-2964",
								"name": "Force Shielding",
								"hidden": "false",
								"description": "This model has a 4+ invulnerable save."
							}, {
								"id": "79fb-ade6-e3c1-eebb::6e52-19a8-bb4a-5c62::a26c-3bc4-cd1f-10bf",
								"name": "Knights of Titan",
								"publicationId": "0cc2-3545-pubN112001",
								"page": "96",
								"hidden": "false",
								"description": "This unit has the following abilities: And They Shall Know No Fear, Bolter Discipline, Master of the Warp"
							}, {
								"id": "79fb-ade6-e3c1-eebb::38da-f086-d0e1-e0bb::a29c-ad1e-441b-2167",
								"name": "Teleport Strike",
								"hidden": "false",
								"description": "During deployment, you can set up this unit in a teleportarium chamber instead of placing it on the battlefield. At the end of any of your Movement phases this unit can teleport into battle - set it up anywhere on the battlefield that is more than 9\" away from any enemy models."
							}]
						},
						"profiles": {
							"profile": [{
								"id": "79fb-ade6-e3c1-eebb::3671-1cd0-a711-210d",
								"name": "Nemesis Dreadknight 1 (7+ Wounds Remaining)",
								"hidden": "false",
								"typeId": "800f-21d0-4387-c943",
								"typeName": "Unit",
								"characteristics": {
									"characteristic": [{
										"name": "M",
										"typeId": "0bdf-a96e-9e38-7779",
										"$t": "9\""
									}, {
										"name": "WS",
										"typeId": "e7f0-1278-0250-df0c",
										"$t": "3+"
									}, {
										"name": "BS",
										"typeId": "381b-eb28-74c3-df5f",
										"$t": "3+"
									}, {
										"name": "S",
										"typeId": "2218-aa3c-265f-2939",
										"$t": "6"
									}, {
										"name": "T",
										"typeId": "9c9f-9774-a358-3a39",
										"$t": "6"
									}, {
										"name": "W",
										"typeId": "f330-5e6e-4110-0978",
										"$t": "13"
									}, {
										"name": "A",
										"typeId": "13fc-b29b-31f2-ab9f",
										"$t": "5"
									}, {
										"name": "Ld",
										"typeId": "00ca-f8b8-876d-b705",
										"$t": "8"
									}, {
										"name": "Save",
										"typeId": "c0df-df94-abd7-e8d3",
										"$t": "2+"
									}]
								}
							}, {
								"id": "79fb-ade6-e3c1-eebb::034f-220a-beac-6159",
								"name": "Nemesis Dreadknight 2 (4-6 Wounds Remaining)",
								"hidden": "false",
								"typeId": "800f-21d0-4387-c943",
								"typeName": "Unit",
								"characteristics": {
									"characteristic": [{
										"name": "M",
										"typeId": "0bdf-a96e-9e38-7779",
										"$t": "7\""
									}, {
										"name": "WS",
										"typeId": "e7f0-1278-0250-df0c",
										"$t": "3+"
									}, {
										"name": "BS",
										"typeId": "381b-eb28-74c3-df5f",
										"$t": "4+"
									}, {
										"name": "S",
										"typeId": "2218-aa3c-265f-2939",
										"$t": "6"
									}, {
										"name": "T",
										"typeId": "9c9f-9774-a358-3a39",
										"$t": "6"
									}, {
										"name": "W",
										"typeId": "f330-5e6e-4110-0978",
										"$t": "N/A"
									}, {
										"name": "A",
										"typeId": "13fc-b29b-31f2-ab9f",
										"$t": "4"
									}, {
										"name": "Ld",
										"typeId": "00ca-f8b8-876d-b705",
										"$t": "8"
									}, {
										"name": "Save",
										"typeId": "c0df-df94-abd7-e8d3",
										"$t": "2+"
									}]
								}
							}, {
								"id": "79fb-ade6-e3c1-eebb::8cfc-e929-c2de-bfc6",
								"name": "Nemesis Dreadknight 3 (1-3 Wounds Remaining)",
								"hidden": "false",
								"typeId": "800f-21d0-4387-c943",
								"typeName": "Unit",
								"characteristics": {
									"characteristic": [{
										"name": "M",
										"typeId": "0bdf-a96e-9e38-7779",
										"$t": "5\""
									}, {
										"name": "WS",
										"typeId": "e7f0-1278-0250-df0c",
										"$t": "3+"
									}, {
										"name": "BS",
										"typeId": "381b-eb28-74c3-df5f",
										"$t": "5+"
									}, {
										"name": "S",
										"typeId": "2218-aa3c-265f-2939",
										"$t": "6"
									}, {
										"name": "T",
										"typeId": "9c9f-9774-a358-3a39",
										"$t": "6"
									}, {
										"name": "W",
										"typeId": "f330-5e6e-4110-0978",
										"$t": "N/A"
									}, {
										"name": "A",
										"typeId": "13fc-b29b-31f2-ab9f",
										"$t": "3"
									}, {
										"name": "Ld",
										"typeId": "00ca-f8b8-876d-b705",
										"$t": "8"
									}, {
										"name": "Save",
										"typeId": "c0df-df94-abd7-e8d3",
										"$t": "2+"
									}]
								}
							}, {
								"id": "79fb-ade6-e3c1-eebb::bc5a-3be6-d143-b27b",
								"name": "Psyker",
								"hidden": "false",
								"typeId": "bc97-dea9-9e88-bb7d",
								"typeName": "Psyker",
								"characteristics": {
									"characteristic": [{
										"name": "Cast",
										"typeId": "5afb-9914-904b-d3b3",
										"$t": "1"
									}, {
										"name": "Deny",
										"typeId": "b5ac-9c20-5d5a-6f9b",
										"$t": "1"
									}, {
										"name": "Powers Known",
										"typeId": "69d7-b45e-00a2-7e46",
										"$t": "Hammerhand"
									}, {
										"name": "Other",
										"typeId": "c2e2-f115-0003-5d7b",
										"$t": "Smite"
									}]
								}
							}, {
								"id": "79fb-ade6-e3c1-eebb::35c4-14ad-8300-7d76::84d6-49a4-a9ff-162b",
								"name": "Smite",
								"hidden": "false",
								"typeId": "ae70-4738-0161-bec0",
								"typeName": "Psychic Power",
								"characteristics": {
									"characteristic": [{
										"name": "Warp Charge",
										"typeId": "5ffd-b800-c317-532a",
										"$t": "5"
									}, {
										"name": "Range",
										"typeId": "fd64-cbc4-94de-24cc",
										"$t": "18\""
									}, {
										"name": "Details",
										"typeId": "ad96-dfa4-b4ed-656d",
										"$t": "If manifested, the closest enemy unit within 18\" suffers D3 mortal wounds. If the result of the Psychic test was more than 10, the target suffers D6 mortal wounds instead."
									}]
								}
							}, {
								"id": "79fb-ade6-e3c1-eebb::758b-7518-8a68-9b5a::ded7-680d-4084-5679",
								"name": "Hammerhand",
								"hidden": "false",
								"typeId": "ae70-4738-0161-bec0",
								"typeName": "Psychic Power",
								"characteristics": {
									"characteristic": [{
										"name": "Warp Charge",
										"typeId": "5ffd-b800-c317-532a",
										"$t": "5"
									}, {
										"name": "Range",
										"typeId": "fd64-cbc4-94de-24cc",
										"$t": "12\""
									}, {
										"name": "Details",
										"typeId": "ad96-dfa4-b4ed-656d",
										"$t": "Blessing: If manifested, until the start of your next Psychic phase, each time a model in this Psyker's unit makes a melee attack, you can re-roll the wound roll."
									}]
								}
							}]
						},
						"selections": {
							"selection": [{
								"id": "3dc7-2438-59c8-47cc",
								"name": "Brotherhood Psyker Power",
								"entryId": "79fb-ade6-e3c1-eebb::5648-b3e7-bda8-a8db::d6ae-fe14-202c-6351",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "79fb-ade6-e3c1-eebb::5648-b3e7-bda8-a8db::b0ba-2c21-3dac-4bbd",
										"name": "Symphonic Strike",
										"hidden": "false",
										"typeId": "ae70-4738-0161-bec0",
										"typeName": "Psychic Power",
										"characteristics": {
											"characteristic": [{
												"name": "Warp Charge",
												"typeId": "5ffd-b800-c317-532a",
												"$t": "6"
											}, {
												"name": "Range",
												"typeId": "fd64-cbc4-94de-24cc",
												"$t": "Self"
											}, {
												"name": "Details",
												"typeId": "ad96-dfa4-b4ed-656d",
												"$t": "Blessing: If manifested, until the start of your next Psychic phase, add 1 to the Attacks characteristic of models in this Psyker's unit."
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}]
								}
							}, {
								"id": "b305-533c-6814-5f73",
								"name": "Dreadfist",
								"entryId": "79fb-ade6-e3c1-eebb::1161-a577-f861-c8a3::c97e-2928-fc16-ddc3",
								"entryGroupId": "79fb-ade6-e3c1-eebb::d71a-8ae0-cecc-9652",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "79fb-ade6-e3c1-eebb::1161-a577-f861-c8a3::70dc-ea63-61e4-f38a",
										"name": "Dreadfist",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "Melee"
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Melee"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "x2"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "-3"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "2"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410",
												"$t": "-"
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}]
								}
							}, {
								"id": "9e0b-0eb9-c3af-bca9",
								"name": "Heavy Psycannon",
								"entryId": "79fb-ade6-e3c1-eebb::78a9-9e9b-b96b-d9a5::a939-ef50-ff7f-636d",
								"entryGroupId": "79fb-ade6-e3c1-eebb::d20a-7d91-4312-6bc0",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "79fb-ade6-e3c1-eebb::78a9-9e9b-b96b-d9a5::1fbd-a97f-0771-069b",
										"name": "Heavy Psycannon",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "24\""
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Heavy 6"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "8"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "-2"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "2"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410"
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "20.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "5b25-ef38-196d-8084",
								"name": "Dreadfist",
								"entryId": "79fb-ade6-e3c1-eebb::15bc-258a-2708-0f2b::c97e-2928-fc16-ddc3",
								"entryGroupId": "79fb-ade6-e3c1-eebb::45c2-57da-fe5d-d94a",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "79fb-ade6-e3c1-eebb::15bc-258a-2708-0f2b::70dc-ea63-61e4-f38a",
										"name": "Dreadfist",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "Melee"
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Melee"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "x2"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "-3"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "2"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410",
												"$t": "-"
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}]
								}
							}, {
								"id": "8efa-1e8a-e74c-c552",
								"name": "Gatling Psilencer",
								"entryId": "79fb-ade6-e3c1-eebb::c008-285e-be45-99fe::76fd-e479-a97b-469e",
								"entryGroupId": "79fb-ade6-e3c1-eebb::d20a-7d91-4312-6bc0",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "79fb-ade6-e3c1-eebb::c008-285e-be45-99fe::152c-e891-1fa5-8443",
										"name": "Gatling Psilencer",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "24\""
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Heavy 12"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "5"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "-1"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "1"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410"
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "20.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}]
						},
						"costs": {
							"cost": [{
								"name": " PL",
								"typeId": "e356-c769-5920-6e14",
								"value": "9.0"
							}, {
								"name": "pts",
								"typeId": "points",
								"value": "120.0"
							}, {
								"name": "CP",
								"typeId": "2d3b-b544-ad49-fb75",
								"value": "0.0"
							}]
						},
						"categories": {
							"category": [{
								"id": "3857-3fd5-a59b-b0a3",
								"name": "Vehicle",
								"entryId": "c8fd-783f-3230-493e",
								"primary": "false"
							}, {
								"id": "541e-7121-ad47-cf91",
								"name": "Heavy Support",
								"entryId": "abf5fd55-9ac7-4263-8bc1-a9fb0a8fa6a6",
								"primary": "true"
							}, {
								"id": "5cf6-9243-9c53-78ea",
								"name": "Faction: Grey Knights",
								"entryId": "31b6-b037-4c7a-f850",
								"primary": "false"
							}, {
								"id": "5f40-62cd-e678-f8af",
								"name": "Nemesis Dreadknight",
								"entryId": "c78d-e495-4b56-c15b",
								"primary": "false"
							}, {
								"id": "95d2-e347-3744-bfc1",
								"name": "Psyker",
								"entryId": "e691-aad7-d21c-1023",
								"primary": "false"
							}, {
								"id": "a068-de97-95d1-7548",
								"name": "Faction: Imperium",
								"entryId": "84e2-9fa9-ebe6-1d18",
								"primary": "false"
							}, {
								"id": "c61d-2e7e-c67c-dd38",
								"name": "Core",
								"entryId": "08f1-d244-eb44-7e01",
								"primary": "false"
							}, {
								"id": "60ca-155c-e412-079a",
								"name": "<Brotherhood>",
								"entryId": "4a9f-dcb0-00e7-1fcc",
								"primary": "false"
							}, {
								"id": "d668-d0e2-2f87-b480",
								"name": "Faction: Sanctic Astartes",
								"entryId": "bb46-a10a-ef92-c764",
								"primary": "false"
							}]
						}
					}, {
						"id": "4b4a-a184-6d04-88d6",
						"name": "Strike Squad",
						"entryId": "0244-9f38-1f40-4689::e012-a289-720d-a36c",
						"number": "1",
						"type": "unit",
						"rules": {
							"rule": [{
								"id": "0244-9f38-1f40-4689::f5b0-77e7-a206-5a81::a29c-ad1e-441b-2167",
								"name": "Teleport Strike",
								"hidden": "false",
								"description": "During deployment, you can set up this unit in a teleportarium chamber instead of placing it on the battlefield. At the end of any of your Movement phases this unit can teleport into battle - set it up anywhere on the battlefield that is more than 9\" away from any enemy models."
							}, {
								"id": "0244-9f38-1f40-4689::181a-c718-dfd7-7b6a::c046-073b-7a50-c436",
								"name": "Combat Squads",
								"hidden": "false",
								"description": "Before any models are deployed at the start of the game, if this unit contains 10 models it may be split into two units, each containing 5 models."
							}, {
								"id": "0244-9f38-1f40-4689::bd98-cc12-361d-aa19::a26c-3bc4-cd1f-10bf",
								"name": "Knights of Titan",
								"publicationId": "0cc2-3545-pubN112001",
								"page": "96",
								"hidden": "false",
								"description": "This unit has the following abilities: And They Shall Know No Fear, Bolter Discipline, Master of the Warp"
							}]
						},
						"profiles": {
							"profile": [{
								"id": "0244-9f38-1f40-4689::8b4a-a4c6-0a07-8e2a::100e-a5f5-4af4-8c40",
								"name": "Psyker",
								"hidden": "false",
								"typeId": "bc97-dea9-9e88-bb7d",
								"typeName": "Psyker",
								"characteristics": {
									"characteristic": [{
										"name": "Cast",
										"typeId": "5afb-9914-904b-d3b3",
										"$t": "1"
									}, {
										"name": "Deny",
										"typeId": "b5ac-9c20-5d5a-6f9b",
										"$t": "1"
									}, {
										"name": "Powers Known",
										"typeId": "69d7-b45e-00a2-7e46",
										"$t": "1"
									}, {
										"name": "Other",
										"typeId": "c2e2-f115-0003-5d7b",
										"$t": "Smite"
									}]
								}
							}, {
								"id": "0244-9f38-1f40-4689::2c54-c0bf-6bf7-b820::84d6-49a4-a9ff-162b",
								"name": "Smite",
								"hidden": "false",
								"typeId": "ae70-4738-0161-bec0",
								"typeName": "Psychic Power",
								"characteristics": {
									"characteristic": [{
										"name": "Warp Charge",
										"typeId": "5ffd-b800-c317-532a",
										"$t": "5"
									}, {
										"name": "Range",
										"typeId": "fd64-cbc4-94de-24cc",
										"$t": "18\""
									}, {
										"name": "Details",
										"typeId": "ad96-dfa4-b4ed-656d",
										"$t": "If manifested, the closest enemy unit within 18\" suffers D3 mortal wounds. If the result of the Psychic test was more than 10, the target suffers D6 mortal wounds instead."
									}]
								}
							}, {
								"id": "0244-9f38-1f40-4689::8fb3-d428-cdd4-c8d6::ded7-680d-4084-5679",
								"name": "Hammerhand",
								"hidden": "false",
								"typeId": "ae70-4738-0161-bec0",
								"typeName": "Psychic Power",
								"characteristics": {
									"characteristic": [{
										"name": "Warp Charge",
										"typeId": "5ffd-b800-c317-532a",
										"$t": "5"
									}, {
										"name": "Range",
										"typeId": "fd64-cbc4-94de-24cc",
										"$t": "12\""
									}, {
										"name": "Details",
										"typeId": "ad96-dfa4-b4ed-656d",
										"$t": "Blessing: If manifested, until the start of your next Psychic phase, each time a model in this Psyker's unit makes a melee attack, you can re-roll the wound roll."
									}]
								}
							}]
						},
						"selections": {
							"selection": [{
								"id": "b93a-6665-7abd-593d",
								"name": "Grey Knight Justicar",
								"entryId": "0244-9f38-1f40-4689::6bed-fae1-6fb0-5dbc::767b-e555-311f-cdbe",
								"number": "1",
								"type": "model",
								"profiles": {
									"profile": {
										"id": "0244-9f38-1f40-4689::6bed-fae1-6fb0-5dbc::9d07-0d02-74cf-b462",
										"name": "Grey Knight Justicar",
										"hidden": "false",
										"typeId": "800f-21d0-4387-c943",
										"typeName": "Unit",
										"characteristics": {
											"characteristic": [{
												"name": "M",
												"typeId": "0bdf-a96e-9e38-7779",
												"$t": "6\""
											}, {
												"name": "WS",
												"typeId": "e7f0-1278-0250-df0c",
												"$t": "3+"
											}, {
												"name": "BS",
												"typeId": "381b-eb28-74c3-df5f",
												"$t": "3+"
											}, {
												"name": "S",
												"typeId": "2218-aa3c-265f-2939",
												"$t": "4"
											}, {
												"name": "T",
												"typeId": "9c9f-9774-a358-3a39",
												"$t": "4"
											}, {
												"name": "W",
												"typeId": "f330-5e6e-4110-0978",
												"$t": "2"
											}, {
												"name": "A",
												"typeId": "13fc-b29b-31f2-ab9f",
												"$t": "4"
											}, {
												"name": "Ld",
												"typeId": "00ca-f8b8-876d-b705",
												"$t": "8"
											}, {
												"name": "Save",
												"typeId": "c0df-df94-abd7-e8d3",
												"$t": "3+"
											}]
										}
									}
								},
								"selections": {
									"selection": [{
										"id": "9e6e-89c0-4bed-7efc",
										"name": "Storm Bolter",
										"entryId": "0244-9f38-1f40-4689::6bed-fae1-6fb0-5dbc::da8e-18b3-b989-2026::fded-edb8-1d1e-99a5",
										"number": "1",
										"type": "upgrade",
										"profiles": {
											"profile": {
												"id": "0244-9f38-1f40-4689::6bed-fae1-6fb0-5dbc::da8e-18b3-b989-2026::f69c-aca7-7af0-704a::505e-a5aa-edab-6d5b",
												"name": "Storm bolter",
												"page": "",
												"hidden": "false",
												"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
												"typeName": "Weapon",
												"characteristics": {
													"characteristic": [{
														"name": "Range",
														"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
														"$t": "24\""
													}, {
														"name": "Type",
														"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
														"$t": "Rapid Fire 2"
													}, {
														"name": "S",
														"typeId": "59b1-319e-ec13-d466",
														"$t": "4"
													}, {
														"name": "AP",
														"typeId": "75aa-a838-b675-6484",
														"$t": "0"
													}, {
														"name": "D",
														"typeId": "ae8a-3137-d65b-4ca7",
														"$t": "1"
													}, {
														"name": "Abilities",
														"typeId": "837d-5e63-aeb7-1410",
														"$t": "-"
													}]
												}
											}
										},
										"costs": {
											"cost": [{
												"name": " PL",
												"typeId": "e356-c769-5920-6e14",
												"value": "0.0"
											}, {
												"name": "CP",
												"typeId": "2d3b-b544-ad49-fb75",
												"value": "0.0"
											}, {
												"name": "pts",
												"typeId": "points",
												"value": "0.0"
											}]
										}
									}, {
										"id": "3ab0-5518-af16-97cd",
										"name": "Nemesis Force Sword",
										"entryId": "0244-9f38-1f40-4689::6bed-fae1-6fb0-5dbc::fb52-5a60-2169-0454::fa60-c456-1d3f-4065",
										"entryGroupId": "0244-9f38-1f40-4689::6bed-fae1-6fb0-5dbc::fb52-5a60-2169-0454::2619-cbc9-7327-dc75",
										"number": "1",
										"type": "upgrade",
										"selections": {
											"selection": {
												"id": "f850-19cd-c6a5-3323",
												"name": "Nemesis Force Sword",
												"entryId": "0244-9f38-1f40-4689::6bed-fae1-6fb0-5dbc::fb52-5a60-2169-0454::2e71-4c1e-e4f1-00c7::9b71-6e0f-e71f-eacc",
												"number": "1",
												"type": "upgrade",
												"profiles": {
													"profile": {
														"id": "0244-9f38-1f40-4689::6bed-fae1-6fb0-5dbc::fb52-5a60-2169-0454::2e71-4c1e-e4f1-00c7::0e2a-2983-22bf-6e39::ad6d-a483-9837-233a",
														"name": "Nemesis Force Sword",
														"hidden": "false",
														"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
														"typeName": "Weapon",
														"characteristics": {
															"characteristic": [{
																"name": "Range",
																"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
																"$t": "Melee"
															}, {
																"name": "Type",
																"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
																"$t": "Melee"
															}, {
																"name": "S",
																"typeId": "59b1-319e-ec13-d466",
																"$t": "+1"
															}, {
																"name": "AP",
																"typeId": "75aa-a838-b675-6484",
																"$t": "-3"
															}, {
																"name": "D",
																"typeId": "ae8a-3137-d65b-4ca7",
																"$t": "2"
															}, {
																"name": "Abilities",
																"typeId": "837d-5e63-aeb7-1410",
																"$t": "-"
															}]
														}
													}
												},
												"costs": {
													"cost": [{
														"name": " PL",
														"typeId": "e356-c769-5920-6e14",
														"value": "0.0"
													}, {
														"name": "CP",
														"typeId": "2d3b-b544-ad49-fb75",
														"value": "0.0"
													}, {
														"name": "pts",
														"typeId": "points",
														"value": "0.0"
													}]
												}
											}
										},
										"costs": {
											"cost": [{
												"name": " PL",
												"typeId": "e356-c769-5920-6e14",
												"value": "0.0"
											}, {
												"name": "pts",
												"typeId": "points",
												"value": "0.0"
											}, {
												"name": "CP",
												"typeId": "2d3b-b544-ad49-fb75",
												"value": "0.0"
											}]
										}
									}]
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "22.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "f965-39a5-e790-24cc",
								"name": "Psyk-out Grenade",
								"entryId": "0244-9f38-1f40-4689::1dcc-a8a7-2052-3609::37bc-bbf1-18fd-7294",
								"number": "1",
								"type": "upgrade",
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "10ae-3251-67bf-0acf",
								"name": "Frag & Krak grenades",
								"entryId": "0244-9f38-1f40-4689::6f18-42b7-9b30-140e::cddf-945e-1335-e681",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": [{
										"id": "0244-9f38-1f40-4689::6f18-42b7-9b30-140e::61a4-e2d3-522d-c838::fdd8-1a5f-5722-d6ee",
										"name": "Frag grenades",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "6\""
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Grenade D6"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "3"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "0"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "1"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410",
												"$t": "Blast."
											}]
										}
									}, {
										"id": "0244-9f38-1f40-4689::6f18-42b7-9b30-140e::b250-1f2e-4904-0eb4::3bf6-b4f7-6b2f-bb7b",
										"name": "Krak grenades",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "6\""
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Grenade 1"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "6"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "-1"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "D3"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410",
												"$t": "-"
											}]
										}
									}]
								},
								"costs": {
									"cost": [{
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "73d4-b580-1616-2881",
								"name": "Brotherhood Psyker Power",
								"entryId": "0244-9f38-1f40-4689::05da-7b0a-b566-483b::d6ae-fe14-202c-6351",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "0244-9f38-1f40-4689::05da-7b0a-b566-483b::b0ba-2c21-3dac-4bbd",
										"name": "Symphonic Strike",
										"hidden": "false",
										"typeId": "ae70-4738-0161-bec0",
										"typeName": "Psychic Power",
										"characteristics": {
											"characteristic": [{
												"name": "Warp Charge",
												"typeId": "5ffd-b800-c317-532a",
												"$t": "6"
											}, {
												"name": "Range",
												"typeId": "fd64-cbc4-94de-24cc",
												"$t": "Self"
											}, {
												"name": "Details",
												"typeId": "ad96-dfa4-b4ed-656d",
												"$t": "Blessing: If manifested, until the start of your next Psychic phase, add 1 to the Attacks characteristic of models in this Psyker's unit."
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}]
								}
							}, {
								"id": "540c-a6ea-7985-4d27",
								"name": "Grey Knight (Sword)",
								"entryId": "0244-9f38-1f40-4689::9253-70bc-b620-f22f",
								"entryGroupId": "0244-9f38-1f40-4689::9939-4098-d186-7d33",
								"number": "4",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "0244-9f38-1f40-4689::83ae-30d3-cb23-4dea::1037-1f6f-bee5-b1ea",
										"name": "Grey Knight",
										"hidden": "false",
										"typeId": "800f-21d0-4387-c943",
										"typeName": "Unit",
										"characteristics": {
											"characteristic": [{
												"name": "M",
												"typeId": "0bdf-a96e-9e38-7779",
												"$t": "6\""
											}, {
												"name": "WS",
												"typeId": "e7f0-1278-0250-df0c",
												"$t": "3+"
											}, {
												"name": "BS",
												"typeId": "381b-eb28-74c3-df5f",
												"$t": "3+"
											}, {
												"name": "S",
												"typeId": "2218-aa3c-265f-2939",
												"$t": "4"
											}, {
												"name": "T",
												"typeId": "9c9f-9774-a358-3a39",
												"$t": "4"
											}, {
												"name": "W",
												"typeId": "f330-5e6e-4110-0978",
												"$t": "2"
											}, {
												"name": "A",
												"typeId": "13fc-b29b-31f2-ab9f",
												"$t": "3"
											}, {
												"name": "Ld",
												"typeId": "00ca-f8b8-876d-b705",
												"$t": "7"
											}, {
												"name": "Save",
												"typeId": "c0df-df94-abd7-e8d3",
												"$t": "3+"
											}]
										}
									}
								},
								"selections": {
									"selection": [{
										"id": "fc05-695d-2db6-94b8",
										"name": "Storm Bolter",
										"entryId": "0244-9f38-1f40-4689::d266-29e7-1cd3-506e::fded-edb8-1d1e-99a5",
										"number": "4",
										"type": "upgrade",
										"profiles": {
											"profile": {
												"id": "0244-9f38-1f40-4689::d266-29e7-1cd3-506e::f69c-aca7-7af0-704a::505e-a5aa-edab-6d5b",
												"name": "Storm bolter",
												"page": "",
												"hidden": "false",
												"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
												"typeName": "Weapon",
												"characteristics": {
													"characteristic": [{
														"name": "Range",
														"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
														"$t": "24\""
													}, {
														"name": "Type",
														"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
														"$t": "Rapid Fire 2"
													}, {
														"name": "S",
														"typeId": "59b1-319e-ec13-d466",
														"$t": "4"
													}, {
														"name": "AP",
														"typeId": "75aa-a838-b675-6484",
														"$t": "0"
													}, {
														"name": "D",
														"typeId": "ae8a-3137-d65b-4ca7",
														"$t": "1"
													}, {
														"name": "Abilities",
														"typeId": "837d-5e63-aeb7-1410",
														"$t": "-"
													}]
												}
											}
										},
										"costs": {
											"cost": [{
												"name": " PL",
												"typeId": "e356-c769-5920-6e14",
												"value": "0.0"
											}, {
												"name": "CP",
												"typeId": "2d3b-b544-ad49-fb75",
												"value": "0.0"
											}, {
												"name": "pts",
												"typeId": "points",
												"value": "0.0"
											}]
										}
									}, {
										"id": "9f2d-f49d-10e9-d771",
										"name": "Nemesis Force Sword",
										"entryId": "0244-9f38-1f40-4689::46a5-729c-5cdb-eec9::9b71-6e0f-e71f-eacc",
										"number": "4",
										"type": "upgrade",
										"profiles": {
											"profile": {
												"id": "0244-9f38-1f40-4689::46a5-729c-5cdb-eec9::0e2a-2983-22bf-6e39::ad6d-a483-9837-233a",
												"name": "Nemesis Force Sword",
												"hidden": "false",
												"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
												"typeName": "Weapon",
												"characteristics": {
													"characteristic": [{
														"name": "Range",
														"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
														"$t": "Melee"
													}, {
														"name": "Type",
														"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
														"$t": "Melee"
													}, {
														"name": "S",
														"typeId": "59b1-319e-ec13-d466",
														"$t": "+1"
													}, {
														"name": "AP",
														"typeId": "75aa-a838-b675-6484",
														"$t": "-3"
													}, {
														"name": "D",
														"typeId": "ae8a-3137-d65b-4ca7",
														"$t": "2"
													}, {
														"name": "Abilities",
														"typeId": "837d-5e63-aeb7-1410",
														"$t": "-"
													}]
												}
											}
										},
										"costs": {
											"cost": [{
												"name": " PL",
												"typeId": "e356-c769-5920-6e14",
												"value": "0.0"
											}, {
												"name": "CP",
												"typeId": "2d3b-b544-ad49-fb75",
												"value": "0.0"
											}, {
												"name": "pts",
												"typeId": "points",
												"value": "0.0"
											}]
										}
									}]
								},
								"costs": {
									"cost": [{
										"name": "pts",
										"typeId": "points",
										"value": "88.0"
									}, {
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}]
						},
						"costs": {
							"cost": [{
								"name": " PL",
								"typeId": "e356-c769-5920-6e14",
								"value": "6.0"
							}, {
								"name": "pts",
								"typeId": "points",
								"value": "0.0"
							}, {
								"name": "CP",
								"typeId": "2d3b-b544-ad49-fb75",
								"value": "0.0"
							}]
						},
						"categories": {
							"category": [{
								"id": "0c56-eff2-8da0-df8e",
								"name": "Faction: Grey Knights",
								"entryId": "31b6-b037-4c7a-f850",
								"primary": "false"
							}, {
								"id": "db25-45da-0c3a-c1bf",
								"name": "Infantry",
								"entryId": "3d52-fccf-10c0-3fae",
								"primary": "false"
							}, {
								"id": "a123-5e65-4060-3320",
								"name": "Psyker",
								"entryId": "e691-aad7-d21c-1023",
								"primary": "false"
							}, {
								"id": "e407-ad68-fa40-7e96",
								"name": "Troops",
								"entryId": "5d76b6f5-20ae-4d70-8f59-ade72a2add3a",
								"primary": "true"
							}, {
								"id": "cfb4-f1a1-ffca-61a5",
								"name": "Strike Squad",
								"entryId": "ed14-046b-12ea-4e1d",
								"primary": "false"
							}, {
								"id": "ee7f-421a-8138-f057",
								"name": "Faction: Imperium",
								"entryId": "84e2-9fa9-ebe6-1d18",
								"primary": "false"
							}, {
								"id": "6ff2-5f49-47b4-631a",
								"name": "<Brotherhood>",
								"entryId": "4a9f-dcb0-00e7-1fcc",
								"primary": "false"
							}, {
								"id": "c2da-49b8-246c-d126",
								"name": "Faction: Sanctic Astartes",
								"entryId": "bb46-a10a-ef92-c764",
								"primary": "false"
							}, {
								"id": "cff1-f7e5-8968-86da",
								"name": "Core",
								"entryId": "08f1-d244-eb44-7e01",
								"primary": "false"
							}, {
								"id": "38a5-b7dc-0c66-eb8e",
								"name": "Psyk-out Grenades",
								"entryId": "e08a-4705-eaae-e4c2",
								"primary": "false"
							}]
						}
					}, {
						"id": "ce8a-6b35-2769-5a69",
						"name": "Strike Squad",
						"entryId": "0244-9f38-1f40-4689::e012-a289-720d-a36c",
						"number": "1",
						"type": "unit",
						"rules": {
							"rule": [{
								"id": "0244-9f38-1f40-4689::f5b0-77e7-a206-5a81::a29c-ad1e-441b-2167",
								"name": "Teleport Strike",
								"hidden": "false",
								"description": "During deployment, you can set up this unit in a teleportarium chamber instead of placing it on the battlefield. At the end of any of your Movement phases this unit can teleport into battle - set it up anywhere on the battlefield that is more than 9\" away from any enemy models."
							}, {
								"id": "0244-9f38-1f40-4689::181a-c718-dfd7-7b6a::c046-073b-7a50-c436",
								"name": "Combat Squads",
								"hidden": "false",
								"description": "Before any models are deployed at the start of the game, if this unit contains 10 models it may be split into two units, each containing 5 models."
							}, {
								"id": "0244-9f38-1f40-4689::bd98-cc12-361d-aa19::a26c-3bc4-cd1f-10bf",
								"name": "Knights of Titan",
								"publicationId": "0cc2-3545-pubN112001",
								"page": "96",
								"hidden": "false",
								"description": "This unit has the following abilities: And They Shall Know No Fear, Bolter Discipline, Master of the Warp"
							}]
						},
						"profiles": {
							"profile": [{
								"id": "0244-9f38-1f40-4689::8b4a-a4c6-0a07-8e2a::100e-a5f5-4af4-8c40",
								"name": "Psyker",
								"hidden": "false",
								"typeId": "bc97-dea9-9e88-bb7d",
								"typeName": "Psyker",
								"characteristics": {
									"characteristic": [{
										"name": "Cast",
										"typeId": "5afb-9914-904b-d3b3",
										"$t": "1"
									}, {
										"name": "Deny",
										"typeId": "b5ac-9c20-5d5a-6f9b",
										"$t": "1"
									}, {
										"name": "Powers Known",
										"typeId": "69d7-b45e-00a2-7e46",
										"$t": "1"
									}, {
										"name": "Other",
										"typeId": "c2e2-f115-0003-5d7b",
										"$t": "Smite"
									}]
								}
							}, {
								"id": "0244-9f38-1f40-4689::2c54-c0bf-6bf7-b820::84d6-49a4-a9ff-162b",
								"name": "Smite",
								"hidden": "false",
								"typeId": "ae70-4738-0161-bec0",
								"typeName": "Psychic Power",
								"characteristics": {
									"characteristic": [{
										"name": "Warp Charge",
										"typeId": "5ffd-b800-c317-532a",
										"$t": "5"
									}, {
										"name": "Range",
										"typeId": "fd64-cbc4-94de-24cc",
										"$t": "18\""
									}, {
										"name": "Details",
										"typeId": "ad96-dfa4-b4ed-656d",
										"$t": "If manifested, the closest enemy unit within 18\" suffers D3 mortal wounds. If the result of the Psychic test was more than 10, the target suffers D6 mortal wounds instead."
									}]
								}
							}, {
								"id": "0244-9f38-1f40-4689::8fb3-d428-cdd4-c8d6::ded7-680d-4084-5679",
								"name": "Hammerhand",
								"hidden": "false",
								"typeId": "ae70-4738-0161-bec0",
								"typeName": "Psychic Power",
								"characteristics": {
									"characteristic": [{
										"name": "Warp Charge",
										"typeId": "5ffd-b800-c317-532a",
										"$t": "5"
									}, {
										"name": "Range",
										"typeId": "fd64-cbc4-94de-24cc",
										"$t": "12\""
									}, {
										"name": "Details",
										"typeId": "ad96-dfa4-b4ed-656d",
										"$t": "Blessing: If manifested, until the start of your next Psychic phase, each time a model in this Psyker's unit makes a melee attack, you can re-roll the wound roll."
									}]
								}
							}]
						},
						"selections": {
							"selection": [{
								"id": "a3f0-7ffc-ac97-5ca1",
								"name": "Brotherhood Psyker Power",
								"entryId": "0244-9f38-1f40-4689::05da-7b0a-b566-483b::d6ae-fe14-202c-6351",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "0244-9f38-1f40-4689::05da-7b0a-b566-483b::b0ba-2c21-3dac-4bbd",
										"name": "Symphonic Strike",
										"hidden": "false",
										"typeId": "ae70-4738-0161-bec0",
										"typeName": "Psychic Power",
										"characteristics": {
											"characteristic": [{
												"name": "Warp Charge",
												"typeId": "5ffd-b800-c317-532a",
												"$t": "6"
											}, {
												"name": "Range",
												"typeId": "fd64-cbc4-94de-24cc",
												"$t": "Self"
											}, {
												"name": "Details",
												"typeId": "ad96-dfa4-b4ed-656d",
												"$t": "Blessing: If manifested, until the start of your next Psychic phase, add 1 to the Attacks characteristic of models in this Psyker's unit."
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}]
								}
							}, {
								"id": "1849-f24b-de26-7c9d",
								"name": "Frag & Krak grenades",
								"entryId": "0244-9f38-1f40-4689::6f18-42b7-9b30-140e::cddf-945e-1335-e681",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": [{
										"id": "0244-9f38-1f40-4689::6f18-42b7-9b30-140e::61a4-e2d3-522d-c838::fdd8-1a5f-5722-d6ee",
										"name": "Frag grenades",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "6\""
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Grenade D6"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "3"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "0"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "1"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410",
												"$t": "Blast."
											}]
										}
									}, {
										"id": "0244-9f38-1f40-4689::6f18-42b7-9b30-140e::b250-1f2e-4904-0eb4::3bf6-b4f7-6b2f-bb7b",
										"name": "Krak grenades",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "6\""
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Grenade 1"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "6"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "-1"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "D3"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410",
												"$t": "-"
											}]
										}
									}]
								},
								"costs": {
									"cost": [{
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "24fc-23c1-5f57-a36d",
								"name": "Grey Knight Justicar",
								"entryId": "0244-9f38-1f40-4689::6bed-fae1-6fb0-5dbc::767b-e555-311f-cdbe",
								"number": "1",
								"type": "model",
								"profiles": {
									"profile": {
										"id": "0244-9f38-1f40-4689::6bed-fae1-6fb0-5dbc::9d07-0d02-74cf-b462",
										"name": "Grey Knight Justicar",
										"hidden": "false",
										"typeId": "800f-21d0-4387-c943",
										"typeName": "Unit",
										"characteristics": {
											"characteristic": [{
												"name": "M",
												"typeId": "0bdf-a96e-9e38-7779",
												"$t": "6\""
											}, {
												"name": "WS",
												"typeId": "e7f0-1278-0250-df0c",
												"$t": "3+"
											}, {
												"name": "BS",
												"typeId": "381b-eb28-74c3-df5f",
												"$t": "3+"
											}, {
												"name": "S",
												"typeId": "2218-aa3c-265f-2939",
												"$t": "4"
											}, {
												"name": "T",
												"typeId": "9c9f-9774-a358-3a39",
												"$t": "4"
											}, {
												"name": "W",
												"typeId": "f330-5e6e-4110-0978",
												"$t": "2"
											}, {
												"name": "A",
												"typeId": "13fc-b29b-31f2-ab9f",
												"$t": "4"
											}, {
												"name": "Ld",
												"typeId": "00ca-f8b8-876d-b705",
												"$t": "8"
											}, {
												"name": "Save",
												"typeId": "c0df-df94-abd7-e8d3",
												"$t": "3+"
											}]
										}
									}
								},
								"selections": {
									"selection": [{
										"id": "b33b-6b95-2600-db9d",
										"name": "Storm Bolter",
										"entryId": "0244-9f38-1f40-4689::6bed-fae1-6fb0-5dbc::da8e-18b3-b989-2026::fded-edb8-1d1e-99a5",
										"number": "1",
										"type": "upgrade",
										"profiles": {
											"profile": {
												"id": "0244-9f38-1f40-4689::6bed-fae1-6fb0-5dbc::da8e-18b3-b989-2026::f69c-aca7-7af0-704a::505e-a5aa-edab-6d5b",
												"name": "Storm bolter",
												"page": "",
												"hidden": "false",
												"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
												"typeName": "Weapon",
												"characteristics": {
													"characteristic": [{
														"name": "Range",
														"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
														"$t": "24\""
													}, {
														"name": "Type",
														"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
														"$t": "Rapid Fire 2"
													}, {
														"name": "S",
														"typeId": "59b1-319e-ec13-d466",
														"$t": "4"
													}, {
														"name": "AP",
														"typeId": "75aa-a838-b675-6484",
														"$t": "0"
													}, {
														"name": "D",
														"typeId": "ae8a-3137-d65b-4ca7",
														"$t": "1"
													}, {
														"name": "Abilities",
														"typeId": "837d-5e63-aeb7-1410",
														"$t": "-"
													}]
												}
											}
										},
										"costs": {
											"cost": [{
												"name": " PL",
												"typeId": "e356-c769-5920-6e14",
												"value": "0.0"
											}, {
												"name": "CP",
												"typeId": "2d3b-b544-ad49-fb75",
												"value": "0.0"
											}, {
												"name": "pts",
												"typeId": "points",
												"value": "0.0"
											}]
										}
									}, {
										"id": "d381-87fc-5ddb-0dbd",
										"name": "Nemesis Force Sword",
										"entryId": "0244-9f38-1f40-4689::6bed-fae1-6fb0-5dbc::fb52-5a60-2169-0454::fa60-c456-1d3f-4065",
										"entryGroupId": "0244-9f38-1f40-4689::6bed-fae1-6fb0-5dbc::fb52-5a60-2169-0454::2619-cbc9-7327-dc75",
										"number": "1",
										"type": "upgrade",
										"selections": {
											"selection": {
												"id": "442f-1dac-5045-179e",
												"name": "Nemesis Force Sword",
												"entryId": "0244-9f38-1f40-4689::6bed-fae1-6fb0-5dbc::fb52-5a60-2169-0454::2e71-4c1e-e4f1-00c7::9b71-6e0f-e71f-eacc",
												"number": "1",
												"type": "upgrade",
												"profiles": {
													"profile": {
														"id": "0244-9f38-1f40-4689::6bed-fae1-6fb0-5dbc::fb52-5a60-2169-0454::2e71-4c1e-e4f1-00c7::0e2a-2983-22bf-6e39::ad6d-a483-9837-233a",
														"name": "Nemesis Force Sword",
														"hidden": "false",
														"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
														"typeName": "Weapon",
														"characteristics": {
															"characteristic": [{
																"name": "Range",
																"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
																"$t": "Melee"
															}, {
																"name": "Type",
																"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
																"$t": "Melee"
															}, {
																"name": "S",
																"typeId": "59b1-319e-ec13-d466",
																"$t": "+1"
															}, {
																"name": "AP",
																"typeId": "75aa-a838-b675-6484",
																"$t": "-3"
															}, {
																"name": "D",
																"typeId": "ae8a-3137-d65b-4ca7",
																"$t": "2"
															}, {
																"name": "Abilities",
																"typeId": "837d-5e63-aeb7-1410",
																"$t": "-"
															}]
														}
													}
												},
												"costs": {
													"cost": [{
														"name": " PL",
														"typeId": "e356-c769-5920-6e14",
														"value": "0.0"
													}, {
														"name": "CP",
														"typeId": "2d3b-b544-ad49-fb75",
														"value": "0.0"
													}, {
														"name": "pts",
														"typeId": "points",
														"value": "0.0"
													}]
												}
											}
										},
										"costs": {
											"cost": [{
												"name": " PL",
												"typeId": "e356-c769-5920-6e14",
												"value": "0.0"
											}, {
												"name": "pts",
												"typeId": "points",
												"value": "0.0"
											}, {
												"name": "CP",
												"typeId": "2d3b-b544-ad49-fb75",
												"value": "0.0"
											}]
										}
									}]
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "22.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "5e86-8ba7-3175-100d",
								"name": "Psyk-out Grenade",
								"entryId": "0244-9f38-1f40-4689::1dcc-a8a7-2052-3609::37bc-bbf1-18fd-7294",
								"number": "1",
								"type": "upgrade",
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "6c94-fbce-46fd-cda9",
								"name": "Grey Knight (Sword)",
								"entryId": "0244-9f38-1f40-4689::9253-70bc-b620-f22f",
								"entryGroupId": "0244-9f38-1f40-4689::9939-4098-d186-7d33",
								"number": "4",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "0244-9f38-1f40-4689::83ae-30d3-cb23-4dea::1037-1f6f-bee5-b1ea",
										"name": "Grey Knight",
										"hidden": "false",
										"typeId": "800f-21d0-4387-c943",
										"typeName": "Unit",
										"characteristics": {
											"characteristic": [{
												"name": "M",
												"typeId": "0bdf-a96e-9e38-7779",
												"$t": "6\""
											}, {
												"name": "WS",
												"typeId": "e7f0-1278-0250-df0c",
												"$t": "3+"
											}, {
												"name": "BS",
												"typeId": "381b-eb28-74c3-df5f",
												"$t": "3+"
											}, {
												"name": "S",
												"typeId": "2218-aa3c-265f-2939",
												"$t": "4"
											}, {
												"name": "T",
												"typeId": "9c9f-9774-a358-3a39",
												"$t": "4"
											}, {
												"name": "W",
												"typeId": "f330-5e6e-4110-0978",
												"$t": "2"
											}, {
												"name": "A",
												"typeId": "13fc-b29b-31f2-ab9f",
												"$t": "3"
											}, {
												"name": "Ld",
												"typeId": "00ca-f8b8-876d-b705",
												"$t": "7"
											}, {
												"name": "Save",
												"typeId": "c0df-df94-abd7-e8d3",
												"$t": "3+"
											}]
										}
									}
								},
								"selections": {
									"selection": [{
										"id": "dbe9-2303-f27a-324c",
										"name": "Storm Bolter",
										"entryId": "0244-9f38-1f40-4689::d266-29e7-1cd3-506e::fded-edb8-1d1e-99a5",
										"number": "4",
										"type": "upgrade",
										"profiles": {
											"profile": {
												"id": "0244-9f38-1f40-4689::d266-29e7-1cd3-506e::f69c-aca7-7af0-704a::505e-a5aa-edab-6d5b",
												"name": "Storm bolter",
												"page": "",
												"hidden": "false",
												"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
												"typeName": "Weapon",
												"characteristics": {
													"characteristic": [{
														"name": "Range",
														"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
														"$t": "24\""
													}, {
														"name": "Type",
														"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
														"$t": "Rapid Fire 2"
													}, {
														"name": "S",
														"typeId": "59b1-319e-ec13-d466",
														"$t": "4"
													}, {
														"name": "AP",
														"typeId": "75aa-a838-b675-6484",
														"$t": "0"
													}, {
														"name": "D",
														"typeId": "ae8a-3137-d65b-4ca7",
														"$t": "1"
													}, {
														"name": "Abilities",
														"typeId": "837d-5e63-aeb7-1410",
														"$t": "-"
													}]
												}
											}
										},
										"costs": {
											"cost": [{
												"name": " PL",
												"typeId": "e356-c769-5920-6e14",
												"value": "0.0"
											}, {
												"name": "CP",
												"typeId": "2d3b-b544-ad49-fb75",
												"value": "0.0"
											}, {
												"name": "pts",
												"typeId": "points",
												"value": "0.0"
											}]
										}
									}, {
										"id": "08bd-0509-4dae-a697",
										"name": "Nemesis Force Sword",
										"entryId": "0244-9f38-1f40-4689::46a5-729c-5cdb-eec9::9b71-6e0f-e71f-eacc",
										"number": "4",
										"type": "upgrade",
										"profiles": {
											"profile": {
												"id": "0244-9f38-1f40-4689::46a5-729c-5cdb-eec9::0e2a-2983-22bf-6e39::ad6d-a483-9837-233a",
												"name": "Nemesis Force Sword",
												"hidden": "false",
												"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
												"typeName": "Weapon",
												"characteristics": {
													"characteristic": [{
														"name": "Range",
														"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
														"$t": "Melee"
													}, {
														"name": "Type",
														"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
														"$t": "Melee"
													}, {
														"name": "S",
														"typeId": "59b1-319e-ec13-d466",
														"$t": "+1"
													}, {
														"name": "AP",
														"typeId": "75aa-a838-b675-6484",
														"$t": "-3"
													}, {
														"name": "D",
														"typeId": "ae8a-3137-d65b-4ca7",
														"$t": "2"
													}, {
														"name": "Abilities",
														"typeId": "837d-5e63-aeb7-1410",
														"$t": "-"
													}]
												}
											}
										},
										"costs": {
											"cost": [{
												"name": " PL",
												"typeId": "e356-c769-5920-6e14",
												"value": "0.0"
											}, {
												"name": "CP",
												"typeId": "2d3b-b544-ad49-fb75",
												"value": "0.0"
											}, {
												"name": "pts",
												"typeId": "points",
												"value": "0.0"
											}]
										}
									}]
								},
								"costs": {
									"cost": [{
										"name": "pts",
										"typeId": "points",
										"value": "88.0"
									}, {
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}]
						},
						"costs": {
							"cost": [{
								"name": " PL",
								"typeId": "e356-c769-5920-6e14",
								"value": "6.0"
							}, {
								"name": "pts",
								"typeId": "points",
								"value": "0.0"
							}, {
								"name": "CP",
								"typeId": "2d3b-b544-ad49-fb75",
								"value": "0.0"
							}]
						},
						"categories": {
							"category": [{
								"id": "2ae0-47a6-a9fd-cf6a",
								"name": "Faction: Grey Knights",
								"entryId": "31b6-b037-4c7a-f850",
								"primary": "false"
							}, {
								"id": "7c6c-adea-33fc-ee52",
								"name": "Infantry",
								"entryId": "3d52-fccf-10c0-3fae",
								"primary": "false"
							}, {
								"id": "47b6-125a-5c1e-8b23",
								"name": "Psyker",
								"entryId": "e691-aad7-d21c-1023",
								"primary": "false"
							}, {
								"id": "75ee-4019-2b84-3467",
								"name": "Troops",
								"entryId": "5d76b6f5-20ae-4d70-8f59-ade72a2add3a",
								"primary": "true"
							}, {
								"id": "d87a-9b62-8a9f-23f8",
								"name": "Strike Squad",
								"entryId": "ed14-046b-12ea-4e1d",
								"primary": "false"
							}, {
								"id": "5b62-6b77-5458-bb74",
								"name": "Faction: Imperium",
								"entryId": "84e2-9fa9-ebe6-1d18",
								"primary": "false"
							}, {
								"id": "b446-b2bf-8c93-82aa",
								"name": "<Brotherhood>",
								"entryId": "4a9f-dcb0-00e7-1fcc",
								"primary": "false"
							}, {
								"id": "d36b-f52d-eddd-c943",
								"name": "Faction: Sanctic Astartes",
								"entryId": "bb46-a10a-ef92-c764",
								"primary": "false"
							}, {
								"id": "6f56-507a-86c9-cc09",
								"name": "Core",
								"entryId": "08f1-d244-eb44-7e01",
								"primary": "false"
							}, {
								"id": "c4c6-ff5c-6c9a-8ef4",
								"name": "Psyk-out Grenades",
								"entryId": "e08a-4705-eaae-e4c2",
								"primary": "false"
							}]
						}
					}, {
						"id": "1b8a-b429-02d3-0be4",
						"name": "Purgation Squad",
						"entryId": "4f7a-efc4-0181-c9f4::45ea-60a2-7f7e-06c7",
						"number": "1",
						"type": "unit",
						"rules": {
							"rule": [{
								"id": "4f7a-efc4-0181-c9f4::3b97-ae87-bf4b-7ea7::c046-073b-7a50-c436",
								"name": "Combat Squads",
								"hidden": "false",
								"description": "Before any models are deployed at the start of the game, if this unit contains 10 models it may be split into two units, each containing 5 models."
							}, {
								"id": "4f7a-efc4-0181-c9f4::57ea-176f-1d28-8f6c::a26c-3bc4-cd1f-10bf",
								"name": "Knights of Titan",
								"publicationId": "0cc2-3545-pubN112001",
								"page": "96",
								"hidden": "false",
								"description": "This unit has the following abilities: And They Shall Know No Fear, Bolter Discipline, Master of the Warp"
							}, {
								"id": "4f7a-efc4-0181-c9f4::c10a-2591-e546-e452::a29c-ad1e-441b-2167",
								"name": "Teleport Strike",
								"hidden": "false",
								"description": "During deployment, you can set up this unit in a teleportarium chamber instead of placing it on the battlefield. At the end of any of your Movement phases this unit can teleport into battle - set it up anywhere on the battlefield that is more than 9\" away from any enemy models."
							}]
						},
						"profiles": {
							"profile": [{
								"id": "4f7a-efc4-0181-c9f4::c89f-ff34-66db-239d::100e-a5f5-4af4-8c40",
								"name": "Psyker",
								"hidden": "false",
								"typeId": "bc97-dea9-9e88-bb7d",
								"typeName": "Psyker",
								"characteristics": {
									"characteristic": [{
										"name": "Cast",
										"typeId": "5afb-9914-904b-d3b3",
										"$t": "1"
									}, {
										"name": "Deny",
										"typeId": "b5ac-9c20-5d5a-6f9b",
										"$t": "1"
									}, {
										"name": "Powers Known",
										"typeId": "69d7-b45e-00a2-7e46",
										"$t": "1"
									}, {
										"name": "Other",
										"typeId": "c2e2-f115-0003-5d7b",
										"$t": "Smite"
									}]
								}
							}, {
								"id": "4f7a-efc4-0181-c9f4::e396-cf42-a7b4-a7c3::84d6-49a4-a9ff-162b",
								"name": "Smite",
								"hidden": "false",
								"typeId": "ae70-4738-0161-bec0",
								"typeName": "Psychic Power",
								"characteristics": {
									"characteristic": [{
										"name": "Warp Charge",
										"typeId": "5ffd-b800-c317-532a",
										"$t": "5"
									}, {
										"name": "Range",
										"typeId": "fd64-cbc4-94de-24cc",
										"$t": "18\""
									}, {
										"name": "Details",
										"typeId": "ad96-dfa4-b4ed-656d",
										"$t": "If manifested, the closest enemy unit within 18\" suffers D3 mortal wounds. If the result of the Psychic test was more than 10, the target suffers D6 mortal wounds instead."
									}]
								}
							}, {
								"id": "4f7a-efc4-0181-c9f4::5e26-3714-639d-2a8d::0bfb-85df-d64f-c8c1",
								"name": "Astral Aim",
								"hidden": "false",
								"typeId": "ae70-4738-0161-bec0",
								"typeName": "Psychic Power",
								"characteristics": {
									"characteristic": [{
										"name": "Warp Charge",
										"typeId": "5ffd-b800-c317-532a",
										"$t": "6"
									}, {
										"name": "Range",
										"typeId": "fd64-cbc4-94de-24cc",
										"$t": "-"
									}, {
										"name": "Details",
										"typeId": "ad96-dfa4-b4ed-656d",
										"$t": "Blessing: If manifested, until the start of the next Psychic phase:\n\n- Each time this Psykers unit is selected to shoot, you can re-roll one hit roll when resolving that units attacks\n- Each time a model in this Psyker's unit makes a ranged attack, the targest does not receive the benefits of cover against that attack"
									}]
								}
							}]
						},
						"selections": {
							"selection": [{
								"id": "dcd6-19d1-cb0a-30f0",
								"name": "Brotherhood Psyker Power",
								"entryId": "4f7a-efc4-0181-c9f4::6ea9-2d38-7749-20f9::d6ae-fe14-202c-6351",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "4f7a-efc4-0181-c9f4::6ea9-2d38-7749-20f9::b0ba-2c21-3dac-4bbd",
										"name": "Symphonic Strike",
										"hidden": "false",
										"typeId": "ae70-4738-0161-bec0",
										"typeName": "Psychic Power",
										"characteristics": {
											"characteristic": [{
												"name": "Warp Charge",
												"typeId": "5ffd-b800-c317-532a",
												"$t": "6"
											}, {
												"name": "Range",
												"typeId": "fd64-cbc4-94de-24cc",
												"$t": "Self"
											}, {
												"name": "Details",
												"typeId": "ad96-dfa4-b4ed-656d",
												"$t": "Blessing: If manifested, until the start of your next Psychic phase, add 1 to the Attacks characteristic of models in this Psyker's unit."
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}]
								}
							}, {
								"id": "9f9f-5cd8-3748-1119",
								"name": "Frag & Krak grenades",
								"entryId": "4f7a-efc4-0181-c9f4::5a68-c3d1-2d22-9645::cddf-945e-1335-e681",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": [{
										"id": "4f7a-efc4-0181-c9f4::5a68-c3d1-2d22-9645::61a4-e2d3-522d-c838::fdd8-1a5f-5722-d6ee",
										"name": "Frag grenades",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "6\""
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Grenade D6"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "3"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "0"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "1"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410",
												"$t": "Blast."
											}]
										}
									}, {
										"id": "4f7a-efc4-0181-c9f4::5a68-c3d1-2d22-9645::b250-1f2e-4904-0eb4::3bf6-b4f7-6b2f-bb7b",
										"name": "Krak grenades",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "6\""
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Grenade 1"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "6"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "-1"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "D3"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410",
												"$t": "-"
											}]
										}
									}]
								},
								"costs": {
									"cost": [{
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "501f-59b4-9bef-10b7",
								"name": "Psyk-out Grenade",
								"entryId": "4f7a-efc4-0181-c9f4::af6c-a39f-bb8d-67c3::37bc-bbf1-18fd-7294",
								"number": "1",
								"type": "upgrade",
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "3b26-8207-e60c-1a8a",
								"name": "Purgator Justicar",
								"entryId": "4f7a-efc4-0181-c9f4::0590-9810-cf09-ad4e::64dc-131d-20be-6199",
								"number": "1",
								"type": "model",
								"profiles": {
									"profile": {
										"id": "4f7a-efc4-0181-c9f4::0590-9810-cf09-ad4e::8654-0dec-c8ec-a904",
										"name": "Purgator Justicar",
										"hidden": "false",
										"typeId": "800f-21d0-4387-c943",
										"typeName": "Unit",
										"characteristics": {
											"characteristic": [{
												"name": "M",
												"typeId": "0bdf-a96e-9e38-7779",
												"$t": "6\""
											}, {
												"name": "WS",
												"typeId": "e7f0-1278-0250-df0c",
												"$t": "3+"
											}, {
												"name": "BS",
												"typeId": "381b-eb28-74c3-df5f",
												"$t": "3+"
											}, {
												"name": "S",
												"typeId": "2218-aa3c-265f-2939",
												"$t": "4"
											}, {
												"name": "T",
												"typeId": "9c9f-9774-a358-3a39",
												"$t": "4"
											}, {
												"name": "W",
												"typeId": "f330-5e6e-4110-0978",
												"$t": "2"
											}, {
												"name": "A",
												"typeId": "13fc-b29b-31f2-ab9f",
												"$t": "4"
											}, {
												"name": "Ld",
												"typeId": "00ca-f8b8-876d-b705",
												"$t": "8"
											}, {
												"name": "Save",
												"typeId": "c0df-df94-abd7-e8d3",
												"$t": "3+"
											}]
										}
									}
								},
								"selections": {
									"selection": [{
										"id": "a129-d334-800f-12fa",
										"name": "Storm Bolter",
										"entryId": "4f7a-efc4-0181-c9f4::0590-9810-cf09-ad4e::0911-c3a5-c267-6645::fded-edb8-1d1e-99a5",
										"number": "1",
										"type": "upgrade",
										"profiles": {
											"profile": {
												"id": "4f7a-efc4-0181-c9f4::0590-9810-cf09-ad4e::0911-c3a5-c267-6645::f69c-aca7-7af0-704a::505e-a5aa-edab-6d5b",
												"name": "Storm bolter",
												"page": "",
												"hidden": "false",
												"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
												"typeName": "Weapon",
												"characteristics": {
													"characteristic": [{
														"name": "Range",
														"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
														"$t": "24\""
													}, {
														"name": "Type",
														"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
														"$t": "Rapid Fire 2"
													}, {
														"name": "S",
														"typeId": "59b1-319e-ec13-d466",
														"$t": "4"
													}, {
														"name": "AP",
														"typeId": "75aa-a838-b675-6484",
														"$t": "0"
													}, {
														"name": "D",
														"typeId": "ae8a-3137-d65b-4ca7",
														"$t": "1"
													}, {
														"name": "Abilities",
														"typeId": "837d-5e63-aeb7-1410",
														"$t": "-"
													}]
												}
											}
										},
										"costs": {
											"cost": [{
												"name": " PL",
												"typeId": "e356-c769-5920-6e14",
												"value": "0.0"
											}, {
												"name": "CP",
												"typeId": "2d3b-b544-ad49-fb75",
												"value": "0.0"
											}, {
												"name": "pts",
												"typeId": "points",
												"value": "0.0"
											}]
										}
									}, {
										"id": "7fb1-c080-7ac5-3e48",
										"name": "Nemesis Force Sword",
										"entryId": "4f7a-efc4-0181-c9f4::0590-9810-cf09-ad4e::9c01-c0a5-7c35-de48::fa60-c456-1d3f-4065",
										"entryGroupId": "4f7a-efc4-0181-c9f4::0590-9810-cf09-ad4e::9c01-c0a5-7c35-de48::2619-cbc9-7327-dc75",
										"number": "1",
										"type": "upgrade",
										"selections": {
											"selection": {
												"id": "6d9d-e332-a191-e207",
												"name": "Nemesis Force Sword",
												"entryId": "4f7a-efc4-0181-c9f4::0590-9810-cf09-ad4e::9c01-c0a5-7c35-de48::2e71-4c1e-e4f1-00c7::9b71-6e0f-e71f-eacc",
												"number": "1",
												"type": "upgrade",
												"profiles": {
													"profile": {
														"id": "4f7a-efc4-0181-c9f4::0590-9810-cf09-ad4e::9c01-c0a5-7c35-de48::2e71-4c1e-e4f1-00c7::0e2a-2983-22bf-6e39::ad6d-a483-9837-233a",
														"name": "Nemesis Force Sword",
														"hidden": "false",
														"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
														"typeName": "Weapon",
														"characteristics": {
															"characteristic": [{
																"name": "Range",
																"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
																"$t": "Melee"
															}, {
																"name": "Type",
																"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
																"$t": "Melee"
															}, {
																"name": "S",
																"typeId": "59b1-319e-ec13-d466",
																"$t": "+1"
															}, {
																"name": "AP",
																"typeId": "75aa-a838-b675-6484",
																"$t": "-3"
															}, {
																"name": "D",
																"typeId": "ae8a-3137-d65b-4ca7",
																"$t": "2"
															}, {
																"name": "Abilities",
																"typeId": "837d-5e63-aeb7-1410",
																"$t": "-"
															}]
														}
													}
												},
												"costs": {
													"cost": [{
														"name": " PL",
														"typeId": "e356-c769-5920-6e14",
														"value": "0.0"
													}, {
														"name": "CP",
														"typeId": "2d3b-b544-ad49-fb75",
														"value": "0.0"
													}, {
														"name": "pts",
														"typeId": "points",
														"value": "0.0"
													}]
												}
											}
										},
										"costs": {
											"cost": [{
												"name": " PL",
												"typeId": "e356-c769-5920-6e14",
												"value": "0.0"
											}, {
												"name": "pts",
												"typeId": "points",
												"value": "0.0"
											}, {
												"name": "CP",
												"typeId": "2d3b-b544-ad49-fb75",
												"value": "0.0"
											}]
										}
									}]
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "22.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "a733-315c-8c20-ad2c",
								"name": "Purgator (Psycannon)",
								"entryId": "4f7a-efc4-0181-c9f4::536e-4fa0-049e-412f",
								"entryGroupId": "4f7a-efc4-0181-c9f4::252a-7edd-51cf-d947",
								"number": "4",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "4f7a-efc4-0181-c9f4::6571-2119-1d98-dd82::4405-7328-bf03-8185",
										"name": "Purgator",
										"hidden": "false",
										"typeId": "800f-21d0-4387-c943",
										"typeName": "Unit",
										"characteristics": {
											"characteristic": [{
												"name": "M",
												"typeId": "0bdf-a96e-9e38-7779",
												"$t": "6\""
											}, {
												"name": "WS",
												"typeId": "e7f0-1278-0250-df0c",
												"$t": "3+"
											}, {
												"name": "BS",
												"typeId": "381b-eb28-74c3-df5f",
												"$t": "3+"
											}, {
												"name": "S",
												"typeId": "2218-aa3c-265f-2939",
												"$t": "4"
											}, {
												"name": "T",
												"typeId": "9c9f-9774-a358-3a39",
												"$t": "4"
											}, {
												"name": "W",
												"typeId": "f330-5e6e-4110-0978",
												"$t": "2"
											}, {
												"name": "A",
												"typeId": "13fc-b29b-31f2-ab9f",
												"$t": "3"
											}, {
												"name": "Ld",
												"typeId": "00ca-f8b8-876d-b705",
												"$t": "7"
											}, {
												"name": "Save",
												"typeId": "c0df-df94-abd7-e8d3",
												"$t": "3+"
											}]
										}
									}
								},
								"selections": {
									"selection": {
										"id": "1ae9-2f62-ad94-5802",
										"name": "Psycannon",
										"entryId": "4f7a-efc4-0181-c9f4::48de-fa11-e066-b231::c047-6362-b1bb-1ffd",
										"number": "4",
										"type": "upgrade",
										"profiles": {
											"profile": {
												"id": "4f7a-efc4-0181-c9f4::48de-fa11-e066-b231::d050-b028-8a5a-5402::a63a-ec88-3dc0-f3cd",
												"name": "Psycannon",
												"hidden": "false",
												"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
												"typeName": "Weapon",
												"characteristics": {
													"characteristic": [{
														"name": "Range",
														"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
														"$t": "24\""
													}, {
														"name": "Type",
														"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
														"$t": "Heavy 3"
													}, {
														"name": "S",
														"typeId": "59b1-319e-ec13-d466",
														"$t": "7"
													}, {
														"name": "AP",
														"typeId": "75aa-a838-b675-6484",
														"$t": "-1"
													}, {
														"name": "D",
														"typeId": "ae8a-3137-d65b-4ca7",
														"$t": "2"
													}, {
														"name": "Abilities",
														"typeId": "837d-5e63-aeb7-1410",
														"$t": "-"
													}]
												}
											}
										},
										"costs": {
											"cost": [{
												"name": " PL",
												"typeId": "e356-c769-5920-6e14",
												"value": "0.0"
											}, {
												"name": "pts",
												"typeId": "points",
												"value": "20.0"
											}, {
												"name": "CP",
												"typeId": "2d3b-b544-ad49-fb75",
												"value": "0.0"
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": "pts",
										"typeId": "points",
										"value": "88.0"
									}, {
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}]
						},
						"costs": {
							"cost": [{
								"name": " PL",
								"typeId": "e356-c769-5920-6e14",
								"value": "7.0"
							}, {
								"name": "pts",
								"typeId": "points",
								"value": "0.0"
							}, {
								"name": "CP",
								"typeId": "2d3b-b544-ad49-fb75",
								"value": "0.0"
							}]
						},
						"categories": {
							"category": [{
								"id": "25bb-a00e-31dc-b138",
								"name": "Faction: Grey Knights",
								"entryId": "31b6-b037-4c7a-f850",
								"primary": "false"
							}, {
								"id": "17e3-7c5f-5b3d-6eec",
								"name": "Heavy Support",
								"entryId": "abf5fd55-9ac7-4263-8bc1-a9fb0a8fa6a6",
								"primary": "true"
							}, {
								"id": "869e-3d93-373c-05f9",
								"name": "Infantry",
								"entryId": "3d52-fccf-10c0-3fae",
								"primary": "false"
							}, {
								"id": "3be7-4d4b-7477-68c7",
								"name": "Psyker",
								"entryId": "e691-aad7-d21c-1023",
								"primary": "false"
							}, {
								"id": "4f10-0ec9-7ae1-d280",
								"name": "Purgation Squad",
								"entryId": "d05b-e3e3-0b58-424a",
								"primary": "false"
							}, {
								"id": "35d5-c4f2-bc18-94c9",
								"name": "Faction: Imperium",
								"entryId": "84e2-9fa9-ebe6-1d18",
								"primary": "false"
							}, {
								"id": "6ce2-924f-f289-a05d",
								"name": "<Brotherhood>",
								"entryId": "4a9f-dcb0-00e7-1fcc",
								"primary": "false"
							}, {
								"id": "5dcb-7cd4-1ce0-8695",
								"name": "Faction: Sanctic Astartes",
								"entryId": "bb46-a10a-ef92-c764",
								"primary": "false"
							}, {
								"id": "f301-b798-1eb2-545a",
								"name": "Psyk-out Grenades",
								"entryId": "e08a-4705-eaae-e4c2",
								"primary": "false"
							}, {
								"id": "b39c-e5ae-77de-e52e",
								"name": "Core",
								"entryId": "08f1-d244-eb44-7e01",
								"primary": "false"
							}]
						}
					}, {
						"id": "72d5-4e65-1879-8789",
						"name": "Brotherhood Ancient",
						"entryId": "5e19-e5b2-201f-b30d::0db5-e1aa-6692-1f98",
						"number": "1",
						"type": "model",
						"rules": {
							"rule": [{
								"id": "5e19-e5b2-201f-b30d::1171-18a5-9d8e-8d16::a29c-ad1e-441b-2167",
								"name": "Teleport Strike",
								"hidden": "false",
								"description": "During deployment, you can set up this unit in a teleportarium chamber instead of placing it on the battlefield. At the end of any of your Movement phases this unit can teleport into battle - set it up anywhere on the battlefield that is more than 9\" away from any enemy models."
							}, {
								"id": "5e19-e5b2-201f-b30d::59f4-a8c8-961c-fd28::b6bb-8129-1b30-4d52",
								"name": "Crux Terminatus",
								"hidden": "false",
								"description": "All models in this unit have a 5+ invulnerable save."
							}, {
								"id": "5e19-e5b2-201f-b30d::5ab7-c1ff-0dc5-99e1::a26c-3bc4-cd1f-10bf",
								"name": "Knights of Titan",
								"publicationId": "0cc2-3545-pubN112001",
								"page": "96",
								"hidden": "false",
								"description": "This unit has the following abilities: And They Shall Know No Fear, Bolter Discipline, Master of the Warp"
							}]
						},
						"profiles": {
							"profile": [{
								"id": "5e19-e5b2-201f-b30d::2fef-f058-37b4-6a43",
								"name": "Brotherhood Ancient",
								"hidden": "false",
								"typeId": "800f-21d0-4387-c943",
								"typeName": "Unit",
								"characteristics": {
									"characteristic": [{
										"name": "M",
										"typeId": "0bdf-a96e-9e38-7779",
										"$t": "5\""
									}, {
										"name": "WS",
										"typeId": "e7f0-1278-0250-df0c",
										"$t": "3+"
									}, {
										"name": "BS",
										"typeId": "381b-eb28-74c3-df5f",
										"$t": "3+"
									}, {
										"name": "S",
										"typeId": "2218-aa3c-265f-2939",
										"$t": "4"
									}, {
										"name": "T",
										"typeId": "9c9f-9774-a358-3a39",
										"$t": "4"
									}, {
										"name": "W",
										"typeId": "f330-5e6e-4110-0978",
										"$t": "5"
									}, {
										"name": "A",
										"typeId": "13fc-b29b-31f2-ab9f",
										"$t": "4"
									}, {
										"name": "Ld",
										"typeId": "00ca-f8b8-876d-b705",
										"$t": "8"
									}, {
										"name": "Save",
										"typeId": "c0df-df94-abd7-e8d3",
										"$t": "2+"
									}]
								}
							}, {
								"id": "5e19-e5b2-201f-b30d::d65c-b420-c2a6-f1c6::100e-a5f5-4af4-8c40",
								"name": "Psyker",
								"hidden": "false",
								"typeId": "bc97-dea9-9e88-bb7d",
								"typeName": "Psyker",
								"characteristics": {
									"characteristic": [{
										"name": "Cast",
										"typeId": "5afb-9914-904b-d3b3",
										"$t": "1"
									}, {
										"name": "Deny",
										"typeId": "b5ac-9c20-5d5a-6f9b",
										"$t": "1"
									}, {
										"name": "Powers Known",
										"typeId": "69d7-b45e-00a2-7e46",
										"$t": "1"
									}, {
										"name": "Other",
										"typeId": "c2e2-f115-0003-5d7b",
										"$t": "Smite"
									}]
								}
							}, {
								"id": "5e19-e5b2-201f-b30d::d14b-6a67-a036-ef53::84d6-49a4-a9ff-162b",
								"name": "Smite",
								"hidden": "false",
								"typeId": "ae70-4738-0161-bec0",
								"typeName": "Psychic Power",
								"characteristics": {
									"characteristic": [{
										"name": "Warp Charge",
										"typeId": "5ffd-b800-c317-532a",
										"$t": "5"
									}, {
										"name": "Range",
										"typeId": "fd64-cbc4-94de-24cc",
										"$t": "18\""
									}, {
										"name": "Details",
										"typeId": "ad96-dfa4-b4ed-656d",
										"$t": "If manifested, the closest enemy unit within 18\" suffers D3 mortal wounds. If the result of the Psychic test was more than 10, the target suffers D6 mortal wounds instead."
									}]
								}
							}]
						},
						"selections": {
							"selection": [{
								"id": "d811-e25a-e330-92bf",
								"name": "Brotherhood Psyker Power",
								"entryId": "5e19-e5b2-201f-b30d::025b-737c-f685-66b3::d6ae-fe14-202c-6351",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "5e19-e5b2-201f-b30d::025b-737c-f685-66b3::b0ba-2c21-3dac-4bbd",
										"name": "Symphonic Strike",
										"hidden": "false",
										"typeId": "ae70-4738-0161-bec0",
										"typeName": "Psychic Power",
										"characteristics": {
											"characteristic": [{
												"name": "Warp Charge",
												"typeId": "5ffd-b800-c317-532a",
												"$t": "6"
											}, {
												"name": "Range",
												"typeId": "fd64-cbc4-94de-24cc",
												"$t": "Self"
											}, {
												"name": "Details",
												"typeId": "ad96-dfa4-b4ed-656d",
												"$t": "Blessing: If manifested, until the start of your next Psychic phase, add 1 to the Attacks characteristic of models in this Psyker's unit."
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}]
								}
							}, {
								"id": "9e51-5d38-1731-1ac2",
								"name": "Frag & Krak grenades",
								"entryId": "5e19-e5b2-201f-b30d::1e73-4cc8-7503-5384::cddf-945e-1335-e681",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": [{
										"id": "5e19-e5b2-201f-b30d::1e73-4cc8-7503-5384::61a4-e2d3-522d-c838::fdd8-1a5f-5722-d6ee",
										"name": "Frag grenades",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "6\""
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Grenade D6"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "3"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "0"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "1"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410",
												"$t": "Blast."
											}]
										}
									}, {
										"id": "5e19-e5b2-201f-b30d::1e73-4cc8-7503-5384::b250-1f2e-4904-0eb4::3bf6-b4f7-6b2f-bb7b",
										"name": "Krak grenades",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "6\""
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Grenade 1"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "6"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "-1"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "D3"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410",
												"$t": "-"
											}]
										}
									}]
								},
								"costs": {
									"cost": [{
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "0ac8-087d-b8b7-b791",
								"name": "Psyk-out Grenade",
								"entryId": "5e19-e5b2-201f-b30d::3ec2-4623-e117-4817::37bc-bbf1-18fd-7294",
								"number": "1",
								"type": "upgrade",
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "2a6d-1d7e-6ceb-2bf2",
								"name": "Sacred Banner (Aura)",
								"entryId": "5e19-e5b2-201f-b30d::b03e-6944-0b63-2a5e::7673-0a94-2ef7-6e96",
								"number": "1",
								"type": "upgrade",
								"rules": {
									"rule": {
										"id": "5e19-e5b2-201f-b30d::b03e-6944-0b63-2a5e::6a0c-1eae-622d-2837",
										"name": "Sacred Banner (Aura)",
										"hidden": "false",
										"description": "While a friendly <Brotherhood> Core unit is within 6\" of this model, add 1 to the Leadership characteristic of models in that unit. In addition, while a friendly <Brotherhood> Core Infantry unit is within 6\" of this model, add 1 to the Attacks characteristic of models in that unit"
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "c93d-ec4f-5ed2-c892",
								"name": "Storm Bolter",
								"entryId": "5e19-e5b2-201f-b30d::bff1-661a-6969-f1ab::fded-edb8-1d1e-99a5",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "5e19-e5b2-201f-b30d::bff1-661a-6969-f1ab::f69c-aca7-7af0-704a::505e-a5aa-edab-6d5b",
										"name": "Storm bolter",
										"page": "",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "24\""
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Rapid Fire 2"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "4"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "0"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "1"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410",
												"$t": "-"
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}]
								}
							}, {
								"id": "f219-1b08-6e2a-de52",
								"name": "Gem of Inoktu",
								"entryId": "5e19-e5b2-201f-b30d::cddf-af17-d370-628b::8e98-e18e-5c58-4f9b",
								"entryGroupId": "5e19-e5b2-201f-b30d::cddf-af17-d370-628b::c100-66cd-f527-d564",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "5e19-e5b2-201f-b30d::cddf-af17-d370-628b::bef2-9df6-2df2-d670",
										"name": "Gem of Inoktu",
										"hidden": "false",
										"typeId": "72c5eafc-75bf-4ed9-b425-78009f1efe82",
										"typeName": "Abilities",
										"characteristics": {
											"characteristic": {
												"name": "Description",
												"typeId": "21befb24-fc85-4f52-a745-64b2e48f8228",
												"$t": "Once per battle, when the bearer is selected to manifest psychic powers, you can use this gift. If you do, then until the end of the phase, each time the bearer attempts to manifest a psychic power from the Dominus discipline, add 2 to that attempt's Psychic test"
											}
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "1.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "15.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "c79a-1116-9c4f-7941",
								"name": "2: Empyric Amplification",
								"entryId": "5e19-e5b2-201f-b30d::21e9-0183-ca03-57e4::3c70-9f84-d053-384c",
								"entryGroupId": "5e19-e5b2-201f-b30d::21e9-0183-ca03-57e4::f16b-4fb0-c9d1-7469",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "5e19-e5b2-201f-b30d::21e9-0183-ca03-57e4::b35e-b912-0f99-6486::b0a8-8614-a45f-8e5e",
										"name": "Empyric Amplification",
										"hidden": "false",
										"typeId": "ae70-4738-0161-bec0",
										"typeName": "Psychic Power",
										"characteristics": {
											"characteristic": [{
												"name": "Warp Charge",
												"typeId": "5ffd-b800-c317-532a",
												"$t": "7"
											}, {
												"name": "Range",
												"typeId": "fd64-cbc4-94de-24cc",
												"$t": "12\""
											}, {
												"name": "Details",
												"typeId": "ad96-dfa4-b4ed-656d",
												"$t": "Malediction: If manifested, select one enemy unit within 12\" and visible to this Psyker. Until the start of your next Psychic phase, each time an attack made with a Nemesis or psi weapon is allocated to a model in that unit, add 1 to the Damage characteristics of that attack"
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}]
								}
							}, {
								"id": "a96e-b097-67fd-f6f7",
								"name": "Warlord",
								"entryId": "5e19-e5b2-201f-b30d::ae37-b7ad-454b-65f6::2516-dd30-d80e-f79a",
								"number": "1",
								"type": "upgrade",
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								},
								"categories": {
									"category": {
										"id": "0618-e56c-f3d5-ceaf",
										"name": "Warlord",
										"entryId": "ae09-117e-a6fa-316b",
										"primary": "false"
									}
								}
							}, {
								"id": "ab3d-8f79-e399-d56c",
								"name": "Banner of Refining Flame",
								"entryId": "5e19-e5b2-201f-b30d::5771-256f-a655-a306::6aaa-9a67-7049-8844",
								"entryGroupId": "5e19-e5b2-201f-b30d::5771-256f-a655-a306::c779-4f85-7bfa-aad3",
								"publicationId": "0cc2-3545-pubN112001",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "5e19-e5b2-201f-b30d::5771-256f-a655-a306::abb7-a7b8-7a4d-31e3::79e4-c23d-7939-80cb",
										"name": "Banner of Refining Flame",
										"hidden": "false",
										"typeId": "72c5eafc-75bf-4ed9-b425-78009f1efe82",
										"typeName": "Abilities",
										"characteristics": {
											"characteristic": {
												"name": "Description",
												"typeId": "21befb24-fc85-4f52-a745-64b2e48f8228",
												"$t": "Ancient model only. The bearer can attempt to perform the following psychic action:\n\nRefining Flame (Psychic Action - Warp Charge 6): In your Psychic phase, the bearer can attempt to perform this psychic action. If completed, each enemy unit withint 6\" of the bearer suffers D3 mortal wounds"
											}
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}]
						},
						"costs": {
							"cost": [{
								"name": " PL",
								"typeId": "e356-c769-5920-6e14",
								"value": "5.0"
							}, {
								"name": "pts",
								"typeId": "points",
								"value": "100.0"
							}, {
								"name": "CP",
								"typeId": "2d3b-b544-ad49-fb75",
								"value": "0.0"
							}]
						},
						"categories": {
							"category": [{
								"id": "e245-526e-d4bc-818b",
								"name": "Character",
								"entryId": "ef18-746a-369f-43a4",
								"primary": "false"
							}, {
								"id": "e139-c19e-2158-8479",
								"name": "Faction: Grey Knights",
								"entryId": "31b6-b037-4c7a-f850",
								"primary": "false"
							}, {
								"id": "8ac3-0521-ccce-c3cf",
								"name": "Psyker",
								"entryId": "e691-aad7-d21c-1023",
								"primary": "false"
							}, {
								"id": "96a0-c202-7e91-d2d4",
								"name": "Terminator",
								"entryId": "2821-762a-49dc-5a17",
								"primary": "false"
							}, {
								"id": "f2fd-0ca4-5180-5a81",
								"name": "Ancient",
								"entryId": "ff8b-de2b-ba78-fe91",
								"primary": "false"
							}, {
								"id": "e855-d79c-d6fa-7b70",
								"name": "Brotherhood Ancient",
								"entryId": "78e6-44b3-63ea-504e",
								"primary": "false"
							}, {
								"id": "438c-b22f-825f-ee20",
								"name": "Elites",
								"entryId": "638d74c6-bd97-4de5-b65a-6aaa24e9f4b2",
								"primary": "true"
							}, {
								"id": "be97-5f91-7283-b47b",
								"name": "Faction: Imperium",
								"entryId": "84e2-9fa9-ebe6-1d18",
								"primary": "false"
							}, {
								"id": "af20-4643-d5bc-2631",
								"name": "Infantry",
								"entryId": "3d52-fccf-10c0-3fae",
								"primary": "false"
							}, {
								"id": "30cd-3c49-ce37-ce62",
								"name": "Psyk-out Grenades",
								"entryId": "e08a-4705-eaae-e4c2",
								"primary": "false"
							}, {
								"id": "afec-710f-e973-769a",
								"name": "<Brotherhood>",
								"entryId": "4a9f-dcb0-00e7-1fcc",
								"primary": "false"
							}, {
								"id": "dde6-1559-074c-3fa0",
								"name": "Faction: Sanctic Astartes",
								"entryId": "bb46-a10a-ef92-c764",
								"primary": "false"
							}]
						}
					}, {
						"id": "88e6-e2bf-8a18-6119",
						"name": "Battle Size",
						"entryId": "44e3-c224-ba82-1b55::f29d-8a5d-18b6-a071",
						"number": "1",
						"type": "upgrade",
						"selections": {
							"selection": {
								"id": "1548-048f-6619-fad7",
								"name": "2. Incursion (51-100 Total PL / 501-1000 Points) ",
								"entryId": "44e3-c224-ba82-1b55::5686-7cd9-6664-635b",
								"entryGroupId": "44e3-c224-ba82-1b55::2883-57e8-87a6-38e2",
								"number": "1",
								"type": "upgrade",
								"costs": {
									"cost": [{
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "6.0"
									}, {
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}]
								}
							}
						},
						"costs": {
							"cost": [{
								"name": " PL",
								"typeId": "e356-c769-5920-6e14",
								"value": "0.0"
							}, {
								"name": "pts",
								"typeId": "points",
								"value": "0.0"
							}, {
								"name": "CP",
								"typeId": "2d3b-b544-ad49-fb75",
								"value": "0.0"
							}]
						},
						"categories": {
							"category": {
								"id": "bcd3-549c-3d95-5635",
								"name": "Configuration",
								"entryId": "fcff-0f21-93e6-1ddc",
								"primary": "true"
							}
						}
					}, {
						"id": "b6a7-541c-509f-1839",
						"name": "Castellan Crowe",
						"entryId": "cd08-22f1-42d1-b0e2::c122-d85d-f519-81ae",
						"number": "1",
						"type": "model",
						"rules": {
							"rule": [{
								"id": "cd08-22f1-42d1-b0e2::b317-ea57-5cbd-3b0c::a26c-3bc4-cd1f-10bf",
								"name": "Knights of Titan",
								"publicationId": "0cc2-3545-pubN112001",
								"page": "96",
								"hidden": "false",
								"description": "This unit has the following abilities: And They Shall Know No Fear, Bolter Discipline, Master of the Warp"
							}, {
								"id": "cd08-22f1-42d1-b0e2::3d1f-a6f9-dc69-b7a7::a29c-ad1e-441b-2167",
								"name": "Teleport Strike",
								"hidden": "false",
								"description": "During deployment, you can set up this unit in a teleportarium chamber instead of placing it on the battlefield. At the end of any of your Movement phases this unit can teleport into battle - set it up anywhere on the battlefield that is more than 9\" away from any enemy models."
							}]
						},
						"profiles": {
							"profile": [{
								"id": "cd08-22f1-42d1-b0e2::768a-d15c-e5cd-0789",
								"name": "Castellan Crowe",
								"hidden": "false",
								"typeId": "800f-21d0-4387-c943",
								"typeName": "Unit",
								"characteristics": {
									"characteristic": [{
										"name": "M",
										"typeId": "0bdf-a96e-9e38-7779",
										"$t": "6\""
									}, {
										"name": "WS",
										"typeId": "e7f0-1278-0250-df0c",
										"$t": "2+"
									}, {
										"name": "BS",
										"typeId": "381b-eb28-74c3-df5f",
										"$t": "2+"
									}, {
										"name": "S",
										"typeId": "2218-aa3c-265f-2939",
										"$t": "4"
									}, {
										"name": "T",
										"typeId": "9c9f-9774-a358-3a39",
										"$t": "4"
									}, {
										"name": "W",
										"typeId": "f330-5e6e-4110-0978",
										"$t": "5"
									}, {
										"name": "A",
										"typeId": "13fc-b29b-31f2-ab9f",
										"$t": "6"
									}, {
										"name": "Ld",
										"typeId": "00ca-f8b8-876d-b705",
										"$t": "8"
									}, {
										"name": "Save",
										"typeId": "c0df-df94-abd7-e8d3",
										"$t": "2+"
									}]
								}
							}, {
								"id": "cd08-22f1-42d1-b0e2::ace6-fe46-8170-db37",
								"name": "Psyker",
								"hidden": "false",
								"typeId": "bc97-dea9-9e88-bb7d",
								"typeName": "Psyker",
								"characteristics": {
									"characteristic": [{
										"name": "Cast",
										"typeId": "5afb-9914-904b-d3b3",
										"$t": "1"
									}, {
										"name": "Deny",
										"typeId": "b5ac-9c20-5d5a-6f9b",
										"$t": "1"
									}, {
										"name": "Powers Known",
										"typeId": "69d7-b45e-00a2-7e46",
										"$t": "1 Dominus"
									}, {
										"name": "Other",
										"typeId": "c2e2-f115-0003-5d7b",
										"$t": "Smite, Purifying Flame"
									}]
								}
							}, {
								"id": "cd08-22f1-42d1-b0e2::ae73-bba5-f68b-8cc7::84d6-49a4-a9ff-162b",
								"name": "Smite",
								"hidden": "false",
								"typeId": "ae70-4738-0161-bec0",
								"typeName": "Psychic Power",
								"characteristics": {
									"characteristic": [{
										"name": "Warp Charge",
										"typeId": "5ffd-b800-c317-532a",
										"$t": "5"
									}, {
										"name": "Range",
										"typeId": "fd64-cbc4-94de-24cc",
										"$t": "18\""
									}, {
										"name": "Details",
										"typeId": "ad96-dfa4-b4ed-656d",
										"$t": "If manifested, the closest enemy unit within 18\" suffers D3 mortal wounds. If the result of the Psychic test was more than 10, the target suffers D6 mortal wounds instead."
									}]
								}
							}, {
								"id": "cd08-22f1-42d1-b0e2::a7bb-1dac-d897-40dc::d070-8270-03f4-93a7",
								"name": "Honour or Death",
								"hidden": "false",
								"typeId": "72c5eafc-75bf-4ed9-b425-78009f1efe82",
								"typeName": "Abilities",
								"characteristics": {
									"characteristic": {
										"name": "Description",
										"typeId": "21befb24-fc85-4f52-a745-64b2e48f8228",
										"$t": "This model is eligible to perfom a Heroic Intervention if it is within 6\" horizontally and 5\" vertically of any enemy unit, instead of 3\" horizontially and 5\" vertically. Each time this model makes a Heroic Intervention move, so long as it ends that move either closer to the closest enemy unit or within Engagement Range of an enemy Character unit, it can move up to 6\". All other rules for Heroic Interventions still apply."
									}
								}
							}, {
								"id": "cd08-22f1-42d1-b0e2::a118-0473-85e7-7de3::572d-05dc-4111-5be2",
								"name": "Martial Superiority",
								"hidden": "false",
								"typeId": "72c5eafc-75bf-4ed9-b425-78009f1efe82",
								"typeName": "Abilities",
								"characteristics": {
									"characteristic": {
										"name": "Description",
										"typeId": "21befb24-fc85-4f52-a745-64b2e48f8228",
										"$t": "At the start of the Fight phase, if this model is withing Engagement Range of any enemy Character units, it can fight first that phase"
									}
								}
							}, {
								"id": "cd08-22f1-42d1-b0e2::4b38-1b34-f4fd-d547::d187-57f3-cdcc-19e4",
								"name": "Purifying Flame",
								"hidden": "false",
								"typeId": "ae70-4738-0161-bec0",
								"typeName": "Psychic Power",
								"characteristics": {
									"characteristic": [{
										"name": "Warp Charge",
										"typeId": "5ffd-b800-c317-532a",
										"$t": "5"
									}, {
										"name": "Range",
										"typeId": "fd64-cbc4-94de-24cc",
										"$t": "9\""
									}, {
										"name": "Details",
										"typeId": "ad96-dfa4-b4ed-656d",
										"$t": "Witchfire: If manifested, the closest enemy unit within 9\" of and visible to this Psyker suffers 3 mortal wounds. If the result of the Psychic test was 11+ that unit suffers D3+3 mortal wounds instead"
									}]
								}
							}, {
								"id": "cd08-22f1-42d1-b0e2::4859-ed3b-981a-0a22::1bec-38a7-90b0-ee60",
								"name": "Cleansing Flame",
								"hidden": "false",
								"typeId": "72c5eafc-75bf-4ed9-b425-78009f1efe82",
								"typeName": "Abilities",
								"characteristics": {
									"characteristic": {
										"name": "Description",
										"typeId": "21befb24-fc85-4f52-a745-64b2e48f8228",
										"$t": "Each time this unit attempts to manifest the Purifying Flame psychc power, add 1 to that attempt's psychic test"
									}
								}
							}, {
								"id": "cd08-22f1-42d1-b0e2::ec92-f9d2-5691-3160::eb11-d292-c0a9-3200",
								"name": "Heroic Sacrifice",
								"hidden": "false",
								"typeId": "72c5eafc-75bf-4ed9-b425-78009f1efe82",
								"typeName": "Abilities",
								"characteristics": {
									"characteristic": {
										"name": "Description",
										"typeId": "21befb24-fc85-4f52-a745-64b2e48f8228",
										"$t": "If this model is destroyed in the Fight phase, do not remove the model from play- it can fight after the attacking model's unit has finished making attacks. If you are using this ability, after resolving this model's attacks, it is then removed"
									}
								}
							}]
						},
						"selections": {
							"selection": [{
								"id": "ab3a-89f9-4480-8424",
								"name": "Frag & Krak grenades",
								"entryId": "cd08-22f1-42d1-b0e2::7ecc-30a7-1a7f-704f::cddf-945e-1335-e681",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": [{
										"id": "cd08-22f1-42d1-b0e2::7ecc-30a7-1a7f-704f::61a4-e2d3-522d-c838::fdd8-1a5f-5722-d6ee",
										"name": "Frag grenades",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "6\""
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Grenade D6"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "3"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "0"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "1"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410",
												"$t": "Blast."
											}]
										}
									}, {
										"id": "cd08-22f1-42d1-b0e2::7ecc-30a7-1a7f-704f::b250-1f2e-4904-0eb4::3bf6-b4f7-6b2f-bb7b",
										"name": "Krak grenades",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "6\""
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Grenade 1"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "6"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "-1"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "D3"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410",
												"$t": "-"
											}]
										}
									}]
								},
								"costs": {
									"cost": [{
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "bf91-6b1f-d38b-c648",
								"name": "Storm bolter",
								"entryId": "cd08-22f1-42d1-b0e2::7eec-4eab-9294-7b59::2b03-8d64-3711-f300",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "cd08-22f1-42d1-b0e2::7eec-4eab-9294-7b59::df42-5dc2-4e53-ec49::505e-a5aa-edab-6d5b",
										"name": "Storm bolter",
										"page": "",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "24\""
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Rapid Fire 2"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "4"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "0"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "1"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410",
												"$t": "-"
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}]
								}
							}, {
								"id": "c4c7-c3ff-0fbb-61bf",
								"name": "Psyk-out Grenade",
								"entryId": "cd08-22f1-42d1-b0e2::c9c0-0f51-d982-a69a::37bc-bbf1-18fd-7294",
								"number": "1",
								"type": "upgrade",
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "d265-f351-3883-5105",
								"name": "Iron Halo",
								"entryId": "cd08-22f1-42d1-b0e2::69bc-f50b-e168-958c::1191-4e05-aba4-b4fc",
								"number": "1",
								"type": "upgrade",
								"rules": {
									"rule": {
										"id": "cd08-22f1-42d1-b0e2::69bc-f50b-e168-958c::01be-cc2b-e0c9-7a4b",
										"name": "Iron Halo",
										"hidden": "false",
										"description": "This model has a 4+ invulnerable save."
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "41b9-bbf6-7f49-a166",
								"name": "The Black Blade of Antwyr",
								"entryId": "cd08-22f1-42d1-b0e2::1247-578b-91c8-11f3::b6c2-018d-fcba-6b95",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "cd08-22f1-42d1-b0e2::1247-578b-91c8-11f3::b575-68d9-f438-b29b",
										"name": "The Black Blade of Antwyr",
										"hidden": "false",
										"typeId": "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
										"typeName": "Weapon",
										"characteristics": {
											"characteristic": [{
												"name": "Range",
												"typeId": "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464",
												"$t": "Melee"
											}, {
												"name": "Type",
												"typeId": "077c342f-d7b9-45c6-b8af-88e97cafd3a2",
												"$t": "Melee"
											}, {
												"name": "S",
												"typeId": "59b1-319e-ec13-d466",
												"$t": "+1"
											}, {
												"name": "AP",
												"typeId": "75aa-a838-b675-6484",
												"$t": "-3"
											}, {
												"name": "D",
												"typeId": "ae8a-3137-d65b-4ca7",
												"$t": "2"
											}, {
												"name": "Abilities",
												"typeId": "837d-5e63-aeb7-1410",
												"$t": "Each time an attack is made with this weapon, an unmodified wound roll of 6 inflictct D3 mortal wounds on the target in addition to any normal damage"
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}, {
								"id": "9bce-46ee-4295-15e4",
								"name": "4: Vortex of Doom",
								"entryId": "cd08-22f1-42d1-b0e2::2c28-646b-9f7b-8a68::8d4c-db0b-5537-9fc0",
								"entryGroupId": "cd08-22f1-42d1-b0e2::2c28-646b-9f7b-8a68::f16b-4fb0-c9d1-7469",
								"number": "1",
								"type": "upgrade",
								"profiles": {
									"profile": {
										"id": "cd08-22f1-42d1-b0e2::2c28-646b-9f7b-8a68::404b-cc9c-c2b4-2aa5::3522-23db-9d01-2b3f",
										"name": "Vortex of Doom",
										"hidden": "false",
										"typeId": "ae70-4738-0161-bec0",
										"typeName": "Psychic Power",
										"characteristics": {
											"characteristic": [{
												"name": "Warp Charge",
												"typeId": "5ffd-b800-c317-532a",
												"$t": "7"
											}, {
												"name": "Range",
												"typeId": "fd64-cbc4-94de-24cc",
												"$t": "12\""
											}, {
												"name": "Details",
												"typeId": "ad96-dfa4-b4ed-656d",
												"$t": "Witchfire: If manifested, select the closest enemy unit within 12\" of and visible to this Psyker: each other enemy unit within 3\" of the select unit suffers 1 moral wound, and the selected unit suffers 2D3 mortal wounds. If the model manifesting this power has the Psychic Epitome Warlord Trait, only the unit your selected suffers the additional mortal wound from that trait, not those other enemy units within 3\" of it."
											}]
										}
									}
								},
								"costs": {
									"cost": [{
										"name": " PL",
										"typeId": "e356-c769-5920-6e14",
										"value": "0.0"
									}, {
										"name": "pts",
										"typeId": "points",
										"value": "0.0"
									}, {
										"name": "CP",
										"typeId": "2d3b-b544-ad49-fb75",
										"value": "0.0"
									}]
								}
							}]
						},
						"costs": {
							"cost": [{
								"name": "pts",
								"typeId": "points",
								"value": "90.0"
							}, {
								"name": " PL",
								"typeId": "e356-c769-5920-6e14",
								"value": "5.0"
							}, {
								"name": "CP",
								"typeId": "2d3b-b544-ad49-fb75",
								"value": "0.0"
							}]
						},
						"categories": {
							"category": [{
								"id": "efa1-6de9-9c47-96dc",
								"name": "HQ",
								"entryId": "848a6ff2-0def-4c72-8433-ff7da70e6bc7",
								"primary": "true"
							}, {
								"id": "ca03-753f-2717-e263",
								"name": "Faction: Grey Knights",
								"entryId": "31b6-b037-4c7a-f850",
								"primary": "false"
							}, {
								"id": "7c07-fd4f-4af6-736b",
								"name": "Character",
								"entryId": "ef18-746a-369f-43a4",
								"primary": "false"
							}, {
								"id": "01bf-9d2f-23f5-cde0",
								"name": "Infantry",
								"entryId": "3d52-fccf-10c0-3fae",
								"primary": "false"
							}, {
								"id": "6577-b9c9-214b-e25d",
								"name": "Psyker",
								"entryId": "e691-aad7-d21c-1023",
								"primary": "false"
							}, {
								"id": "2384-f854-bd78-5b19",
								"name": "Castellan Crowe",
								"entryId": "92b9-9c2f-f83a-d6e8",
								"primary": "false"
							}, {
								"id": "af13-5188-ce5d-44b0",
								"name": "Faction: Imperium",
								"entryId": "84e2-9fa9-ebe6-1d18",
								"primary": "false"
							}, {
								"id": "e0e0-7592-507b-0cbc",
								"name": "Faction: Sanctic Astartes",
								"entryId": "bb46-a10a-ef92-c764",
								"primary": "false"
							}, {
								"id": "7887-628a-e026-3156",
								"name": "Purifier",
								"entryId": "b448-7c07-dcf2-60db",
								"primary": "false"
							}, {
								"id": "608c-1332-66ec-a961",
								"name": "Honoured Knight",
								"entryId": "736c-5b2d-201e-6df9",
								"primary": "false"
							}, {
								"id": "7952-9de1-e1bb-9c20",
								"name": "Psyk-out Grenades",
								"entryId": "e08a-4705-eaae-e4c2",
								"primary": "false"
							}]
						}
					}]
				},
				"publications": {
					"publication": [{
						"id": "85df-1155-c986-4d71",
						"name": "Psychic Awakening IX: Pariah"
					}, {
						"id": "c9fe-4431-b76d-267a",
						"name": "Psychic Awakening VIII: War of the Spider"
					}, {
						"id": "ecea-8b62-fefb-9f8e",
						"name": "Psychic Awakening VII: Engine War"
					}, {
						"id": "28ec-711c-pubN118139",
						"name": "Index: Xenos 2"
					}, {
						"id": "5c2d-db9f-58ca-e7b2",
						"name": "Psychic Awakening IV: Ritual of the Damned"
					}, {
						"id": "0865-ee21-d1f1-ed38",
						"name": "War Zone Charadon, Act I: The Book of Rust"
					}, {
						"id": "28ec-711c-pubN72690",
						"name": "Warhammer 40,000 Core Book"
					}, {
						"id": "28ec-711c-pubN78977",
						"name": "Index: Imperium 1"
					}, {
						"id": "28ec-711c-pubN98266",
						"name": "Imperium Nihilus: Vigilus Defiant"
					}, {
						"id": "52c4-39c0-ae97-d4dc",
						"name": "Psychic Awakening VI: Saga of the Beast"
					}, {
						"id": "0cc2-3545-pubN112001",
						"name": "Codex: Grey Knights"
					}, {
						"id": "b854-bcb5-5746-e0d3",
						"name": "War Zone Charadon, Act II: The Book of Fire"
					}, {
						"id": "28ec-711c-pubN77581",
						"name": "Index: Imperium 2"
					}, {
						"id": "5093-9448-d8cc-5327",
						"name": "Psychic Awakening II: Faith and Fury"
					}, {
						"id": "28ec-711c-pubN76527",
						"name": "Index: Xenos 1"
					}, {
						"id": "f731-6aa6-pubN66377",
						"name": "Codex: Officio Assassinorum"
					}, {
						"id": "5b08-09e5-a80a-fd67",
						"name": "Psychic Awakening I: Phoenix Rising"
					}, {
						"id": "977a-446b-737a-b571",
						"name": "Chapter Approved 2021"
					}, {
						"id": "ce40-ec9e-21e2-2e42",
						"name": "Warhammer Quest: Blackstone Fortress"
					}, {
						"id": "28ec-711c-pubN99666",
						"name": "Index: Chaos"
					}, {
						"id": "f000-7b0c-01bf-7630",
						"name": "Psychic Awakening III: Blood of Baal"
					}, {
						"id": "7573-8d1b-acdf-2de8",
						"name": "Imperial Armour: Compendium"
					}, {
						"id": "b652-8bab-1453-da20",
						"name": "Warhammer Legends"
					}, {
						"id": "4593-a2f0-546a-d6f2",
						"name": "Psychic Awakening V: The Greater Good"
					}, {
						"id": "2ec0-6d53-e36b-9895",
						"name": "Chapter Approved 2018"
					}, {
						"id": "28ec-711c-pubN73170",
						"name": "Chapter Approved 2017"
					}]
				},
				"categories": {
					"category": [{
						"id": "df59-4ce9-a4db-8422",
						"name": "Uncategorised",
						"entryId": "(No Category)",
						"primary": "false"
					}, {
						"id": "3698-57b1-9805-af97",
						"name": "Configuration",
						"entryId": "fcff-0f21-93e6-1ddc",
						"primary": "false"
					}, {
						"id": "3196-1ad2-3169-0cca",
						"name": "Stratagems",
						"entryId": "c845-c72c-6afe-3fc2",
						"primary": "false"
					}, {
						"id": "82ce-1306-1034-eac1",
						"name": "No Force Org Slot",
						"entryId": "ff36a6f3-19bf-4f48-8956-adacfd28fe74",
						"primary": "false"
					}, {
						"id": "84c5-92e9-08ff-a41c",
						"name": "Agents of the Imperium",
						"entryId": "0f35-2c34-ba6a-8105",
						"primary": "false"
					}, {
						"id": "77d4-8b43-d753-d9c6",
						"name": "HQ",
						"entryId": "848a6ff2-0def-4c72-8433-ff7da70e6bc7",
						"primary": "false"
					}, {
						"id": "9d12-8c23-ca63-7d6d",
						"name": "Troops",
						"entryId": "5d76b6f5-20ae-4d70-8f59-ade72a2add3a",
						"primary": "false"
					}, {
						"id": "a3d7-6e2b-5990-fd3c",
						"name": "Elites",
						"entryId": "638d74c6-bd97-4de5-b65a-6aaa24e9f4b2",
						"primary": "false"
					}, {
						"id": "2069-e209-b3db-6795",
						"name": "Fast Attack",
						"entryId": "c274d0b0-5866-44bc-9810-91c136ae7438",
						"primary": "false"
					}, {
						"id": "d26a-dfc7-06b3-416b",
						"name": "Heavy Support",
						"entryId": "abf5fd55-9ac7-4263-8bc1-a9fb0a8fa6a6",
						"primary": "false"
					}, {
						"id": "3514-e442-5beb-d2d7",
						"name": "Flyer",
						"entryId": "e888-1504-aa61-95ff",
						"primary": "false"
					}, {
						"id": "142b-e9bf-b705-c558",
						"name": "Dedicated Transport",
						"entryId": "1b66-3f5f-6705-079a",
						"primary": "false"
					}, {
						"id": "eb80-a478-270d-64a9",
						"name": "Relic Elites",
						"entryId": "8d86-9490-0f7d-a5b5",
						"primary": "false"
					}, {
						"id": "7d94-5e54-26b8-97fc",
						"name": "Relic Heavy Support",
						"entryId": "6c4c-a416-b8cb-c380",
						"primary": "false"
					}, {
						"id": "f55d-b147-2847-9477",
						"name": "Relic HQ",
						"entryId": "655f-e142-dfa9-11a4",
						"primary": "false"
					}]
				}
			}
		}
	}
}
