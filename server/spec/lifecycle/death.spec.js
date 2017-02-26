const DeathLifecycle = require('../../src/lifecycle/death');
const Timer = require('../fake-timer').Timer;

describe('DeathLifecycle', () => {
	beforeEach(() => {
		this.game = jasmine.createSpyObj('Game', ['createCharacter', 'createTarget', 'modifyHp', 'removeEntity']);
		this.timer = new Timer();
		this.testObj = new DeathLifecycle(this.timer);
	});

	describe('created', () => {
		it('should exist', () => {
			expect(this.testObj.created).toBeDefined();
		});
	});

	describe('hpChanged', () => {
		it('does not remove entity when currentHp is greater than zero', () => {
			let entity = {
				id: 5,
				name: 'haka',
				currentHp: 10
			};
			this.testObj.hpChanged(entity, this.game);
			this.timer.dispatchCallbacks();
			expect(this.game.removeEntity).not.toHaveBeenCalledWith(5);
		});

		it('removes entity after delay when currentHp is zero', () => {
			let entity = {
				id: 5,
				name: 'haka',
				currentHp: 0
			};
			this.testObj.hpChanged(entity, this.game);
			this.timer.dispatchCallbacks();
			expect(this.game.removeEntity).toHaveBeenCalledWith(5);
		});

		it('does not remove entity if currentHp is greater than zero after the delay', () => {
			let entity = {
				id: 5,
				name: 'haka',
				currentHp: 0
			};
			this.testObj.hpChanged(entity, this.game);
			entity.currentHp = 1;
			this.timer.dispatchCallbacks();
			expect(this.game.removeEntity).not.toHaveBeenCalledWith(5);
		});
	});

	describe('destroyed', () => {
		it('should exist', () => {
			expect(this.testObj.destroyed).toBeDefined();
		});
	});
});
