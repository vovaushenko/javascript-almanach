// addEventListener

//๐ The fundamental problem of the aforementioned ways to assign handlers โ we canโt assign multiple handlers to one event.๐

// Letโs say, one part of our code wants to highlight a button on click, and another one wants to show a message on the same click.

// Weโd like to assign two event handlers for that. But a new DOM property will overwrite the existing one:

input.onclick = function () {
  alert(1);
};
// ...
input.onclick = function () {
  alert(2);
}; // replaces the previous handler

// Developers of web standards understood that long ago and suggested an alternative way of managing handlers using special methods addEventListener and removeEventListener.

//๐ element.addEventListener(event, handler, [options]); ๐

// options
// An additional optional object with properties:
// once: if true, then the listener is automatically removed after it triggers.
// capture: the phase where to handle the event, to be covered later in the chapter Bubbling and capturing. For historical reasons, options can also be false/true, thatโs the same as {capture: false/true}.
// passive: if true, then the handler will not call preventDefault(), weโll explain that later in Browser default actions.

// To remove the handler, use removeEventListener:
// element.removeEventListener(event, handler, [options]);

// โโโ Hereโs the right way: โโโ

function handler() {
  alert('Thanks!');
}

input.addEventListener('click', handler);
// ....
input.removeEventListener('click', handler);

//โโ  Please note โ if we donโt store the function in a variable, then we canโt remove it.โโ

const targetBtn = document.querySelector('.dummy-target');

const handler1 = () => alert('HELLO');
const handler2 = () => alert('BYE BYE');

console.log(targetBtn);

targetBtn.addEventListener('click', handler1);
targetBtn.addEventListener('click', handler2);
targetBtn.addEventListener('mouseenter', handler1);

// ๐ข๐ข๐ข For some events, handlers only work with addEventListener ๐ข๐ข๐ข

// There exist events that canโt be assigned via a DOM-property. Only with addEventListener.

// For instance, the DOMContentLoaded event, that triggers when the document is loaded and DOM is built.

// โโโโโ will never run
// document.onDOMContentLoaded = function() {
//     alert("DOM built");
//   };

// // this way it works
document.addEventListener('DOMContentLoaded', function () {
  alert('DOM built');
});
