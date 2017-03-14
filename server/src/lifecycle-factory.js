const CompositeLifecycle = require('./lifecycle/composite');
const HpInitLifecycle = require('./lifecycle/hp-init');
const DeathLifecycle = require('./lifecycle/death');
const SpawnAdditionalLifecycle = require('./lifecycle/spawn-additional');
const SpawnOnDeathLifecycle = require('./lifecycle/spawn-on-death');
const Timer = require('./timer').Timer;

class LifecycleFactory {
	build() {
		return new CompositeLifecycle(
			new HpInitLifecycle(),
			new DeathLifecycle(new Timer()),
			new SpawnAdditionalLifecycle(),
			new SpawnOnDeathLifecycle()
		);
	}
}
module.exports = LifecycleFactory;
