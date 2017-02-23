class Timer {
	wait(delayInMilliseconds, callback) {
		setTimeout(callback, delayInMilliseconds);
	}
}

let seconds = (seconds) => 1000 * seconds;
let minutes = (minutes) => seconds(minutes * 60);

module.exports.Timer = Timer;
module.exports.seconds = seconds;
module.exports.minutes = minutes;
