# sotm-sync
Game state synchronizer for SotM. Uses a socket.io server to share state changes between clients connected to each game. Clients are browser-based and built with the Aurelia SPA framework.

##Geting Started
1. Install a recent version of NodeJS (it needs to come with npm version 3 or later), the [current LTS release](https://nodejs.org/en/) is fine
1. Install a good text editor of some sort. Aurelia defaults to [VS Code](https://code.visualstudio.com/)
1. Run `npm install -g aurelia-cli`
1. cd into `server` and `client` each and run `npm install`

##Running the Application
1. Open a bash prompt, cd into `server`, and execute `npm start`
1. Open another bash prompt, cd into `client`, and execute `au run --watch`

##Running Tests
- Client
	1. cd into `client`
	1. Run `npm run all`
- Server
	1. cd into `server`
	1. Run `au test` (you can add `--watch` if you want tests to run whenever a file changes)
