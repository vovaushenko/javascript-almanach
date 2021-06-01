// 1️⃣window.onload
// The load event on the window object triggers when the whole page is loaded including styles, images and other resources. This event is available via the onload property.

// 🟢 The example below correctly shows image sizes, because window.onload waits for all images:

window.onload = function () {
  // same as window.addEventListener('load', (event) => {
  alert('Page loaded');

  // image is loaded at this time
  alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
};
// ===========================================================
// ===========================================================
// 2️⃣window.onunload

// When a visitor leaves the page, the unload event triggers on window. We can do something there that doesn’t involve a delay, like closing related popup windows.

// The notable exception is sending analytics.
// There exists a special navigator.sendBeacon(url, data) method for such needs, described in the specification
// It sends the data in background. The transition to another page is not delayed: the browser leaves the page, but still performs sendBeacon.

// Here’s how to use it:
let analyticsData = {
  /* object with gathered data */
};

window.addEventListener('unload', function () {
  navigator.sendBeacon('/analytics', JSON.stringify(analyticsData));
});

// 💡 The request is sent as POST.
// 💡 We can send not only a string, but also forms and other formats, as described in the chapter Fetch, but usually it’s a stringified object.
// 💡 The data is limited by 64kb.

// ===========================================================
// ===========================================================
// 3️⃣ window.onbeforeunload

// If a visitor initiated navigation away from the page or tries to close the window, the beforeunload handler asks for additional confirmation.

window.onbeforeunload = function () {
  return false;
};

// For historical reasons, returning a non-empty string also counts as canceling the event. Some time ago browsers used to show it as a message, but as the modern specification says, they shouldn’t.
window.onbeforeunload = function () {
  return 'There are unsaved changes. Leave now?';
};
