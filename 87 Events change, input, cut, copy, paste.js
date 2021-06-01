// 1️⃣ Event: change

// The change event triggers when the element has finished changing.
// For other elements: select, input type=checkbox/radio it triggers right after the selection changes:

//  2️⃣ Event: input
// The input event triggers every time after a value is modified by the user.
// ❗❗❗ Unlike keyboard events, it triggers on any value change, even those that does not involve keyboard actions: pasting with a mouse or using speech recognition to dictate the text.

// 3️⃣ Events: cut, copy, paste

// They belong to ClipboardEvent class and provide access to the data that is copied/pasted.

// We also can use event.preventDefault() to abort the action, then nothing gets copied/pasted.

// For instance, the code below prevents all such events and shows what we are trying to cut/copy/paste:
input.oncut = input.oncopy = input.onpaste = function (event) {
  alert(event.type + ' - ' + event.clipboardData.getData('text/plain'));
  return false;
};
