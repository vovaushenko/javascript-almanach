// https://javascript.info/long-polling
// Long polling is the simplest way of having persistent connection with server, that doesn’t use any specific protocol like WebSocket or Server Side Events.

// 🟢 Regular Polling 🟢
// The simplest way to get new information from the server is periodic polling. That is, regular requests to the server: “Hello, I’m here, do you have any information for me?”. For example, once every 10 seconds.

// In response, the server first takes a notice to itself that the client is online, and second – sends a packet of messages it got till that moment.

// That works, but there are downsides:

// 1️⃣ Messages are passed with a delay up to 10 seconds (between requests).
// 2️⃣ Even if there are no messages, the server is bombed with requests every 10 seconds, even if the user switched somewhere else or is asleep. That’s quite a load to handle, speaking performance-wise.

// 🟢 Long polling 🟢
// So-called “long polling” is a much better way to poll the server.

// It’s also very easy to implement, and delivers messages without delays.

// The flow:

// 1️⃣ A request is sent to the server.
// 2️⃣ The server doesn’t close the connection until it has a message to send.
// 3️⃣ When a message appears – the server responds to the request with it.
// 4️⃣ The browser makes a new request immediately.

// The situation when the browser sent a request and has a pending connection with the server, is standard for this method. Only when a message is delivered, the connection is reestablished.
