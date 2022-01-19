function f(a){
    check(a);
    return dayOfWeek(a);
}

function check(a) {
    if (typeof a !=='number') {
        throw 'Error: parameter type is not a Number';
    }
    if (a < 1 || a > 7) {
        throw 'Error: parameter should be in the range of 1 to 7';
    }
}

function dayOfWeek(a) {
    switch (a) {
        case 2 : return 'Понедельник';      
        case 3 : return 'Вторник';
        case 4 : return 'Среда';
        case 5 : return 'Четверг';
        case 6 : return 'Пятница';
        case 7 : return 'Суббота';
        case 1 : return 'Воскресенье';
        default : throw 'Error: no such week day.';
    }
}

console.log(f(1));// Воскресенье
console.log(f(2)); // Понедельник