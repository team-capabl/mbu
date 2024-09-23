const arr = [4, 7, 5, 1, 9, 3];

// const arrowFun = (num, index) => {
//     console.log(num, index)
// }

// arr.forEach(arrowFun)

// under the hood
// for (let i=0; i<arr.length; i++) {
//     arrowFun(arr[i], i)
// }

arr.forEach((num, index) => {
    console.log(num, index)
})