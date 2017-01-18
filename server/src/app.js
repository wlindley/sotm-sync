const Game = require('./game');
const path = require('path');
const express = require('express');
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
});

server.listen(80);
