// ================== Unique =======================================
const unique = (arr) => arr.filter((v, idx) => arr.indexOf(v) == idx);
const unique2 = (arr) =>
	arr.reduce(
		(list, v) => (list.indexOf(v) == -1 ? (list.push(v), list) : list),
		[]
	);
// =================================================================

// ================== Flatten ======================================

const flatten = (arr) =>
	arr.reduce((list, v) => list.concat(Array.isArray(v) ? flatten(v) : v), []);

console.log(flatten([[1, 2, 3], 4, 5, [6, [7, 8]]]));

// =================================================================

const flattenWithDepth = (arr, depth = Infinity) =>
	arr.reduce(
		(list, v) =>
			list.concat(
				depth > 0
					? depth > 1 && Array.isArray(v)
						? flatten(v, depth - 1)
						: v
					: [v]
			),
		[]
	);
