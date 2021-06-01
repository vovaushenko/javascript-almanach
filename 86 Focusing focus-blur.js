// An element receives the focus when the user either clicks on it or uses the Tab key on the keyboard. There’s also an autofocus HTML attribute that puts the focus onto an element by default when a page loads and other means of getting the focus.

//❗ The moment of losing the focus (“blur”) can be even more important. That’s when a user clicks somewhere else or presses Tab to go to the next form field, or there are other means as well.

// 🟢Events focus/blur🟢
// The focus event is called on focusing, and blur – when the element loses the focus.

// Let’s use them for validation of an input field.

input.onblur = function () {
  if (!input.value.includes('@')) {
    // not email
    input.classList.add('invalid');
    error.innerHTML = 'Please enter a correct email.';
  }
};
input.onfocus = function () {
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
    error.innerHTML = '';
  }
};

// 🟢Methods focus/blur🟢
// Methods elem.focus() and elem.blur() set/unset the focus on the element.

// For instance, let’s make the visitor unable to leave the input if the value is invalid:

input.onblur = function () {
  if (!this.value.includes('@')) {
    // not email
    // show the error
    this.classList.add('error');
    // ...and put the focus back
    input.focus();
  } else {
    this.classList.remove('error');
  }
};

// 🟢🟢🟢Allow focusing on any element: tabindex🟢🟢🟢

//❗ focus/blur support is guaranteed for elements that a visitor can interact with: <button>, <input>, <select>, <a></a>

//❗ On the other hand, elements that exist to format something, such as <div>, <span>, <table> – are unfocusable by default.

//❗❗❗ This can be changed using HTML-attribute tabindex.This can be changed using HTML-attribute tabindex.

// ❗❗Any element becomes focusable if it has tabindex❗❗

// ❗❗❗That is: if we have two elements, the first has tabindex="1", and the second has tabindex="2", then pressing Tab while in the first element – moves the focus into the second one.❗❗❗

//🟢🟢🟢 Delegation: focusin/focusout🟢🟢🟢

// Events focus and blur do not bubble.
// Solution
// ❗❗❗ There are focusin and focusout events – exactly the same as focus/blur, but they bubble.
