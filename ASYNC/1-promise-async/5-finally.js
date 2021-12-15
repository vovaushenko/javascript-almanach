const fs = require('fs');

const readTextFile = (filename) => fs.promises.readFile(filename, 'utf-8');

readTextFile('../file23.txt', 'utf8')
	.then((data) => {
		console.dir({ file1: data });
	})
	.catch((err) => {
		console.log('Cannot read file1');
		console.log(err);
	})
	.finally(() => {
		console.log('⭐ Finally ⭐');
	});
