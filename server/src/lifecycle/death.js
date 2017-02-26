const seconds = require('../timer').seconds;

let isDead = (entity) => 0 >= entity.currentHp;

class DeathLifecycle {
	constructor(timer) {
		this._timer = timer;
	}

	created() {

	}

	hpChanged(entity, game) {
		if (isDead(entity)) {
			this._timer.wait(seconds(1), () => {
				if (isDead(entity))
					game.removeEntity(entity.id);
			});
		}
	}

	destroyed() {

	}
}
module.exports = DeathLifecycle;
