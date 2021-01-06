// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
// global scope은 블록{} 안, 밖 모두 출력 가능
// global 변수는 어플리케이션이 시작할 때부터 끝날 때까지
// 메모리에 탑재되어 있기 때문에 최소한으로 쓴다.
// class, 함수 등 필요한 부분에 정의해 쓴다.
{
  let name = 'gw';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);

// var (don't ever use this!)
// var hoisting끌어올려주다 (move, declaration from bottom to top)
//  -어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어올리는 것
// has no block scope

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Imutable dat types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// mutable : 값이 계속 변경되는
// favor imnutable data type always for a few reasons:
//  - security 해킹 방지
//  - thread safety 여러 쓰레드가 동시에 변수에 접근하면 위험
//  - reduce human mistakes

// 4. Variable types
// primitive, single item (더 이상 작아질 수 없는 타입):
//  - number, string, boolean, null, undefined, symbol
//  - 메모리에 바로 저장됨
// object, box container (single item을 묶어서 한 단위, 박스로 관리)
//  - 너무 커서 reference가 메모리에 저장됨 그래서 value값 변경 가능
// function, first-clas function
//  -first-clas function이란?
//  function도 데이터 타입 중 하나이다. 그래서 변수의 할당, 함수의 파라미터(인자), return 타입으로 전달 가능

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN(not a number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53 ~ 2**53)
// 끝에 n을 붙이면 bigInt로 간주 크롬에서 동작 가능
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null(텅텅 비어있는 empty값, 아무것도 아닌 값)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 동시다발적으로 일어나는 코드에서 우선순위를 주고 싶을 때 고유한 식별자를 만들 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
// symbol은 바로 출력하면 에러나서 description으로 변환해서 출력함
console.log(
  `value: ${symbol1.description}, type: ${typeof symbol1.description}`
);

// object, real-life objects, data structure
const gw = { name: 'gw', age: 20 };
gw.age = 21; // 이렇게 변경 가능

// 5. Dynamic typing: dynamically typed language
// JS는 선언할 때 어떤 타입인지 선언하지 않고 런타임(프로그래밍이 동작할 때) 할당된 값에 따라 타입이 변경된다.
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// TypeScript JS위에 type이 추가되었다
// TS는 JS로 변환해야 한다
