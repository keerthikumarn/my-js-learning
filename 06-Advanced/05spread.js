// var value = Math.max(2, 32, -5, 54, 87,101, 45, 3, 90);
// console.log(value);

// var myObj = {};

// Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 });
// console.log(myObj);

function sumOne(a, b) {
    return a + b;
  }
  
var myArray = [5, 4];
console.log(sumOne(...myArray)); // spread Operator

function sumTwo(a, b, ...args) {
    console.log(args);
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
      sum += arg;
    }
    return [sum, multi];
  }
  
  console.log(sumTwo(2, 3, 1, 1, 1));