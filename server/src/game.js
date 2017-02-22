const data = require('./data');
const EventEmitter = require('events').EventEmitter;

class Game extends EventEmitter {
	constructor(gameId) {
		super();
		this.nextEntityId = 0;
		this.gameId = gameId;
		this.gameState = 'running';
		this.objects = [];
	}

	serializeState() {
		return {
			gameState: this.gameState,
			objects: this.objects
		};
	}

	addFromTemplate(template) {
		let addition = Object.assign({}, template);
		addition.id = this.nextEntityId;
		this.nextEntityId++;
		if (addition.hasOwnProperty('initialHp'))
			addition.currentHp = addition.initialHp;
		this.objects.push(addition);
		this._dispatchChanged();
	}

	modifyHp(entityId, hpDelta) {
		let entity = this.objects.find(obj => entityId === obj.id);
		if (entity && Number.isInteger(entity.currentHp)) {
			let newHp = entity.currentHp + hpDelta;
			entity.currentHp = Math.max(0, Math.min(entity.initialHp, newHp));
			this._dispatchChanged();
			if (0 === entity.currentHp) {
				setTimeout(() => {
					if (0 === entity.currentHp)
						this.removeEntity(entity.id);
				}, 1000);
			}
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

	createEnvironment(name) {
		let template = data.environments.find(v => name === v.name);
		if (template)
			this.addFromTemplate(template);
	}

	createHero(name) {
		let template = data.heroes.find(v => name === v.name);
		if (template)
			this.addFromTemplate(template);
	}

	removeEntity(entityId) {
		let index = this.objects.findIndex(obj => entityId === obj.id);
		if (0 <= index) {
			this.objects.splice(index, 1);
			this._dispatchChanged();
		}
	}

	_dispatchChanged() {
		this.emit('changed');
	}
}

module.exports = Game;
