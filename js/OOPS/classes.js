// class Student {
//     constructor() {

//     }
// }

// const student1 = {
//     name: "Vinith",
//     branch: 'BCA',

//     greet: function () {
//         console.log('Hello guys, I am Vinith')
//     }
// }

// const student2 = {
//     name: "Pavan",
//     branch: 'BCA',

//     greet: function () {
//         console.log('Hello guys, I am Pavan')
//     }
// }
// Class is a Bluprint

class Person {
    constructor(name) {
        this.name = name
        this.collegeName = "MBU"
    }

    tellYourName() {
        console.log(`My name is ${this.name}`)
    }
}

// TODO: Create a class called CollegeBusDriver and extend with Person class

class Student extends Person {
    constructor(name, branch) {
        super(name) // This will call the constructor of Person class
        this.branch = branch
    }

    greet() {
        // Wrap everything in `content`
        // Enclose Dynamic values(Variables) within ${}

        // Good Practice
        console.log(`Hi, My name is ${this.name}, Welcome to MBU College`)

        // Bad Practice
        // console.log("Hi, My name is" + this.name + "Welcome")
    }
}

class Professor extends Person {
    #salary; // Private variable
    constructor(name, teaches) {
        super(name)
        this.name = name;
        this.teaches = teaches
    }

    updateSalary() {
        this.#salary = 10000;
    }

    evaluatePaper() {
        console.log('I can evaluate Answer papers')
    }

    greet() {
        console.log(`Hey, I am ${this.name}, and I teach ${this.teaches}`)
    }
}

//? Objects are instances of a Class
const student1 = new Student("Vinith", "BCA")
const student2 = new Student("Pavan", "BCA", "Cricket")
// console.log(student1, student2)

// student1.tellYourName()
// student2.greet()

// TODO: Create a Class for Professor and have parameters such as
// teaches, name

//TODO: Add a function called greet which should print 
// "Hi, I am Pavan and I teach Maths"


const professor1 = new Professor("Pavan", "DSA")
professor1.updateSalary()

// console.log(professor1.#salary) // Error will be thrown

// Throws error since the class doesn't have evaluatePaper implementation
// student1.evaluatePaper();

// TODO: Try to add a function called playGame to the Student class and 
// try to access using any professor object

// Access Modifiers:
// Private, Public, Protected

// Public: Can be accessed anywhere inside/outside of the class -> Least Secure
// Private: Can be accessed only within the class -> Most Secure
// Protected: Can be accessed within Package. -> Kinda Secure


// console.log(student1.greet())
// console.log(professor1.greet())

console.log(student1)
console.log(student2)