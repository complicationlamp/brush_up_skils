function alphabeticShift(inputString) {
	let finalStr = ''
	for(let i = 0; i < inputString.length; i ++){
		let x = inputString.charCodeAt(i)
		if(inputString.charCodeAt(i) == 122){
			finalStr += String.fromCharCode(97);
		}
		else{
			finalStr += String.fromCharCode( x +1 )
		}
	}
	return finalStr
}

console.log(alphabeticShift('crazy'))

// inputString: "crazy"
// Expected Output:
// "dsbaz"