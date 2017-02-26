class CompositeLifecycle {
	constructor(...lifecycles) {
		this._lifecycles = lifecycles;
	}

	created(entity, game) {
		for (let lifecycle of this._lifecycles)
			lifecycle.created(entity, game);
	}

	hpChanged(entity, game) {
		for (let lifecycle of this._lifecycles)
			lifecycle.hpChanged(entity, game);
	}

	destroyed(entity, game) {
		for (let lifecycle of this._lifecycles)
			lifecycle.destroyed(entity, game);
	}
}
module.exports = CompositeLifecycle;
