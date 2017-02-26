const CompositeLifecycle = require('../../src/lifecycle/composite');

describe('CompositeLifecycle', () => {
	beforeEach(() => {
		this.firstLifecycle = jasmine.createSpyObj('Lifecycle', ['created', 'hpChanged', 'destroyed']);
		this.secondLifecycle = jasmine.createSpyObj('Lifecycle', ['created', 'hpChanged', 'destroyed']);
		this.game = jasmine.createSpyObj('Game', ['createCharacter', 'createTarget', 'modifyHp', 'removeEntity']);
		this.testObj = new CompositeLifecycle(this.firstLifecycle, this.secondLifecycle);
	});

	describe('created', () => {
		it('calls created on given lifecycle objects', () => {
			let entity = {name: 'unity'};
			this.testObj.created(entity, this.game);
			expect(this.firstLifecycle.created).toHaveBeenCalledWith(entity, this.game);
			expect(this.secondLifecycle.created).toHaveBeenCalledWith(entity, this.game);
		});
	});

	describe('hpChanged', () => {
		it('calls hpChanged on given lifecycle objects', () => {
			let entity = {name: 'unity'};
			this.testObj.hpChanged(entity, this.game);
			expect(this.firstLifecycle.hpChanged).toHaveBeenCalledWith(entity, this.game);
			expect(this.secondLifecycle.hpChanged).toHaveBeenCalledWith(entity, this.game);
		});
	});

	describe('destroyed', () => {
		it('calls destroyed on given lifecycle objects', () => {
			let entity = {name: 'unity'};
			this.testObj.destroyed(entity, this.game);
			expect(this.firstLifecycle.destroyed).toHaveBeenCalledWith(entity, this.game);
			expect(this.secondLifecycle.destroyed).toHaveBeenCalledWith(entity, this.game);
		});
	});
});
