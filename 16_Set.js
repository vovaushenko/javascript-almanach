// Set
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

// Its main methods are:

// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

let set = new Set();

let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };
let alex = john;
let br = { name: 'Mary' };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
set.add(alex);
set.add(br);

console.log(set);

set.forEach((item) => console.log(item.name));
