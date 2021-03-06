//  π’π’π’π’  Modifying the document π’π’π’π’

// DOM modification is the key to creating βliveβ pages.

// π’π’π’ Creating an element π’π’π’

// To create DOM nodes, there are two methods:
// 1) document.createElement(tag)

let div1 = document.createElement('div');

// 2) document.createTextNode(text)

let textNode1 = document.createTextNode('Hello World');

// π Creating the message

let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = '<strong>Hey</strong> This is an important message';

// Weβve created the element. But as of now itβs only in a variable named div, not in the page yet. So we canβt see it.

// π’π’π’ Insertion methods π’π’π’

// Thereβs a special method append for that: document.body.append(div).

document.body.append(div);

// βββHere we called append on document.body, but we can call append method on any other element, to put another element into it. For instance, we can append something to <div> by calling div.append(anotherElement).βββ

// Here are more insertion methods, they specify different places where to insert:

// node.append(...nodes or strings) β append nodes or strings at the end of node,
// node.prepend(...nodes or strings) β insert nodes or strings at the beginning of node,
// node.before(...nodes or strings) β- insert nodes or strings before node,
// node.after(...nodes or strings) β- insert nodes or strings after node,
// node.replaceWith(...nodes or strings) β- replaces node with the given nodes or strings.

// π’ReplaceWIthπ’
let head = document.querySelector('#head');
let newHead = document.createElement('h2');
newHead.innerText = 'COOL';
head.replaceWith(newHead);

// ββββ// before
// <ol id="ol">
//   <li>prepend</li>
//   <li>0</li>
//   <li>1</li>
//   <li>2</li>
//   <li>append</li>
// </ol>
// after βββ

// π’π’π’ insertAdjacentHTML/Text/Element π’π’π’
// But what if weβd like to insert an HTML string βas htmlβ, with all tags and stuff working, in the same manner as elem.innerHTML does it?

// The first parameter is a code word, specifying where to insert relative to elem. Must be one of the following:

// "beforebegin" β insert html immediately before elem,
// "afterbegin" β insert html into elem, at the beginning,
// "beforeend" β insert html into elem, at the end,
// "afterend" β insert html immediately after elem.

element.insertAdjacentHTML('beforebegin', '<p>HELLO WORLD!</p>');
element.insertAdjacentHTML('afterend', '<h1>CHAO</h1>');

// π’The method has two brothers:

// elem.insertAdjacentText(where, text) β the same syntax, but a string of text is inserted βas textβ instead of HTML,
// elem.insertAdjacentElement(where, elem) β the same syntax, but inserts an element.

// π’π’π’ Node removal π’π’π’

// To remove a node, thereβs a method node.remove().

let div3 = document.createElement('div');
div3.className = 'alert';
div3.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

document.body.append(div3);
setTimeout(() => div3.remove(), 2000);

// π’π’π’ Cloning nodes: cloneNode π’π’π’
// Sometimes when we have a big element, that may be faster and simpler.

// The call elem.cloneNode(true) creates a βdeepβ clone of the element β with all attributes and subelements. If we call elem.cloneNode(false), then the clone is made without child elements.

let div4 = div3.cloneNode(true); // clone the message
div4.querySelector('strong').innerHTML = 'Its Cloned!'; // change the clone

div.after(div4); // show the clone after the existing div
