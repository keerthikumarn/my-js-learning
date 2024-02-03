var user = "2";

/* Loose check */
if(2 == user) {
    console.log("Condition satisfied");
}

/* Strict check / type coercion - does check the variable type as well*/
if(2 === user) {
    console.log("Condition satisfied...");
}