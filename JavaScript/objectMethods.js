const student = {
    name: "John",
    age: 22,
    course: "MERN",
    address: "Newyork",
    study() {
        console.log(this.name + " is studying ");
    },
    introduce() {
        console.log("Hello, my name is " + this.name );
        console.log(" and I am " + this.age + " years old.");
        console.log("My course is " + this.course );
        console.log(" and I live in " + this.address );
    }
}

student.study();   
student.introduce();