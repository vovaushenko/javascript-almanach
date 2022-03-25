function getMessages(req, res) {
	res.send(`<h1>Hello from the port ${PORT}</h1>`);
}

function postMessage(req, res) {
	console.log('posting a new message');
}

module.exports = {
	getMessages,
	postMessage,
};
