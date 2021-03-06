import {bindable, decorators} from 'aurelia-framework';
import {Api} from '../../api';

export let Entity = decorators(
	bindable({name: 'data', defaultValue: {}})
).on(class {
	static inject() { return [Api]; }

	constructor(api) {
		this.api = api;
		this.createTargetDelegates = {
			select: (name) => this.createTarget(name)
		};
		this.templates = [];
		this._notes = null;
		this.api.retrieveData().then((templates) => this.templates = templates);
	}

	get id() {
		return this.data.id;
	}

	get name() {
		return this.data.displayName;
	}

	get currentHp() {
		return this.data.currentHp;
	}

	get initialHp() {
		return this.data.initialHp;
	}

	get showHp() {
		return Number.isInteger(this.data.currentHp) && Number.isInteger(this.data.initialHp);
	}

	get isPrimary() {
		return 'character' === this.data.subtype;
	}

	get targets() {
		return this.data.childTargets.map(childName => {
			let template = this.templates.find(t => childName === t.name);
			let displayName = childName;
			if (template)
				displayName = template.displayName;
			return {
				id: childName,
				name: displayName
			};
		});
	}

	get showTargetCreationDropdown() {
		return this.data.childTargets && 0 < this.data.childTargets.length;
	}

	get notes() {
		return this._notes;
	}

	set notes(value) {
		this._notes = value;
	}

	incrementHp() {
		this.api.modifyHp(this.id, 1);
	}

	decrementHp() {
		this.api.modifyHp(this.id, -1);
	}

	createTarget(subTargetName) {
		this.api.createTarget(this.id, subTargetName);
	}

	remove() {
		this.api.removeEntity(this.id);
	}

	completeNote() {
		this.api.updateNotes(this.id, this._notes);
	}

	dataChanged(newValue) {
		this.data = newValue;
		this._notes = this.data.notes;
	}
});