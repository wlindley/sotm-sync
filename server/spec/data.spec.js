const data = require('../src/data');

let validType = {
	asymmetricMatch: (actual) => 'villain' === actual || 'environment' === actual || 'hero' === actual
};

let validSubType = {
	asymmetricMatch: (actual) => 'character' === actual || 'target' === actual
}

describe('Data Validation', () => {
	it('is valid', () => {
		for (let i = 0; i < data.length; i++) {
			let template = data[i];
			expect(template.name).toEqual(jasmine.any(String), 'Template ' + i + ' does not have a name.');
			expect(template.displayName).toEqual(jasmine.any(String), 'Template ' + template.name + ' does not have a display name.');
			expect(template.type).toEqual(validType, 'Template ' + template.name + ' does not have a valid type.');
			expect(template.subtype).toEqual(validSubType, 'Template ' + template.name + ' does not have a valid subtype.');
			expect(template.inList).toEqual(jasmine.any(Boolean), 'Template ' + template.name + ' does not have an inList property.');
		}
	});
});