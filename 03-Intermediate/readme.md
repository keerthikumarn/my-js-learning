## _Functions_

Functions in JavaScript allow you to encapsulate reusable blocks of code. They can be defined using the function keyword. Here’s an example:

```
// Function declaration
function greet(name) {
  console.log(`Hello, ${name}!`);
}
// Function invocation
greet("Alice"); // Output: Hello, Alice!
```

# _Execution Context and Hoisting_

**Execution Context**: It represents the environment in which your code runs. It includes the global object (e.g., window in the browser) and a reference to the current object (this).
**Hoisting**: Variables and function declarations are moved to the top of their respective scopes during compilation. For example:

```
console.log(age); // Output: undefined
var age = 30;
```
## _Scope Chaining:_
JavaScript has lexical scoping, which means variables are accessible within their containing functions. Scope chaining allows nested functions to access variables from outer scopes:

```
function outer() {
  const outerVar = "I'm from outer scope";
  function inner() {
    console.log(outerVar); // Access outerVar from outer scope
  }
  inner();
}
outer();
```

## _This keyword_
* **this** refers to the current execution context (usually an object).
* Its value depends on how a function is called (e.g., method invocation, constructor, or global context).
```
const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};
person.greet(); // Output: Hello, Alice!
```

## _Arrays_
Arrays are ordered collections of elements. They can hold any data type:

```
const fruits = ["apple", "banana", "orange"];
console.log(fruits[1]); // Output: banana
```

## _Loops_

* **for** loop
```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

* **do-while** loop
```
let count = 0;
do {
  console.log("Count:", count);
  count++;
} while (count < 3);
```

* **while** loop
```
let num = 1;
while (num <= 5) {
  console.log(num);
  num++;
}
```
