'use strict';
//* In this exapmple future is a factory function that returns an object
//* with methods map() - that recursively calls new future,
//* and fork() -
const future = (value) => {
	let mapper = null;
	return {
		map(fn) {
			//! adds function fn to closure
			mapper = fn;
			return future(this);
		},
		// ! Fork is analogous to then, tells future to perform some operations
		// successed is a callback
		fork(successed) {
			const finish = (result) => {
				if (mapper) successed(mapper(result));
				else if (successed) successed(result);
			};
			//* check if value is a future
			//!duck typing
			if (value.fork) return value.fork(finish);
			finish(value);
		},
	};
};

// Usage

const future1 = future(5)
	.map((x) => {
		console.log('future1 started');
		return x;
	})
	.map((x) => ++x)
	.map((x) => x ** 3)
	.map((x) => {
		console.log('future1 result', x);
	});

console.dir({ future1 });

// *Imperatively tell future to start working
future1.fork();

const promise1 = Promise.resolve(6)
	.then((x) => {
		console.log('promise1 started');
		return x;
	})
	.then((x) => ++x)
	.then((x) => x ** 3)
	.then((x) => {
		console.log('promise1 result', x);
	});

console.dir({ promise1 });
