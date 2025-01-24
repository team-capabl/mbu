# Hashmaps in JavaScript

## **What are Hashmaps?**

A **Hashmap** is a data structure that stores key-value pairs. In JavaScript, the `Map` object is a built-in structure specifically designed for this purpose.

### **Why Use Hashmaps?**

- **Fast Lookups**: Average time complexity for accessing values is O(1).
- **Unique Keys**: Each key in a hashmap is unique.
- **Flexible Key Types**: Supports keys of any type, unlike objects which are limited to strings and symbols.
- **Ordered Entries**: Maintains the order of keys as they are added.

---

## **Creating and Using a Map**

You can create a hashmap using the `Map` object in JavaScript. Below are the most common operations:

### **Basic Operations**

1. **Create a Map**:

   ```javascript
   const map = new Map();
   ```

2. **Add a Key-Value Pair**:

   ```javascript
   map.set("key", "value");
   ```

3. **Retrieve a Value by Key**:

   ```javascript
   console.log(map.get("key")); // Output: "value"
   ```

4. **Check for the Existence of a Key**:

   ```javascript
   console.log(map.has("key")); // Output: true or false
   ```

5. **Remove a Key-Value Pair**:

   ```javascript
   map.delete("key");
   ```

6. **Get the Size of the Map**:

   ```javascript
   console.log(map.size); // Number of key-value pairs
   ```

7. **Iterate Over Key-Value Pairs**:

   ```javascript
   for (let [key, value] of map) {
       console.log(key, value);
   }
   ```

8. **Clear All Entries**:

   ```javascript
   map.clear();
   ```

---

## **Real-World Example: Word Frequency Counter**

Using a `Map` to count the frequency of words in an array.

```javascript
function wordFrequency(words) {
    const map = new Map();

    for (let word of words) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }

    return map;
}

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const frequencies = wordFrequency(words);
console.log(frequencies); // Output: Map(3) { 'apple' => 3, 'banana' => 2, 'orange' => 1 }
```

---

## **Comparison: Map vs Object**

| **Feature**       | **Map**                       | **Object**                          |
|-------------------|------------------------------|-------------------------------------|
| **Key Types**     | Any (including objects)       | Strings and symbols only            |
| **Iteration**     | Direct (via `for...of`)       | Requires `Object.keys()` or similar |
| **Key Order**     | Preserves insertion order     | No guaranteed order                 |
| **Performance**   | Optimized for key-value pairs | General-purpose usage               |

---

## **Advanced Techniques**

### **Default Values in Maps**

To handle missing keys, you can initialize a default value.

```javascript
function getOrInitialize(map, key, defaultValue) {
    if (!map.has(key)) {
        map.set(key, defaultValue);
    }
    return map.get(key);
}

const map = new Map();
console.log(getOrInitialize(map, "a", 0)); // Output: 0
map.set("a", 5);
console.log(getOrInitialize(map, "a", 0)); // Output: 5
```

### **Group Data by Keys**

Using `Map` to group items by a specific attribute.

```javascript
function groupBy(array, keyFunc) {
    const map = new Map();

    for (let item of array) {
        const key = keyFunc(item);
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(item);
    }

    return map;
}

const data = [
    { id: 1, category: "fruit" },
    { id: 2, category: "vegetable" },
    { id: 3, category: "fruit" }
];

const grouped = groupBy(data, item => item.category);
console.log(grouped);
// Output: Map { 'fruit' => [ { id: 1 }, { id: 3 } ], 'vegetable' => [ { id: 2 } ] }
```

---

## **Common Problems Using Maps**

### **Problem: Find the First Non-Repeating Character**

Given a string, find the first character that does not repeat.

```javascript
function firstNonRepeatingChar(str) {
    const charMap = new Map();

    // Count characters
    for (let char of str) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    // Find first non-repeating character
    for (let char of str) {
        if (charMap.get(char) === 1) {
            return char;
        }
    }

    return null; // No unique character found
}

console.log(firstNonRepeatingChar("swiss")); // Output: "w"
```

### **Problem: Two Sum Using Maps**

Find two numbers in an array that add up to a target sum.

```javascript
function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
```

