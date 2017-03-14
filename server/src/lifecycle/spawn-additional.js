class SpawnAdditionalLifecycle {
	created(entity, game) {
		if (entity.hasOwnProperty('spawnCharacterOnCreated'))
			for (let name of entity.spawnCharacterOnCreated)
				game.createCharacter(name);

		if (entity.hasOwnProperty('spawnTargetOnCreated'))
			for (let name of entity.spawnTargetOnCreated)
				game.createTarget(entity.id, name);
	}

	hpChanged() {

	}

	destroyed() {

	}
}
module.exports = SpawnAdditionalLifecycle;
