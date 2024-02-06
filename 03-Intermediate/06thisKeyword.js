/*
Returns empty {} with node due to "empty scope" on running the below. However, the same line of code 
running on a browser will always returns a global context and returns the window object.
*/
console.log(this); 

var game = "cricket";

function sayGameName() {
    var playerName = "sachin";
    console.log(this);
}

sayGameName();


