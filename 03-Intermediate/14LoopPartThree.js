const names = ["cricket",  "football", "kabbaddi", "hockey", "baseball"];

for(const name of names) {
    console.log(name);
}

const symbols = {
    yt: "youtube",
    ig: "instagram",
    fb: "facebook",
    so: "stackoverflow"
}

for(const obj in symbols) {
    console.log(`Key is ${obj} and its value : ${symbols[obj]}`);
}