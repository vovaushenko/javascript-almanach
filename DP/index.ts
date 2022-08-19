export {};

type PureFunction = <T>(val: T) => T;

const compose =
	<T>(...fns: PureFunction[]) =>
	(initialArg: T): T =>
		fns.reduce((v, f) => f(v), initialArg);
