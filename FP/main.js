'use strict';

// PARTIAL => REVERSE ARGS => CURRY

const sum = (a, b, c, d, e) => a + b + c + d + e;
console.log(sum(1, 2, 3, 4, 5));

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

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)(4)(5));
console.log(curriedSum(1, 2)(3, 4, 5));
