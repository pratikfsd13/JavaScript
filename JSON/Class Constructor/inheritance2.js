class Employee {
    constructor(name,salary) {
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ${this.salary}`);
    }
}
class Developer extends Employee {
    constructor(name,salary,language) {
        super(name, salary);
        this.language = language;
    }
    coding() {
        console.log(`${this.name} is coding in ${this.language}`);
    }
}
const dev = new Developer("Alice", 80000, "JavaScript");
const dev2 = new Developer("Bob", 90000, "Python");
dev.display();
dev.coding();
dev2.display();
dev2.coding();  
