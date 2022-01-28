function filter(arr, callback) {
    check(arguments);
    const result = [];
    for (let i = 0; i < arr.length; i ++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function check(args) {
    if (args.length < 2) {
        throw new Error('one of the required parameters is missing');
     }
    if (!Array.isArray(args[0])){
        throw new TypeError(args[0] + ' parameter is not an array');
    }
    if (typeof args[1] != 'function') {
        throw new TypeError(args[1] + ' is not a function');
    }
}

const arr = [1,-2,3];
console.log(filter(arr, function(item, i, arr) {return item < 2;}));