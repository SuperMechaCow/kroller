{
    roster: {
        "$": {
            id: "4c88-00d3-0849-fbf4",
            name: "Rave Marines",
            battleScribeVersion: "2.03",
            gameSystemId: "28ec-711c-d87f-3aeb",
            gameSystemName: "Warhammer 40,000 9th Edition",
            gameSystemRevision: "192",
            xmlns: "http://www.battlescribe.net/schema/rosterSchema"
        },
        costs: [{
            cost: [{
                "$": {
                    name: " PL",
                    typeId: "e356-c769-5920-6e14",
                    value: "103.0"
                }
            }, {
                "$": {
                    name: "CP",
                    typeId: "2d3b-b544-ad49-fb75",
                    value: "7.0"
                }
            }, {
                "$": {
                    name: "pts",
                    typeId: "points",
                    value: "2000.0"
                }
            }]
        }],
        forces: [{
            force: [{
                "$": {
                    id: "2714-288c-e17c-7e63",
                    name: "Battalion Detachment -3CP",
                    entryId: "564e-55d5-79bc-a4d7",
                    catalogueId: "cb54-c035-5759-7697",
                    catalogueRevision: "167",
                    catalogueName: "Chaos - Chaos Space Marines"
                },
                rules: [{
                    rule: [{
                        "$": {
                            id: "77fd-f3de-18b4-fe06",
                            name: "Despoilers of the Galaxy (Emperor's Children)",
                            hidden: "false"
                        },
                        description: ["If your army is Battle-forged, all Troops units in Chaos Space Marine Detachments gain this ability. Such a unit that is within range of an objective marker (as specified in the mission) controls that objective marker even if there are more enemy models within range of it. If an enemy unit within range of the same objective marker has a similar ability, then the objective marker is controlled by the player who has the most models within range as normal."]
                    }, {
                        "$": {
                            id: "7dec-bbba-9283-4893",
                            name: "Daemonic Ritual",
                            hidden: "false"
                        },
                        description: ["Instead of moving in their Movement phase, any CHAOS CHARACTER can, at the end of their Movement phase, attempt to summon a DAEMON unit with this ability by performing a Daemonic Ritual (the character cannot do so if they arrived as reinforcements this turn, or if they themselves have been summoned to the battlefield this turn).\n\nIf they do, first choose one of the four Chaos Gods - KHORNE, TZEENTCH, NURGLE, or SLAANESH. A CHARACTER who owes allegiance to one of the Dark Gods can only attempt to summon the units of their patron - for example, a KHORNE CHARACTER could only attempt to summon KHORNE DAEMONS.\n\nRoll up to 3 dice - this is your summoning roll. You can summon one new unit with the Daemonic Ritual ability to the battlefield that has a Power Rating equal to or less than the total result so long as it has the same Chaos God keyword you chose at the start. This unit is treated as reinforcements for your army and can be placed anywhere on the battlefield that is wholly within 12\" of the character and is more than 9\" from any enemy model. If the total rolled is insufficient to summon any unit, the ritual fails and no new unit is summoned.\n\nIf your summoning roll included any doubles, your character then suffers a mortal wound. If it contained any triples, it instead suffers D3 mortal wounds."]
                    }]
                }],
                selections: [{
                    selection: [{
                        "$": {
                            id: "d9c0-7e0a-cc28-a0da",
                            name: "Detachment Command Cost",
                            entryId: "ec87-f19e-eee2-1ba8::9d97-2793-9882-d48a",
                            number: "1",
                            type: "upgrade"
                        },
                        costs: [{
                            cost: [{
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "-3.0"
                                }
                            }, {
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "0.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "0461-7c9f-c63b-0db5",
                                    name: "Configuration",
                                    entryId: "fcff-0f21-93e6-1ddc",
                                    primary: "true"
                                }
                            }]
                        }]
                    }, {
                        "$": {
                            id: "55a3-2303-3daf-d756",
                            name: "Sorcerer",
                            entryId: "0c6a-c6e7-46c7-afa0::9832-6438-ea96-d6d6",
                            publicationId: "cb54-c035-pubN125652",
                            page: "126",
                            number: "1",
                            type: "model"
                        },
                        rules: [{
                            rule: [{
                                "$": {
                                    id: "0c6a-c6e7-46c7-afa0::8193-ab03-4355-b61c::dfc0-3276-8ad6-eea9",
                                    name: "Hateful Assault",
                                    hidden: "false"
                                },
                                description: ["If this unit makes a charge move, is charged or performs a Heroic Intervention, add 1 to the Attacks characteristic of models in this unit until the end of the turn."]
                            }, {
                                "$": {
                                    id: "0c6a-c6e7-46c7-afa0::8193-ab03-4355-b61c::e990-5b43-7340-bfe9",
                                    name: "Malicious Volleys",
                                    hidden: "false"
                                },
                                description: ["Instead of following the normal rules for Rapid Fire weapons, models in this unit firing Rapid Fire bolt weapons make double the number of attacks if any of the following apply:\n\n• The firing model’s target is within half the weapon’s maximum range.\n• The firing model is INFANTRY and every model in its unit Remained Stationary in your previous Movement phase.\n• The firing model is a TERMINATOR, BIKER or HELBRUTE.\n\nFor the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon with the Rapid Fire type. A bolt weapon is any weapon whose profile includes the word ‘bolt’ (e.g. boltgun, bolt pistol, combibolter, Inferno boltgun). Rules that apply to bolt weapons also apply when firing the boltgun profile of combi-weapons and when firing Artefacts of Chaos that replaced a bolt weapon, (e.g. Spitespitter). The Talon of Horus is also a Rapid Fire bolt weapon."]
                            }]
                        }],
                        profiles: [{
                            profile: [{
                                "$": {
                                    id: "0c6a-c6e7-46c7-afa0::a1b6-f555-e2ca-009e",
                                    name: "Sorcerer",
                                    hidden: "false",
                                    typeId: "800f-21d0-4387-c943",
                                    typeName: "Unit"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "6\"",
                                        "$": {
                                            name: "M",
                                            typeId: "0bdf-a96e-9e38-7779"
                                        }
                                    }, {
                                        _: "3+",
                                        "$": {
                                            name: "WS",
                                            typeId: "e7f0-1278-0250-df0c"
                                        }
                                    }, {
                                        _: "3+",
                                        "$": {
                                            name: "BS",
                                            typeId: "381b-eb28-74c3-df5f"
                                        }
                                    }, {
                                        _: "4",
                                        "$": {
                                            name: "S",
                                            typeId: "2218-aa3c-265f-2939"
                                        }
                                    }, {
                                        _: "4",
                                        "$": {
                                            name: "T",
                                            typeId: "9c9f-9774-a358-3a39"
                                        }
                                    }, {
                                        _: "4",
                                        "$": {
                                            name: "W",
                                            typeId: "f330-5e6e-4110-0978"
                                        }
                                    }, {
                                        _: "3",
                                        "$": {
                                            name: "A",
                                            typeId: "13fc-b29b-31f2-ab9f"
                                        }
                                    }, {
                                        _: "9",
                                        "$": {
                                            name: "Ld",
                                            typeId: "00ca-f8b8-876d-b705"
                                        }
                                    }, {
                                        _: "3+",
                                        "$": {
                                            name: "Save",
                                            typeId: "c0df-df94-abd7-e8d3"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "0c6a-c6e7-46c7-afa0::422c-28f4-d124-ae0b",
                                    name: "Sorcerer",
                                    hidden: "false",
                                    typeId: "bc97-dea9-9e88-bb7d",
                                    typeName: "Psyker"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "2",
                                        "$": {
                                            name: "Cast",
                                            typeId: "5afb-9914-904b-d3b3"
                                        }
                                    }, {
                                        _: "1",
                                        "$": {
                                            name: "Deny",
                                            typeId: "b5ac-9c20-5d5a-6f9b"
                                        }
                                    }, {
                                        _: "Smite and 2 powers from the Dark Hereticus discipline",
                                        "$": {
                                            name: "Powers Known",
                                            typeId: "69d7-b45e-00a2-7e46"
                                        }
                                    }, {
                                        _: "-",
                                        "$": {
                                            name: "Other",
                                            typeId: "c2e2-f115-0003-5d7b"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "0c6a-c6e7-46c7-afa0::e3a5-1035-6513-5ead::37a4-1d84-4ef0-c4f6",
                                    name: "Death to the False Emperor",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "Each time you roll a hit roll of 6+ for a model with this ability in the Fight phase, it can, if it was targeting an IMPERIUM unit, immediately make an extra attack against the same unit using the same weapon. These extra attacks cannot themselves generate any further attacks.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        selections: [{
                            selection: [{
                                "$": {
                                    id: "9398-8c6e-a456-5ec8",
                                    name: "Frag & Krak grenades",
                                    entryId: "0c6a-c6e7-46c7-afa0::e23b-6d34-74a6-f585::cddf-945e-1335-e681",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "0c6a-c6e7-46c7-afa0::e23b-6d34-74a6-f585::61a4-e2d3-522d-c838::fdd8-1a5f-5722-d6ee",
                                            name: "Frag grenades",
                                            hidden: "false",
                                            typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                            typeName: "Weapon"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "6\"",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                }
                                            }, {
                                                _: "Grenade D6",
                                                "$": {
                                                    name: "Type",
                                                    typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                }
                                            }, {
                                                _: "3",
                                                "$": {
                                                    name: "S",
                                                    typeId: "59b1-319e-ec13-d466"
                                                }
                                            }, {
                                                _: "0",
                                                "$": {
                                                    name: "AP",
                                                    typeId: "75aa-a838-b675-6484"
                                                }
                                            }, {
                                                _: "1",
                                                "$": {
                                                    name: "D",
                                                    typeId: "ae8a-3137-d65b-4ca7"
                                                }
                                            }, {
                                                _: "Blast.",
                                                "$": {
                                                    name: "Abilities",
                                                    typeId: "837d-5e63-aeb7-1410"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "0c6a-c6e7-46c7-afa0::e23b-6d34-74a6-f585::b250-1f2e-4904-0eb4::3bf6-b4f7-6b2f-bb7b",
                                            name: "Krak grenades",
                                            hidden: "false",
                                            typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                            typeName: "Weapon"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "6\"",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                }
                                            }, {
                                                _: "Grenade 1",
                                                "$": {
                                                    name: "Type",
                                                    typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                }
                                            }, {
                                                _: "6",
                                                "$": {
                                                    name: "S",
                                                    typeId: "59b1-319e-ec13-d466"
                                                }
                                            }, {
                                                _: "-1",
                                                "$": {
                                                    name: "AP",
                                                    typeId: "75aa-a838-b675-6484"
                                                }
                                            }, {
                                                _: "D3",
                                                "$": {
                                                    name: "D",
                                                    typeId: "ae8a-3137-d65b-4ca7"
                                                }
                                            }, {
                                                _: "-",
                                                "$": {
                                                    name: "Abilities",
                                                    typeId: "837d-5e63-aeb7-1410"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "f994-920b-da2f-1b7b",
                                    name: "Smite",
                                    entryId: "0c6a-c6e7-46c7-afa0::ef7b-6b12-187e-aa18::03fd-db47-5333-1e1f",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "0c6a-c6e7-46c7-afa0::ef7b-6b12-187e-aa18::72f4-48ff-fafb-c876::5821-6c45-8572-7e0e",
                                            name: "Smite",
                                            hidden: "false",
                                            typeId: "ae70-4738-0161-bec0",
                                            typeName: "Psychic Power"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "5",
                                                "$": {
                                                    name: "Warp Charge",
                                                    typeId: "5ffd-b800-c317-532a"
                                                }
                                            }, {
                                                _: "18\"",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "fd64-cbc4-94de-24cc"
                                                }
                                            }, {
                                                _: "Smite has a warp charge value of 5. If manifested, the closest visible enemy unit within 18\" of the psyker suffers D3 mortal wounds (pg 181). If the result of the Psychic test was more than 10 the target suffers D6 mortal wounds instead.",
                                                "$": {
                                                    name: "Details",
                                                    typeId: "ad96-dfa4-b4ed-656d"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }],
                                categories: [{
                                    category: [{
                                        "$": {
                                            id: "f8b5-cb85-225a-5ad3",
                                            name: "Psyker",
                                            entryId: "e691-aad7-d21c-1023",
                                            primary: "false"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "b3fd-9c29-0d40-ba2a",
                                    name: "Force sword",
                                    entryId: "0c6a-c6e7-46c7-afa0::d480-3db6-f2df-89d9::07e7-1f9b-4c1c-aad9",
                                    entryGroupId: "0c6a-c6e7-46c7-afa0::2c4a-db14-2902-a6a7",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "0c6a-c6e7-46c7-afa0::d480-3db6-f2df-89d9::b924-3d7d-287c-0a97::29c5-cff6-7f7c-96d6",
                                            name: "Force sword",
                                            page: "",
                                            hidden: "false",
                                            typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                            typeName: "Weapon"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "Melee",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                }
                                            }, {
                                                _: "Melee",
                                                "$": {
                                                    name: "Type",
                                                    typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                }
                                            }, {
                                                _: "+1",
                                                "$": {
                                                    name: "S",
                                                    typeId: "59b1-319e-ec13-d466"
                                                }
                                            }, {
                                                _: "-3",
                                                "$": {
                                                    name: "AP",
                                                    typeId: "75aa-a838-b675-6484"
                                                }
                                            }, {
                                                _: "D3",
                                                "$": {
                                                    name: "D",
                                                    typeId: "ae8a-3137-d65b-4ca7"
                                                }
                                            }, {
                                                _: "-",
                                                "$": {
                                                    name: "Abilities",
                                                    typeId: "837d-5e63-aeb7-1410"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "8aba-bee2-8f15-b3a4",
                                    name: "Bolt pistol",
                                    entryId: "0c6a-c6e7-46c7-afa0::a720-4351-2c8a-8731::2b15-d2a0-c333-1d00::0334-f487-8229-0c1a",
                                    entryGroupId: "0c6a-c6e7-46c7-afa0::a720-4351-2c8a-8731::ce84-10ca-568c-5c48",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "0c6a-c6e7-46c7-afa0::a720-4351-2c8a-8731::2b15-d2a0-c333-1d00::45bf-2847-b181-19e4::e6d5-677a-d8ed-f6a5",
                                            name: "Bolt pistol",
                                            hidden: "false",
                                            typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                            typeName: "Weapon"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "12\"",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                }
                                            }, {
                                                _: "Pistol 1",
                                                "$": {
                                                    name: "Type",
                                                    typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                }
                                            }, {
                                                _: "4",
                                                "$": {
                                                    name: "S",
                                                    typeId: "59b1-319e-ec13-d466"
                                                }
                                            }, {
                                                _: "0",
                                                "$": {
                                                    name: "AP",
                                                    typeId: "75aa-a838-b675-6484"
                                                }
                                            }, {
                                                _: "1",
                                                "$": {
                                                    name: "D",
                                                    typeId: "ae8a-3137-d65b-4ca7"
                                                }
                                            }, {
                                                _: "-",
                                                "$": {
                                                    name: "Abilities",
                                                    typeId: "837d-5e63-aeb7-1410"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "5704-dbbc-e918-11ba",
                                    name: "Mark of Slaanesh",
                                    entryId: "0c6a-c6e7-46c7-afa0::b481-3301-f02b-5ab1::81f9-01f6-e82e-7eec",
                                    entryGroupId: "0c6a-c6e7-46c7-afa0::b481-3301-f02b-5ab1::45e8-d3d1-105b-90a3",
                                    number: "1",
                                    type: "upgrade"
                                },
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }],
                                categories: [{
                                    category: [{
                                        "$": {
                                            id: "07d5-5095-98c1-02b1",
                                            name: "Faction: Slaanesh",
                                            entryId: "1da2-76db-f76f-6b6c",
                                            primary: "false"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "eddc-4053-4714-419e",
                                    name: "Delightful Agonies",
                                    entryId: "0c6a-c6e7-46c7-afa0::190a-70f2-63a5-9f43::9adc-b799-24ee-e0ff::ca0b-8101-9dac-34d8",
                                    entryGroupId: "0c6a-c6e7-46c7-afa0::190a-70f2-63a5-9f43::0246-3399-3b88-44aa",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "0c6a-c6e7-46c7-afa0::190a-70f2-63a5-9f43::9adc-b799-24ee-e0ff::33fb-8681-8065-c7cb",
                                            name: "Delightful Agonies",
                                            hidden: "false",
                                            typeId: "ae70-4738-0161-bec0",
                                            typeName: "Psychic Power"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "6",
                                                "$": {
                                                    name: "Warp Charge",
                                                    typeId: "5ffd-b800-c317-532a"
                                                }
                                            }, {
                                                _: "18\"",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "fd64-cbc4-94de-24cc"
                                                }
                                            }, {
                                                _: "If manifested, select a visible SLAANESH <LEGION> unit within 18\" of the psyker. Until the start of your next Psychic phase, roll a D6 each time that unit suffers a wound; on a 5+, it does not lose that wound.",
                                                "$": {
                                                    name: "Details",
                                                    typeId: "ad96-dfa4-b4ed-656d"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "9464-9cb7-d9d0-f6d2",
                                    name: "Diabolic Strength",
                                    entryId: "0c6a-c6e7-46c7-afa0::190a-70f2-63a5-9f43::f8eb-427a-a02b-61eb::57a5-9730-a650-1fe5",
                                    entryGroupId: "0c6a-c6e7-46c7-afa0::190a-70f2-63a5-9f43::0246-3399-3b88-44aa",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "0c6a-c6e7-46c7-afa0::190a-70f2-63a5-9f43::f8eb-427a-a02b-61eb::9344-fcc3-b7d8-98e9",
                                            name: "Diabolic Strength",
                                            hidden: "false",
                                            typeId: "ae70-4738-0161-bec0",
                                            typeName: "Psychic Power"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "6",
                                                "$": {
                                                    name: "Warp Charge",
                                                    typeId: "5ffd-b800-c317-532a"
                                                }
                                            }, {
                                                _: "12\"",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "fd64-cbc4-94de-24cc"
                                                }
                                            }, {
                                                _: "If manifested, select a <LEGION> model within 12\" of the psyker. Until the start of your next Psychic phase, add 2 to the model's Strength characteristic and 1 to its Attacks characteristic.",
                                                "$": {
                                                    name: "Details",
                                                    typeId: "ad96-dfa4-b4ed-656d"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        costs: [{
                            cost: [{
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "90.0"
                                }
                            }, {
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "5.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "0.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "ec26-36be-e1fc-c54b",
                                    name: "HQ",
                                    entryId: "848a6ff2-0def-4c72-8433-ff7da70e6bc7",
                                    primary: "true"
                                }
                            }, {
                                "$": {
                                    id: "7527-4f65-f814-0ac1",
                                    name: "Faction: <Legion>",
                                    entryId: "b2b6-8e4a-9c74-cc37",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "d4db-5fc9-c0a2-a6d7",
                                    name: "Faction: <Mark of Chaos>",
                                    entryId: "a61a-08c8-c7f7-9f78",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "a04f-bd98-5393-0a0b",
                                    name: "Psyker",
                                    entryId: "e691-aad7-d21c-1023",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "2067-7ba1-db5d-405b",
                                    name: "Infantry",
                                    entryId: "3d52-fccf-10c0-3fae",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "8a4b-2b86-0d57-aaa7",
                                    name: "Faction: Chaos",
                                    entryId: "5cf1-acf2-ca3b-c2e5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "86cc-d288-3915-bcaf",
                                    name: "Faction: Heretic Astartes",
                                    entryId: "ca10-a5dd-f54f-0ed5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "5fbd-7c48-55a8-2310",
                                    name: "Sorcerer",
                                    entryId: "0385-8978-4a91-7695",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "25b2-58fa-f0db-5d25",
                                    name: "Character",
                                    entryId: "ef18-746a-369f-43a4",
                                    primary: "false"
                                }
                            }]
                        }]
                    }, {
                        "$": {
                            id: "59b6-88a6-2b4f-34f9",
                            name: "Master of Possession",
                            entryId: "a3f7-32ab-e4e3-95cb::d286-ce84-78b1-ceb2",
                            publicationId: "cb54-c035-pubN125652",
                            page: "126",
                            number: "1",
                            type: "model"
                        },
                        rules: [{
                            rule: [{
                                "$": {
                                    id: "a3f7-32ab-e4e3-95cb::077b-1b2f-b322-8f43::dfc0-3276-8ad6-eea9",
                                    name: "Hateful Assault",
                                    hidden: "false"
                                },
                                description: ["If this unit makes a charge move, is charged or performs a Heroic Intervention, add 1 to the Attacks characteristic of models in this unit until the end of the turn."]
                            }, {
                                "$": {
                                    id: "a3f7-32ab-e4e3-95cb::077b-1b2f-b322-8f43::e990-5b43-7340-bfe9",
                                    name: "Malicious Volleys",
                                    hidden: "false"
                                },
                                description: ["Instead of following the normal rules for Rapid Fire weapons, models in this unit firing Rapid Fire bolt weapons make double the number of attacks if any of the following apply:\n\n• The firing model’s target is within half the weapon’s maximum range.\n• The firing model is INFANTRY and every model in its unit Remained Stationary in your previous Movement phase.\n• The firing model is a TERMINATOR, BIKER or HELBRUTE.\n\nFor the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon with the Rapid Fire type. A bolt weapon is any weapon whose profile includes the word ‘bolt’ (e.g. boltgun, bolt pistol, combibolter, Inferno boltgun). Rules that apply to bolt weapons also apply when firing the boltgun profile of combi-weapons and when firing Artefacts of Chaos that replaced a bolt weapon, (e.g. Spitespitter). The Talon of Horus is also a Rapid Fire bolt weapon."]
                            }]
                        }],
                        profiles: [{
                            profile: [{
                                "$": {
                                    id: "a3f7-32ab-e4e3-95cb::87f0-d8d2-97b3-8529",
                                    name: "Daemonkin",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "This model has a 5+ invulnerable save.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "a3f7-32ab-e4e3-95cb::41fa-500c-40df-68a3",
                                    name: "Rite of Possession",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "PSYKERS suffer Perils of the Warp on any Psychic test roll of a double that is made for them, instead of just double 1 or 6, while they are within 12\" of any enemy models with this ability.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "a3f7-32ab-e4e3-95cb::2d62-b49d-f5ea-58db",
                                    name: "Master of Possession",
                                    hidden: "false",
                                    typeId: "bc97-dea9-9e88-bb7d",
                                    typeName: "Psyker"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "2",
                                        "$": {
                                            name: "Cast",
                                            typeId: "5afb-9914-904b-d3b3"
                                        }
                                    }, {
                                        _: "1",
                                        "$": {
                                            name: "Deny",
                                            typeId: "b5ac-9c20-5d5a-6f9b"
                                        }
                                    }, {
                                        _: "Smite and two powers from the Malefic Discipline",
                                        "$": {
                                            name: "Powers Known",
                                            typeId: "69d7-b45e-00a2-7e46"
                                        }
                                    }, {
                                        _: "-",
                                        "$": {
                                            name: "Other",
                                            typeId: "c2e2-f115-0003-5d7b"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "a3f7-32ab-e4e3-95cb::179b-6216-696f-72ff",
                                    name: "Master of Possession",
                                    hidden: "false",
                                    typeId: "800f-21d0-4387-c943",
                                    typeName: "Unit"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "6\"",
                                        "$": {
                                            name: "M",
                                            typeId: "0bdf-a96e-9e38-7779"
                                        }
                                    }, {
                                        _: "3+",
                                        "$": {
                                            name: "WS",
                                            typeId: "e7f0-1278-0250-df0c"
                                        }
                                    }, {
                                        _: "3+",
                                        "$": {
                                            name: "BS",
                                            typeId: "381b-eb28-74c3-df5f"
                                        }
                                    }, {
                                        _: "4",
                                        "$": {
                                            name: "S",
                                            typeId: "2218-aa3c-265f-2939"
                                        }
                                    }, {
                                        _: "4",
                                        "$": {
                                            name: "T",
                                            typeId: "9c9f-9774-a358-3a39"
                                        }
                                    }, {
                                        _: "4",
                                        "$": {
                                            name: "W",
                                            typeId: "f330-5e6e-4110-0978"
                                        }
                                    }, {
                                        _: "3",
                                        "$": {
                                            name: "A",
                                            typeId: "13fc-b29b-31f2-ab9f"
                                        }
                                    }, {
                                        _: "9",
                                        "$": {
                                            name: "Ld",
                                            typeId: "00ca-f8b8-876d-b705"
                                        }
                                    }, {
                                        _: "3+",
                                        "$": {
                                            name: "Save",
                                            typeId: "c0df-df94-abd7-e8d3"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "a3f7-32ab-e4e3-95cb::7cde-5072-c27d-d4be::37a4-1d84-4ef0-c4f6",
                                    name: "Death to the False Emperor",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "Each time you roll a hit roll of 6+ for a model with this ability in the Fight phase, it can, if it was targeting an IMPERIUM unit, immediately make an extra attack against the same unit using the same weapon. These extra attacks cannot themselves generate any further attacks.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        selections: [{
                            selection: [{
                                "$": {
                                    id: "b8d1-0fd2-b8bd-f108",
                                    name: "Force stave",
                                    entryId: "a3f7-32ab-e4e3-95cb::4538-375a-d248-bd27::6f9a-c4fe-3132-d011",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "a3f7-32ab-e4e3-95cb::4538-375a-d248-bd27::2552-08c9-9419-8a06::ed69-f85e-5982-9ab8",
                                            name: "Force stave",
                                            page: "",
                                            hidden: "false",
                                            typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                            typeName: "Weapon"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "Melee",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                }
                                            }, {
                                                _: "Melee",
                                                "$": {
                                                    name: "Type",
                                                    typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                }
                                            }, {
                                                _: "+3",
                                                "$": {
                                                    name: "S",
                                                    typeId: "59b1-319e-ec13-d466"
                                                }
                                            }, {
                                                _: "-1",
                                                "$": {
                                                    name: "AP",
                                                    typeId: "75aa-a838-b675-6484"
                                                }
                                            }, {
                                                _: "D3",
                                                "$": {
                                                    name: "D",
                                                    typeId: "ae8a-3137-d65b-4ca7"
                                                }
                                            }, {
                                                _: "-",
                                                "$": {
                                                    name: "Abilities",
                                                    typeId: "837d-5e63-aeb7-1410"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "b56c-4940-104b-0983",
                                    name: "Bolt pistol",
                                    entryId: "a3f7-32ab-e4e3-95cb::c259-cf02-1efb-62ef::0334-f487-8229-0c1a",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "a3f7-32ab-e4e3-95cb::c259-cf02-1efb-62ef::45bf-2847-b181-19e4::e6d5-677a-d8ed-f6a5",
                                            name: "Bolt pistol",
                                            hidden: "false",
                                            typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                            typeName: "Weapon"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "12\"",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                }
                                            }, {
                                                _: "Pistol 1",
                                                "$": {
                                                    name: "Type",
                                                    typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                }
                                            }, {
                                                _: "4",
                                                "$": {
                                                    name: "S",
                                                    typeId: "59b1-319e-ec13-d466"
                                                }
                                            }, {
                                                _: "0",
                                                "$": {
                                                    name: "AP",
                                                    typeId: "75aa-a838-b675-6484"
                                                }
                                            }, {
                                                _: "1",
                                                "$": {
                                                    name: "D",
                                                    typeId: "ae8a-3137-d65b-4ca7"
                                                }
                                            }, {
                                                _: "-",
                                                "$": {
                                                    name: "Abilities",
                                                    typeId: "837d-5e63-aeb7-1410"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "519c-99d3-4bbf-2d49",
                                    name: "Frag & Krak grenades",
                                    entryId: "a3f7-32ab-e4e3-95cb::379f-e75a-919e-d131::cddf-945e-1335-e681",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "a3f7-32ab-e4e3-95cb::379f-e75a-919e-d131::61a4-e2d3-522d-c838::fdd8-1a5f-5722-d6ee",
                                            name: "Frag grenades",
                                            hidden: "false",
                                            typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                            typeName: "Weapon"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "6\"",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                }
                                            }, {
                                                _: "Grenade D6",
                                                "$": {
                                                    name: "Type",
                                                    typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                }
                                            }, {
                                                _: "3",
                                                "$": {
                                                    name: "S",
                                                    typeId: "59b1-319e-ec13-d466"
                                                }
                                            }, {
                                                _: "0",
                                                "$": {
                                                    name: "AP",
                                                    typeId: "75aa-a838-b675-6484"
                                                }
                                            }, {
                                                _: "1",
                                                "$": {
                                                    name: "D",
                                                    typeId: "ae8a-3137-d65b-4ca7"
                                                }
                                            }, {
                                                _: "Blast.",
                                                "$": {
                                                    name: "Abilities",
                                                    typeId: "837d-5e63-aeb7-1410"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "a3f7-32ab-e4e3-95cb::379f-e75a-919e-d131::b250-1f2e-4904-0eb4::3bf6-b4f7-6b2f-bb7b",
                                            name: "Krak grenades",
                                            hidden: "false",
                                            typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                            typeName: "Weapon"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "6\"",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                }
                                            }, {
                                                _: "Grenade 1",
                                                "$": {
                                                    name: "Type",
                                                    typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                }
                                            }, {
                                                _: "6",
                                                "$": {
                                                    name: "S",
                                                    typeId: "59b1-319e-ec13-d466"
                                                }
                                            }, {
                                                _: "-1",
                                                "$": {
                                                    name: "AP",
                                                    typeId: "75aa-a838-b675-6484"
                                                }
                                            }, {
                                                _: "D3",
                                                "$": {
                                                    name: "D",
                                                    typeId: "ae8a-3137-d65b-4ca7"
                                                }
                                            }, {
                                                _: "-",
                                                "$": {
                                                    name: "Abilities",
                                                    typeId: "837d-5e63-aeb7-1410"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "02ea-ce44-bed9-4557",
                                    name: "Smite",
                                    entryId: "a3f7-32ab-e4e3-95cb::5930-7d72-cb27-296d::03fd-db47-5333-1e1f",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "a3f7-32ab-e4e3-95cb::5930-7d72-cb27-296d::72f4-48ff-fafb-c876::5821-6c45-8572-7e0e",
                                            name: "Smite",
                                            hidden: "false",
                                            typeId: "ae70-4738-0161-bec0",
                                            typeName: "Psychic Power"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "5",
                                                "$": {
                                                    name: "Warp Charge",
                                                    typeId: "5ffd-b800-c317-532a"
                                                }
                                            }, {
                                                _: "18\"",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "fd64-cbc4-94de-24cc"
                                                }
                                            }, {
                                                _: "Smite has a warp charge value of 5. If manifested, the closest visible enemy unit within 18\" of the psyker suffers D3 mortal wounds (pg 181). If the result of the Psychic test was more than 10 the target suffers D6 mortal wounds instead.",
                                                "$": {
                                                    name: "Details",
                                                    typeId: "ad96-dfa4-b4ed-656d"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }],
                                categories: [{
                                    category: [{
                                        "$": {
                                            id: "26ca-c598-7c30-dcb4",
                                            name: "Psyker",
                                            entryId: "e691-aad7-d21c-1023",
                                            primary: "false"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "6883-fca3-896c-193b",
                                    name: "Mark of Slaanesh",
                                    entryId: "a3f7-32ab-e4e3-95cb::42fb-602e-5b94-d9dc::81f9-01f6-e82e-7eec",
                                    entryGroupId: "a3f7-32ab-e4e3-95cb::42fb-602e-5b94-d9dc::45e8-d3d1-105b-90a3",
                                    number: "1",
                                    type: "upgrade"
                                },
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }],
                                categories: [{
                                    category: [{
                                        "$": {
                                            id: "6465-b3d5-addd-a6e2",
                                            name: "Faction: Slaanesh",
                                            entryId: "1da2-76db-f76f-6b6c",
                                            primary: "false"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "d5c3-cc9a-88e0-17bf",
                                    name: "Incursion",
                                    entryId: "a3f7-32ab-e4e3-95cb::145b-536d-a334-11bc::d4c5-2856-d4af-eeca::b174-341b-f01d-c28b",
                                    entryGroupId: "a3f7-32ab-e4e3-95cb::145b-536d-a334-11bc::d5b0-3c0c-7edf-913f",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "a3f7-32ab-e4e3-95cb::145b-536d-a334-11bc::d4c5-2856-d4af-eeca::19fb-2be8-bc72-290f",
                                            name: "Incursion",
                                            hidden: "false",
                                            typeId: "ae70-4738-0161-bec0",
                                            typeName: "Psychic Power"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "7",
                                                "$": {
                                                    name: "Warp Charge",
                                                    typeId: "5ffd-b800-c317-532a"
                                                }
                                            }, {
                                                _: "N/A",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "fd64-cbc4-94de-24cc"
                                                }
                                            }, {
                                                _: "If manifested, the psyker can immediately summon attempt to summon a unit of DAEMONS to the battlefield using the Daemonic Ritual ability as if it were the Movement phase. When doing so, roll up to 4 dice instead of up to 3. The psyker will not suffer any mortal wounds as a result of doubles or triples being rolled for this Daemonic Ritual.",
                                                "$": {
                                                    name: "Details",
                                                    typeId: "ad96-dfa4-b4ed-656d"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "5a08-caf8-2918-953a",
                                    name: "Mutated Invigoration",
                                    entryId: "a3f7-32ab-e4e3-95cb::145b-536d-a334-11bc::af8a-3c74-6622-c116::6edd-dbff-507c-fbe0",
                                    entryGroupId: "a3f7-32ab-e4e3-95cb::145b-536d-a334-11bc::d5b0-3c0c-7edf-913f",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "a3f7-32ab-e4e3-95cb::145b-536d-a334-11bc::af8a-3c74-6622-c116::b2ef-d3dc-e282-580b",
                                            name: "Mutated Invigoration",
                                            hidden: "false",
                                            typeId: "ae70-4738-0161-bec0",
                                            typeName: "Psychic Power"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "7",
                                                "$": {
                                                    name: "Warp Charge",
                                                    typeId: "5ffd-b800-c317-532a"
                                                }
                                            }, {
                                                _: "18\"",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "fd64-cbc4-94de-24cc"
                                                }
                                            }, {
                                                _: "If manifested, select a friendly CHAOS SPAWN, <LEGION> POSSESSED, or <LEGION> CULT OF DESTRUCTION unit within 18\" of the psyker. Until the start of your next Psychic phase, that unit will gain a bonus depending on what unit it is, as below: 1. You can re-roll the dice when rolling for that Chaos Spawn's Mutated Beyond Reason ability. 2. You can re-roll the dice when rolling for the Attacks characteristic of that unit of Possessed due to its Writhing Tentacles ability. 3. You can re-roll one of the dice when rolling for the Strength, AP and Damage characteristics of that Cult of Destruction unit's weapons due to its Fleshmetal Guns or Fleshmetal Weapons ability.",
                                                "$": {
                                                    name: "Details",
                                                    typeId: "ad96-dfa4-b4ed-656d"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        costs: [{
                            cost: [{
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "5.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "95.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "4849-a668-7033-f4c0",
                                    name: "Faction: Chaos",
                                    entryId: "5cf1-acf2-ca3b-c2e5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "f105-0c67-238c-3fd7",
                                    name: "Faction: <Mark of Chaos>",
                                    entryId: "a61a-08c8-c7f7-9f78",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "9a82-6583-aba2-c8b3",
                                    name: "Faction: Heretic Astartes",
                                    entryId: "ca10-a5dd-f54f-0ed5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "15b2-7e85-2e7f-b468",
                                    name: "Faction: <Legion>",
                                    entryId: "b2b6-8e4a-9c74-cc37",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "0b06-93fd-0a20-3728",
                                    name: "Character",
                                    entryId: "ef18-746a-369f-43a4",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "c72e-4627-2a37-b2a4",
                                    name: "Infantry",
                                    entryId: "3d52-fccf-10c0-3fae",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "f774-faeb-8e4d-ea80",
                                    name: "Psyker",
                                    entryId: "e691-aad7-d21c-1023",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "19dc-f6d2-fa01-ef20",
                                    name: "Master of Possession",
                                    entryId: "5eb2-4f76-c46f-9530",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "5eb2-8438-7a90-2c91",
                                    name: "HQ",
                                    entryId: "848a6ff2-0def-4c72-8433-ff7da70e6bc7",
                                    primary: "true"
                                }
                            }]
                        }]
                    }, {
                        "$": {
                            id: "ccca-b8af-d0e3-5dee",
                            name: "Chaos Cultists",
                            entryId: "68a1-ca29-c0ee-362e::b9a9-557f-f8fb-4377",
                            publicationId: "cb54-c035-pubN125652",
                            page: "132",
                            number: "1",
                            type: "unit"
                        },
                        profiles: [{
                            profile: [{
                                "$": {
                                    id: "68a1-ca29-c0ee-362e::7ec9-ce9c-3f03-c5ec",
                                    name: "Mere Mortals",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "CHAOS CULTIST units do not gain a Legion Trait.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "68a1-ca29-c0ee-362e::673b-8083-80fa-c82c",
                                    name: "Chaos Cultist",
                                    hidden: "false",
                                    typeId: "800f-21d0-4387-c943",
                                    typeName: "Unit"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "6\"",
                                        "$": {
                                            name: "M",
                                            typeId: "0bdf-a96e-9e38-7779"
                                        }
                                    }, {
                                        _: "4+",
                                        "$": {
                                            name: "WS",
                                            typeId: "e7f0-1278-0250-df0c"
                                        }
                                    }, {
                                        _: "4+",
                                        "$": {
                                            name: "BS",
                                            typeId: "381b-eb28-74c3-df5f"
                                        }
                                    }, {
                                        _: "3",
                                        "$": {
                                            name: "S",
                                            typeId: "2218-aa3c-265f-2939"
                                        }
                                    }, {
                                        _: "3",
                                        "$": {
                                            name: "T",
                                            typeId: "9c9f-9774-a358-3a39"
                                        }
                                    }, {
                                        _: "1",
                                        "$": {
                                            name: "W",
                                            typeId: "f330-5e6e-4110-0978"
                                        }
                                    }, {
                                        _: "1",
                                        "$": {
                                            name: "A",
                                            typeId: "13fc-b29b-31f2-ab9f"
                                        }
                                    }, {
                                        _: "5",
                                        "$": {
                                            name: "Ld",
                                            typeId: "00ca-f8b8-876d-b705"
                                        }
                                    }, {
                                        _: "6+",
                                        "$": {
                                            name: "Save",
                                            typeId: "c0df-df94-abd7-e8d3"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        selections: [{
                            selection: [{
                                "$": {
                                    id: "6340-8b42-f0dd-84e2",
                                    name: "Cultist Champion",
                                    entryId: "68a1-ca29-c0ee-362e::1c33-1745-41e1-1d76",
                                    number: "1",
                                    type: "model"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "68a1-ca29-c0ee-362e::2b81-f899-03c0-5b3d",
                                            name: "Cultist Champion",
                                            hidden: "false",
                                            typeId: "800f-21d0-4387-c943",
                                            typeName: "Unit"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "6\"",
                                                "$": {
                                                    name: "M",
                                                    typeId: "0bdf-a96e-9e38-7779"
                                                }
                                            }, {
                                                _: "4+",
                                                "$": {
                                                    name: "WS",
                                                    typeId: "e7f0-1278-0250-df0c"
                                                }
                                            }, {
                                                _: "4+",
                                                "$": {
                                                    name: "BS",
                                                    typeId: "381b-eb28-74c3-df5f"
                                                }
                                            }, {
                                                _: "3",
                                                "$": {
                                                    name: "S",
                                                    typeId: "2218-aa3c-265f-2939"
                                                }
                                            }, {
                                                _: "3",
                                                "$": {
                                                    name: "T",
                                                    typeId: "9c9f-9774-a358-3a39"
                                                }
                                            }, {
                                                _: "1",
                                                "$": {
                                                    name: "W",
                                                    typeId: "f330-5e6e-4110-0978"
                                                }
                                            }, {
                                                _: "2",
                                                "$": {
                                                    name: "A",
                                                    typeId: "13fc-b29b-31f2-ab9f"
                                                }
                                            }, {
                                                _: "6",
                                                "$": {
                                                    name: "Ld",
                                                    typeId: "00ca-f8b8-876d-b705"
                                                }
                                            }, {
                                                _: "6+",
                                                "$": {
                                                    name: "Save",
                                                    typeId: "c0df-df94-abd7-e8d3"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "6b37-02c5-85e9-2ed6",
                                            name: "Autogun",
                                            entryId: "68a1-ca29-c0ee-362e::db9d-de3a-07f9-a5dc::5752-d165-5e03-d38c",
                                            entryGroupId: "68a1-ca29-c0ee-362e::8d89-78ae-e5fa-291c",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "68a1-ca29-c0ee-362e::db9d-de3a-07f9-a5dc::f8c7-9649-7ee6-49a3::fcde-3e6a-e240-1157",
                                                    name: "Autogun",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "24\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Rapid Fire 1",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "3",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "5.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "5413-0389-6ce8-ef50",
                                    name: "Chaos Cultist w/ Autogun",
                                    entryId: "68a1-ca29-c0ee-362e::d39b-ba24-5ab4-e5a4",
                                    entryGroupId: "68a1-ca29-c0ee-362e::dcc5-c752-2c5a-7695",
                                    number: "9",
                                    type: "model"
                                },
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "34ad-f7be-f128-b994",
                                            name: "Autogun",
                                            entryId: "68a1-ca29-c0ee-362e::943f-3c9d-d801-3913",
                                            number: "9",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "68a1-ca29-c0ee-362e::f764-243e-5066-0a2c::fcde-3e6a-e240-1157",
                                                    name: "Autogun",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "24\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Rapid Fire 1",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "3",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "45.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "1c83-7622-9f06-4fc1",
                                    name: "Mark of Slaanesh",
                                    entryId: "68a1-ca29-c0ee-362e::b389-3b94-e25f-9176::81f9-01f6-e82e-7eec",
                                    entryGroupId: "68a1-ca29-c0ee-362e::b389-3b94-e25f-9176::45e8-d3d1-105b-90a3",
                                    number: "1",
                                    type: "upgrade"
                                },
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }],
                                categories: [{
                                    category: [{
                                        "$": {
                                            id: "f158-5fa7-84d7-490b",
                                            name: "Faction: Slaanesh",
                                            entryId: "1da2-76db-f76f-6b6c",
                                            primary: "false"
                                        }
                                    }, {
                                        "$": {
                                            id: "bd6f-74c6-6f81-2291",
                                            name: "Faction: <Legion>",
                                            entryId: "b2b6-8e4a-9c74-cc37",
                                            primary: "false"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        costs: [{
                            cost: [{
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "3.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "0.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "b7d7-d7b6-5c97-4dcf",
                                    name: "Troops",
                                    entryId: "5d76b6f5-20ae-4d70-8f59-ade72a2add3a",
                                    primary: "true"
                                }
                            }, {
                                "$": {
                                    id: "e921-1e36-ce39-57b2",
                                    name: "Faction: Heretic Astartes",
                                    entryId: "ca10-a5dd-f54f-0ed5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "24c0-8a21-1249-a7d8",
                                    name: "Infantry",
                                    entryId: "3d52-fccf-10c0-3fae",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "b60d-4e74-fa74-01a2",
                                    name: "Faction: Chaos",
                                    entryId: "5cf1-acf2-ca3b-c2e5",
                                    primary: "false"
                                }
                            }]
                        }]
                    }, {
                        "$": {
                            id: "b323-0ac8-3127-b2ad",
                            name: "Chaos Cultists",
                            entryId: "68a1-ca29-c0ee-362e::b9a9-557f-f8fb-4377",
                            publicationId: "cb54-c035-pubN125652",
                            page: "132",
                            number: "1",
                            type: "unit"
                        },
                        profiles: [{
                            profile: [{
                                "$": {
                                    id: "68a1-ca29-c0ee-362e::7ec9-ce9c-3f03-c5ec",
                                    name: "Mere Mortals",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "CHAOS CULTIST units do not gain a Legion Trait.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "68a1-ca29-c0ee-362e::673b-8083-80fa-c82c",
                                    name: "Chaos Cultist",
                                    hidden: "false",
                                    typeId: "800f-21d0-4387-c943",
                                    typeName: "Unit"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "6\"",
                                        "$": {
                                            name: "M",
                                            typeId: "0bdf-a96e-9e38-7779"
                                        }
                                    }, {
                                        _: "4+",
                                        "$": {
                                            name: "WS",
                                            typeId: "e7f0-1278-0250-df0c"
                                        }
                                    }, {
                                        _: "4+",
                                        "$": {
                                            name: "BS",
                                            typeId: "381b-eb28-74c3-df5f"
                                        }
                                    }, {
                                        _: "3",
                                        "$": {
                                            name: "S",
                                            typeId: "2218-aa3c-265f-2939"
                                        }
                                    }, {
                                        _: "3",
                                        "$": {
                                            name: "T",
                                            typeId: "9c9f-9774-a358-3a39"
                                        }
                                    }, {
                                        _: "1",
                                        "$": {
                                            name: "W",
                                            typeId: "f330-5e6e-4110-0978"
                                        }
                                    }, {
                                        _: "1",
                                        "$": {
                                            name: "A",
                                            typeId: "13fc-b29b-31f2-ab9f"
                                        }
                                    }, {
                                        _: "5",
                                        "$": {
                                            name: "Ld",
                                            typeId: "00ca-f8b8-876d-b705"
                                        }
                                    }, {
                                        _: "6+",
                                        "$": {
                                            name: "Save",
                                            typeId: "c0df-df94-abd7-e8d3"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        selections: [{
                            selection: [{
                                "$": {
                                    id: "3b5e-6ecf-3f01-5fdc",
                                    name: "Cultist Champion",
                                    entryId: "68a1-ca29-c0ee-362e::1c33-1745-41e1-1d76",
                                    number: "1",
                                    type: "model"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "68a1-ca29-c0ee-362e::2b81-f899-03c0-5b3d",
                                            name: "Cultist Champion",
                                            hidden: "false",
                                            typeId: "800f-21d0-4387-c943",
                                            typeName: "Unit"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "6\"",
                                                "$": {
                                                    name: "M",
                                                    typeId: "0bdf-a96e-9e38-7779"
                                                }
                                            }, {
                                                _: "4+",
                                                "$": {
                                                    name: "WS",
                                                    typeId: "e7f0-1278-0250-df0c"
                                                }
                                            }, {
                                                _: "4+",
                                                "$": {
                                                    name: "BS",
                                                    typeId: "381b-eb28-74c3-df5f"
                                                }
                                            }, {
                                                _: "3",
                                                "$": {
                                                    name: "S",
                                                    typeId: "2218-aa3c-265f-2939"
                                                }
                                            }, {
                                                _: "3",
                                                "$": {
                                                    name: "T",
                                                    typeId: "9c9f-9774-a358-3a39"
                                                }
                                            }, {
                                                _: "1",
                                                "$": {
                                                    name: "W",
                                                    typeId: "f330-5e6e-4110-0978"
                                                }
                                            }, {
                                                _: "2",
                                                "$": {
                                                    name: "A",
                                                    typeId: "13fc-b29b-31f2-ab9f"
                                                }
                                            }, {
                                                _: "6",
                                                "$": {
                                                    name: "Ld",
                                                    typeId: "00ca-f8b8-876d-b705"
                                                }
                                            }, {
                                                _: "6+",
                                                "$": {
                                                    name: "Save",
                                                    typeId: "c0df-df94-abd7-e8d3"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "e679-bd72-c74a-2248",
                                            name: "Autogun",
                                            entryId: "68a1-ca29-c0ee-362e::db9d-de3a-07f9-a5dc::5752-d165-5e03-d38c",
                                            entryGroupId: "68a1-ca29-c0ee-362e::8d89-78ae-e5fa-291c",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "68a1-ca29-c0ee-362e::db9d-de3a-07f9-a5dc::f8c7-9649-7ee6-49a3::fcde-3e6a-e240-1157",
                                                    name: "Autogun",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "24\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Rapid Fire 1",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "3",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "5.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "dff1-eee0-a20f-ffa5",
                                    name: "Chaos Cultist w/ Autogun",
                                    entryId: "68a1-ca29-c0ee-362e::d39b-ba24-5ab4-e5a4",
                                    entryGroupId: "68a1-ca29-c0ee-362e::dcc5-c752-2c5a-7695",
                                    number: "9",
                                    type: "model"
                                },
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "a4de-64e3-c53b-f05b",
                                            name: "Autogun",
                                            entryId: "68a1-ca29-c0ee-362e::943f-3c9d-d801-3913",
                                            number: "9",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "68a1-ca29-c0ee-362e::f764-243e-5066-0a2c::fcde-3e6a-e240-1157",
                                                    name: "Autogun",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "24\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Rapid Fire 1",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "3",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "45.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "8f50-b88f-1eaa-09a2",
                                    name: "Mark of Slaanesh",
                                    entryId: "68a1-ca29-c0ee-362e::b389-3b94-e25f-9176::81f9-01f6-e82e-7eec",
                                    entryGroupId: "68a1-ca29-c0ee-362e::b389-3b94-e25f-9176::45e8-d3d1-105b-90a3",
                                    number: "1",
                                    type: "upgrade"
                                },
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }],
                                categories: [{
                                    category: [{
                                        "$": {
                                            id: "d643-00d3-6f85-1d4b",
                                            name: "Faction: Slaanesh",
                                            entryId: "1da2-76db-f76f-6b6c",
                                            primary: "false"
                                        }
                                    }, {
                                        "$": {
                                            id: "7537-9e7c-f2a5-d76a",
                                            name: "Faction: <Legion>",
                                            entryId: "b2b6-8e4a-9c74-cc37",
                                            primary: "false"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        costs: [{
                            cost: [{
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "3.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "0.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "85c0-7bd4-0b28-c4dc",
                                    name: "Troops",
                                    entryId: "5d76b6f5-20ae-4d70-8f59-ade72a2add3a",
                                    primary: "true"
                                }
                            }, {
                                "$": {
                                    id: "5f42-c4f8-9652-286b",
                                    name: "Faction: Heretic Astartes",
                                    entryId: "ca10-a5dd-f54f-0ed5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "eb52-9a92-75ea-000f",
                                    name: "Infantry",
                                    entryId: "3d52-fccf-10c0-3fae",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "d194-3caa-dd6f-1e6a",
                                    name: "Faction: Chaos",
                                    entryId: "5cf1-acf2-ca3b-c2e5",
                                    primary: "false"
                                }
                            }]
                        }]
                    }, {
                        "$": {
                            id: "f727-381b-68e6-0368",
                            name: "Legion",
                            entryId: "b274-5d64-8f94-408c::5e4e-743a-611e-3fb6",
                            number: "1",
                            type: "upgrade"
                        },
                        selections: [{
                            selection: [{
                                "$": {
                                    id: "8b0c-0ec7-4eea-552c",
                                    name: "Emperor's Children",
                                    entryId: "b274-5d64-8f94-408c::922b-abe3-887e-ff59::51f6-1db1-3e75-3d4b",
                                    entryGroupId: "b274-5d64-8f94-408c::922b-abe3-887e-ff59::3c82-3712-f5d1-daca",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "b274-5d64-8f94-408c::922b-abe3-887e-ff59::0f4b-de79-90bd-aedf",
                                            name: "Flawless Perfection",
                                            publicationId: "cb54-c035-pubN125652",
                                            page: "157",
                                            hidden: "false",
                                            typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                            typeName: "Abilities"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "If your army is Battle-forged, all CHARACTER, INFANTRY, BIKERS and HELBRUTE units in an EMPERORS CHILDREN Detachment gain the following ability: Units with this trait always fight first in the Fight phase, even if they didn't charge. If the enemy has units that have charged, or that have a similar ability, then alternate choosing units to fight, starting with the player whose turn is taking place.",
                                                "$": {
                                                    name: "Description",
                                                    typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        costs: [{
                            cost: [{
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "0.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "f8d7-7b95-898d-9b81",
                                    name: "Configuration",
                                    entryId: "fcff-0f21-93e6-1ddc",
                                    primary: "true"
                                }
                            }]
                        }]
                    }, {
                        "$": {
                            id: "6fb1-c237-1443-a761",
                            name: "Noise Marines",
                            entryId: "e435-a8fc-769c-dd22::b0d5-1a19-e2b9-d5bc",
                            publicationId: "cb54-c035-pubN125652",
                            page: "143",
                            number: "1",
                            type: "unit"
                        },
                        rules: [{
                            rule: [{
                                "$": {
                                    id: "e435-a8fc-769c-dd22::c958-7e8f-9255-33e2::dfc0-3276-8ad6-eea9",
                                    name: "Hateful Assault",
                                    hidden: "false"
                                },
                                description: ["If this unit makes a charge move, is charged or performs a Heroic Intervention, add 1 to the Attacks characteristic of models in this unit until the end of the turn."]
                            }, {
                                "$": {
                                    id: "e435-a8fc-769c-dd22::c958-7e8f-9255-33e2::e990-5b43-7340-bfe9",
                                    name: "Malicious Volleys",
                                    hidden: "false"
                                },
                                description: ["Instead of following the normal rules for Rapid Fire weapons, models in this unit firing Rapid Fire bolt weapons make double the number of attacks if any of the following apply:\n\n• The firing model’s target is within half the weapon’s maximum range.\n• The firing model is INFANTRY and every model in its unit Remained Stationary in your previous Movement phase.\n• The firing model is a TERMINATOR, BIKER or HELBRUTE.\n\nFor the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon with the Rapid Fire type. A bolt weapon is any weapon whose profile includes the word ‘bolt’ (e.g. boltgun, bolt pistol, combibolter, Inferno boltgun). Rules that apply to bolt weapons also apply when firing the boltgun profile of combi-weapons and when firing Artefacts of Chaos that replaced a bolt weapon, (e.g. Spitespitter). The Talon of Horus is also a Rapid Fire bolt weapon."]
                            }]
                        }],
                        profiles: [{
                            profile: [{
                                "$": {
                                    id: "e435-a8fc-769c-dd22::f5d1-03f7-5c9b-1527",
                                    name: "Music of the Apocalypse",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "Each time a model in this unit is slain, it is driven to make one last attack before succumbing to its injuries. Do not remove the slain model yet - after the attacking unit has finished making all its attacks, the slain model can shoot with one of its ranged weapons as if it were your Shooting phase. The slain model is then removed as a casualty as normal.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "e435-a8fc-769c-dd22::f5f3-601e-e449-a5e6",
                                    name: "Noise Marine",
                                    hidden: "false",
                                    typeId: "800f-21d0-4387-c943",
                                    typeName: "Unit"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "6\"",
                                        "$": {
                                            name: "M",
                                            typeId: "0bdf-a96e-9e38-7779"
                                        }
                                    }, {
                                        _: "3+",
                                        "$": {
                                            name: "WS",
                                            typeId: "e7f0-1278-0250-df0c"
                                        }
                                    }, {
                                        _: "3+",
                                        "$": {
                                            name: "BS",
                                            typeId: "381b-eb28-74c3-df5f"
                                        }
                                    }, {
                                        _: "4",
                                        "$": {
                                            name: "S",
                                            typeId: "2218-aa3c-265f-2939"
                                        }
                                    }, {
                                        _: "4",
                                        "$": {
                                            name: "T",
                                            typeId: "9c9f-9774-a358-3a39"
                                        }
                                    }, {
                                        _: "1",
                                        "$": {
                                            name: "W",
                                            typeId: "f330-5e6e-4110-0978"
                                        }
                                    }, {
                                        _: "2",
                                        "$": {
                                            name: "A",
                                            typeId: "13fc-b29b-31f2-ab9f"
                                        }
                                    }, {
                                        _: "7",
                                        "$": {
                                            name: "Ld",
                                            typeId: "00ca-f8b8-876d-b705"
                                        }
                                    }, {
                                        _: "3+",
                                        "$": {
                                            name: "Save",
                                            typeId: "c0df-df94-abd7-e8d3"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "e435-a8fc-769c-dd22::c51d-f2ae-3289-c4ee",
                                    name: "Masters of the Kakophoni",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "The Battlefield Role of EMPEROR'S CHILDREN Noise Marines is Troops instead of Elites.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "e435-a8fc-769c-dd22::5094-a05c-fb4d-096a::37a4-1d84-4ef0-c4f6",
                                    name: "Death to the False Emperor",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "Each time you roll a hit roll of 6+ for a model with this ability in the Fight phase, it can, if it was targeting an IMPERIUM unit, immediately make an extra attack against the same unit using the same weapon. These extra attacks cannot themselves generate any further attacks.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        selections: [{
                            selection: [{
                                "$": {
                                    id: "2cfa-94b2-fbb3-948e",
                                    name: "Noise Champion",
                                    entryId: "e435-a8fc-769c-dd22::e87b-9cae-23f5-f2c1",
                                    number: "1",
                                    type: "model"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "e435-a8fc-769c-dd22::4444-9b7a-f41d-f9a7",
                                            name: "Noise Champion",
                                            hidden: "false",
                                            typeId: "800f-21d0-4387-c943",
                                            typeName: "Unit"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "6\"",
                                                "$": {
                                                    name: "M",
                                                    typeId: "0bdf-a96e-9e38-7779"
                                                }
                                            }, {
                                                _: "3+",
                                                "$": {
                                                    name: "WS",
                                                    typeId: "e7f0-1278-0250-df0c"
                                                }
                                            }, {
                                                _: "3+",
                                                "$": {
                                                    name: "BS",
                                                    typeId: "381b-eb28-74c3-df5f"
                                                }
                                            }, {
                                                _: "4",
                                                "$": {
                                                    name: "S",
                                                    typeId: "2218-aa3c-265f-2939"
                                                }
                                            }, {
                                                _: "4",
                                                "$": {
                                                    name: "T",
                                                    typeId: "9c9f-9774-a358-3a39"
                                                }
                                            }, {
                                                _: "1",
                                                "$": {
                                                    name: "W",
                                                    typeId: "f330-5e6e-4110-0978"
                                                }
                                            }, {
                                                _: "3",
                                                "$": {
                                                    name: "A",
                                                    typeId: "13fc-b29b-31f2-ab9f"
                                                }
                                            }, {
                                                _: "8",
                                                "$": {
                                                    name: "Ld",
                                                    typeId: "00ca-f8b8-876d-b705"
                                                }
                                            }, {
                                                _: "3+",
                                                "$": {
                                                    name: "Save",
                                                    typeId: "c0df-df94-abd7-e8d3"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "0c2c-faba-6dc3-297f",
                                            name: "Frag & Krak grenades",
                                            entryId: "e435-a8fc-769c-dd22::878f-b23c-b2cd-4a18::cddf-945e-1335-e681",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "e435-a8fc-769c-dd22::878f-b23c-b2cd-4a18::61a4-e2d3-522d-c838::fdd8-1a5f-5722-d6ee",
                                                    name: "Frag grenades",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "6\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Grenade D6",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "3",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "Blast.",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }, {
                                                "$": {
                                                    id: "e435-a8fc-769c-dd22::878f-b23c-b2cd-4a18::b250-1f2e-4904-0eb4::3bf6-b4f7-6b2f-bb7b",
                                                    name: "Krak grenades",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "6\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Grenade 1",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "6",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "-1",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "D3",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "491c-6b66-8b4b-9778",
                                            name: "Boltgun",
                                            entryId: "e435-a8fc-769c-dd22::2c59-199d-f706-0a15::23ea-c120-d441-63aa::b61f-a3c1-827d-c5b6",
                                            entryGroupId: "e435-a8fc-769c-dd22::2c59-199d-f706-0a15::8756-a83e-1786-ff33",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "e435-a8fc-769c-dd22::2c59-199d-f706-0a15::23ea-c120-d441-63aa::b122-fbba-f2e4-b4ff::3d4b-95ea-f860-dd22",
                                                    name: "Boltgun",
                                                    page: "",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "24\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Rapid Fire 1",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "4",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "1e32-2e07-68fc-7861",
                                            name: "Bolt pistol",
                                            entryId: "e435-a8fc-769c-dd22::2c59-199d-f706-0a15::33d1-75bb-bc43-c8aa::0334-f487-8229-0c1a",
                                            entryGroupId: "e435-a8fc-769c-dd22::2c59-199d-f706-0a15::4017-0da2-5569-0916",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "e435-a8fc-769c-dd22::2c59-199d-f706-0a15::33d1-75bb-bc43-c8aa::45bf-2847-b181-19e4::e6d5-677a-d8ed-f6a5",
                                                    name: "Bolt pistol",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "12\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Pistol 1",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "4",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "16.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "f627-1770-7e2e-5beb",
                                    name: "Marine w/ sonic blaster",
                                    entryId: "e435-a8fc-769c-dd22::9e4e-866c-0b2c-def4",
                                    entryGroupId: "e435-a8fc-769c-dd22::6a1b-b972-7ca0-854c",
                                    number: "19",
                                    type: "model"
                                },
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "5e0c-3ffb-c73c-9a57",
                                            name: "Sonic Blaster",
                                            entryId: "e435-a8fc-769c-dd22::6950-788e-09c8-1177",
                                            number: "19",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "e435-a8fc-769c-dd22::b050-a95f-8336-81d0",
                                                    name: "Sonic Blaster",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "24\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Assault 3",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "4",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "Units targeted by this weapon do not gain any bonus to their saving throws for being in cover.",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "95.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "a4b0-a1a2-e9b1-194e",
                                            name: "Bolt pistol",
                                            entryId: "e435-a8fc-769c-dd22::59c2-2823-e568-c0ed::37d3-7098-d596-9948",
                                            number: "19",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "e435-a8fc-769c-dd22::59c2-2823-e568-c0ed::113b-392d-19be-cffa::e6d5-677a-d8ed-f6a5",
                                                    name: "Bolt pistol",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "12\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Pistol 1",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "4",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "eb9d-cca1-7b6e-71d4",
                                            name: "Frag & Krak grenades",
                                            entryId: "e435-a8fc-769c-dd22::b0bc-9ebd-3254-95c6::cddf-945e-1335-e681",
                                            number: "19",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "e435-a8fc-769c-dd22::b0bc-9ebd-3254-95c6::61a4-e2d3-522d-c838::fdd8-1a5f-5722-d6ee",
                                                    name: "Frag grenades",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "6\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Grenade D6",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "3",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "Blast.",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }, {
                                                "$": {
                                                    id: "e435-a8fc-769c-dd22::b0bc-9ebd-3254-95c6::b250-1f2e-4904-0eb4::3bf6-b4f7-6b2f-bb7b",
                                                    name: "Krak grenades",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "6\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Grenade 1",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "6",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "-1",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "D3",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "304.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        costs: [{
                            cost: [{
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "20.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "0.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "db53-e1c6-3587-baf1",
                                    name: "Faction: Chaos",
                                    entryId: "5cf1-acf2-ca3b-c2e5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "f131-be76-3bab-2f1c",
                                    name: "Faction: Heretic Astartes",
                                    entryId: "ca10-a5dd-f54f-0ed5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "f80a-a4a7-33df-2d74",
                                    name: "Infantry",
                                    entryId: "3d52-fccf-10c0-3fae",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "04b6-c320-b368-793a",
                                    name: "Faction: Slaanesh",
                                    entryId: "1da2-76db-f76f-6b6c",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "fe08-1389-cdf1-94f6",
                                    name: "Faction: <Legion>",
                                    entryId: "b2b6-8e4a-9c74-cc37",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "87f5-18a0-4781-f930",
                                    name: "Faction: Emperor's Children",
                                    entryId: "649f-80f9-0d71-64c3",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "36d0-4837-53e8-1d32",
                                    name: "Troops",
                                    entryId: "5d76b6f5-20ae-4d70-8f59-ade72a2add3a",
                                    primary: "true"
                                }
                            }]
                        }]
                    }, {
                        "$": {
                            id: "c02d-54ae-818b-c7f5",
                            name: "Terminators",
                            entryId: "faf1-cd04-687a-b9d1::8a3b-80c7-0cf3-e044",
                            publicationId: "cb54-c035-pubN125652",
                            page: "137",
                            number: "1",
                            type: "unit"
                        },
                        rules: [{
                            rule: [{
                                "$": {
                                    id: "faf1-cd04-687a-b9d1::f5a4-f540-fd8f-a37c::dfc0-3276-8ad6-eea9",
                                    name: "Hateful Assault",
                                    hidden: "false"
                                },
                                description: ["If this unit makes a charge move, is charged or performs a Heroic Intervention, add 1 to the Attacks characteristic of models in this unit until the end of the turn."]
                            }, {
                                "$": {
                                    id: "faf1-cd04-687a-b9d1::f5a4-f540-fd8f-a37c::e990-5b43-7340-bfe9",
                                    name: "Malicious Volleys",
                                    hidden: "false"
                                },
                                description: ["Instead of following the normal rules for Rapid Fire weapons, models in this unit firing Rapid Fire bolt weapons make double the number of attacks if any of the following apply:\n\n• The firing model’s target is within half the weapon’s maximum range.\n• The firing model is INFANTRY and every model in its unit Remained Stationary in your previous Movement phase.\n• The firing model is a TERMINATOR, BIKER or HELBRUTE.\n\nFor the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon with the Rapid Fire type. A bolt weapon is any weapon whose profile includes the word ‘bolt’ (e.g. boltgun, bolt pistol, combibolter, Inferno boltgun). Rules that apply to bolt weapons also apply when firing the boltgun profile of combi-weapons and when firing Artefacts of Chaos that replaced a bolt weapon, (e.g. Spitespitter). The Talon of Horus is also a Rapid Fire bolt weapon."]
                            }]
                        }],
                        profiles: [{
                            profile: [{
                                "$": {
                                    id: "faf1-cd04-687a-b9d1::d79b-2e76-7321-e45b",
                                    name: "Terminator",
                                    hidden: "false",
                                    typeId: "800f-21d0-4387-c943",
                                    typeName: "Unit"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "5\"",
                                        "$": {
                                            name: "M",
                                            typeId: "0bdf-a96e-9e38-7779"
                                        }
                                    }, {
                                        _: "3+",
                                        "$": {
                                            name: "WS",
                                            typeId: "e7f0-1278-0250-df0c"
                                        }
                                    }, {
                                        _: "3+",
                                        "$": {
                                            name: "BS",
                                            typeId: "381b-eb28-74c3-df5f"
                                        }
                                    }, {
                                        _: "4",
                                        "$": {
                                            name: "S",
                                            typeId: "2218-aa3c-265f-2939"
                                        }
                                    }, {
                                        _: "4",
                                        "$": {
                                            name: "T",
                                            typeId: "9c9f-9774-a358-3a39"
                                        }
                                    }, {
                                        _: "2",
                                        "$": {
                                            name: "W",
                                            typeId: "f330-5e6e-4110-0978"
                                        }
                                    }, {
                                        _: "2",
                                        "$": {
                                            name: "A",
                                            typeId: "13fc-b29b-31f2-ab9f"
                                        }
                                    }, {
                                        _: "8",
                                        "$": {
                                            name: "Ld",
                                            typeId: "00ca-f8b8-876d-b705"
                                        }
                                    }, {
                                        _: "2+",
                                        "$": {
                                            name: "Save",
                                            typeId: "c0df-df94-abd7-e8d3"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "faf1-cd04-687a-b9d1::2835-d046-8ce7-775d::37a4-1d84-4ef0-c4f6",
                                    name: "Death to the False Emperor",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "Each time you roll a hit roll of 6+ for a model with this ability in the Fight phase, it can, if it was targeting an IMPERIUM unit, immediately make an extra attack against the same unit using the same weapon. These extra attacks cannot themselves generate any further attacks.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "faf1-cd04-687a-b9d1::eba0-a7bc-2c3a-d807::d4d3-93d9-8313-56c8",
                                    name: "Teleport Strike",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "During deployment, you can set up this model in a teleportarium chamber instead of placing it on the battlefield. At the end of any of your Movement phases the model can use a teleport strike to arrive on the battlefield - set it up anywhere on the battlefield that is more than 9\" away from any enemy models.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "faf1-cd04-687a-b9d1::7646-3052-fb3b-bc96::aa2e-f0e5-04d3-aae3",
                                    name: "Terminator Armour",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "Models in this unit have a 5+ invulnerable save.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        selections: [{
                            selection: [{
                                "$": {
                                    id: "13cf-e823-9598-47f5",
                                    name: "Terminator Champion",
                                    entryId: "faf1-cd04-687a-b9d1::d2c0-5ffd-5cb4-6158",
                                    number: "1",
                                    type: "model"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "faf1-cd04-687a-b9d1::9a5d-681c-a5ff-2f22",
                                            name: "Terminator Champion",
                                            hidden: "false",
                                            typeId: "800f-21d0-4387-c943",
                                            typeName: "Unit"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "5\"",
                                                "$": {
                                                    name: "M",
                                                    typeId: "0bdf-a96e-9e38-7779"
                                                }
                                            }, {
                                                _: "3+",
                                                "$": {
                                                    name: "WS",
                                                    typeId: "e7f0-1278-0250-df0c"
                                                }
                                            }, {
                                                _: "3+",
                                                "$": {
                                                    name: "BS",
                                                    typeId: "381b-eb28-74c3-df5f"
                                                }
                                            }, {
                                                _: "4",
                                                "$": {
                                                    name: "S",
                                                    typeId: "2218-aa3c-265f-2939"
                                                }
                                            }, {
                                                _: "4",
                                                "$": {
                                                    name: "T",
                                                    typeId: "9c9f-9774-a358-3a39"
                                                }
                                            }, {
                                                _: "2",
                                                "$": {
                                                    name: "W",
                                                    typeId: "f330-5e6e-4110-0978"
                                                }
                                            }, {
                                                _: "3",
                                                "$": {
                                                    name: "A",
                                                    typeId: "13fc-b29b-31f2-ab9f"
                                                }
                                            }, {
                                                _: "9",
                                                "$": {
                                                    name: "Ld",
                                                    typeId: "00ca-f8b8-876d-b705"
                                                }
                                            }, {
                                                _: "2+",
                                                "$": {
                                                    name: "Save",
                                                    typeId: "c0df-df94-abd7-e8d3"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "39bd-6a72-8799-66ed",
                                            name: "Combi-bolter",
                                            entryId: "faf1-cd04-687a-b9d1::79c4-72af-ec7d-e116::e4e5-5966-b9d9-51bd::eba0-9fc6-5334-a390",
                                            entryGroupId: "faf1-cd04-687a-b9d1::79c4-72af-ec7d-e116::72bd-9702-017a-b6e7",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::79c4-72af-ec7d-e116::e4e5-5966-b9d9-51bd::07a8-9262-dc1a-3c9d::0655-6c08-6402-46bf",
                                                    name: "Combi-bolter",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "24\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Rapid Fire 2",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "4",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "0d6b-da1d-3ec7-62f7",
                                            name: "Chainaxe",
                                            entryId: "faf1-cd04-687a-b9d1::79c4-72af-ec7d-e116::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::262d-dbbf-8474-791c",
                                            entryGroupId: "faf1-cd04-687a-b9d1::79c4-72af-ec7d-e116::055d-2bb3-2796-5b80::2607-d554-732e-c0b0",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::79c4-72af-ec7d-e116::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::deb2-33c4-6887-1bd8::fc56-4e98-3cdc-3659",
                                                    name: "Chainaxe",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "+1",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "-1",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "28.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "14eb-5399-7788-ad43",
                                    name: "Terminator",
                                    entryId: "faf1-cd04-687a-b9d1::97bd-ee10-9c11-10b5",
                                    entryGroupId: "faf1-cd04-687a-b9d1::46af-d032-70d6-777c",
                                    number: "1",
                                    type: "model"
                                },
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "3606-6e13-602b-89d8",
                                            name: "Combi-bolter",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::eba0-9fc6-5334-a390",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::72bd-9702-017a-b6e7",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::07a8-9262-dc1a-3c9d::0655-6c08-6402-46bf",
                                                    name: "Combi-bolter",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "24\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Rapid Fire 2",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "4",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "5ec2-d532-72f6-4dd8",
                                            name: "Chainaxe",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::262d-dbbf-8474-791c",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::2607-d554-732e-c0b0",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::deb2-33c4-6887-1bd8::fc56-4e98-3cdc-3659",
                                                    name: "Chainaxe",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "+1",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "-1",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "28.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "6d20-4818-89c9-26a9",
                                    name: "Terminator",
                                    entryId: "faf1-cd04-687a-b9d1::97bd-ee10-9c11-10b5",
                                    entryGroupId: "faf1-cd04-687a-b9d1::46af-d032-70d6-777c",
                                    number: "1",
                                    type: "model"
                                },
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "1d55-c14b-1b58-fe0e",
                                            name: "Combi-bolter",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::eba0-9fc6-5334-a390",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::72bd-9702-017a-b6e7",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::07a8-9262-dc1a-3c9d::0655-6c08-6402-46bf",
                                                    name: "Combi-bolter",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "24\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Rapid Fire 2",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "4",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "9e62-59f2-07c7-1e35",
                                            name: "Chainaxe",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::262d-dbbf-8474-791c",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::2607-d554-732e-c0b0",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::deb2-33c4-6887-1bd8::fc56-4e98-3cdc-3659",
                                                    name: "Chainaxe",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "+1",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "-1",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "28.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "5617-8553-5866-325a",
                                    name: "Terminator",
                                    entryId: "faf1-cd04-687a-b9d1::97bd-ee10-9c11-10b5",
                                    entryGroupId: "faf1-cd04-687a-b9d1::46af-d032-70d6-777c",
                                    number: "1",
                                    type: "model"
                                },
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "2027-4a8c-7f10-b9ed",
                                            name: "Combi-bolter",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::eba0-9fc6-5334-a390",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::72bd-9702-017a-b6e7",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::07a8-9262-dc1a-3c9d::0655-6c08-6402-46bf",
                                                    name: "Combi-bolter",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "24\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Rapid Fire 2",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "4",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "fb4b-e16b-7b35-a6bf",
                                            name: "Chainaxe",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::262d-dbbf-8474-791c",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::2607-d554-732e-c0b0",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::deb2-33c4-6887-1bd8::fc56-4e98-3cdc-3659",
                                                    name: "Chainaxe",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "+1",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "-1",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "28.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "34c6-77b7-7f6e-a76f",
                                    name: "Terminator",
                                    entryId: "faf1-cd04-687a-b9d1::97bd-ee10-9c11-10b5",
                                    entryGroupId: "faf1-cd04-687a-b9d1::46af-d032-70d6-777c",
                                    number: "1",
                                    type: "model"
                                },
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "096c-44b6-5069-1fc6",
                                            name: "Combi-bolter",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::eba0-9fc6-5334-a390",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::72bd-9702-017a-b6e7",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::07a8-9262-dc1a-3c9d::0655-6c08-6402-46bf",
                                                    name: "Combi-bolter",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "24\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Rapid Fire 2",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "4",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "bc2b-8551-4ffa-6dd2",
                                            name: "Chainaxe",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::262d-dbbf-8474-791c",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::2607-d554-732e-c0b0",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::deb2-33c4-6887-1bd8::fc56-4e98-3cdc-3659",
                                                    name: "Chainaxe",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "+1",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "-1",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "28.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "aa36-5c7a-7692-af91",
                                    name: "Mark of Slaanesh",
                                    entryId: "faf1-cd04-687a-b9d1::8e5b-0087-a187-f98a::81f9-01f6-e82e-7eec",
                                    entryGroupId: "faf1-cd04-687a-b9d1::8e5b-0087-a187-f98a::45e8-d3d1-105b-90a3",
                                    number: "1",
                                    type: "upgrade"
                                },
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }],
                                categories: [{
                                    category: [{
                                        "$": {
                                            id: "8e50-4d17-7885-7ebf",
                                            name: "Faction: Slaanesh",
                                            entryId: "1da2-76db-f76f-6b6c",
                                            primary: "false"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "a275-9ce3-854d-7989",
                                    name: "Icon of Excess",
                                    entryId: "faf1-cd04-687a-b9d1::1b66-e3fb-e387-461d::5b82-0948-eac4-b35f",
                                    page: "0",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "faf1-cd04-687a-b9d1::1b66-e3fb-e387-461d::3ce1-ad54-409c-f107",
                                            name: "Icon of Excess",
                                            hidden: "false",
                                            typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                            typeName: "Abilities"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "If a unit has an Icon of Excess, its Death to the False Emperor ability takes effect on any hit rolls of 5+, rather than 6+.",
                                                "$": {
                                                    name: "Description",
                                                    typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "10.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "675a-811a-3a2c-ef77",
                                    name: "Terminator",
                                    entryId: "faf1-cd04-687a-b9d1::97bd-ee10-9c11-10b5",
                                    entryGroupId: "faf1-cd04-687a-b9d1::46af-d032-70d6-777c",
                                    number: "1",
                                    type: "model"
                                },
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "281a-ca6c-ce25-7c0f",
                                            name: "Combi-bolter",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::eba0-9fc6-5334-a390",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::72bd-9702-017a-b6e7",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::07a8-9262-dc1a-3c9d::0655-6c08-6402-46bf",
                                                    name: "Combi-bolter",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "24\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Rapid Fire 2",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "4",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "0c5b-a65c-aadd-5e69",
                                            name: "Chainaxe",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::262d-dbbf-8474-791c",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::2607-d554-732e-c0b0",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::deb2-33c4-6887-1bd8::fc56-4e98-3cdc-3659",
                                                    name: "Chainaxe",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "+1",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "-1",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "28.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "0876-d9d6-c85a-b259",
                                    name: "Terminator",
                                    entryId: "faf1-cd04-687a-b9d1::97bd-ee10-9c11-10b5",
                                    entryGroupId: "faf1-cd04-687a-b9d1::46af-d032-70d6-777c",
                                    number: "1",
                                    type: "model"
                                },
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "d2d1-c58a-4999-9ec8",
                                            name: "Combi-bolter",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::eba0-9fc6-5334-a390",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::72bd-9702-017a-b6e7",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::07a8-9262-dc1a-3c9d::0655-6c08-6402-46bf",
                                                    name: "Combi-bolter",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "24\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Rapid Fire 2",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "4",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "7b29-c506-38d9-bc6e",
                                            name: "Chainaxe",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::262d-dbbf-8474-791c",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::2607-d554-732e-c0b0",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::deb2-33c4-6887-1bd8::fc56-4e98-3cdc-3659",
                                                    name: "Chainaxe",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "+1",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "-1",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "28.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "108b-1baf-71c1-c20b",
                                    name: "Terminator",
                                    entryId: "faf1-cd04-687a-b9d1::97bd-ee10-9c11-10b5",
                                    entryGroupId: "faf1-cd04-687a-b9d1::46af-d032-70d6-777c",
                                    number: "1",
                                    type: "model"
                                },
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "974e-0e7d-988e-3d0b",
                                            name: "Combi-bolter",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::eba0-9fc6-5334-a390",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::72bd-9702-017a-b6e7",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::07a8-9262-dc1a-3c9d::0655-6c08-6402-46bf",
                                                    name: "Combi-bolter",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "24\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Rapid Fire 2",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "4",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "008e-f0c8-ba30-30ca",
                                            name: "Chainaxe",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::262d-dbbf-8474-791c",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::2607-d554-732e-c0b0",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::deb2-33c4-6887-1bd8::fc56-4e98-3cdc-3659",
                                                    name: "Chainaxe",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "+1",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "-1",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "28.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "c320-eabd-8d4c-e9a3",
                                    name: "Terminator",
                                    entryId: "faf1-cd04-687a-b9d1::97bd-ee10-9c11-10b5",
                                    entryGroupId: "faf1-cd04-687a-b9d1::46af-d032-70d6-777c",
                                    number: "1",
                                    type: "model"
                                },
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "4271-5b13-ac12-4939",
                                            name: "Combi-bolter",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::eba0-9fc6-5334-a390",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::72bd-9702-017a-b6e7",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::07a8-9262-dc1a-3c9d::0655-6c08-6402-46bf",
                                                    name: "Combi-bolter",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "24\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Rapid Fire 2",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "4",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "a1ce-6faf-b50e-3ef6",
                                            name: "Chainaxe",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::262d-dbbf-8474-791c",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::2607-d554-732e-c0b0",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::deb2-33c4-6887-1bd8::fc56-4e98-3cdc-3659",
                                                    name: "Chainaxe",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "+1",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "-1",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "28.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "ba65-916e-6f87-16e8",
                                    name: "Terminator",
                                    entryId: "faf1-cd04-687a-b9d1::97bd-ee10-9c11-10b5",
                                    entryGroupId: "faf1-cd04-687a-b9d1::46af-d032-70d6-777c",
                                    number: "1",
                                    type: "model"
                                },
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "242a-3210-b145-d00a",
                                            name: "Combi-bolter",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::eba0-9fc6-5334-a390",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::72bd-9702-017a-b6e7",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::e4e5-5966-b9d9-51bd::07a8-9262-dc1a-3c9d::0655-6c08-6402-46bf",
                                                    name: "Combi-bolter",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "24\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Rapid Fire 2",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "4",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "0",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "f71e-8136-e79e-a8c2",
                                            name: "Chainaxe",
                                            entryId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::262d-dbbf-8474-791c",
                                            entryGroupId: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::2607-d554-732e-c0b0",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "faf1-cd04-687a-b9d1::8351-d7bf-03c3-2aeb::055d-2bb3-2796-5b80::614e-dfa9-1096-03c8::deb2-33c4-6887-1bd8::fc56-4e98-3cdc-3659",
                                                    name: "Chainaxe",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "+1",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "-1",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "28.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        costs: [{
                            cost: [{
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "16.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "0.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "5023-b9d0-7af2-ac71",
                                    name: "Faction: <Legion>",
                                    entryId: "b2b6-8e4a-9c74-cc37",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "ae0f-378c-f130-bd52",
                                    name: "Faction: <Mark of Chaos>",
                                    entryId: "a61a-08c8-c7f7-9f78",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "547f-8e0d-df94-0499",
                                    name: "Faction: Chaos",
                                    entryId: "5cf1-acf2-ca3b-c2e5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "f7eb-63b6-1532-3327",
                                    name: "Elites",
                                    entryId: "638d74c6-bd97-4de5-b65a-6aaa24e9f4b2",
                                    primary: "true"
                                }
                            }, {
                                "$": {
                                    id: "221e-48bd-8a65-4f22",
                                    name: "Faction: Heretic Astartes",
                                    entryId: "ca10-a5dd-f54f-0ed5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "b83c-7efd-acdf-ddaf",
                                    name: "Infantry",
                                    entryId: "3d52-fccf-10c0-3fae",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "e7cf-234e-2bc4-88eb",
                                    name: "Terminator",
                                    entryId: "36b8-cf23-7648-ece9",
                                    primary: "false"
                                }
                            }]
                        }]
                    }, {
                        "$": {
                            id: "bfce-c50d-33a7-9ba3",
                            name: "Greater Possessed",
                            entryId: "d3f9-66d5-ba77-50e4::00bf-708e-0b45-d28a",
                            publicationId: "cb54-c035-pubN125652",
                            page: "138",
                            number: "1",
                            type: "unit"
                        },
                        rules: [{
                            rule: [{
                                "$": {
                                    id: "d3f9-66d5-ba77-50e4::18f0-5610-8597-1407::dfc0-3276-8ad6-eea9",
                                    name: "Hateful Assault",
                                    hidden: "false"
                                },
                                description: ["If this unit makes a charge move, is charged or performs a Heroic Intervention, add 1 to the Attacks characteristic of models in this unit until the end of the turn."]
                            }, {
                                "$": {
                                    id: "d3f9-66d5-ba77-50e4::18f0-5610-8597-1407::e990-5b43-7340-bfe9",
                                    name: "Malicious Volleys",
                                    hidden: "false"
                                },
                                description: ["Instead of following the normal rules for Rapid Fire weapons, models in this unit firing Rapid Fire bolt weapons make double the number of attacks if any of the following apply:\n\n• The firing model’s target is within half the weapon’s maximum range.\n• The firing model is INFANTRY and every model in its unit Remained Stationary in your previous Movement phase.\n• The firing model is a TERMINATOR, BIKER or HELBRUTE.\n\nFor the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon with the Rapid Fire type. A bolt weapon is any weapon whose profile includes the word ‘bolt’ (e.g. boltgun, bolt pistol, combibolter, Inferno boltgun). Rules that apply to bolt weapons also apply when firing the boltgun profile of combi-weapons and when firing Artefacts of Chaos that replaced a bolt weapon, (e.g. Spitespitter). The Talon of Horus is also a Rapid Fire bolt weapon."]
                            }]
                        }],
                        selections: [{
                            selection: [{
                                "$": {
                                    id: "edac-d9c3-05eb-8e0f",
                                    name: "Greater Possessed",
                                    entryId: "d3f9-66d5-ba77-50e4::31ab-772a-579e-1dc0",
                                    number: "1",
                                    type: "model"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "d3f9-66d5-ba77-50e4::a52a-934e-5c7a-a485",
                                            name: "Champions of the Host",
                                            hidden: "false",
                                            typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                            typeName: "Abilities"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "The first time this unit is set up, all models in this unit must be set up at the same time, though they do not need to be set up in unit coherency. From that point onwards, each Greater Possessed is treated as a separate unit.",
                                                "$": {
                                                    name: "Description",
                                                    typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "d3f9-66d5-ba77-50e4::d562-2504-1d99-c98f",
                                            name: "Locus of Power",
                                            hidden: "false",
                                            typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                            typeName: "Abilities"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "Add 1 to the Strength characteristic of <MARK OF CHAOS> <LEGION> DAEMON units whilst they are within 6\" of any friendly units with this ability.",
                                                "$": {
                                                    name: "Description",
                                                    typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "d3f9-66d5-ba77-50e4::96c7-47c1-ec69-0162",
                                            name: "Greater Possessed",
                                            hidden: "false",
                                            typeId: "800f-21d0-4387-c943",
                                            typeName: "Unit"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "7\"",
                                                "$": {
                                                    name: "M",
                                                    typeId: "0bdf-a96e-9e38-7779"
                                                }
                                            }, {
                                                _: "2+",
                                                "$": {
                                                    name: "WS",
                                                    typeId: "e7f0-1278-0250-df0c"
                                                }
                                            }, {
                                                _: "3+",
                                                "$": {
                                                    name: "BS",
                                                    typeId: "381b-eb28-74c3-df5f"
                                                }
                                            }, {
                                                _: "5",
                                                "$": {
                                                    name: "S",
                                                    typeId: "2218-aa3c-265f-2939"
                                                }
                                            }, {
                                                _: "5",
                                                "$": {
                                                    name: "T",
                                                    typeId: "9c9f-9774-a358-3a39"
                                                }
                                            }, {
                                                _: "5",
                                                "$": {
                                                    name: "W",
                                                    typeId: "f330-5e6e-4110-0978"
                                                }
                                            }, {
                                                _: "5",
                                                "$": {
                                                    name: "A",
                                                    typeId: "13fc-b29b-31f2-ab9f"
                                                }
                                            }, {
                                                _: "8",
                                                "$": {
                                                    name: "Ld",
                                                    typeId: "00ca-f8b8-876d-b705"
                                                }
                                            }, {
                                                _: "3+",
                                                "$": {
                                                    name: "Save",
                                                    typeId: "c0df-df94-abd7-e8d3"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "d3f9-66d5-ba77-50e4::58cd-b3d8-2a85-c806::94f5-82c3-bb66-ac0c",
                                            name: "Daemonic",
                                            hidden: "false",
                                            typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                            typeName: "Abilities"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "This model has a 5+ invulnerable save.",
                                                "$": {
                                                    name: "Description",
                                                    typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "d3f9-66d5-ba77-50e4::c5f1-6a08-161d-148f::37a4-1d84-4ef0-c4f6",
                                            name: "Death to the False Emperor",
                                            hidden: "false",
                                            typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                            typeName: "Abilities"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "Each time you roll a hit roll of 6+ for a model with this ability in the Fight phase, it can, if it was targeting an IMPERIUM unit, immediately make an extra attack against the same unit using the same weapon. These extra attacks cannot themselves generate any further attacks.",
                                                "$": {
                                                    name: "Description",
                                                    typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "332f-ddee-2191-76fd",
                                            name: "Daemonic mutations",
                                            entryId: "d3f9-66d5-ba77-50e4::c3c4-2f59-a707-b59a",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "d3f9-66d5-ba77-50e4::a73a-e84f-e9ca-216e",
                                                    name: "Daemonic mutations",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "User",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "-2",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "D3",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "88ad-a78c-8791-b7c1",
                                            name: "Mark of Slaanesh",
                                            entryId: "d3f9-66d5-ba77-50e4::7818-0b87-30c2-d37d::81f9-01f6-e82e-7eec",
                                            entryGroupId: "d3f9-66d5-ba77-50e4::7818-0b87-30c2-d37d::45e8-d3d1-105b-90a3",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }]
                                        }],
                                        categories: [{
                                            category: [{
                                                "$": {
                                                    id: "6c3a-853d-ca89-45cf",
                                                    name: "Faction: Slaanesh",
                                                    entryId: "1da2-76db-f76f-6b6c",
                                                    primary: "false"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "4.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "65.0"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        costs: [{
                            cost: [{
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "0.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "072d-e9a1-f57b-2839",
                                    name: "Faction: Chaos",
                                    entryId: "5cf1-acf2-ca3b-c2e5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "7207-f321-1c91-67cd",
                                    name: "Faction: <Mark of Chaos>",
                                    entryId: "a61a-08c8-c7f7-9f78",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "5c1b-f487-3364-a441",
                                    name: "Faction: Heretic Astartes",
                                    entryId: "ca10-a5dd-f54f-0ed5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "5e77-730a-7d5d-dc14",
                                    name: "Faction: <Legion>",
                                    entryId: "b2b6-8e4a-9c74-cc37",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "5180-bd8f-067a-3b0e",
                                    name: "Infantry",
                                    entryId: "3d52-fccf-10c0-3fae",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "8fbf-50e6-b8c9-6f14",
                                    name: "Daemon",
                                    entryId: "0bc5-6451-5612-4a25",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "5ba8-931b-eff9-6fb1",
                                    name: "Character",
                                    entryId: "ef18-746a-369f-43a4",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "8884-806a-2ccc-07ea",
                                    name: "Greater Possessed",
                                    entryId: "5fab-39ff-b611-c269",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "68ce-26dc-2c62-3ff2",
                                    name: "Elites",
                                    entryId: "638d74c6-bd97-4de5-b65a-6aaa24e9f4b2",
                                    primary: "true"
                                }
                            }]
                        }]
                    }, {
                        "$": {
                            id: "659d-caf5-71ad-22c1",
                            name: "Helbrute",
                            entryId: "65d2-4d61-d7fc-f838::5cae-15dc-4a5d-0b9b",
                            publicationId: "cb54-c035-pubN125652",
                            page: "139",
                            number: "1",
                            type: "model"
                        },
                        rules: [{
                            rule: [{
                                "$": {
                                    id: "65d2-4d61-d7fc-f838::0ddb-cabb-c006-ad06::dfc0-3276-8ad6-eea9",
                                    name: "Hateful Assault",
                                    hidden: "false"
                                },
                                description: ["If this unit makes a charge move, is charged or performs a Heroic Intervention, add 1 to the Attacks characteristic of models in this unit until the end of the turn."]
                            }, {
                                "$": {
                                    id: "65d2-4d61-d7fc-f838::0ddb-cabb-c006-ad06::e990-5b43-7340-bfe9",
                                    name: "Malicious Volleys",
                                    hidden: "false"
                                },
                                description: ["Instead of following the normal rules for Rapid Fire weapons, models in this unit firing Rapid Fire bolt weapons make double the number of attacks if any of the following apply:\n\n• The firing model’s target is within half the weapon’s maximum range.\n• The firing model is INFANTRY and every model in its unit Remained Stationary in your previous Movement phase.\n• The firing model is a TERMINATOR, BIKER or HELBRUTE.\n\nFor the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon with the Rapid Fire type. A bolt weapon is any weapon whose profile includes the word ‘bolt’ (e.g. boltgun, bolt pistol, combibolter, Inferno boltgun). Rules that apply to bolt weapons also apply when firing the boltgun profile of combi-weapons and when firing Artefacts of Chaos that replaced a bolt weapon, (e.g. Spitespitter). The Talon of Horus is also a Rapid Fire bolt weapon."]
                            }]
                        }],
                        profiles: [{
                            profile: [{
                                "$": {
                                    id: "65d2-4d61-d7fc-f838::2a55-7dba-abd6-aa47",
                                    name: "Helbrute",
                                    page: "",
                                    hidden: "false",
                                    typeId: "800f-21d0-4387-c943",
                                    typeName: "Unit"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "8\"",
                                        "$": {
                                            name: "M",
                                            typeId: "0bdf-a96e-9e38-7779"
                                        }
                                    }, {
                                        _: "3+",
                                        "$": {
                                            name: "WS",
                                            typeId: "e7f0-1278-0250-df0c"
                                        }
                                    }, {
                                        _: "3+",
                                        "$": {
                                            name: "BS",
                                            typeId: "381b-eb28-74c3-df5f"
                                        }
                                    }, {
                                        _: "6",
                                        "$": {
                                            name: "S",
                                            typeId: "2218-aa3c-265f-2939"
                                        }
                                    }, {
                                        _: "7",
                                        "$": {
                                            name: "T",
                                            typeId: "9c9f-9774-a358-3a39"
                                        }
                                    }, {
                                        _: "8",
                                        "$": {
                                            name: "W",
                                            typeId: "f330-5e6e-4110-0978"
                                        }
                                    }, {
                                        _: "4",
                                        "$": {
                                            name: "A",
                                            typeId: "13fc-b29b-31f2-ab9f"
                                        }
                                    }, {
                                        _: "8",
                                        "$": {
                                            name: "Ld",
                                            typeId: "00ca-f8b8-876d-b705"
                                        }
                                    }, {
                                        _: "3+",
                                        "$": {
                                            name: "Save",
                                            typeId: "c0df-df94-abd7-e8d3"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "65d2-4d61-d7fc-f838::9ef4-81e6-3365-bfba",
                                    name: "Crazed",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "At the end of any phase in which this model suffers any unsaved wounds or mortal wounds, roll a D6. On a roll of 6, this model immediately makes a shooting attack as if it were your Shooting phase if there are no enemies within 1\", or piles in and fights as if it were in the Fight phase if there are enemies within 1\". If there is no visible target within range, nothing happens.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "65d2-4d61-d7fc-f838::e47b-4dff-ebf5-d4d0::6aa9-da9a-662e-69d5",
                                    name: "Explodes",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6 it explodes, and each unit within 3\" suffers D3 mortal wounds.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        selections: [{
                            selection: [{
                                "$": {
                                    id: "493c-ec38-7d78-73bc",
                                    name: "Mark of Slaanesh",
                                    entryId: "65d2-4d61-d7fc-f838::7772-bbd3-124b-8ff6::81f9-01f6-e82e-7eec",
                                    entryGroupId: "65d2-4d61-d7fc-f838::7772-bbd3-124b-8ff6::45e8-d3d1-105b-90a3",
                                    number: "1",
                                    type: "upgrade"
                                },
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }],
                                categories: [{
                                    category: [{
                                        "$": {
                                            id: "dafb-2887-214c-56a4",
                                            name: "Faction: Slaanesh",
                                            entryId: "1da2-76db-f76f-6b6c",
                                            primary: "false"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "c346-0ddd-87c4-23cf",
                                    name: "Helbrute fist",
                                    entryId: "65d2-4d61-d7fc-f838::1a4e-b618-ce83-85de::38d3-475f-ab18-455c::f89a-4b0c-4dcc-a584",
                                    entryGroupId: "65d2-4d61-d7fc-f838::1a4e-b618-ce83-85de::7d68-e6d6-a7be-cf99",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "65d2-4d61-d7fc-f838::1a4e-b618-ce83-85de::38d3-475f-ab18-455c::b6fd-dec4-df96-7baa",
                                            name: "Helbrute fist",
                                            hidden: "false",
                                            typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                            typeName: "Weapon"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "Melee",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                }
                                            }, {
                                                _: "Melee",
                                                "$": {
                                                    name: "Type",
                                                    typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                }
                                            }, {
                                                _: "x2",
                                                "$": {
                                                    name: "S",
                                                    typeId: "59b1-319e-ec13-d466"
                                                }
                                            }, {
                                                _: "-3",
                                                "$": {
                                                    name: "AP",
                                                    typeId: "75aa-a838-b675-6484"
                                                }
                                            }, {
                                                _: "3",
                                                "$": {
                                                    name: "D",
                                                    typeId: "ae8a-3137-d65b-4ca7"
                                                }
                                            }, {
                                                _: "-",
                                                "$": {
                                                    name: "Abilities",
                                                    typeId: "837d-5e63-aeb7-1410"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "9993-dc0b-75d2-9201",
                                    name: "Multi-melta",
                                    entryId: "65d2-4d61-d7fc-f838::59a6-18a5-cce9-99b6::2b37-65ee-9443-b4ef",
                                    entryGroupId: "65d2-4d61-d7fc-f838::b4f4-ff9d-a50e-07b2",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "65d2-4d61-d7fc-f838::59a6-18a5-cce9-99b6::f137-6527-ee90-112e::1768-d7b9-37ba-f3bf",
                                            name: "Multi-melta",
                                            hidden: "false",
                                            typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                            typeName: "Weapon"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "24\"",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                }
                                            }, {
                                                _: "Heavy 2",
                                                "$": {
                                                    name: "Type",
                                                    typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                }
                                            }, {
                                                _: "8",
                                                "$": {
                                                    name: "S",
                                                    typeId: "59b1-319e-ec13-d466"
                                                }
                                            }, {
                                                _: "-4",
                                                "$": {
                                                    name: "AP",
                                                    typeId: "75aa-a838-b675-6484"
                                                }
                                            }, {
                                                _: "D6",
                                                "$": {
                                                    name: "D",
                                                    typeId: "ae8a-3137-d65b-4ca7"
                                                }
                                            }, {
                                                _: "Each time an attack made with this weapon targets a unit within half range, that attack has a Damage characteristic of D6+2.",
                                                "$": {
                                                    name: "Abilities",
                                                    typeId: "837d-5e63-aeb7-1410"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "5.0"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        costs: [{
                            cost: [{
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "110.0"
                                }
                            }, {
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "6.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "0.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "98ac-0c1f-3898-fe08",
                                    name: "Faction: Chaos",
                                    entryId: "5cf1-acf2-ca3b-c2e5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "f00c-761f-7176-4439",
                                    name: "Elites",
                                    entryId: "638d74c6-bd97-4de5-b65a-6aaa24e9f4b2",
                                    primary: "true"
                                }
                            }, {
                                "$": {
                                    id: "141d-be9e-3d6d-100a",
                                    name: "Vehicle",
                                    entryId: "c8fd-783f-3230-493e",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "c2a3-ef46-6708-878b",
                                    name: "Faction: Heretic Astartes",
                                    entryId: "ca10-a5dd-f54f-0ed5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "2e21-75b1-883d-9411",
                                    name: "Faction: <Mark of Chaos>",
                                    entryId: "a61a-08c8-c7f7-9f78",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "bbaf-9f96-7658-141d",
                                    name: "Faction: <Legion>",
                                    entryId: "b2b6-8e4a-9c74-cc37",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "0fda-db18-a983-0d4d",
                                    name: "Helbrute",
                                    entryId: "d9b9-e9ab-155a-8109",
                                    primary: "false"
                                }
                            }]
                        }]
                    }, {
                        "$": {
                            id: "5b3e-75ea-421c-07f7",
                            name: "Battle Size",
                            entryId: "44e3-c224-ba82-1b55::f29d-8a5d-18b6-a071",
                            number: "1",
                            type: "upgrade"
                        },
                        selections: [{
                            selection: [{
                                "$": {
                                    id: "dc67-ac7b-d65c-d4b6",
                                    name: "3. Strike Force (101-200 Total PL / 1001-2000 Points) ",
                                    entryId: "44e3-c224-ba82-1b55::09f9-b586-8d63-7635",
                                    entryGroupId: "44e3-c224-ba82-1b55::2883-57e8-87a6-38e2",
                                    number: "1",
                                    type: "upgrade"
                                },
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "12.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        costs: [{
                            cost: [{
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "0.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "3773-3d62-e021-5042",
                                    name: "Configuration",
                                    entryId: "fcff-0f21-93e6-1ddc",
                                    primary: "true"
                                }
                            }]
                        }]
                    }, {
                        "$": {
                            id: "2963-28f7-3f7b-96a0",
                            name: "Obliterators",
                            entryId: "5e96-e2f2-d660-966b::07c3-8ec0-bfc9-8f99",
                            publicationId: "cb54-c035-pubN125652",
                            page: "147",
                            number: "1",
                            type: "unit"
                        },
                        rules: [{
                            rule: [{
                                "$": {
                                    id: "5e96-e2f2-d660-966b::32fc-940a-ba69-3eb5::dfc0-3276-8ad6-eea9",
                                    name: "Hateful Assault",
                                    hidden: "false"
                                },
                                description: ["If this unit makes a charge move, is charged or performs a Heroic Intervention, add 1 to the Attacks characteristic of models in this unit until the end of the turn."]
                            }, {
                                "$": {
                                    id: "5e96-e2f2-d660-966b::32fc-940a-ba69-3eb5::e990-5b43-7340-bfe9",
                                    name: "Malicious Volleys",
                                    hidden: "false"
                                },
                                description: ["Instead of following the normal rules for Rapid Fire weapons, models in this unit firing Rapid Fire bolt weapons make double the number of attacks if any of the following apply:\n\n• The firing model’s target is within half the weapon’s maximum range.\n• The firing model is INFANTRY and every model in its unit Remained Stationary in your previous Movement phase.\n• The firing model is a TERMINATOR, BIKER or HELBRUTE.\n\nFor the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon with the Rapid Fire type. A bolt weapon is any weapon whose profile includes the word ‘bolt’ (e.g. boltgun, bolt pistol, combibolter, Inferno boltgun). Rules that apply to bolt weapons also apply when firing the boltgun profile of combi-weapons and when firing Artefacts of Chaos that replaced a bolt weapon, (e.g. Spitespitter). The Talon of Horus is also a Rapid Fire bolt weapon."]
                            }]
                        }],
                        profiles: [{
                            profile: [{
                                "$": {
                                    id: "5e96-e2f2-d660-966b::b471-6570-1bdf-8885",
                                    name: "Fleshmetal Guns",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "Each time this unit is chosen to attack with fleshmetal guns, roll three D3, one after the other, to determine the characteristics of the unit’s fleshmetal guns when resolving those attacks. The first roll is added to 6 to determine the Strength, the second roll is the AP, and the third roll is the Damage. For example, if the rolls were a 1, followed by a 3, followed by a 2, then the unit's attacks would have a Strength of 7, an AP of -3 and a Damage of 2.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "5e96-e2f2-d660-966b::046e-f599-0197-f78c::37a4-1d84-4ef0-c4f6",
                                    name: "Death to the False Emperor",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "Each time you roll a hit roll of 6+ for a model with this ability in the Fight phase, it can, if it was targeting an IMPERIUM unit, immediately make an extra attack against the same unit using the same weapon. These extra attacks cannot themselves generate any further attacks.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "5e96-e2f2-d660-966b::7129-8442-7054-1d24::94f5-82c3-bb66-ac0c",
                                    name: "Daemonic",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "This model has a 5+ invulnerable save.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "5e96-e2f2-d660-966b::b9a5-ce84-a88e-4a48::d4d3-93d9-8313-56c8",
                                    name: "Teleport Strike",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "During deployment, you can set up this model in a teleportarium chamber instead of placing it on the battlefield. At the end of any of your Movement phases the model can use a teleport strike to arrive on the battlefield - set it up anywhere on the battlefield that is more than 9\" away from any enemy models.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        selections: [{
                            selection: [{
                                "$": {
                                    id: "fe51-d707-1e9d-46ea",
                                    name: "Obliterator",
                                    entryId: "5e96-e2f2-d660-966b::19bb-afc4-2216-11ba",
                                    page: "",
                                    number: "2",
                                    type: "model"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "5e96-e2f2-d660-966b::15ba-c6bd-dd55-b237",
                                            name: "Obliterator",
                                            hidden: "false",
                                            typeId: "800f-21d0-4387-c943",
                                            typeName: "Unit"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "4\"",
                                                "$": {
                                                    name: "M",
                                                    typeId: "0bdf-a96e-9e38-7779"
                                                }
                                            }, {
                                                _: "3+",
                                                "$": {
                                                    name: "WS",
                                                    typeId: "e7f0-1278-0250-df0c"
                                                }
                                            }, {
                                                _: "3+",
                                                "$": {
                                                    name: "BS",
                                                    typeId: "381b-eb28-74c3-df5f"
                                                }
                                            }, {
                                                _: "5",
                                                "$": {
                                                    name: "S",
                                                    typeId: "2218-aa3c-265f-2939"
                                                }
                                            }, {
                                                _: "5",
                                                "$": {
                                                    name: "T",
                                                    typeId: "9c9f-9774-a358-3a39"
                                                }
                                            }, {
                                                _: "4",
                                                "$": {
                                                    name: "W",
                                                    typeId: "f330-5e6e-4110-0978"
                                                }
                                            }, {
                                                _: "3",
                                                "$": {
                                                    name: "A",
                                                    typeId: "13fc-b29b-31f2-ab9f"
                                                }
                                            }, {
                                                _: "8",
                                                "$": {
                                                    name: "Ld",
                                                    typeId: "00ca-f8b8-876d-b705"
                                                }
                                            }, {
                                                _: "2+",
                                                "$": {
                                                    name: "Save",
                                                    typeId: "c0df-df94-abd7-e8d3"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "6bae-8db9-6087-4800",
                                            name: "Fleshmetal guns",
                                            entryId: "5e96-e2f2-d660-966b::da6b-afff-6447-a37f",
                                            number: "2",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "5e96-e2f2-d660-966b::46ff-853d-601e-6e92",
                                                    name: "Fleshmetal guns",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "24\"",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Assault 6",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "6+D3",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "-D3",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "D3",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "See above",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }, {
                                        "$": {
                                            id: "5822-2deb-919f-6f37",
                                            name: "Crushing fists",
                                            entryId: "5e96-e2f2-d660-966b::3e06-65ce-503e-bdc1",
                                            number: "2",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "5e96-e2f2-d660-966b::818a-9f84-311a-16eb",
                                                    name: "Crushing fists",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "+1",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "-1",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "D3",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "-",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "210.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "10.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "86b0-8cd7-13e4-f9d6",
                                    name: "Mark of Slaanesh",
                                    entryId: "5e96-e2f2-d660-966b::e18e-6ace-9b7d-38b9::81f9-01f6-e82e-7eec",
                                    entryGroupId: "5e96-e2f2-d660-966b::e18e-6ace-9b7d-38b9::45e8-d3d1-105b-90a3",
                                    number: "1",
                                    type: "upgrade"
                                },
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }],
                                categories: [{
                                    category: [{
                                        "$": {
                                            id: "1154-b7bc-4c88-cb7b",
                                            name: "Faction: Slaanesh",
                                            entryId: "1da2-76db-f76f-6b6c",
                                            primary: "false"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        costs: [{
                            cost: [{
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "0.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "e128-d6d3-1c47-21ef",
                                    name: "Heavy Support",
                                    entryId: "abf5fd55-9ac7-4263-8bc1-a9fb0a8fa6a6",
                                    primary: "true"
                                }
                            }, {
                                "$": {
                                    id: "8927-cc18-5d84-b389",
                                    name: "Faction: Heretic Astartes",
                                    entryId: "ca10-a5dd-f54f-0ed5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "fe0f-ad3a-5724-ea84",
                                    name: "Daemon",
                                    entryId: "0bc5-6451-5612-4a25",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "4d40-5534-9de1-6d48",
                                    name: "Infantry",
                                    entryId: "3d52-fccf-10c0-3fae",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "f581-a416-3916-7b25",
                                    name: "Faction: Chaos",
                                    entryId: "5cf1-acf2-ca3b-c2e5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "5776-3252-587b-bf81",
                                    name: "Faction: <Legion>",
                                    entryId: "b2b6-8e4a-9c74-cc37",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "df90-10ac-a656-e47d",
                                    name: "Faction: <Mark of Chaos>",
                                    entryId: "a61a-08c8-c7f7-9f78",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "00a2-3ac7-81fa-10d4",
                                    name: "Cult of Destruction",
                                    entryId: "5570-810f-53f4-5a91",
                                    primary: "false"
                                }
                            }]
                        }]
                    }, {
                        "$": {
                            id: "4675-fbf0-d731-eb60",
                            name: "Venomcrawler",
                            entryId: "ce87-8d66-ba02-e5c5::1f9d-f752-418a-ae8c",
                            publicationId: "cb54-c035-pubN125652",
                            page: "151",
                            number: "1",
                            type: "model"
                        },
                        rules: [{
                            rule: [{
                                "$": {
                                    id: "ce87-8d66-ba02-e5c5::8532-9b94-f1ca-9d3f::dfc0-3276-8ad6-eea9",
                                    name: "Hateful Assault",
                                    hidden: "false"
                                },
                                description: ["If this unit makes a charge move, is charged or performs a Heroic Intervention, add 1 to the Attacks characteristic of models in this unit until the end of the turn."]
                            }, {
                                "$": {
                                    id: "ce87-8d66-ba02-e5c5::8532-9b94-f1ca-9d3f::e990-5b43-7340-bfe9",
                                    name: "Malicious Volleys",
                                    hidden: "false"
                                },
                                description: ["Instead of following the normal rules for Rapid Fire weapons, models in this unit firing Rapid Fire bolt weapons make double the number of attacks if any of the following apply:\n\n• The firing model’s target is within half the weapon’s maximum range.\n• The firing model is INFANTRY and every model in its unit Remained Stationary in your previous Movement phase.\n• The firing model is a TERMINATOR, BIKER or HELBRUTE.\n\nFor the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon with the Rapid Fire type. A bolt weapon is any weapon whose profile includes the word ‘bolt’ (e.g. boltgun, bolt pistol, combibolter, Inferno boltgun). Rules that apply to bolt weapons also apply when firing the boltgun profile of combi-weapons and when firing Artefacts of Chaos that replaced a bolt weapon, (e.g. Spitespitter). The Talon of Horus is also a Rapid Fire bolt weapon."]
                            }]
                        }],
                        profiles: [{
                            profile: [{
                                "$": {
                                    id: "ce87-8d66-ba02-e5c5::1ab8-c3f3-411e-b469",
                                    name: "Venomcrawler",
                                    hidden: "false",
                                    typeId: "800f-21d0-4387-c943",
                                    typeName: "Unit"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "*",
                                        "$": {
                                            name: "M",
                                            typeId: "0bdf-a96e-9e38-7779"
                                        }
                                    }, {
                                        _: "4+",
                                        "$": {
                                            name: "WS",
                                            typeId: "e7f0-1278-0250-df0c"
                                        }
                                    }, {
                                        _: "4+",
                                        "$": {
                                            name: "BS",
                                            typeId: "381b-eb28-74c3-df5f"
                                        }
                                    }, {
                                        _: "*",
                                        "$": {
                                            name: "S",
                                            typeId: "2218-aa3c-265f-2939"
                                        }
                                    }, {
                                        _: "7",
                                        "$": {
                                            name: "T",
                                            typeId: "9c9f-9774-a358-3a39"
                                        }
                                    }, {
                                        _: "10",
                                        "$": {
                                            name: "W",
                                            typeId: "f330-5e6e-4110-0978"
                                        }
                                    }, {
                                        _: "*",
                                        "$": {
                                            name: "A",
                                            typeId: "13fc-b29b-31f2-ab9f"
                                        }
                                    }, {
                                        _: "8",
                                        "$": {
                                            name: "Ld",
                                            typeId: "00ca-f8b8-876d-b705"
                                        }
                                    }, {
                                        _: "3+",
                                        "$": {
                                            name: "Save",
                                            typeId: "c0df-df94-abd7-e8d3"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "ce87-8d66-ba02-e5c5::b62e-48d2-8eb0-a2fb",
                                    name: "Devourer of Souls",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "At the beginning of each of your turns, this model regains 1 lost wound. In addition, at the end of each Fight phase in which this model destroyed any enemy models, this model regains one lost wound.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "ce87-8d66-ba02-e5c5::5a57-4590-718c-1f0a",
                                    name: "Reservoir of Daemonic Energy",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "Add 1 to the result of any Daemonic Ritual summoning rolls made for <LEGION> MASTERS OF POSSESSION whilst they are within 6\" of any friendly <LEGION> VENOMCRAWLERS.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "ce87-8d66-ba02-e5c5::3aa6-0925-de08-4aa2",
                                    name: "Soul-shredding Explosion",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 5+ it explodes, and each unit within 6\" suffers D3 mortal wounds.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "ce87-8d66-ba02-e5c5::89bb-d5e9-5285-3d24",
                                    name: "Venomcrawler",
                                    hidden: "false",
                                    typeId: "5f4f-ea74-0630-4afe",
                                    typeName: "Wound Track"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "-",
                                        "$": {
                                            name: "Remaining W",
                                            typeId: "8e45-c866-b2d4-c9ab"
                                        }
                                    }, {
                                        _: "M",
                                        "$": {
                                            name: "Characteristic 1",
                                            typeId: "bf41-c860-50bc-2a7e"
                                        }
                                    }, {
                                        _: "S",
                                        "$": {
                                            name: "Characteristic 2",
                                            typeId: "dc18-e51f-309b-8efa"
                                        }
                                    }, {
                                        _: "A",
                                        "$": {
                                            name: "Characteristic 3",
                                            typeId: "df06-8eca-150f-90ba"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "ce87-8d66-ba02-e5c5::1626-823a-eff7-7c69",
                                    name: "Venomcrawler1",
                                    hidden: "false",
                                    typeId: "5f4f-ea74-0630-4afe",
                                    typeName: "Wound Track"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "6-10+",
                                        "$": {
                                            name: "Remaining W",
                                            typeId: "8e45-c866-b2d4-c9ab"
                                        }
                                    }, {
                                        _: "10\"",
                                        "$": {
                                            name: "Characteristic 1",
                                            typeId: "bf41-c860-50bc-2a7e"
                                        }
                                    }, {
                                        _: "6",
                                        "$": {
                                            name: "Characteristic 2",
                                            typeId: "dc18-e51f-309b-8efa"
                                        }
                                    }, {
                                        _: "4",
                                        "$": {
                                            name: "Characteristic 3",
                                            typeId: "df06-8eca-150f-90ba"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "ce87-8d66-ba02-e5c5::e77b-700f-690f-10d0",
                                    name: "Venomcrawler2",
                                    hidden: "false",
                                    typeId: "5f4f-ea74-0630-4afe",
                                    typeName: "Wound Track"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "3-5",
                                        "$": {
                                            name: "Remaining W",
                                            typeId: "8e45-c866-b2d4-c9ab"
                                        }
                                    }, {
                                        _: "8\"",
                                        "$": {
                                            name: "Characteristic 1",
                                            typeId: "bf41-c860-50bc-2a7e"
                                        }
                                    }, {
                                        _: "5",
                                        "$": {
                                            name: "Characteristic 2",
                                            typeId: "dc18-e51f-309b-8efa"
                                        }
                                    }, {
                                        _: "3",
                                        "$": {
                                            name: "Characteristic 3",
                                            typeId: "df06-8eca-150f-90ba"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "ce87-8d66-ba02-e5c5::6830-9645-f46f-2833",
                                    name: "Venomcrawler3",
                                    hidden: "false",
                                    typeId: "5f4f-ea74-0630-4afe",
                                    typeName: "Wound Track"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "1-2",
                                        "$": {
                                            name: "Remaining W",
                                            typeId: "8e45-c866-b2d4-c9ab"
                                        }
                                    }, {
                                        _: "6\"",
                                        "$": {
                                            name: "Characteristic 1",
                                            typeId: "bf41-c860-50bc-2a7e"
                                        }
                                    }, {
                                        _: "4",
                                        "$": {
                                            name: "Characteristic 2",
                                            typeId: "dc18-e51f-309b-8efa"
                                        }
                                    }, {
                                        _: "2",
                                        "$": {
                                            name: "Characteristic 3",
                                            typeId: "df06-8eca-150f-90ba"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "ce87-8d66-ba02-e5c5::34a1-d3c2-94ac-8e5c::94f5-82c3-bb66-ac0c",
                                    name: "Daemonic",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "This model has a 5+ invulnerable save.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        selections: [{
                            selection: [{
                                "$": {
                                    id: "f1af-c6d5-d937-579e",
                                    name: "Soulflayer tendrils",
                                    entryId: "ce87-8d66-ba02-e5c5::d99d-ad8f-bc01-6ea1",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "ce87-8d66-ba02-e5c5::77aa-967e-0078-534a",
                                            name: "Soulflayer tendrils",
                                            hidden: "false",
                                            typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                            typeName: "Weapon"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "Melee",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                }
                                            }, {
                                                _: "Melee",
                                                "$": {
                                                    name: "Type",
                                                    typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                }
                                            }, {
                                                _: "User",
                                                "$": {
                                                    name: "S",
                                                    typeId: "59b1-319e-ec13-d466"
                                                }
                                            }, {
                                                _: "-2",
                                                "$": {
                                                    name: "AP",
                                                    typeId: "75aa-a838-b675-6484"
                                                }
                                            }, {
                                                _: "2",
                                                "$": {
                                                    name: "D",
                                                    typeId: "ae8a-3137-d65b-4ca7"
                                                }
                                            }, {
                                                _: "Each time the bearer fights, it can make 2 additional attacks with this weapon.",
                                                "$": {
                                                    name: "Abilities",
                                                    typeId: "837d-5e63-aeb7-1410"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "2f96-3cd3-954e-722c",
                                    name: "Eviscerating claws",
                                    entryId: "ce87-8d66-ba02-e5c5::32b9-204d-c85b-f5fa",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "ce87-8d66-ba02-e5c5::40f0-6aa0-a408-f788",
                                            name: "Eviscerating claws",
                                            hidden: "false",
                                            typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                            typeName: "Weapon"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "Melee",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                }
                                            }, {
                                                _: "Melee",
                                                "$": {
                                                    name: "Type",
                                                    typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                }
                                            }, {
                                                _: "+2",
                                                "$": {
                                                    name: "S",
                                                    typeId: "59b1-319e-ec13-d466"
                                                }
                                            }, {
                                                _: "-3",
                                                "$": {
                                                    name: "AP",
                                                    typeId: "75aa-a838-b675-6484"
                                                }
                                            }, {
                                                _: "3",
                                                "$": {
                                                    name: "D",
                                                    typeId: "ae8a-3137-d65b-4ca7"
                                                }
                                            }, {
                                                _: "-",
                                                "$": {
                                                    name: "Abilities",
                                                    typeId: "837d-5e63-aeb7-1410"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "f64e-f609-5b89-f799",
                                    name: "Excruciator cannon",
                                    entryId: "ce87-8d66-ba02-e5c5::c163-fa02-5904-1785",
                                    number: "2",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "ce87-8d66-ba02-e5c5::7594-5021-65a7-e737",
                                            name: "Excruciator cannon",
                                            hidden: "false",
                                            typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                            typeName: "Weapon"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "36\"",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                }
                                            }, {
                                                _: "Assault D3",
                                                "$": {
                                                    name: "Type",
                                                    typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                }
                                            }, {
                                                _: "+2",
                                                "$": {
                                                    name: "S",
                                                    typeId: "59b1-319e-ec13-d466"
                                                }
                                            }, {
                                                _: "-2",
                                                "$": {
                                                    name: "AP",
                                                    typeId: "75aa-a838-b675-6484"
                                                }
                                            }, {
                                                _: "D3",
                                                "$": {
                                                    name: "D",
                                                    typeId: "ae8a-3137-d65b-4ca7"
                                                }
                                            }, {
                                                _: "-",
                                                "$": {
                                                    name: "Abilities",
                                                    typeId: "837d-5e63-aeb7-1410"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "35ea-15fd-b1b9-1825",
                                    name: "Mark of Slaanesh",
                                    entryId: "ce87-8d66-ba02-e5c5::1661-9a50-fc8a-1198::81f9-01f6-e82e-7eec",
                                    entryGroupId: "ce87-8d66-ba02-e5c5::1661-9a50-fc8a-1198::45e8-d3d1-105b-90a3",
                                    number: "1",
                                    type: "upgrade"
                                },
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }],
                                categories: [{
                                    category: [{
                                        "$": {
                                            id: "a845-c629-2357-c60a",
                                            name: "Faction: Slaanesh",
                                            entryId: "1da2-76db-f76f-6b6c",
                                            primary: "false"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        costs: [{
                            cost: [{
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "7.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "110.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "0d65-16a2-33b7-9921",
                                    name: "Faction: Chaos",
                                    entryId: "5cf1-acf2-ca3b-c2e5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "619c-f1a0-102f-6a46",
                                    name: "Faction: <Mark of Chaos>",
                                    entryId: "a61a-08c8-c7f7-9f78",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "57de-d801-19b9-cc77",
                                    name: "Faction: Heretic Astartes",
                                    entryId: "ca10-a5dd-f54f-0ed5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "b2b7-b86c-fbcb-8e46",
                                    name: "Faction: <Legion>",
                                    entryId: "b2b6-8e4a-9c74-cc37",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "39e2-a651-1ec5-edc2",
                                    name: "Vehicle",
                                    entryId: "c8fd-783f-3230-493e",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "eefe-92c8-e5f6-2cb6",
                                    name: "Daemon",
                                    entryId: "0bc5-6451-5612-4a25",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "fb9d-07dd-5b86-84ae",
                                    name: "Daemon Engine",
                                    entryId: "c35d-97e7-5b2a-0a70",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "440f-0b91-656c-0537",
                                    name: "Venomcrawler",
                                    entryId: "ad08-be7a-6a9e-df33",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "728a-b942-104f-a783",
                                    name: "Heavy Support",
                                    entryId: "abf5fd55-9ac7-4263-8bc1-a9fb0a8fa6a6",
                                    primary: "true"
                                }
                            }]
                        }]
                    }, {
                        "$": {
                            id: "873f-91d0-4262-70a4",
                            name: "Forgefiend",
                            entryId: "1b52-a169-526b-0e5a::ac6d-d083-8ae2-dc18",
                            publicationId: "cb54-c035-pubN125652",
                            page: "150",
                            number: "1",
                            type: "model"
                        },
                        rules: [{
                            rule: [{
                                "$": {
                                    id: "1b52-a169-526b-0e5a::7406-ce60-eb7b-c730::dfc0-3276-8ad6-eea9",
                                    name: "Hateful Assault",
                                    hidden: "false"
                                },
                                description: ["If this unit makes a charge move, is charged or performs a Heroic Intervention, add 1 to the Attacks characteristic of models in this unit until the end of the turn."]
                            }, {
                                "$": {
                                    id: "1b52-a169-526b-0e5a::7406-ce60-eb7b-c730::e990-5b43-7340-bfe9",
                                    name: "Malicious Volleys",
                                    hidden: "false"
                                },
                                description: ["Instead of following the normal rules for Rapid Fire weapons, models in this unit firing Rapid Fire bolt weapons make double the number of attacks if any of the following apply:\n\n• The firing model’s target is within half the weapon’s maximum range.\n• The firing model is INFANTRY and every model in its unit Remained Stationary in your previous Movement phase.\n• The firing model is a TERMINATOR, BIKER or HELBRUTE.\n\nFor the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon with the Rapid Fire type. A bolt weapon is any weapon whose profile includes the word ‘bolt’ (e.g. boltgun, bolt pistol, combibolter, Inferno boltgun). Rules that apply to bolt weapons also apply when firing the boltgun profile of combi-weapons and when firing Artefacts of Chaos that replaced a bolt weapon, (e.g. Spitespitter). The Talon of Horus is also a Rapid Fire bolt weapon."]
                            }]
                        }],
                        profiles: [{
                            profile: [{
                                "$": {
                                    id: "1b52-a169-526b-0e5a::535b-1586-99ca-cf59",
                                    name: "Forgefiend",
                                    page: "0",
                                    hidden: "false",
                                    typeId: "800f-21d0-4387-c943",
                                    typeName: "Unit"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "*",
                                        "$": {
                                            name: "M",
                                            typeId: "0bdf-a96e-9e38-7779"
                                        }
                                    }, {
                                        _: "4+",
                                        "$": {
                                            name: "WS",
                                            typeId: "e7f0-1278-0250-df0c"
                                        }
                                    }, {
                                        _: "*",
                                        "$": {
                                            name: "BS",
                                            typeId: "381b-eb28-74c3-df5f"
                                        }
                                    }, {
                                        _: "6",
                                        "$": {
                                            name: "S",
                                            typeId: "2218-aa3c-265f-2939"
                                        }
                                    }, {
                                        _: "7",
                                        "$": {
                                            name: "T",
                                            typeId: "9c9f-9774-a358-3a39"
                                        }
                                    }, {
                                        _: "12",
                                        "$": {
                                            name: "W",
                                            typeId: "f330-5e6e-4110-0978"
                                        }
                                    }, {
                                        _: "*",
                                        "$": {
                                            name: "A",
                                            typeId: "13fc-b29b-31f2-ab9f"
                                        }
                                    }, {
                                        _: "8",
                                        "$": {
                                            name: "Ld",
                                            typeId: "00ca-f8b8-876d-b705"
                                        }
                                    }, {
                                        _: "3+",
                                        "$": {
                                            name: "Save",
                                            typeId: "c0df-df94-abd7-e8d3"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "1b52-a169-526b-0e5a::def0-2b7a-fa2a-bd04",
                                    name: "Forgefiend",
                                    hidden: "false",
                                    typeId: "5f4f-ea74-0630-4afe",
                                    typeName: "Wound Track"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "-",
                                        "$": {
                                            name: "Remaining W",
                                            typeId: "8e45-c866-b2d4-c9ab"
                                        }
                                    }, {
                                        _: "M",
                                        "$": {
                                            name: "Characteristic 1",
                                            typeId: "bf41-c860-50bc-2a7e"
                                        }
                                    }, {
                                        _: "BS",
                                        "$": {
                                            name: "Characteristic 2",
                                            typeId: "dc18-e51f-309b-8efa"
                                        }
                                    }, {
                                        _: "A",
                                        "$": {
                                            name: "Characteristic 3",
                                            typeId: "df06-8eca-150f-90ba"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "1b52-a169-526b-0e5a::65d2-8e9a-642b-6040",
                                    name: "Forgefiend1",
                                    hidden: "false",
                                    typeId: "5f4f-ea74-0630-4afe",
                                    typeName: "Wound Track"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "7-12+",
                                        "$": {
                                            name: "Remaining W",
                                            typeId: "8e45-c866-b2d4-c9ab"
                                        }
                                    }, {
                                        _: "8\"",
                                        "$": {
                                            name: "Characteristic 1",
                                            typeId: "bf41-c860-50bc-2a7e"
                                        }
                                    }, {
                                        _: "4+",
                                        "$": {
                                            name: "Characteristic 2",
                                            typeId: "dc18-e51f-309b-8efa"
                                        }
                                    }, {
                                        _: "4",
                                        "$": {
                                            name: "Characteristic 3",
                                            typeId: "df06-8eca-150f-90ba"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "1b52-a169-526b-0e5a::8c86-947a-6073-2c6b",
                                    name: "Forgefiend2",
                                    hidden: "false",
                                    typeId: "5f4f-ea74-0630-4afe",
                                    typeName: "Wound Track"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "4-6",
                                        "$": {
                                            name: "Remaining W",
                                            typeId: "8e45-c866-b2d4-c9ab"
                                        }
                                    }, {
                                        _: "6\"",
                                        "$": {
                                            name: "Characteristic 1",
                                            typeId: "bf41-c860-50bc-2a7e"
                                        }
                                    }, {
                                        _: "5+",
                                        "$": {
                                            name: "Characteristic 2",
                                            typeId: "dc18-e51f-309b-8efa"
                                        }
                                    }, {
                                        _: "3",
                                        "$": {
                                            name: "Characteristic 3",
                                            typeId: "df06-8eca-150f-90ba"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "1b52-a169-526b-0e5a::0629-bf1f-a7f3-b3f8",
                                    name: "Forgefiend3",
                                    hidden: "false",
                                    typeId: "5f4f-ea74-0630-4afe",
                                    typeName: "Wound Track"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "1-3",
                                        "$": {
                                            name: "Remaining W",
                                            typeId: "8e45-c866-b2d4-c9ab"
                                        }
                                    }, {
                                        _: "4\"",
                                        "$": {
                                            name: "Characteristic 1",
                                            typeId: "bf41-c860-50bc-2a7e"
                                        }
                                    }, {
                                        _: "6+",
                                        "$": {
                                            name: "Characteristic 2",
                                            typeId: "dc18-e51f-309b-8efa"
                                        }
                                    }, {
                                        _: "2",
                                        "$": {
                                            name: "Characteristic 3",
                                            typeId: "df06-8eca-150f-90ba"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "1b52-a169-526b-0e5a::b5dc-a119-b616-0f03::4486-6d0f-ddcd-7430",
                                    name: "Explodes",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "If this model is reduced to 0 wounds, roll a D6 before removing it from the battlefield; on a 6 it explodes, and each unit within 6\" suffers D3 mortal wounds.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "1b52-a169-526b-0e5a::71ef-5e6a-edd6-0f09::a46b-e84f-ab7b-a4e4",
                                    name: "Infernal Regeneration",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "At the beginning of each of your turns, this model heals one wound.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "1b52-a169-526b-0e5a::1320-b6d4-ec4d-1cf7::94f5-82c3-bb66-ac0c",
                                    name: "Daemonic",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "This model has a 5+ invulnerable save.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        selections: [{
                            selection: [{
                                "$": {
                                    id: "428d-d12f-cc5f-3586",
                                    name: "2x Hades autocannons",
                                    entryId: "1b52-a169-526b-0e5a::1ac3-e9c5-4492-3370",
                                    entryGroupId: "1b52-a169-526b-0e5a::1cc5-8f38-0861-faa6",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "1b52-a169-526b-0e5a::c13b-d3b7-4e62-2e5c",
                                            name: "Hades autocannon",
                                            hidden: "false",
                                            typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                            typeName: "Weapon"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "36\"",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                }
                                            }, {
                                                _: "Heavy 4",
                                                "$": {
                                                    name: "Type",
                                                    typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                }
                                            }, {
                                                _: "8",
                                                "$": {
                                                    name: "S",
                                                    typeId: "59b1-319e-ec13-d466"
                                                }
                                            }, {
                                                _: "-1",
                                                "$": {
                                                    name: "AP",
                                                    typeId: "75aa-a838-b675-6484"
                                                }
                                            }, {
                                                _: "2",
                                                "$": {
                                                    name: "D",
                                                    typeId: "ae8a-3137-d65b-4ca7"
                                                }
                                            }, {
                                                _: "-",
                                                "$": {
                                                    name: "Abilities",
                                                    typeId: "837d-5e63-aeb7-1410"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "50.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "8194-d1a2-6f8c-0943",
                                    name: "Ectoplasma cannon",
                                    entryId: "1b52-a169-526b-0e5a::1157-5eec-dab9-13c6",
                                    entryGroupId: "1b52-a169-526b-0e5a::0c65-deff-e5fb-3a65",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "1b52-a169-526b-0e5a::aee9-d1ae-1459-8529::ba8c-82d5-79c0-d0d9",
                                            name: "Ectoplasma cannon",
                                            hidden: "false",
                                            typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                            typeName: "Weapon"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "24\"",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                }
                                            }, {
                                                _: "Heavy D3",
                                                "$": {
                                                    name: "Type",
                                                    typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                }
                                            }, {
                                                _: "7",
                                                "$": {
                                                    name: "S",
                                                    typeId: "59b1-319e-ec13-d466"
                                                }
                                            }, {
                                                _: "-3",
                                                "$": {
                                                    name: "AP",
                                                    typeId: "75aa-a838-b675-6484"
                                                }
                                            }, {
                                                _: "D3",
                                                "$": {
                                                    name: "D",
                                                    typeId: "ae8a-3137-d65b-4ca7"
                                                }
                                            }, {
                                                _: "Blast.",
                                                "$": {
                                                    name: "Abilities",
                                                    typeId: "837d-5e63-aeb7-1410"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "20.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "abdf-2798-42a6-e0b2",
                                    name: "Mark of Slaanesh",
                                    entryId: "1b52-a169-526b-0e5a::65f3-ee1e-5b5c-665f::81f9-01f6-e82e-7eec",
                                    entryGroupId: "1b52-a169-526b-0e5a::65f3-ee1e-5b5c-665f::45e8-d3d1-105b-90a3",
                                    number: "1",
                                    type: "upgrade"
                                },
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }],
                                categories: [{
                                    category: [{
                                        "$": {
                                            id: "99c6-e59c-4d81-e28c",
                                            name: "Faction: Slaanesh",
                                            entryId: "1da2-76db-f76f-6b6c",
                                            primary: "false"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        costs: [{
                            cost: [{
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "85.0"
                                }
                            }, {
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "7.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "0.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "ad37-8dd9-3afa-a6e3",
                                    name: "Heavy Support",
                                    entryId: "abf5fd55-9ac7-4263-8bc1-a9fb0a8fa6a6",
                                    primary: "true"
                                }
                            }, {
                                "$": {
                                    id: "33b8-a60c-9d20-d327",
                                    name: "Faction: Chaos",
                                    entryId: "5cf1-acf2-ca3b-c2e5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "0054-8717-2ce0-aeba",
                                    name: "Daemon",
                                    entryId: "0bc5-6451-5612-4a25",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "dfe7-2a82-3718-a0eb",
                                    name: "Daemon Engine",
                                    entryId: "c35d-97e7-5b2a-0a70",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "09dc-2c6f-5ef7-5cc4",
                                    name: "Faction: Heretic Astartes",
                                    entryId: "ca10-a5dd-f54f-0ed5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "8294-4135-220e-d64e",
                                    name: "Vehicle",
                                    entryId: "c8fd-783f-3230-493e",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "477e-304b-a489-2273",
                                    name: "Faction: <Legion>",
                                    entryId: "b2b6-8e4a-9c74-cc37",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "1b61-302a-d47d-8822",
                                    name: "Faction: <Mark of Chaos>",
                                    entryId: "a61a-08c8-c7f7-9f78",
                                    primary: "false"
                                }
                            }]
                        }]
                    }, {
                        "$": {
                            id: "7658-ee3f-99c3-3b7f",
                            name: "Warp Talons",
                            entryId: "3a53-7fbf-dc3d-6fd4::f674-7e58-a07c-e270",
                            publicationId: "cb54-c035-pubN125652",
                            page: "145",
                            number: "1",
                            type: "unit"
                        },
                        rules: [{
                            rule: [{
                                "$": {
                                    id: "3a53-7fbf-dc3d-6fd4::e280-ccd6-119c-48ac::dfc0-3276-8ad6-eea9",
                                    name: "Hateful Assault",
                                    hidden: "false"
                                },
                                description: ["If this unit makes a charge move, is charged or performs a Heroic Intervention, add 1 to the Attacks characteristic of models in this unit until the end of the turn."]
                            }, {
                                "$": {
                                    id: "3a53-7fbf-dc3d-6fd4::e280-ccd6-119c-48ac::e990-5b43-7340-bfe9",
                                    name: "Malicious Volleys",
                                    hidden: "false"
                                },
                                description: ["Instead of following the normal rules for Rapid Fire weapons, models in this unit firing Rapid Fire bolt weapons make double the number of attacks if any of the following apply:\n\n• The firing model’s target is within half the weapon’s maximum range.\n• The firing model is INFANTRY and every model in its unit Remained Stationary in your previous Movement phase.\n• The firing model is a TERMINATOR, BIKER or HELBRUTE.\n\nFor the purposes of this ability, a Rapid Fire bolt weapon is any bolt weapon with the Rapid Fire type. A bolt weapon is any weapon whose profile includes the word ‘bolt’ (e.g. boltgun, bolt pistol, combibolter, Inferno boltgun). Rules that apply to bolt weapons also apply when firing the boltgun profile of combi-weapons and when firing Artefacts of Chaos that replaced a bolt weapon, (e.g. Spitespitter). The Talon of Horus is also a Rapid Fire bolt weapon."]
                            }]
                        }],
                        profiles: [{
                            profile: [{
                                "$": {
                                    id: "3a53-7fbf-dc3d-6fd4::a1a5-d273-fe2b-d592",
                                    name: "Warpflame Strike",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "When you set up this unit during deployment, it can be set up in low orbit, ready to strike, instead of being placed on the battlefield. If it is, it can use a Warpflame Strike to arrive on the battlefield at the end of any of your Movement phases, when it does so, set the unit up anywhere that is more than 9\" away from enemy models. In addition, enemy units cannot fire Overwatch against units in the same turn that they arrived by warpflame strike.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "3a53-7fbf-dc3d-6fd4::07e4-3519-2235-d9e0::94f5-82c3-bb66-ac0c",
                                    name: "Daemonic",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "This model has a 5+ invulnerable save.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "3a53-7fbf-dc3d-6fd4::2395-9baf-5a33-15dd::37a4-1d84-4ef0-c4f6",
                                    name: "Death to the False Emperor",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "Each time you roll a hit roll of 6+ for a model with this ability in the Fight phase, it can, if it was targeting an IMPERIUM unit, immediately make an extra attack against the same unit using the same weapon. These extra attacks cannot themselves generate any further attacks.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        selections: [{
                            selection: [{
                                "$": {
                                    id: "11ea-033e-557a-432a",
                                    name: "Warp Talon",
                                    entryId: "3a53-7fbf-dc3d-6fd4::0721-e90a-1e91-ee20",
                                    number: "4",
                                    type: "model"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "3a53-7fbf-dc3d-6fd4::c307-f875-ce9f-91e2",
                                            name: "Warp Talon",
                                            hidden: "false",
                                            typeId: "800f-21d0-4387-c943",
                                            typeName: "Unit"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "12\"",
                                                "$": {
                                                    name: "M",
                                                    typeId: "0bdf-a96e-9e38-7779"
                                                }
                                            }, {
                                                _: "3+",
                                                "$": {
                                                    name: "WS",
                                                    typeId: "e7f0-1278-0250-df0c"
                                                }
                                            }, {
                                                _: "3+",
                                                "$": {
                                                    name: "BS",
                                                    typeId: "381b-eb28-74c3-df5f"
                                                }
                                            }, {
                                                _: "4",
                                                "$": {
                                                    name: "S",
                                                    typeId: "2218-aa3c-265f-2939"
                                                }
                                            }, {
                                                _: "4",
                                                "$": {
                                                    name: "T",
                                                    typeId: "9c9f-9774-a358-3a39"
                                                }
                                            }, {
                                                _: "1",
                                                "$": {
                                                    name: "W",
                                                    typeId: "f330-5e6e-4110-0978"
                                                }
                                            }, {
                                                _: "1",
                                                "$": {
                                                    name: "A",
                                                    typeId: "13fc-b29b-31f2-ab9f"
                                                }
                                            }, {
                                                _: "8",
                                                "$": {
                                                    name: "Ld",
                                                    typeId: "00ca-f8b8-876d-b705"
                                                }
                                            }, {
                                                _: "3+",
                                                "$": {
                                                    name: "Save",
                                                    typeId: "c0df-df94-abd7-e8d3"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "d99e-8e0d-1014-e3db",
                                            name: "Lightning Claw (Pair)",
                                            entryId: "3a53-7fbf-dc3d-6fd4::977d-8b75-9cc9-9cc8::c4f6-2f81-153a-3060",
                                            number: "4",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "3a53-7fbf-dc3d-6fd4::977d-8b75-9cc9-9cc8::2897-f3f7-3ec2-e6fa::7584-238f-3174-4529",
                                                    name: "Lightning claw",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "User",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "-2",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "Each time the bearer fights, it makes 1 additional attack with this weapon. Each time an attack is made with this weapon, you can re-roll the wound roll.",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "92.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "7ef2-5f4f-9757-226f",
                                    name: "Warp Talon Champion",
                                    entryId: "3a53-7fbf-dc3d-6fd4::7902-4a50-d0b7-531f",
                                    number: "1",
                                    type: "model"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "3a53-7fbf-dc3d-6fd4::fbf0-1472-df14-55bf",
                                            name: "Warp Talon Champion",
                                            hidden: "false",
                                            typeId: "800f-21d0-4387-c943",
                                            typeName: "Unit"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "12\"",
                                                "$": {
                                                    name: "M",
                                                    typeId: "0bdf-a96e-9e38-7779"
                                                }
                                            }, {
                                                _: "3+",
                                                "$": {
                                                    name: "WS",
                                                    typeId: "e7f0-1278-0250-df0c"
                                                }
                                            }, {
                                                _: "3+",
                                                "$": {
                                                    name: "BS",
                                                    typeId: "381b-eb28-74c3-df5f"
                                                }
                                            }, {
                                                _: "4",
                                                "$": {
                                                    name: "S",
                                                    typeId: "2218-aa3c-265f-2939"
                                                }
                                            }, {
                                                _: "4",
                                                "$": {
                                                    name: "T",
                                                    typeId: "9c9f-9774-a358-3a39"
                                                }
                                            }, {
                                                _: "1",
                                                "$": {
                                                    name: "W",
                                                    typeId: "f330-5e6e-4110-0978"
                                                }
                                            }, {
                                                _: "2",
                                                "$": {
                                                    name: "A",
                                                    typeId: "13fc-b29b-31f2-ab9f"
                                                }
                                            }, {
                                                _: "8",
                                                "$": {
                                                    name: "Ld",
                                                    typeId: "00ca-f8b8-876d-b705"
                                                }
                                            }, {
                                                _: "3+",
                                                "$": {
                                                    name: "Save",
                                                    typeId: "c0df-df94-abd7-e8d3"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                selections: [{
                                    selection: [{
                                        "$": {
                                            id: "9145-db6f-3ad4-af91",
                                            name: "Lightning Claw (Pair)",
                                            entryId: "3a53-7fbf-dc3d-6fd4::e561-7009-7689-3ebb::c4f6-2f81-153a-3060",
                                            number: "1",
                                            type: "upgrade"
                                        },
                                        profiles: [{
                                            profile: [{
                                                "$": {
                                                    id: "3a53-7fbf-dc3d-6fd4::e561-7009-7689-3ebb::2897-f3f7-3ec2-e6fa::7584-238f-3174-4529",
                                                    name: "Lightning claw",
                                                    hidden: "false",
                                                    typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                                    typeName: "Weapon"
                                                },
                                                characteristics: [{
                                                    characteristic: [{
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Range",
                                                            typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                        }
                                                    }, {
                                                        _: "Melee",
                                                        "$": {
                                                            name: "Type",
                                                            typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                        }
                                                    }, {
                                                        _: "User",
                                                        "$": {
                                                            name: "S",
                                                            typeId: "59b1-319e-ec13-d466"
                                                        }
                                                    }, {
                                                        _: "-2",
                                                        "$": {
                                                            name: "AP",
                                                            typeId: "75aa-a838-b675-6484"
                                                        }
                                                    }, {
                                                        _: "1",
                                                        "$": {
                                                            name: "D",
                                                            typeId: "ae8a-3137-d65b-4ca7"
                                                        }
                                                    }, {
                                                        _: "Each time the bearer fights, it makes 1 additional attack with this weapon. Each time an attack is made with this weapon, you can re-roll the wound roll.",
                                                        "$": {
                                                            name: "Abilities",
                                                            typeId: "837d-5e63-aeb7-1410"
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }],
                                        costs: [{
                                            cost: [{
                                                "$": {
                                                    name: " PL",
                                                    typeId: "e356-c769-5920-6e14",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "CP",
                                                    typeId: "2d3b-b544-ad49-fb75",
                                                    value: "0.0"
                                                }
                                            }, {
                                                "$": {
                                                    name: "pts",
                                                    typeId: "points",
                                                    value: "0.0"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "23.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "cfb7-f18f-3f3e-4857",
                                    name: "Mark of Slaanesh",
                                    entryId: "3a53-7fbf-dc3d-6fd4::7396-3f56-ee44-c7e2::81f9-01f6-e82e-7eec",
                                    entryGroupId: "3a53-7fbf-dc3d-6fd4::7396-3f56-ee44-c7e2::45e8-d3d1-105b-90a3",
                                    number: "1",
                                    type: "upgrade"
                                },
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }],
                                categories: [{
                                    category: [{
                                        "$": {
                                            id: "ad81-9a0c-c71d-852c",
                                            name: "Faction: Slaanesh",
                                            entryId: "1da2-76db-f76f-6b6c",
                                            primary: "false"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        costs: [{
                            cost: [{
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "5.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "0.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "f443-b826-5f9c-ecac",
                                    name: "Fast Attack",
                                    entryId: "c274d0b0-5866-44bc-9810-91c136ae7438",
                                    primary: "true"
                                }
                            }, {
                                "$": {
                                    id: "43c0-0041-886f-f508",
                                    name: "Daemon",
                                    entryId: "0bc5-6451-5612-4a25",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "86e5-6721-221b-81d8",
                                    name: "Faction: <Legion>",
                                    entryId: "b2b6-8e4a-9c74-cc37",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "2e95-d975-01ab-ffa8",
                                    name: "Faction: <Mark of Chaos>",
                                    entryId: "a61a-08c8-c7f7-9f78",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "c973-fd40-0a08-25b4",
                                    name: "Faction: Chaos",
                                    entryId: "5cf1-acf2-ca3b-c2e5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "b1b9-8d44-5938-19c6",
                                    name: "Fly",
                                    entryId: "3117-16d8-fcef-4f56",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "0008-3e9d-5351-0d7a",
                                    name: "Faction: Heretic Astartes",
                                    entryId: "ca10-a5dd-f54f-0ed5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "ab76-baa3-d2c0-1786",
                                    name: "Infantry",
                                    entryId: "3d52-fccf-10c0-3fae",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "e427-cb73-1eae-f8cf",
                                    name: "Jump Pack",
                                    entryId: "f627-f23e-a3b4-dc2c",
                                    primary: "false"
                                }
                            }]
                        }]
                    }]
                }],
                publications: [{
                    publication: [{
                        "$": {
                            id: "85df-1155-c986-4d71",
                            name: "Psychic Awakening IX: Pariah"
                        }
                    }, {
                        "$": {
                            id: "c9fe-4431-b76d-267a",
                            name: "Psychic Awakening VIII: War of the Spider"
                        }
                    }, {
                        "$": {
                            id: "ef58-6fca-70d8-3908",
                            name: "Warhammer Legends: Chaos Space Marines"
                        }
                    }, {
                        "$": {
                            id: "ecea-8b62-fefb-9f8e",
                            name: "Psychic Awakening VII: Engine War"
                        }
                    }, {
                        "$": {
                            id: "28ec-711c-pubN118139",
                            name: "Index: Xenos 2"
                        }
                    }, {
                        "$": {
                            id: "5c2d-db9f-58ca-e7b2",
                            name: "Psychic Awakening IV: Ritual of the Damned"
                        }
                    }, {
                        "$": {
                            id: "0865-ee21-d1f1-ed38",
                            name: "War Zone Charadon, Act I: The Book of Rust"
                        }
                    }, {
                        "$": {
                            id: "28ec-711c-pubN72690",
                            name: "Warhammer 40,000 Core Book"
                        }
                    }, {
                        "$": {
                            id: "28ec-711c-pubN78977",
                            name: "Index: Imperium 1"
                        }
                    }, {
                        "$": {
                            id: "28ec-711c-pubN98266",
                            name: "Imperium Nihilus: Vigilus Defiant"
                        }
                    }, {
                        "$": {
                            id: "52c4-39c0-ae97-d4dc",
                            name: "Psychic Awakening VI: Saga of the Beast"
                        }
                    }, {
                        "$": {
                            id: "b854-bcb5-5746-e0d3",
                            name: "War Zone Charadon, Act II: The Book of Fire"
                        }
                    }, {
                        "$": {
                            id: "28ec-711c-pubN77581",
                            name: "Index: Imperium 2"
                        }
                    }, {
                        "$": {
                            id: "cb54-c035-pubN125652",
                            name: "Codex: Heretic Astartes - Chaos Space Marines"
                        }
                    }, {
                        "$": {
                            id: "5093-9448-d8cc-5327",
                            name: "Psychic Awakening II: Faith and Fury"
                        }
                    }, {
                        "$": {
                            id: "28ec-711c-pubN76527",
                            name: "Index: Xenos 1"
                        }
                    }, {
                        "$": {
                            id: "5b08-09e5-a80a-fd67",
                            name: "Psychic Awakening I: Phoenix Rising"
                        }
                    }, {
                        "$": {
                            id: "977a-446b-737a-b571",
                            name: "Chapter Approved 2021"
                        }
                    }, {
                        "$": {
                            id: "ce40-ec9e-21e2-2e42",
                            name: "Warhammer Quest: Blackstone Fortress"
                        }
                    }, {
                        "$": {
                            id: "cb54-c035-pubN153092",
                            name: "Imperium Nihilus: Vigilus Ablaze"
                        }
                    }, {
                        "$": {
                            id: "28ec-711c-pubN99666",
                            name: "Index: Chaos"
                        }
                    }, {
                        "$": {
                            id: "f000-7b0c-01bf-7630",
                            name: "Psychic Awakening III: Blood of Baal"
                        }
                    }, {
                        "$": {
                            id: "7573-8d1b-acdf-2de8",
                            name: "Imperial Armour: Compendium"
                        }
                    }, {
                        "$": {
                            id: "b652-8bab-1453-da20",
                            name: "Warhammer Legends"
                        }
                    }, {
                        "$": {
                            id: "4593-a2f0-546a-d6f2",
                            name: "Psychic Awakening V: The Greater Good"
                        }
                    }, {
                        "$": {
                            id: "2ec0-6d53-e36b-9895",
                            name: "Chapter Approved 2018"
                        }
                    }, {
                        "$": {
                            id: "28ec-711c-pubN73170",
                            name: "Chapter Approved 2017"
                        }
                    }]
                }],
                categories: [{
                    category: [{
                        "$": {
                            id: "c396-1161-2f86-b0d3",
                            name: "Uncategorised",
                            entryId: "(No Category)",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "c9dd-5770-60a9-6dc5",
                            name: "Configuration",
                            entryId: "fcff-0f21-93e6-1ddc",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "ae48-c324-bbde-a6be",
                            name: "Stratagems",
                            entryId: "c845-c72c-6afe-3fc2",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "bbac-ec1e-c467-c793",
                            name: "No Force Org Slot",
                            entryId: "ff36a6f3-19bf-4f48-8956-adacfd28fe74",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "6f57-2e50-7cc4-b460",
                            name: "Agents of the Imperium",
                            entryId: "0f35-2c34-ba6a-8105",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "c4ab-76b9-e48a-ffae",
                            name: "HQ",
                            entryId: "848a6ff2-0def-4c72-8433-ff7da70e6bc7",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "595c-7abe-c713-5a86",
                            name: "Troops",
                            entryId: "5d76b6f5-20ae-4d70-8f59-ade72a2add3a",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "3c98-0ccd-6821-8546",
                            name: "Elites",
                            entryId: "638d74c6-bd97-4de5-b65a-6aaa24e9f4b2",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "b19f-2066-4b25-2ec0",
                            name: "Fast Attack",
                            entryId: "c274d0b0-5866-44bc-9810-91c136ae7438",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "e7b8-aafa-4044-f51e",
                            name: "Heavy Support",
                            entryId: "abf5fd55-9ac7-4263-8bc1-a9fb0a8fa6a6",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "1693-31d2-99d0-7e13",
                            name: "Flyer",
                            entryId: "e888-1504-aa61-95ff",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "c2ce-3e1c-dbf6-4bc3",
                            name: "Dedicated Transport",
                            entryId: "1b66-3f5f-6705-079a",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "6321-930e-f0f6-564b",
                            name: "Relic Elites",
                            entryId: "8d86-9490-0f7d-a5b5",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "afd1-45c9-64cc-607f",
                            name: "Relic Heavy Support",
                            entryId: "6c4c-a416-b8cb-c380",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "938e-568f-fdc6-a677",
                            name: "Relic HQ",
                            entryId: "655f-e142-dfa9-11a4",
                            primary: "false"
                        }
                    }]
                }]
            }, {
                "$": {
                    id: "67de-8c03-7522-730e",
                    name: "Auxiliary Support Detachment -2CP",
                    entryId: "8a87-f0e3-f2f2-ad1a",
                    catalogueId: "422a-a40e-3f7c-e8b3",
                    catalogueRevision: "107",
                    catalogueName: "Chaos - Daemons"
                },
                rules: [{
                    rule: [{
                        "$": {
                            id: "72fc-64c3-a228-2ca0",
                            name: "Understrength Units",
                            publicationId: "28ec-711c-pubN72690",
                            hidden: "false"
                        },
                        description: ["If you are playing a matched play game, you are allowed to have an understrength unit in an Auxiliary Support Detachment. Due to constraints within Battlescribe, we are not able to reflect this in the error checking.  To properly calculate your PL and Points, add the unit you want to take as an understrength unit and then open the context menu on each model in the unit you do not want to use via right click or tap and hold. Then delete the model from that context menu.  This will permanently display an error in your list, but it will calculate your points correctly."]
                    }]
                }],
                selections: [{
                    selection: [{
                        "$": {
                            id: "0e97-14b4-6863-60b4",
                            name: "Chaos Allegiance",
                            entryId: "26ee-47bc-1997-a2f9::24aa-9785-f288-e07a",
                            number: "1",
                            type: "upgrade"
                        },
                        selections: [{
                            selection: [{
                                "$": {
                                    id: "a98a-074c-9bfe-f95f",
                                    name: "Slaanesh",
                                    entryId: "26ee-47bc-1997-a2f9::21b1-7fd4-e8d8-b28d",
                                    entryGroupId: "26ee-47bc-1997-a2f9::f290-028f-25e9-1984",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "26ee-47bc-1997-a2f9::a730-4661-ac3c-e27c",
                                            name: "Locus of Swiftness",
                                            hidden: "false",
                                            typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                            typeName: "Abilities"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "CHARACTERS in a SLAANESH Chaos Daemons detachment have the following ability: All SLAANESH DAEMON units within 6\" of a friendly model with the Locus of Swiftness in the Charge phase can declare a charge even if they advanced in their Movement phase.",
                                                "$": {
                                                    name: "Description",
                                                    typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        costs: [{
                            cost: [{
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "0.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "6289-ada3-2282-9f36",
                                    name: "Configuration",
                                    entryId: "fcff-0f21-93e6-1ddc",
                                    primary: "true"
                                }
                            }]
                        }]
                    }, {
                        "$": {
                            id: "ca39-2f51-929b-e656",
                            name: "Keeper of Secrets",
                            entryId: "b3c7-4b66-8b03-4f54::884c-e873-9376-9f6f",
                            page: "",
                            number: "1",
                            type: "model"
                        },
                        rules: [{
                            rule: [{
                                "$": {
                                    id: "b3c7-4b66-8b03-4f54::25d1-ce74-31b5-6b96::224f-2c86-454d-54aa",
                                    name: "Daemonic Ritual",
                                    hidden: "false"
                                },
                                description: ["Instead of moving in their Movement phase, any CHAOS CHARACTER can, at the end of their Movement phase, attempt to summon a DAEMON unit with this ability by performing a Daemonic Ritual (the character cannot do so if they arrived as reinforcements this turn, or if they themselves have been summoned to the battlefield this turn).\n\nIf they do so, first choose one of the four Chaos Gods - KHORNE, TZEENTCH, NURGLE, or SLAANESH. A CHARACTER who owes allegiance to one of the Dark Gods can attempt to summon the units of their patron - for example, a KHORNE CHARACTER could only attempt to summon KHORNE DAEMONS.\n\nRoll up to 3 dice - this is your summoning roll. You can summon one new unit with the Daemonic Ritual ability to the battlefield that has a Power Rating equal to or less than the total result so long as it has the same Chaos God keyword you chose at the start (in the case of units that have the choice of allegiance, such as Furies, the unit when summoned will have this keyword.) This unit is treated as reinforcements for your army and can be placed anywhere on the battlefield that is entirely within 12\" of the character and more than 9\" from any enemy model. If the total rolled is insufficient to summon any unit, the ritual fails and no new unit is summoned.\n\nIf your summoning roll included any doubles, your character then suffers a mortal wound. If it contained any triples, it instead suffers D3 mortal wounds."]
                            }]
                        }],
                        profiles: [{
                            profile: [{
                                "$": {
                                    id: "b3c7-4b66-8b03-4f54::3b49-a9ad-b102-dd72",
                                    name: "Keeper of Secrets",
                                    page: "0",
                                    hidden: "false",
                                    typeId: "800f-21d0-4387-c943",
                                    typeName: "Unit"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "*",
                                        "$": {
                                            name: "M",
                                            typeId: "0bdf-a96e-9e38-7779"
                                        }
                                    }, {
                                        _: "2+",
                                        "$": {
                                            name: "WS",
                                            typeId: "e7f0-1278-0250-df0c"
                                        }
                                    }, {
                                        _: "2+",
                                        "$": {
                                            name: "BS",
                                            typeId: "381b-eb28-74c3-df5f"
                                        }
                                    }, {
                                        _: "6",
                                        "$": {
                                            name: "S",
                                            typeId: "2218-aa3c-265f-2939"
                                        }
                                    }, {
                                        _: "7",
                                        "$": {
                                            name: "T",
                                            typeId: "9c9f-9774-a358-3a39"
                                        }
                                    }, {
                                        _: "16",
                                        "$": {
                                            name: "W",
                                            typeId: "f330-5e6e-4110-0978"
                                        }
                                    }, {
                                        _: "*",
                                        "$": {
                                            name: "A",
                                            typeId: "13fc-b29b-31f2-ab9f"
                                        }
                                    }, {
                                        _: "10",
                                        "$": {
                                            name: "Ld",
                                            typeId: "00ca-f8b8-876d-b705"
                                        }
                                    }, {
                                        _: "6+",
                                        "$": {
                                            name: "Save",
                                            typeId: "c0df-df94-abd7-e8d3"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "b3c7-4b66-8b03-4f54::bd35-4323-98f5-9785",
                                    name: "Keeper of Secrets",
                                    hidden: "false",
                                    typeId: "bc97-dea9-9e88-bb7d",
                                    typeName: "Psyker"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "2",
                                        "$": {
                                            name: "Cast",
                                            typeId: "5afb-9914-904b-d3b3"
                                        }
                                    }, {
                                        _: "1",
                                        "$": {
                                            name: "Deny",
                                            typeId: "b5ac-9c20-5d5a-6f9b"
                                        }
                                    }, {
                                        _: "Smite and two powers from the Slaanesh discipline",
                                        "$": {
                                            name: "Powers Known",
                                            typeId: "69d7-b45e-00a2-7e46"
                                        }
                                    }, {
                                        _: "-",
                                        "$": {
                                            name: "Other",
                                            typeId: "c2e2-f115-0003-5d7b"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "b3c7-4b66-8b03-4f54::0d2f-c8da-21e2-06cc",
                                    name: "Keeper of Secrets",
                                    hidden: "false",
                                    typeId: "5f4f-ea74-0630-4afe",
                                    typeName: "Wound Track"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "-",
                                        "$": {
                                            name: "Remaining W",
                                            typeId: "8e45-c866-b2d4-c9ab"
                                        }
                                    }, {
                                        _: "M",
                                        "$": {
                                            name: "Characteristic 1",
                                            typeId: "bf41-c860-50bc-2a7e"
                                        }
                                    }, {
                                        _: "A",
                                        "$": {
                                            name: "Characteristic 2",
                                            typeId: "dc18-e51f-309b-8efa"
                                        }
                                    }, {
                                        _: "Snapping Claws",
                                        "$": {
                                            name: "Characteristic 3",
                                            typeId: "df06-8eca-150f-90ba"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "b3c7-4b66-8b03-4f54::b295-33b1-1379-507c",
                                    name: "Keeper of Secrets1",
                                    hidden: "false",
                                    typeId: "5f4f-ea74-0630-4afe",
                                    typeName: "Wound Track"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "9-16+",
                                        "$": {
                                            name: "Remaining W",
                                            typeId: "8e45-c866-b2d4-c9ab"
                                        }
                                    }, {
                                        _: "14\"",
                                        "$": {
                                            name: "Characteristic 1",
                                            typeId: "bf41-c860-50bc-2a7e"
                                        }
                                    }, {
                                        _: "6",
                                        "$": {
                                            name: "Characteristic 2",
                                            typeId: "dc18-e51f-309b-8efa"
                                        }
                                    }, {
                                        _: "4",
                                        "$": {
                                            name: "Characteristic 3",
                                            typeId: "df06-8eca-150f-90ba"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "b3c7-4b66-8b03-4f54::40bb-307c-9290-4bf5",
                                    name: "Keeper of Secrets2",
                                    hidden: "false",
                                    typeId: "5f4f-ea74-0630-4afe",
                                    typeName: "Wound Track"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "5-8",
                                        "$": {
                                            name: "Remaining W",
                                            typeId: "8e45-c866-b2d4-c9ab"
                                        }
                                    }, {
                                        _: "11\"",
                                        "$": {
                                            name: "Characteristic 1",
                                            typeId: "bf41-c860-50bc-2a7e"
                                        }
                                    }, {
                                        _: "5",
                                        "$": {
                                            name: "Characteristic 2",
                                            typeId: "dc18-e51f-309b-8efa"
                                        }
                                    }, {
                                        _: "3",
                                        "$": {
                                            name: "Characteristic 3",
                                            typeId: "df06-8eca-150f-90ba"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "b3c7-4b66-8b03-4f54::bc20-4572-9041-8ce2",
                                    name: "Keeper of Secrets3",
                                    hidden: "false",
                                    typeId: "5f4f-ea74-0630-4afe",
                                    typeName: "Wound Track"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "1-4",
                                        "$": {
                                            name: "Remaining W",
                                            typeId: "8e45-c866-b2d4-c9ab"
                                        }
                                    }, {
                                        _: "7\"",
                                        "$": {
                                            name: "Characteristic 1",
                                            typeId: "bf41-c860-50bc-2a7e"
                                        }
                                    }, {
                                        _: "4",
                                        "$": {
                                            name: "Characteristic 2",
                                            typeId: "dc18-e51f-309b-8efa"
                                        }
                                    }, {
                                        _: "2",
                                        "$": {
                                            name: "Characteristic 3",
                                            typeId: "df06-8eca-150f-90ba"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "b3c7-4b66-8b03-4f54::4b4e-d233-16dc-ab71::131c-7ac3-2d87-0340",
                                    name: "Greater Daemon",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "When a Morale test is taken for a friendly SLAANESH DAEMON unit within 6\" of this model, you can use this model’s Leadership characteristic instead of that unit’s.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "b3c7-4b66-8b03-4f54::34ed-f445-e151-f52c::7ebf-19a7-1108-215c",
                                    name: "Daemonic",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "Units with this ability have a 5+ invulnerable save.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "b3c7-4b66-8b03-4f54::72fb-a89e-c8a9-0414::879f-7b47-bc3b-f770",
                                    name: "Quicksilver Swiftness",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "This unit always fights first in the Fight phase, even if they didn't charge. If the enemy has units that have charged, or that have a similar ability, then alternate choosing units to fight with, starting with the player whose turn is taking place.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "b3c7-4b66-8b03-4f54::ac9a-5730-8d32-ad7b::27ee-b576-e620-bed8",
                                    name: "Mesmerising Aura",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "When resolving an attack made with a melee weapon against this model, subtract 1 from the hit roll.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "b3c7-4b66-8b03-4f54::98ec-54fa-5e1b-12fe::11de-19d6-fb18-52a8",
                                    name: "Delicate Precision",
                                    hidden: "false",
                                    typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                    typeName: "Abilities"
                                },
                                characteristics: [{
                                    characteristic: [{
                                        _: "When resolving an attack made by this model, re-roll a wound roll of 1.",
                                        "$": {
                                            name: "Description",
                                            typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        selections: [{
                            selection: [{
                                "$": {
                                    id: "57de-acc0-da51-1fb3",
                                    name: "Witstealer sword",
                                    entryId: "b3c7-4b66-8b03-4f54::e51e-f5d0-c1b8-5736",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "b3c7-4b66-8b03-4f54::ee06-394d-f4d7-d7c7",
                                            name: "Witstealer sword",
                                            hidden: "false",
                                            typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                            typeName: "Weapon"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "Melee",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                }
                                            }, {
                                                _: "Melee",
                                                "$": {
                                                    name: "Type",
                                                    typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                }
                                            }, {
                                                _: "+2",
                                                "$": {
                                                    name: "S",
                                                    typeId: "59b1-319e-ec13-d466"
                                                }
                                            }, {
                                                _: "-3",
                                                "$": {
                                                    name: "AP",
                                                    typeId: "75aa-a838-b675-6484"
                                                }
                                            }, {
                                                _: "3",
                                                "$": {
                                                    name: "D",
                                                    typeId: "ae8a-3137-d65b-4ca7"
                                                }
                                            }, {
                                                _: "When resolving an attack made by a model that has lost one or more wounds from an attack made with this weapon, subtract 1 from the hit roll.",
                                                "$": {
                                                    name: "Abilities",
                                                    typeId: "837d-5e63-aeb7-1410"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "727f-7350-4263-cd43",
                                    name: "Smite",
                                    entryId: "b3c7-4b66-8b03-4f54::785b-ecb8-fcbd-5b88::03fd-db47-5333-1e1f",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "b3c7-4b66-8b03-4f54::785b-ecb8-fcbd-5b88::72f4-48ff-fafb-c876::5821-6c45-8572-7e0e",
                                            name: "Smite",
                                            hidden: "false",
                                            typeId: "ae70-4738-0161-bec0",
                                            typeName: "Psychic Power"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "5",
                                                "$": {
                                                    name: "Warp Charge",
                                                    typeId: "5ffd-b800-c317-532a"
                                                }
                                            }, {
                                                _: "18\"",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "fd64-cbc4-94de-24cc"
                                                }
                                            }, {
                                                _: "Smite has a warp charge value of 5. If manifested, the closest visible enemy unit within 18\" of the psyker suffers D3 mortal wounds (pg 181). If the result of the Psychic test was more than 10 the target suffers D6 mortal wounds instead.",
                                                "$": {
                                                    name: "Details",
                                                    typeId: "ad96-dfa4-b4ed-656d"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "c6a4-2eae-de6d-f799",
                                    name: "Snapping claws",
                                    entryId: "b3c7-4b66-8b03-4f54::790c-5d69-cb67-63f4::ca51-051e-94fa-afd4",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "b3c7-4b66-8b03-4f54::790c-5d69-cb67-63f4::814e-531c-7fb3-aad1",
                                            name: "Snapping claws",
                                            hidden: "false",
                                            typeId: "d5f97c0b-9fc9-478d-aa34-a7c414d3ea48",
                                            typeName: "Weapon"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "Melee",
                                                "$": {
                                                    name: "Range",
                                                    typeId: "6fa97fa8-ea74-4a27-a0fb-bc4e5f367464"
                                                }
                                            }, {
                                                _: "Melee",
                                                "$": {
                                                    name: "Type",
                                                    typeId: "077c342f-d7b9-45c6-b8af-88e97cafd3a2"
                                                }
                                            }, {
                                                _: "User",
                                                "$": {
                                                    name: "S",
                                                    typeId: "59b1-319e-ec13-d466"
                                                }
                                            }, {
                                                _: "-3",
                                                "$": {
                                                    name: "AP",
                                                    typeId: "75aa-a838-b675-6484"
                                                }
                                            }, {
                                                _: "3",
                                                "$": {
                                                    name: "D",
                                                    typeId: "ae8a-3137-d65b-4ca7"
                                                }
                                            }, {
                                                _: "When the bearer fights, it makes a number of additional attacks with this weapon equal to the number shown in its damage table. When resolving an attack made with this weapon, on a wound roll of 6+ this weapon has an Armour Penetration characteristic of -4 for that attack.",
                                                "$": {
                                                    name: "Abilities",
                                                    typeId: "837d-5e63-aeb7-1410"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }, {
                                "$": {
                                    id: "ad04-0986-6c86-57fb",
                                    name: "Shining aegis",
                                    entryId: "b3c7-4b66-8b03-4f54::3098-11e8-4a54-cfb2::4213-dd22-fcc9-ce9e",
                                    entryGroupId: "b3c7-4b66-8b03-4f54::a496-9e4b-7d40-35f3",
                                    number: "1",
                                    type: "upgrade"
                                },
                                profiles: [{
                                    profile: [{
                                        "$": {
                                            id: "b3c7-4b66-8b03-4f54::3098-11e8-4a54-cfb2::d78b-9ab1-6b8b-626b",
                                            name: "Shining aegis",
                                            hidden: "false",
                                            typeId: "72c5eafc-75bf-4ed9-b425-78009f1efe82",
                                            typeName: "Abilities"
                                        },
                                        characteristics: [{
                                            characteristic: [{
                                                _: "If this model has a shining aegis, then when it would lose a wound, roll one D6; on a 6 that wound is not lost. If that wound would be lost as a result of a mortal wound, that wound is not lost on a 5+ instead of 6.",
                                                "$": {
                                                    name: "Description",
                                                    typeId: "21befb24-fc85-4f52-a745-64b2e48f8228"
                                                }
                                            }]
                                        }]
                                    }]
                                }],
                                costs: [{
                                    cost: [{
                                        "$": {
                                            name: "pts",
                                            typeId: "points",
                                            value: "10.0"
                                        }
                                    }, {
                                        "$": {
                                            name: " PL",
                                            typeId: "e356-c769-5920-6e14",
                                            value: "0.0"
                                        }
                                    }, {
                                        "$": {
                                            name: "CP",
                                            typeId: "2d3b-b544-ad49-fb75",
                                            value: "0.0"
                                        }
                                    }]
                                }]
                            }]
                        }],
                        costs: [{
                            cost: [{
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "230.0"
                                }
                            }, {
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "12.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "0.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "9858-30b8-5ab3-7338",
                                    name: "HQ",
                                    entryId: "848a6ff2-0def-4c72-8433-ff7da70e6bc7",
                                    primary: "true"
                                }
                            }, {
                                "$": {
                                    id: "ace4-e4c9-cf30-2ee2",
                                    name: "Character",
                                    entryId: "ef18-746a-369f-43a4",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "43cc-0ddf-9b5b-32ca",
                                    name: "Faction: Daemon",
                                    entryId: "0bc5-6451-5612-4a25",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "be32-c706-1611-9213",
                                    name: "Monster",
                                    entryId: "3b77-decb-d468-6bcc",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "1ae1-74a0-b41b-e9e2",
                                    name: "Psyker",
                                    entryId: "e691-aad7-d21c-1023",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "dfb8-0e55-165a-2aab",
                                    name: "Faction: Slaanesh",
                                    entryId: "1da2-76db-f76f-6b6c",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "25de-d104-41b6-0094",
                                    name: "Faction: Chaos",
                                    entryId: "5cf1-acf2-ca3b-c2e5",
                                    primary: "false"
                                }
                            }, {
                                "$": {
                                    id: "4389-d6be-d947-b961",
                                    name: "Keeper of Secrets",
                                    entryId: "5cce-0985-a56e-9523",
                                    primary: "false"
                                }
                            }]
                        }]
                    }, {
                        "$": {
                            id: "465f-4a9e-8427-dcb1",
                            name: "Detachment Command Cost",
                            entryId: "ec87-f19e-eee2-1ba8::9d97-2793-9882-d48a",
                            number: "1",
                            type: "upgrade"
                        },
                        costs: [{
                            cost: [{
                                "$": {
                                    name: " PL",
                                    typeId: "e356-c769-5920-6e14",
                                    value: "0.0"
                                }
                            }, {
                                "$": {
                                    name: "CP",
                                    typeId: "2d3b-b544-ad49-fb75",
                                    value: "-2.0"
                                }
                            }, {
                                "$": {
                                    name: "pts",
                                    typeId: "points",
                                    value: "0.0"
                                }
                            }]
                        }],
                        categories: [{
                            category: [{
                                "$": {
                                    id: "beb1-1b7c-4f5d-b0b4",
                                    name: "Configuration",
                                    entryId: "fcff-0f21-93e6-1ddc",
                                    primary: "true"
                                }
                            }]
                        }]
                    }]
                }],
                publications: [{
                    publication: [{
                        "$": {
                            id: "85df-1155-c986-4d71",
                            name: "Psychic Awakening IX: Pariah"
                        }
                    }, {
                        "$": {
                            id: "c9fe-4431-b76d-267a",
                            name: "Psychic Awakening VIII: War of the Spider"
                        }
                    }, {
                        "$": {
                            id: "ecea-8b62-fefb-9f8e",
                            name: "Psychic Awakening VII: Engine War"
                        }
                    }, {
                        "$": {
                            id: "28ec-711c-pubN118139",
                            name: "Index: Xenos 2"
                        }
                    }, {
                        "$": {
                            id: "5c2d-db9f-58ca-e7b2",
                            name: "Psychic Awakening IV: Ritual of the Damned"
                        }
                    }, {
                        "$": {
                            id: "0865-ee21-d1f1-ed38",
                            name: "War Zone Charadon, Act I: The Book of Rust"
                        }
                    }, {
                        "$": {
                            id: "422a-a40e-pubN71142",
                            name: "Dataslate: Be'lakor"
                        }
                    }, {
                        "$": {
                            id: "28ec-711c-pubN72690",
                            name: "Warhammer 40,000 Core Book"
                        }
                    }, {
                        "$": {
                            id: "28ec-711c-pubN78977",
                            name: "Index: Imperium 1"
                        }
                    }, {
                        "$": {
                            id: "28ec-711c-pubN98266",
                            name: "Imperium Nihilus: Vigilus Defiant"
                        }
                    }, {
                        "$": {
                            id: "52c4-39c0-ae97-d4dc",
                            name: "Psychic Awakening VI: Saga of the Beast"
                        }
                    }, {
                        "$": {
                            id: "b854-bcb5-5746-e0d3",
                            name: "War Zone Charadon, Act II: The Book of Fire"
                        }
                    }, {
                        "$": {
                            id: "28ec-711c-pubN77581",
                            name: "Index: Imperium 2"
                        }
                    }, {
                        "$": {
                            id: "5093-9448-d8cc-5327",
                            name: "Psychic Awakening II: Faith and Fury"
                        }
                    }, {
                        "$": {
                            id: "28ec-711c-pubN76527",
                            name: "Index: Xenos 1"
                        }
                    }, {
                        "$": {
                            id: "5b08-09e5-a80a-fd67",
                            name: "Psychic Awakening I: Phoenix Rising"
                        }
                    }, {
                        "$": {
                            id: "977a-446b-737a-b571",
                            name: "Chapter Approved 2021"
                        }
                    }, {
                        "$": {
                            id: "ce40-ec9e-21e2-2e42",
                            name: "Warhammer Quest: Blackstone Fortress"
                        }
                    }, {
                        "$": {
                            id: "28ec-711c-pubN99666",
                            name: "Index: Chaos"
                        }
                    }, {
                        "$": {
                            id: "f000-7b0c-01bf-7630",
                            name: "Psychic Awakening III: Blood of Baal"
                        }
                    }, {
                        "$": {
                            id: "7573-8d1b-acdf-2de8",
                            name: "Imperial Armour: Compendium"
                        }
                    }, {
                        "$": {
                            id: "b652-8bab-1453-da20",
                            name: "Warhammer Legends"
                        }
                    }, {
                        "$": {
                            id: "4593-a2f0-546a-d6f2",
                            name: "Psychic Awakening V: The Greater Good"
                        }
                    }, {
                        "$": {
                            id: "2ec0-6d53-e36b-9895",
                            name: "Chapter Approved 2018"
                        }
                    }, {
                        "$": {
                            id: "28ec-711c-pubN73170",
                            name: "Chapter Approved 2017"
                        }
                    }]
                }],
                categories: [{
                    category: [{
                        "$": {
                            id: "cf9d-55f9-72a2-791e",
                            name: "Uncategorised",
                            entryId: "(No Category)",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "3cb3-98bb-0ee7-c5f6",
                            name: "Configuration",
                            entryId: "fcff-0f21-93e6-1ddc",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "09f5-14e3-85a8-0c7b",
                            name: "Stratagems",
                            entryId: "c845-c72c-6afe-3fc2",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "2633-96ec-0c8f-ca51",
                            name: "No Force Org Slot",
                            entryId: "ff36a6f3-19bf-4f48-8956-adacfd28fe74",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "1caa-68a7-c648-d0c9",
                            name: "HQ",
                            entryId: "848a6ff2-0def-4c72-8433-ff7da70e6bc7",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "5177-e817-efd9-0e39",
                            name: "Troops",
                            entryId: "5d76b6f5-20ae-4d70-8f59-ade72a2add3a",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "98b9-757a-0852-6bbf",
                            name: "Elites",
                            entryId: "638d74c6-bd97-4de5-b65a-6aaa24e9f4b2",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "bacd-1883-320e-23a6",
                            name: "Fast Attack",
                            entryId: "c274d0b0-5866-44bc-9810-91c136ae7438",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "906c-e473-4b74-9a2c",
                            name: "Heavy Support",
                            entryId: "abf5fd55-9ac7-4263-8bc1-a9fb0a8fa6a6",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "2c65-6477-dc5f-af5b",
                            name: "Flyer",
                            entryId: "e888-1504-aa61-95ff",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "2a67-24ff-5296-5603",
                            name: "Dedicated Transport",
                            entryId: "1b66-3f5f-6705-079a",
                            primary: "false"
                        }
                    }, {
                        "$": {
                            id: "dafd-66b0-25f7-6f32",
                            name: "Relic",
                            entryId: "e10e-b44e-7eda-41d8",
                            primary: "false"
                        }
                    }]
                }]
            }]
        }]
    }
}
