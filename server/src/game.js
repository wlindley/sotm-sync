const EventEmitter = require('events').EventEmitter;
const seconds = require('./timer').seconds;

class Game extends EventEmitter {
	constructor(gameId, timer, templateInstantiator) {
		super();
		this._gameId = gameId;
		this._timer = timer;
		this._templateInstantiator = templateInstantiator;
		this._nextEntityId = 0;
		this._objects = [];
	}

	serializeState() {
		return {
			objects: this._objects
		};
	}

	createCharacter(name) {
		this._addFromTemplate(name);
	}

	createTarget(parentId, name) {
		let parent = this._getEntityById(parentId);
		if (parent && parent.childTargets.includes(name))
			this._addFromTemplate(name, parentId);
	}

	modifyHp(entityId, hpDelta) {
		let entity = this._getEntityById(entityId);
		if (entity && Number.isInteger(entity.currentHp)) {
			this._applyHpDelta(entity, hpDelta);
			this._dispatchChanged();
			if (0 === entity.currentHp) {
				this._timer.wait(seconds(1), () => {
					if (0 === entity.currentHp)
						this.removeEntity(entity.id);
				});
			}
		}
	}

	removeEntity(entityId) {
		let index = this._objects.findIndex(obj => entityId === obj.id);
		if (0 <= index) {
			this._objects.splice(index, 1);
			this._dispatchChanged();
		}
	}

	_getEntityById(entityId) {
		return this._objects.find(obj => entityId === obj.id);
	}

	_addFromTemplate(templateName, parentId=null) {
		let instances = this._templateInstantiator.instantiate(templateName);
		for (let instance of instances) {
			this._assignSequentialEntityId(instance);
			this._assignParentId(instance, parentId);
			this._objects.push(instance);
		}
		/*
		if (addition.hasOwnProperty('initialHp'))
			addition.currentHp = addition.initialHp;
		*/
		this._dispatchChanged();
	}

	_assignSequentialEntityId(instance) {
		instance.id = this._nextEntityId;
		this._nextEntityId++;
	}

	_assignParentId(instance, parentId=null) {
		if (Number.isInteger(parentId))
			instance.parentId = parentId;
	}

	_applyHpDelta(entity, hpDelta) {
		let newHp = entity.currentHp + hpDelta;
		entity.currentHp = Math.max(0, Math.min(entity.initialHp, newHp));
	}

	_dispatchChanged() {
		this.emit('changed');
	}
}

module.exports = Game;
