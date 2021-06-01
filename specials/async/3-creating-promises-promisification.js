const fs = require('fs');
const superagent = require('superagent');
/*
=============== BUILDING PROMISES ================ 
*/

// we will promisify readFile and writeFile funcs

const readFilePromise = (fileName) => {
  // promise takes EXECUTOR function
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) reject('I could not find this file ☹️😨');
      resolve(data);
    });
  });
};

const writeFilePromise = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) reject('Could not write the file 😵');
      resolve('Success!! Random dog image saved to file!');
    });
  });
};

readFilePromise(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed is ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })

  .then((res) => {
    console.log(res.body);

    return writeFilePromise('dog-img.txt', res.body.message);
  })
  .then(() => console.log('Random dog image was saved!'))
  .catch((err) => {
    console.log(err.message);
  });
