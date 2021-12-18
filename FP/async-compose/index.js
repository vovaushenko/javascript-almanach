const add = async (x) => ++x;

add(1)
	.then((r) => {
		return add(r + 2);
	})
	.then((r2) => {
		return add(r2 + 3);
	})
	.then(console.log);
