const seconds = require('../timer').seconds;

let isDead = (entity) => {
	return 0 >= entity.currentHp;
};

class DeathLifecycle {
	constructor(timer) {
		this._timer = timer;
	}

	created(entity, game) {

	}

	hpChanged(entity, game) {
		if (isDead(entity)) {
			this._timer.wait(seconds(1), () => {
				if (isDead(entity))
					game.removeEntity(entity.id);
			});
		}
	}

	destroyed(entity, game) {

	}
}
module.exports = DeathLifecycle;
