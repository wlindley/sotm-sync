const MultipleTemplateInstantiator = require('../../src/instantiator/multiple');

describe('MultipleTemplateInstantiator', () => {
	this.writhe = {name: 'writhe'};
	this.drmedico = {name: 'drmedico'};
	this.idealist = {name: 'idealist'};
	this.mainstay = {name: 'mainstay'};
	beforeEach(() => {
		this.data = [
			{
				name: 'sentinels',
				type: 'hero',
				subtype: 'character',
				displayName: 'The Sentinels',
				spawnInstead: ['writhe', 'drmedico', 'idealist', 'mainstay']
			},
			{
				name: 'clonearmy',
				type: 'hero',
				displayName: 'Clone Army',
				spawnInstead: ['sentinels', 'sentinels']
			},
			this.writhe,
			this.drmedico,
			this.idealist,
			this.mainstay,
			{
				name: 'nonexistant',
				type: 'hero',
				subtype: 'character',
				displayName: 'Non-existant spawnInstead templates',
				spawnInstead: ['doesnotexist']
			}
		];
		this.baseInstantiator = jasmine.createSpyObj('TemplateInstantiator', ['instantiate']);
		this.baseInstantiator.instantiate.and.callFake((templateName) => {
			if ('writhe' === templateName)
				return this.writhe;
			if ('drmedico' === templateName)
				return this.drmedico;
			if ('idealist' === templateName)
				return this.idealist;
			if ('mainstay' === templateName)
				return this.mainstay;
			return {};
		});

		this.testObj = new MultipleTemplateInstantiator(this.data, this.baseInstantiator);
	});

	describe('instantiate', () => {
		it('returns array containing instances generated by base instantiator', () => {
			let instances = this.testObj.instantiate('sentinels');
			expect(instances).toContain(this.writhe);
			expect(instances).toContain(this.drmedico);
			expect(instances).toContain(this.idealist);
			expect(instances).toContain(this.mainstay);
		});

		it('handles nested spawnInstead templates', () => {
			let instances = this.testObj.instantiate('clonearmy');
			expect(instances.length).toBe(8);
		});

		it('returns empty array when named template is not found', () => {
			let instances = this.testObj.instantiate('nonexistant');
			expect(instances.length).toBe(0);
		});
	});
});
