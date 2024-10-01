function fibonacci(num) {
    let f1 = 0;
    let f2 = 1;

    if (num === 0) return 0;
    if (num === 1) return 1;

    for (let i = 3; i <= num; i++) {
        let next = f1 + f2;
        f1 = f2;
        f2 = next;
    }

    return f2;
}

console.log(`Fibonacci(5): `, fibonacci(5));
console.log(`Fibonacci(0): `, fibonacci(0));
// console.log(`Fibonacci(1): `, fibonacci(1))
// console.log(`Fibonacci(1000): `, fibonacci(1000))