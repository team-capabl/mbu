function reverseString(string) {
    let reversedString = ""
    let n = string.length - 1

    for(let index = n; index >= 0; index--) {
        let lastChar = string[index];
        reversedString = reversedString + lastChar
    }
    return reversedString
}

function isPalindrome(string) {
    let reversedString = reverseString(string)

    if(string === reversedString) {
        return `${string} is a palindrome`
    } else {
        return `${string} is not palindrome`
    }
}

function isPalindromeWithoutReverse(string) {
    let left = 0;
    let right = string.length - 1
    
    while (left < right) {
        let leftChar = string[left];
        let rightChar = string[right];
        if(leftChar !== rightChar) {
            return false;
        } else {
            left++;
            right--
        }
    }
    return true
}

// T.C: O(N)
// S.C: O(1)

console.log(isPalindromeWithoutReverse('abdda'))

