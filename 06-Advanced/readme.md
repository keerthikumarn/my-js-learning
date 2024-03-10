### Var and Let in JavaScript
In JavaScript, var and let are both used for variable declaration, but they have some key differences in terms of scope and behavior.

**Var**
var is the traditional way of declaring variables in JavaScript. Variables declared with var have either global or function scope, depending on where they are defined.

**Global Scope**
If a variable is declared outside of any function or block, it has global scope. This means it can be accessed and modified from anywhere in the code.

```
var globalVar = 'Hello';
function sayHello() {
  console.log(globalVar); // 'Hello'
}
sayHello();
```

### Function Scope
If a variable is declared inside a function, it has function scope. This means it can only be accessed and modified within that function.
```
function sayHello() {
  var functionVar = 'Hello';
  console.log(functionVar); // 'Hello'
}
sayHello();
console.log(functionVar); // ReferenceError: functionVar is not defined
```

### Hoisting
One key behavior of var is that variable declarations are hoisted to the top of their scope (either global or function), while the assignments are not. This can lead to unexpected behavior and potential bugs.
```
console.log(varVariable); // undefined
var varVariable = 'Hello';
```

### Let
let was introduced in ES6 (ES2015) and provides a more intuitive way of declaring variables with block-level scope. Variables declared with let are only accessible within the block they are defined in, such as within a loop or an if statement.
```
let globalVar = 'Hello';
if (true) {
  let blockVar = 'World';
  console.log(globalVar + ' ' + blockVar); // 'Hello World'
}
console.log(globalVar); // 'Hello'
console.log(blockVar); // ReferenceError: blockVar is not defined
```
In the example above, blockVar is only accessible within the if block, and trying to access it outside the block results in a ReferenceError.