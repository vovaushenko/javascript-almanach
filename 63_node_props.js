// 🟢🟢🟢 Node properties: type, tag and contents 🟢🟢🟢

// Different DOM nodes may have different properties. For instance, an element node corresponding to tag <a> has link-related properties, and the one corresponding to <input> has input-related properties and so on.

// ❗❗❗Each DOM node belongs to the corresponding built-in class.

// ❗The root of the hierarchy is EventTarget, that is inherited by Node, and other DOM nodes inherit from it.❗

// The classes are:

// 1) EventTarget – is the root “abstract” class. Objects of that class are never created. It serves as a base, so that all DOM nodes support so-called “events”, we’ll study them later.
// 2) Node – is also an “abstract” class, serving as a base for DOM nodes. It provides the core tree functionality: parentNode, nextSibling, childNodes and so on (they are getters). Objects of Node class are never created.
// 3) Element – is a base class for DOM elements. It provides element-level navigation like nextElementSibling, children and searching methods like getElementsByTagName, querySelector.
// 4)HTMLElement – is finally the basic class for all HTML elements. It is inherited by concrete HTML elements:
// HTMLInputElement – the class for <input> elements,
// HTMLBodyElement – the class for <body> elements,
// HTMLAnchorElement – the class for <a> elements,

console.log(document.body instanceof HTMLBodyElement); // true
console.log(document.body instanceof HTMLElement); // true
console.log(document.body instanceof Element); // true
console.log(document.body instanceof Node); // true
console.log(document.body instanceof EventTarget); // true

// 🟢🟢🟢 console.dir(elem) versus console.log(elem) 🟢🟢🟢

// But for DOM elements they are different:

// console.log(elem) shows the element DOM tree.
// console.dir(elem) shows the element as a DOM object, good to explore its properties.

console.log(document.body);
console.dir(document.body);

//  🟢🟢🟢 The “nodeType” property 🟢🟢🟢

// The nodeType property provides one more, “old-fashioned” way to get the “type” of a DOM node.

// It has a numeric value:

// elem.nodeType == 1 for element nodes,
// elem.nodeType == 3 for text nodes,
// elem.nodeType == 9 for the document object,

//  🟢🟢🟢 Tag: nodeName and tagName 🟢🟢🟢

// Given a DOM node, we can read its tag name from nodeName or tagName properties:
console.log(document.body.nodeName); // BODY
console.log(document.body.tagName); // BODY

// 🟢🟢🟢 innerHTML: the contents 🟢🟢🟢
// The innerHTML property allows to get the HTML inside the element as a string.
// We can also modify it. So it’s one of the most powerful ways to change the page.

document.body.innerHTML = 'The new BODY!';

//🟢🟢🟢  nodeValue/data: text node content🟢🟢🟢
// The innerHTML property is only valid for element nodes.

// Other node types, such as text nodes, have their counterpart: nodeValue and data properties.

// 🟢🟢🟢 textContent: pure text 🟢🟢🟢

// The textContent provides access to the text inside the element: only text, minus all <tags>.
document.body.textContent = 'Cool';
// ❗Writing to textContent is much more useful, because it allows to write text the “safe way”.❗

// 🟢🟢🟢 The “hidden” property 🟢🟢🟢
// The “hidden” attribute and the DOM property specifies whether the element is visible or not.

// We can use it in HTML or assign it using JavaScript, like this:

{
  /* <div>Both divs below are hidden</div>

<div hidden>With the attribute "hidden"</div>

<div id="elem">JavaScript assigned the property "hidden"</div>

<script>
  elem.hidden = true;
</script> */
}

// ❗❗❗Technically, hidden works the same as style="display:none"❗❗❗
