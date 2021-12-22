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

const delay =
	(fn, delay) =>
	(...args) =>
		new Promise((res, rej) => {
			setTimeout(() => {
				try {
					res(fn(...args));
				} catch (error) {
					rej(err);
				}
			}, delay);
		});
