let arr = [3, 2, 7, 9, 10, 2, 5];
let max = 0;

for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
    }
}

console.log("max element = " + max)

