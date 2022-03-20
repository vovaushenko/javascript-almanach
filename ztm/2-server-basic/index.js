const http = require('http');

const PORT = 4000;

const friends = [
	{
		id: 1,
		name: 'John Doe',
	},
	{
		id: 2,
		name: 'Alex Smith',
	},
	{
		id: 3,
		name: 'Sam Harris',
	},
	{
		id: 4,
		name: 'Joe Oppenheimer',
	},
];

const server = http.createServer((req, res) => {
	const [_, route, id] = req.url.split('/');

	switch (route) {
		case 'friends': {
			res.writeHead(200, {
				'Content-Type': 'application/json',
			});
			const foundFriend =
				friends.find((friend) => friend.id === +id) || 'no friend found';

			return res.end(JSON.stringify(foundFriend));
		}
		case 'baz': {
			res.writeHead(200, {
				'Content-Type': 'application/json',
			});
			return res.end(
				JSON.stringify({
					id: 1,
					name: 'Baz',
				})
			);
		}

		default: {
			res.writeHead(404, {
				'Content-Type': 'application/json',
			});
			res.end(
				JSON.stringify({
					id: 1,
					name: 'route does not exist',
				})
			);
		}
	}
});

server.listen(PORT, () => {
	console.log(`Server is running on the port ${PORT}`);
});
