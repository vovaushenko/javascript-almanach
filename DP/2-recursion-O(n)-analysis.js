/**
 *! TIME COMPLEXITY - O(N)
 *! SPACE COMPLEXITY - O(N) - because we store calls on stack
 */
const foo = (n) => {
	console.log(n);
	if (n <= 1) return;
	foo(n - 1);
};
foo(5);

/**
 *! TIME COMPLEXITY - O(N)
 *! SPACE COMPLEXITY - O(N) - because we store calls on stack
 */
const bar = (n) => {
	if (n <= 1) return;
	bar(n - 2);
};

//! SYMMETRIC TREE
/**
 * *EXPONENTIAL TIME COMPLEXITY
 *! TIME COMPLEXITY - O(2**N)
 *! SPACE COMPLEXITY - O(N) - because we store calls on stack
 */
const dib = (n) => {
	console.log(n);
	if (n <= 1) return;
	dib(n - 1);
	dib(n - 1);
};

/**
 * *EXPONENTIAL TIME COMPLEXITY
 *! TIME COMPLEXITY - O(2**N)
 *! SPACE COMPLEXITY - O(N) - because we store calls on stack
 */
const lib = (n) => {
	console.log(n);
	if (n <= 1) return;
	lib(n - 2);
	lib(n - 2);
};

/**
 * *EXPONENTIAL TIME COMPLEXITY
 *! TIME COMPLEXITY - O(2**N)
 *! SPACE COMPLEXITY - O(N) - because we store calls on stack
 */
const fib = (n) => {
	if (n <= 2) return 1;
	return fib(n - 2) + fib(n - 1);
};
