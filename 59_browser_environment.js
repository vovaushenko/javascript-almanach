// Here’s a bird’s-eye view of what we have when JavaScript runs in a web browser:

// window
// DOM - > document
// BOM -> navigator, screen, location, frames, history, XMLhttpReq
// JavaScript -> Object, Array, Function

// 🟢There’s a “root” object called window. It has two roles🟢:

// 🟢First, it is a global object for JavaScript code, as described in the chapter Global object.
// 🟢Second, it represents the “browser window” and provides methods to control it.

// For instance, here we use it as a global object:

function globalSayHi() {
  alert('Hello! 🥰');
}
window.globalSayHi();

alert(window.innerHeight);

// 🟩🟩🟩 DOM (Document Object Model) 🟩🟩🟩
// Document Object Model, or DOM for short, represents all page content as objects that can be modified.

// The document object is the main “entry point” to the page. We can change or create anything on the page using it.

document.body.style.background = 'red';
setTimeout(() => (document.body.style.background = ''), 1000);

// ❗❗❗DOM is not only for browsers❗❗❗

//❗❗❗ CSSOM for styling
// There’s also a separate specification, CSS Object Model (CSSOM) for CSS rules and stylesheets, that explains how they are represented as objects, and how to read and write them.

//  🟩🟩🟩 BOM (Browser Object Model) 🟩🟩🟩

// The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.

// For instance:
// The navigator object provides background information about the browser and the operating system.
// The location object allows us to read the current URL and can redirect the browser to a new one.

alert(location.href); // shows current URL
if (confirm('Go to Wikipedia?')) {
  location.href = 'https://wikipedia.org'; // redirect the browser to another URL
}
