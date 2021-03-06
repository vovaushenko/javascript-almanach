// π’π’π’ Attributes and properties π’π’π’

// When the browser loads the page, it βreadsβ (another word: βparsesβ) the HTML and generates DOM objects from it. For element nodes, most standard HTML attributes automatically become properties of DOM objects.

// For instance, if the tag is <body id="page">, then the DOM object has body.id="page".

// π’π’π’ DOM properties π’π’π’

// DOM nodes are regular JavaScript objects. We can alter them.

// For instance, letβs create a new property in document.body:

document.body.myData = {
  name: 'Caesar',
  title: 'Imperator',
};

alert(document.body.myData.title);

// We can add a method as well:

document.body.sayHello = () => alert('hello world');

document.body.sayHello();

// We can also modify built-in prototypes like Element.prototype and add new methods to all elements:
Element.prototype.sayHi = function () {
  alert(`Hello, I'm ${this.tagName}`);
};
document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY

// π’π’π’  HTML attributes π’π’π’

// In HTML, tags may have attributes. When the browser parses the HTML to create DOM objects for tags, it recognizes standard attributes and creates DOM properties from them.

// So when an element has id or another standard attribute, the corresponding property gets created. But that doesnβt happen if the attribute is non-standard.

{
  /* <body id="test" something="non-standard">
    <script>
      alert(document.body.id); // test
      // non-standard attribute does not yield a property
      alert(document.body.something); // undefined
    </script>
  </body> */
}

// βββ So, if an attribute is non-standard, there wonβt be a DOM-property for it. Is there a way to access such attributes?

// π©Sureπ©. All attributes are accessible by using the following methods:
// elem.hasAttribute(name) β checks for existence.
// elem.getAttribute(name) β gets the value.
// elem.setAttribute(name, value) β sets the value.
// elem.removeAttribute(name) β removes the attribute.

{
  /* <body something="non-standard">
    <script>
      alert(document.body.getAttribute('something')); // non-standard
    </script>
  </body> */
}

// π’π’ DOM properties are typed π’π’

// DOM properties are not always strings. For instance, the input.checked property (for checkboxes) is a boolean:

// There are other examples. The style attribute is a string, but the style property is an object:

{
  /* <div id="div" style="color:red;font-size:120%">Hello</div>
  
  <script>
    // string
    alert(div.getAttribute('style')); // color:red;font-size:120%
  
    // object
    alert(div.style); // [object CSSStyleDeclaration]
    alert(div.style.color); // red
  </script> */
}
