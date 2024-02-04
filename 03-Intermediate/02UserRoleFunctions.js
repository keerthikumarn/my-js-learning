var getUserRole = (name, role) => {
    switch (role) {
        case "admin":
            return `${name} is an admin with all access`;
            break; // this is not necessary at all !

        case "subadmin":
            return `${name} is subadmin with access to create and delete all courses`;
            break; // this is not necessary at all !

        case "testprep":
            return `${name} is testprep with access to create and delete all tests`;
            break; // this is not necessary at all !

        case "user":
            return `${name} is an user to consume content`;
            break; // this is not necessary at all !
    
        default:
            return '${name} is a trial user';
            break;
    }
}

console.log(getUserRole('keerthi', 'admin'));
console.log(getUserRole('raghav', 'testprep'));