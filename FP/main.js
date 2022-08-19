// partial, compose, curry, monad, wrapper

const increment = (x) => x + 1;
const decrement = (x) => x - 1;
const double = (x) => x * 2;
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);

const partial =
	(fn, ...initialArgs) =>
	(...laterArgs) =>
		fn(...initialArgs, ...laterArgs);

const twoPlus = partial(sum, 2);

const compose =
	(...fns) =>
	(initialArg) =>
		fns.reduce((v, f) => f(v), initialArg);

const sophisticated = compose(increment, increment, double);

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

const sum4 = (a, b, c, d) => a + b + c + d;

const curriedSum = curry(sum4);

console.log(curriedSum(1)(2)(3, 4));
9697180743;
