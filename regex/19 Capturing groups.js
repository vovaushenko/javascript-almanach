// https://javascript.info/regexp-groups

// A part of a pattern can be enclosed in parentheses (...). This is called a “capturing group”.

// That has two effects:

//  1️⃣ It allows to get a part of the match as a separate item in the result array.

//  2️⃣ If we put a quantifier after the parentheses, it applies to the parentheses as a whole.

// Example: gogogo

// Without parentheses, the pattern go+ means g character, followed by o repeated one or more times. For instance, goooo or gooooooooo.

// Parentheses group characters together, so (go)+ means go, gogo, gogogo and soalert( 'Gogogo now!'.match(/(go)+/ig) ); // "Gogogo" on.

console.log('Gogogo now!'.match(/go+/gi)); // 'Go', 'go', 'go'
console.log('Gogogo now!'.match(/(go)+/gi)); // "Gogogo"

// ⭐ Example: domain ⭐

// For example: smith.users.mail.com

// s we can see, a domain consists of repeated words, a dot after each one except the last one.

// In regular expressions that’s (\w+\.)+\w+:

let regexp = /(\w+\.)+\w+/g;

console.log('site.com my.site.com'.match(regexp)); // site.com,my.site.com

// ⭐ Example: email ⭐

//  1️⃣ The email format is: name@domain.
//  2️⃣ Any word can be the name, hyphens and dots are allowed. In regular expressions that’s [-.\w]+.

let emailRegex = /[-.\w]+@([\w-]+\.)+[\w-]+/g;

console.log('my@mail.com @ his@site.com.uk'.match(emailRegex));
