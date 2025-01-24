function greet(name) {
    console.log("Hi " + name)
}

const greetArrow = (name) => {
    console.log("Hi ", name)
}

greetArrow("Vinith")
greet("Pavan")
greet("MBU")


// T.C and S.C
// T.C Runtime which function is taking when we are increasing the input size
// O(N), -> for
// O(N^2) -> Nested For Loops
// Doutbts on O(log N)


// Arrays ?
let arr = [1, 2, 3]
console.log(arr[0]) //1

// 2d arrays?
let matrix = [
    [1, 2, 3],
    [1, 4, 5],
    [5, 6, 7]
]

console.log(matrix[0]) // [1, 2, 3]
console.log(matrix[0][0]) // 1

// Prefix Sum
let income = [1, 2, 3, 4, 5]
let cummalativeIncome = [1, 3, 6, 10, 15]

// Prefix Sum
let prefSum = []
prefSum[0] = income[0]
for(let i=1; i < income.length; i++) {
    prefSum[i] = prefSum[i - 1] + income[i]
}
console.log(prefSum)
console.log('Income upto 3rd Day', prefSum[2])
console.log('Income upto 4th Day', prefSum[3])
