'use strict';

// FP
// - Partial Application
// - Functional composition
// - Currying
// - Chaining
// - Monads aka Functors aka Functional Objects
// - async composition

const double = (x) => x * 2;
const increment = (x) => x + 1;
const decrement = (x) => x - 1;
const sum3 = (x, y, z) => x + y + z;
const sum = (...nums) => nums.reduce((acc, num) => acc + num, 0);

const partial2 =
	(f1, arg) =>
	(...args) =>
		f1(arg, ...args);

const partial =
	(f1, ...initialArgs) =>
	(...laterArgs) =>
		f1(...initialArgs, ...laterArgs);

const compose =
	(...fns) =>
	(arg) =>
		fns.reduce((v, f) => f(v), arg);

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

const curryShort =
	(fn) =>
	(...args) =>
		fn.length > args.length ? curryShort(fn.bind(null, ...args)) : fn(...args);

const maybe = (val) => (f) => val && f ? maybe(f(val)) : maybe(null);

const once = (fn) => {
	return (...args) => {
		if (!fn) return;
		const res = fn(...args);
		fn = null;
		return res;
	};
};

const limit = (fn, callLimit) => {
	let calledTimes = 0;
	return (...args) => {
		if (calledTimes === callLimit) return;
		calledTimes++;
		return fn(...args);
	};
};

const universalWrapper = (fn) => {
	const f = fn;

	const wrapper = (...args) => {
		if (!fn) return 'Function is sleeping';
		return fn(...args);
	};

	wrapper.limit = (limit) => {};
	wrapper.on = () => (fn = f);
	wrapper.off = () => (fn = null);

	return wrapper;
};

const extendedInc = universalWrapper(increment);
