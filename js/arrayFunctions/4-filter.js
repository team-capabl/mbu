// const arr = [4, 7, 5, 6, 3];

// const result = arr.filter(num => {
//     if (num % 2 == 0) {
//         return true
//     }
// })
// console.log(result);


// const arr = [4, 7, 5, 6, 3];
// const result = arr.filter(num => {
//     return num % 2 == 0
// })
// console.log(result);

// const arr = [4, 7, 5, 6, 3];
// const result = arr.filter(num => num % 2 == 0)
// console.log(result);

//even
const arr = [4, 7, 5, 6, 3];
const result = arr.filter(num => !(num % 2))
console.log(result);

// odd
// const arr = [4, 7, 5, 6, 3];
// const result = arr.filter(num => (num % 2))
// console.log(result);