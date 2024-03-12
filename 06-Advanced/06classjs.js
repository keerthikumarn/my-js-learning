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

class SubAdmin extends User {
    constructor(name, email) {
      super(name, email);
    }
    getAdminInfo() {
      return "I am subadmin";
    }
    login() {
      return "login for admin only";
    }
  }


module.exports = User;

const keerthi = new User("Keerthi Kumar N", "keerthi@no-reply.com");
//console.log(rock.getInfo());
keerthi.enrollCourse("Springboot");
// console.log(rock.getCourseList());
// console.log(rock.courseList);

const gautam = new SubAdmin("Gautam", "gautam@no-reply.com");
console.log(gautam.getAdminInfo());
console.log(gautam.login());

console.log(gautam.getInfo());