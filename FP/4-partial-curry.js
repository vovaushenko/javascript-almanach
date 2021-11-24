'use strict';
// https://www.youtube.com/watch?v=ND8KQ5xjk7o&list=LL&index=5&t=1322s
/**
 *  PARTIAL
 */
const log = (base, n) => Math.log(n) / Math.log(base);
const createLog = (base) => (n) => log(base, n);
// FIRST WAY OF PARTIAL APPLICATION
const lg = createLog(10);
const ln = createLog(Math.E);
// PARTIAL APPLICATION WITH BINDING
const lgBind = log.bind(null, 10);
const lnBind = log.bind(null, Math.E);
console.log(log.bind(null, 10, 5)());

console.log('lg(5)', lg(5));
console.log('lgBind(5)', lgBind(5));
console.log('ln(5)', ln(5));
console.log('lnBind(5)', lnBind(5));

//!GENERIC PARTIAL

const partial =
	(fn, x) =>
	(...args) =>
		fn(x, ...args);

const sum4 = (a, b, c, d) => a + b + c + d;

const f11 = partial(sum4, 1);
const f12 = partial(f11, 2);
const f13 = partial(f12, 3);

console.log(f13(4));

//!EXTENDED PARTIAL

const extendedPartial =
	(fn, ...args) =>
	(...rest) =>
		fn(...args.concat(rest));

const ef12 = extendedPartial(sum4, 1, 2);
const ef13 = extendedPartial(ef12, 3);

console.log('ef13', ef13(4));
console.log('ef13', extendedPartial(sum4, 1, 2, 3, 4)());

//! BAD CURRY

const badCurry =
	(fn) =>
	(...args) =>
		fn.length > args.length
			? badCurry(
					(
						(fn, ...args1) =>
						(...args2) =>
							fn(...args1.concat(args2))
					)(fn, ...args)
			  )
			: fn(...args);

const f = badCurry(sum4);

console.log(f(1, 2, 3, 4));
console.log(f(1, 2, 3)(4));
console.log(f(1, 2)(3, 4));

//! BETTER CURRY

const infiniteSum = (...args) => args.reduce((a, b) => a + b, 0);

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

console.log(curriedSum(1)(2)(3)(5));

//! GOOD CURRY SECOND FLAVOR

const currySecond = (fn, ...par) => {
	const curried = (...args) => {
		fn.length > args.length ? currySecond(fn.bind(null, ...args)) : fn(...args);
	};

	return par.length ? curried(...par) : curried;
};
const curriedSumTwo = curry(sum4);

console.log(curriedSumTwo(6)(2)(3)(5));
