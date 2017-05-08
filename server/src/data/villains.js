module.exports = [
	/* ===== Akash'Bhuta ===== */
	{
		name: "akashbhuta",
		type: "villain",
		subtype: "character",
		inList: true,
		displayName: "Akash'Bhuta",
		initialHp: 200,
		childTargets: ["arborealphalanges", "ensnaringbrambles", "livingrockslide", "mountainouscarapace"]
	},
	{
		name: "arborealphalanges",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Arboreal Phalanges",
		initialHp: 12
	},
	{
		name: "ensnaringbrambles",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Ensnaring Brambles",
		initialHp: 9
	},
	{
		name: "livingrockslide",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Living Rockslide",
		initialHp: 10
	},
	{
		name: "mountainouscarapace",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Mountainous Carapace",
		initialHp: 11
	},
	/* ===== Ambuscade ===== */
	{
		name: "ambuscade",
		type: "villain",
		subtype: "character",
		inList: true,
		displayName: "Ambuscade",
		initialHp: 50,
		childTargets: ["automatedturret", "handcannon", "explosivelauncher", "cloakingdevice", "reactiveplating", "sonicmine"]
	},
	{
		name: "automatedturret",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Automated Turret",
		initialHp: 8
	},
	{
		name: "handcannon",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Custom Hand Cannon",
		initialHp: 5
	},
	{
		name: "explosivelauncher",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Explosive Launcher",
		initialHp: 6
	},
	{
		name: "cloakingdevice",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Personal Cloaking Device",
		initialHp: 9
	},
	{
		name: "reactiveplating",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Reactive Plating",
		initialHp: 10
	},
	{
		name: "sonicmine",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Sonic Mine",
		initialHp: 1
	},
	/* ===== Apostate ===== */
	{
		name: "apostate",
		type: "villain",
		subtype: "character",
		inList: true,
		displayName: "Apostate",
		initialHp: 66,
		childTargets: ["condemnation", "corruptedeffigy", "fiendishpugilist", "gauntletofperdition", "imppilferer", "orbofdelirium", "periaptofwoe", "relicspirit", "runesofmalediction", "tomeoftheunknowable"]
	},
	{
		name: "condemnation",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Condemnation",
		initialHp: 11
	},
	{
		name: "corruptedeffigy",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Corrupted Effigy",
		initialHp: 6
	},
	{
		name: "fiendishpugilist",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Fiendish Pugilist",
		initialHp: 6
	},
	{
		name: "gauntletofperdition",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Gauntlet of Perdition",
		initialHp: 5
	},
	{
		name: "imppilferer",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Imp Pilferer",
		initialHp: 3
	},
	{
		name: "orbofdelirium",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Orb of Delirium",
		initialHp: 12
	},
	{
		name: "periaptofwoe",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Periapt of Woe",
		initialHp: 4
	},
	{
		name: "relicspirit",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Relic Spirit",
		initialHp: 9
	},
	{
		name: "runesofmalediction",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Runes of Malediction",
		initialHp: 6
	},
	{
		name: "tomeoftheunknowable",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Tome of the Unknowable",
		initialHp: 3
	},
	/* ===== Baron Blade ===== */
	{
		name: "baronbladeinventor",
		type: "villain",
		subtype: "character",
		inList: true,
		displayName: "Baron Blade - T.I.B. Inventor",
		initialHp: 40,
		childTargets: ["bladebattalion", "elementalredistributor", "defenseplatform", "remoteturret"],
		spawnCharacterOnDestroyed: ["baronbladescientist"]
	},
	{
		name: "baronbladescientist",
		type: "villain",
		subtype: "character",
		inList: true,
		displayName: "Baron Blade - Vengeful Mad Scientist",
		initialHp: 30,
		childTargets: ["bladebattalion", "elementalredistributor", "defenseplatform", "remoteturret"]
	},
	{
		name: "bladebattalion",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Blade Battalion",
		initialHp: 5
	},
	{
		name: "elementalredistributor",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Elemental Redistributor",
		initialHp: 10
	},
	{
		name: "defenseplatform",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Mobile Defense Platform",
		initialHp: 10
	},
	{
		name: "remoteturret",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Powered Remote Turret",
		initialHp: 7
	},
	/* ===== La Capitan ===== */
	{
		name: "lacapitan",
		type: "villain",
		subtype: "character",
		inList: true,
		displayName: "La Capitan",
		initialHp: 75,
		childTargets: ["mable", "battleforged", "chip", "lepeiste", "finalbreath", "paradojamagnifica", "siegebreaker", "trueshot"]
	},
	{
		name: "mable",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "The Amazing Mable",
		initialHp: 6
	},
	{
		name: "battleforged",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Battle Forged",
		initialHp: 12
	},
	{
		name: "chip",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Chip",
		initialHp: 8
	},
	{
		name: "lepeiste",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "L' Epeiste",
		initialHp: 7
	},
	{
		name: "finalbreath",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Final Breath",
		initialHp: 11
	},
	{
		name: "paradojamagnifica",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "La Paradoja Magnifica",
		initialHp: 15
	},
	{
		name: "siegebreaker",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Siege-Breaker",
		initialHp: 10
	},
	{
		name: "trueshot",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Trueshot",
		initialHp: 9
	},
	/* ===== Citizen Dawn ===== */
	{
		name: "citizendawn",
		type: "villain",
		subtype: "character",
		inList: true,
		displayName: "Citizen Dawn",
		initialHp: 80,
		childTargets: ["citizenanvil", "citizenassault", "citizenautumn", "citizenbattery", "citizenblood", "citizendare", "citizenhammer", "citizenspring", "citizensummer", "citizensweat", "citizentears", "citizentruth", "citizenwinter"]
	},
	{
		name: "citizenanvil",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Citizen Anvil",
		initialHp: 7
	},
	{
		name: "citizenassault",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Citizen Assault",
		initialHp: 4
	},
	{
		name: "citizenautumn",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Citizen Autumn",
		initialHp: 6
	},
	{
		name: "citizenbattery",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Citizen Battery",
		initialHp: 7
	},
	{
		name: "citizenblood",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Citizen Blood",
		initialHp: 5
	},
	{
		name: "citizendare",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Citizen Dare",
		initialHp: 3
	},
	{
		name: "citizenhammer",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Citizen Hammer",
		initialHp: 3
	},
	{
		name: "citizenspring",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Citizen Spring",
		initialHp: 6
	},
	{
		name: "citizensummer",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Citizen Summer",
		initialHp: 4
	},
	{
		name: "citizensweat",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Citizen Sweat",
		initialHp: 5
	},
	{
		name: "citizentears",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Citizen Tears",
		initialHp: 5
	},
	{
		name: "citizentruth",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Citizen Truth",
		initialHp: 7
	},
	{
		name: "citizenwinter",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Citizen Winter",
		initialHp: 4
	},
	/* ===== Grand Warlord Voss ===== */
	{
		name: "voss",
		type: "villain",
		subtype: "character",
		inList: true,
		displayName: "Grand Warlord Voss",
		initialHp: 90,
		childTargets: ["lttamar", "ltvyktor", "gbbanshee", "gbbionaut", "gbfiresworn", "gbfrosthound", "gbguard", "gbionlancer", "gbpsiweaver", "gbshockinfantry", "gbsoldier", "tcfconqueror", "tcfstalwart", "quarkdrive"]
	},
	{
		name: "lttamar",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Field Lieutenant Tamar",
		initialHp: 5
	},
	{
		name: "ltvyktor",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "First Lieutenant Vyktor",
		initialHp: 5
	},
	{
		name: "gbbanshee",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Gene-Bound Banshee",
		initialHp: 3
	},
	{
		name: "gbbionaut",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Gene-Bound Bionaut",
		initialHp: 3
	},
	{
		name: "gbfiresworn",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Gene-Bound Firesworn",
		initialHp: 3
	},
	{
		name: "gbfrosthound",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Gene-Bound Frosthound",
		initialHp: 3
	},
	{
		name: "gbguard",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Gene-Bound Guard",
		initialHp: 3
	},
	{
		name: "gbionlancer",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Gene-Bound Ion-Lancer",
		initialHp: 3
	},
	{
		name: "gbpsiweaver",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Gene-Bound Psi-Weaver",
		initialHp: 3
	},
	{
		name: "gbshockinfantry",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Gene-Bound Shock Infantry",
		initialHp: 3
	},
	{
		name: "gbsoldier",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Gene-Bound Soldier",
		initialHp: 3
	},
	{
		name: "tcfconqueror",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "TCF Conqueror",
		initialHp: 15
	},
	{
		name: "tcfstalwart",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "TCF Stalwart",
		initialHp: 18
	},
	{
		name: "quarkdrive",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Quark-Drive Translocator",
		initialHp: 10
	},
	/* ===== Kismet ===== */
	{
		name: "kismet",
		type: "villain",
		subtype: "character",
		inList: true,
		displayName: "Kismet",
		initialHp: 70,
		spawnTargetOnCreated: ["talismanheirloom"]
	},
	{
		name: "talismanheirloom",
		type: "villain",
		subtype: "target",
		inList: false,
		displayName: "The Talisman - Enchanted Heirloom",
		initialHp: 7,
		spawnTargetOnDestroyed: ["talismancharm"]
	},
	{
		name: "talismancharm",
		type: "villain",
		subtype: "target",
		inList: false,
		displayName: "The Talisman - Stolen Charm",
		initialHp: 7,
		spawnTargetOnDestroyed: ["talismanheirloom"]
	},
	/* ===== The Matriarch ===== */
	{
		name: "matriarch",
		type: "villain",
		subtype: "character",
		inList: true,
		displayName: "The Matriarch",
		initialHp: 70,
		spawnTargetOnCreated: ["maskofthematriarch"],
		childTargets: ["rooks", "carrionfields", "jackdaws", "huginn", "vultures", "maskofthematriarch", "muninn", "crows", "ravens"]
	},
	{
		name: "rooks",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Building of Rooks",
		initialHp: 1
	},
	{
		name: "carrionfields",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Carrion Fields",
		initialHp: 15
	},
	{
		name: "jackdaws",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Clattering of Jackdaws",
		initialHp: 1
	},
	{
		name: "huginn",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Huginn",
		initialHp: 7
	},
	{
		name: "vultures",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Kettle of Vultures",
		initialHp: 1
	},
	{
		name: "maskofthematriarch",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Mask of the Matriarch",
		initialHp: 9
	},
	{
		name: "muninn",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Muninn",
		initialHp: 7
	},
	{
		name: "crows",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Murder of Crows",
		initialHp: 1
	},
	{
		name: "ravens",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Unkindness of Ravens",
		initialHp: 1
	},
	/* ===== Omnitron ===== */
	{
		name: "omnitron",
		type: "villain",
		subtype: "character",
		inList: true,
		displayName: "Omnitron",
		initialHp: 100,
		childTargets: ["electropulse", "s83", "s84", "s85"]
	},
	{
		name: "electropulse",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Electro-pulse Explosive",
		initialHp: 15
	},
	{
		name: "s83",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "S-83 Assault Drone",
		initialHp: 4
	},
	{
		name: "s84",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "S-84 Automaton Drone",
		initialHp: "H"
	},
	{
		name: "s85",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "S-85 Repair Drone",
		initialHp: 4
	},
	/* ===== Plague Rat ===== */
	{
		name: "plaguerat",
		type: "villain",
		subtype: "character",
		inList: true,
		displayName: "Plague Rat",
		initialHp: 85,
		spawnTargetOnCreated: ["plaguelocus"],
		childTargets: ["plaguelocus"]
	},
	{
		name: "plaguelocus",
		type: "villain",
		subtype: "target",
		inList: true,
		displayName: "Plague Locus",
		initialHp: 13
	},
	/* ===== Spite ===== */
	{
		name: "spite",
		type: "villain",
		subtype: "character",
		inList: true,
		displayName: "Spite",
		initialHp: 80
	},
];
