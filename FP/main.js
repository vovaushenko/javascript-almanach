'use strict';

const increment = (x) => x + 1;
const decrement = (x) => x - 1;
const double = (x) => x * 2;
const triple = (x) => x * 3;
const sum4 = (a, b, c, d) => a + b + c + d;
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);

// partial✅ , pipe ✅, compose ✅, curry✅, wrappers  , chaining, functors, monads

const partial =
	(fn, initialArg) =>
	(...laterArgs) =>
		fn(initialArg, ...laterArgs);

const compose =
	(...fns) =>
	(arg) =>
		fns.reduce((v, f) => f(v), arg);

// We want to be able to compose functions into one solid function.
// For instance, sophisticated operation => increement number , double , triple it , increment

const sophisticated = (num) => {
	let incremented = increment(num);
	let doubled = double(incremented);
	let trippled = triple(doubled);
	return trippled;
};

// At times, we need to expect function to get some number of Arguments
// for being able to be called
// this looks like "f"     f(1)(3)(5)(10)  f(1,3)(5)(10) f(1,3,5,10) f(1)(3,5,10)

const curry =
	(fn) =>
	(...args) => {
		if (fn.length > args.length) {
			const f = fn.bind(null, ...args);
			return curry(f);
		} else {
			return fn(...args);
		}
	};

const curriedSum = curry(sum4);
