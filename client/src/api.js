import io from 'socket.io-client';
import {HttpClient} from 'aurelia-fetch-client';
import * as messages from './messages';
import {EventAggregator} from 'aurelia-event-aggregator';
let socket = io.connect('http://localhost:80');

export class Api {
	static inject() { return [EventAggregator]; }

	constructor(ea) {
		this.ea = ea;
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
		this.gameId = null;
	}

	init() {
		socket.on('game-state', (args) => {
			this.ea.publish(new messages.StateSync(args.state));
		});
	}

	joinGame(gameId) {
		this.gameId = gameId;
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

	modifyHp(entityId, hpDelta) {
		socket.emit('modify-hp', {entityId: entityId, delta: hpDelta, gameId: this.gameId});
	}
}