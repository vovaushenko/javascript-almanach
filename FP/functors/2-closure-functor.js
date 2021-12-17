'use strict';

function maybe(x) {
	return function (fn) {
		if (x && fn) {
			return maybe(fn(x));
		} else {
			return maybe(null);
		}
	};
}

const maybeShort = (x) => (fn) => maybeShort(x && fn ? fn(x) : null);

// Usage

maybeShort(5)()(console.log);
maybeShort(5)((x) => ++x)(console.log);
maybeShort(5)((x) => x * 2)(console.log);
maybeShort(null)((x) => x * 2)(console.log);
maybeShort(5)((x) => x * 2)((x) => ++x)((x) => x * 1000)(console.log);
