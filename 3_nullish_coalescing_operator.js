// The result of a ?? b is:

// if a is defined, then a,
// if a isn’t defined, then b.

let a = undefined;
let b = undefined;
let c = 'cool';

console.log(a ?? b ?? c); // cool

// We can rewrite result = a ?? b using the operators that we already know, like this:

const result = a !== null && a !== undefined ? a : b;

// 🟢❕🟢The important difference between them is that🟢❕🟢:

// || returns the first truthy value.
// ?? returns the first defined value.

let a1 = 0;
let a2 = 0;
let a3 = 4;
console.log(a1 || a2 || a3); //4
console.log(a1 ?? a2 ?? a3); //0
