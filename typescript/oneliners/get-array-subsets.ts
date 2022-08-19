export const getSubsets = <T>(arr: T[]): T[][] =>
	arr.reduce(
		(acc, cur) => acc.concat(acc.map((k) => k.concat(cur))),
		[[] as T[]]
	);

console.log(getSubsets([1, 2, 3]));
