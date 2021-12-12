const nameInput = document.querySelector('.name__input');

nameInput.addEventListener('keypress', (e) => {
	console.log(`you pressed a key ${e.target.value}`);
});

nameInput.addEventListener('keyup', (e) => {
	console.log(`you pressed a key ${e.target.value}`);
});
