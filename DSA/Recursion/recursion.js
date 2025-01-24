// Find factorial of a number

function factorial(num) {
    if(num <= 1) {
        return 1
    }
    return num * factorial(num - 1)
}

console.log(factorial(5))

// Find Sum from 1 to N using recursion
function sum(num) {
    if(num <= 1) {
        return 1
    }
    return num + sum(num - 1)
}
console.log(sum(9)) 

// Fibonacci -> 1, 1, 2, 3, 5, 8, 13, 21
// fib(3) -> 2
// fib(6) -> 8

function fib(num) {
 if (num <= 2) {
    return 1
 }
 return fib(num - 1) + fib(num - 2)
}
console.log(fib(6))