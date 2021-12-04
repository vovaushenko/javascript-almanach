const limit = (count, fn) => {
	let counter = 0;
	return (...args) => {
		if (counter === count) return;
		counter++;
		return fn(...args);
	};
};

// Use
const fn = (par) => console.log(`Function called with par: ${par}`);

const f = limit(2, fn);
console.log(f('first'));
console.log(f('second'));
console.log(f('third'));
