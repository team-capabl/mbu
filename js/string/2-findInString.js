let str = "Hello World!";
let charToFind = "h";
let isFound = 0;
for (let i = 0; i < str.length; i++) {
    if(str[i].toLowerCase()== charToFind){
        isFound = 1;
    }
}
if(isFound==1){
    console.log("found")
}
else{
    console.log("no found");
}

//"a" is present
//"a" is not present