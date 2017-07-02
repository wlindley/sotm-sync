let isChildOf = (child, parent) => child.parentId && parent.id === child.parentId;
const doNotDestroyChildren = 'doNotDestroyChildrenOnDeath';
let shouldRemoveChildrenOf = (parent) => !parent.hasOwnProperty(doNotDestroyChildren) || true !== parent[doNotDestroyChildren];

class DestroyChildrenLifecycle {
	created() {

	}

	hpChanged() {

	}

	destroyed(entity, game) {
		if (!shouldRemoveChildrenOf(entity))
			return;
		let state = game.serializeState();
		for (let otherEntity of state.objects)
			if (isChildOf(otherEntity, entity))
				game.removeEntity(otherEntity.id);
	}
}
module.exports = DestroyChildrenLifecycle;
