function isPositive(a) {
    check(a);
    return a > 0;
}

function check(a){
    if (typeof a !=='number'){
        throw 'Error: parameter type is not a Number';
    }
}

function solution(){
    var arr = [1, 2, -4, 3, -9, -1, 7];
    var positiveArr = [];
    for (i of arr) {
        if (isPositive(i)){
            positiveArr.push(i);
        }
    }
    return positiveArr;
}

console.log(solution());