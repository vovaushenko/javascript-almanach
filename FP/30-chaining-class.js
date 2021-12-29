class Text {
	constructor(s) {
		this.value = s;
	}

	line(p) {
		this.value += `\n` + '----' + '🍓' + p + '🍓' + '----';
		return this;
	}

	toString() {
		return this.value;
	}
}

const coolTxt = new Text('hey')
	.line('there')
	.line('how')
	.line('are')
	.line('you')
	.line('?');

console.log(coolTxt + '');
