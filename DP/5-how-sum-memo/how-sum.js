// Write a function howSum(target, numbers) that takes in a targetNum and array of nums as args
// The function should return an array containing any combination of elements that add up to exactly target
// If there is no such combination, then return null
// If there are multiple combinations possible, you may return any single one

// howSum(7, [5,3,4,7]) -> [3,4], [7]
// howSum(8, [2,3,5]) -> [2,2,2,2], [3,5], [3,3,2]
// howSum(7, [2,3]) -> null
// howSum(0, [2,3]) -> []

//! BRUTE FORCE
//* m = target n = numbers.length
//* TIME O(n^m * m)
//* SPACE O(m)
const howSum = (target, numbers) => {
	if (target === 0) return [];
	if (target < 0) return null;

	for (let num of numbers) {
		const remainder = target - num;

		howSum(remainder, numbers);

		const remainderResult = howSum(remainder, numbers);

		if (remainderResult !== null) {
			return [...remainderResult, num];
		}
	}
	return null;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [2, 4]));
console.log(howSum(7, [1]));

//! MEMOIZED
//* TIME O(n*m*m)
//* SPACE O(m*m)
const howSumMemo = (target, numbers, memo = {}) => {
	if (target in memo) return memo[target];
	if (target === 0) return [];
	if (target < 0) return null;

	for (let num of numbers) {
		const remainder = target - num;

		howSumMemo(remainder, numbers, memo);

		const remainderResult = howSumMemo(remainder, numbers, memo);

		if (remainderResult !== null) {
			memo[target] = [...remainderResult, num];
			return memo[target];
		}
	}
	memo[target] = null;
	return null;
};

console.log(howSumMemo(7, [2, 3]));
console.log(howSumMemo(7, [2, 4]));
console.log(howSumMemo(7, [1]));
console.log(howSumMemo(300, [7, 14]));
console.log(howSumMemo(300, [7, 5]));
