//! What’s in a Name?
// Syntactically speaking, function declarations require the inclusion of a name:

const adder = (a, b) => a + b;

console.log(adder.name);

// But function expressions can come in both named and anonymous forms:
(() => {
	return console.log;
})()('hello');
/*
What exactly do we mean by anonymous, by the way? Specifically, functions have
a name property that holds the string value of the name the function was given
syntactically, such as "helloMyNameIs" or "namedFunctionExpr" . This name
property is most notably used by the console/developer tools of your JS environment
to list the function when it participates in a stack trace (usually from an exception).
*/

/*
As of ES6, anonymous function expressions are in certain cases aided by name
inferencing. 
*/

// ! Consider:

const x = () => console.log('x');
console.log(x.name);

const y = function hello() {
	return 'hello';
};
console.log(y.name); // HELLO

/*
You virtually never see IIFEs using names for their function expressions, but they
should. Why? For all the same reasons we just went over: stack trace debugging,
reliable self-reference, and readability. If you can’t come up with any other name for
your IIFE, at least use the word IIFE:
*/

// !IIEFE
(function IIFE() {
	// You already knew I was an IIFE!
})();
