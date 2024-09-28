
let trip = ["laptop", "food", "water bottle","cloth",];
let count = [1, 1, 1,1];

// property -> key
let backpack = {
 laptop : 1,
 food : 1,
 bottle : 2,
 cloth : 1,
 phone : 1
}
console.log(backpack.food);
//  Dot notation
console.log(" I Have" +backpack.food+" item left");

let newbackPack = {
    phone: "I-phone",
    laptop: "MacBook",
    snack: "Lays",
    book: "JS Guide"
}

console.log("I have "+ newbackPack.sample);

// Bracket notation
// newbackPack["book"]
console.log(newbackPack["book"]);


// modifying" property
newbackPack["book"] = "Harry Potter";
newbackPack["laptop"] = "Windows";

newbackPack.book = "Harry";

console.log("I have "+newbackPack.laptop+" Laptop");

// 
let pet = {
    name : "Buddy",
    type : "Lab",
    color: "Golden Red",
    age: 5,
    isTrained: true
}

pet.color = "Red";

console.log("Color of my pet is "+pet.color);

// if always accept boolean values
if(pet.isTrained){
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

// 
locker.watch = "Rolex";

// 
console.log(locker);

// Create Restaurant Object with name,location,ratings

let restaurant = {
    name: "Campus Tales",
    location: "Near mbu college",
    menu: ["Spring Potato","Chicken","Paneer","Dosa"],
    rating: 4.5
}

console.log(restaurant);

restaurant.rating = 5.0;

console.log("Rating is "+restaurant.rating);


let thing = "fan";
let company = "usha";

restaurant["cooler"] = "whirlphool";

// dynamic keys
restaurant[thing] = company;

