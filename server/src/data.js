module.exports = {
	villains: [
		{
			type: "villain",
			name: "Baron Blade",
			initialHp: 50,
			targets: []
		}
	],
	environments: [
		{
			type: "environment",
			name: "Megalopolis",
			targets: []
		}
	],
	heroes: [
		{
			type: "hero",
			name: "Legacy",
			initialHp: 31
		},
		{
			type: "hero",
			name: "Tachyon",
			initialHp: 25
		},
		{
			type: "hero",
			name: "Haka",
			initialHp: 31
		},
		{
			type: "hero",
			name: "Unity",
			initialHp: 24,
			targets: [
				{
					type: "hero",
					name: "Raptorbot",
					initialHp: 5
				},
				{
					type: "hero",
					name: "Platformbot",
					initialHp: 3
				}
			]
		}
	]
};
