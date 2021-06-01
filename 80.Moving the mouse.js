// 🟢 Events mouseover/mouseout, relatedTarget 🟢

// These events are special, because they have property relatedTarget. This property complements target. When a mouse leaves one element for another, one of them becomes target, and the other one – relatedTarget.

// For mouseover:

// event.target – is the element where the mouse came over.
// event.relatedTarget – is the element from which the mouse came (relatedTarget → target).

// For mouseout the reverse:

// event.target – is the element that the mouse left.
// event.relatedTarget – is the new under-the-pointer element, that mouse left for (target → relatedTarget).

// 🟢Skipping elements🟢

// The browser checks the mouse position from time to time. And if it notices changes then triggers the events.

// That means that if the visitor is moving the mouse very fast then some DOM-elements may be skipped:

//🟢Events mouseenter and mouseleave🟢

// Events mouseenter/mouseleave are like mouseover/mouseout. They trigger when the mouse pointer enters/leaves the element.

// But there are two important differences:

// 1️⃣Transitions inside the element, to/from descendants, are not counted.
// 2️⃣Events mouseenter/mouseleave do not bubble.

const txtSection = document.querySelector('.text-section');

txtSection.addEventListener('mouseenter', () => {
  txtSection.style.background = 'red';
});
txtSection.addEventListener('mouseleave', () => {
  txtSection.style.background = '';
});

// 🟢Event delegation🟢
// Events mouseenter/leave are very simple and easy to use. But they do not bubble. So we can’t use event delegation with them.

// So, let’s use mouseover/mouseout.
