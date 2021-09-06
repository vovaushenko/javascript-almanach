/*

Permutations
!Number => n!
[a,b,c]
*PERMUTATIONS
[c,b,a]
[b,c,a]
[b,a,c]
[c,a,b]
[a,c,b]
[a,b,c]
*/
//! TIME O(n!)
//! SPACE O(n*n)
const permutations = (elements) => {
	if (elements.length === 0) return [[]];
	const firstElement = elements[0];
	const rest = elements.slice(1);

	const permsWithoutFirst = permutations(rest);

	const allPermutations = [];

	permsWithoutFirst.forEach((perm) => {
		// i <= perm.length to insert element AFTER permutation
		for (let i = 0; i <= perm.length; i++) {
			const permWithFirst = [
				...perm.slice(0, i),
				firstElement,
				...perm.slice(i),
			];
			allPermutations.push(permWithFirst);
		}
	});

	return allPermutations;
};

console.log(permutations(['a', 'b', 'c']));
