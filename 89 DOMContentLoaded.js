// The lifecycle of an HTML page has three important events:

// 1️⃣ DOMContentLoaded – the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures <img> and stylesheets may not yet have loaded.
// 2️⃣ load – not only HTML is loaded, but also all the external resources: images, styles etc.
// 3️⃣ beforeunload/unload – the user is leaving the page.

// Each event may be useful:

// 💡 DOMContentLoaded event – DOM is ready, so the handler can lookup DOM nodes, initialize the interface.
// 💡 load event – external resources are loaded, so styles are applied, image sizes are known etc.
// 💡 beforeunload event – the user is leaving: we can check if the user saved the changes and ask them whether they really want to leave.
// 💡 unload – the user almost left, but we still can initiate some operations, such as sending out statistics.

// 🟢 DOMContentLoaded 🟢

// The DOMContentLoaded event happens on the document object.
// We must use addEventListener to catch it:
document.addEventListener('DOMContentLoaded', ready);
// not "document.onDOMContentLoaded = ..."

function ready() {
  alert('DOM is ready');

  // image is not yet loaded (unless it was cached), so the size is 0x0
  alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
}

document.addEventListener('DOMContentLoaded', ready);

// =========================================================

// At first sight, the DOMContentLoaded event is very simple. The DOM tree is ready – here’s the event. ❗❗❗There are few peculiarities though.❗❗❗

// 🟢 DOMContentLoaded and scripts

// When the browser processes an HTML-document and comes across a <script> tag, it needs to execute before continuing building the DOM. That’s a precaution, as scripts may want to modify DOM, and even document.write into it, so DOMContentLoaded has to wait.

// Scripts that don’t block DOMContentLoaded

// There are two exceptions from this rule:

// 1️⃣Scripts with the async attribute, that we’ll cover a bit later, don’t block DOMContentLoaded.
// 2️⃣Scripts that are generated dynamically with document.createElement('script') and then added to the webpage also don’t block this event.

// 🟢 DOMContentLoaded and styles
// External style sheets don’t affect DOM, so DOMContentLoaded does not wait for them.
// But there’s a pitfall. If we have a script after the style, then that script must wait until the stylesheet loads:
// As DOMContentLoaded waits for scripts, it now waits for styles before them as well.
