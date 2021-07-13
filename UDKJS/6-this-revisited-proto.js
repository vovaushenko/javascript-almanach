// We covered the this keyword earlier, but its true importance shines when considering how it powers prototype-delegated function calls. Indeed, one of the main reasons this supports dynamic context based on how the function is called is so that method calls on objects which delegate through the prototype chain still maintain the expected this.
var homework = {
	study() {
		console.log(`Please study ${this.topic}`);
	},
};

var jsHomework = Object.create(homework);
jsHomework.topic = 'JS';
jsHomework.study();
// Please study JS

var mathHomework = Object.create(homework);
mathHomework.topic = 'Math';

// Please study Math
