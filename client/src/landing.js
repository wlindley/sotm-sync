import {Api} from './api';
import {Router} from 'aurelia-router';

export class Landing {
	static inject() { return [Api, Router]; }

	constructor(api, router) {
		this.api = api;
		this.router = router;
	}

	join() {
		this.error = null;
		this._joinGame(this.gameId);
	}

	create() {
		this.error = null;
		this.api.createGame().then(gameId => {
			this._joinGame(gameId);
		}).catch(reason => {
			this.error = reason;
		});
	}

	_joinGame(gameId) {
		this.router.navigateToRoute('game', {id: gameId});
	}
}