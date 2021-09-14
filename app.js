// canSum (memo, tab)✅, comb()✅, perm()✅, howSum(memo,tab) ✅, allSum()✅, qSort()

const allSum = (target, candidates) => {
	const allCombinations = [];

	const createCombination = (comb, left, start) => {
		if (left === 0) {
			allCombinations.push([...comb]);
			return;
		}
		if (left < 0) return;

		for (let i = start; i < candidates.length; i++) {
			const diff = left - candidates[i];
			createCombination([...comb, candidates[i]], diff, i);
		}
	};

	createCombination([], target, 0);
	console.log(allCombinations);
};

console.log(allSum(13, [2, 3, 4, 5]));
