function findTheMissingNumber(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let expectedSum = arr.length * (arr.length + 1) / 2;
    if (sum != expectedSum) {
        console.log("Missing Number is " + (expectedSum - sum));
    } else {
        console.log("All numbers are present");
    }
}

let arr = [1, 3, 0];
findTheMissingNumber(arr);