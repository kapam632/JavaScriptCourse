function reduce(arr, reducer, init) {
    check(arguments);
    var result = init;
    for (let i = 0; i < arr.length; i++) {
        result = reducer(result, arr[i], i, arr);
        
    }
    return result;
}
function check(args) {
    if (args.length < 3) {
        throw new Error('one of the required parameters is missing');
     }
    if (!Array.isArray(args[0])){
        throw new TypeError(args[0] + ' parameter is not an array');
    }
    if (typeof args[1] != 'function') {
        throw new TypeError(args[1] + ' is not a function');
    }

    if (typeof args[2] != 'string' && typeof args[2] != 'number') {
        throw new TypeError(args[2] + ' is not a string or number');
    }
}

// const arr = [10,20,30];
const arr = ['asd','d','tre'];
const acc = 3;
console.log(reduce(arr, function(acc, item, i, arr) {return acc + item;}, acc));
console.log(arr.reduce(function(acc, item, i, arr){return acc + item;}, acc));