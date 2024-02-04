function sayHi() {
    console.log("hello..keerthi kumar .. you have been called thru a function !!")
}

function sayHello(name) {
    console.log(`hello..", ${name}, how are you doing today??`);
}

function sayNamaste(name) {
    return `Hello.. ${name}, Namaste :-)`;
}

sayHi();
sayHello('keerthi');

var greeting = sayNamaste('keerthi');

console.log(greeting);