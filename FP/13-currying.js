/*
Currying is similar to partial application in that each successive curried call partially
applies another argument to the original function, until all arguments have been
passed.
*/

/*
If an original function expected five arguments, the curried form of that function
would take just the first argument, and return a function to accept the second. That
one would take just the second argument, and return a function to accept the third.
And so on.
*/

function curryF(fn, arity = fn.length) {
	return (function nextCurried(prevArgs) {
		return function curried(nextArg) {
			var args = [...prevArgs, nextArg];
			if (args.length >= arity) {
				return fn(...args);
			} else {
				return nextCurried(args);
			}
		};
	})([]);
}

// or the ES6 => arrow form
var curry = (fn, arity = fn.length, nextCurried) =>
	(nextCurried = (prevArgs) => (nextArg) => {
		var args = [...prevArgs, nextArg];
		if (args.length >= arity) {
			return fn(...args);
		} else {
			return nextCurried(args);
		}
	})([]);

/*
  The approach here is to start a collection of arguments in prevArgs as an empty []
array, and add each received nextArg to that, calling the concatenation args . While
args.length is less than arity (the number of declared/expected parameters of
the original fn(..) function), make and return another curried(..)
  */

function sum(...nums) {
	var total = 0;
	for (let num of nums) {
		total += num;
	}
	return total;
}

console.log(sum(1, 2, 3, 4, 5));

var curriedSum = curry(sum, 5);
const res = curriedSum(1)(2)(3)(4)(5);
console.log(res);

//! LOOSE CURRY
function looseCurry(fn, arity = fn.length) {
	return (function nextCurried(prevArgs) {
		return function curried(...nextArgs) {
			var args = [...prevArgs, ...nextArgs];
			if (args.length >= arity) {
				return fn(...args);
			} else {
				return nextCurried(args);
			}
		};
	})([]);
}

var sum2 = looseCurry(sum, 9);
const res2 = sum2(1, 2)(2, 2, 3)(3)(4)(5, 2);
console.log(res2);
