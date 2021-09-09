// Return 1 if brackets are correctly matched, return 0 otherwise

// "(hey)(there))" -> 0
//"(((hey)))t(here)" -> 1

const areBracketsBalanced = (str) => {
	const stack = [];
	for (let char of str) {
		if ('()'.includes(char)) {
			if (char === '(') {
				stack.push(char);
			} else {
				if (stack.length === 0) return 0;
				stack.pop(')');
			}
		}
	}
	console.log(stack);
	return stack.length === 0 ? 1 : 0;
};

console.log(areBracketsBalanced('(((hey)))t(here)'));
