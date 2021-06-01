// Here’s the full list of all possible fetch options with their default values (alternatives in comments):
// https://javascript.info/fetch-api

let promise = fetch(url, {
	method: 'GET', // POST, PUT, DELETE, etc.
	headers: {
		// the content type header value is usually auto-set
		// depending on the request body
		'Content-Type': 'text/plain;charset=UTF-8',
	},
	body: undefined, // string, FormData, Blob, BufferSource, or URLSearchParams
	referrer: 'about:client', // or "" to send no Referer header,
	// or an url from the current origin
	referrerPolicy: 'no-referrer-when-downgrade', // no-referrer, origin, same-origin...
	mode: 'cors', // same-origin, no-cors
	credentials: 'same-origin', // omit, include
	cache: 'default', // no-store, reload, no-cache, force-cache, or only-if-cached
	redirect: 'follow', // manual, error
	integrity: '', // a hash, like "sha256-abcdef1234567890"
	keepalive: false, // true
	signal: undefined, // AbortController to abort request
	window: window, // null
});

// 1️⃣ referrer, referrerPolicy
// These options govern how fetch sets the HTTP Referer header.
// Usually that header is set automatically and contains the url of the page that made the request. In most scenarios, it’s not important at all, sometimes, for security purposes, it makes sense to remove or shorten it.

// To send no referer, set an empty string:
fetch('/page', {
	referrer: '', // no Referer header
});
// To set another url within the current origin:
fetch('/page', {
	// assuming we're on https://javascript.info
	// we can set any Referer header, but only within the current origin
	referrer: 'https://javascript.info/anotherpage',
});

// 2️⃣ The referrerPolicy option sets general rules for Referer.

// Requests are split into 3 types:

// 🥬 Request to the same origin.
// 🥬 Request to another origin.
// 🥬 Request from HTTPS to HTTP (from safe to unsafe protocol).

// Unlike the referrer option that allows to set the exact Referer value, referrerPolicy tells the browser general rules for each request type.

// 3️⃣ mode

// The mode option is a safe-guard that prevents occasional cross-origin requests:
// 🥬 "cors" – the default, cross-origin requests are allowed, as described in Fetch: Cross-Origin Requests,
// 🥬 "same-origin" – cross-origin requests are forbidden,
// 🥬 "no-cors" – only safe cross-origin requests are allowed.

// 4️⃣ credentials
// The credentials option specifies whether fetch should send cookies and HTTP-Authorization headers with the request.

// 5️⃣ cache
// By default, fetch requests make use of standard HTTP-caching. That is, it respects the Expires and Cache-Control headers, sends If-Modified-Since and so on. Just like regular HTTP-requests do.

// 6️⃣ redirect
// Normally, fetch transparently follows HTTP-redirects, like 301, 302 etc.

// 7️⃣ integrity
// The integrity option allows to check if the response matches the known-ahead checksum.
// For example, we’re downloading a file, and we know that it’s SHA-256 checksum is “abcdef” (a real checksum is longer, of course).

// We can put it in the integrity option, like this:
fetch('http://site.com/file', {
	integrity: 'sha256-abcdef',
});

// 8️⃣ keepalive
// The keepalive option indicates that the request may “outlive” the webpage that initiated it.

// For example, we gather statistics on how the current visitor uses our page (mouse clicks, page fragments he views), to analyze and improve the user experience.

// When the visitor leaves our page – we’d like to save the data to our server.

// We can use the window.onunload event for that:

window.onunload = function () {
	fetch('/analytics', {
		method: 'POST',
		body: 'statistics',
		keepalive: true,
	});
};

// Normally, when a document is unloaded, all associated network requests are aborted. But the keepalive option tells the browser to perform the request in the background, even after it leaves the page. So this option is essential for our request to succeed.
