// https://www.codewars.com/kata/56b7251b81290caf76000978

const getLastDigit = (id) => {};

const getFibByID = (id, memo = [0, 1]) =>
	memo.length === id
		? memo[id - 1]
		: memo.push(memo[memo.length - 1] + memo[memo.length - 2]);

console.log(getFibByID(5));
