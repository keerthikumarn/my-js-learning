var Employee = function(empName, designation, age) {
    this.empName = empName;
    this.designation = designation;
    this.getAge = function() {
        console.log(`Employee age is: ${this.age}`);
    };
};

var keerthi = Employee("Keerthi Kumar", "Technical Architect", 39); 
console.log(keerthi); // this will print undefined as no object is created yet

var keerthiObj = new Employee("Keerthi Kumar", "Technical Architect", 39); 
console.log(keerthiObj); // this will print undefined as no object is created yet