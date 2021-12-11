const firstParagraph = document.getElementById('paragraph');
const secondParagraph = firstParagraph.nextElementSibling;
const thirdParagraph = secondParagraph.nextElementSibling;

//* CLASS NAME
// check for classname
const classValue = firstParagraph.className;
console.log(classValue);
// add classname
firstParagraph.className = 'active';
// add multiple Classes
thirdParagraph.classList.add('error', 'active', 'big');

//remove class
thirdParagraph.classList.remove('active');
