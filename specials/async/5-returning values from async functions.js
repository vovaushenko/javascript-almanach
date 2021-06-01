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
      if (err) reject('I could not find this file 😨');
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

/*
        CONSUMING WITH ASYNC/AWAIT
*/

const getDogPic = async () => {
  try {
    const data = await readFilePromise(`${__dirname}/dog.txt`);
    console.log(`Breed is ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);

    await writeFilePromise('dog-img.txt', res.body.message);
    console.log('Random dog image was saved!');
  } catch (err) {
    console.log(err);
    throw err;
  }
  return '2: READY 🙊';
};

(async () => {
  try {
    console.log('step 1 : will get dog pics');
    const x = await getDogPic();
    console.log(x);
    console.log('3: Done getting dog pics');
  } catch (err) {
    console.log('🤯 ERROR 🤯');
  }
})();

// console.log('step 1 : will get dog pics');
// const x = getDogPic();
// console.log(x);
// getDogPic()
//   .then((x) => {
//     console.log(x);
//     console.log('3: Done getting dog pics');
//   })
//   .catch((err) => {
//     console.log('🤯 ERROR 🤯');
//   });

// console.log('step 2 : done getting dog pics');
