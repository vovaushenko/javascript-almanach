/*
We can design a simple helper that wraps a function call to ensure only one argument
will pass through. Since this is effectively enforcing that a function is treated as unary,
let’s name it as such:
*/

// =========================================================================
//*  === UNARY ===

const unary = (fn) => (arg) => fn(arg);

const sin = unary(Math.sin);

console.log(sin(30));
console.log(sin(20));

//! A commonly cited example for using unary(..) is with the map(..) utility

// That’s usually not a big deal, unless you’re trying to use something as a mapper
// function that will behave incorrectly if it’s passed too many arguments. Consider:

console.log(['1', '2', '3'].map(parseInt)); //! [1,NaN,NaN]

console.log(['1', '2', '3'].map(unary(parseInt)));

// =========================================================================
//* === One on One ===
/*
common base utility in the
FP toolbelt is a function that takes one argument and does nothing but return the
value untouched:
*/
const identity = (v) => v;

[0, 1, 2, 3, 4].filter(identity);

// Another example of using identity(..) is as a default function in place of a
// transformation:

const output = (msg, formatFn = identity) => {
	return formatFn(msg);
};
const upper = (txt) => txt.toUpperCase();

console.log(output('foo', upper));
console.log(output('FoO'));

// =========================================================================

//* === Adapting Arguments to Parameters   ===

// There are a variety of patterns and tricks we can use to adapt a function’s signature
// to match the kinds of arguments we want to provide to it.
