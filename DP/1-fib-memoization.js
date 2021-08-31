/*
 CLASSIC RECURSION
*/

// https://www.youtube.com/watch?v=oBt53YbR9Kk&t=14782s

/**
 * *EXPONENTIAL TIME COMPLEXITY
 *! TIME COMPLEXITY - O(2**N)
 *! SPACE COMPLEXITY - O(N) - because we store calls on stack
 */
const fib = (n) => {
	if (n <= 2) return 1;
	return fib(n - 2) + fib(n - 1);
};
// fib(50) === 2 ** 50 steps ~~ 1 Trillion steps
console.log(fib(7));

/**
 * MEMOIZATION
 * ! TIME COMPLEXITY - O(N)
 */
const fibMemoized = (n, memo = {}) => {
	if (n in memo) return memo[n];
	if (n <= 2) return 1;
	memo[n] = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo);

	return memo[n];
};

console.log(fibMemoized(33));

const cache = { 1: 1, 2: 1 };
const fibCache = (n) => cache[n] || (cache[n] = fib(n - 1) + fib(n - 2));

console.log(fibCache(44));
