'use strict';

// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// preIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

//  6. Logical operator: ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
// 연산을 많이하는 함수, expression를 뒤에 둔다
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first truthy value
console.log(`and: ${value1 || value2 || check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('🐶');
  }
  return true;
}

// !(not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// 타입을 변경해서 검사한다.
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// 타입이 다르면 false
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const gw1 = { name: 'gw' };
const gw2 = { name: 'gw' };
const gw3 = gw1;
console.log(gw1 == gw2);
console.log(gw1 === gw2);
console.log(gw1 === gw3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if , else if, else
const name = 'gw';
if (name === 'gw') {
  console.log('Welcome, gw!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value : value2;
console.log(name === 'gw' ? 'yes' : 'no');

// 10. Switch statement
// use for multile if checks
// use for enum-like value chech
// use for multiple type checks in TS
// if문에서 else if를 반복한다면 switch를 사용 고려
// TS에서 정해져있는 타입을 검사하거나 enum 비슷한 것들을 검사할 때 switch사용하면 가독성 좋다.
const browser = 'Chrome';
switch (browser) {
  case 'IE':
    console.log('go away');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Looops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
} while (i > 0);

// for loop, for(begin; conditionl; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  //inline variable declaration 지역 변수 선언
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
// 이렇게 계산하면 O(n^2), cpu에 좋지 않다.

// break, continue
// 01. iterate from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
} // continue를 사용하는 것보다 원하는 것만 출력하는 것이 더 좋다.

// 02. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 10; i++) {
  if (i === 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
