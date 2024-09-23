//print an array in reverse order
let array = [7, 2, 1, 4, 5];
let result = [];
for (let i = array.length-1; i >= 0; i--) {
    result.push(array[i]);
}
console.log(result);