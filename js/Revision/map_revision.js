// .map() = Accepts a function/callback and applies it to each element in the array and returns a new array

let array = [1, 2, 3, 4, 5];


// Multiply everything by 2

let arrayMultiplesof2 = array.map((num, index) => {
    let newNum = num * 2;
    return newNum;
});

console.log(arrayMultiplesof2);

// TODO: Find the Squares of the numbers in the array
// Eg: Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]

// TODO: Convert the given names to uppercase (use .toUpperCase() method of String for conversion)
// Eg: Input: ["Ram", "Ravi", "Venkayya", "Ramulamma"]
// Output: ["RAM", "RAVI", "VENKAYYA", "RAMULAMMA"]