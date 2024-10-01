
const getMaxElement = (arr)=>{
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}

const getCount =(arr,maxElement)=>{
    let elementCountLessThanMax=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]<maxElement){
            elementCountLessThanMax++;
        }
    }
    return elementCountLessThanMax;
}

const greaterElement=(arr)=>{

    // TODO:  calculate max element
    
    let max = getMaxElement(arr);

    // TODO:  calculate count of numbers less than max number 
    let count = getCount(arr,max);
    return count;
}

let arr = [4,5,-12,3,49,0];
console.log(greaterElement(arr))

// TODO: Try to do this 1 loop


