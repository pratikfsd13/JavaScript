class Person {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    get age() {
        return this.#age
    }
    set age(value) {
        this.#age = value
}
    get name() {
        return this.#name
    }
    set name(value) {
        this.#name = value
    }
}
let p1 = new Person ("Alice", 30);
console.log(p1.age);   // calling the getter method to access the age property
p1.age = 31;        // calling the setter method to update the age property

console.log(p1.age);
console.log(p1.name);  // calling the getter method to access the name property

p1.name = "Bob";     // calling the setter method to update the name property
console.log(p1.name);   


// # is used to indicate that the property is intended to be private, 
// and the getter method allows controlled access to the area of the circle.
