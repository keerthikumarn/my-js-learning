const first = () => {
    return "I am first";
  };
  
  const second = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("I am second");
      }, 3000);
    });
  };
  
  const third = () => {
    return "I am third";
  };
  
  const callMe = async () => {
    let valOne = first();
    console.log(valOne);
  
    let valTwo = await second();
    console.log(valTwo);
  
    let valThree = third();
    console.log(valThree);
  };
  
  callMe();