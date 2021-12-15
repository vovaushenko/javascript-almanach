/*
1. A programming language without closures can simulate them with objects
instead.
2. A programming language without objects can simulate them with closures
instead.
*/
// As a matter of fact, it’s fairly straightforward to represent an object as a closure, or
// a closure as an object. Go ahead, try it yourself:

var point = {
	x: 10,
	y: 12,
	z: 14,
};

const point = () => {
	const x = 10;
	const y = 12;
	const z = 14;
	return () => [x, y, z];
};

/*
Objects and closures are isomorphic to each other, which means that they can be
used somewhat interchangeably to represent state and behavior in your program.
Representation as a closure has certain benefits, like granular change control and
automatic privacy. Representation as an object has other benefits, like easier cloning
of state.
*/
