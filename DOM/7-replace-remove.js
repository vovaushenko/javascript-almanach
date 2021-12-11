const result = document.querySelector('#result');
const resultHeading = document.querySelector('.result-heading');

//============ Create new element ============
const smallHeading = document.createElement('h4');
const smallHeadingContent = document.createTextNode('Small Heading');
smallHeading.appendChild(smallHeadingContent);
smallHeading.classList.add('active');
//============ REPLACING ============
document.body.replaceChild(smallHeading, result);
