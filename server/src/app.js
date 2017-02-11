const Game = require('./game');
const path = require('path');
const express = require('express');
const data = require('./data');
const uuid = require('uuid/v4');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const games = new Map();

let broadcastGameState = (gameId) => {
	io.to(gameId).emit('game-state', {state: games.get(gameId).serializeState()});
};

app.use(express.static(path.join(__dirname, '../../client')));

app.post('/create-game', (req, res) => {
	res.json({
		gameId: uuid()
	});
});

app.get('/villains', (req, res) => {
	res.json(data.villains);
});

app.get('/environments', (req, res) => {
	res.json(data.environments);
});

app.get('/heroes', (req, res) => {
	res.json(data.heroes);
});

io.on('connection', (socket) => {
	socket.on('join-game', (args) => {
		if (!games.has(args.gameId)) {
			games.set(args.gameId, new Game(args.gameId));
		}
		for (let roomId in socket.rooms) {
			socket.leave(roomId);
		}
		socket.join(args.gameId);
		socket.emit('game-state', {state: games.get(args.gameId).serializeState()});
	});

	socket.on('modify-hp', (args) => {
		games.get(args.gameId).modifyHp(args.entityId, args.delta);
		broadcastGameState(args.gameId);
	});

	socket.on('create-target', (args) => {
		games.get(args.gameId).createTarget(args.entityId, args.name);
		broadcastGameState(args.gameId);
	});

	socket.on('create-villain', (args) => {
		games.get(args.gameId).createVillain(args.name);
		broadcastGameState(args.gameId);
	});

	socket.on('create-environment', (args) => {
		games.get(args.gameId).createEnvironment(args.name);
		broadcastGameState(args.gameId);
	});

	socket.on('create-hero', (args) => {
		games.get(args.gameId).createHero(args.name);
		broadcastGameState(args.gameId);
	});

	socket.on('remove-entity', (args) => {
		games.get(args.gameId).removeEntity(args.entityId);
		broadcastGameState(args.gameId);
	});
});

server.listen(80);
