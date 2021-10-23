let arr = [4, 7, 8, 1, 3, 9, 10, 2];

// function quickSort(arr) {
//     if (arr.length == 0) {
//         return [];
//     }
//     let leader = arr[0];
//     let left = [];
//     let right = [];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > leader) {
//             right.push(arr[i]);
//         } else {
//             left.push(arr[i]);
//         }
//     }
//     left = quickSort(left);
//     right = quickSort(right);
//     left.push(leader);
//     return left.concat(right);
// }
// console.log(quickSort(arr));

