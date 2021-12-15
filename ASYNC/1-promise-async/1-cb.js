const fs = require('fs');

// WE use promises not to have this callback hell

fs.readFile('file1.txt', 'utf8', (err, data1) => {
	console.log(err || data1.toString());
	fs.readFile('file2.txt', 'utf8', (err, data2) => {
		console.log(err || data2.toString());
		fs.readFile('file3.txt', 'utf8', (err, data3) => {
			console.log(err || data3.toString());
			console.log(`Final ${data1} ${data2} ${data3}`);
		});
	});
});
