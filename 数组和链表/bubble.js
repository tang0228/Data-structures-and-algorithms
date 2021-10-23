
let arr = [4, 7, 8, 1, 3, 9, 10, 2];

function bubble(arr) {
    if (!Array.isArray(arr) || arr.length == 1) {
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
bubble(arr);
console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6];
// arr.sort(function (a, b) {
//     return (b - a);
// });
// console.log(arr);