// Arrow function does not have this
// Use Simple function if you want to access this

function myFunction(){
    // Allowed to access
    console.log("Hello simple function",this);
}

const arrowFunction=()=>{
    console.log("Hello Arrow function",this); // can't access
}

console.log(myFunction());
console.log(arrowFunction());