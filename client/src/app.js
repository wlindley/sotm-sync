import {Api} from './api';
import BuildInfo from './build-info';

export class App {
	static inject() { return [Api]; }

	constructor(api) {
		this._api = api;
	}

	activate() {
		this._api.init();
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

	get version() {
		return BuildInfo.version;
	}
}
