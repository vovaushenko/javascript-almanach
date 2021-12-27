'use strict';

// Function throttling, executed once per interval

const throttle = (timeout, f, ...args) => {
	let timer;
	let wait = false;
	let wrapped = null;

	const throttled = (...par) => {
		timer = undefined;
		if (wait) wrapped(...par);
	};

	wrapped = (...par) => {
		if (!timer) {
			timer = setTimeout(throttled, timeout, ...par);
			wait = false;
			return f(...args.concat(par));
		} else {
			wait = true;
		}
	};

	return wrapped;
};

// Usage

const fn = (...args) => {
	console.log('Function called, args:', args);
};

const ft = throttle(200, fn, 'Throttled -> ');

const timer = setInterval(() => {
	fn('value2');
	ft('👋 I am throttled');
}, 50);

setTimeout(() => {
	clearInterval(timer);
}, 2000);
