/*
The original version of compose(..) uses a loop and eagerly (aka, immediately)
calculates the result of one call to pass into the next call. This is a reduction of a list
of functions, so we can do that same thing with reduce(..) :
*/

const compose =
	(...fns) =>
	(result) =>
		[...fns].reverse().reduce((res, fn) => fn(res), result);

/*
The advantage of this implementation is that the code is more concise and also
that it uses a well-known FP construct: reduce(..) . And the performance of this
implementation is also similar to the original for -loop version.
*/

//!However, this implementation is limited in that the outer composed function (aka,the first function in the composition) can only receive a single argument.

/*
To fix that first call single-argument limitation, we can still use reduce(..) but
produce a lazy-evaluation function wrapping:
*/
function compose(...fns) {
	return fns.reverse().reduce(function reducer(fn1, fn2) {
		return function composed(...args) {
			return fn2(fn1(...args));
		};
	});
}
var compose = (...fns) =>
	fns.reverse().reduce(
		(fn1, fn2) =>
			(...args) =>
				fn2(fn1(...args))
	);

//* === RECURSIVE COMPOSE ===

function compose(...fns) {
	// pull off the last two arguments
	var [fn1, fn2, ...rest] = fns.reverse();
	var composedFn = function composed(...args) {
		return fn2(fn1(...args));
	};
	if (rest.length == 0) return composedFn;
	return compose(...rest.reverse(), composedFn);
}
