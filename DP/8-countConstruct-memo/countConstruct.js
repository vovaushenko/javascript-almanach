// https://leetcode.com/problems/find-the-highest-altitude/

const largestAltitude = (gain) => {
	let tempAlt = 0;
	let maxAlt = 0;

	for (alt of gain) {
		tempAlt += alt;

		maxAlt = Math.max(tempAlt, maxAlt);
	}

	return maxAlt;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
