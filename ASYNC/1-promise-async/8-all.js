import fetch from 'node-fetch';

fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => response.json())
	.then(({ title }) => console.log(title));

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

const URLS = [
	`${BASE_URL}/1`,
	`${BASE_URL}/2`,
	`${BASE_URL}/3`,
	`${BASE_URL}/4`,
];

const promises = [
	fetch(`${BASE_URL}/1`),
	fetch(`${BASE_URL}/2`),
	fetch(`${BASE_URL}/3`),
	fetch(`${BASE_URL}/4`),
];

console.log(promises);

Promise.race(promises)
	.then((response) => response.json())
	.then(({ id, title }) => console.log(`Promise #${id} won - ${title}`));

Promise.all(URLS.map((url) => fetch(url)))
	.then((resp) => Promise.all(resp.map((r) => r.json())))
	.then((results) => {
		for (let { id, title } of results)
			console.log(`🔥 task with id:${id} - title : ${title} 🔥`);
	});

const SERVER_URL = 'http://localhost:3000';

fetch(SERVER_URL + '/person')
	.then((res) => res.text())
	.then((data) => console.log('😀', data));
