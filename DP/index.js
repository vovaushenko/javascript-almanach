const howSum = (target, nums) => {
	if (!target) return [];
	if (target < 0) return null;

	for (const num of nums) {
		const possibleCombination = howSum(target - num, nums);
		if (possibleCombination) return [...possibleCombination, num];
	}
	return null;
};

const allSum = (target, nums) => {
	const combos = [];

	const helper = (left, startId) => {
		for (let i = startId; i < nums.length; i++) {}
	};

	helper(target, nums);
};

console.log(howSum(12, [2, 3, 4, 5]));
