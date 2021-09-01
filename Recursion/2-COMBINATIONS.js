// combinations of [a,b,c]
//! Number of combinations 2^n (n = arr.length)   => [a,b,c] => [], [a], [b], [c], [a,b], [b,c], [a,c], [a,b,c]

//* Look at combinations png. We make a binary decision, to either add element to current combination or not. On each step we double the number of nodes.

const combinations = (elements) => {
	if (elements.length === 0) return [[]];
	const firstElement = elements[0];
	const rest = elements.slice(1);

	const combinationsWithoutFirst = combinations(rest);
	const combinationsWithFirst = [];

	combinationsWithoutFirst.forEach((combination) => {
		// create copy
		const combWithFirst = [...combination, firstElement];
		combinationsWithFirst.push(combWithFirst);
	});

	return [...combinationsWithoutFirst, ...combinationsWithFirst];
};
//* Time(2^n)
//* Space(n^2)

console.log(combinations(['a', 'b', 'c']));
console.log(combinations(['a', 'b']));
console.log(combinations([]));
