const links = document.querySelectorAll('.first');
console.log(links);

const first = document.querySelector('.first');
const link = first.querySelector('#link');

// * GET ATTRIBUTE
const className = first.getAttribute('class');
const id = first.getAttribute('id');
const href = link.getAttribute('href');
console.log(className, id);
console.log('href -> ', href);

// * SET ATTRIBUTE
const lastLink = link.nextElementSibling;
console.log(lastLink);
lastLink.setAttribute('href', 'https://github.com/');
lastLink.textContent = 'Github Link';
