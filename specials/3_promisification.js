// https://www.freecodecamp.org/news/write-your-own-promisify-function-from-scratch/
const getSumAsync = (n1, n2, callback) => {
	if (!n1 || !n2) {
		return callback(new Error('Missing arguments'), null);
	}
	return callback(null, n1 + n2);
};

console.log(
	getSumAsync(1, 3, (err, res) => {
		if (err) {
			console.error(err);
		} else {
			console.log(res);
		}
	})
);

// Promisify
// When we need to promisify many functions we can create a helper function promisify.

// 1️⃣ Promisify using Node.js util.promisify()
const { promisify } = require('util');
const getSumPromise = promisify(getSumAsync); // step 1
getSumPromise(1, 5) // step 2
	.then((result) => {
		console.log(result);
	})
	.catch((err) => {
		console.error(err);
	});

// Our own promisify function
const myPromisify = (fn) => {
	return (...args) => {
		return new Promise((resolve, reject) => {
			function customCallback(err, result) {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			}
			args.push(customCallback);
			fn.call(this, ...args);
		});
	};
};

const getSumPromiseCustom = myPromisify(getSumAsync);

getSumPromiseCustom(12, 3)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
