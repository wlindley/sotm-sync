const Game = require('../src/game');
const Timer = require('./fake-timer').Timer;

describe('Game', () => {
	beforeEach(() => {
		this.gameId = "12345";
		this.timer = new Timer();
		this.templateInstantiator = jasmine.createSpyObj('TemplateInstantiator', ['instantiate']);
		//this.entityLifecycle = jasmine.createSpyObj('EntityLifecycle', ['created', 'destroyed']);
		this.testObj = new Game(this.gameId, this.timer, this.templateInstantiator/*, this.entityLifecycle*/);
	});

	describe('serializeState', () => {
		it('contains a key named objects', () => {
			let state = this.testObj.serializeState();
			expect(state.objects).toBeDefined();
		});
	});

	describe('createCharacter', () => {
		it('instantiates character using instantiator', () => {
			let instance = {name: 'foo'};
			this.templateInstantiator.instantiate.and.callFake((templateName) => {
				expect(templateName).toBe('legacy');
				return [instance];
			});
			this.testObj.createCharacter('legacy');
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(1);
			expect(state.objects[0]).toBe(instance);
			/*
			let legacy = state.objects[0];
			expect(legacy.name).toBe('legacy');
			expect(legacy.type).toBe('hero');
			expect(legacy.subtype).toBe('character');
			expect(legacy.displayName).toBe('Legacy');
			expect(legacy.initialHp).toBe(5);
			expect(legacy.currentHp).toBe(5);
			*/
		});

		it('adds entity id to created entities', () => {
			this.templateInstantiator.instantiate.and.returnValue([{name: 'foo'}, {name: 'bar'}]);
			this.testObj.createCharacter('tachyon');
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(2);
			expect(state.objects[0].id).toBe(0);
			expect(state.objects[1].id).toBe(1);
		});

		it('does nothing when instantiator returns no entities', () => {
			this.templateInstantiator.instantiate.and.callFake((templateName) => {
				expect(templateName).toBe('non-existant');
				return [];
			});
			this.testObj.createCharacter('non-existant');
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(0);
		});

		it('dispatches changed event', () => {
			this.templateInstantiator.instantiate.and.returnValue([{name: 'foo'}]);
			let wasDispatched = false;
			this.testObj.on('changed', () => wasDispatched = true);
			this.testObj.createCharacter('legacy');
			expect(wasDispatched).toBeTruthy();
		});
	});

	describe('createTarget', () => {
		beforeEach(() => {
			this.templateInstantiator.instantiate.and.callFake((templateName) => {
				if ('legacy' === templateName)
					return [{
						name: 'legacy',
						childTargets: ['legacyring']
					}];
				if ('legacyring' === templateName)
					return [{
						name: 'legacyring'
					}];
				return [];
			});
		});

		it('instantiates target as child of entity using instantiator', () => {
			this.testObj.createCharacter('legacy');
			this.testObj.createTarget(0, 'legacyring');
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(2);
			expect(state.objects[1].name).toBe('legacyring');
			/*
			let legacyRing = state.objects[1];
			expect(legacyRing.name).toBe('legacyring');
			expect(legacyRing.type).toBe('hero');
			expect(legacyRing.subtype).toBe('target');
			expect(legacyRing.displayName).toBe('Legacy Ring');
			expect(legacyRing.initialHp).toBe(2);
			expect(legacyRing.currentHp).toBe(2);
			expect(legacyRing.parentId).toBe(0);
			*/
		});

		it('adds entity id to created entities', () => {
			this.testObj.createCharacter('legacy');
			this.testObj.createTarget(0, 'legacyring');
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(2);
			expect(state.objects[1].id).toBe(1);
		});

		it('adds parent id to created entities', () => {
			this.testObj.createCharacter('legacy');
			this.testObj.createTarget(0, 'legacyring');
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(2);
			expect(state.objects[1].parentId).toBe(0);
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

		it('does nothing when instantiator returns no entities', () => {
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
		beforeEach(() => {
			this.templateInstantiator.instantiate.and.callFake((templateName) => {
				if ('legacy' === templateName)
					return [{
						name: 'legacy',
						initialHp: 5,
						currentHp: 5
					}];
				if ('megalopolis' === templateName)
					return [{
						name: 'megalopolis'
					}];
				return [];
			});
		});

		it('applies hp delta to specified entity', () => {
			this.testObj.createCharacter('legacy');
			this.testObj.modifyHp(0, -1);
			let state = this.testObj.serializeState();
			expect(state.objects.length).toBe(1);
			let legacy = state.objects[0];
			expect(legacy.currentHp).toBe(4);
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
			expect(legacy.currentHp).toBe(5);
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
		beforeEach(() => {
			this.templateInstantiator.instantiate.and.returnValue([{name: 'legacy'}]);
		});

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
