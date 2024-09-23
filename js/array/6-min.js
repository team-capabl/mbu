let arr = [3, 2, 7, 9, 10, 1, 5];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (min  >arr[i]) {
        min = arr[i]
    }
}

console.log("min element = " + min)