// When new WebSocket(url) is created, it starts connecting immediately.

// During the connection the browser (using headers) asks the server: “Do you support Websocket?” And if the server replies “yes”, then the talk continues in WebSocket protocol, which is not HTTP at all.

// Here’s an example of browser headers for request made by new WebSocket("wss://javascript.info/chat").

/*
GET /chat
Host: javascript.info
Origin: https://javascript.info
Connection: Upgrade
Upgrade: websocket
Sec-WebSocket-Key: Iv8io/9s+lYFgZWcXczP8Q==
Sec-WebSocket-Version: 13
*/

// ⭐Origin – the origin of the client page, e.g. https://javascript.info. WebSocket objects are cross-origin by nature. There are no special headers or other limitations. Old servers are unable to handle WebSocket anyway, so there are no compatibility issues. But Origin header is important, as it allows the server to decide whether or not to talk WebSocket with this website.
// ⭐Connection: Upgrade – signals that the client would like to change the protocol.
// ⭐Upgrade: websocket – the requested protocol is “websocket”.
// ⭐Sec-WebSocket-Key – a random browser-generated key for security.
// ⭐Sec-WebSocket-Version – WebSocket protocol version, 13 is the current one.

// ❗❗❗WebSocket handshake can’t be emulated❗❗❗
// We can’t use XMLHttpRequest or fetch to make this kind of HTTP-request, because JavaScript is not allowed to set these headers.
