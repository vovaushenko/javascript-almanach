const texter = (message) => (actor) => `${message} ${actor}`;

const greeter = texter('hi');

const incrementor = (start) => {
	let counter = start;

	return (increment = 1) => {
		counter += increment;
		return counter;
	};
};

const counter = incrementor(0);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(5));
