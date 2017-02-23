class TimerFake {
	constructor() {
		this._waitingCallbacks = [];
	}

	wait(delayInMilliseconds, callback) {
		this._waitingCallbacks.push(callback);
	}

	dispatchCallbacks() {
		for (let callback of this._waitingCallbacks)
			callback();
	}
}
module.exports.Timer = TimerFake;
