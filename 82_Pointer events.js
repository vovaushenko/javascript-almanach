// Pointer events are a modern way to handle input from a variety of pointing devices, such as a mouse, a pen/stylus, a touchscreen, and so on.

// Pointer events allow handling mouse, touch and pen events simultaneously, with a single piece of code.

// Pointer events extend mouse events. We can replace mouse with pointer in event names and expect our code to continue working for mouse, with better support for other device types.

// For drag’n’drops and complex touch interactions that the browser may decide to hijack and handle on its own – remember to cancel the default action on events and set touch-events: none in CSS for elements that we engage.

// 📗Additional abilities of pointer events are:

// 1️⃣Multi-touch support using pointerId and isPrimary.
// 2️⃣Device-specific properties, such as pressure, width/height, and others.
// 3️⃣Pointer capturing: we can retarget all pointer events to a specific element until pointerup/pointercancel.

// As of now, pointer events are supported in all major browsers, so we can safely switch to them, especially if IE10- and Safari 12- are not needed. And even with those browsers, there are polyfills that enable the support of pointer events.

// Pointer event	          Similar mouse event

// pointerdown	                mousedown
// pointerup	                mouseup
// pointermove	                mousemove
// pointerover              	mouseover
// pointerout	                mouseout
// pointerenter             	mouseenter
// pointerleave	                mouseleave
// pointercancel                	-
// gotpointercapture            	-
// lostpointercapture           	-
