'use strict';
const compose =
	(...fns) =>
	(x) =>
		fns.reverse().reduce((v, f) => f(v), x);

const pipe =
	(...fns) =>
	(x) =>
		fns.reduce((v, f) => f(v), x);

// USE
const upperFirst = (word) => word.charAt(0).toUpperCase() + word.slice(1);
const upperCapital = (s) => s.split(' ').map(upperFirst).join(' ');
const lower = (s) => s.toLowerCase();
const trim = (s) => s.trim();

const s = '     HELLO THERE     ';

console.log(s);

console.log(`lower('${s}') =  ${lower(s)}`);
console.log(`upperCapital('${s}') =  ${upperCapital(s)}`);

{
	console.log('--- USE COMPOSE ----');
	const capitalize = compose(upperCapital, lower, trim);
	console.log(`capitalize('${s}') =  ${capitalize(s)}`);
}
{
	console.log('--- USE PIPE ----');
	const capitalize = pipe(trim, lower, upperCapital);
	console.log(`capitalize('${s}') =  ${capitalize(s)}`);
}

/**
 *!COMPOSE WITH FUNCTIONS
 */
{
	const compose2 =
		(...fns) =>
		(x) => {
			// return x or throw Error
			if (!fns.length) return x;

			const last = fns.length - 1;
			let res = x;
			for (let i = last; i >= 0; i--) {
				res = fns[i](res);
			}

			return res;
		};

	const pipe2 =
		(...fns) =>
		(x) => {
			// return x or throw Error
			if (!fns.length) return x;

			let res = fns[0](x);
			for (let i = 1; i < fns.length; i++) {
				res = fns[i](res);
			}

			return res;
		};

	{
		console.log('--- USE COMPOSE FUNCTIONS ----');
		const capitalize = compose2(upperCapital, lower, trim);
		console.log(`capitalize('${s}') =  ${capitalize(s)}`);
	}
	{
		console.log('--- USE PIPE FUNCTIONS----');
		const capitalize = pipe2(trim, lower, upperCapital);
		console.log(`capitalize('${s}') =  ${capitalize(s)}`);
	}
}

/**
 *!RECURSIVE COMPOSE & PIPE
 */

{
	const composeRec =
		(...fns) =>
		(x) => {
			if (fns.length === 0) return x;
			const fn = fns.pop();
			const res = fn(x);
			if (!fns.length) return res;
			return composeRec(...fns)(res);
		};

	const pipeRec =
		(...fns) =>
		(x) => {
			if (fns.length === 0) return x;
			const fn = fns.shift();
			const res = fn(x);
			if (fns.length === 0) return res;
			return pipeRec(...fns)(res);
		};

	{
		console.log('--- USE RECURSIVE COMPOSE ----');
		const capitalize = composeRec(upperCapital, lower, trim);
		console.log(`capitalize('${s}') =  ${capitalize(s)}`);
	}
	{
		console.log('--- USE RECURSIVE PIPE----');
		const capitalize = pipeRec(trim, lower, upperCapital);
		console.log(`capitalize('${s}') =  ${capitalize(s)}`);
	}
}
