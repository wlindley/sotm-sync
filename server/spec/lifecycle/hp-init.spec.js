const HpInitLifecycle = require('../../src/lifecycle/hp-init');

describe('HpInitLifecycle', () => {
	beforeEach(() => {
		this.game = jasmine.createSpyObj('Game', ['createCharacter', 'createTarget', 'modifyHp', 'removeEntity']);
		this.testObj = new HpInitLifecycle();
	});

	describe('created', () => {
		it('creates currentHp on entity equal to initialHp', () => {
			let entity = {
				name: 'parse',
				initialHp: 8
			};
			this.testObj.created(entity, this.game);
			expect(entity.currentHp).toBeDefined();
			expect(entity.currentHp).toBe(entity.initialHp);
		});

		it('does nothing if entity does not have initialHp', () => {
			let entity = {
				name: 'rookcity'
			};
			this.testObj.created(entity, this.game);
			expect(entity.currentHp).toBeUndefined();
		});
	});

	describe('hpChanged', () => {
		it('should exist', () => {
			expect(this.testObj.hpChanged).toBeDefined();
		});
	});

	describe('destroyed', () => {
		it('should exist', () => {
			expect(this.testObj.destroyed).toBeDefined();
		});
	});
});
