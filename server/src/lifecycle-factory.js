const CompositeLifecycle = require('./lifecycle/composite');
const HpInitLifecycle = require('./lifecycle/hp-init');
const NotesInitLifecycle = require('./lifecycle/notes-init');
const DeathLifecycle = require('./lifecycle/death');
const SpawnAdditionalLifecycle = require('./lifecycle/spawn-additional');
const SpawnOnDeathLifecycle = require('./lifecycle/spawn-on-death');
const DestroyChildrenLifecycle = require('./lifecycle/destroy-children');
const Timer = require('./timer').Timer;
const Spawner = require('./spawner');

class LifecycleFactory {
	build() {
		return new CompositeLifecycle(
			new HpInitLifecycle(),
			new NotesInitLifecycle(),
			new DeathLifecycle(new Timer()),
			new SpawnAdditionalLifecycle(new Spawner()),
			new SpawnOnDeathLifecycle(new Spawner()),
			new DestroyChildrenLifecycle()
		);
	}
}
module.exports = LifecycleFactory;
