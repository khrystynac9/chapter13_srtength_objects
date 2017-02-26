function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";

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

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 22);
var spot = new Dog("Spot", "Chihuahua", 10);
spot.bark = function() {
    console.log(this.name + " says WOOF");
};

fido.bark();
fido.weight;
spot.run();
fluffy.name;
fluffy.wag();
spot.bark();
fluffy.bark();

var busja = {
    name: "Busja",
    weight: 6,
    say: function() {
        console.log(this.name + " says mjaw - mjaw");
    }
};

busja.say();
busja.weight;