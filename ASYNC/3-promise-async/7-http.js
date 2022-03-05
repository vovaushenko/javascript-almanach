const fetch = require('./6-fetch');

fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) =>
	console.log(res)
);
