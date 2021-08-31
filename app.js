function Fruit({ smile, name }) {
	this.smile = smile;
	this.name = name;
}

const banana = new Fruit({ name: 'banana', smile: '🍌' });
console.log(banana);

const imitationOfFactory = ({ smile, name }) => {
	const newFruit = {};
	newFruit.smile = smile;
	newFruit.name = name;
	return newFruit;
};

console.log(imitationOfFactory({ name: 'tomato', smile: '🍅' }));

const apple = imitationOfFactory({ name: 'apple', smile: '🍏' });
const grape = imitationOfFactory({ name: 'grape', smile: '🍇' });

console.log(apple);
console.log(grape);
