// π’π’π’π’   Map   π’π’π’π’
// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// Methods and properties are:

// new Map() β creates the map.
// map.set(key, value) β stores the value by the key.
// map.get(key) β returns the value by the key, undefined if key doesnβt exist in map.
// map.has(key) β returns true if the key exists, false otherwise.
// map.delete(key) β removes the value by the key.
// map.clear() β removes everything from the map.
// map.size β returns the current element count.

let map = new Map();

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');
console.log(map);
console.log(map.get(true));

// Map can also use objects as keys.

let john = { name: 'John' };
let visitCounterMap = new Map();
visitCounterMap.set(john, 15);
console.log(visitCounterMap.get(john));

// Chaining
// Every map.set call returns the map itself, so we can βchainβ the calls:
map.set('1', 'str1').set(1, 'num1').set(true, 'bool1');

// Iteration over Map
map.keys();
map.values();
map.entries();

console.log(map.entries());

// Object.entries: Map from Object

let obj = { name: 'Alex', age: 24 };

let newMap = new Map(Object.entries(obj));

console.log(newMap);
