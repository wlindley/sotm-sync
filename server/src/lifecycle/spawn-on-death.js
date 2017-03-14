class SpawnOnDeathLifecycle {
	created() {

	}

	hpChanged() {

	}

	destroyed(entity, game) {
		if (entity.hasOwnProperty('spawnCharacterOnDestroyed'))
			for (let name of entity.spawnCharacterOnDestroyed)
				game.createCharacter(name);

		if (entity.hasOwnProperty('spawnTargetOnDestroyed'))
			for (let name of entity.spawnTargetOnDestroyed)
				game.createTarget(entity.id, name);
	}
}
module.exports = SpawnOnDeathLifecycle;
