const { log: ln } = Math;
const pow = Math.pow;
const sqrt = Math.sqrt;
const inc = (x) => ++x;
const add = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const log = (base, n) => ln(n) / ln(base);
const iff = (e, x1, x2) => (e ? x1 : x2);
const loop = (from, to, fn) => {
	for (let i = from; i <= to; i++) fn(i);
};

// basic expression
const expr1 = pow(5 * 8, 2) + (sqrt(20) + 1) / log(2, 7);
console.log(expr1);

// composition
const expr2 = add(pow(mul(5, 8), 2), div(inc(sqrt(20)), log(2, 7)));
console.log(expr2);
console.log('----simple loop----');
loop(5, 10, console.log);
console.log('----expressions loop----');
loop(5, 10, (x) => iff(x < 8, console.log, () => {})(x));

/**
 *!@COMPOSE FUNCTION

 * we get 2 functions "f" and "g"
 **in this compose, we compose functions right to left
 */

const compose2 = (f, g) => (x) => f(g(x));

// Usage
const upperFirst = (word) => word.charAt(0).toUpperCase() + word.slice(1);
const upperCapital = (s) => s.split(' ').map(upperFirst).join(' ');
const lower = (s) => s.toLowerCase();

const capitalize = compose2(upperCapital, lower);

const s = 'FOOO BAR BAZ FOO';

console.log('---compose result---');
console.log(capitalize(s));

/**
 *!@COMPOSE | PIPE | 2 FUNCTIONS| MULTIPLE ARGS
 */

const compose =
	(f, g) =>
	(...args) =>
		f(g(...args));

// pipe has reverse order of application, more natural, left to right
const pipe =
	(f, g) =>
	(...args) =>
		g(f(...args));

const str = 'HELLO THERE! HOPE YOU ARE FINE!';
console.log(str);
console.log(`lower('${s}') =  ${lower(s)}`);
console.log(`upperCapital('${s}') =  ${upperCapital(s)}`);

{
	console.log('====USE COMPOSE====');
	const capitalize = compose(upperCapital, lower);
	console.log(`capitalize('${s}') =  ${capitalize(s)}`);
}
{
	console.log('====USE PIPE====');
	const capitalize = pipe(lower, upperCapital);
	console.log(`capitalize('${s}') =  ${capitalize(s)}`);
}
