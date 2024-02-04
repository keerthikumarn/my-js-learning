computeTipAmount(30);

computeTipAmount("67");

function computeTipAmount(billAmount) {
    var bill = parseInt(billAmount);
    console.log(bill + 5);
}

computeBigTipAmount(567); //will throw undefined

/* function assigned to a variable */
var computeBigTipAmount = function(billAmount) {
    var bill = parseInt(billAmount);
    console.log(bill + 5);
}

console.log(name); //throws undefined

var name = "test_user";

/**
 * NOTE: 
 * Function declarations are scanned and made available.
 * Variable declarations are scanned and made undefined.
 */