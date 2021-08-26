// countConstruct(purple, [purp, p, ur, le, purp]) => 2

//! m = target.length n = words.length
//*TIME O(m^2*n) SPACE O(m)
const countConstruct = (target, words) => {
	const table = Array(target.length + 1).fill(0);
	table[0] = 1;

	for (let i = 0; i <= target.length; i++) {
		for (let word of words) {
			if (target.slice(i, i + word.length) === word) {
				table[i + word.length] += table[i];
			}
		}
	}

	return table[target.length];
};
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
	countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'sk', 'boar'])
);
