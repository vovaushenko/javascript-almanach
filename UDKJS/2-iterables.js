// The iterator-consumption protocol is technically defined for consuming iterables; an iterable is a value that can be iterated over.

// The protocol automatically creates an iterator instance from an iterable, and consumes just that iterator instance to its completion. This means a single iterable could be consumed more than once; each time, a new iterator instance would be created and used.

// 🟢 ES6 defined the basic data structure/collection types in JS as iterables. This includes strings, arrays, maps, sets, and others. 🟢
// an array is an iterable
var arr = [10, 20, 30];

for (let val of arr) {
	console.log(`Array value: ${val}`);
}

// Since arrays are iterables, we can shallow-copy an array using iterator consumption via the ... spread operator:
var arrCopy = [...arr];

// We can also iterate the characters in a string one at a time:
var greeting = 'Hello world!';
var chars = [...greeting];

// ⭐ A Map data structure uses objects as keys, associating a value (of any type) with that object. Maps have a different default iteration than seen here, in that the iteration is not just over the map's values but instead its entries. An entry is a tuple (2-element array) including both a key and a value.

// given two DOM elements, `btn1` and `btn2`

var buttonNames = new Map();
buttonNames.set(btn1, 'Button 1');
buttonNames.set(btn2, 'Button 2');

for (let [btn, btnName] of buttonNames) {
	btn.addEventListener('click', function onClick() {
		console.log(`Clicked ${btnName}`);
	});
}

// In the for..of loop over the default map iteration, we use the [btn,btnName] syntax (called "array destructuring") to break down each consumed tuple into the respective key/value pairs (btn1 / "Button 1" and btn2 / "Button 2").

// Or if we want the index and value in an array iteration, we can make an entries iterator with the entries() method:
var arr = [10, 20, 30];

for (let [idx, val] of arr.entries()) {
	console.log(`[${idx}]: ${val}`);
}

//❗  For the most part, all built-in iterables in JS have three iterator forms available: keys-only (keys()), values-only (values()), and entries (entries()).
