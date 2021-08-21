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
		.map(() => Array(n + 1));

	console.log(table);
};

console.log(gridTraveller(3, 2));
