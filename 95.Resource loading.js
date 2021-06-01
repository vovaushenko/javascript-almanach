// The browser allows us to track the loading of external resources – scripts, iframes, pictures and so on.

// There are two events for it:

// 🟢 onload – successful load,
// 🟢 onerror – an error occurred.

// 🟩🟩🟩 script.onload 🟩🟩🟩
let script = document.createElement('script');

// can load any script, from any domain
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js';
document.head.append(script);

script.onload = function () {
  // the script creates a variable "_"
  alert(_.VERSION); // shows library version
};

// …And what if the loading failed? For instance, there’s no such script (error 404) or the server is down (unavailable).

// 🟩🟩🟩 script.onerror 🟩🟩🟩

// Errors that occur during the loading of the script can be tracked in an error event.

let script = document.createElement('script');
script.src = 'https://example.com/404.js'; // no such script
document.head.append(script);

script.onerror = function () {
  alert('Error loading ' + this.src); // Error loading https://example.com/404.js
};
// Please note that we can’t get HTTP error details here. We don’t know if it was an error 404 or 500 or something else. Just that the loading failed.

// 🟩🟩🟩  Other resources 🟩🟩🟩

// The load and error events also work for other resources, basically for any resource that has an external src.

// For example:

let img = document.createElement('img');
img.src = 'https://js.cx/clipart/train.gif'; // (*)

img.onload = function () {
  alert(`Image loaded, size ${img.width}x${img.height}`);
};

img.onerror = function () {
  alert('Error occurred while loading image');
};
