//! Adapting Arguments to Parameters

/*
There are a variety of patterns and tricks we can use to adapt a function’s signature
to match the kinds of arguments we want to provide to it.
*/

function foo([x, y, ...args] = []) {}

/*
This pattern is handy if an array will be passed in but you want to treat its contents
as individual parameters. foo(..) is thus technically unary – when it’s executed,
only one argument (an array) will be passed to it. But inside the function, you get to
address different inputs ( x , y , etc) individually.
*/

//  =================================================================

//* SPREAD ARGS
/*
We can define a helper to adapt a function so that it spreads out a single received
array as its individual arguments:
*/
const spreadArgs = (fn) => (argsArr) => fn(...argsArr);

const foo1 = (x, y) => x + y;
const bar = (fn) => fn([4, 6]);

const RES = bar(spreadArgs(foo1));
console.log(RES);

//  =================================================================
//* GATHER ARGS
var gatherArgs =
	(fn) =>
	(...argsArr) =>
		fn(argsArr);

const combineFirstTwo = ([v1, v2]) => v1 + v2;

const res = [1, 2, 3, 4, 5].reduce(gatherArgs(combineFirstTwo));
console.log(res);
