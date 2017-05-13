let isChildOf = (child, parent) => child.parentId && parent.id === child.parentId;

class DestroyChildrenLifecycle {
	created() {

	}

	hpChanged() {

	}

	destroyed(entity, game) {
		let state = game.serializeState();
		for (let otherEntity of state.objects)
			if (isChildOf(otherEntity, entity))
				game.removeEntity(otherEntity.id);
	}
}
module.exports = DestroyChildrenLifecycle;
