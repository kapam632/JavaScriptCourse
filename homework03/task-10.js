function reverse(arr){
    console.log(arr.length)
    if (!Array.isArray(arr) || arr.length === 0){
        throw new TypeError(args[0] + ' parameter is not an array or empty');
    }
	const l = arr.length
	rArr = Array(l);  
	for (i in arr) {
		rArr[l - i -1] = arr[i];
	}
  return rArr;
}

const arr = [3,2,1];
console.log(reverse(2)); // [1,2,3]