### Notes on Recursion with Basic Examples

---

#### **What is Recursion?**
Recursion is a programming technique where a function calls itself to solve a smaller instance of the same problem. Each recursive call simplifies the problem until it reaches a base case.

---

#### **Key Components of Recursion**
1. **Base Case**: This is the stopping condition that prevents infinite recursion. Without a base case, the recursion will keep running indefinitely, resulting in a stack overflow.
2. **Recursive Case**: This is where the function calls itself with a smaller or simpler input, moving toward the base case.

---

#### **Structure of a Recursive Function**
```javascript
function recursiveFunction(params) {
    if (baseCaseCondition) {
        return baseCaseResult; // Base case: stops recursion
    }
    // Recursive case: call itself
    return recursiveFunction(smallerProblem);
}
```

---

#### **How Recursion Works**
1. Each function call is placed on the call stack.
2. When a base case is reached, the function starts returning values.
3. The stack unwinds, returning values back up the chain of function calls.

---

### **Basic Examples**

---

#### 1. **Factorial**
The factorial of a number \( n \) is the product of all positive integers less than or equal to \( n \). 
- **Formula**: \( n! = n \times (n-1)! \)

**Example Code**:
```javascript
function factorial(n) {
    if (n === 0 || n === 1) { // Base case
        return 1;
    }
    return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5)); // Output: 120
```

**Explanation**:
1. `factorial(5)` calls `factorial(4)`
2. `factorial(4)` calls `factorial(3)` ... until `factorial(1)`.
3. Once the base case is reached (`n === 1`), the values return and are multiplied.

---

#### 2. **Sum of Numbers**
Find the sum of all numbers from \( 1 \) to \( n \).

**Example Code**:
```javascript
function sum(n) {
    if (n === 0) { // Base case
        return 0;
    }
    return n + sum(n - 1); // Recursive call
}

console.log(sum(5)); // Output: 15
```

**Flow**:
- sum(5) → 5 + sum(4) → 5 + (4 + sum(3)) → ... → 5 + 4 + 3 + 2 + 1 + 0 = 15.

---

#### 3. **Fibonacci Sequence**
The Fibonacci sequence is defined as:
- \( F(0) = 0 \), \( F(1) = 1 \)
- \( F(n) = F(n-1) + F(n-2) \) for \( n > 1 \)

**Example Code**:
```javascript
function fibonacci(n) {
    if (n === 0) { // Base case
        return 0;
    }
    if (n === 1) { // Base case
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

console.log(fibonacci(6)); // Output: 8
```

---

#### 4. **Reverse a String**
Reverse a string using recursion.

**Example Code**:
```javascript
function reverseString(str) {
    if (str.length === 0) { // Base case: empty string
        return "";
    }
    return reverseString(str.slice(1)) + str[0]; // Recursive case
}

console.log(reverseString("hello")); // Output: "olleh"
```

---

#### 5. **Check if a String is a Palindrome**
A palindrome is a string that reads the same backward and forward.

**Example Code**:
```javascript
function isPalindrome(str) {
    if (str.length <= 1) { // Base case
        return true;
    }
    if (str[0] !== str[str.length - 1]) { // Check first and last character
        return false;
    }
    return isPalindrome(str.slice(1, -1)); // Recursive case
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
```

---

### **Common Mistakes in Recursion**
1. **Forgetting the Base Case**:
   Without a base case, the function will keep calling itself infinitely.
2. **Infinite Recursion**:
   If the base case is incorrect or unreachable, the stack will overflow.
3. **Not Reducing the Problem**:
   Ensure each recursive call simplifies the problem.

---

### **Understanding Recursion with Visualization**

#### Factorial Call Stack Example (\( factorial(3) \)):
```
factorial(3)
  3 * factorial(2)
        2 * factorial(1)
              1
Result = 3 * 2 * 1 = 6
```

---

### **Best Practices**
1. **Use Memoization for Efficiency**:
   Store intermediate results to avoid redundant computations (e.g., in Fibonacci).
   
   ```javascript
   function fibonacciMemoized(n, memo = {}) {
       if (n in memo) return memo[n];
       if (n === 0) return 0;
       if (n === 1) return 1;
       memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
       return memo[n];
   }
   
   console.log(fibonacciMemoized(50)); // Output: 12586269025
   ```

2. **Prefer Iterative Approaches for Simpler Problems**:
   Some recursive problems (e.g., factorial) can be solved iteratively to avoid potential stack overflow.

---