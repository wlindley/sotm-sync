const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, '../../client')));

app.post('/create-game', (req, res) => {
	res.json({
		gameId: '1234'
	});
});

io.on('connection', (socket) => {
	socket.emit('message', "hello, socket.io!");
	socket.on('message', (msg) => {
		console.log(msg);
	});
});

server.listen(80);
