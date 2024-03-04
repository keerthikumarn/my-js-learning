var Employee = {
    name:"",
    getEmployeeName: function() {
        console.log(`Employee name is: ${this.name}`);
    },
};

var keerthiObj = Object.create(Employee);
console.log(keerthiObj); //will print empty {}
keerthiObj.name = "Keerthi Kumar N";
keerthiObj.getEmployeeName();

var gautamObj = Object.create(Employee, {
    name: {value: "Gautam A P"}
});

gautamObj.getEmployeeName();