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

app.get('/data', (req, res) => {
	res.json(data);
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
		let game = games.get(args.gameId);
		socket.emit('game-state', {state: game.serializeState()});
		game.on('changed', () => broadcastGameState(args.gameId));
	});

	socket.on('modify-hp', (args) => {
		games.get(args.gameId).modifyHp(args.entityId, args.delta);
	});

	socket.on('create-target', (args) => {
		games.get(args.gameId).createTarget(args.entityId, args.name);
	});

	socket.on('create-character', (args) => {
		games.get(args.gameId).createCharacter(args.name);
	});

	socket.on('remove-entity', (args) => {
		games.get(args.gameId).removeEntity(args.entityId);
	});
});

server.listen(80);
