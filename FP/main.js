'use strict';

/* === Functional Programming === */

// if FP we embrace the use of a mathematical approach to solving some problems
// we've got functions
// functions are usually pure, all pure
// y = 1 + 2 * x   -> Immutable connection
// functions must be I M M U T A B L E
// are easily testable

// API's of FP
// 1) partial application of functions ✅
// 2) piping and composing functions ✅
// 3) currying ✅
// 4) wrapping, high-order fns, chaining and using mixin-s
// 5) monads aka functors, aka functional objects

const sum = (...args) => args.reduce((a, b) => a + b, 0);
const sum3 = (a, b, c) => a + b + c; // has pre-determined "arity" arity of sum3 === 3
const increment = (x) => x + 1;
const decrement = (x) => x - 1;
const double = (x) => x * 2;

const partial =
	(fn, ...initialArgs) =>
	(...laterArgs) =>
		fn(...initialArgs, ...laterArgs);

// piping
const sophisticatedOperation = (arg) => {
	// 1 double
	let res = double(arg);
	// 2 decrement
	res = decrement(res);
	// 3 increment
	res = increment(res);
	// 4 double
	return double(res);
};
const sophisticatedFP = (arg) => double(increment(decrement(double(arg))));

const pipe =
	(...fns) =>
	(initialArg) =>
		fns.reduce((v, f) => f(v), initialArg);

const sophisticatedFPoptimal = pipe(double, decrement, increment, double);

// currying
// f(x,y,z)  -> f(x,y,z)  -> f(x)(y,z)  f(x)(y)(z)

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

const curriedSum = curry(sum3);
console.log(curriedSum(1)(2)(3));
