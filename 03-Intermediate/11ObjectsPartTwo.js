var employee = {
    firstName: "Keerthi",
    lastName: "Kumar",
    designation: "Technical Architect",
    place: "Bangalore",
    subjects:[],

    enrollSubjects: function(subjectName) {
        this.subjects.push(subjectName);
    },
    
    getSubjectCount: function() {
        return `${this.firstName} is having a total of ${this.subjects.length} subjects`;
    }
};



//console.log(employee.firstName);
//console.log(employee["lastName"]);
console.table(employee);
console.log(employee.getSubjectCount());
employee.enrollSubjects("Java");
console.log(employee.getSubjectCount());