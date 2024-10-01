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
    // console.log(`My num has become now to ${num}`)
    ans = ans + remainder
}
// console.log(ans)

// T.C => O(N)
// S.C => O(1)


// TODO: Reverse a Number (Using Modulo Operator)
// IP: 123
// OP: 321

let originalNum = 12345
let reversed = 0
while(originalNum != 0) {
    let lastDigit = originalNum % 10
    ans = (ans * 10) + lastDigit
    originalNum = Math.floor(originalNum / 10)
}
// console.log("Reversed", ans)


// Armstrong Number

function countDigits(num) {
    //TODO:  Write code here
    let count = 0

    while (num != 0) {
        count++;
        num = Math.floor(num / 10)
    }

    return count
}

function isArmStrongNumber(num) {
    let ans = 0
    // Get Number of digits
    let n = countDigits(num)

    // (1 ** 3 + 5 ** 3 + 3 ** 3)
    while (num != 0) {
        let lastDigit = num % 10;
        ans = ans + (lastDigit ** n) // ** -> Exponent Operator
        num = Math.floor(num / 10)
    } 
    if(ans === num) { //! This is Wrong. Why?
        return true
    } else {
        return false;
    }
}

// T.C O(N)
// S.C O(1)

console.log(isArmStrongNumber(153))

