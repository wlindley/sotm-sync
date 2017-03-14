const SpawnOnDeathLifecycle = require('../../src/lifecycle/spawn-on-death');
const Spawner = require('../../src/spawner');

describe('SpawnOnDeathLifecycle', () => {
	beforeEach(() => {
		this.game = jasmine.createSpyObj('Game', ['createCharacter', 'createTarget', 'modifyHp', 'removeEntity']);
		this.testObj = new SpawnOnDeathLifecycle(new Spawner());
	});

	describe('created', () => {
		it('should exist', () => {
			expect(this.testObj.created).toBeDefined();
		});
	});

	describe('hpChanged', () => {
		it('should exist', () => {
			expect(this.testObj.hpChanged).toBeDefined();
		});
	});

	describe('destroyed', () => {
		it('spawns additional character for spawnCharacterOnDestroyed property', () => {
			let entity = {
				id: 4,
				name: 'chairman',
				currentHp: 0,
				spawnCharacterOnDestroyed: ['operative']
			};
			this.testObj.destroyed(entity, this.game);
			expect(this.game.createCharacter).toHaveBeenCalledWith('operative');
		});

		it('spawns additional target for spawnTargetOnDestroyed property', () => {
			let entity = {
				id: 5,
				name: 'kismet',
				currentHp: 0,
				spawnTargetOnDestroyed: ['talisman']
			};
			this.testObj.destroyed(entity, this.game);
			expect(this.game.createTarget).toHaveBeenCalledWith(5, 'talisman');
		});
	});
});
