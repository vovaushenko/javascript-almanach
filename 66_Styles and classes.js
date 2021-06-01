//  🟢🟢🟢 Styles and classes 🟢🟢🟢

// Changing a class is one of the most often used actions in scripts.

// 🟢🟢🟢 className and classList 🟢🟢🟢

// So for classes the similar-looking property "className" was introduced: the elem.className corresponds to the "class" attribute.

console.log(document.body.classList); //DOM token list
console.log(document.body.className); // String

// If we assign something to elem.className, it replaces the whole string of classes. Sometimes that’s what we need, but often we want to add/remove a single class.
// ❗❗❗There’s another property for that: elem.classList.❗❗❗

// 💚The elem.classList is a special object with methods to add/remove/toggle a single class.💚

document.body.classList.add('article');
console.log(document.body.classList);

// Methods of classList:

//  🍏  elem.classList.add/remove("class") – adds/removes the class.

//  🍏  elem.classList.toggle("class") – adds the class if it doesn’t exist, otherwise removes it.

//  🍏  elem.classList.contains("class") – checks for the given class, returns true/false.

// classList is iterable

// for (let name of document.body.classList) alert(name);

// 🟢🟢🟢 Element style 🟢🟢🟢

// The property elem.style is an object that corresponds to what’s written in the "style" attribute. Setting elem.style.width="100px" works the same as if we had in the attribute style a string width:100px.

// background-color  => elem.style.backgroundColor
// z-index           => elem.style.zIndex
// border-left-width => elem.style.borderLeftWidth

// 🟢🟢🟢 Resetting the style property 🟢🟢🟢

// Sometimes we want to assign a style property, and later remove it.

// For instance, to hide an element, we can set elem.style.display = "none".

setInterval(() => (document.body.style.display = ''), 1000);
setInterval(() => (document.body.style.display = 'none'), 2000);

// 🟢🟢 Full rewrite with style.cssText 🟢🟢

head.style.cssText = `color: red !important;
    background-color: yellow;
    width: 100px;
    text-align: center;
  `;

//  🟢🟢🟢🟢 Mind the units 🟢🟢🟢🟢

document.body.style.margin = '20px';
document.body.style.margin = 20; //does not work!

// 🟢🟢🟢🟢Computed styles: getComputedStyle🟢🟢🟢🟢

// So, modifying a style is easy. But how to read it?

// getComputedStyle

// getComputedStyle(element, [pseudo])
// Element to read the value for.
// A pseudo-element if required, for instance ::before. An empty string or no argument means the element itself.

let computedStyle = getComputedStyle(document.body);

console.log(computedStyle);
console.log(computedStyle.marginLeft);

// So nowadays getComputedStyle actually returns the resolved value of the property, usually in px for geometry.
