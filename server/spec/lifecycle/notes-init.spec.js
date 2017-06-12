const NotesInitLifecycle = require('../../src/lifecycle/notes-init');

describe('NotesInitLifecycle', () => {
	beforeEach(() => {
		this.game = jasmine.createSpyObj('Game', ['createCharacter', 'createTarget', 'modifyHp', 'removeEntity']);
		this.testObj = new NotesInitLifecycle();
	});

	describe('created', () => {
		it('creates notes field on entity and sets it to empty string', () => {
			let entity = {
				name: 'haka'
			};
			this.testObj.created(entity, this.game);
			expect(entity.notes).toBe('');
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
