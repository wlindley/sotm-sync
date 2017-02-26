const data = require('../src/data');

let validType = {
	asymmetricMatch: (actual) => 'villain' === actual || 'environment' === actual || 'hero' === actual
};

let validSubType = {
	asymmetricMatch: (actual) => 'character' === actual || 'target' === actual
}

describe('Data Validation', () => {
	it('no duplicate template names', () => {
		let names = data.map((template) => template.name);
		let usedNames = new Map();
		for (let name of names) {
			expect(usedNames.has(name)).toBeFalsy('Template name ' + name + ' is duplicated');
			usedNames.set(name, 1);
		}
	});

	it('each template is valid', () => {
		let allTemplateNames = data.map((template) => template.name);
		for (let i = 0; i < data.length; i++) {
			let template = data[i];
			expect(template.name).toEqual(jasmine.any(String), 'Template ' + i + ' does not have a name');
			expect(template.displayName).toEqual(jasmine.any(String), 'Template ' + template.name + ' does not have a display name');
			expect(template.type).toEqual(validType, 'Template ' + template.name + ' does not have a valid type');
			expect(template.subtype).toEqual(validSubType, 'Template ' + template.name + ' does not have a valid subtype');
			expect(template.inList).toEqual(jasmine.any(Boolean), 'Template ' + template.name + ' does not have an inList property');

			if (template.initialHp) {
				expect(template.initialHp).toEqual(jasmine.any(Number), 'Template ' + template.name + ' has a non-Number initialHp');
				expect(Number.isInteger(template.initialHp)).toBeTruthy('Template ' + template.name + ' has a non-integer initialHp');
			}

			if (template.childTargets) {
				expect(template.childTargets).toEqual(jasmine.any(Array), 'Template ' + template.name + ' has invalid child targets list');
				for (let target of template.childTargets) {
					expect(target).toEqual(jasmine.any(String), 'Template ' + template.name + ' has a non-string child target');
					expect(allTemplateNames.includes(target)).toBeTruthy('Template ' + template.name + ' has unknown child target ' + target);
				}
			}

			if (template.spawnInstead) {
				expect(template.spawnInstead).toEqual(jasmine.any(Array), 'Template ' + template.name + ' has invalid spawn instead list');
				for (let target of template.spawnInstead) {
					expect(target).toEqual(jasmine.any(String), 'Template ' + template.name + ' has a non-string spawn instead target');
					expect(allTemplateNames.includes(target)).toBeTruthy('Template ' + template.name + ' has unknown spawn instead target ' + target);
				}
			}
		}
	});
});
