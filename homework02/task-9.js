function solution(a,b) {
    var aLength = a.length;
    var bLength = b.length;
    if (a.length === 0){
        return b;
    }
    if (b.length === 0){
        return a;
    }
    if (aLength > bLength) {
        leedZero(aLength - bLength, b);
    } 

    if (bLength > aLength) {
        leedZero(bLength - aLength, a);
    } 
    aLength = a.length;
    var tenNum = 0;
    for (let i =0; i < aLength; i++){
        let s = a[aLength - i - 1] + b[aLength - i - 1] + tenNum;
        a[aLength - i - 1] = s % 10;
        tenNum = s > 9 ? 1 : 0;
    }
    if (tenNum === 1) {
        a.unshift(1);
    }
    return a;
}

function leedZero(count, arr) {
    for (let i = 0; i < count;i++) {
        arr.unshift(0);
    }
}

console.log(solution([2, 4, 3], [5, 6, 4])); // [8, 0, 7]
console.log(solution([1, 4, 5], [4, 4, 2])); // [5, 8, 7]
console.log(solution([1, 1, 1], [])); // [1, 1, 1]
console.log(solution([], [9, 9, 9])); // [9, 9, 9]
console.log(solution([9,9,9], [9,9,9])); // [1, 9, 9, 8]
console.log(solution([], [])); // []
console.log(solution([], [0])); // [0]
console.log(solution([0], [0])); // [0]
console.log(solution([1,1,1,1,1,1,1,1], [1, 0])); // [1, 1, 1, 1, 1, 1, 2, 1]
console.log(solution([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],[1]));