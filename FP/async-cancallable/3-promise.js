'use strict';
// https://www.youtube.com/watch?v=T8fXlnqI4Ws&list=PLHhi8ymDMrQZGa7hYnwBQufg9XXoJr5LP&index=9

class CancelablePromise extends Promise {
	constructor(executor) {
		super((resolve, reject) => {
			executor((val) => {
				if (this.canceled) {
					reject(new Error('Cancelled'));
					return;
				}
				resolve(val);
			}, reject);
		});
		this.canceled = false;
	}

	cancel() {
		this.canceled = true;
	}
}

// Usage

{
	const promise = new CancelablePromise((resolve) => {
		setTimeout(() => {
			resolve('first');
		}, 10);
	});

	promise.then(console.log).catch(console.log);
	console.dir({ promise });
}

{
	const promise = new CancelablePromise((resolve) => {
		setTimeout(() => {
			resolve('second');
		}, 10);
	});

	promise.cancel();
	promise.then(console.log).catch(console.log);
	console.dir({ promise });
}
