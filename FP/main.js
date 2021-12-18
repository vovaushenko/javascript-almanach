// FP
// 1 partial

const withDelay = (fn, delay) => {
	return (...args) => {
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(fn(...args));
			}, delay);
		});

		return promise;
	};
};

const sum = (a, b) => a + b;

const delayedSum = withDelay(sum, 1000);

console.log(delayedSum(2, 4).then((res) => console.log(res)));