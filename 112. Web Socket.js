// https://javascript.info/websocket

// The WebSocket protocol, described in the specification RFC 6455 provides a way to exchange data between browser and server via a persistent connection. The data can be passed in both directions as “packets”, without breaking the connection and additional HTTP-requests.

// WebSocket is especially great for services that require continuous data exchange, e.g. online games, real-time trading systems and so on.

// A simple example
let socket = new WebSocket('ws://javascript.info');

// There’s also encrypted wss:// protocol. It’s like HTTPS for websockets.

// ❗❗❗ Always prefer wss://
// The wss:// protocol is not only encrypted, but also more reliable.

// That’s because ws:// data is not encrypted, visible for any intermediary. Old proxy servers do not know about WebSocket, they may see “strange” headers and abort the connection.

// On the other hand, wss:// is WebSocket over TLS, (same as HTTPS is HTTP over TLS), the transport security layer encrypts the data at sender and decrypts at the receiver. So data packets are passed encrypted through proxies. They can’t see what’s inside and let them through.

// Once the socket is created, we should listen to events on it. There are totally 4 events:

// ⭐open – connection established,
// ⭐message – data received,
// ⭐error – websocket error,
// ⭐close – connection closed.

let socket = new WebSocket(
	'wss://javascript.info/article/websocket/demo/hello'
);

socket.onopen = function (e) {
	alert('[open] Connection established');
	alert('Sending to server');
	socket.send('My name is John');
};

socket.onmessage = function (event) {
	alert(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function (event) {
	if (event.wasClean) {
		alert(
			`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
		);
	} else {
		// e.g. server process killed or network down
		// event.code is usually 1006 in this case
		alert('[close] Connection died');
	}
};

socket.onerror = function (error) {
	alert(`[error] ${error.message}`);
};
