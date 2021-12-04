'use strict';
// https://www.youtube.com/watch?v=2h9syXN5wO0

/**
 *@ONCE WRAPPER
 */

const once =
	(fn) =>
	(...args) => {
		if (!fn) return;
		const res = fn(...args);
		fn = null;
		return res;
	};

// Use
const fn = (par) => console.log(`Function called with par: ${par}`);

const f = once(fn);
console.log(f('first'));
console.log(f('second'));
