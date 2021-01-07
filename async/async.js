'use strict';

// async & await
// clear style of using promise :)

// 1. async
// async를 함수 앞에 쓰면 자동으로 Promise로 바뀐다.
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // do network in 10 secs...
//     resolve('gw');
//   });
// }
async function fetchUser() {
  return 'gw';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

// 2초가 걸린다. getApple(), getBanana()는 서로 상관없기 때문에 기다리는게 비효율적이다.
// async function pickFruits() {
//   const apple = await getApple();
//   const banana = await getBanana();
//   return `${apple} + ${banana}`;
// }

//  1초걸린다. apple, banana Promise를 만들어 병렬적으로 처리하게 한다.
// 이것도 더럽다.
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' ** ')
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
