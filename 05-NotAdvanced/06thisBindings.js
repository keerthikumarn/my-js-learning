
var keerthi = {
    firstName: "Keerthi",
    lastName: "Kumar",
    role: "Technical Architect",
    getInfo: function() {
        console.log(`
        First Name is: ${this.firstName}
        Last Name is: ${this.lastName}
        Role is: ${this.role}`);
    },
};


//keerthi.getInfo();

var raghav = {
    firstName: "Raghavendra",
    lastName: "Nayak",
    role: "Technical Architect"
}

var raghavInfo = keerthi.getInfo.bind(raghav);
raghavInfo();
