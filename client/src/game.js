import {Api} from './api';
import {EventAggregator} from 'aurelia-event-aggregator';
import * as messages from './messages';

export class Game {
	static inject() { return [Api, EventAggregator]; }

	constructor(api, ea) {
		this.api = api;
		this.ea = ea;
		this.isSetup = true;
		this.villains = [];
		this.environments = [];
		this.heroes = [];
		this.ea.subscribe(messages.StateSync, msg => this._onStateSync(msg.state));
	}

	activate(params, routeConfig) {
		this.gameId = params.id;
		this.api.joinGame(this.gameId);
	}

	_onStateSync(state) {
		console.log('state:', state);
		this.isSetup = state.isSetup;
		this.villains.splice(0, this.villains.length);
		this.environments.splice(0, this.environments.length);
		this.heroes.splice(0, this.heroes.length);
		for (let object of state.objects) {
			if ('villain' === object.type)
				this.villains.push(object);
			else if ('environment' === object.type)
				this.environments.push(object);
			else if ('hero' === object.type)
				this.heroes.push(object);
		}
	}
}