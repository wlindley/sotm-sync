const Game = require('../src/game');
const Timer = require('./fake-timer').Timer;

describe('Game', () => {
	beforeEach(() => {
		this.gameId = "12345";
		this.data = [
			{
				name: 'legacy',
				type: 'hero',
				subtype: 'character',
				displayName: 'Legacy',
				initialHp: 5,
				childTargets: ['legacyring', 'no-target']
			},
			{
				name: 'legacyring',
				type: 'hero',
				subtype: 'target',
				displayName: 'Legacy Ring',
				initialHp: 2
			},
			{
				name: 'raptorbot',
				type: 'hero',
				subtype: 'target',
				displayName: 'Raptorbot',
				initialHp: 3
			},
			{
				name: 'megalopolis',
				type: 'environment',
				subtype: 'character',
				displayName: 'Megalopolis'
			}
		];
		this.timer = new Timer();
		this.testObj = new Game(this.gameId, this.data, this.timer);
	});

	describe('serializeState', () => {
		it('contains a key named objects', () => {
			let state = this.testObj.serializeState();
			expect(state.objects).toBeDefined();
		});
	});

	describe('createCharacter', () => {
		it('instantiates character from data template', () => {
			this.testObj.createCharacter('legacy');
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(1);
			let legacy = state.objects[0];
			expect(legacy.name).toBe('legacy');
			expect(legacy.type).toBe('hero');
			expect(legacy.subtype).toBe('character');
			expect(legacy.displayName).toBe('Legacy');
			expect(legacy.initialHp).toBe(5);
			expect(legacy.currentHp).toBe(5);
		});

		it('does nothing with invalid template name', () => {
			this.testObj.createCharacter('non-existant');
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(0);
		});

		it('dispatches changed event', () => {
			let wasDispatched = false;
			this.testObj.on('changed', () => wasDispatched = true);
			this.testObj.createCharacter('legacy');
			expect(wasDispatched).toBeTruthy();
		});
	});

	describe('createTarget', () => {
		it('instantiates target as child of entity from data template', () => {
			this.testObj.createCharacter('legacy');
			this.testObj.createTarget(0, 'legacyring');
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(2);
			let legacyRing = state.objects[1];
			expect(legacyRing.name).toBe('legacyring');
			expect(legacyRing.type).toBe('hero');
			expect(legacyRing.subtype).toBe('target');
			expect(legacyRing.displayName).toBe('Legacy Ring');
			expect(legacyRing.initialHp).toBe(2);
			expect(legacyRing.currentHp).toBe(2);
			expect(legacyRing.parentId).toBe(0);
		});

		it('does nothing if entity does not exist', () => {
			this.testObj.createTarget(0, 'legacyring');
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(0);
		});

		it('does nothing if entity does not have template name in child target list', () => {
			this.testObj.createCharacter('legacy');
			this.testObj.createTarget(0, 'raptorbot');
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(1);
		});

		it('does nothing if named template does not exist', () => {
			this.testObj.createCharacter('legacy');
			this.testObj.createTarget(0, 'no-target');
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(1);
		});

		it('dispatches changed event', () => {
			let dispatchCount = 0;
			this.testObj.on('changed', () => dispatchCount++);
			this.testObj.createCharacter('legacy');
			this.testObj.createTarget(0, 'legacyring');
			expect(dispatchCount).toBe(2);
		});
	});

	describe('modifyHp', () => {
		it('applies hp delta to specified entity', () => {
			this.testObj.createCharacter('legacy');
			this.testObj.modifyHp(0, -1);
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(1);
			let legacy = state.objects[0];
			expect(legacy.currentHp).toBe(legacy.initialHp - 1);
		});

		it('does not let hp go below zero', () => {
			this.testObj.createCharacter('legacy');
			this.testObj.modifyHp(0, -10);
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(1);
			let legacy = state.objects[0];
			expect(legacy.currentHp).toBe(0);
		});

		it('does not let hp go above initial', () => {
			this.testObj.createCharacter('legacy');
			this.testObj.modifyHp(0, 10);
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(1);
			let legacy = state.objects[0];
			expect(legacy.currentHp).toBe(legacy.initialHp);
		});

		it('does nothing when entity does not exist', () => {
			this.testObj.modifyHp(0, -1);
		});

		it('does nothing when entity has no hp', () => {
			this.testObj.createCharacter('megalopolis');
			this.testObj.modifyHp(0, -1);
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(1);
			let megalopolis = state.objects[0];
			expect(megalopolis.currentHp).toBeUndefined();
		});

		it('dispatches changed event', () => {
			let dispatchCount = 0;
			this.testObj.on('changed', () => dispatchCount++);
			this.testObj.createCharacter('legacy');
			this.testObj.modifyHp(0, -1);
			expect(dispatchCount).toBe(2);
		});

		it('removes entity after delay when it reaches zero hp', () => {
			this.testObj.createCharacter('legacy');
			this.testObj.modifyHp(0, -5);
			this.timer.dispatchCallbacks();
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(0);
		});
	});

	describe('removeEntity', () => {
		it('removes entity from object list', () => {
			this.testObj.createCharacter('legacy');
			expect(this.testObj.serializeState().objects.length).toBe(1);
			this.testObj.removeEntity(0);
			expect(this.testObj.serializeState().objects.length).toBe(0);
		});

		it('dispatches changed event', () => {
			let dispatchCount = 0;
			this.testObj.on('changed', () => dispatchCount++);
			this.testObj.createCharacter('legacy');
			this.testObj.removeEntity(0);
			expect(dispatchCount).toBe(2);
		});
	});
});
