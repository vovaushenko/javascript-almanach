/*
Say that you are a traveller on a 2d grid. you begin in the top-left corner and your goal is to tarvel to the bottom right 
corner. You may only move down or right
*/
//* In how many ways can you taravel to the goal on a grid with dimensions m*n

//* TIME O(m*n)
//* SPACE O(m*n)
const gridTraveller = (m, n) => {
	const table = Array(m + 1)
		.fill()
		.map(() => Array(n + 1).fill(0));

	table[1][1] = 1;
	console.log(table);

	for (let i = 0; i <= m; i++) {
		for (let j = 0; j <= n; j++) {
			const current = table[i][j];

			//!increment right neighbor, in if we checking not get of right bound

			if (j + 1 <= n) table[i][j + 1] += current;

			//!increment down neighbor, in if we checking not get of down bound
			if (i + 1 <= m) table[i + 1][j] += current;
		}
	}
	console.log(table);
	return table[m][n];
};

console.log(gridTraveller(3, 2));

console.log(gridTraveller(3, 3));
console.log(gridTraveller(18, 18));
