function reduceRight(arr, callback, acc) {
    check(arguments);
    var previous = acc;
    for (let i = 0; i < arr.length; i++) {
       previous = callback(previous, arr[arr.length - i - 1], i, arr);
       console.log(arr.length - i - 1);
    }
    return previous;
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

const arr = ['a','s', 'd', 'f', 'g'];
const acc = 0;
console.log(reduceRight(arr, callbackR, acc));

console.log(arr.reduceRight(callbackR, acc));

function callbackR(acc, item, i, arr) {return acc + item;}