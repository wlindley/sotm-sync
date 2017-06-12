import {HttpClient} from 'aurelia-fetch-client';
import * as messages from './messages';
import {EventAggregator} from 'aurelia-event-aggregator';

export class Api {
	static inject() { return [EventAggregator]; }

	constructor(ea) {
		this.ea = ea;
		this.socket = io();
		this.client = new HttpClient();
		this.gameId = null;
		this.dataPromise = null;
	}

	init() {
		this.socket.on('game-state', (args) => {
			this.ea.publish(new messages.StateSync(args.state));
		});
	}

	retrieveData() {
		if (!this.dataPromise)
			this.dataPromise = this._fetch('data');
		return this.dataPromise;
	}

	joinGame(gameId) {
		this.gameId = gameId;
		this.socket.emit('join-game', {gameId: gameId});
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
		this.socket.emit('modify-hp', {gameId: this.gameId, entityId: entityId, delta: hpDelta});
	}

	createTarget(entityId, subTargetName) {
		this.socket.emit('create-target', {gameId: this.gameId, entityId: entityId, name: subTargetName});
	}

	createCharacter(name) {
		this.socket.emit('create-character', {gameId: this.gameId, name: name});
	}

	removeEntity(entityId) {
		this.socket.emit('remove-entity', {gameId: this.gameId, entityId: entityId});
	}

	updateNotes(entityId, notes) {
		this.socket.emit('update-notes', {gameId: this.gameId, entityId: entityId, notes: notes});
	}

	getStatus() {
		return new Promise((resolve, reject) => {
			this._fetch('status').then(data => {
				resolve(data);
			}).catch(error => {
				reject(error);
			});
		});
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