//? Refer to https://www.telerik.com/blogs/understanding-utilizing-javascript-set-object

// SET:
//  - Unique items
//  - Lookup(Searching throughset)
//  - Order may not be preserved

let phoneBook = new Set([])

phoneBook.add('12345')
phoneBook.add('12345')
phoneBook.add('12346')
phoneBook.add('345678')
phoneBook.add('345678')

// Remove the phonenumber
// phoneBook.delete('12345')

// Task: Check if Exists
let newPhone = "12347890"
if(phoneBook.has(newPhone)) {
    console.log('Phone number already exists')
} else {
    phoneBook.add(newPhone)
    console.log(phoneBook)
    console.log('Phone Number added successfully')
}

// Task: Remove duplicates from oldPhoneBook
let oldPhoneBook = ["12345", "12345", "67890"]

function removeDuplicates(items) {
    let newItems = new Set([])

    items.forEach((item) => {
        if(newItems.has(item) === false) {
            newItems.add(item)
        }
    })
    return items
}

let updatedPhoneBook = removeDuplicates(oldPhoneBook)
console.log(updatedPhoneBook)

// More Examples???

// Combine: [1, 2, 3, 4, 5] combine with [3, 4, 5, 6, 7] => [1, 2, 3, 4, 5, 6, 7]

function findUnion(set1, set2) {
    let unionSet = new Set([])
    // Step 1: Push all elements in set1 to unionSet
    // Step 2: Push all elements in set2 to unionSet
    for(let num of set1) {
        unionSet.add(num)
    }

    for(let num of set2) {
        unionSet.add(num)
    }

    return unionSet
}

function findIntersection(set1, set2) {
    let newIntersectionSet = new Set([])
    // Step1: Go through elements in set2 and check if it exists in set1 or viceversa
    for (let num of set2) {
        if(set1.has(num)) {
            newIntersectionSet.add(num);
        }
    }
    return newIntersectionSet
}

console.log("Union is :", findUnion(new Set([1, 2, 3, 4, 5]), new Set([3, 4, 5, 6, 7])))
console.log("Intersection is: ", findIntersection(new Set([1, 2, 3, 4, 5]), new Set([3, 4, 5, 6, 7])))
