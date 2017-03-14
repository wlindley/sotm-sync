class SpawnAdditionalLifecycle {
	constructor(spawner) {
		this._spawner = spawner;
	}

	created(entity, game) {
		this._spawner.spawnCharactersForProperty(entity, 'spawnCharacterOnCreated', game);
		this._spawner.spawnTargetsForProperty(entity, 'spawnTargetOnCreated', game);
	}

	hpChanged() {

	}

	destroyed() {

	}
}
module.exports = SpawnAdditionalLifecycle;
