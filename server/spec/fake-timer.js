class TimerFake {
	constructor() {
		this._waitingCallbacks = [];
	}

	wait(delayInMilliseconds, callback) {
		this._waitingCallbacks.push(callback);
	}

	dispatchCallbacks() {
		for (let waitingCallback of this._waitingCallbacks)
			waitingCallback();
	}
}
module.exports.Timer = TimerFake;
