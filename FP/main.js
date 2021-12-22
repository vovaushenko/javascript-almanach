'use strict';

const once =
	(fn) =>
	(...args) => {
		if (!fn) return;
		const res = fn(...args);
		fn = null;
		return res;
	};

const sum2 = (x, y) => x + y;

const onceSum = once(sum2);

console.log(onceSum(2, 3));
console.log(onceSum(2, 3));
