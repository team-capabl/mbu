// ? Initialize arrays to store student names and marks
let studentNames = []
let studentMarks = []

// ? Function to add a student's name and mark to the arrays
function addStudent(name, mark) {
    studentNames.push(name);
    studentMarks.push(mark);
}

// ? Function to check if a student has passed or failed
function checkStudentGrade(mark, name) {
    if (mark >= PASS_MARK) {
        return true; // Student has passed
    } else {
        return false; // Student has failed
    }
}

// ? Function to print if a student has passed or failed
function printIfPassOrFail(mark, name) {
    if(checkStudentGrade(mark, name)) {
        console.log(name + " is passed")
    } else {
        console.log(name + " is failed")
    }
}
// ? Function to print the total number of passed and failed students
function printReport() {
    let countOfPassed = 0;
    let countOfFailed = 0;

    // Traverse through all students to count passes and fails
    for(let index = 0; index < studentNames.length; index++) {
        if(checkStudentGrade(studentMarks[index], studentNames[index])){
            countOfPassed++;
        } else {
            countOfFailed++
        }
    }
    console.log("TOTAL PASSED: " + countOfPassed)
    console.log("TOTAL FAILED: " + countOfFailed)
}

// Adding students' data
addStudent("Vinith", 80)
addStudent("Ram", 25)
addStudent('Pavan', -10)
addStudent('Venkayya', 100)
// console.log(studentNames, studentMarks)
// [ 'Vinith', 'Ram', 'Pavan', 'Venkayya' ] 
// [ 80, 75, -10, 100 ]

// ? Maintaining a constant for PASS_MARK, so that in future we can change it easily (Yes Bank Casestudy)
const PASS_MARK = 50

// Generate pass or fail report
// 1. Traverse through Students
// 2. We'll compare with PASS_MARK
// 3. if Pass, we'll print "passed" else "failed"

for (let index = 0; index < studentNames.length; index++) {
    let studentName = studentNames[index];
    let studentMark = studentMarks[index];
    printIfPassOrFail(studentMark, studentName)
}

printReport()

// 


// Total number of student
// Filter
// Valid if greater than 0
// Refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
let validMarks = studentMarks.filter((studentMark, index) => {
    if(studentMark >= 0) return true;
    return false
})

console.log("Valid Marks ", validMarks)

// Exericse: Average Marks of the class
function findAverage(validMarks) {
    // Write logic here
    // 1. Count the total marks
    // 2. Divide by number of valid marks
    let totalMarks = 0
    validMarks.map((mark) => totalMarks += mark)
    console.log("Average Score is: " + totalMarks / validMarks.length)
}

// To use as Arrow function
// const findAverage = (validMarks) => {
//     // Write logic here
//     // 1. Count the total marks
//     // 2. Divide by number of valid marks
//     let totalMarks = 0
//     validMarks.map((mark) => totalMarks += mark)
//     console.log("Average Score is: " + totalMarks / validMarks.length)
// }


// Syntax for Map
// Refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
studentNames.map((studentName, index) => {
    console.log(studentName)
})

// ? Function to find the top scorer
function printTopScorer(names, marks) {
    let currentMax = marks[0]
    let topScorer = names[0]
    marks.map((mark, index) => {
        if(mark > currentMax) {
            currentMax = mark
            topScorer = names[index]
        }
    })

    console.log(`Congratulations ${topScorer} for scoring ${currentMax} marks`)
}

printTopScorer(studentNames, studentMarks)

// TODO: Print the person with the lowest mark
// TODO: Write a function to add multiple students and marks to our list. Refer our shipping example. 