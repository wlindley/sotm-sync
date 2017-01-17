import io from 'socket.io-client';
import {HttpClient} from 'aurelia-fetch-client';
let socket = io.connect('http://localhost:80');

export class Api {
	constructor() {
		this.client = new HttpClient(config => {
			config.withBaseUrl('http://localhost:80/');
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
		
	}

	createGame() {
		return new Promise((resolve, reject) => {
			this.client.fetch('create-game').then(response => {
				if (response.ok) {
					response.json().then(data => {
						resolve(data.gameId);
					});
				} else {
					return reject(new Error(response.status));
				}
			}).catch(error => {
				console.log(error);
				reject(new Error(error));
			});
		});
	}
}