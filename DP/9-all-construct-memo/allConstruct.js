//* Write a funciton allCOnstruct that accepts a target string and an array of strings
//! The function should return a 2D array containing all of the ways that the taget can be constructed by concatenating elements of the wordBank array. Each element of the 2D array should represent one combination that constructs the target

// allConstruct (purple, [purp, p , ur, le, purp]) => [[purp,le], [p, ur, p, le]]

//* BRUTE FORCE
//* m = target.length, n = wordBank.length
//* TIME O(n^m) SPACE O(m)

const allConstruct = (target, wordBank) => {
	if (target === '') return [[]];

	const result = [];

	for (let prefix of wordBank) {
		if (target.startsWith(prefix)) {
			const suffix = target.replace(prefix, '');

			//array of all the ways to build a suffix
			const suffixWays = allConstruct(suffix, wordBank);
			// if we can get suffix, at the end we just can complement with our prefix to get result
			const targetWays = suffixWays.map((way) => [prefix, ...way]);
			result.push(...targetWays);
		}
	}

	return result;
};

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purp']));
console.log(allConstruct('skateboard', ['purp', 'p', 'ur', 'le', 'purp']));
