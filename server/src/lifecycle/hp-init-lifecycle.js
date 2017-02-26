class HpInitLifecycle {
	created(entity, game) {
		entity.currentHp = entity.initialHp;
	}

	destroyed(entity, game) {

	}
}
module.exports = HpInitLifecycle;
