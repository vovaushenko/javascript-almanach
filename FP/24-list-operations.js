const double = (x) => x * 2;

const doubleList = (initList) =>
	initList.reduce((list, v) => (list.push(double(v)), list), []);

const res = doubleList([1, 2, 3, 4, 5]);
console.log(res);

// Filter as Reduce
const isOdd = (v) => v % 2 === 1;
console.log([1, 2, 3, 4, 5].filter(isOdd));

const filterReduce = (initList, predicate) =>
	initList.reduce((list, v) => {
		if (predicate(v)) list.push(v);
		return list;
	}, []);

console.log(filterReduce([1, 2, 3, 4, 5], isOdd));
