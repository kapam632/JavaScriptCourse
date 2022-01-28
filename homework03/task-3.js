function every(arr, callback) {
    check(arguments);
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)){
            return false;
        }
    }
    return true;
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

const arr = [1,2,3,-5,6663];
var result = every(arr, function(item, i, arr) {return item > 0});
console.log(result)
console.log(arr.every(function(item, i, arr) {return item > 0}))

