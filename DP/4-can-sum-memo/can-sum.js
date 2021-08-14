/*
Write a funciton canSum(targetSum, numbers) that takes a targetSum and array of numbers

The function should return a boolean indicating whether or not it is possible to generate the targetSum
using numbres in array

You may use element of the array as many times as needed

You may assume that all input numbers are nonnegative
*/

// canSum(7, [2,4]) => false canSum([1,2,3], 7) => true

//!BRUTE FORCE
//* TIME COMPLEXITY O(n ** M)    O(M) SPACE
const canSum = (targetSum, nums) => {
	if (targetSum === 0) return true;
	if (targetSum < 0) return false;

	for (let num of nums) {
		const remainder = targetSum - num;

		if (canSum(remainder, nums) === true) {
			return true;
		}
	}

	return false;
};
console.log(canSum(8, [2, 3, 5]));
//!BRUTE FORCE
//* TIME COMPLEXITY O(m*n)    O(M) SPACE
const canSumMEMO = (target, nums, memo = {}) => {
	if (target in memo) return memo[target];
	if (target === 0) return true;
	if (target < 0) return false;

	for (let num of nums) {
		const remainder = target - num;
		if (canSumMEMO(remainder, nums, memo) === true) {
			memo[target] = true;
			return true;
		}
	}

	memo[target] = false;
	return false;
};

console.log(canSumMEMO(8, [2, 3, 5]));
console.log(canSumMEMO(3121, [7, 14]));
