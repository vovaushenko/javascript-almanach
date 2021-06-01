// https://javascript.info/cookie#writing-to-document-cookie

// Cookies are small strings of data that are stored directly in the browser. They are a part of the HTTP protocol, defined by the RFC 6265 specification.

/*
Cookies are usually set by a web-server using the response Set-Cookie HTTP-header. Then, the browser automatically adds them to (almost) every request to the same domain using the Cookie HTTP-header.
*/

// 🟢🟢🟢 One of the most widespread use cases is authentication:

// 1️⃣ Upon sign in, the server uses the Set-Cookie HTTP-header in the response to set a cookie with a unique “session identifier”.

// 2️⃣ Next time when the request is sent to the same domain, the browser sends the cookie over the net using the Cookie HTTP-header.

// 3️⃣ So the server knows who made the request.

// We can also access cookies from the browser, using document.cookie property.

/*
              🟢🟢🟢Reading from document.cookie🟢🟢🟢
*/
// Does your browser store any cookies from this site? Let’s see:

// At javascript.info, we use Google Analytics for statistics,
// so there should be some cookies
alert(document.cookie); // cookie1=value1; cookie2=value2;...

// The value of document.cookie consists of name=value pairs, delimited by ;. Each one is a separate cookie.
// To find a particular cookie, we can split document.cookie by ;, and then find the right name. We can use either a regular expression or array functions to do that.

/*
              🟢🟢🟢Writing to document.cookie🟢🟢🟢
*/

// We can write to document.cookie. But it’s not a data property, it’s an accessor (getter/setter). An assignment to it is treated specially.

// ❗❗❗ A write operation to document.cookie updates only cookies mentioned in it, but doesn’t touch other cookies.

// For instance, this call sets a cookie with the name user and value John:
document.cookie = 'user=John'; // update only cookie named 'user'
alert(document.cookie); // show all cookies

// Technically, name and value can have any characters. To keep the valid formatting, they should be escaped using a built-in encodeURIComponent function:
// special characters (spaces), need encoding
let name = 'my name';
let value = 'John Smith';

// encodes the cookie as my%20name=John%20Smith
document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

alert(document.cookie); // ...; my%20name=John%20Smith

// ❗❗❗❗ Limitations ❗❗❗❗
// There are few limitations:

// 1️⃣ The name=value pair, after encodeURIComponent, should not exceed 4KB. So we can’t store anything huge in a cookie.
// 2️⃣ The total number of cookies per domain is limited to around 20+, the exact limit depends on the browser.

/*
              🟢🟢🟢Options🟢🟢🟢
*/
// Cookies have several options, many of them are important and should be set.
// The options are listed after key=value, delimited by ;, like this:

document.cookie = 'user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT';

// 1️⃣ path
// path=/mypath
// If a cookie is set with path=/admin, it’s visible at pages /admin and /admin/something, but not at /home or /adminpage.
// Usually, we should set path to the root: path=/ to make the cookie accessible from all website pages.

// 2️⃣ domain
// domain=site.com
// A domain defines where the cookie is accessible. In practice though, there are limitations. We can’t set any domain.
// By default, a cookie is accessible only at the domain that set it. So, if the cookie was set by site.com, we won’t get it at other.com.
// So, the domain option allows to make a cookie accessible at subdomains.

// 3️⃣expires, max-age

// By default, if a cookie doesn’t have one of these options, it disappears when the browser is closed. Such cookies are called “session cookies”

// To let cookies survive a browser close, we can set either the expires or max-age option.

// expires=Tue, 19 Jan 2038 03:14:07 GMT

// For instance, we can set the cookie to expire in 1 day:
// +1 day from now
let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = 'user=John; expires=' + date;

// If we set expires to a date in the past, the cookie is deleted.

// 4️⃣ secure

// The cookie should be transferred only over HTTPS.

// By default, if we set a cookie at http://site.com, then it also appears at https://site.com and vice versa.

// With this option, if a cookie is set by https://site.com, then it doesn’t appear when the same site is accessed by HTTP, as http://site.com. So if a cookie has sensitive content that should never be sent over unencrypted HTTP, the secure flag is the right thing.

// assuming we're on https:// now
// set the cookie to be secure (only accessible over HTTPS)
document.cookie = 'user=John; secure';

// 5️⃣ samesite
// That’s another security attribute samesite. It’s designed to protect from so-called XSRF (cross-site request forgery) attacks.
