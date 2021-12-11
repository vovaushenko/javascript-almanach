// DP - review
// can sum memo ✅, how sum ✅
// canConstruct

const canConstruct = (target, wordBank) => {
	if (target === '') return true;

	for (const prefix of wordBank) {
		if (target.startsWith(prefix)) {
			const suffix = target.replace(prefix, '');
			if (canConstruct(suffix, wordBank)) {
				return true;
			}
		}
	}

	return false;
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
