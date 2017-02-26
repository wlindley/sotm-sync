const DefaultTemplateInstantiator = require('../../src/instantiator/default');

describe('DefaultTemplateInstantiator', () => {
	beforeEach(() => {
		this.data = [
			{
				name: 'tachyon',
				type: 'hero',
				subtype: 'character',
				displayName: 'Tachyon',
				initialHp: 5,
				childTargets: ['goggles']
			}
		];
		this.testObj = new DefaultTemplateInstantiator(this.data);
	});

	describe('instantiate', () => {
		it('returns array containing instance copied from template', () => {
			let instances = this.testObj.instantiate('tachyon');
			expect(instances.length).toBe(1);
			let instance = instances[0];
			expect(instance.name).toBe('tachyon');
			expect(instance.type).toBe('hero');
			expect(instance.subtype).toBe('character');
			expect(instance.displayName).toBe('Tachyon');
			expect(instance.childTargets.length).toBe(1);
			expect(instance.childTargets[0]).toBe('goggles');
		});

		it('returns empty array if template name could not be found', () => {
			let instances = this.testObj.instantiate('nothing');
			expect(instances.length).toBe(0);
		});
	});
});