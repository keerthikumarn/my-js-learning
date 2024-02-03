var sellingPrice = 199;
var acutalPrice = 799;

var discountInPercentage = ((acutalPrice - sellingPrice) / acutalPrice) * 100;
console.log("Discount percentage : ", discountInPercentage);

displayDiscountPercentage = Math.round(discountInPercentage);

console.log("Discount : ", displayDiscountPercentage +"% off");

var result = sellingPrice < acutalPrice;
console.log(result);
console.log(typeof result);
console.log(typeof 34);
console.log(typeof "javascript");
console.log(typeof value);