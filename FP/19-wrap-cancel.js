const cancelable = (fn) => {
	const wrapper = (...args) => {
		if (fn) return fn(...args);
	};
	wrapper.cancel = () => (fn = null);
	return wrapper;
};

const fn = (par) => {
	console.log(`Function called with param: ${par}`);
};

const f = cancelable(fn);

f('first');
f.cancel();
f('second');
