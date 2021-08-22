const mergeAlternately = (w1, w2) => {
	let res = '';

	for (let i = 0; i < Math.max(w1.length, w2.length); i++) {
		res += (w1[i] || '') + (w2[i] || '');
	}

	return res;
};

console.log(mergeAlternately('foozzzzzz', 'bardsadsa'));
