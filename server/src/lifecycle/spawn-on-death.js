class SpawnOnDeathLifecycle {
	constructor(spawner) {
		this._spawner = spawner;
	}

	created() {

	}

	hpChanged() {

	}

	destroyed(entity, game) {
		this._spawner.spawnCharactersForProperty(entity, 'spawnCharacterOnDestroyed', game);
		this._spawner.spawnTargetsForProperty(entity, 'spawnTargetOnDestroyed', game);
	}
}
module.exports = SpawnOnDeathLifecycle;
