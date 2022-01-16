var arr = [6,5,4,3,2,1];
for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j+1]) {
            let tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp;
        }
    }
}
console.log(arr);
//! Нет IndexOutOfBounds