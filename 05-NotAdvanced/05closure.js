function init() {
    console.log("About to print the first name...");
    var firstName = "keerthi";
    function printFirstName() {
        console.log(firstName);
    }
    return printFirstName;
}

var value = init();

value();

function add(x) {
    return function(y){
        return x + y;
    };
}

var addNumbers = add(5);
console.log(addNumbers(6));

console.log(add(45)(56));