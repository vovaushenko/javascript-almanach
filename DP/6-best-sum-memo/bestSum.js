// Write a function bestSum(target, numbers) thsat takes in a targetSum and an array of numbers as arguments

//The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum

// If there is a tie for the shortest combination. Return one of them.

//! bestSum(7, [5,3,4,7]) => [7]
//! bestSum(8, [2,3,5]) => [3,5]

//!BRUTE FORCE
//* Time m^n  Space (m^2)
const bestSum = (targetSum, numbers) => {
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	let shortestCombination = null;

	for (let num of numbers) {
		const remainder = targetSum - num;
		const remainderCombination = bestSum(remainder, numbers);
		if (remainderCombination !== null) {
			const combination = [...remainderCombination, num];

			// if the combination is shorter than the current shortest
			if (
				shortestCombination === null ||
				combination.length < shortestCombination.length
			) {
				shortestCombination = combination;
			}
		}
	}

	return shortestCombination;
};

console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(7, [2, 3, 5, 7]));
// console.log(bestSum(100, [1, 2, 5, 25]));
//! MEMOIZATION
//* TIME O(m^2*n) SPACE O(m^2)
const bestSumMemo = (targetSum, numbers, memo = {}) => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	let shortestCombination = null;

	for (let num of numbers) {
		const remainder = targetSum - num;
		const remainderCombination = bestSumMemo(remainder, numbers, memo);
		if (remainderCombination !== null) {
			const combination = [...remainderCombination, num];

			// if the combination is shorter than the current shortest
			if (
				shortestCombination === null ||
				combination.length < shortestCombination.length
			) {
				shortestCombination = combination;
			}
		}
	}
	memo[targetSum] = shortestCombination;
	return shortestCombination;
};

console.log(bestSumMemo(8, [2, 3, 5]));
console.log(bestSumMemo(7, [2, 3, 5, 7]));
console.log(bestSumMemo(100, [1, 2, 5, 25]));
