import {Api} from './api';
import {EventAggregator} from 'aurelia-event-aggregator';
import * as messages from './messages';

export class Game {
	static inject() { return [Api, EventAggregator]; }

	constructor(api, ea) {
		this.api = api;
		this.ea = ea;
		this.ea.subscribe(messages.StateSync, msg => this._onStateSync(msg.state));
	}

	activate(params, routeConfig) {
		this.gameId = params.id;
		this.api.joinGame(this.gameId);
	}

	_onStateSync(state) {
		console.log('state:', state);
	}
}