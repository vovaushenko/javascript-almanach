/*
 *Say that you are a traverler on ad grid. Your begin in top-left corner and your goal is travell to the bottom-right corner.
 *You may only move down or right.
 */
//! In how many ways can you travel to the goal on a grid with dimensions m*n

//* Write funciont gridTraveller(m,n) to calculate this

// gridTraveler (2,3) -> 3

// | | | |
// | | | |

// in one by one grid -> do nothing solution is ONE -> gridTraveler(1,1) = 1

//! BRUTE FORCE SOLUTION
//* TIME COMPLEXITY O(2 ^ N+M)  EXPONENTIAL
//* SPACE COMPLEXITY IS THE HEIGHT OF THE TREE O(N+M)
const gridTraveller = (m, n) => {
	if (m === 1 && n === 1) return 1;
	if (m === 0 || n === 0) return 0;
	return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
};

console.log(gridTraveller(1, 1));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(3, 2));
console.log(gridTraveller(3, 3));
// console.log(gridTraveller(18,18)); //!super slow

//*MY VERSION OF MEMO TRAVELLER
const gridTravelerMEMO = (m, n, memo = {}) => {
	if (`${m}*${n}` in memo) return memo[`${m}*${n}`];
	if (m === 1 && n === 1) return 1;
	if (m === 0 || n === 0) return 0;
	const rightMove = gridTravelerMEMO(m - 1, n, memo);
	memo[`${m - 1}*${n}`] = rightMove;
	const downMove = gridTravelerMEMO(m, n - 1, memo);
	memo[`${m}*${n - 1}`] = downMove;
	return rightMove + downMove;
};

console.log(gridTravelerMEMO(1, 1));
console.log(gridTravelerMEMO(2, 3));
console.log(gridTravelerMEMO(3, 2));
console.log(gridTravelerMEMO(3, 3));
console.log(gridTravelerMEMO(18, 18));

//* YOUTUBE VERSION
//* BIG O -> M*N combinations
//! O(m*n) time , O(m+n) space
const gridTravelerMemoTwo = (m, n, memo = {}) => {
	const key = m + ',' + n;
	// are the arguments in memo ?
	if (key in memo) return memo[key];

	if (m === 1 && n === 1) return 1;
	if (m === 0 || n === 0) return 0;

	memo[key] =
		gridTravelerMemoTwo(m - 1, n, memo) + gridTravelerMemoTwo(m, n - 1, memo);

	return memo[key];
};

console.log(gridTravelerMemoTwo(1, 1));
console.log(gridTravelerMemoTwo(2, 3));
console.log(gridTravelerMemoTwo(3, 2));
console.log(gridTravelerMemoTwo(3, 3));
console.log(gridTravelerMemoTwo(18, 18));
