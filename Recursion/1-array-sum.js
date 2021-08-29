// const sum([1,5,7,-2]) => 1 + sum(5,7,-2)  => 1 + 5 + sum(7,-2) => ...
// !base case sum([]) === 0

https://www.youtube.com/watch?v=wRH2I6IN4BE

//* m = arr.length
//* Time O(m^2) Space O(m)
const sum = (arr) => {
	if (arr.length === 0) return 0;
	const rest = arr.slice(1);
	return arr[0] + sum(rest);
};
console.log(sum([1, 2, 3]));

const optimizedSum = (arr) => {
	return _sum(arr,0);
};
const _sum = (arr, idx) => {
	if (idx === arr.length) return 0;
	return arr[idx] + _sum(arr, idx + 1);
};

console.log(optimizedSum([1, 2, 3]));
