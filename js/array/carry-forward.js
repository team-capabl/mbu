
// Leaders in array
let arr = [8,6,-2,4,3,2];
// Slicing [startIndex, endIndex)
// console.log(arr.slice(1, 3)) // [6, 2]
// console.log(arr.slice(3, 4)) // [4]

let leaders = [];
let current_max = arr[arr.length-1];
leaders.push(arr[arr.length-1]); 
// [2]
for(let i=arr.length-1;i>=0;i--){

    // el = 2 , current = 2 i=5
    // el = 3 , current = 2 i= 4
    // update current max = 3 [2,3]

    // el = 4 , current_max = 3 i= 3
    //  update curent max = 4  [2,3,4]

    // el = -2, current_max = 4 i =2
    // el =  6, current max = 4 i =1
    // update current max = 6 [2,3,4,6]

    // el = 8, current_max = 6 i =0
    // update current max =8 [2,3,4,6,8]

    if(arr[i]>current_max){
        leaders.push(arr[i]);
        current_max = arr[i]
    }
}

console.log(leaders);