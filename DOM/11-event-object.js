const link = document.getElementById('link');

const heading = document.querySelector('.main__header');
const button = document.querySelector('.btn');

heading.addEventListener('click', (e) => {
	e.currentTarget.classList.toggle('active');
	console.log(e.type);
});

link.addEventListener('click', function (e) {
	e.preventDefault();
	alert('not a default behavior');
	console.log(this);
});

//! Current target and target
