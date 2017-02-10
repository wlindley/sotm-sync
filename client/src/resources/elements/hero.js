import {bindable, decorators} from 'aurelia-framework';

export let Hero = decorators(
	bindable({name: 'data', defaultValue: {}})
).on(class {
	get name() {
		return this.data.name;
	}

	get currentHp() {
		return this.data.initialHp;
	}

	get initialHp() {
		return this.data.initialHp;
	}

	incrementHp() {
		console.log('increment hp for ' + this.name);
	}

	decrementHp() {
		console.log('decrement hp for ' + this.name);
	}
});