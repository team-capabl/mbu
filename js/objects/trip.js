// Traditional Approach for trip planning
let trip = ["laptop", "food", "water bottle","cloth",];
let count = [1, 1, 1,1];


// property -> key
// Object will have keys and values
// Key is also called as Property
let backpack = {
 laptop : 1,
 food : 1,
 bottle : 2,
 cloth : 1,
 phone : 1
}

// Printing which how many foods left
console.log(backpack.food);  // 1


// There are 2 ways to Access Key/Property 1. Dot Notation 2.Bracket Notation

// Dot notation
console.log(" I Have" +backpack.food+" item left"); //  I Have 1 item left


// Let's modify backpack to have variety of options (String Values)
let newbackPack = {
    phone: "I-phone",
    laptop: "MacBook",
    snack: "Lays",
    book: "JS Guide"
}

// When we try to access key which is not inside our object it gives undefined
console.log("I have "+ newbackPack.sample);  //undefined


// Bracket notation
// We are accessing backpack using Bracket [] Notation
console.log(newbackPack["book"]);  // JS Guide


// modifying" property
// We have 2 ways to modify object's property


// Bracket Notation way
newbackPack["book"] = "Harry Potter";
newbackPack["laptop"] = "Windows";

// Dot Notation
newbackPack.book = "Harry";

// Printing laptop using dot notation
console.log("I have "+newbackPack.laptop+" Laptop"); // I have Windows Laptop


// Declaring Pet object which have Values as String/Boolean/number
let pet = {
    name : "Buddy",
    type : "Lab",
    color: "Golden Red",
    age: 5,
    isTrained: true
}

// modfying color property
pet.color = "Red";

// Printing Pet color
console.log("Color of my pet is "+pet.color);  // Color of my pet is Red

// if always accept boolean values
if(pet.isTrained){   // pet.isTrained -> true
    console.log("Take me to army");
}else{
    console.log("Leave me alone, please train me");
}

// Locker in College, add few things inside locker
// ex. Shoes, books, bag
let locker ={
    books: "English, Avengers",
    waterBottle: "Bisleri",
    snacks: "Lays",
    shoes: "Nike",
    bag: "SkyBags"
}

// Adding new property to locker object
locker.watch = "Rolex";

// printing locker
console.log(locker);  // it will show whole locker object

console.log("My Locker is"+locker)    // My Locker is [Object object]

console.log("My Locker is ",locker)   // My Locker is { books: "English, Avengers",waterBottle: "Bisleri",snacks: "Lays",shoes: "Nike",bag: "SkyBags", watch: "Rolex"}


// Create Restaurant Object with name,location,ratings
let restaurant = {
    name: "Campus Tales",
    location: "Near mbu college",
    menu: ["Spring Potato","Chicken","Paneer","Dosa"],
    rating: 4.5,
}

// Printing restaurant object
console.log(restaurant);

// Modifying Rating using dot notation
restaurant.rating = 5.0;


console.log("Rating is "+restaurant.rating);  // Rating is 5.0



// Dynamic key changes
let thing   = "fan";
let company = "usha";

// Assigning using static key
restaurant["cooler"] = "whirlphool";

// assigning using dynamic key
restaurant[thing] = company;


// Bracket Notation
restaurant["Water Bottle"] = "New company";

// Dot Notation
restaurant.waterBottle = "New company";  
// can't write restaurant.water Bottle , it will throw error
