const item = document.querySelector('.special');

//* ACCESS TEXT VALUES
const { nodeValue } = item; // null
const { childNodes } = item;
// how to get
const value = item.firstChild.nodeValue;
console.log(value);
console.log(item.firstChild);
console.log(nodeValue);
console.log(childNodes);

//* TEXT CONTENT VALUES
const easyValue = item.textContent;
console.log('easyValue', easyValue);
