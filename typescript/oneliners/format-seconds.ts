//Format seconds as hh:mm:ss
export const formatSeconds = (s: number): string =>
	new Date(s * 1000).toISOString().slice(11, 19);
// 00:01:40
console.log(formatSeconds(100));
// 00:05:00
console.log(formatSeconds(300));
