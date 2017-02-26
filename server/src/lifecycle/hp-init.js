class HpInitLifecycle {
	created(entity) {
		entity.currentHp = entity.initialHp;
	}

	hpChanged() {

	}

	destroyed() {

	}
}
module.exports = HpInitLifecycle;
