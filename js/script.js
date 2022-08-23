'use strict';

//task1
// const getFactorial = (n) => {
//   if (n === 1 || n === 0) return n;
//   return n * getFactorial(n - 1);
// }
// console.log(getFactorial(3));

//task2
// const pow = (num,degree) => {
//   if (degree === 1) return num;
//   return num * pow( num,degree -1)
// }
// console.log(pow(5,2));

//task3
const sum = (a,b) => {
if (a === 0) return b;
return sum(a -= 1, b += 1);



}
console.log(sum(60, 5))
