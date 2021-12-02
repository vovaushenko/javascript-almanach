'use strict';

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

const unary = (fn) => (arg) => fn(arg);

const sin = unary(Math.sin);
console.log(sin(30));
