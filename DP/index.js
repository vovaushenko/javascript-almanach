'use strict';

const howSum = (target, nums) => {
	const table = Array(target).fill(null);
	table[0] = [];
	for (let i = 0; i <= target; i++) {
		if (table[i]) {
			for (let num of nums) {
				table[i + num] = [...table[i], num];
			}
		}
	}

	console.table(table);
};

console.log(howSum(6, [2, 3, 4]));
