export const toSingleObject = <
	T extends Record<PropertyKey, unknown>,
	K extends keyof T
>(
	arr: T[],
	key: K
): Record<string, T> =>
	Object.fromEntries(arr.map((item) => [item[key], item]));

console.log(
	toSingleObject(
		[
			{ type: 'vegetable', name: 'carrot' },
			{ type: 'vegetable', name: 'potato' },
			{ type: 'fruit', name: 'banana' },
			{ type: 'fruit', name: 'qiwi' },
		],
		'type'
	)
);
