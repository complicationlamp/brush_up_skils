function almostIncreasingSequence(n) {
	let count = 0;
	for(let i = 0; i < n.length; i ++){
	  if(n[i] >= n[i+1]){
		count += 1;
	  } else if(n[i] === n[i + 1]){
		count += 1;
	  }else if(n[i] === n[i + 2]){
		count += 1;
	  }
	};
	// if(count > 1){
	//   return false;
	// }else{
	//   return true
	// }
	return count
	
  }
  
  console.log(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6]))
  // console.log(almostIncreasingSequence([1, 2, 1, 2]))//f
  // console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]))