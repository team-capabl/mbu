let arr = [3, 2, 7, 9, 10, 2, 5];
let numToFind = 7;
let isFound = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == numToFind) {
        isFound = true
        console.log(numToFind + " is present inside array");
        break;
    }
}
if (isFound == false) {
    console.log(numToFind + " is not present inside array");
} 