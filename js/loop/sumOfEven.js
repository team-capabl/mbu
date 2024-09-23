let s = 0;
for (let i = 1; i <= 10; i+=2) {
    s = s + i;
}
console.log(s)

s  = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        s = s + i;
    }
}
console.log(s)