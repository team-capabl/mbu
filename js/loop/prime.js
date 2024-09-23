
let num = 5;
let isPrime = true;

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        console.log("not prime");
        isPrime = false;
        break;  // No need to check further
    }
}

if (isPrime) {
    console.log("prime");
}