## _Introduction to the DOM in JavaScript_
The DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. JavaScript can use the DOM to access and manipulate a web page.

### Accessing the DOM
The document object represents the entire web page. To access any element on the page, you start with the document object.

```
// Get document object
const document = window.document; 
// Get HTML element by ID
const section = document.getElementById("main-section");
```

### Modifying the DOM
The DOM provides methods for modifying page elements. For example:

```
// Get element
const heading = document.getElementById("page-title");
// Modify text
heading.textContent = "New page title"; 
// Modify CSS styles
heading.style.color = "blue";
```

### Creating Elements
You can create new DOM elements and add them to the page.

```
// Create new element 
const newDiv = document.createElement("div");
// Add CSS styles
newDiv.style.cssText = "background: grey; font-size: 20px";
// Add text content 
newDiv.textContent = "This is a new element";
// Add to document
document.body.appendChild(newDiv);
```

#### The DOM allows JavaScript to dynamically modify practically anything about a webpage. It is a very powerful tool for building interactive webpages.