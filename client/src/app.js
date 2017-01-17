import io from 'socket.io-client';
let socket = io.connect('http://localhost:80');

export class App {
	constructor() {
	}

	activate() {
		socket.on('message', (msg) => {
			console.log('message from server: ', msg);
			setTimeout(() => {
				socket.emit('message', 'client connected');
			}, 2000);
		});
	}

	configureRouter(config, router) {
		config.title = "SotM Sync";
		config.map([
			{route: '', moduleId: 'landing', name: 'landing'}
		]);
		this.router = router;
	}

	get isLoading() {
		return this.router.isNavigating;
	}
}
