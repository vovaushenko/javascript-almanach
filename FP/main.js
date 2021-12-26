'use strict';

const pipe =
	(...fns) =>
	(x) =>
		fns.reduce((v, f) => f(v), x);

const addOne = (x) => x + 1;
const square = (x) => x ** 2;
const double = (x) => x * 2;
const tripple = (x) => x * 3;

const complicatedCalc = pipe(addOne, square, square, double, tripple);

const res = complicatedCalc(2);
console.log(res);
