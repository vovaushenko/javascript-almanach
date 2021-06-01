//  🟢🟢🟢🟢  Modifying the document 🟢🟢🟢🟢

// DOM modification is the key to creating “live” pages.

// 🟢🟢🟢 Creating an element 🟢🟢🟢

// To create DOM nodes, there are two methods:
// 1) document.createElement(tag)

let div1 = document.createElement('div');

// 2) document.createTextNode(text)

let textNode1 = document.createTextNode('Hello World');

// 💚 Creating the message

let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = '<strong>Hey</strong> This is an important message';

// We’ve created the element. But as of now it’s only in a variable named div, not in the page yet. So we can’t see it.

// 🟢🟢🟢 Insertion methods 🟢🟢🟢

// There’s a special method append for that: document.body.append(div).

document.body.append(div);

// ❗❗❗Here we called append on document.body, but we can call append method on any other element, to put another element into it. For instance, we can append something to <div> by calling div.append(anotherElement).❗❗❗

// Here are more insertion methods, they specify different places where to insert:

// node.append(...nodes or strings) – append nodes or strings at the end of node,
// node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node,
// node.before(...nodes or strings) –- insert nodes or strings before node,
// node.after(...nodes or strings) –- insert nodes or strings after node,
// node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.

// 🟢ReplaceWIth🟢
let head = document.querySelector('#head');
let newHead = document.createElement('h2');
newHead.innerText = 'COOL';
head.replaceWith(newHead);

// ❗❗❗❗// before
// <ol id="ol">
//   <li>prepend</li>
//   <li>0</li>
//   <li>1</li>
//   <li>2</li>
//   <li>append</li>
// </ol>
// after ❗❗❗

// 🟢🟢🟢 insertAdjacentHTML/Text/Element 🟢🟢🟢
// But what if we’d like to insert an HTML string “as html”, with all tags and stuff working, in the same manner as elem.innerHTML does it?

// The first parameter is a code word, specifying where to insert relative to elem. Must be one of the following:

// "beforebegin" – insert html immediately before elem,
// "afterbegin" – insert html into elem, at the beginning,
// "beforeend" – insert html into elem, at the end,
// "afterend" – insert html immediately after elem.

element.insertAdjacentHTML('beforebegin', '<p>HELLO WORLD!</p>');
element.insertAdjacentHTML('afterend', '<h1>CHAO</h1>');

// 🟢The method has two brothers:

// elem.insertAdjacentText(where, text) – the same syntax, but a string of text is inserted “as text” instead of HTML,
// elem.insertAdjacentElement(where, elem) – the same syntax, but inserts an element.

// 🟢🟢🟢 Node removal 🟢🟢🟢

// To remove a node, there’s a method node.remove().

let div3 = document.createElement('div');
div3.className = 'alert';
div3.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

document.body.append(div3);
setTimeout(() => div3.remove(), 2000);

// 🟢🟢🟢 Cloning nodes: cloneNode 🟢🟢🟢
// Sometimes when we have a big element, that may be faster and simpler.

// The call elem.cloneNode(true) creates a “deep” clone of the element – with all attributes and subelements. If we call elem.cloneNode(false), then the clone is made without child elements.

let div4 = div3.cloneNode(true); // clone the message
div4.querySelector('strong').innerHTML = 'Its Cloned!'; // change the clone

div.after(div4); // show the clone after the existing div
