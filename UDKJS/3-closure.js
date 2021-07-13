/*
 ⭐ Closure is when a function remembers and continues to access variables from outside its scope, even when the function is executed in a different scope. ⭐
*/

const greeting = (msg) => (name) => `${msg} ${name}`;
const hello = greeting('Hello');
const hey = greeting('Hey');
console.log(hello('Sam'));
console.log(hey('Sarah'));

// counter

function counter(step = 1) {
	let count = 0;
	return function increaseCount() {
		count = count + step;
		return count;
	};
}

let incByTwo = counter(2);

console.log(incByTwo());
console.log(incByTwo());
console.log(incByTwo());

// laconic increment

const laconicCounter =
	(step = 1, count = 0) =>
	() =>
		(count = count + step);

let incByThree = laconicCounter(3);
console.log(incByThree());
console.log(incByThree());
console.log(incByThree());
console.log(incByThree());
