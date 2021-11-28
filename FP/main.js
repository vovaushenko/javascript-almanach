'use strict';

const infiniteSum = (...args) => args.reduce((a, b) => a + b, 0);
const sum5 = (a, b, c, d, e) => a + b + c + d + e;

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

const curriedSum = curry(sum5);

console.log(curriedSum(1)(2)(3, 4)(1));
