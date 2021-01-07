'use strict';

// JSON
// JavaScript Object Notation
// 오버로딩Overloading: 함수 이름은 동일하지만 어떤 파라미터, 몇 개의 파라미터를 전달하는지 각가 다른 방식으로 호출하는 것

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple","banana"] "" 더블쿼터 json양식

const rabbit = {
  // rabbit 오브젝트
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'gw' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
}); // json으로부터 만든 obj는 string 타입으로 reviver을 이용해 원하는 형태(object)로 바꾼다.
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate()); // rabbit.birthDate는 object타입
// console.log(obj.birthDate.getDate()); string타입이라 에러
console.log(obj.birthDate.getDate());
