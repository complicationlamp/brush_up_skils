function reverseArray(arr){
  let newArr = []
  while(arr.length > 0){
     newArr.push(arr.pop());     
   };
  return(newArr)
};

function reverseArrayInPlace(array) {
  for (let i = 0; i < 1; i++) {
    let old = array[i]
    // console.log(array[array.length - 1 - i])
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]