var name = "dummyUser";

console.log("Name at line 3 :",name);

function printName() {
    var name = "testUser";
    console.log("Name at line 6 :",name);
    printNameAgain();
}

function printNameAgain() {
    console.log("Name at line 12 :",name);
}

printName();

