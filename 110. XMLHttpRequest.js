// https://javascript.info/xmlhttprequest

// XMLHttpRequest is a built-in browser object that allows to make HTTP requests in JavaScript.

// espite of having the word “XML” in its name, it can operate on any data, not only in XML format. We can upload/download files, track progress and much more.

// Right now, there’s another, more modern method fetch, that somewhat deprecates XMLHttpRequest.

// ❗❗❗In modern web-development XMLHttpRequest is used for three reasons:

// 1️⃣ Historical reasons: we need to support existing scripts with XMLHttpRequest.
// 2️⃣ We need to support old browsers, and don’t want polyfills (e.g. to keep scripts tiny).
// 3️⃣ We need something that fetch can’t do yet, e.g. to track upload progress.

// The basics

// XMLHttpRequest has two modes of operation: synchronous and asynchronous.

// Let’s see the asynchronous first, as it’s used in the majority of cases.

// 🟢 To do the request, we need 3 steps:

// 1️⃣ Create XMLHttpRequest:
let xhr = new XMLHttpRequest();
// The constructor has no arguments.

// 2️⃣ Initialize it, usually right after new XMLHttpRequest:
xhr.open(method, URL, [async, user, password]);
// This method specifies the main parameters of the request:
// method – HTTP-method. Usually "GET" or "POST".
// URL – the URL to request, a string, can be URL object.
// async – if explicitly set to false, then the request is synchronous, we’ll cover that a bit later.
// user, password – login and password for basic HTTP auth (if required).

// 3️⃣ Send it out.
xhr.send([body]);
// This method opens the connection and sends the request to server. The optional body parameter contains the request body.

// 4️⃣ Listen to xhr events for response.
// These three events are the most widely used:

// load – when the request is complete (even if HTTP status is like 400 or 500), and the response is fully downloaded.
// error – when the request couldn’t be made, e.g. network down or invalid URL.
// progress – triggers periodically while the response is being downloaded, reports how much has been downloaded.
