class Person{
    static course = "JavaScript";
    constructor(name, age){
        this.name = name;
        this.age = age;
    }           
}       
  const p1 = new Person("Alice", 30);
  const p2 = new Person("Bob", 25);

console.log(p1.name + ", " + p1.age); // Accessing the instance property
console.log(p2.name + ", " + p2.age); // Accessing the instance property
console.log(Person.course); // Accessing the static property directly from the class
