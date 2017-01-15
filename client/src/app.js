import io from 'socket.io-client';
let socket = io.connect('http://localhost:80');

export class App {
	constructor() {
		this.message = 'Connecting...';
	}

	activate() {
		socket.on('message', (msg) => {
			this.message = msg;
			setTimeout(() => {
				socket.emit('message', 'client connected');
			}, 2000);
		});
	}

	get isLoading() {
		return false;
	}
}
