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
	}

	get id() {
		return this.data.id;
	}

	get name() {
		return this.data.name;
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

	get targets() {
		return this.data.targets.map(t => t.name);
	}

	get showTargetCreationDropdown() {
		return this.data.targets && 0 < this.data.targets.length;
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
});