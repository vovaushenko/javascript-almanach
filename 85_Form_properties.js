// 🟢🟢🟢 Navigation: form and elements 🟢🟢🟢
// https://javascript.info/form-elements

// Document forms are members of the special collection document.forms.

// <form name="my">
//   <input name="one" value="1">
//   <input name="two" value="2">
// </form>

// get the form
let form = document.forms.my; // <form name="my"> element

// get the element
let elem = form.elements.one; // <input name="one"> element

console.log(elem.value); // 1

// There may be multiple elements with the same name. This is typical with radio buttons and checkboxes.

// In that case, form.elements[name] is a collection. For instance:

// 🟢Fieldsets as “subforms”
// A form may have one or many <fieldset> elements inside it. They also have elements property that lists form controls inside them.
{
  /* <form id="form">
    <fieldset name="userFields">
      <legend>info</legend>
      <input name="login" type="text">
    </fieldset>
  </form> */
}

let fieldset = form.elements.userFields;
alert(fieldset); // HTMLFieldSetElement

// we can get the input by name both from the form and from the fieldset
alert(fieldset.elements.login == form.elements.login); // true

// 🟢🟢Backreference: element.form
// For any element, the form is available as element.form. So a form references all elements, and elements reference the form.
{
  /* <form id="form">
  <input type="text" name="login">
</form> */
}
let login = form.login;
console.log(login.form);

// 🟢🟢🟢🟢Form elements🟢🟢🟢🟢

// 🟢input and textarea🟢

// ❗❗❗ We can access their value as input.value (string) or input.checked (boolean) for checkboxes.

input.value = 'New value';
textarea.value = 'New text';

input.checked = true; // for a checkbox or radio button

// ❗ Use textarea.value, not textarea.innerHTML

// 🟢select and option🟢
// A <select> element has 3 important properties:
// 1️⃣ select.options – the collection of <option> subelements,
// 2️⃣ select.value – the value of the currently selected <option>,
// 3️⃣ select.selectedIndex – the number of the currently selected <option>.

// They provide three different ways of setting a value for a <select>:

// 1️⃣Find the corresponding <option> element (e.g. among select.options) and set its option.selected to true.
// 2️⃣If we know a new value: set select.value to the new value.
// 3️⃣If we know the new option number: set select.selectedIndex to that number.
