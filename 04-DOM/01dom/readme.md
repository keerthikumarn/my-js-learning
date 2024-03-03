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
