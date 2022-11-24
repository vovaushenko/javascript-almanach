const canSum = (target, nums) => {
	if (!target) return true;
	if (target < 0) return false;

	for (const num of nums) {
		const left = target - num;
		if (canSum(left, nums)) return true;
	}
	return false;
};

const howSum = (target, nums, memo = {}) => {
	if (target in memo) return memo[target];
	if (target === 0) return [];
	if (target < 0) return null;

	for (const num of nums) {
		const reminder = target - num;
		const possibleCombination = howSum(reminder, nums);
		if (possibleCombination) {
			memo[target] = [...possibleCombination, num];
			return memo[target];
		}
	}
	memo[target] = null;
	return null;
};

const allSum = (target, nums) => {
	const combinations = [];

	const generateCombination = (left, combo, startId) => {
		if (left < 0) return;
		if (left === 0) {
			return combinations.push([...combo]);
		}

		for (let i = startId; i < nums.length; i++) {
			generateCombination(left - nums[i], [...combo, nums[i]], i);
		}
	};

	generateCombination(target, [], 0);
	return combinations;
};

console.log(allSum(13, [2, 3, 4, 5]));
