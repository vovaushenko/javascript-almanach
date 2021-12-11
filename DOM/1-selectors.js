/**
 ** GET BY TAG NAME
 */
const headings = document.getElementsByTagName('h2');

for (const heading of headings) {
	console.log(heading);
}
/**
 ** GET BY CLASS NAME
 */

const heading = document.getElementsByClassName('main__header');
const normal = Array.from(heading);
normal[0].textContent = 'COOL';

/**
 ** QUERY SELECTORS
 */

const foo = document.querySelector('#foo');
foo.style.backgroundColor = 'greenyellow';

const specials = document.querySelectorAll('.special');
console.log(specials);

const last = document.querySelector('p:last-child');

last.style.color = 'red';
