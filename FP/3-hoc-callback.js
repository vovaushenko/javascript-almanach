'use strict';

const { sin } = Math;
//  ===== INVERSE  =====
const inverse = (f) => (x) => 1 / f(x);

const cosecant = inverse(sin);

console.log(cosecant(5));

//  =====  CALLBACK  =====
const fn = (par, callback) => {
	if (!par) {
		callback(new Error('Parameter needed'));
		return;
	}
	callback(null, 'Data' + par);
	return 'some value';
};

const res = fn('example', (err, data) => {
	if (err) throw err;
	console.log(data);
});

console.log(res);

// Cache

const withCache = () => {
	const cache = {};
	return (key) => {
		let res = cache[key];
		if (res) {
			console.log('from cache');
			return res;
		} else {
			console.log('calculated and added to cache');
			res = 'CACHED-' + key;
			cache[key] = res;
			return res;
		}
	};
};

const f1 = withCache();
const f2 = withCache();

// =====  LOGGER =====

const withLog =
	(fn) =>
	(...args) => {
		const res = fn(...args);
		console.log(`Call :${fn.name} with arguments: ${args}. Result : ${res}`);
		return res;
	};

const sum = (...args) => args.reduce((a, b) => a + b, 0);

const detailedSum = withLog(sum);

console.log(detailedSum(1, 2, 3));
console.log(detailedSum(2, 3));

//  ==== FS =====

const fs = require('fs');

fs.readFile(
	path.resolve(__dirname, '2-function-output.txt'),
	'utf-8',
	(err, data) => {
		console.log({ data: data.split('\n').filter((r) => r).length });
	}
);
console.log('end');

//  ==== SET TIMEOUT ====

const fnn = () => console.log('Callback from timer');

const timeout = (fn, interval) => setTimeout(fnn, interval);

timeout(fnn, 3000);
