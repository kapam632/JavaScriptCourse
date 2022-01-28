var arr = ['abcd', 'abcde', 'ab', 'abc'];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
arrLength[i] = arr[i].length;
}

// arrLength = arr.map((item) => {return item.length});

arrLength = arr.map(function(item) { return item.length});

console.log( arrLength ); // 4,5,2,3