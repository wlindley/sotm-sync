const SpawnAdditionalLifecycle = require('../../src/lifecycle/spawn-additional');

describe('SpawnAdditionalLifecycle', () => {
	beforeEach(() => {
		this.game = jasmine.createSpyObj('Game', ['createCharacter', 'createTarget', 'modifyHp', 'removeEntity']);
		this.testObj = new SpawnAdditionalLifecycle();
	});

	describe('created', () => {
		it('spawns additional character for spawnCharacterOnCreated property', () => {
			let entity = {
				id: 4,
				name: 'chairman',
				currentHp: 10,
				spawnCharacterOnCreated: ['operative']
			};
			this.testObj.created(entity, this.game);
			expect(this.game.createCharacter).toHaveBeenCalledWith('operative');
		});

		it('spawns additional target for spawnTargetOnCreated property', () => {
			let entity = {
				id: 5,
				name: 'kismet',
				currentHp: 10,
				spawnTargetOnCreated: ['talisman']
			};
			this.testObj.created(entity, this.game);
			expect(this.game.createTarget).toHaveBeenCalledWith(5, 'talisman');
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
