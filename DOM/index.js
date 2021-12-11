const wrapper = document.querySelector('.text-wrapper');
//* CHILD NODES INCLUDING TEXT
const { childNodes } = wrapper;
//* ACTUAL CHILDREN
const { children } = wrapper;
console.log(children);
//* GET PARENT ELEMENT
const special = document.querySelector('.last');
console.log(special.parentElement.parentElement.parentElement);
//* SIBLINGS
const first = document.querySelector('.main__header');
const { nextSibling, previousSibling } = first;
console.log(nextSibling, previousSibling);
