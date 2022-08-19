export const decimalToBinary = (num: number): number =>
	num === 0 ? 0 : (num % 2) + 10 * decimalToBinary(~~(num / 2));

console.log(decimalToBinary(2));
console.log(decimalToBinary(4));
console.log(decimalToBinary(6));
