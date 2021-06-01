// JavaScript can send network requests to the server and load new information whenever it’s needed.

// ❗ …And all of that without reloading the page!

// The fetch() method is modern and versatile, so we’ll start with it. It’s not supported by old browsers (can be polyfilled), but very well supported among the modern ones.

// The basic syntax is:
let promise = fetch(url, [options]);

// Without options, this is a simple GET request, downloading the contents of the url.

/*------------------------------------------------------*/
// 1️⃣ First, the promise, returned by fetch, resolves with an object of the built-in Response class as soon as the server responds with headers.

// At this stage we can check HTTP status, to see whether it is successful or not, check headers, but don’t have the body yet.

// The promise rejects if the fetch was unable to make HTTP-request, e.g. network problems, or there’s no such site. Abnormal HTTP-statuses, such as 404 or 500 do not cause an error.

// We can see HTTP-status in response properties:

// 🟢 status – HTTP status code, e.g. 200.
// 🟢 ok – boolean, true if the HTTP status code is 200-299.

let response = await fetch(url);

if (response.ok) {
  // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
} else {
  alert('HTTP-Error: ' + response.status);
}

/*------------------------------------------------------*/
//2️⃣ Second, to get the response body, we need to use an additional method call.

// Response provides multiple promise-based methods to access the body in various formats:

// 🟢response.text() – read the response and return as text,
// 🟢response.json() – parse the response as JSON,
// 🟢response.formData() – return the response as FormData object (explained in the next chapter),
// 🟢response.blob() – return the response as Blob (binary data with type),
// 🟢response.arrayBuffer() – return the response as ArrayBuffer (low-level representation of binary data),
// 🟢additionally, response.body is a ReadableStream object, it allows you to read the body chunk-by-chunk, we’ll see an example later.

// For instance, let’s get a JSON-object with latest commits from GitHub:

/*------------------------------------------------------*/

//  🟢🟢🟢Response headers🟢🟢🟢

// The response headers are available in a Map-like headers object in response.headers.
(async () => {
  let response = await fetch(
    'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'
  );

  // get one header
  alert(response.headers.get('Content-Type')); // application/json; charset=utf-8

  // iterate over all headers
  for (let [key, value] of response.headers) {
    alert(`${key} = ${value}`);
  }
})();
/*------------------------------------------------------*/

//  🟢🟢🟢 REQUEST headers🟢🟢🟢

// To set a request header in fetch, we can use the headers option. It has an object with outgoing headers, like this:

let response = fetch(protectedUrl, {
  headers: {
    Authentication: 'secret',
  },
});

/*------------------------------------------------------*/

//  🟢🟢🟢 POST requests 🟢🟢🟢

// To make a POST request, or a request with another method, we need to use fetch options:

// 1️⃣method – HTTP-method, e.g. POST,
// 2️⃣body – the request body, one of:
//          a string (e.g. JSON-encoded),
//          FormData object, to submit the data as form/multipart,
//          Blob/BufferSource to send binary data,
//          URLSearchParams, to submit the data in          x-www-form-urlencoded encoding, rarely used.

// The JSON format is used most of the time.

// For example, this code submits user object as JSON:

let user = {
  name: 'John',
  surname: 'Smith',
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(user),
});

let result = await response.json();
alert(result.message);

/*        🐠   Sending an image   🐠                */

// We can also submit binary data with fetch using Blob or BufferSource objects.

async function submit() {
  let blob = await new Promise((resolve) =>
    canvasElem.toBlob(resolve, 'image/png')
  );
  let response = await fetch('/article/fetch/post/image', {
    method: 'POST',
    body: blob,
  });

  // the server responds with confirmation and the image size
  let result = await response.json();
  alert(result.message);
}
