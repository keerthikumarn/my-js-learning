/*for(let idx = 1; idx <= 15; idx++) {
    console.log(idx);
}*/

const states = ["Karnataka", "Delhi", "Rajasthan", "Tamilnadu", 1965, "Telangana"];

for(let idx = 0; idx < states.length; idx++) {
    if(typeof states[idx] !== "string")
        break; 
    console.log(states[idx]);
}

let idx = 0;

console.log("\nDemo of while-loop");
while(idx < states.length) {
    console.log(states[idx]);
    idx++;
}

console.log("\nDemo of do-while-loop");

let i = 0;
do{
    console.log(states[i]);
    i++;
}while(i < states.length);
