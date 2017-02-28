class MultipleTemplateInstantiator {
	constructor(data, baseInstantiator) {
		this._data = data;
		this._baseInstantiator = baseInstantiator;
	}

	instantiate(templateName) {
		let template = this._data.find((template) => templateName === template.name);
		if (!template)
			return [];
		if (template.spawnInstead) {
			let instances = [];
			for (let childTemplateName of template.spawnInstead)
				instances = instances.concat(this.instantiate(childTemplateName));
			return instances;
		}
		return this._baseInstantiator.instantiate(templateName);
	}
}
module.exports = MultipleTemplateInstantiator;
