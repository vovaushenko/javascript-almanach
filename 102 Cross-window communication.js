// The “Same Origin” (same site) policy limits access of windows and frames to each other.

// The idea is that if a user has two pages open: one from john-smith.com, and another one is gmail.com, then they wouldn’t want a script from john-smith.com to read our mail from gmail.com. So, the purpose of the “Same Origin” policy is to protect users from information theft.

// 🟢 Same Origin 🟢

// Two URLs are said to have the “same origin” if they have the same protocol, domain and port.

// These URLs all share the same origin:

// http://site.com
// http://site.com/
// http://site.com/my/page.html

// The “Same Origin” policy states that:

//  1️⃣ if we have a reference to another window, e.g. a popup created by window.open or a window inside <iframe>, and that window comes from the same origin, then we have full access to that window.
// 2️⃣ otherwise, if it comes from another origin, then we can’t access the content of that window: variables, document, anything. The only exception is location: we can change it (thus redirecting the user). But we cannot read location (so we can’t see where the user is now, no information leak).

/*
====================================================
*/
// 🟢 In action: iframe

// An <iframe> tag hosts a separate embedded window, with its own separate document and window objects.

// We can access them using properties:

// 1️⃣ iframe.contentWindow to get the window inside the <iframe>.
// 1️⃣ iframe.contentDocument to get the document inside the <iframe>, shorthand for iframe.contentWindow.document.

// When we access something inside the embedded window, the browser checks if the iframe has the same origin. If that’s not so then the access is denied (writing to location is an exception, it’s still permitted).

// For instance, let’s try reading and writing to <iframe> from another origin:

iframe.onload = function () {
  // we can get the reference to the inner window
  let iframeWindow = iframe.contentWindow; // OK
  try {
    // ...but not to the document inside it
    let doc = iframe.contentDocument; // ERROR
  } catch (e) {
    alert(e); // Security Error (another origin)
  }

  // also we can't READ the URL of the page in iframe
  try {
    // Can't read URL from the Location object
    let href = iframe.contentWindow.location.href; // ERROR
  } catch (e) {
    alert(e); // Security Error
  }

  // ...we can WRITE into location (and thus load something else into the iframe)!
  iframe.contentWindow.location = '/'; // OK

  iframe.onload = null; // clear the handler, not to run it after the location change
};

// ❗ The code above shows errors for any operations except:

// 1️⃣Getting the reference to the inner window iframe.contentWindow – that’s allowed.
// 2️⃣Writing to location.

// Contrary to that, if the <iframe> has the same origin, we can do anything with it:

<iframe src="/" id="iframe"></iframe>;

iframe.onload = function () {
  // just do anything
  iframe.contentDocument.body.prepend('Hello, world!');
};

// 🟢 The “sandbox” iframe attribute 🟢

// The sandbox attribute allows for the exclusion of certain actions inside an <iframe> in order to prevent it executing untrusted code. It “sandboxes” the iframe by treating it as coming from another origin and/or applying other limitations.

// n other words, an empty "sandbox" attribute puts the strictest limitations possible, but we can put a space-delimited list of those that we want to lift.

// Here’s a list of limitations:
// allow-same-origin
// allow-forms
// allow-scripts
// allow-popups
