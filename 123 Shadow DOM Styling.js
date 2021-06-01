// https://javascript.info/shadow-dom-style

// ⭐ Summary ⭐
// Shadow DOM can include styles, such as <style> or <link rel="stylesheet">.

// 1️⃣Local styles can affect:

// 💠 shadow tree,
// 💠 shadow host with :host-family pseudoclasses,
// 💠 slotted elements (coming from light DOM), ::slotted(selector) allows to select slotted elements themselves, but not their children.

// 2️⃣ Document styles can affect:

// 💠 shadow host (as it lives in the outer document)
// 💠 slotted elements and their contents (as that’s also in the outer document)

// ❗ When CSS properties conflict, normally document styles have precedence, unless the property is labelled as !important. Then local styles have precedence.

// 3️⃣CSS custom properties pierce through shadow DOM. They are used as “hooks” to style the component:

// 💠 The component uses a custom CSS property to style key elements, such as var(--component-name-title, <default value>).
// 💠 Component author publishes these properties for developers, they are same important as other public component methods.
// 💠When a developer wants to style a title, they assign --component-name-title CSS property for the shadow host or above.
// 💠Profit!

// Shadow DOM may include both <style> and <link rel="stylesheet" href="…"> tags. In the latter case, stylesheets are HTTP-cached, so they are not redownloaded for multiple components that use same template.

// As a general rule, local styles work only inside the shadow tree, and document styles work outside of it. But there are few exceptions.

// 🟢 :host 🟢

// The :host selector allows to select the shadow host (the element containing the shadow tree).

// For instance, we’re making <custom-dialog> element that should be centered. For that we need to style the <custom-dialog> element itself.

// That’s exactly what :host does:

//  <template id="tmpl">
//   <style>
//     /* the style will be applied from inside to the custom-dialog element */
//     :host {
//       position: fixed;
//       left: 50%;
//       top: 50%;
//       transform: translate(-50%, -50%);
//       display: inline-block;
//       border: 1px solid red;
//       padding: 10px;
//     }
//   </style>
//   <slot></slot>
// </template>

// <script>
// customElements.define('custom-dialog', class extends HTMLElement {
//   connectedCallback() {
//     this.attachShadow({mode: 'open'}).append(tmpl.content.cloneNode(true));
//   }
// });
// </script>

// <custom-dialog>
//   Hello!
// </custom-dialog>

// 🟢 Cascading 🟢

// The shadow host (<custom-dialog> itself) resides in the light DOM, so it’s affected by document CSS rules.

// ❗❗❗ If there’s a property styled both in :host locally, and in the document, then the document style takes precedence.

// For instance, if in the document we had:

{
	/* <style>
custom-dialog {
  padding: 0;
}
</style> */
}

// …Then the <custom-dialog> would be without padding.

// ⭐⭐⭐It’s very convenient, as we can setup “default” component styles in its :host rule, and then easily override them in the document.⭐⭐⭐

// The exception is when a local property is labelled !important, for such properties, local styles take precedence.

//🟢🟢 :host(selector) 🟢🟢

// Same as :host, but applied only if the shadow host matches the selector.

// For example, we’d like to center the <custom-dialog> only if it has centered attribute:
/*
<template id="tmpl">
  <style>
    :host([centered]) {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-color: blue;
    }

    :host {
      display: inline-block;
      border: 1px solid red;
      padding: 10px;
    }
  </style>
  <slot></slot>
</template>
*/

// <custom-dialog centered>
// Centered!
// </custom-dialog>

// <custom-dialog>
//   Not centered.
// </custom-dialog>

// 🟢🟢🟢 CSS hooks with custom properties 🟢🟢🟢

// Gow do we style internal elements of a component from the main document?

// Selectors like :host apply rules to <custom-dialog> element or <user-card>, but how to style shadow DOM elements inside them?

// There’s no selector that can directly affect shadow DOM styles from the document. But just as we expose methods to interact with our component, we can expose CSS variables (custom CSS properties) to style it.

// ❗❗❗ Custom CSS properties exist on all levels, both in light and shadow.

// For example, in shadow DOM we can use --user-card-field-color CSS variable to style fields, and the outer document can set its value:

// <style>
//   .field {
//     color: var(--user-card-field-color, black);
//     / if --user-card-field-color is not defined, use black color /
//   }
// </style>

// Then, we can declare this property in the outer document for <user-card>:

// user-card {
//   --user-card-field-color: green;
// }
