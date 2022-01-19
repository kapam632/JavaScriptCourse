function f(a) {
    if (typeof a !== 'number'){
        throw 'Error: parameter type is not a Number'
    }
    return a*a*a;
}