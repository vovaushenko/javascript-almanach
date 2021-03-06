// π’π’π’ Walking the DOM π’π’π’
// The DOM allows us to do anything with elements and their contents, but first we need to reach the corresponding DOM object.

// βββ All operations on the DOM start with the document

// π’π’π’On top: documentElement and bodyπ’π’π’

// <html> = document.documentElement
// <body> = document.body
// <head> = document.head

// ββThereβs a catch: document.body can be nullββ
// In particular, if a script is inside <head>, then document.body is unavailable, because the browser did not read it yet.

// π’In the DOM world null means βdoesnβt existβ

// π’π’π’ Children: childNodes, firstChild, lastChild π’π’π’

for (let node of document.body.childNodes) {
  alert(node);
}

// Properties firstChild and lastChild give fast access to the first and last children.
// elem.childNodes[0] === elem.firstChild;

// π’π’π’ DOM collections π’π’π’

// As we can see, childNodes looks like an array. But actually itβs not an array, but rather a collection β a special array-like iterable object.

// There are two important consequences:

// 1) β We can use for..of to iterate over it:
// 2) β Array methods wonβt work, because itβs not an array:

// but we can create this array
alert(Array.from(document.body.childNodes).filter);

// ββββββββββββββRULESβββββββββββββ
// DOM collections are read-only
// DOM collections are live.In other words, they reflect the current state of DOM.
// Donβt use for..in to loop over collections

// π’π’π’  Siblings and the parent π’π’π’
// Siblings are nodes that are children of the same parent.
// For instance, here <head> and <body> are siblings:
alert(document.head.nextSibling);
alert(document.body.previousSibling);

// π’π’π’ Element-only navigation π’π’π’
// Navigation properties listed above refer to all nodes. For instance, in childNodes we can see both text nodes, element nodes, and even comment nodes if there exist.

// The links are similar to those given above, just with Element word inside:
// βββ
// children
// firstElementChild
// lastElementChild
// previousElementSibling
// nextElementSibling
// parentElement β parent element.

for (let elem of document.body.children) {
  console.log(elem); // DIV, UL, DIV, SCRIPT
}
