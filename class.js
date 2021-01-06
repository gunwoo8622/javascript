'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance
//    (기존의 존재했던 JS에 class문법만 추가됨)

// 1. Class declarations
class Person {
  // constructor(생성자)
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const gw = new Person('gw', 20);
console.log(gw.name);
console.log(gw.age);
gw.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // } 너무 공격적
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment {
  publicField = 2;
  #privateField = 0;
  // # 붙이면 private, class내부에서만 작동, 접근 가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
// static 클래스 자체에 들어있는 값
//  -오브젝트, 들어오는 데이터에 상관없이 공통적으로 클래스에서 쓸 수 있는거라면
//   static, static method를 이용해 작성하는 것이 메모리의 사용을 조금 더 줄여줄 수 있다.
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined ref에 저장된 게 아니라 클래스 자체에 저장되어있다.
console.log(Article.publisher); // 클래스 이름을 통해 불러올 수 있다.
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // overriding 필요한 함수만 재정의해서 쓴다.
  draw() {
    // super 부모의 함수를 사용하고 싶을 때 사용
    super.draw();
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); // 모든 class들은 Object를 상속한다.

// MDN JavaScript reference
