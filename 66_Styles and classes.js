//  π’π’π’ Styles and classes π’π’π’

// Changing a class is one of the most often used actions in scripts.

// π’π’π’ className and classList π’π’π’

// So for classes the similar-looking property "className" was introduced: the elem.className corresponds to the "class" attribute.

console.log(document.body.classList); //DOM token list
console.log(document.body.className); // String

// If we assign something to elem.className, it replaces the whole string of classes. Sometimes thatβs what we need, but often we want to add/remove a single class.
// βββThereβs another property for that: elem.classList.βββ

// πThe elem.classList is a special object with methods to add/remove/toggle a single class.π

document.body.classList.add('article');
console.log(document.body.classList);

// Methods of classList:

//  π  elem.classList.add/remove("class") β adds/removes the class.

//  π  elem.classList.toggle("class") β adds the class if it doesnβt exist, otherwise removes it.

//  π  elem.classList.contains("class") β checks for the given class, returns true/false.

// classList is iterable

// for (let name of document.body.classList) alert(name);

// π’π’π’ Element style π’π’π’

// The property elem.style is an object that corresponds to whatβs written in the "style" attribute. Setting elem.style.width="100px" works the same as if we had in the attribute style a string width:100px.

// background-color  => elem.style.backgroundColor
// z-index           => elem.style.zIndex
// border-left-width => elem.style.borderLeftWidth

// π’π’π’ Resetting the style property π’π’π’

// Sometimes we want to assign a style property, and later remove it.

// For instance, to hide an element, we can set elem.style.display = "none".

setInterval(() => (document.body.style.display = ''), 1000);
setInterval(() => (document.body.style.display = 'none'), 2000);

// π’π’ Full rewrite with style.cssText π’π’

head.style.cssText = `color: red !important;
    background-color: yellow;
    width: 100px;
    text-align: center;
  `;

//  π’π’π’π’ Mind the units π’π’π’π’

document.body.style.margin = '20px';
document.body.style.margin = 20; //does not work!

// π’π’π’π’Computed styles: getComputedStyleπ’π’π’π’

// So, modifying a style is easy. But how to read it?

// getComputedStyle

// getComputedStyle(element, [pseudo])
// Element to read the value for.
// A pseudo-element if required, for instance ::before. An empty string or no argument means the element itself.

let computedStyle = getComputedStyle(document.body);

console.log(computedStyle);
console.log(computedStyle.marginLeft);

// So nowadays getComputedStyle actually returns the resolved value of the property, usually in px for geometry.
