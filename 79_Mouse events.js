// Please note: such events may come not only from “mouse devices”, but are also from other devices, such as phones and tablets, where they are emulated for compatibility.

// 🟢Mouse event types🟢

// 1️⃣ mousedown/mouseup
// 2️⃣ mouseover/mouseout
// 3️⃣ mousemove
// 4️⃣ click
// 5️⃣ dblclick
// 6️⃣ contextmenu -Triggers when the right mouse button is pressed.

// 🟢Events order🟢

// As you can see from the list above, a user action may trigger multiple events.

// For instance, a left-button click first triggers mousedown, when the button is pressed, then mouseup and click when it’s released.

// 🟢Mouse button🟢

// Click-related events always have the button property, which allows to get the exact mouse button.
//                              event.button
// Left button (primary)	        0
// Middle button (auxiliary)	    1
// Right button (secondary)	        2
// X1 button (back)	                3
// X2 button (forward)	            4

// 🟢Modifiers: shift, alt, ctrl and meta🟢
// All mouse events include the information about pressed modifier keys.

// Event properties:

// shiftKey: Shift
// altKey: Alt (or Opt for Mac)
// ctrlKey: Ctrl
// metaKey: Cmd for Mac

// They are true if the corresponding key was pressed during the event.

<button id="button">Alt+Shift+Click on me!</button>;

button.onclick = function (event) {
  if (event.altKey && event.shiftKey) {
    alert('Hooray!');
  }
};

// 🟢Coordinates: clientX/Y, pageX/Y🟢

// All mouse events provide coordinates in two flavours:

// 1️⃣Window-relative: clientX and clientY.
// 2️⃣Document-relative: pageX and pageY.

// 🟢Preventing selection on mousedown🟢
// Double mouse click has a side-effect that may be disturbing in some interfaces: it selects text.

<b ondblclick="alert('Click!')" onmousedown="return false">
  Double-click me
</b>;

// 🟢Preventing copying🟢

// If we want to disable selection to protect our page content from copy-pasting, then we can use another event: oncopy.

<div oncopy="alert('Copying forbidden!');return false">
  Dear user, The copying is forbidden for you. If you know JS or HTML, then you can get everything
  from the page source though.
</div>;
