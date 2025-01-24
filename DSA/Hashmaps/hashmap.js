// let arr = [1, 2, 3, 4, 5]

// 4bytes => 20bytes
/* 
PROS:
-> For Accesssing like arr[0] -> O(1)
-> For Updating -> O(1)
-> For adding at the last -> O(1)

CONS: 
-> For adding at the middle(unshift) -> O(N)
-> For deleteing -> O(N)
*/
// PROS:


// HASHMAPS
// (key - value) pair
// Implement using keyword called map and using js objects
// Use ? -> Doesn't allow duplicate values,
// Cons -> Unordered
// PROS -> Adding, deleting, accessing, updating -> O(1)

// let person = {
//     name: "Vinith",
//     age: 20,
//     ph_no: 1234
// }
// console.log(person.name, person.age)

// Common Hashmap Operations (syntax)
// let map = new Map()
// // Add In Map
// map.set("apple", "fruit")
// map.set("apple", "something") // Update

// console.log(map.get("apple"))
// map.delete('apple')
// console.log(map)

// Frequency Array
// let inp1 = "aabbcdff" 
// out => {'a': 3, 'b': 4, 'c': 2, 'd: 1, 'e': 1}
// inp = [1, 2, 4, 5, 1, 4, 3]
// out = {1: 2, 2: 1, 4: 2, 3: 1, 5: 1}

// DONE ?? 

// 2. First Non-Repeating Character
// IP -> "aabbcdff"
// OP -> c
// TODO 1: Create a frequency Map, 2: Find the character with frequency as 1
// Find which character has frequency as 1
// for (let i = 0; i < inp1.length; i++) {
//     let currentCharCount = map.get(inp1[i]);
//     if (currentCharCount == 1) {
//         console.log(inp1[i])
//         break
//     }
// }


//? 3. Find if given two strings are anagrams
// str1 = "listen", str2 = 'silent' -> true
// str1 = "hello", str2 = 'hola' -> false

// STEP0: return false, if lengths are different
// STEP1: Character count for both strings, map1 stores str1 count, map2 stores str2 count
// STEP2: Compare the counts of map1 and map2.
function getFrequencyMap(inp) {
    let map = new Map()
    for(let i=0; i < inp.length; i++) {
        let currentChar = inp[i]
        // 2 possibilities
        if(map.has(currentChar)) {
            // If already present, increase the count
            let current_count = map.get(currentChar)
            map.set(currentChar, current_count + 1)
        } else {
            // Not in the Map
            map.set(currentChar, 1)
        }
    }
    return map
}
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let map1 = getFrequencyMap(str1);
    let map2 = getFrequencyMap(str2)

    // Compare here

}
// console.log(isAnagram("listen", "silent"))
// console.log(isAnagram("hello", "hola"))


// TWO SUM: Return Indexes where arr[i] + arr[j] = x;
// Input:
    let arr = [2, 3, 5, 9, 11]; 
    let x = 7

// Output: [0, 2]

// 1. Keep first for loop for 1 number and inner for loop to find another number
// 2. If both number at any point, adds upto x, print that indexes
// for(let i=0; i<arr.length; i++) {
//     for(let j=i+1; j<arr.length; j++) {
//         if(arr[i] + arr[j] == x) {
//             console.log([i, j])
//         }
//     }
// }
// 1. Store number with index in a hashmap
// 2. num2 = target - num1. Check if num2 is present in hashmap. if Yes
//      that is the number we are looking for
// 1. 
let map = new Map()
for(let i=0; i<arr.length; i++) {
    // Store number and it's index as key-value pair in the map
    map.set(arr[i], i);
}
// 2.
for(let i=0; i<arr.length; i++) {
    let num2 = x - arr[i];

    if(map.has(num2)) { //Check if num2 key exists in map
        console.log([i, map.get(num2)]) // Print current index, index of the target
        break
    }
}



// Write a code to find the factorial of a number
// factorial(5) => 5 * 4 * 3 * 2 * 1 => 120 
// ? Catch - You have to code it without loops(for or while)

