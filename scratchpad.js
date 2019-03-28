function variableName(name) {
	if(name.charCodeAt(0) < 65){
		return false
	}else{
		for(let i = 0; i < name.length; i++){
			// console.log(name.charCodeAt(i))
			if(name.charCodeAt(i) < 47){
				return false
			} else if (name.charCodeAt(i) > 57 && name.charCodeAt(i) < 65){
				return false
			} else if (name.charCodeAt(i) > 90 && name.charCodeAt(i) < 95){
				return false
			} else if (name.charCodeAt(i) == 96 || name.charCodeAt(i) > 122){
				return false
			}
		}
	}
	return true;
}


console.log(variableName("2kkk2w2")) //false
console.log(variableName("kk---$k2w2")) //false
console.log(variableName("%kk2w2")) //false
console.log(variableName("kkk2w2kkkkk")) //trrue
console.log(variableName("k__kk2w2")) //true