const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
	res.send('SotM Sync');
});

io.on('connection', (socket) => {
	socket.emit('message', {hello: 'world'});
	socket.on('message', (msg) => {
		console.log(msg);
	});
});

server.listen(80);
