
// What is Subarrays?
// 1. PART OF AN ARRAY
// 2. A subarray is continous elements of an array
//      or part of an array
// 3. []
// let arr = [1, 2, 3, 4, 5]
// How to print all Subarrays?
// [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5] -> 5
// Sum -> 1, 3, 6, 10, 15
// Start=0 , End=4
// [2], [2, 3], [2, 3, 4], [2, 3, 4, 5] -> 4
// Sum -> 2, 5, 9, 14
// Start=1 , End=4
// [3], [3, 4], [3, 4, 5] -> 3
// [4], [4, 5] ->2
// [5] -> 1

// 5 + 4 + 3 + 2 + 1

// let arr2 = [3, 4, 5]
// n = 3
// (3 * 4) / 2 => 6 subarrays in arr2
let arr = [1, 2, 3, 4, 5]
// [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5] -> 5

// let startIndex = 0
// for (let startIndex = 0; startIndex < 5; startIndex++) {
//   for (let endIndex = startIndex; endIndex < 5; endIndex++) {
//     // console.log(startIndex, endIndex)
//     // console.log(startIndex, endIndex)
//     let subarray = [];
//     let subarraySum = 0;
//     for (let i = startIndex; i <= endIndex; i++) {
//       subarray.push(arr[i]);
//       subarraySum += arr[i];
//     }
//     console.log(subarray, subarraySum);
//   }
// }
// TC O(N^3)
// SC O(N)

// Sum of all subarrays
// let arr = [1, 2, 3, 4, 5]
// pref = [1, 3, 6, 10, 15]
let prefSum = []
let sum = 0
for(let i=0; i<arr.length; i++) {
    sum += arr[i]
    prefSum.push(sum)
}
let maxSum = arr[0]
for (let startIndex = 0; startIndex < 5; startIndex++) {
  for (let endIndex = startIndex; endIndex < 5; endIndex++) {
    let subarraySum = 0;

    if(startIndex == 0) {
        subarraySum = prefSum[endIndex]
    } else {
        subarraySum = prefSum[endIndex] - prefSum[startIndex - 1]
    }
    if(subarraySum > maxSum) {
        maxSum = subarraySum
    }
    // for (let i = startIndex; i <= endIndex; i++) {
    //   subarraySum += arr[i];
    // }
    // console.log(subarraySum);
  }
}
console.log(maxSum)

// S.C => O(N)
// T.C => O(N^2)

// Kadane's Algorithm


