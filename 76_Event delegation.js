// Capturing and bubbling allow us to implement one of most powerful event handling patterns called event delegation.

// https://javascript.info/event-delegation

// The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

// In the handler we get event.target to see where the event actually happened and handle it.

// Summary
// Event delegation is really cool! It’s one of the most helpful patterns for DOM events.

// It’s often used to add the same handling for many similar elements, but not only for that.

// The algorithm:

// 🟢Put a single handler on the container.
// 🟢In the handler – check the source element event.target.
// 🟢If the event happened inside an element that interests us, then handle the event.
