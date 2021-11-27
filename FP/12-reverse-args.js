//* Reversing Arguments
/*
!Recall that the signature for our Ajax function is: ajax( url, data, cb ) . What
!if we wanted to partially apply the cb but wait to specify data and url later?
*/

// We could create a utility that wraps a function to reverse its argument order:

var reverseArgs =
	(fn) =>
	(...args) =>
		fn(...args.reverse());

const cache = {};
const cacheResult = reverseArgs(
	partial(reverseArgs(ajax), function onResult(obj) {
		cache[obj.id] = obj;
	})
);

// later:
cacheResult('http://some.api/person', { user: CURRENT_USER_ID });

/*
!Instead of manually using reverseArgs(..) (twice!) for this purpose, we can define
a partialRight(..) which partially applies the rightmost arguments. Under the
covers, it can use the same double-reverse trick:
*/

function partialRight(fn, ...presetArgs) {
	return reverseArgs(partial(reverseArgs(fn), ...presetArgs.reverse()));
}

//! Another more straightforward (and certainly more performant) implementation of
// partialRight(..) that doesn’t use the double-reverse trick:
var partialRight =
	(fn, ...presetArgs) =>
	(...laterArgs) =>
		fn(...laterArgs, ...presetArgs);
