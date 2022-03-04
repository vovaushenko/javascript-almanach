'use strict';

// FP

const increment = (x) => x + 1;
const decrement = (x) => x - 1;
const double = (x) => x * 2;
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
const sum4 = (a, b, c, d) => a + b + c + d;

// Partial Application

const partial =
	(fn, ...initialArgs) =>
	(...laterArgs) =>
		fn(...initialArgs, ...laterArgs);

// sometimes we want to make a chain of operations, e.g.

const sophistcated = (num) => {
	const r1 = increment(num);
	const r2 = double(r1);
	// ...
	const result = decrement(r2);

	return result;
};

const sophistcated2 = (num) => decrement(double(increment(num)));

// Pipe and compose

const pipe =
	(...fns) =>
	(initialArg) =>
		fns.reduce((v, f) => f(v), initialArg);

const sophistcated3 = pipe(increment, double, decrement);

// currying -> taste of curry
// f -> f(1,2,3) => 6
// f(1)(2)(3) => 6
// f(1,2)(3) => 6

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

console.log(curriedSum(1)(2)(3)(4));
