// let arr = [8,6,-2,4,3,2];
// Slicing [startIndex, endIndex)
// console.log(arr.slice(1, 3)) // [6, 2]
// console.log(arr.slice(3, 4)) // [4]

// TODO: Find Maximum sum of subarray of size K (Using Sliding Window)
let arr = [1, 2, 3, -4, 5]
let k = 3
/**
 * ?Steps:
 * 1. Find the Sum of the first Window i.e, windowSum = 6
 * 2. Move the Window (startIndex++)
 * 3. Add the new number and subtract the removed number from windowSum
 * 4. If new max is found, update the maxSum 
 */
let windowSum = 0;
for(let i=0; i < k; i++) {
    windowSum += arr[i]
}
let maxSum = windowSum;

for(let startIndex = 1; startIndex <= arr.length - k; startIndex++) {
    let removedElement = startIndex - 1;
    let addedElement = startIndex + k - 1
    windowSum = windowSum - arr[removedElement] + arr[addedElement]
    console.log('Window Sum ', windowSum)
    if(windowSum > maxSum) {
        maxSum = windowSum
    }
}
console.log(maxSum)