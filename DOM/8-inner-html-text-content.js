const txtWrapper = document.querySelector('.text-wrapper');
const par1 = document.getElementById('paragraph');
const par2 = document.querySelector('.second');
const par3 = document.querySelector('.last');

//! inner html returns the whole html structure
console.log(txtWrapper.innerHTML);
console.log(par2.textContent);

const ul = document.createElement('ul');
ul.innerHTML = `
  <h1>🍌 Foo 🍌</h1>
  <h2>🍌 Bar 🍌</h2>
  <h3>🍌 Baz 🍌</h3>
`;

document.body.appendChild(ul);
