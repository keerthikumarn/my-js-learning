## _Objects in JavaScript_
Objects are an important data type in JavaScript. They allow you to store data in a structured, key-value manner.

### Creating Objects
There are a few ways to create objects in JavaScript:

The DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects, so that programming languages can interact with the page.

```
// Using object literals
const person = {
  firstName: "Keerthi",
  lastName: "Kumar",
  age: 39
};

// Using the Object constructor
const person = new Object();
person.firstName = "Java";
person.lastName = "Developer";
person.age = 27; 

// Using an object constructor
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
const person = new Person("Test", "User", 48);
```

### Accessing Object Properties
You can access object properties using dot notation or bracket notation:

```
const employee = {
  firstName: "Keerthi"  
};
console.log(employee.firstName); // dot notation
console.log(employee["firstName"]); // bracket notation
```

### Object Methods
You can add methods (functions inside objects) like this:

```
const employee = {
  firstName: "Kumar",
  greet() {
    console.log(`Hello, my name is ${this.firstName}!`);  
  }
}
person.greet(); // call the method
```

### Proto in javascript

All JavaScript objects have a hidden __proto__ property that makes inheritance and the prototype chain work in JavaScript.

Understanding Prototype Objects
When you try to access a property on an object, if that property doesn't exist on the object itself, JavaScript will automatically check the object's prototype object instead.

So you can have objects that inherit properties and methods from a prototype:

```
// Person constructor 
function Person(firstName) {
  this.firstName = firstName;
}
// Add a method to Person.prototype
Person.prototype.sayHi = function() {
  console.log(`Hello, I'm ${this.firstName}`);  
}
// peter inherits the sayHello method  
const kumar = new Person('Kumar'); 
kumar.sayHi(); // => "Hello, I'm Kumar"
```
Here kumar inherits from Person.prototype. This is known as prototypal inheritance.

### The Prototype Chain
This __proto__ linking from one object to another creates a prototype chain. When we try to access properties/methods JavaScript will walk up this chain until it finds it.

### Instanceof
You can check if an object inherits from another object using the instanceof operator:

```
kumar instanceof Person; // returns true
```
The prototype chain is an essential mechanism in JS and allows for inheritance and reuse in an elegant way.

## Lexical Scoping and Closure in JavaScript
In JavaScript, lexical scoping and closure are two fundamental concepts that govern how variables and functions are accessed and executed within a program. Understanding these concepts is crucial for writing efficient, maintainable, and bug-free code.

###mm Lexical Scoping
Lexical scoping, also known as static scoping, is the way in which the JavaScript engine determines the scope (visibility and accessibility) of variables and functions. It is based on the physical location of the code within the source file.

In JavaScript, there are three types of scopes:

- #### Global Scope: 
  Variables and functions declared outside of any function or block are part of the global scope and can be accessed from anywhere in the program.
- #### Function Scope: 
  Variables and functions declared within a function are part of the function scope and are only accessible within that function or its nested functions.
- #### Block Scope:
  With the introduction of let and const in ES6 (ECMAScript 2015), variables declared with these keywords have block scope, which means they are only accessible within the block (e.g., if statement, for loop, etc.) in which they are defined.

JavaScript uses lexical scoping to determine the scope of variables and functions based on their physical location in the code. It follows the principle of inner scope having access to outer scope, but not vice versa.

```
// Example of lexical scoping
let globalVar = "global";

function outerFunction() {
  let outerVar = "outer";

  function innerFunction() {
    let innerVar = "inner";
    console.log(globalVar); // Can access globalVar
    console.log(outerVar); // Can access outerVar
    console.log(innerVar); // Can access innerVar
  }
  innerFunction();
}
outerFunction();
```

### Closure
In JavaScript, a closure is a combination of a function and the lexical environment within which that function was declared. It allows an inner function to access and remember the variables from its outer (enclosing) function, even after the outer function has finished executing.

Closures are created automatically in JavaScript when a nested function is defined within an outer function. The inner function "closes over" the variables and parameters of the outer function, even after the outer function has finished executing.

```
// Example of closure
function outerFunction() {
  let outerVar = "outer";

  function innerFunction() {
    console.log(outerVar); // Can access outerVar from the outer scope
  }
  return innerFunction;
}
const closure = outerFunction();
closure(); // Output: "outer"
```
In the above example, the innerFunction has access to the outerVar variable from its outer scope, even after outerFunction has finished executing. This is because innerFunction has "closed over" the lexical environment of outerFunction.

Closures are frequently used in JavaScript for data privacy, event handling, and creating function factories or higher-order functions.

### Conclusion
Lexical scoping and closure are powerful concepts in JavaScript that allow for encapsulation, data privacy, and code organization. Understanding these concepts is essential for writing efficient and maintainable JavaScript code, especially when working with asynchronous code, callbacks, and event handling.

### Binding in JavaScript
In JavaScript, the this keyword is a reference to the object that the current function is a property of. However, the value of this can be bound to different objects depending on the context. Binding is the process of tying a function to an object, ensuring that the this value inside the function is bound to the correct object context.

#### Call, Apply, and Bind
JavaScript provides three methods for binding the this value: call(), apply(), and bind().

**call()** 
The call() method invokes a function with a specified this value and arguments provided individually.

```
const person = {
  name: 'John',
  greet: function(greeting) {
    console.log(`${greeting}, ${this.name}`);
  }
}
const anotherPerson = {
  name: 'Jane'
}
person.greet.call(anotherPerson, 'Hello'); // Output: Hello, Jane
```
**apply()**
The apply() method is similar to call(), but it accepts an array as the second argument for the function parameters.
```
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers); // Output: 7
```

**bind()**
The bind() method returns a new function with a specified this value and initial arguments provided.
```
const person = {
  name: 'John',
  greet: function(greeting, message) {
    console.log(`${greeting}, ${this.name}. ${message}`);
  }
}
const anotherPerson = {
  name: 'Jane'
}

const greetJane = person.greet.bind(anotherPerson, 'Hello');
greetJane('How are you?'); // Output: Hello, Jane. How are you?
```
**Arrow Functions**
Arrow functions, introduced in ES6, have a lexical this binding, meaning that the value of this is determined by the surrounding lexical scope, not the function itself.
```
const person = {
  name: 'John',
  greet: function() {
    const greetArrow = () => {
      console.log(`Hello, ${this.name}`);
    }
    greetArrow();
  }
}
person.greet(); // Output: Hello, John
```

### Use Cases
Binding is commonly used in scenarios where you want to ensure that a function has the correct object context, such as:

- Working with callbacks and event handlers
- Implementing object methods that need to be passed as arguments to other functions
- Creating reusable function objects with predefined contexts
