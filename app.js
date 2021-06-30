(async () => {
	const URLs = [
		'https://jsonplaceholder.typicode.com/users',
		'https://jsonplaceholder.typicode.com/albums',
		'https://jsonplaceholder.typicode.com/posts',
	];

	let requests = URLs.map(async (url) => await fetch(url));

	const res = await Promise.all(requests).then((responses) =>
		responses.map(async (res) => await res.json())
	);

	console.log(res);
})();
