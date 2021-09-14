// howSum(7,[5,3,4]) => [4,3] , [3,4]

//* Table length targetSum+1
//* Fill in with null
//* SEED value for 0 is []

//! m = targetSum, n = numbers.length
//* TIME O(m^2*n) SPACE(m^2)
const howSum = (target, nums) => {
	const table = Array(target + 1).fill(null);
	table[0] = [];
	console.log(table);

	for (let i = 0; i < target; i++) {
		if (table[i] !== null) {
			for (let num of nums) {
				table[i + num] = [...table[i], num];
			}
		}
	}
	console.log(table);
	return table[target];
};

console.log(howSum(7, [5, 3, 4]));
