const CompositeLifecycle = require('./lifecycle/composite');
const HpInitLifecycle = require('./lifecycle/hp-init');
const DeathLifecycle = require('./lifecycle/death');
const Timer = require('./timer').Timer;

class LifecycleFactory {
	build() {
		return new CompositeLifecycle(
			new HpInitLifecycle(),
			new DeathLifecycle(new Timer())
		);
	}
}
module.exports = LifecycleFactory;
