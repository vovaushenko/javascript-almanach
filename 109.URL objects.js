// The built-in URL class provides a convenient interface for creating and parsing URLs.

// There are no networking methods that require exactly a URL object, strings are good enough. So technically we don’t have to use URL. But sometimes it can be really helpful.

// https://javascript.info/url

// 1️⃣ Creating a URL
// The syntax to create a new URL object:
// new URL(url, [base]);
// url – the full URL or only path (if base is set, see below),
// base – an optional base URL: if set and url argument has only path, then the URL is generated relative to base.

let url = new URL('https://javascript.info/profile/admin');

// These two URLs are same:

let url1 = new URL('https://javascript.info/profile/admin');
let url2 = new URL('/profile/admin', 'https://javascript.info');

console.log(url1); // https://javascript.info/profile/admin
console.log(url2); // https://javascript.info/profile/admin

// We can easily create a new URL based on the path relative to an existing URL:

let url3 = new URL('https://javascript.info/profile/admin');
let newUrl = new URL('tester', url3);

console.log(newUrl); // https://javascript.info/profile/tester

// The URL object immediately allows us to access its components, so it’s a nice way to parse the url, e.g.:

console.log(url3.protocol); // https:
console.log(url3.host); // javascript.info
console.log(url3.pathname); // /url
