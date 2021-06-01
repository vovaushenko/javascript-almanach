// There’s another phase of event processing called “capturing”. It is rarely used in real code, but sometimes can be useful.

// The standard DOM Events describes 3 phases of event propagation:

//  1)🟢 Capturing phase – the event goes down to the element.
// 2)🟢 Target phase – the event reached the target element.
//3)🟢 Bubbling phase – the event bubbles up from the element.

// That is: for a click on <td> the event first goes through the ancestors chain down to the element (capturing phase), then it reaches the target and triggers there (target phase), and then it goes up (bubbling phase), calling handlers on its way.

// ❗Before we only talked about bubbling, because the capturing phase is rarely used. Normally it is invisible to us.

// ❗❗❗To catch an event on the capturing phase, we need to set the handler capture option to true:

// elem.addEventListener(..., {capture: true})
// // or, just "true" is an alias to {capture: true}
// elem.addEventListener(..., true)

<form>
  FORM
  <div>
    DIV
    <p>P</p>
  </div>
</form>;

for (let elem of document.querySelectorAll('*')) {
  elem.addEventListener('click', (e) => alert(`Capturing: ${elem.tagName}`), true);
  elem.addEventListener('click', (e) => alert(`Bubbling: ${elem.tagName}`));
}

// Capturing HTML->BODY->FORM->DIV->P
// BUBBLING P->DIV->FORM->BODY->HTML
