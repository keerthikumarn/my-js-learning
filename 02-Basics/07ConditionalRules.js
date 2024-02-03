var user = "subadmin";

switch (user) {
    case "admin": 
        console.log("You are granted with full access");
        break;

    case "subadmin": 
        console.log("You are granted with create and delete tests access");
        break;

    case "user": 
        console.log("You are granted with create and delete tests courses");
        break;

    default:
        console.log("Dummy user");
        break;
}