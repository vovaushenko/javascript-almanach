//* Write a function countCOnstruct(target, wordBank) that accepts a target string and an array of strings.

/*
The function should return the number of ways that the rgarget can be cnstructed by ccatenating elements of the word bank array
You may reuse elements of wordBank as many times as needed
*/
// My Version
const myCountConstruct = (target, wordBank) => {
	if (target === '') return 1;
	let count = 0;
	for (let prefix of wordBank) {
		if (target.startsWith(prefix)) {
			const suffix = target.replace(prefix, '');

			const res = countConstruct(suffix, wordBank);
			if (res === 1) count += res;
		}
	}

	return count;
};

const countConstruct = (target, wordBank) => {
	if (target === '') return 1;
	let totalCount = 0;
	for (let prefix of wordBank) {
		if (target.startsWith(prefix)) {
			const numWaysForRest = countConstruct(
				target.replace(prefix, ''),
				wordBank
			);

			totalCount += numWaysForRest;
		}
	}

	return totalCount;
};

const countConstructMEMO = (target, wordBank, memo = {}) => {
	if (target in memo) return memo[target];
	if (target === '') return 1;
	let totalCount = 0;
	for (let prefix of wordBank) {
		if (target.startsWith(prefix)) {
			const numWaysForRest = countConstruct(
				target.replace(prefix, ''),
				wordBank,
				memo
			);

			totalCount += numWaysForRest;
		}
	}

	memo[target] = totalCount;
	return totalCount;
};

console.log(countConstructMEMO('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(
	countConstructMEMO('enterapotentpot', [
		'a',
		'p',
		'ent',
		'enter',
		'ot',
		'o',
		't',
	])
);
