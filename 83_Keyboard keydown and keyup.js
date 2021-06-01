// Keyboard events should be used when we want to handle keyboard actions (virtual keyboard also counts). For instance, to react on arrow keys Up and Down or hotkeys (including combinations of keys).

// 🟢 Keydown and keyup 🟢
// The keydown events happens when a key is pressed down, and then keyup – when it’s released.

//  🟢 event.code and event.key

// The key property of the event object allows to get the character, while the code property of the event object allows to get the “physical key code”.

// Key	            event.key	   event.code
// Z	            z (lowercase)	KeyZ
// Shift+Z	        Z (uppercase)	KeyZ

// ❗❗❗ If a user works with different languages, then switching to another language would make a totally different character instead of "Z". That will become the value of event.key, while event.code is always the same: "KeyZ".

// ❗ What if a key does not give any character? For instance, Shift or F1 or others. For those keys, event.key is approximately the same as event.code:

// Key	            event.key	 event.code
// F1	            F1	            F1
// Backspace	    Backspace	  Backspace
// Shift	        Shift	     ShiftRight or ShiftLeft

// 🟢Default actions🟢

// Default actions vary, as there are many possible things that may be initiated by the keyboard.

// For instance:

// A character appears on the screen (the most obvious outcome).
// A character is deleted (Delete key).
// The page is scrolled (PageDown key).
// The browser opens the “Save Page” dialog (Ctrl+S)
// …and so on.

// Preventing the default action on keydown can cancel most of them, with the exception of OS-based special keys. ❗ For instance, on Windows Alt+F4 closes the current browser window. And there’s no way to stop it by preventing the default action in JavaScript.

// For instance, the <input> below expects a phone number, so it does not accept keys except digits, +, () or -:

function checkPhoneKey(key) {
  return (
    (key >= '0' && key <= '9') ||
    key == '+' ||
    key == '(' ||
    key == ')' ||
    key == '-' ||
    key == 'ArrowLeft' ||
    key == 'ArrowRight' ||
    key == 'Delete' ||
    key == 'Backspace'
  );
}

<input onkeydown="return checkPhoneKey(event.key)" placeholder="Phone, please" type="tel"></input>;
