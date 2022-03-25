'use strict';

// FP

// FP is mainly about embracing the approach to building software using the mathematical rigorous framework
// we embrace the use and re-use of functions

// Partial Application
// Functional composition and piping
// Currying
// Chaining
// Mixins and Functional Objects and Higher-order functions
// Functors aka Monads aka Functional Objects

const increment = (x) => x + 1;
const decrement = (x) => x - 1;
const double = (x) => x * 2;
const square = (x) => x ** 2;
const sum4 = (a, b, c, d) => a + b + c + d;
const sum = (...nums) => nums.reduce((total, num) => total + num, 0);

// y = x * 2  -> x=1 y = 2;  x=3 => y = 6; x =50 -> y =100 -> can be easily tested
// no sideeffects

const simplePartial = (f, arg1) => (arg2) => f(arg1, arg2);

const sum2 = (x, y) => x + y;

const partial =
	(f, ...initialArgs) =>
	(...laterArgs) =>
		f(...initialArgs, ...laterArgs);

// Compose and pipe

const sophisticatedMathOp = (x) => {
	const res1 = increment(x);
	const res2 = double(res1);
	const res3 = square(res2);
	return res3;
};

const sophisticated2 = (x) => square(double(increment(x)));

const compose =
	(...fns) =>
	(initialArg) =>
		fns.reduce((v, f) => f(v), initialArg);

const sophisticated3 = compose(
	increment,
	double,
	square,
	increment,
	double,
	square,
	double
);

// function has pre-determined arity, arity is just a fancy way to describe the number of input arguments
// eg, sum(x,y,z) -> has arity 3, whereas function x=>x+1 -> has arity 1
// x y z  ->      sum(x,y,z)  sum(x)(y)(z)

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

const curried = curry(sum4);

console.log(curried(1)(2, 3, 4));
