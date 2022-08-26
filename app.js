class Hamster {
    constructor(owner = "", name, price = 15) {
        this.owner = owner;
        this.name = name;
        this.price = price;
    }

    wheelRun() {
        console.log('squeak squeak');
    }

    eatFood() {
        console.log('nibble nibble');
    }

    getPrice() {
        return this.price;
    }
}

class Person {
    constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamsters;
        this.bankAccount = bankAccount;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getWeight() {
        return this.weight;
    }

    greet() {
        console.log(`Hello world, my name is ${this.name}!`);
    }

    eat() {
        this.weight++;
        this.mood++;
    }

    exercise() {
        this.weight--;
    }

    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount+= 10;
    }

    buyHamster(h) {
        this.hamsters.push(h);
        this.mood+= 10;
        this.bankAccount-= h.getPrice();   
    }
}

let timmy = new Person("Timmy")
console.log(timmy);

timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
console.log(timmy);
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
console.log(timmy);
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
console.log(timmy);
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
console.log(timmy);
let gus = new Hamster("Timmy", "Gus");
console.log(gus);
timmy.buyHamster(gus);
console.log(timmy);
for(let i = 0; i < 15; i++) {timmy.ageUp();}
console.log(timmy);
for(let i = 0; i < 2; i++) {timmy.eat();}
console.log(timmy);
for(let i = 0; i < 2; i++) {timmy.exercise();}

class Dinner {
    constructor(chef, appetizer = "", entree = "", dessert = "") {
        this.chef = chef;
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}

class Chef {
    constructor(name, dinners = []) {
        this.name = name;
        this.dinners = [];
    }

    makeDinner(a, b, c) {
        let dinner = new Dinner(this.name, a, b, c);
        this.dinners.push(dinner);
        return dinner;
    }
}

let mcdonald = new Chef("Mcdonald");
let dinner1 = mcdonald.makeDinner("Fries", "Burger", "Chocolate milk");
console.log(dinner1);
let dinner2 = mcdonald.makeDinner("Fries", "Taco", "Chocolate cake");
let dinner3 = mcdonald.makeDinner("Nuggets", "Tuna fish", "Apple pie");
console.log(mcdonald);