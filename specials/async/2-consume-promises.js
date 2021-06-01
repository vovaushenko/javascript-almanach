const fs = require('fs');
const superagent = require('superagent');

/*
=============== CONSUMING PROMISES ================ 
*/

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed is ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body);

      // save res in a file
      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        if (err) return console.log(err.message);
        console.log('Random dog image saved to file!');
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});
