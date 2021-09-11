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
