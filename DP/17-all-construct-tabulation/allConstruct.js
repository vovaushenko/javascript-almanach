// allConstruct(abcdef, [ab, abc, cd , def, abcd, ef, c])

//*TIME O(n^m) SPACE O(n^m) exponential

const allConstruct = (target, wordBank) => {
	const table = Array(target.length + 1)
		.fill()
		.map(() => []);

	table[0] = [[]];

	for (let i = 0; i < target.length; i++) {
		for (let word of wordBank) {
			if (target.slice(i, i + word.length) === word) {
				const newCombinations = table[i].map((subArray) => [...subArray, word]);
				table[i + word.length].push(...newCombinations);
			}
		}
	}

	return table[target.length];
};

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
