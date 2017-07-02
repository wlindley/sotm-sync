const DestroyChildrenLifecycle = require('../../src/lifecycle/destroy-children');

describe('DestroyChildrenLifecycle', () => {
	beforeEach(() => {
		this.game = jasmine.createSpyObj('Game', ['createCharacter', 'createTarget', 'modifyHp', 'removeEntity', 'serializeState']);
		this.testObj = new DestroyChildrenLifecycle();
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
		it('destroys child entities', () => {
			let state = {objects: [
				{
					id: 2,
					name: 'unity',
				},
				{
					id: 5,
					name: 'raptorbot',
					parentId: 2
				},
				{
					id: 7,
					name: 'platformbot',
					parentId: 2
				}
			]};
			let entity = state.objects[0];
			this.game.serializeState.and.returnValue(state);
			this.testObj.destroyed(entity, this.game);
			expect(this.game.removeEntity).toHaveBeenCalledWith(5);
			expect(this.game.removeEntity).toHaveBeenCalledWith(7);
		});
	});

	it('does not destroy child entities if parent has doNotDestroyChildrenOnDeath', () => {
		let state = {objects: [
				{
					id: 2,
					name: 'unity',
					doNotDestroyChildrenOnDeath: true
				},
				{
					id: 5,
					name: 'raptorbot',
					parentId: 2
				},
				{
					id: 7,
					name: 'platformbot',
					parentId: 2
				}
			]};
			let entity = state.objects[0];
			this.game.serializeState.and.returnValue(state);
			this.testObj.destroyed(entity, this.game);
			expect(this.game.removeEntity).not.toHaveBeenCalledWith(5);
			expect(this.game.removeEntity).not.toHaveBeenCalledWith(7);
	});
});
