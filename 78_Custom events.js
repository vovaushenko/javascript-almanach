// We can not only assign handlers, but also generate events from JavaScript.
// We can generate not only completely new events, that we invent for our own purposes, but also built-in ones, such as click, mousedown etc. That may be helpful for automated testing.

// 💚💚 Event constructor 💚💚

// let event = new Event(type[, options]);

// Arguments:

// 1️⃣type – event type, a string like "click" or our own like "my-event".
//2️⃣options – the object with two optional properties:
//     bubbles: true/false – if true, then the event bubbles.
//     cancelable: true/false – if true, then the “default action” may be prevented. Later we’ll see what it means for custom events.

// 💚💚 dispatchEvent 💚💚

// After an event object is created, we should “run” it on an element using the call elem.dispatchEvent(event).

// Then handlers react on it as if it were a regular browser event. If the event was created with the bubbles flag, then it bubbles.

<button id="elem" onclick="alert('Click!');">
  Autoclick
</button>;

{
  /* <script>
  let event = new Event("click");
  elem.dispatchEvent(event);
</script> */
}

//  💚 Bubbling example💚

// We can create a bubbling event with the name "hello" and catch it on document.

// catch on document...
document.addEventListener('hello', function (event) {
  // (1)
  alert('Hello from ' + event.target.tagName); // Hello from H1
});

// ...dispatch on elem!
let e = new Event('hello', { bubbles: true }); // (2)
target.dispatchEvent(e);

// the handler on document will activate and display the message.
