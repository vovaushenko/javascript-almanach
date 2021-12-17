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

// ================== ZIP=====================================
/*
zip( [1,3,5,7,9], [2,4,6,8,10] );
 [ [1,2], [3,4], [5,6], [7,8], [9,10] ]
*/

function zip(arr1, arr2) {
	var zipped = [];
	arr1 = [...arr1];
	arr2 = [...arr2];
	while (arr1.length > 0 && arr2.length > 0) {
		zipped.push([arr1.shift(), arr2.shift()]);
	}
	return zipped;
}

console.log(zip([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
// =================================================================

// ================== Merge =====================================
/*
mergeLists( [1,3,5,7,9], [2,4,6,8,10] );
 [1,2,3,4,5,6,7,8,9,10]
*/

const mergeLists = (arr1, arr2) => {
	const merged = [];
	arr1 = [...arr1];
	arr2 = [...arr2];

	while (arr1.length || arr2.length) {
		if (arr1.length) merged.push(arr1.shift());
		if (arr2.length) merged.push(arr2.shift());
	}
	return merged;
};
console.log(mergeLists([1, 3, 5, 7, 9], [2, 4]));
// =================================================================

// ================== Merge Reducer =====================================
const mergeReducer = (merged, v, idx) =>
	merged.slice(0, idx * 2).concat(v, merged.slice(idx * 2));
console.log([1, 3, 5, 7, 9].reduce(mergeReducer, [2, 4, 6, 8, 10]));
