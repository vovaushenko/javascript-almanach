const express = require('express');
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const PORT = 4000;

const server = express();

server.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.url} - took ${delta} ms`);
});

server.use(express.json());

server.get('/');

server.use('/friends', friendsRouter);
server.use('/messages', messagesRouter);

server.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
