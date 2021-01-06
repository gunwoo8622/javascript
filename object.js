'use strict';
// Object
// one of the JavaScript's data types.
// a collection of related data and/or funcitonality.
// Nearly all objects in JavaScript are instance of Object.
// object = { key: value };
// MDN Object 사이트

// 추가될 때마다 관리하기 너무 힘들다
// const name = 'gw';
// const age = 4;
// print(name, age);
// function print(name, age) {
//   console.log(name);
//   console.log(age);
// }
// object를 사용한다.

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const gw = { name: 'gw', age: 4 };
print(gw);

// with JavaScript magic (dynamically typed language)
// can add properties later
gw.hasJob = true;
console.log(gw.hasJob);

// can delete properties later
delete gw.hasJob;
console.log(gw.hasJob);

// 2. Computed properties(계산된 프로퍼티)
// key should be always string ''
console.log(gw.name); // . 코딩하는 그 순간 그 키에 해당하는 값을 받아 오고 싶을 때 쓴다.
console.log(gw['name']); // [''] 정확하게 어떤 키가 필요한 지 모를 때 즉 런타임에서 결정될 때 이 컴퓨터에 프로퍼티를 쓴다.
gw['hasJob'] = true;
console.log(gw['hasJob']);

function printValue(obj, key) {
  // 이 함수는 오브젝트와 키를 받아서 오브젝트에 있는 키의 상응하는 밸류를 출력하는 함수
  // 그래서 언제 어떤 key를 받을 지 알 수 없다. [''] 사용한다.
  console.log(obj[key]);
}
printValue(gw, 'name');
printValue(gw, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('gw', 30);
console.log(person4);

// JS에 class가 없을 때 이런 식으로 작성
function makePerson(name, age) {
  return {
    name,
    age,
  };
}
// 순수하게 object를 생성하는 함수 이름을 대문자로 시작한다.
// class constructor 하는 것처럼 생성한다.
// 4. Consturtor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in gw);
console.log('age' in gw);
console.log('random' in gw);
console.log(gw.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in gw) {
  console.log(key);
}

// for (value of iterable) array, list 사용
const array = [1, 2, 3];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assing(dest, [obj1, obj2, obj3...])
const user = { name: 'gw', age: 20 };
const user2 = user;
user2.name = 'coder';
console.log(user.name);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
console.log(user4);
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 나온 키가 앞에 나온 키를 덮는다.
console.log(mixed.color);
console.log(mixed.size);
