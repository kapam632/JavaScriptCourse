function arrayFill(value, count) {
    check(arguments);
	return Array(count).fill(value);
}

function check(args) {
    if (args.length < 2) {
        throw new Error('one of the required parameters is missing');
     }
    if (!Array.isArray(args[0]) && typeof args[0] !== 'number' &&  typeof args[0] !== 'string' && typeof args[0] !== 'object') { 
        throw new TypeError(args[0] + ' parameter is not an array or number or string or object');
    }
    if (typeof args[1] != 'number') {
        throw new TypeError(args[1] + ' is not a number');
    }
}
console.log(arrayFill('x',5)); // [x,x,x,x,x]