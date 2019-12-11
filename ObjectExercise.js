let myPenguin =  {
    name: "Ping",
    origin: "Peter og Ping",
    creator: "Storm", 
}

//console.log(`Hello, my name is ${myPenguin.name}`);

myPenguin.canFly = false;
myPenguin.chirp = function() {
    console.log("CHIRP CHIRP! Is this what penguins sound like?");
}
myPenguin.sayHello = function() {
    console.log("Hello, my name is " + this.name);
}

myPenguin.sayHello();

myPenguin.name = "McPenguin";

myPenguin.sayHello();

myPenguin.fly = function(){
    if (this.canFly == true) console.log("I can fly");
    else console.log("Sorry, no flying for me");
}

myPenguin.fly()

/* for (let key in myPenguin) {
    console.log(key);
}

for (let key in myPenguin) {
    console.log(myPenguin[key]);
} */


// arrays inside objects

myPenguin.favoriteFood = ["fish", "sausage", "rice"];

console.log(myPenguin.favoriteFood[1]);

let firstFavFood = myPenguin.favoriteFood[0];

myPenguin.favoriteFood.push("onions");

console.log(myPenguin.favoriteFood.length);

myPenguin.favoriteFood[4] = "pineapples";

let lastFavFood = myPenguin.favoriteFood.length - 1;

/* for (let i = 0; i < myPenguin.favoriteFood.length; i++) {
    console.log(myPenguin.favoriteFood[i]);
} */

// objects inside other objects

myPenguin.outfit = {
    hat: "baseball cap",
    shirt: "sport",
    pants: "jeans",
    shoes: "sneakers",
}

let penguinHatType = myPenguin.outfit.hat;
console.log(penguinHatType);

myPenguin.outfit.accessory = "pocket watch";

myPenguin.outfit.hat = "top hat";

delete myPenguin.outfit.pants;

/* for (key in myPenguin.outfit) {
    console.log(myPenguin.outfit[key])
} */

let gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
};
  
let ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
};
  
let fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
};

let penguins = [gunter,ramon,fred];

console.log(penguins[0]);

let secondPenguin = penguins[1];

console.log(penguins[penguins.length-1]["name"]);

penguins.push(myPenguin);

console.log(penguins.length);

penguins[0]["canFly"] = true;

penguins[0]["sayHello"]();

for (let i = 0; i < penguins.length; i++) {
    console.log(penguins[i]["name"])
}

for (let i = 0; i < penguins.length; i++) {
    penguins[i]["sayHello"]();
}

for (let i = 0; i < penguins.length; i++) {
    penguins[i]["numberOfFeet"] = 2;
}

for (let i = 0; i < penguins.length; i++) {
    if (penguins[i]["canFly"] == true) {
    console.log(penguins[i]["name"] + " can fly!");
    }
}

