'use strict';

// Fibonacci

const fib = (n) => {
	if (n < 2) return 1;

	return fib(n - 1) + fib(n - 2);
};

const memoFib = (n, memo = new Object(null)) => {
	if (n < 2) return 1;
	if (n in memo) return memo[n];
	memo[n] = memoFib(n - 1, memo) + memoFib(n - 2, memo);
	return memo[n];
};

const canSum = (target, candidates) => {
	if (!target) return true;
	if (target < 0) return false;

	for (const cnd of candidates) {
		const complement = target - cnd;
		if (canSum(complement, candidates)) return true;
	}
	return false;
};

const howSum = (target, candidates) => {
	if (!target) return [];
	if (target < 0) return null;

	for (const cnd of candidates) {
		const complement = target - cnd;
		const combination = howSum(complement, candidates);
		if (combination) return [...combination, cnd];
	}
	return null;
};

const howSumTab = (target, candidates) => {
	const table = new Array(target + 1).fill(null);
	table[0] = [];

	for (let i = 0; i < target; i++) {
		if (table[i]) {
			for (const cnd of candidates) {
				table[i + cnd] = [...table[i], cnd];
			}
		}
	}
	console.log({ table });
	return table[target];
};

console.log(howSumTab(7, [5, 3, 4]));
