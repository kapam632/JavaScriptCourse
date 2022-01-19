function f (a){
    check(a);
    print(a, 0);
}

function check (a) {
    if (typeof a !== 'object' || a == null) {
        throw 'Error: parameter type should be an array';
    }
    if (a.length === 0) {
        throw 'Error: parameter can\'t be an empty';
    }
}

function print(a,i) {
    if (i < a.length) {
        console.log(a[i]);
        print(a,++i);
    }
}

f([1,2,3]);
// f(1,2,3) // Error: parameter type should be an array
// f('Content') // Error: parameter type should be an array
// f([]) // Error: parameter can't be an empty
// f(null);