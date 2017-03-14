class Spawner {
	spawnCharactersForProperty(entity, property, game) {
		if (entity.hasOwnProperty(property))
			for (let name of entity[property])
				game.createCharacter(name);
	}

	spawnTargetsForProperty(entity, property, game) {
		if (entity.hasOwnProperty(property))
			for (let name of entity[property])
				game.createTarget(entity.id, name);
	}
}
module.exports = Spawner;
