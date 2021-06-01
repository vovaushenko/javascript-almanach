// 🟢🟢🟢 DOM tree 🟢🟢🟢

// According to the Document Object Model (DOM), every HTML tag is an object. Nested tags are “children” of the enclosing one. The text inside a tag is an object as well.

document.body.style.background = 'red';

setTimeout(() => (document.body.style.background = ''), 2000);

// Every tree node is an object.

//Tags are element nodes (or just elements) and form the tree structure: <html> is at the root, then <head> and <body> are its children, etc.

// The text inside elements forms text nodes, labelled as #text A text node contains only a string. It may not have children and is always a leaf of the tree.

// Spaces and newlines are totally valid characters, like letters and digits. They form text nodes and become a part of the DOM. So, for instance, in the example above the <head> tag contains some spaces before <title>, and that text becomes a #text node

// 🟢🟢🟢Autocorrection 🟢🟢🟢

// If the browser encounters malformed HTML, it automatically corrects it when making the DOM.

// 🟢🟢🟢 Other node types 🟢🟢🟢

// There are some other node types besides elements and text nodes.

// For example, comments:

// ❗❗❗But there’s a rule – if something’s in HTML, then it also must be in the DOM tree.❗❗❗
