import io from 'socket.io-client';
import {HttpClient} from 'aurelia-fetch-client';
let socket = io.connect('http://localhost:80');

export class Api {
	constructor() {
		this.client = new HttpClient();
		this.client.configure(config => {
			config.withInterceptor({
				request(req) {
					let url = req.url.replace('localhost:9000', 'localhost:80');
					return new Request(url, {
						method: req.method,
						mode: 'no-cors',//req.mode,
						credentials: req.credentials
					});
				},
				response(res) {
					return res;
				}
			});
		});
	}

	init() {
		socket.on('message', (msg) => {
			console.log('message from server: ', msg);
			setTimeout(() => {
				socket.emit('message', 'client connected');
			}, 2000);
		});
	}

	joinGame(gameId) {
		socket.emit('join-game', {gameId: gameId});
	}

	createGame() {
		return new Promise((resolve, reject) => {
			this.client.fetch('create-game', {method: 'POST'}).then(response => {
				if (response.ok) {
					return response.json().then(data => {
						resolve(data.gameId);
					});
				} else {
					reject(new Error(response.status));
				}
			}).catch(error => {
				reject(new Error(error));
			});
		});
	}
}