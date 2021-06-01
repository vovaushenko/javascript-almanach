// 🟢 Drag'n'Drop with mouse events 🟢

// In the modern HTML standard there’s a section about Drag and Drop with special events such as dragstart, dragend, and so on.

// But native Drag Events also have limitations. For instance, we can’t prevent dragging from a certain area. Also we can’t make the dragging “horizontal” or “vertical” only. And there are many other drag’n’drop tasks that can’t be done using them. Also, mobile device support for such events is very weak.

// 🟢🟢🟢Drag’n’Drop algorithm🟢🟢🟢

// The basic Drag’n’Drop algorithm looks like this:

// 1️⃣On mousedown – prepare the element for moving, if needed (maybe create a clone of it, add a class to it or whatever).
// 2️⃣Then on mousemove move it by changing left/top with position:absolute.
// 3️⃣On mouseup – perform all actions related to finishing the drag’n’drop.

// https://javascript.info/mouse-drag-and-drop

const ball = document.querySelector('#ball');

ball.onmousedown = function (event) {
  // (1) prepare to moving: make absolute and on top by z-index
  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;

  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(ball);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  ball.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };
};

// 🟢🟢🟢🟢Summary🟢🟢🟢🟢
// We considered a basic Drag’n’Drop algorithm.

// The key components:

// Events flow: ball.mousedown → document.mousemove → ball.mouseup (don’t forget to cancel native ondragstart).
// At the drag start – remember the initial shift of the pointer relative to the element: shiftX/shiftY and keep it during the dragging.
// Detect droppable elements under the pointer using document.elementFromPoint.
// We can lay a lot on this foundation.

// On mouseup we can intellectually finalize the drop: change data, move elements around.
// We can highlight the elements we’re flying over.
// We can limit dragging by a certain area or direction.
// We can use event delegation for mousedown/up. A large-area event handler that checks event.target can manage Drag’n’Drop for hundreds of elements.
// And so on.
