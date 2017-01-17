import {Api} from './api';

export class Game {
	static inject() { return [Api]; }

	constructor(api) {
		this.api = api;
	}

	activate(params, routeConfig) {
		this.gameId = params.id;
		this.api.joinGame(this.gameId);
	}
}