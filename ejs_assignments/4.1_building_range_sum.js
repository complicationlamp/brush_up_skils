// function range(start, stop, step){
//   let arr= [start]
//   let num = start 
//   while(num < stop){
//     if((num += step) <= stop)
//     arr.push(num);
//   }
//   return(arr)
// }

function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(numbers){
  let result = 0
  for(let number of numbers){
    result += number
  }
  return(result);
}
// console.log(range(10, 2, -1))
// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(sum(range(1, 55)));