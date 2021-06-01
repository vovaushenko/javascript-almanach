// A popup window is one of the oldest methods to show additional document to user.

// Basically, you just run:

window.open('https://javascript.info/');

// The initial idea was to show another content without closing the main window.
// ❗As of now, there are other ways to do that: we can load content dynamically with fetch and show it in a dynamically generated <div>. So, popups is not something we use everyday.

// Still, there are tasks where popups are still used, e.g. for OAuth authorization (login with Google/Facebook/…), because:

// 1️⃣ A popup is a separate window which has its own independent JavaScript environment. So opening a popup from a third-party, non-trusted site is safe.
// 2️⃣ It’s very easy to open a popup.
// 3️⃣ A popup can navigate (change URL) and send messages to the opener window.

// 🟢 Popup blocking

// Most browsers block popups if they are called outside of user-triggered event handlers like onclick.

// popup blocked
window.open('https://javascript.info');

// popup allowed
button.onclick = () => {
  window.open('https://javascript.info');
};
