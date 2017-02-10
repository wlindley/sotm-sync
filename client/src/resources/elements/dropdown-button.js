import {bindable, decorators} from 'aurelia-framework';

export let DropdownButton = decorators(
	bindable({name: 'label', defaultValue: ''}),
	bindable({name: 'options', defaultValue: []}),
	bindable({name: 'delegates', defaultValue: {}})
).on(class {
	onSelect(selectedOption) {
		if (this.delegates.hasOwnProperty('select'))
			this.delegates.select(selectedOption);
	}
});