class HpInitLifecycle {
	created(entity, game) {
		entity.currentHp = entity.initialHp;
	}

	hpChanged(entity, game) {
		
	}

	destroyed(entity, game) {

	}
}
module.exports = HpInitLifecycle;
