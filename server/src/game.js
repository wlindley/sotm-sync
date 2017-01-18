class Game {
	constructor(gameId) {
		this.gameId = gameId;
		this.isSetup = true;
		this.objects = [];
		this.objects.push({
			id: 0,
			name: "Villain Selection",
			type: "selection/villain",
			count: 1
		});
		this.objects.push({
			id: 1,
			name: "Environment Selection",
			type: "selection/environment",
			count: 1
		});
		this.objects.push({
			id: 2,
			name: "Hero Selection",
			type: "selection/hero",
			count: 3
		});
	}

	serializeState() {
		return {
			isSetup: this.isSetup,
			objects: this.objects
		};
	}
}

module.exports = Game;
