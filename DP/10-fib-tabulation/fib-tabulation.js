const fibTabulation = (n) => {
	const table = Array(n + 1).fill(0);
	table[1] = 1;
	for (let i = 0; i <= n; i++) {
		table[i + 1] += table[i];
		table[i + 2] += table[i];
	}
	return table[n];
};

const fibonacci = (n, fibs = [0, 1]) =>
	fibs.length === n + 1
		? fibs[n]
		: fibonacci(n, [...fibs, fibs[fibs.length - 1] + fibs[fibs.length - 2]]);

console.log(fib(5));

console.log(fibTabulation(6));
