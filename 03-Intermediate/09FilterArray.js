var arr = [2,4,56,7,89,76];

//console.log(arr.fill('h',3,5));

//console.log(arr.fill('empty'));

const numbers = [22,34,55,12,9,67,0,78];

const result = numbers.filter( (num) => num !=  55);

//console.log(result);

var students = ["keerthi", "vineeth", "raghav", "prajwal", "mourvi", "shilpa"];

//console.log(students.slice(1,5)); //this works are start and end range !

//1 is start value, 2 is count value and not the range and the last value is the one to be replaced to
students.splice(1,2,"test"); 

console.log(students);
