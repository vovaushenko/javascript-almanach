// https://javascript.info/shadow-dom-events

// The idea behind shadow tree is to encapsulate internal implementation details of a component.

// Let’s say, a click event happens inside a shadow DOM of <user-card> component. But scripts in the main document have no idea about the shadow DOM internals, especially if the component comes from a 3rd-party library.

// ❗❗❗ So, to keep the details encapsulated, the browser retargets the event. ❗❗❗

//❗❗❗ Events that happen in shadow DOM have the host element as the target, when caught outside of the component. ❗❗❗

// ❗❗ Retargeting does not occur if the event occurs on a slotted element, that physically lives in the light DOM.

// 🟢 Bubbling, event.composedPath() 🟢

// For purposes of event bubbling, flattened DOM is used.

// So, if we have a slotted element, and an event occurs somewhere inside it, then it bubbles up to the <slot> and upwards.

// The full path to the original event target, with all the shadow elements, can be obtained using event.composedPath(). As we can see from the name of the method, that path is taken after the composition.

// 🟢  event.composed 🟢

// Most events successfully bubble through a shadow DOM boundary. There are few events that do not.

// This is governed by the composed event object property. If it’s true, then the event does cross the boundary. Otherwise, it only can be caught from inside the shadow DOM.

// If you take a look at UI Events specification, most events have composed: true:

// There are some events that have composed: false though:

// 🌟mouseenter, mouseleave (they do not bubble at all),
// 🌟load, unload, abort, error,
// 🌟select,
// 🌟slotchange.
