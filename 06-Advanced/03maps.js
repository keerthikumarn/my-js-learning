var myMap = new Map();

myMap.set(1, "Keerthi Kumar");
myMap.set(2, "Gautam");
myMap.set(3, "Raghav");
myMap.set(4, "Vineeth");

console.log(myMap);

/*for(let key of myMap.keys()) {
    console.log(`key is ${key}`)
}

for(let value of myMap.values()) {
    console.log(`value is ${value}`)
}*/

for(let [key, value] of myMap) {
    console.log(`key is ${key} and value is ${value}`);
}

myMap.forEach((v,k) => console.log(`key is ${k} and value is ${v}`));

myMap.delete(2);

console.log(myMap);

