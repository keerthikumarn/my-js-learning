var employee = ["Keerthi Kumar", 3014, "Technical Architect"];

/**Assigning the individual values to different variables for accessing */
//const empName = employee[0];
//const empRole = employee[2];

// Destructuring of data in an array
var[empName, empNo, empRole] = employee;

console.log(empName);
console.log(empNo);
console.log(empRole);

const Student = {
    name: "Gautam",
    roleNo: 3010,
    course: "MCA"
}

console.log(Student.course);

const {stuName, roleNo, course} = Student;
console.log(roleNo);