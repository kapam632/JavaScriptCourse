function forEach(arr, func) {
    check(arguments)
    for (let i =0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
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

const arr = [1,2,3];
forEach(arr, function(item, i, arr) {console.log(item, i, arr)});