var arr = [1,2,3,4];
var even = 0;
for (i of arr) {
    if (i%2 == 0 && i > 3) {
        even += i;
    }
}
console.log(even)