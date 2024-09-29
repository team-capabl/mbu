// Adding Behaviour to our car
// understanding of this use case
let car = {
    engine: "Modern Tesla",
    isEngineRunning: false,
    model: "TESLA 1",
    tyre: "MRF",
    // Method -> Behaviour
    startCar: function(){
        this.isEngineRunning = true;
        // console.log(this.model);
        // car.isEngineRunning
        // Both are same
    }
}

// start car using method
car.startCar();

// car.isEngineRunning = true;

// Keys, atrributes, properties
let robot = {
    name: "Chitti",
    tasks: ["Turn on light", "Do Homework", "Turn on Ac", "Clean the floor"],
    runningTask: "",
    performTask: function(task){ // call this as method always not function
        this.runningTask = task;
    },
    // greet: function(){  // without parameter
    //     console.log("Welcome to MBU");
    // },
    greet: function(text){
        console.log(text);
    },
    changeTask: () => {
        console.log("I am inside changeTask",this);
    }
}

robot.performTask("Do Homework");

console.log("Currently Running",robot.runningTask);

console.log(robot.greet("Welcome to MBU"));

console.log(robot.changeTask());
// Use Normal function always with object to make this accessible