export const randomIP = (): string =>
	[...new Array(4)]
		.map((_, id) => Math.floor(Math.random() * 255) + Number(Boolean(id)))
		.join('.');

console.log(randomIP());
console.log(randomIP());
console.log(randomIP());
