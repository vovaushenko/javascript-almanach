const randomChar = () =>
	String.fromCharCode(Math.floor(Math.random() * 25) + 97);

setInterval(() => {
	const char = randomChar();
	process.stdout.write(char);
}, 500);
