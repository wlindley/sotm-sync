const DefaultTemplateInstantiator = require('./instantiator/default');
const MultipleTemplateInstantiator = require('./instantiator/multiple');

class InstantiatorFactory {
	constructor(data) {
		this._data = data;
	}

	build() {
		return new MultipleTemplateInstantiator(this._data, new DefaultTemplateInstantiator(this._data));
	}
}
module.exports = InstantiatorFactory;
