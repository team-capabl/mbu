function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if(arr[middle] == target) {
            return true
        } else if (arr[middle] > target) {
            // If the middle number is greater, Check left side
            right = middle - 1
        } else {
            // If the middle number is lesser, Check right side
            left = middle + 1
        }
    }
    // If Not found
    return false
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7))