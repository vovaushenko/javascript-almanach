// Lookbehind

// Lookahead allows to add a condition for “what follows”.

// Lookbehind is similar, but it looks behind. That is, it allows to match a pattern only if there’s something before it.

// The syntax is:

// 1️⃣ Positive lookbehind: (?<=Y)X, matches X, but only if there’s Y before it.
// 2️⃣ Negative lookbehind: (?<!Y)X, matches X, but only if there’s no Y before it.

// For example, let’s change the price to US dollars. The dollar sign is usually before the number, so to look for $30 we’ll use (?<=\$)\d+ – an amount preceded by $:

let str = '1 turkey costs $30';

// the dollar sign is escaped \$
console.log(str.match(/(?<=\$)\d+/)); // 30 (skipped the sole number)
