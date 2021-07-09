// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const removeDuplicates = (nums) => {
	let map = nums.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

	for (let i = nums.length; i >= 0; i--) {
		if (map[nums[i]] > 1) {
			map[nums[i]]--;
			nums.splice(i, 1);
		}
	}

	return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
