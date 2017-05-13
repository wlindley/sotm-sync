import {Api} from './api';
import BuildInfo from './build-info';

export class App {
	static inject() { return [Api]; }

	constructor(api) {
		this._api = api;
		this.userCount = 1;
		this.gameCount = 1;
	}

	activate() {
		this._api.init();
		this._updateStatus();
		setInterval(() => this._updateStatus(), 30 * 1000);
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

	_updateStatus() {
		this._api.getStatus().then((status) => {
			this.userCount = status.users;
			this.gameCount = status.games;
		}).catch((err) => {
			console.log('Error retrieving status:', err);
		});
	}
}
