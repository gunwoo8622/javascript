'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files) 비동기적으로 처리하는게 좋음
  console.log('doing something...');
  setTimeout(() => {
    resolve('gw');
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then(정상일때), catch(에러났을때), finally(마지막에 무조건 실행)
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Erro Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐔'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// 콜백함수를 전달할 때 받아오는 value를 다른 함수 하나로 바로 호출하는 경우에는 아래처럼 생략가능
// then에서 받아오는 value를 바로 함수에 암묵적으로 전달해준다.
// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));
getHen() //
  .then(getEgg)
  .catch((error) => '🍞')
  .then(cook)
  .then(console.log)
  .catch(console.log);
