// 🟢🟢🟢 Walking the DOM 🟢🟢🟢
// The DOM allows us to do anything with elements and their contents, but first we need to reach the corresponding DOM object.

// ❗❗❗ All operations on the DOM start with the document

// 🟢🟢🟢On top: documentElement and body🟢🟢🟢

// <html> = document.documentElement
// <body> = document.body
// <head> = document.head

// ❗❗There’s a catch: document.body can be null❗❗
// In particular, if a script is inside <head>, then document.body is unavailable, because the browser did not read it yet.

// 🟢In the DOM world null means “doesn’t exist”

// 🟢🟢🟢 Children: childNodes, firstChild, lastChild 🟢🟢🟢

for (let node of document.body.childNodes) {
  alert(node);
}

// Properties firstChild and lastChild give fast access to the first and last children.
// elem.childNodes[0] === elem.firstChild;

// 🟢🟢🟢 DOM collections 🟢🟢🟢

// As we can see, childNodes looks like an array. But actually it’s not an array, but rather a collection – a special array-like iterable object.

// There are two important consequences:

// 1) ❗ We can use for..of to iterate over it:
// 2) ❗ Array methods won’t work, because it’s not an array:

// but we can create this array
alert(Array.from(document.body.childNodes).filter);

// ❗❗❗❗❗❗❗❗❗❗❗❗❗❗RULES❗❗❗❗❗❗❗❗❗❗❗❗❗
// DOM collections are read-only
// DOM collections are live.In other words, they reflect the current state of DOM.
// Don’t use for..in to loop over collections

// 🟢🟢🟢  Siblings and the parent 🟢🟢🟢
// Siblings are nodes that are children of the same parent.
// For instance, here <head> and <body> are siblings:
alert(document.head.nextSibling);
alert(document.body.previousSibling);

// 🟢🟢🟢 Element-only navigation 🟢🟢🟢
// Navigation properties listed above refer to all nodes. For instance, in childNodes we can see both text nodes, element nodes, and even comment nodes if there exist.

// The links are similar to those given above, just with Element word inside:
// ❗❗❗
// children
// firstElementChild
// lastElementChild
// previousElementSibling
// nextElementSibling
// parentElement – parent element.

for (let elem of document.body.children) {
  console.log(elem); // DIV, UL, DIV, SCRIPT
}
