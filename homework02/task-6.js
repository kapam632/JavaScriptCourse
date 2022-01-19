function isEven(a){
    check(a);
    return a % 2 === 0;
}

function check(a){
    if (typeof a !=='number'){
        throw 'Error: parameter type is not a Number';
    }
}

console.log(isEven(3)); // false
console.log(isEven(4)); // true
isEven('Content'); // Error: parameter type is not a Number