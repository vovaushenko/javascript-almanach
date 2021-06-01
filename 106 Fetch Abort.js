// As we know, fetch returns a promise. And JavaScript generally has no concept of “aborting” a promise. So how can we cancel an ongoing fetch? E.g. if the user actions on our site indicate that the fetch isn’t needed any more.

// There’s a special built-in object for such purposes: AbortController. It can be used to abort not only fetch, but other asynchronous tasks as well.

// The usage is very straightforward:

// 1️⃣ Create a controller:

let controller = new AbortController();

// A controller is an extremely simple object.

// ✴️ It has a single method abort(),
// ✴️  And a single property signal that allows to set event listeners on it.

// When abort() is called:

// ✴️ controller.signal emits the "abort" event.
// ✴️ controller.signal.aborted property becomes true.

// Here’s the full example (without fetch yet):

let controller = new AbortController();
let signal = controller.signal;

// The party that performs a cancelable operation
// gets the "signal" object
// and sets the listener to trigger when controller.abort() is called
signal.addEventListener('abort', () => alert('abort!'));

// The other party, that cancels (at any point later):
controller.abort(); // abort!

// The event triggers and signal.aborted becomes true
alert(signal.aborted); // true

// But what’s valuable is that fetch knows how to work with the AbortController object. It’s integrated in it.

// 🟢 Using with fetch 🟢

// To be able to cancel fetch, pass the signal property of an AbortController as a fetch option:
let controller = new AbortController();
fetch(url, {
	signal: controller.signal,
});

// The fetch method knows how to work with AbortController. It will listen to abort events on signal.

// Now, to abort, call controller.abort():

controller.abort();

// We’re done: fetch gets the event from signal and aborts the request.

// When a fetch is aborted, its promise rejects with an error AbortError, so we should handle it, e.g. in try..catch.

// Here’s the full example with fetch aborted after 1 second:

// abort in 1 second
let controller = new AbortController();
setTimeout(() => controller.abort(), 1000);

try {
	let response = await fetch('/article/fetch-abort/demo/hang', {
		signal: controller.signal,
	});
} catch (err) {
	if (err.name == 'AbortError') {
		// handle abort()
		alert('Aborted!');
	} else {
		throw err;
	}
}
