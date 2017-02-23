import {Api} from './api';
import {EventAggregator} from 'aurelia-event-aggregator';
import * as messages from './messages';

export class Game {
	static inject() { return [Api, EventAggregator]; }

	constructor(api, ea) {
		this.api = api;
		this.ea = ea;
		this.villains = [];
		this.villainOptions = [];
		this.environments = [];
		this.environmentOptions = [];
		this.heroes = [];
		this.heroOptions = [];
		this.characterDelegates = {
			select: (name) => this._addCharacter(name)
		};
		this.ea.subscribe(messages.StateSync, msg => this._onStateSync(msg.state));
		this.api.retrieveData().then(data => this._setData(data));
	}

	activate(params, routeConfig) {
		this.gameId = params.id;
		this.api.joinGame(this.gameId);
	}

	copyGameIdToClipboard() {
		let gameIdElement = document.querySelector('#gameId');
		gameIdElement.select();
		document.execCommand('copy'); 
	}

	_onStateSync(state) {
		console.log('state:', state);
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

	_setData(data) {
		this._replaceOptions(this.villainOptions, data, 'villain');
		this._replaceOptions(this.environmentOptions, data, 'environment');
		this._replaceOptions(this.heroOptions, data, 'hero');
	}

	_replaceOptions(options, data, type) {
		options.splice(0, options.length);
		for (let option of data.filter(o => type === o.type && 'character' === o.subtype && o.inList))
			options.push({id: option.name, name: option.displayName});
	}

	_addCharacter(name) {
		this.api.createCharacter(name);
	}
}
