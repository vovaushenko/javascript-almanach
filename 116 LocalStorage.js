// Web storage objects localStorage and sessionStorage allow to save key/value pairs in the browser.

// What’s interesting about them is that the data survives a page refresh (for sessionStorage) and even a full browser restart (for localStorage). We’ll see that very soon.

// We already have cookies. Why additional objects?

// 1️⃣ Unlike cookies, web storage objects are not sent to server with each request. Because of that, we can store much more. Most browsers allow at least 2 megabytes of data (or more) and have settings to configure that.
// 2️⃣ Also unlike cookies, the server can’t manipulate storage objects via HTTP headers. Everything’s done in JavaScript.
// 3️⃣ The storage is bound to the origin (domain/protocol/port triplet). That is, different protocols or subdomains infer different storage objects, they can’t access data from each other.

// Both storage objects provide same methods and properties:

// ⭐ setItem(key, value) – store key/value pair.
// ⭐ getItem(key) – get the value by key.
// ⭐ removeItem(key) – remove the key with its value.
// ⭐ clear() – delete everything.
// ⭐ key(index) – get the key on a given position.
// ⭐ length – the number of stored items.

/*
🟢localStorage demo=================================================
*/

// The main features of localStorage are:
// 1️⃣Shared between all tabs and windows from the same origin.
// 2️⃣The data does not expire. It remains after the browser restart and even OS reboot.

// We only have to be on the same origin (domain/port/protocol), the url path can be different.

/*
🟢Object-like access================================================
*/
// We can also use a plain object way of getting/setting keys, like this:

// set key
localStorage.test = 2;

// get key
alert(localStorage.test); // 2

// remove key
delete localStorage.test;

/*
🟢Looping over keys================================================
*/

// As we’ve seen, the methods provide “get/set/remove by key” functionality. But how to get all saved values or keys?

// Unfortunately, storage objects are not iterable.

// One way is to loop over them as over an array:
for (let i = 0; i < localStorage.length; i++) {
	let key = localStorage.key(i);
	alert(`${key}: ${localStorage.getItem(key)}`);
}

/*
🟢Strings only================================================
*/
// Please note that both key and value must be strings.

// If were any other type, like a number, or an object, it gets converted to string automatically:

sessionStorage.user = { name: 'John' };
alert(sessionStorage.user); // [object Object]

// We can use JSON to store objects though:
sessionStorage.user = JSON.stringify({ name: 'John' });

// sometime later
let user = JSON.parse(sessionStorage.user);
alert(user.name); // John

// Also it is possible to stringify the whole storage object, e.g. for debugging purposes:
// added formatting options to JSON.stringify to make the object look nicer
alert(JSON.stringify(localStorage, null, 2));
