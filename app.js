'use strict';

// FP
const increment = (x) => x + 1;
const double = (x) => x * 2;
const decrement = (x) => x - 1;
const square = (x) => x ** 2;

const sum4 = (a, b, c, d) => a + b + c + d;
const sum = (...nums) => nums.reduce((acc, num) => acc + num, 0);

// AGENDA
// - partial application
// - composition
// - currying
// - higher-order fns and wrappers and mixins
// - monads aka functors aka functional objects
// - chaining

// bind

const partial =
	(fn, arg) =>
	(...laterArgs) =>
		fn(arg, ...laterArgs);

const twoPlus = partial(sum, 2);

// composition

// sophisticated operation -> increments , doubles, triples and then decrements

const sophisticatedImperative = (num) => {
	const r1 = increment(num);
	const r2 = double(r1);
	return square(r2);
};

//  [...fns] -> 2 fns or 50fns -> we've got the starting point

const pipe =
	(...fns) =>
	(initialArg) =>
		fns.reduce((v, f) => f(v), initialArg);

const sophisticatedFP = pipe(
	increment,
	increment,
	increment,
	double,
	double,
	increment
);

// == currying ==
// fn(a,b,c,d) -> fn(a)(b,c)(d) -> fn(...args) -> result

// sum4(1,2,3,4) -> 10
// sum4(1)-> sum4(2,3) -> sum4(4)

const curry =
	(fn) =>
	(...args) => {
		if (fn.length > args.length) {
			const f = fn.bind(null, ...args);
			return curry(f);
		} else {
			// 🔥 enough args
			return fn(...args);
		}
	};

const curriedSum = curry(sum4);

// wrapper aka h-o fns

const once =
	(f) =>
	(...args) => {
		if (!f) return;
		const res = f(...args);
		f = null;
		return res;
	};

const onceSum = once(increment);

const limit = (fn, maxCalls) => {
	let called = 0;
	return (...args) => {
		if (called === maxCalls) return;
		called++;
		return fn(...args);
	};
};

const universal = (fn) => {
	const f = fn;

	const wrapper = (...args) => {
		if (!fn) return 'The function is sleeeeeeeping';
		return fn(...args);
	};

	wrapper.limit = () => {};
	wrapper.on = () => (fn = f);
	wrapper.off = () => (fn = null);

	return wrapper;
};

const inc = universal(increment);

console.log(inc(1));
console.log(inc(1));
inc.off();
console.log(inc(1));
console.log(inc(1));
console.log(inc(1));
console.log(inc(1));
console.log(inc(1));
inc.on();
console.log(inc(1));
console.log(inc(1));
