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

	/* ===== Insula Primalis ===== */
	{
		name: "primalis",
		type: "environment",
		subtype: "character",
		inList: true,
		displayName: "Insula Primalis",
		childTargets: []
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
