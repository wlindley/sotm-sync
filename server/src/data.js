module.exports = {
	villains: [
		{
			name: "baronblade",
			type: "villain",
			subtype: "character",
			displayName: "Baron Blade",
			initialHp: 50,
			childTargets: []
		}
	],
	environments: [
		{
			name: "megalopolis",
			type: "environment",
			subtype: "character",
			inList: true,
			displayName: "Megalopolis",
			childTargets: []
		}
	],
	heroes: [
		{
			name: "legacy0",
			type: "hero",
			subtype: "character",
			inList: true,
			displayName: "Legacy",
			initialHp: 31
		},
		{
			name: "tachyon0",
			type: "hero",
			subtype: "character",
			inList: true,
			displayName: "Tachyon",
			initialHp: 25
		},
		{
			name: "haka0",
			type: "hero",
			subtype: "character",
			inList: true,
			displayName: "Haka",
			initialHp: 31
		},
		{
			name: "unity0",
			type: "hero",
			subtype: "character",
			inList: true,
			displayName: "Unity",
			initialHp: 24,
			childTargets: [
				"raptorbot",
				"platformbot"
			]
		},
		{
			name: "raptorbot",
			type: "hero",
			subtype: "target",
			inList: true,
			displayName: "Raptorbot",
			initialHp: 5
		},
		{
			name: "platformbot",
			type: "hero",
			subtype: "target",
			inList: true,
			displayName: "Platformbot",
			initialHp: 3
		}
	]
};
