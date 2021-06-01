// What happens if we set the DOMContentLoaded handler after the document is loaded?

// Naturally, it never runs.

// There are cases when we are not sure whether the document is ready or not. We’d like our function to execute when the DOM is loaded, be it now or later.

// The document.readyState property tells us about the current loading state.

// There are 3 possible values:

//  1️⃣ "loading" – the document is loading.
//  2️⃣ "interactive" – the document was fully read.
//  3️⃣  "complete" – the document was fully read and all resources (like images) are loaded too.

// So we can check document.readyState and setup a handler or execute the code immediately if it’s ready.

function work() {
  /*...*/
}

if (document.readyState == 'loading') {
  // still loading, wait for the event
  document.addEventListener('DOMContentLoaded', work);
} else {
  // DOM is ready!
  work();
}

// There’s also the readystatechange event that triggers when the state changes, so we can print all these states like this:

// current state
console.log(document.readyState);

// print state changes
document.addEventListener('readystatechange', () => console.log(document.readyState));
