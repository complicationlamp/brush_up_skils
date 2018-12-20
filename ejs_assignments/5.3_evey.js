// Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

// function every(array, test){
//   if(!array.some(test)){
//      return false
//   }
//   else{
//     return true
//   }
// }
function every(array, predicate) {
  return !array.some(element => !predicate(element));
}

// function every(array, test) {
//   for(let num of array){
//     if(!test(num)) return false
//   }
//     return true
// }

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true