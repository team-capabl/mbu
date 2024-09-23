let str = "javascript";
let vowelCount = 0;
for (let i = 0; i < str.length; i++) {
    const convertedCharacter = str[i].toLowerCase()
    if ("aeiou".includes(convertedCharacter)) {
        vowelCount++;
    }
}

console.log(vowelCount)