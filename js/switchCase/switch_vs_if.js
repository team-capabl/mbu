// If Else to Decide Grade
const ifElseDecider=(num)=>{
    if(num>100)
        return "Invalid Number";

    if(num>90){
        return "A";
    } else if(num>80){
        return "B";
    } else if(num > 70){
        return "C";
    } else if(num > 60) {
        return "D";
    } else if(num > 50) {
        return "E";
    } else {
        return "F";
    }
}

// Switch case to decide feedback
const switchCaseOfGrades=(grade)=>{

    // Remember switch will always accept constant so following 2 cases are valid
    // case "A":
    //  or
    // case 20:
    // Here 20 also is a constant
    // But you can't have following cases
    // case num > 90 because num is variable here

    switch(grade){
        case "A":
            console.log("You are excellent");
            break;
        case "B":
            console.log("You are Good");
            break;
        case "C":
            console.log("You are Ok");
            break;
        case "D":
            console.log("You are Average");
            break;
        case "D":
            console.log("You are Poor");
            break;
        case "D":
            console.log("You are very poor");
            break;
        default:
            console.log("You failed Successfully")
    }
}

let grade = ifElseDecider(35);
switchCaseOfGrades(grade);
// A => > 90
// B => > 80
// C => > 70
// D => > 60
// E => > 50
// F => < 50


// TODO: Create Weather Forecast for rainy,sunny,snowy,cloudy