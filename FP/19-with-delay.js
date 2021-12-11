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
