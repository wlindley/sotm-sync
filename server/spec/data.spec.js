const data = require('../src/data');

let validType = {
	asymmetricMatch: (actual) => 'villain' === actual || 'environment' === actual || 'hero' === actual
};

let validSubType = {
	asymmetricMatch: (actual) => 'character' === actual || 'target' === actual
};

let validHp = {
	asymmetricMatch: (actual) => Number.isInteger(actual) || 'H' === actual
};

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
				expect(template.initialHp).toEqual(validHp, 'Template ' + template.name + ' has invalid initialHp');
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

			if (template.spawnTargetOnCreated) {
				expect(template.spawnTargetOnCreated).toEqual(jasmine.any(Array), 'Template ' + template.name + ' has invalid spawn target on created list');
				for (let target of template.spawnTargetOnCreated) {
					expect(target).toEqual(jasmine.any(String), 'Template ' + template.name + ' has a non-string spawn on created target');
					expect(allTemplateNames.includes(target)).toBeTruthy('Template ' + template.name + ' has unknown spawn on created target');
				}
			}

			if (template.spawnCharacterOnCreated) {
				expect(template.spawnCharacterOnCreated).toEqual(jasmine.any(Array), 'Template ' + template.name + ' has invalid spawn character on created list');
				for (let target of template.spawnCharacterOnCreated) {
					expect(target).toEqual(jasmine.any(String), 'Template ' + template.name + ' has a non-string spawn on created character');
					expect(allTemplateNames.includes(target)).toBeTruthy('Template ' + template.name + ' has unknown spawn on created character');
				}
			}

			if (template.spawnTargetOnDestroyed) {
				expect(template.spawnTargetOnDestroyed).toEqual(jasmine.any(Array), 'Template ' + template.name + ' has invalid spawn target on destroyed list');
				for (let target of template.spawnTargetOnDestroyed) {
					expect(target).toEqual(jasmine.any(String), 'Template ' + template.name + ' has a non-string spawn on destroyed target');
					expect(allTemplateNames.includes(target)).toBeTruthy('Template ' + template.name + ' has unknown spawn on destroyed target');
				}
			}

			if (template.spawnCharacterOnDestroyed) {
				expect(template.spawnCharacterOnDestroyed).toEqual(jasmine.any(Array), 'Template ' + template.name + ' has invalid spawn character on destroyed list');
				for (let target of template.spawnCharacterOnDestroyed) {
					expect(target).toEqual(jasmine.any(String), 'Template ' + template.name + ' has a non-string spawn on destroyed character');
					expect(allTemplateNames.includes(target)).toBeTruthy('Template ' + template.name + ' has unknown spawn on destroyed character');
				}
			}
		}
	});
});
