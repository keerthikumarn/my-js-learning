console.log(this)

var user = {
    firstName: "Keerthi",
    lastName: "Kumar",
    courseCount: 5,
    getCourseCount: function() {
        console.log("Line 8", this);
        function sayHi() {
            console.log("Hi");
            console.log("LINE 10", this);
        }
        sayHi();
    },
};

user.getCourseCount();