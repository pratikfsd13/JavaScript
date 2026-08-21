class Animal {
    constructor() {
        console.log("Animal constructor called");
    }
    eat() {
        console.log("Animal is eating");
    }
}
class Dog extends Animal {
    constructor() {
        super(); // Call the parent class constructor
        console.log("Dog constructor called");
        
    }
}
let dog = new Dog();
dog.eat();