let arr = [4, 7, 8, 1, 3, 9, 10, 2];

function select(arr) {
    for (let i = 0; i < arr.length; i++) {
        let index = 0;
        let min = Infinity;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < min) {
                index = j;
                min = arr[j];
            }
        }
        let temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }
}

select(arr);
console.log(arr);