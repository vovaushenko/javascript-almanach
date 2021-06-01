// Several characters or character classes inside square brackets […] mean to “search for any character among given”.

// 🟢 Sets 🟢

// For instance, [eao] means any of the 3 characters: 'a', 'e', or 'o'.

// That’s called a set. Sets can be used in a regexp along with regular characters:

// ⭐ find [t or m], and then "op"
console.log('Mop top'.match(/[tm]op/gi)); // "Mop", "top"

// ❗ although there are multiple characters in the set, they correspond to exactly one character in the match.

// ⭐ find "V", then [o or i], then "la"
console.log('Voila'.match(/V[oi]la/)); // null, no matches
// The pattern searches for:
// 💛 V,
// 💛 then one of the letters [oi],
// 💛 then la.
// So there would be a match for Vola or Vila.
console.log('VoilaVolaVila'.match(/V[oi]la/gi)); // null, no matches
