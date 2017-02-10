import {Api} from './api';
import {EventAggregator} from 'aurelia-event-aggregator';
import * as messages from './messages';

export class Game {
	static inject() { return [Api, EventAggregator]; }

	constructor(api, ea) {
		this.api = api;
		this.ea = ea;
		this.villains = [];
		this.environments = [];
		this.heroes = [];
		this.villainOptions = [];
		this.environmentOptions = [];
		this.heroOptions = [];
		this.villainDelegates = {
			select: (name) => this._addVillain(name)
		};
		this.environmentDelegates = {
			select: (name) => this._addEnvironment(name)
		};
		this.heroDelegates = {
			select: (name) => this._addHero(name)
		};
		this.ea.subscribe(messages.StateSync, msg => this._onStateSync(msg.state));
		this.api.retrieveVillains().then(villains => this._setVillainOptions(villains));
		this.api.retrieveEnvironments().then(environments => this._setEnvironmentOptions(environments));
		this.api.retrieveHeroes().then(heroes => this._setHeroOptions(heroes));
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

	_setVillainOptions(villains) {
		this.villainOptions.splice(0, this.villainOptions.length);
		for (let villain of villains)
			this.villainOptions.push(villain.name);
	}

	_setEnvironmentOptions(environments) {
		this.environmentOptions.splice(0, this.environmentOptions.length);
		for (let environment of environments)
			this.environmentOptions.push(environment.name);
	}

	_setHeroOptions(heroes) {
		this.heroOptions.splice(0, this.heroOptions.length);
		for (let hero of heroes)
			this.heroOptions.push(hero.name);
	}

	_addVillain(name) {
		this.api.createVillain(name);
	}

	_addEnvironment(name) {
		this.api.createEnvironment(name);
	}

	_addHero(name) {
		this.api.createHero(name);
	}
}