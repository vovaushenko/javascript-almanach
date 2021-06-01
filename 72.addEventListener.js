// addEventListener

//💚 The fundamental problem of the aforementioned ways to assign handlers – we can’t assign multiple handlers to one event.💚

// Let’s say, one part of our code wants to highlight a button on click, and another one wants to show a message on the same click.

// We’d like to assign two event handlers for that. But a new DOM property will overwrite the existing one:

input.onclick = function () {
  alert(1);
};
// ...
input.onclick = function () {
  alert(2);
}; // replaces the previous handler

// Developers of web standards understood that long ago and suggested an alternative way of managing handlers using special methods addEventListener and removeEventListener.

//🍏 element.addEventListener(event, handler, [options]); 🍏

// options
// An additional optional object with properties:
// once: if true, then the listener is automatically removed after it triggers.
// capture: the phase where to handle the event, to be covered later in the chapter Bubbling and capturing. For historical reasons, options can also be false/true, that’s the same as {capture: false/true}.
// passive: if true, then the handler will not call preventDefault(), we’ll explain that later in Browser default actions.

// To remove the handler, use removeEventListener:
// element.removeEventListener(event, handler, [options]);

// ❗❗❗ Here’s the right way: ❗❗❗

function handler() {
  alert('Thanks!');
}

input.addEventListener('click', handler);
// ....
input.removeEventListener('click', handler);

//❗❗  Please note – if we don’t store the function in a variable, then we can’t remove it.❗❗

const targetBtn = document.querySelector('.dummy-target');

const handler1 = () => alert('HELLO');
const handler2 = () => alert('BYE BYE');

console.log(targetBtn);

targetBtn.addEventListener('click', handler1);
targetBtn.addEventListener('click', handler2);
targetBtn.addEventListener('mouseenter', handler1);

// 🟢🟢🟢 For some events, handlers only work with addEventListener 🟢🟢🟢

// There exist events that can’t be assigned via a DOM-property. Only with addEventListener.

// For instance, the DOMContentLoaded event, that triggers when the document is loaded and DOM is built.

// ❗❗❗❗❗ will never run
// document.onDOMContentLoaded = function() {
//     alert("DOM built");
//   };

// // this way it works
document.addEventListener('DOMContentLoaded', function () {
  alert('DOM built');
});
