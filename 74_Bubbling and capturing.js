// Let’s start with an example.
// This handler is assigned to <div>, but also runs if you click any nested tag like <em> or <code>:
<div onclick="alert('The handler!')">
  <em>
    If you click on <code>EM</code>, the handler on <code>DIV</code> runs.
  </em>
</div>;

// 🟢Bubbling🟢

// When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

// Let’s say we have 3 nested elements FORM > DIV > P with a handler on each of them:
<form onclick="alert('form')">
  FORM
  <div onclick="alert('div')">
    DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>;
// A click on the inner <p> first runs onclick:

// On that <p>.
// Then on the outer <div>.
// Then on the outer <form>.
// And so on upwards till the document object.

// ❗ Almost all events bubble.
// For instance, a focus event does not bubble.

// 🟢event.target🟢

// A handler on a parent element can always get the details about where it actually happened.

// The most deeply nested element that caused the event is called a target element, accessible as event.target.

// ❗event.target – is the “target” element that initiated the event, it doesn’t change through the bubbling process.
// this – is the “current” element, the one that has a currently running handler on it.

// 🟢Stopping bubbling🟢

// A bubbling event goes from the target element straight up. Normally it goes upwards till <html>, and then to document object, and some events even reach window, calling all handlers on the path.

// But any handler may decide that the event has been fully processed and stop the bubbling.

// ❗The method for it is event.stopPropagation().

<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>;

// ❗event.stopImmediatePropagation()
// In other words, event.stopPropagation() stops the move upwards, but on the current element all other handlers will run.

// To stop the bubbling and prevent handlers on the current element from running, there’s a method event.stopImmediatePropagation(). After it no other handlers execute.
