/*
 *JavaScript function s have a this keyword that’s automatically bound per function
 *call. The this keyword can be described in many different ways, but I prefer to say
 *it provides an object context for the function to run against.
 */

function sum() {
	return this.x + this.y;
}

console.log(sum(1, 2)); // nan
console.log(sum.call({ x: 1, y: 1 }));

const twoPlusTwo = sum.bind({ x: 2, y: 2 });

console.log(twoPlusTwo());
