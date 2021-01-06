'use strict';

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times 재사용
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one functions === one thing 하나의 함수는 한 가지 일만 하게 만듦
// 변수는 명사로 이름 짓고 함수는 동사로 짓는다.
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS 함수는 object의 일종이다

function printHello() {
  console.log('Hello!');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(123);

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const gw = { name: 'gw' };
changeName(gw);
console.log(gw);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  //  예전에 이렇게 만들었음
  //   if (from === undefined) {
  //     from = 'unknown';
  //   }
  console.log(`${message} by ${from}`);
}
showMessage('hi!');

// 4. Rest parameters (added in ES6)
// ... 배열 형태 전달
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'gw');
printAll([1, 2, 3, 4]);

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
}
printMessage();

// 6. Return a value
// return이 안 들어가있으면 return undefined; 가 생략돼있다.
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable 변수처럼 다른 변수에 할당가능
// can be passed as an argument to other functions 인자 전달
// can be returned by another function 리턴값 전달

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoitsed)
// a function expresstion is created when the execution reaches it.
const print = function () {
  // anonymous function(이름없는 함수)
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain);

// 2. Callback fucntion using function expression
// 콜백함수: 함수를 전달해서 상황에 맞으면 전달된 함수를 불러라
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// annoymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debuggin in debugger's stack traces
// recursions(함수 안에서 자기 함수를 계속 호출하는 것, 피보나치 계산하거나 반복되는 평균값 계산할 때)
const printNo = function print() {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// alawys anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };
const simplePrint = () => console.log('simpleprint!');
const add = () => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a + b;
};

// IIFE: Immediately Invoked Function Expression
// 선언과 동시에 호출: (함수)();
(function hello() {
  console.log('IIFE');
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}
console.log(calculate('add', 3, 6));
