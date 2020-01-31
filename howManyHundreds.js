// function howManyHundreds(num) {
//   if(num >= 100) {
//     let x = num / 100;
//     return Math.trunc(x);
//   }
//   else if (num < 100) {
//     return 0;
//   }
// }
// console.log(howManyHundreds(1234), "=?", 12);
// console.log(howManyHundreds(1000), "=?", 10);
// console.log(howManyHundreds(894), "=?", 8);
// console.log(howManyHundreds(520), "=?", 5);
// console.log(howManyHundreds(99), "=?", 0);
// console.log(howManyHundreds(0), "=?", 0);


function howManyHundreds(num) {
  var result = num / 100;
  return Math.trunc(result);
}
console.log(howManyHundreds(1234), "=?", 12);
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);