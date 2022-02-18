'use strict';

const fib = (n) => {
	if (n < 2) return 1;
	return fib(n - 1) + fib(n - 2);
};

const memofib = (n, memo = new Object(null)) => {
	if (n < 2) return 1;
	if (n in memo) return memo[n];
	memo[n] = memofib(n - 2, memo) + memofib(n - 1, memo);
	return memo[n];
};

const gridTraveller = (m, n) => {
	if (m === 1 && n === 1) return 1;
	if (m === 0 || n === 0) return 0;
	return gridTraveller(m, n - 1) + gridTraveller(m - 1, n);
};

const memogrid = (m, n, memo = new Object(null)) => {
	const key = `${m}--${n}`;
	if (key in memo) return memo[key];
	if (m === 1 && n === 1) return 1;
	if (m === 0 || n === 0) return 0;

	memo[key] = gridTraveller(m, n - 1, memo) + gridTraveller(m - 1, n, memo);

	return memo[key];
};

const canSum = (candidates, num) => {
	if (num === 0) return true;
	if (num < 0) return false;

	for (const n of candidates) {
		const remainder = num - n;

		if (canSum(candidates, remainder)) return true;
	}

	return false;
};

const howSum = (candidates, num) => {
	if (num === 0) return [];
	if (num < 0) return null;

	for (const n of candidates) {
		const combo = howSum(candidates, num - n);

		if (combo) return [...combo, n];
	}
	return null;
};

const howSumTab = (candidates, target) => {
	const table = Array(target + 1).fill(null);
	table[0] = [];

	for (let i = 0; i < target; i++) {
		if (table[i] !== null) {
			for (const cand of candidates) {
				table[i + cand] = [...table[i], cand];
			}
		}
	}

	return table[target];
};

const bestSum = (target, nums) => {
	if (!target) return [];
	if (target < 0) return null;

	let bestCombo = null;

	for (const num of nums) {
		const combo = bestSum(target - num, nums);

		if (combo !== null) {
			const validCombo = [...combo, num];
			if (!bestCombo) {
				bestCombo = validCombo.length;
			} else {
				if (validCombo.length < bestCombo) bestCombo = validCombo.length;
			}
		}
	}

	return bestCombo;
};

console.log(bestSum(7, [3, 4, 6]));
