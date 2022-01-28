function f(arr) {
    if (!Array.isArray(arr)){
        throw new TypeError(args[0] + ' parameter is not an array');
    }
	var flatArr = arr.flat(Infinity);
  	if (flatArr.some(item => typeof item !== 'number')) {
    	throw TypeError('wrong type');
    }
  	const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return flatArr.reduce(reducer, 0);
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
const arr2 = [[[[[1,2]]]]];
f(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
f(arr3); // 6
const arr4 = [[[[[]]]]];
f(arr4); // 0
const arr5 = [[[[[],3]]]];
f(arr5); // 3