// console.log(12 % 3)
// console.log(14 % 3)

// console.log(14 % 8)

// Sum of digits
// IP: 123
// OP: 6

let num = 123
// Step1
// 123 % 10 =>  3
// 123 / 10 => 12

// Step2
// 12 % 10 = 2
// 12 / 10 => 1

// Step3
// 1 % 10 => 1

// 123
// TODO: 976 => 22
let ans = 0
while(num != 0) {
    let remainder = num % 10
    num = Math.floor(num / 10)
    console.log(`My num has become now to ${num}`)
    ans = ans + remainder
}
console.log(ans)

// T.C => O(N)
// S.C => O(1)


// TODO: Reverse a Number (Using Modulo Operator)
// IP: 123
// OP: 321