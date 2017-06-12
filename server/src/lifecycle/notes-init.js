class NotesInitLifecycle {
	created(entity) {
		entity.notes = '';
	}

	hpChanged() {

	}

	destroyed() {

	}
}
module.exports = NotesInitLifecycle;
