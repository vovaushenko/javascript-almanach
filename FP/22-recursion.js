//* === Mutual Recursion ===

/*
When two or more functions call each other in a recursive cycle, this is referred to
as mutual recursion.
These two functions are mutually recursive:
*/

function isOdd(v) {
	if (v === 0) return false;
	return isEven(Math.abs(v) - 1);
}
function isEven(v) {
	if (v === 0) return true;
	return isOdd(Math.abs(v) - 1);
}

// === fibs ===
function fib_(n) {
	if (n == 1) return 1;
	else return fib(n - 2);
}
function fib(n) {
	if (n == 0) return 0;
	else return fib(n - 1) + fib_(n);
}

// ==== sum =================================

const sum = (total, ...nums) => {
	for (let num of nums) total += num;
	return total;
};

const sum2 = (num1, ...nums) => {
	if (nums.length === 0) return num1;
	return num1 + sum(...nums);
};

console.log(sum2(1, [2, 3, 4]));

// ==== Tree Depth ====

function depth(node) {
	if (node) {
		let depthLeft = depth(node.left);
		let depthRight = depth(node.right);
		return 1 + max(depthLeft, depthRight);
	}
	return 0;
}
