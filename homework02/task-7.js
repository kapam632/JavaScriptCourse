function getDivisors(a){
    check(a);
    var arr = [];
    for (let i = 1; i <=a; i++) {
        if (a % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}
function check(a){
    if (typeof a !=='number'){
        throw 'Error: parameter type is not a Number';
    }

    if (a <= 0) {
        throw 'Error: parameter can\'t be a 0'; 
    }
}

console.log(getDivisors(12));// [1, 2, 3, 4, 6, 12]