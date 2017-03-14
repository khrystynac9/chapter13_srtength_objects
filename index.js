/*
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";

Dog.prototype.sitting = false;

Dog.prototype.bark = function() {
    if (this.weight > 25) {
        console.log(this.name + " says Woof");
    } else {
        console.log(this.name + " says Yip");
    }
};

Dog.prototype.run = function() {
    console.log("Run - run");
};
Dog.prototype.wag = function() {
    console.log("Wag - wag");
};

Dog.prototype.sit = function() {
    if (this.sitting) {
        console.log(this.name + " is already sitting");
    } else {
        this.sitting = true;
        console.log(this.name + " is now sitting");
    }
};


var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 22);
var spot = new Dog("Spot", "Chihuahua", 10);
var barnaby = new Dog("Barnaby", "Basset Hound", 55);
spot.bark = function() {
    console.log(this.name + " says WOOF");
};

fido.bark();
console.log(fido.weight);
spot.run();
console.log(fluffy.name);
fluffy.wag();
spot.bark();
fluffy.bark();
barnaby.sit();
barnaby.sit();



//додаємо другий Prototype
function ShowDog(name, breed, weight, handler) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.handler = handler;
}

ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webvillle";
ShowDog.prototype.stack = function() {
    console.log("Stack!!!");
};
ShowDog.prototype.bait = function() {
    console.log("Bail");
};
ShowDog.prototype.gait = function(kind) {
    console.log(kind + "ing");
};

var scotty = new ShowDog("Scotty", "Terrier", 15, "Cookie");

scotty.stack();
scotty.gait("slow");

//кінець другого Prototype

//var fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) {
    console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) {
    console.log("Fido is a ShowDog");
}
//var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
if (scotty instanceof Dog) {
    console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog");
}
console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);






var busja = {
    name: "Busja",
    weight: 6,
    say: function() {
        console.log(this.name + " says mjaw - mjaw");
    }
};

busja.say();
console.log(busja.weight);



function Robot(name, created, owner) {
    this.name = name;
    this.created = created;
    this.owner = owner;
}

Robot.prototype.maker = "PecCo";

Robot.prototype.speak = function() {
    console.log("Hello");
};
Robot.prototype.makeCoffee = function() {
    console.log("Take your coffee, please");
};
Robot.prototype.blinkLights = function(){
    console.log("Сautiously bright light");
};

var robby = new Robot("Robby", 1956, "Morbius");
robby.onOffSwitch = true;
robby.makeCoffe = function() {
    console.log("Hear's your starbucks Coffee");
};

var rosie = new Robot("Rosie", 1962, "Jetson");
rosie.cleanHouse = function(){
    console.log("I've already cleaned your house");
};


//другий Prototype

function SpaceRobot (name, year, owner, homePlanet) {
    this.name = name;
    this.tear = year;
    this.owner = owner;
    this.homePlanet = homePlanet;
}

SpaceRobot.prototype = new Robot();

SpaceRobot.prototype.speak = function() {
    alert(this.name + " says Sir, If I may venture an opinion...");
};
SpaceRobot.prototype.pilot = function() {
    alert(this.name + " says Thrusters? Are they important?");
};

var c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");

c3po.speak();
c3po.pilot();
console.log(c3po.name + " was made by " + c3po.maker);

var simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");

simon.makeCoffee();
simon.blinkLights();
simon.speak();

//кінець другого Prototype

/*console.log(robby.name + " was made by " + robby.maker +
    " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();

console.log(rosie.name + " was made by " + rosie.maker +
    " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();


robby.speak();
rosie.cleanHouse();


var x ="5";
var y = 10;
var z =  x - y;
console.log(z);

*/

/*function () {
    var kitty = "mau";
})();
console.log(kitty);
*/
function ka() {
    var x = 99;
    var y = "101";
      if (x <= y){
        return "tru";
    }else{
        return "fals";
    }
}
console.log(ka());

function bar(){
    
}
console.log(typeof function bar());