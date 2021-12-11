const pruneTree = (root) => {
	if (root) {
		if (!root.left && !root.right && root.val === 0) {
			return null;
		} else {
			root.left = pruneTree(root.left);
			root.right = pruneTree(root.right);
			if (!root.left && !root.right && root.val === 0) {
				return null;
			}
		}
	}
	return root;
};
