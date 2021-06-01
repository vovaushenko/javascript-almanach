// Data transfer

// WebSocket communication consists of “frames” – data fragments, that can be sent from either side, and can be of several kinds:

// ⭐“text frames” – contain text data that parties send to each other.
// ⭐“binary data frames” – contain binary data that parties send to each other.
// ⭐“ping/pong frames” are used to check the connection, sent from the server, the browser responds to these automatically.
// ⭐there’s also “connection close frame” and a few other service frames.

// In the browser, we directly work only with text or binary frames.

// ❗ WebSocket .send() method can send either text or binary data.

// A call socket.send(body) allows body in string or a binary format, including Blob, ArrayBuffer, etc. No settings required: just send it out in any format.

// A call socket.send(body) allows body in string or a binary format, including Blob, ArrayBuffer, etc. No settings required: just send it out in any format.

// ❗ When we receive the data, text always comes as string. And for binary data, we can choose between Blob and ArrayBuffer formats.
