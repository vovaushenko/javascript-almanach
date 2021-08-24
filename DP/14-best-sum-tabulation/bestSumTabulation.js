// bestSum(8,[2,3,5])  [2,2,2,2], [3,5], [2,3,3]

//! m = targetSum, n = numbers.length
//* TIME O(m^2*n) SPACE(m^2)
const bestSum = (target, nums) => {
	const table = Array(target + 1).fill(null);
	table[0] = [];

	for (let i = 0; i < target; i++) {
		if (table[i] !== null) {
			for (let num of nums) {
				const combination = [...table[i], num];
				// if this current combiantion is shorter that is already stored
				// if there is null, first part of conditional will trigger
				if (!table[i + num] || table[i + num].length > combination.length) {
					table[i + num] = combination;
				}
			}
		}
	}

	console.log(table);

	return table[target];
};

console.log(bestSum(8, [2, 3, 5]));
