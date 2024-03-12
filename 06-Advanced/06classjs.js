class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    #courseList = [];

    getInfo() {
        return {name: this.name, email: this.email}
    }

    enrollCourse(name) {
        this.#courseList.push(name);
    }

    getCourseList() {
        return this.#courseList;
    }
}


module.exports = User;

const keerthi = new User("Keerthi Kumar N", "keerthi@no-reply.com");
console.log(keerthi.getInfo());
keerthi.enrollCourse("Advanced Java");
keerthi.enrollCourse("Springboot");
console.log(keerthi.getCourseList());
console.log(keerthi.courseList);