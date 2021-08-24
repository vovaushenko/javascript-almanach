const findTarget = (root, target) => {
	let values = [];

	const traverse = (node) => {
		if (!node) return;

		values.push(node.val);
		if (node.left) traverse(node.left);
		if (node.right) traverse(node.right);
	};

	traverse(root);

	const map = values.reduce(
		(h, c, id) => (
			h[c] !== undefined ? (h[c] = [...h[c], id]) : (h[c] = [id]), h
		),
		{}
	);

	for (let i = 0; i < values.length; i++) {
		const diff = target - values[i];
		if (diff in map) {
			if (diff === values[i]) {
				if (map[diff].length >= 2) return true;
			}
			if (diff !== values[i]) return true;
		}
	}

	return false;
};
