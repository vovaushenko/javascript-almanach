// howSum(7,[5,3,4]) => [4,3] , [3,4]

//* Table length targetSum+1
//* Fill in with null
//* SEED value for 0 is []

//! m = targetSum, n = numbers.length
//* TIME O(m^2*n) SPACE(m^2)
const howSum = (target, nums) => {
	const table = Array(targetSum + 1).fill(null);
	table[0] = [];
	console.log(table);
};

howSum(7, [5, 3, 4]);
