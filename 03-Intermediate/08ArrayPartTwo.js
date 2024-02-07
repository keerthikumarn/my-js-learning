var isEven = (number) => {
    /*if(number % 2 == 0) {
        return true;
    }
    return false;*/
    return number % 2 == 0;
}

//console.log(isEven(2));
//console.log(isEven(5));

//var result = [4,6,24,34].every(isEven);

var result = [4,6,24,36, 51].every((num) => num % 2 ===0);

console.log(result);