'use strict';

class Maybe {
	constructor(x) {
		this.x = x;
	}
	map(fn) {
		if (this.x && fn) {
			return new Maybe(fn(this.x));
		} else {
			return new Maybe(null);
		}
	}
}

// Usage

new Maybe(5).map().map(console.log);
new Maybe(5)
	.map((x) => x * 2)
	.map((x) => x + 1)
	.map(console.log);
// new Maybe(null).map((x) => x * 2).map(console.log);
