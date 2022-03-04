'use strict';

/**
 *@FUNCTIONAL Programming in JS
 */
const increment = (x) => x + 1;
const decrement = (x) => x - 1;
const double = (x) => x * 2;
const sum3 = (a, b, c) => a + b + c;
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);

// Agenda
// - bare basics of FP
// 1) partial application ✅
// 2) piping (pipe and compose) ✅
// 3) currying ✅
// 4) monads aka functors aka functional objects ✅
// 5) chaining

const partial1 =
	(f, arg1) =>
	(...args) =>
		f(arg1, ...args);

const twoPlus = partial1(sum, 2);

const partial =
	(f, ...initialArgs) =>
	(...laterArgs) =>
		f(...initialArgs, ...laterArgs);

const twoPlusThree = partial(sum, 2, 3);

// fetch -> process -> call db -> fetch -> return response
// increment -> double -> decrement -> double

const sophisticatedOp = (num) => {
	const r1 = increment(num);
	const r2 = double(r1);
	const r3 = decrement(r2);
	return double(r3);
};

const betterOp = (num) => double(decrement(double(increment(num))));

// P I P E

const pipe =
	(...fns) =>
	(arg) =>
		fns.reduce((v, f) => f(v), arg);

const optimalOP = pipe(increment, double, decrement, double);

// C u r r y i n g
// sum3(1,2,3) -> 6  sum3(1)(2,3) -> 6 sum3(1)(2)(3)

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

console.log(curriedSum(1)(3)(2));

const maybe = (x) => (fn) => fn && x ? maybe(fn(x)) : maybe(null);

maybe(5)(increment)(double)(increment)(console.log);
