const maximumBeautyBRUTEFORCE = (items, queries) => {
	const res = [];
	for (let qr of queries) {
		let maxBeauty = 0;
		for (let item of items) {
			if (item[0] <= qr) {
				maxBeauty = Math.max(maxBeauty, item[1]);
			}
		}
		res.push(maxBeauty);
	}

	return res;
};
console.log(maximumBeautyBRUTEFORCE([[10, 1000]], [5]));
