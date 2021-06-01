//  🟢🟢🟢Searching: getElement*, querySelector*🟢🟢🟢

// 🍏 document.getElementById or just id 🍏

// If an element has the id attribute, we can get the element using the method document.getElementById(id), no matter where it is.

let elem = document.getElementById('element');
elem.style.background = 'red';

// ❗❗❗Also, there’s a global variable named by id that references the element:
elem.style.background = 'blue';
// ❗❗❗The id must be unique

// 🍏🍏🍏🍏🍏🍏🍏 querySelectorAll🍏🍏🍏🍏🍏🍏🍏
// By far, the most versatile method, elem.querySelectorAll(css) returns all elements inside elem matching the given CSS selector.

let elements = document.querySelectorAll('ul > li:last-child');
console.log(elements);

for (let elem of elements) console.log(elem.innerHTML);

// ❗❗❗ This method is indeed powerful, because any CSS selector can be used.
// Pseudo-classes in the CSS selector like :hover and :active are also supported. For instance, document.querySelectorAll(':hover') will return the collection with elements that the pointer is over now (in nesting order: from the outermost <html> to the most nested one).

//🍏🍏🍏🍏🍏🍏🍏 querySelector 🍏🍏🍏🍏🍏🍏🍏
// The call to elem.querySelector(css) returns the first element for the given CSS selector.
// In other words, the result is the same as elem.querySelectorAll(css)[0]

// 🍏🍏🍏 matches 🍏🍏🍏
// Previous methods were searching the DOM.

// The elem.matches(css) does not look for anything, it merely checks if elem matches the given CSS-selector. It returns true or false.

//🍏🍏🍏 getElementsBy*🍏🍏🍏

let divs = document.getElementsByTagName('div');
let uls = table.getElementsByTagName('ul');
// ❗❗❗It returns a collection, not an element!

// 🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏Live collections🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏

// ❗❗❗❗❗❗❗❗❗All methods "getElementsBy*" return a live collection. Such collections always reflect the current state of the document and “auto-update” when it changes.❗❗❗❗❗❗❗❗❗

// In contrast, querySelectorAll returns a static collection. It’s like a fixed array of elements.
