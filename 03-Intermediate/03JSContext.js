printHello();

function printHello() {
    console.log("Hi..how are you ?");
}

printHello = () => {
    console.log("Im a lambda function");
}

if(2 === "2") {
    console.log("This is true !!")
}

var myName = "keerthi";
if(myName === window.name) { //window is global context available only in the browser
    console.log("This statement is also true !!");
}