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

	retrieveVillains() {
		return this._fetch('villains');
	}

	retrieveEnvironments() {
		return this._fetch('environments');
	}

	retrieveHeroes() {
		return this._fetch('heroes');
	}

	joinGame(gameId) {
		this.gameId = gameId;
		socket.emit('join-game', {gameId: gameId});
	}

	createGame() {
		return new Promise((resolve, reject) => {
			this._fetch('create-game', 'POST').then(data => {
				resolve(data.gameId);
			}).catch(error => {
				reject(error);
			});
		});
	}

	modifyHp(entityId, hpDelta) {
		socket.emit('modify-hp', {gameId: this.gameId, entityId: entityId, delta: hpDelta});
	}

	createTarget(entityId, subTargetName) {
		socket.emit('create-target', {gameId: this.gameId, entityId: entityId, name: subTargetName});
	}

	createVillain(name) {
		socket.emit('create-villain', {gameId: this.gameId, name: name});
	}

	createEnvironment(name) {
		socket.emit('create-environment', {gameId: this.gameId, name: name});
	}

	createHero(name) {
		socket.emit('create-hero', {gameId: this.gameId, name: name});
	}

	removeEntity(entityId) {
		socket.emit('remove-entity', {gameId: this.gameId, entityId: entityId});
	}

	_fetch(path, method='GET') {
		return new Promise((resolve, reject) => {
			this.client.fetch(path, {method: method}).then(response => {
				if (response.ok) {
					return response.json().then(data => {
						resolve(data);
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