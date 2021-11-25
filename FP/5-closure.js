/*
Closure is when a function remembers and accesses variables from
outside of its own scope, even when that function is executed in a
different scope.
*/

const foo = (msg) => () => msg.toUpperCase();

const uppercaser = foo('hello');

console.log(uppercaser());

// =================================================================
const texter = (message) => (name) => `${message}, ${name}!`;

const hey = texter('Hey');

console.log(hey('Vova'));

// =================================================================

/*
The access that closure enables is not restricted to merely reading the variable’s
original value – it’s not just a snapshot but rather a live link. You can update the
value, and that new current state remains remembered until the next access:
*/

const runnigCounter = (start) => {
	let val = start;
	return (increment = 1) => {
		val = val + increment;
		return val + increment;
	};
};

const score = runnigCounter(0);
console.log(score());
console.log(score());
console.log(score());
console.log(score(3));

// =================================================================
/*
If you have an operation that needs two inputs, one of which you know now but the
other will be specified later, you can use closure to remember the first input:
*/

const makeAdder = (base) => (increment) => base + increment;

const twoPlus = makeAdder(2);
const fivePlus = makeAdder(5);
console.log(twoPlus(2));
console.log(fivePlus(5));
