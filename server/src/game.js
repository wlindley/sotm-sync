const data = require('./data');

class Game {
	constructor(gameId) {
		this.nextEntityId = 0;
		this.gameId = gameId;
		this.gameState = 'running';
		this.objects = [];
		this.createInitialObjects();
	}

	serializeState() {
		return {
			gameState: this.gameState,
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
		for (let item of additions)
			this.addFromTemplate(item);
	}

	addFromTemplate(template) {
		let addition = Object.assign({}, template);
		addition.id = this.nextEntityId;
		this.nextEntityId++;
		if (addition.hasOwnProperty('initialHp'))
			addition.currentHp = addition.initialHp;
		this.objects.push(addition);
	}

	modifyHp(entityId, hpDelta) {
		let entity = this.objects.find(obj => entityId === obj.id);
		if (entity && Number.isInteger(entity.currentHp)) {
			let newHp = entity.currentHp + hpDelta;
			entity.currentHp = Math.max(0, Math.min(entity.initialHp, newHp));
		}
	}

	createTarget(entityId, subTargetName) {
		let entity = this.objects.find(obj => entityId === obj.id);
		if (entity && entity.targets) {
			let targetTemplate = entity.targets.find(t => subTargetName === t.name);
			if (targetTemplate)
				this.addFromTemplate(targetTemplate);
		}
	}

	createVillain(name) {
		let template = data.villains.find(v => name === v.name);
		if (template)
			this.addFromTemplate(template);
	}

	createEnvrionment(name) {
		let template = data.environments.find(v => name === v.name);
		if (template)
			this.addFromTemplate(template);
	}

	createHero(name) {
		let template = data.heroes.find(v => name === v.name);
		if (template)
			this.addFromTemplate(template);
	}
}

module.exports = Game;
