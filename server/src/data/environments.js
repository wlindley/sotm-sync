module.exports = [
	/* ===== The Block ===== */
	{
		name: "block",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "The Block",
		childTargets: ["blockguard", "char", "filterofficer", "imprisonedrogue", "timecrazedprisoner", "wardenhoefle"]
	},
	{
		name: "blockguard",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Block Guard",
		initialHp: 7
	},
	{
		name: "char",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Char",
		initialHp: 14
	},
	{
		name: "filterofficer",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "FILTER Officer",
		initialHp: 9
	},
	{
		name: "imprisonedrogue",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Imprisoned Rogue",
		initialHp: 6
	},
	{
		name: "timecrazedprisoner",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Time-crazed Prisoner",
		initialHp: 4
	},
	{
		name: "wardenhoefle",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Warden Hoefle",
		initialHp: 13
	},

	/* ===== Freedom Tower ===== */
	{
		name: "freedomtower",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "Freedom Tower",
		childTargets: []
	},

	/* ===== The Final Wasteland ===== */
	{
		name: "finalwasteland",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "The Final Wasteland",
		childTargets: ["abominablesnowman", "amphibiouschupacabra", "skunkape", "deathworm", "newjerseydevil", "ratbeast"]
	},
	{
		name: "abominablesnowman",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Abominable Snowman",
		initialHp: 9
	},
	{
		name: "amphibiouschupacabra",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Amphibious Chupacabra",
		initialHp: 6
	},
	{
		name: "skunkape",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Horrid Skunk Ape",
		initialHp: 5
	},
	{
		name: "deathworm",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Mongolian Death Worm",
		initialHp: 8
	},
	{
		name: "newjerseydevil",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "New Jersey Devil",
		initialHp: 4
	},
	{
		name: "ratbeast",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Rat Beast",
		initialHp: 7
	},

	/* ===== Dok'Thorath Capital ===== */
	{
		name: "dokthorath",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "Dok'Thorath Capital",
		childTargets: ["refugees", "looters", "freedomfighters", "ravagers", "thorathianmilitary"]
	},
	{
		name: "refugees",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Abject Refugees",
		initialHp: 2
	},
	{
		name: "looters",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Defiant Looters",
		initialHp: 3
	},
	{
		name: "freedomfighters",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Freedom Fighters",
		initialHp: 4
	},
	{
		name: "ravagers",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Gene-Bound Ravagers",
		initialHp: 4
	},
	{
		name: "thorathianmilitary",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Thorathian Military",
		initialHp: 4
	},

	/* ===== The Enclave of the Endlings ===== */
	{
		name: "endlings",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "The Enclave of the Endlings",
		childTargets: ["baahsto", "bloogo", "frazzat", "gruum", "immutus", "jansavidero", "korrupton", "orbo", "phrentat", "slamara", "szreem", "urdid", "venox"]
	},
	{
		name: "baahsto",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Baahsto",
		initialHp: 7
	},
	{
		name: "bloogo",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Bloogo",
		initialHp: 13
	},
	{
		name: "frazzat",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Frazzat",
		initialHp: 5
	},
	{
		name: "gruum",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Gruum",
		initialHp: 11
	},
	{
		name: "immutus",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Immutus",
		initialHp: 35
	},
	{
		name: "jansavidero",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Jansa Vi Dero",
		initialHp: 25
	},
	{
		name: "korrupton",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Korrupton",
		initialHp: 9
	},
	{
		name: "orbo",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Orbo",
		initialHp: 25
	},
	{
		name: "phrentat",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Phrentat",
		initialHp: 5
	},
	{
		name: "slamara",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Slamara",
		initialHp: 7
	},
	{
		name: "szreem",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Szreem",
		initialHp: 9
	},
	{
		name: "urdid",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Urdid",
		initialHp: 13
	},
	{
		name: "venox",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Venox",
		initialHp: 11
	},

	/* ===== Insula Primalis ===== */
	{
		name: "primalis",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "Insula Primalis",
		childTargets: ["trex", "pterothief", "raptorpack"]
	},
	{
		name: "trex",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Enraged T-rex",
		initialHp: 15
	},
	{
		name: "pterothief",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Pterodactyl Thief",
		initialHp: 5
	},
	{
		name: "raptorpack",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Velociraptor Pack",
		initialHp: 5
	},

	/* ===== Megalopolis ===== */
	{
		name: "megalopolis",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "Megalopolis",
		childTargets: ["monorail", "innocents", "trafficpileup"]
	},
	{
		name: "monorail",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Plummeting Monorail",
		initialHp: 10
	},
	{
		name: "innocents",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Targeting Innocents",
		initialHp: 10
	},
	{
		name: "trafficpileup",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Traffic Pileup",
		initialHp: 10
	},

	/* ===== Mobile Defense Platform ===== */
	{
		name: "mobiledefenseplatform",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "Mobile Defense Platform",
		childTargets: ["battalionbrute", "battaliongunner", "battalionmechanic", "propulsionsystem", "shieldgenerator"]
	},
	{
		name: "battalionbrute",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Battalion Brute",
		initialHp: 4
	},
	{
		name: "battaliongunner",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Battalion Gunner",
		initialHp: 3
	},
	{
		name: "battalionmechanic",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Battalion Mechanic",
		initialHp: 2
	},
	{
		name: "propulsionsystem",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Propulsion Systems",
		initialHp: 10
	},
	{
		name: "shieldgenerator",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Shield Generator",
		initialHp: 6
	},

	/* ===== Omnitron IV ===== */
	{
		name: "omnitroniv",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "Omnitron IV",
		childTargets: ["defensegrid", "accumulator", "omnidrone", "technopursuer"]
	},
	{
		name: "defensegrid",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Internal Defense Grid",
		initialHp: 10
	},
	{
		name: "accumulator",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Mechani-Accumulator",
		initialHp: 5
	},
	{
		name: "omnidrone",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Partial Omni-Drone",
		initialHp: 10
	},
	{
		name: "technopursuer",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Techno-Pursuer",
		initialHp: 5
	},

	/* ===== Pike Industrial Complex ===== */
	{
		name: "pikeindustrial",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "Pike Industrial Complex",
		childTargets: ["labrat"]
	},
	{
		name: "labrat",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Escaped Lab Rat",
		initialHp: 3
	},

	/* ===== Realm of Discord ===== */
	{
		name: "realmofdiscord",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "Realm of Discord",
		childTargets: ["etherealbonds", "explosivebubbles", "portalfiend"]
	},
	{
		name: "etherealbonds",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Ethereal Bonds",
		initialHp: 9
	},
	{
		name: "explosivebubbles",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Explosive Bubbles",
		initialHp: 5
	},
	{
		name: "portalfiend",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Portal Fiend",
		initialHp: 17
	},

	/* ===== Rook City ===== */
	{
		name: "rookcity",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "Rook City",
		childTargets: ["ambitiousracketeer", "drtremata", "tonytaurus"]
	},
	{
		name: "ambitiousracketeer",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Ambitious Racketeer",
		initialHp: 13
	},
	{
		name: "drtremata",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Dr. Tremata",
		initialHp: 6
	},
	{
		name: "tonytaurus",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Tony Taurus",
		initialHp: 6
	},

	/* ===== Ruins of Atlantis ===== */
	{
		name: "atlantis",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "Ruins of Atlantis",
		childTargets: ["kraken", "mysticaldefenses"]
	},
	{
		name: "kraken",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "The Kraken",
		initialHp: 15
	},
	{
		name: "mysticaldefenses",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Mystical Defenses",
		initialHp: 15
	},

	/* ===== Silver Gulch, 1883 ===== */
	{
		name: "silvergulch",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "Silver Gulch, 1883",
		childTargets: ["cyrushayes", "explosiveswagon", "matthewhayes", "pricklycactus", "sheriffpratt", "stoutbarrel", "tylerhayes", "watertrough"]
	},
	{
		name: "cyrushayes",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Cyrus Hayes",
		initialHp: 4
	},
	{
		name: "explosiveswagon",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Explosives Wagon",
		initialHp: 9
	},
	{
		name: "matthewhayes",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Matthew Hayes",
		initialHp: 6
	},
	{
		name: "pricklycactus",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Prickly Cactus",
		initialHp: 3
	},
	{
		name: "sheriffpratt",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Sheriff Pratt",
		initialHp: 7
	},
	{
		name: "stoutbarrel",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Stout Barrel",
		initialHp: 5
	},
	{
		name: "tylerhayes",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Tyler Hayes",
		initialHp: 8
	},
	{
		name: "watertrough",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Water Trough",
		initialHp: 7
	},

	/* ===== Time Cataclysm ===== */
	{
		name: "timecataclysm",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "Time Cataclysm",
		childTargets: ["chargingtriceratops", "filterspy", "mutatedspecimen", "computerroom", "tumbleweed", "tendrilsofmadness"]
	},
	{
		name: "chargingtriceratops",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Charging Triceratops",
		initialHp: 8
	},
	{
		name: "filterspy",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "FILTER Spy",
		initialHp: 5
	},
	{
		name: "mutatedspecimen",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Giant Mutated Specimen",
		initialHp: 5
	},
	{
		name: "computerroom",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Main Computer Room",
		initialHp: 9
	},
	{
		name: "tumbleweed",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Passing Tumbleweed",
		initialHp: 1
	},
	{
		name: "tendrilsofmadness",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Tendrils of Madness",
		initialHp: 7
	},

	/* ===== Tomb of Anubis ===== */
	{
		name: "tombofanubis",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "Tomb of Anubis",
		childTargets: ["akana", "anubis", "mdjai", "nomti", "shamise", "swarmofscarabs", "urshe"]
	},
	{
		name: "akana",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Akana",
		initialHp: 8
	},
	{
		name: "anubis",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Anubis",
		initialHp: 20
	},
	{
		name: "mdjai",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Mdjai",
		initialHp: 10
	},
	{
		name: "nomti",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Nomti",
		initialHp: 9
	},
	{
		name: "shamise",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Shamise",
		initialHp: 7
	},
	{
		name: "swarmofscarabs",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Swarm of Scarabs",
		initialHp: 5
	},
	{
		name: "urshe",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Urshe",
		initialHp: 6
	},

	/* ===== Wagner Mars Base ===== */
	{
		name: "wagnerbase",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "Wagner Mars Base",
		childTargets: ["villainousweaponry"]
	},
	{
		name: "villainousweaponry",
		type: "environment",
		subtype: "target",
		inList: true,
		displayName: "Villainous Weaponry",
		initialHp: 5
	}
];
