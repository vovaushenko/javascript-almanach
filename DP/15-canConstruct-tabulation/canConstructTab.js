// canConstruct(target,wordBank)
//* canConstruct(abcdef,[ab,abc,cd,def,adcd]) => true

//! m = target n = wordBank.length
//* TIME O(m^2*n) SPACE O(m)

const canConstruct = (target, wordBank) => {
	const table = Array(target.length + 1).fill(false);
	table[0] = true;

	for (let i = 0; i < target.length; i++) {
		if (table[i] === true) {
			for (let word of wordBank) {
				// if the word matches the characters starting at position 1
				if (target.slice(i, i + word.length) === word) {
					table[i + word.length] = true;
				}
			}
		}
	}
	console.log(table);
	return table[target.length];
};

console.log(canConstruct('racecar', ['r', 'ace', 'ec', 'car', 'ace']));
