const Game = require('./game');
const path = require('path');
const express = require('express');
const data = require('./data');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const games = new Map();

app.use(express.static(path.join(__dirname, '../../client')));

app.post('/create-game', (req, res) => {
	res.json({
		gameId: '1234'
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
		io.to(args.gameId).emit('game-state', {state: games.get(args.gameId).serializeState()});
	});
});

server.listen(80);
