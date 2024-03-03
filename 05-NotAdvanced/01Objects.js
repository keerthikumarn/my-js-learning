var Employee = function(empName, designation, age) {
    this.empName = empName;
    this.designation = designation;
    this.age = age;
    this.getAge = function() {
        console.log(`Employee age is: ${this.age}`);
    };
};

//var keerthi = Employee("Keerthi Kumar", "Technical Architect", 39); 
//console.log(keerthi); // this will print undefined as no object is created yet

Employee.prototype.getFullName = function() {
    console.log(`Your full name : ${this.empName}`);
};

var keerthi = new Employee("Keerthi Kumar N", "Technical Architect", 39); 
//console.log(keerthiObj);
keerthi.getFullName();
keerthi.getAge();

var gautam = new Employee("Gautam A P", "Development Manager", 38); 
//console.log(gautam);
gautam.getFullName();
gautam.getAge();