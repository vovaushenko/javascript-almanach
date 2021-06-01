// The submit event triggers when the form is submitted, it is usually used to validate the form before sending it to the server or to abort the submission and process it in JavaScript.

// The method form.submit() allows to initiate form sending from JavaScript. We can use it to dynamically create and send our own forms to server.

// 🟢🟢🟢 Event: submit 🟢🟢🟢

// There are two main ways to submit a form:

// 1️⃣ The first – to click <input type="submit"> or <input type="image">.
// 2️⃣ The second – press Enter on an input field

// 🟢🟢🟢  Method: submit 🟢🟢🟢

// To submit a form to the server manually, we can call form.submit().

// Then the submit event is not generated. It is assumed that if the programmer calls form.submit(), then the script already did all related processing.

// Sometimes that’s used to manually create and send a form, like this:

let form = document.createElement('form');
form.action = 'https://google.com/search';
form.method = 'GET';

form.innerHTML = '<input name="q" value="test">';

// the form must be in the document to submit it
document.body.append(form);

form.submit();
