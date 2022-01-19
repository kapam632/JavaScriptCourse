function f(...varargs){
    var sum = 0;
    for (i of varargs){
        if (typeof i !=='number'){
            throw 'Error: parameter type is not a Number';
        }
        sum += i;
    }
    return sum;
}

console.log(f(1,2,3)); // 6
console.log(f(1,1,1,1,1,1,1,1)); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number