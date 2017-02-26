class DefaultTemplateInstantiator {
	constructor(data) {
		this._data = data;
	}

	instantiate(templateName) {
		let template = this._data.find((template) => templateName === template.name);
		if (!template)
			return [];
		let instance = Object.assign({}, template);
		return [instance];
	}
}
module.exports = DefaultTemplateInstantiator;
