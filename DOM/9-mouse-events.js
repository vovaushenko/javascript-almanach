const btn = document.querySelector('.btn');
const heading = document.querySelector('.main__header');

// Function reference
function changeColors() {
	if (heading.classList.contains('active')) {
		heading.classList.add('error');
	} else {
		heading.classList.add('active');
	}
}

btn.addEventListener('click', changeColors);

/**
 *@MOUSE EVENTS
 */

btn.addEventListener('mouseover', () => {
	heading.style.color = 'red';
});
btn.addEventListener('mouseleave', () => {
	heading.style.color = 'black';
});
btn.addEventListener('mouseenter', () => {
	heading.style.color = 'red';
});
btn.addEventListener('mouseup', () => {
	heading.style.color = 'blue';
});
btn.addEventListener('mousedown', () => {
	heading.style.color = 'green';
});
