const DefaultTemplateInstantiator = requrie('./instantiator/default');

class InstantiatorFactory {
	constructor(data) {
		this._data = data;
	}

	build() {
		return new DefaultTemplateInstantiator(this._data);
	}
}
module.exports = InstantiatorFactory;
