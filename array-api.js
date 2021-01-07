// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(' and ');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍊';
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5,4,3,2,1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(); // 배열 자체를 리버스로하고 리턴값도 리버스로 변환한다.
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
// splice는 원래 배열에 영향을 끼침
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, array.length);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => {
    return student.score === 90;
  });
  const result1 = students.find((student) => student.score === 80);
  console.log(result);
  console.log(result1);
}

// Q6. make an array of enrolled students
// 값이 true이면 가져온다
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88];
// 콜백함수로 전달되는 인자는 최대한 이해하기 쉽게 정한다.
// students배열을 이용하니까 콜백함수는 student로 한다.
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
console.clear();
{
  const result = students.some((student) => student.score < 50);
  console.log(result);
  const result2 = students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
console.clear();
{
  const result = students.reduce((prev, curr) => {
    console.log('------------------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result);

  const result2 = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result2 / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
console.clear();
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
  console.log(result);
}
