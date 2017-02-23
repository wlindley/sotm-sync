const data = require('./data');
const EventEmitter = require('events').EventEmitter;
const seconds = require('./timer').seconds;

class Game extends EventEmitter {
	constructor(gameId, data, timer) {
		super();
		this._nextEntityId = 0;
		this._gameId = gameId;
		this._data = data;
		this._timer = timer;
		this._objects = [];
	}

	serializeState() {
		return {
			objects: this._objects
		};
	}

	createTarget(parentId, name) {
		let parent = this._objects.find(obj => parentId === obj.id);
		let template = this._data.find(t => name === t.name);
		if (template && parent && parent.childTargets.includes(name))
			this._addFromTemplate(template, parentId);
	}

	createCharacter(name) {
		let template = this._data.find(t => t.name === name);
		if (template)
			this._addFromTemplate(template);
	}

	modifyHp(entityId, hpDelta) {
		let entity = this._objects.find(obj => entityId === obj.id);
		if (entity && Number.isInteger(entity.currentHp)) {
			let newHp = entity.currentHp + hpDelta;
			entity.currentHp = Math.max(0, Math.min(entity.initialHp, newHp));
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

	_addFromTemplate(template, parentId=null) {
		let addition = Object.assign({}, template);
		addition.id = this._nextEntityId;
		this._nextEntityId++;
		if (addition.hasOwnProperty('initialHp'))
			addition.currentHp = addition.initialHp;
		if (Number.isInteger(parentId))
			addition.parentId = parentId;
		this._objects.push(addition);
		this._dispatchChanged();
	}

	_dispatchChanged() {
		this.emit('changed');
	}
}

module.exports = Game;
