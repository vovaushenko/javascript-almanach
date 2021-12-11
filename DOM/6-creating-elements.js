const result = document.querySelector('#result');
const resultHeading = document.querySelector('.result-heading');

/**
 * ! APPEND CHILD
 */

// * CREATE EMPTY ELEMENT WITH
const bodyDiv = document.createElement('div');

// * CREATE TEXT NODES
const text = document.createTextNode('Foo Bar');

// * APPEND THE TEXT TO DIV

bodyDiv.appendChild(text);

//* APPEND BODY DIV TO DOCUMENT

result.appendChild(bodyDiv);

const list = [];

for (let i = 0; i < 10; i++) {
	const link = document.createElement('a');
	link.setAttribute('href', `/foo/${i}`);
	const linkText = document.createTextNode(`This is link #${i}`);
	link.appendChild(linkText);
	list.push(link);
}

list.forEach((link) => result.appendChild(link));

/**
 * ! INSERT BEFORE
 */
const beforeEl = document.createElement('div');
const beforeText = document.createTextNode('INSERTED BEFORE');
beforeEl.appendChild(beforeText);
// insertBefore(element, location)
result.insertBefore(beforeEl, resultHeading);
