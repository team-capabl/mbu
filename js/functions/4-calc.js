function sumFun(a, b) {
    return a + b;
}

function diffFun(a, b) {
    return a - b;
}

function mulFun(a, b) {
    return a * b;
}

function divFun(a, b) {
    return a / b;
}

let operator = "-";
let result;
let x = 6;
let y = 2;
if (operator == "+") {
    result = sumFun(x, y)
} else if (operator == "-") {
    result = diffFun(x, y)
} else if (operator == "*") {
    result = mulFun(x, y)
} else {
    result = divFun(x, y)
}

console.log(x + operator + y + " = " + result)