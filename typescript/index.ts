// compose, curry

type PureFunction<T> = (val: T) => T;

const compose =
	<T>(...fns: PureFunction<T>[]) =>
	(intialArg: T) =>
		fns.reduce((v, f) => f(v), intialArg);

const inc = (v: number): number => v + 1;
const dec = (v: number): number => v - 1;
const double = (v: number): number => v * 2;

const sophisticated = compose(inc, dec, double);

console.log(sophisticated(5));

export {};
