'use strict';
// https://www.youtube.com/watch?v=2h9syXN5wO0
// Wrapper will prevent call after timeout

/**
 *@TIMEOUT WRAPPER
 */
const timeout = (msec, fn) => {
	let timer = setTimeout(() => {
		if (timer) console.log(`Function ${fn.name} is delayed on ${msec} ms`);
		timer = null;
	}, msec);

	return (...args) => {
		if (timer) {
			clearTimeout(timer);
			timer = null;
			return fn(...args);
		}
	};
};

// Usage

const fn = (par) => {
	console.log('Function called, par:', par);
};

const fn100 = timeout(100, fn);
const fn200 = timeout(200, fn);

setTimeout(() => {
	fn100('first');
	fn200('second');
}, 150);
