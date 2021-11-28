/*
A popular style of coding in the FP world aims to reduce some of the visual clutter by
removing unnecessary parameter-argument mapping. This style is formally called
tacit programming, or more commonly: point-free style.
*/

//!  Double
const double = (x) => x * 2;
console.log([1, 2, 3, 4, 5].map(double));

//! Parse
const entity = (fn) => (x) => fn(x);
console.log(['1', '2', '3', '4', '5'].map(entity(parseInt)));

//! Output
const output = (txt) => console.log(txt);
const isShortEnough = (str) => str.length <= 5;
const printIf = (predicate, msg) => {
	if (predicate(msg)) {
		output(msg);
	}
};
const msg1 = 'Hello';
const msg2 = 'Hello Hello';
printIf(isShortEnough, msg1);
printIf(isShortEnough, msg2);

//! turning point free
const not =
	(predicate) =>
	(...args) =>
		!predicate(...args);

const isLongEnough = not(isShortEnough);

printIf(isLongEnough, msg2);
