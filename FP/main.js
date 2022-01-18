'use strict';

const sum = (...args) => args.reduce((a, b) => a + b, 0);

const sum4 = (a, b, c, d) => a + b + c + d;
const increment = (x) => x++;
const decrement = (x) => x--;
const double = (x) => x * 2;
const square = (x) => x ** 2;

// 1 partial ✅, 2 curry ✅, point free ✅, pipe ✅, compose✅, decorators

const partial =
	(fn, ...currentArgs) =>
	(...laterArgs) =>
		fn(...currentArgs, ...laterArgs);

const curry =
	(fn) =>
	(...args) => {
		if (fn.length > args.length) {
			const f = fn.bind(null, ...args);
			return curry(f);
		} else {
			return fn(...args);
		}
	};

const pipe =
	(...fns) =>
	(initialArg) =>
		fns.reduce((v, f) => f(v), initialArg);

const compose =
	(...fns) =>
	(initialArg) =>
		fns.reverse().reduce((v, f) => f(v), initialArg);

const sophisticated = pipe(increment, square, double);

const cache = (fn) => {
	const simpleCache = new Map();

	return (...args) => {
		const key = args.join('-*-');
		if (simpleCache.has(key)) {
			console.log('from cache ⭐');
			return simpleCache.get(key);
		}
		const res = fn(...args);
		simpleCache.set(key, res);
		return res;
	};
};

const delay =
	(fn, sleep) =>
	(...args) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (args.some((v) => typeof v === 'string'))
					reject(new Error('Strings are not supported'));

				const res = fn(...args);
				resolve(res);
			}, sleep);
		});

const delayed = delay(sum, 100);

const once = (fn) => {
	return (...args) => {
		if (!fn) return;
		const res = fn(...args);
		fn = null;
		return res;
	};
};

const limit = (fn, callsLimit) => {
	let called = 0;
	return (...args) => {
		if (called === callsLimit) return;
		called++;
		return fn(...args);
	};
};

const ls = limit(sum, 3);

const throttle = (fn, delay) => {
	let isDelayed = false;

	return (...args) => {
		const res = fn(...args);
		if (!isDelayed) {
			isDelayed = true;
			setTimeout(() => {
				isDelayed = false;
			}, delay);
			return res;
		}
	};
};

const cancellable = (fn) => {
	let f = fn;
	const wrapper = (...args) => {
		if (!f) return;
		const res = f(...args);
		return res;
	};

	wrapper.cancel = () => (f = null);
	wrapper.toggle = () => (f ? (f = null) : (f = fn));
	wrapper.on = () => (f = fn);

	return wrapper;
};

const cs = cancellable(sum);

class Node {
	constructor(val) {
		this.val = val;
	}
}

const node = new Node(5);
console.log({ node });

const linear = (InitialNode) =>
	class extends InitialNode {
		constructor(val) {
			super(val);
			this.next = null;
		}
	};

const ListNode = linear(Node);

const twoWay = (InitialNode) =>
	class extends InitialNode {
		constructor(val) {
			super(val);
			this.prev = null;
		}
	};

const root = new ListNode(4);

const DllNode = twoWay(ListNode);

const root2 = new DllNode(5);

console.log({ root2 });
