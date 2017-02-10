const data = require('./data');

class Game {
	constructor(gameId) {
		this.nextEntityId = 0;
		this.gameId = gameId;
		this.isSetup = true;
		this.objects = [];
		this.createInitialObjects();
	}

	serializeState() {
		return {
			isSetup: this.isSetup,
			objects: this.objects
		};
	}

	createInitialObjects() {
		this.addRandom(data.villains);
		this.addRandom(data.environments);
		this.addRandom(data.heroes, 3);
	}

	addRandom(src, count=1) {
		let additions = [];
		while (count > additions.length) {
			let addition = src[Math.floor(Math.random() * src.length)];
			if (!additions.includes(addition))
				additions.push(addition);
		}
		for (let item of additions) {
			let addition = Object.assign({}, item);
			addition.id = this.nextEntityId;
			this.nextEntityId++;
			if (addition.hasOwnProperty('initialHp'))
				addition.currentHp = addition.initialHp;
			this.objects.push(addition);
		}
	}

	modifyHp(entityId, hpDelta) {
		let entity = this.objects.find(obj => entityId === obj.id);
		if (entity && Number.isInteger(entity.currentHp)) {
			let newHp = entity.currentHp + hpDelta;
			entity.currentHp = Math.max(0, Math.min(entity.initialHp, newHp));
		}
	}
}

module.exports = Game;
