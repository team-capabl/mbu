let str = "Hello World!";
let charToCount = "l";
let count = 0;
for (let i = 0; i < str.length; i++) {
    if(str[i].toLowerCase()==charToCount){
        count++;
    }
}
console.log(count)