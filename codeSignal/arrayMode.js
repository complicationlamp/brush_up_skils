function arrayMode(sequence) {
    const arr = sequence.sort();
	let modeCount = 0;
	let mode = arr[0];
	let count = 1;
	console.log('arr', arr)
	for(let i = 0; i < arr.length; i++){
		//if next is different and count < mode count, count =0
		if(arr[i]!==arr[i +1 ] && count < modeCount){
			count = 0;
		}
		//if next is different and count > mode count, make mode = arr[i], change modecount, reset count
		else if(arr[i]!==arr[i +1 ] && count > modeCount){
			mode = arr[i];
			modeCount = count;
			count = 1;
		}
		//if next is same +1 
		else if (arr[i] ==arr[i +1 ]){
			count +=1;
		}
		// console.log('count', count)
	}

	console.log('m', mode)
}


arrayMode([1, 3, 3, 3, 1])//3
arrayMode([1, 3, 2, 1])//1
arrayMode([1, 10, 10])//10



		// if (arr[i]==arr[i + 1 ] && count > modeCount){
		// 	count +=1;
		// 	mode = arr[i];
		// 	modeCount = count;
		// } else if(arr[i] ==arr[i+1]){
		// 	count+1
		// }
		// else if (arr[i]!==arr[i +1 ]){
		// 	// modeCount = count;
		// 	// mode = arr[i]
		// 	// console.log('count change', count)
		// 	count= 0;
		// }