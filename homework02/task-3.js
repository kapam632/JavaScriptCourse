function f(a,b,c){
    for (i of arguments){
        check(i);
    }
    return (a-b)/c;
}
function check(a){
    if (typeof a !=='number'){
        throw 'Error: parameter type is not a Number';
    }
}

console.log(f(9,3,2)); // 3
f('s',9,3) // Error: all parameters type should be a Number