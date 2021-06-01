// 🟢🟢🟢🟢 Error handling with promises 🟢🟢🟢🟢

// Promise chains are great at error handling.
fetch('https://no-such-server.blabla') // rejects
  .then((response) => response.json())
  .catch((err) => console.error(err)); // TypeError: failed to fetch (the text may vary)

// As you can see, the .catch doesn’t have to be immediate. It may appear after one or maybe several .then.

// Or, maybe, everything is all right with the site, but the response is not valid JSON. The easiest way to catch all errors is to append .catch to the end of chain:

fetch('/article/promise-chaining/user.json')
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/${user.name}`))
  .then((response) => response.json())
  .then(
    (githubUser) =>
      new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = 'promise-avatar-example';
        document.body.append(img);

        setTimeout(() => {
          img.remove();
          resolve(githubUser);
        }, 3000);
      })
  )
  .catch((error) => console.log(error.message));

// Normally, such .catch doesn’t trigger at all. But if any of the promises above rejects (a network problem or invalid json or whatever), then it would catch it.

// 🟢🟢🟢 Implicit try…catch 🟢🟢🟢

// The code of a promise executor and promise handlers has an "invisible try..catch" around it. If an exception happens, it gets caught and treated as a rejection.

// For instance, this code:

new Promise((resolve, reject) => {
  throw new Error('Whoops!');
}).catch(alert); // Error: Whoops!
new Promise((resolve, reject) => {
  reject(new Error('Whoops!'));
}).catch(alert); // Error: Whoops!

new Promise((resolve, reject) => {
  resolve('ok');
})
  .then((result) => {
    blabla(); // no such function
  })
  .catch(alert);

// 🟢🟢🟢 Rethrowing 🟢🟢🟢

// If we throw inside .catch, then the control goes to the next closest error handler. And if we handle the error and finish normally, then it continues to the next closest successful .then handler.

// the execution: catch -> then
new Promise((resolve, reject) => {
  throw new Error('Whoops!');
})
  .catch(function (error) {
    alert('The error is handled, continue normally');
  })
  .then(() => alert('Next successful handler runs'));
