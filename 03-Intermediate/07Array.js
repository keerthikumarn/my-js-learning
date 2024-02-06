var fruits = ["apple", "banana", "papaya", "dragon fruit"];

var states = new Array("Karnataka", "Delhi", "Telangana", "Assam");

//console.log(fruits[2]);

//console.log(states.length);

states[0] = "Jammu";

//console.log(states);

fruits.pop(); //removes the last element from the array
//console.log(fruits);

fruits.unshift("orange"); //adds/shifts the element to the beginning of the array
//console.log(fruits);
fruits.shift(); //removes the element from the front of the array
//console.log(fruits);

console.log(fruits.indexOf("banana")); //returns of the index of the value if found in the array

console.log(fruits.indexOf("grapes")); //returns -1 since the element doesnt exist in the array

