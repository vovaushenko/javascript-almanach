// canSum(7, [5,3,4]) => true

//* m = targetSum n = numbers.length
//* TIME O(m*n)
//* SPACE O(m)

const canSum = (targetSum, numbers) => {
	const table = Array(targetSum + 1).fill(false);
	table[0] = true;

	console.log(table);

	for (i = 0; i <= targetSum; i++) {
		if (table[i] === true) {
			for (let num of numbers) {
				table[i + num] = true;
			}
		}
	}

	console.log(table);

	return table[targetSum];
};

console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(300, [7, 14]));
