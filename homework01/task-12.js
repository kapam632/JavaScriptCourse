var arr = [1,2,3,-5,-2,1,-4];
var positive = 0;
for (i of arr) {
 if (i > 0) {
     positive += i;
 }
}
console.log(positive)