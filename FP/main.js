'use strict';

const increment = (x) => x + 1;
const decrement = (x) => x - 1;
const double = (x) => x * 2;
const tripple = (x) => x * 3;
const square = (x) => x ** 2;
const sum = (...nums) => nums.reduce((acc, n) => acc + n, 0);
const sum5 = (a, b, c, d, e) => a + b + c + d + e;

// partial ✅ , pipe ✅  , compose ✅ , curry ✅ , wrappers ✅ , chaining, functors, monads

const partial =
	(fn, ...initialArgs) =>
	(...laterArgs) =>
		fn(...initialArgs, ...laterArgs);

const pipe =
	(...fns) =>
	(inialArg) =>
		fns.reduce((v, f) => f(v), inialArg);

const curry =
	(fn) =>
	(...args) =>
		fn.length > args.length ? curry(fn.bind(null, ...args)) : fn(...args);

const extend = (fn) => {
	const f = fn;
	const cache = new Map();

	const wrapper = (...args) => {
		if (!fn) return;
		const key = args.join('*');
		if (cache.has(key)) {
			console.log('from cache');
			return cache.get(key);
		}

		const res = fn(...args);
		cache.set(key, res);

		return res;
	};

	wrapper.on = () => (fn = f);
	wrapper.off = () => (fn = null);
	wrapper.throttle = () => {};
	wrapper.debounce = () => {};

	return wrapper;
};

const maybe = (x) => (fn) => {
	if (fn && x) {
		return maybe(fn(x));
	} else {
		return maybe(null);
	}
};
