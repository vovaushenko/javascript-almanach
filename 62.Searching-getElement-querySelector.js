//  π’π’π’Searching: getElement*, querySelector*π’π’π’

// π document.getElementById or just id π

// If an element has the id attribute, we can get the element using the method document.getElementById(id), no matter where it is.

let elem = document.getElementById('element');
elem.style.background = 'red';

// βββAlso, thereβs a global variable named by id that references the element:
elem.style.background = 'blue';
// βββThe id must be unique

// πππππππ querySelectorAllπππππππ
// By far, the most versatile method, elem.querySelectorAll(css) returns all elements inside elem matching the given CSS selector.

let elements = document.querySelectorAll('ul > li:last-child');
console.log(elements);

for (let elem of elements) console.log(elem.innerHTML);

// βββ This method is indeed powerful, because any CSS selector can be used.
// Pseudo-classes in the CSS selector like :hover and :active are also supported. For instance, document.querySelectorAll(':hover') will return the collection with elements that the pointer is over now (in nesting order: from the outermost <html> to the most nested one).

//πππππππ querySelector πππππππ
// The call to elem.querySelector(css) returns the first element for the given CSS selector.
// In other words, the result is the same as elem.querySelectorAll(css)[0]

// πππ matches πππ
// Previous methods were searching the DOM.

// The elem.matches(css) does not look for anything, it merely checks if elem matches the given CSS-selector. It returns true or false.

//πππ getElementsBy*πππ

let divs = document.getElementsByTagName('div');
let uls = table.getElementsByTagName('ul');
// βββIt returns a collection, not an element!

// ππππππππππππLive collectionsππππππππππππ

// βββββββββAll methods "getElementsBy*" return a live collection. Such collections always reflect the current state of the document and βauto-updateβ when it changes.βββββββββ

// In contrast, querySelectorAll returns a static collection. Itβs like a fixed array of elements.
