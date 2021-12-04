const sum = (...args) => args.reduce((a, b) => a + b, 0);

// https://www.youtube.com/watch?v=2h9syXN5wO0
/**
 *@SIMPLE WRAPPER
 */
const wrap = (fn) => {
	console.log(`Wraps function ${fn.name}`);
	return (...args) => {
		console.table(args);
		console.log(`Calls wrapper for ${fn.name}`);
		const res = fn(...args);
		return res;
	};
};

const wrappedSum = wrap(sum);

console.log(wrappedSum(1, 2));
console.log(wrappedSum(1, 2, 3));

/**
 *@WRAPPER WITH HANDLERS
 */
//* UNIVERSAL WRAPPER
{
	const wrap =
		(before, after, fn) =>
		(...args) =>
			after(fn(...before(...args)));
	const loggerBefore = (...args) => {
		console.log(...args.join('🍌'));
		return args;
	};
	const loggerAfter = (res) => console.log(`RESULT OF SUM => ${res}`);

	const wrappedSum = wrap(loggerBefore, loggerAfter, sum);
	console.log(wrappedSum(4, 5, 6));
}
