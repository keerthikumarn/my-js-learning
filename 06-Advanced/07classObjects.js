const User = require("./06classjs.js");
const user = require("./06classjs.js");

const keerthiObj = new User("Keerthi Kumar N", "keerthi@no-reply.com");

console.log(keerthiObj.getInfo());

keerthiObj.enrollCourse("Advanced Java");
keerthiObj.enrollCourse("React Bootcamp");

console.log(keerthiObj.getCourseList());

let courses = keerthiObj.getCourseList();

courses.forEach(course => {
    console.log(course);
});