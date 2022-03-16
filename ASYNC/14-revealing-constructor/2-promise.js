'use strict';

// * OPEN CONSTRUCTOR => pass a callback that returns a constant
// this pattern can be used not only for promises
{
	const promise = new Promise((resolve) => resolve(5));
	console.dir({ promise });
}

{
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(5);
		}, 1000);
	});
	//* we can subscribe to promise before its resolution or after
	console.dir({ promise });
	promise.then((x) => console.log({ x }));
	setTimeout(() => {
		promise.then((y) => console.log({ y }));
	}, 1500);
}
