class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }   
    // Method to display person's details
    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    } // Getter method to access the age property 
}
let p1 = new Person ("Alice", 30);
// Accessing properties and methods of the Person class
console.log(p1.name); // Output: Alice
console.log(p1.age);  // Output: 30 
p1.displayDetails(); // Output: Name: Alice, Age: 30  


 
//constructors are special methods used to initialize objects created from a class. 
// In this example, the constructor takes two parameters, name and age, and assigns 
// them to the instance properties of the Person class. The displayDetails method 
// is used to print the person's details to the console.