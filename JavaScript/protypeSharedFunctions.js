//constructor function
function student(name, age) {
    this.name = name;
    this.age = age;

}
//prototype shared functions
student.prototype.introduce = function () {
    console.log(`Hi, I am ${this.name}, ${this.age} years old`);
    console.log("Hi, I am " + this.name + ", " + this.age + " years old");
}
let s1 = new student("Sarvjeet", 20);
let s2 = new student("Deepak", 22);
let s3 = new student("Priyesh", 21);

s1.introduce();
s2.introduce();
s3.introduce();

//every student object has thier own name and age behaviour but they share the same introduce function which is stored in the prototype of the constructor function. This way we can save memory and avoid creating multiple copies of the same function for each object.
// the introduce() function is shared among all instances of the Student constructor, and it can access the name and age properties of each instance through the this keyword.
//instead of creating a new introduce function for each student object, we can define it once in the prototype and all student objects can use it. This is more efficient and saves memory.
// all the students can use the same introduce function, which is defined in the prototype of the Student constructor. This way we can save memory and avoid creating multiple copies of the same function for each object.
