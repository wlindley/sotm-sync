import {Api} from './api';

export class App {
	static inject() { return [Api]; }

	constructor(api) {
		this.api = api;
	}

	activate() {
		this.api.init();
	}

	configureRouter(config, router) {
		config.title = "SotM Sync";
		config.map([
			{route: '', moduleId: 'landing', name: 'landing'},
			{route: 'game/:id', moduleId: 'game', name: 'game'}
		]);
		this.router = router;
	}

	get isLoading() {
		return this.router.isNavigating;
	}
}
