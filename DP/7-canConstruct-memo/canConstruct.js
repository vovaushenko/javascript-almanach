/*
  Write a function canConstruct(target, wordBank) that accepts a target string and an array of strings

  The function should return a boolean indicating whether or not the target can be constructed by concatenating elements of the word bank array

  You may reuse elements of wordBank as many times as possible
*/

//* canConstruct(abcdef, [ab, abc, cd , def, abcd]) => abc + def => true
//* canConstruct(skateboard, [bo, rd, ate , t, sk, boar]) => abc + def => false

//! canConstruct('', [a, b, c]) => ALWAYS TRUE

//! BRUTE FORCE
//* m - target.length, n = wordBank.length
//* TIME O (n^m)
//* SPACE = the height of the tree O(m^2)
const canConstruct = (target, wordBank) => {
	if (target === '') return true;

	for (let prefix of wordBank) {
		if (target.startsWith(prefix)) {
			const suffix = target.replace(prefix, '');
			// const suffix = target.slice(prefix.length);
			if (canConstruct(suffix, wordBank) === true) {
				return true;
			}
		}
	}
	return false;
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'sk', 'boar']));

//*TIME O(n*m^2)
//*SPACE O(m^2)
const canConstructMemo = (target, wordBank, memo = {}) => {
	if (target in memo) return memo[target];
	if (target === '') return true;

	for (let prefix of wordBank) {
		if (target.startsWith(prefix)) {
			const suffix = target.replace(prefix, '');
			if (canConstructMemo(suffix, wordBank, memo) === true) {
				memo[target] = true;
				return true;
			}
		}
	}

	memo[target] = false;
	return false;
};

console.log(canConstructMemo('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
	canConstructMemo('skateboard', ['bo', 'rd', 'ate', 't', 'sk', 'boar'])
);

console.log(
	canConstructMemo(
		'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
		['e', 'ee', 'eee', 'eeee', 'eeeeee', 'eeeeeeee']
	)
);
