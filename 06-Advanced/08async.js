const first = () => {
    console.log("I came first");
};

const second = async() => {
    setTimeout(() => {
        console.log("I came wooooooh");
      }, 3000);
    //console.log("I came second");
};

const third = () => {
    console.log("I came third");
};

first();
second();
third();