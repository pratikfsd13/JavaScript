let user = {
    name: "Sonam",
    age:35, 
    rollNo: 23,
    isAdmin: true,
    marks:{physics: 80, chemistry: 90, math: 95},
    hobbies: ['reading', 'traveling', 'cooking'],
    languages: ['English', 'Hindi', 'Spanish', 'French', 'Marathi'],   
    greet: function() {
        console.log(`Hello, my name is ${this.name}` );
    }
}

//acessing properties  
console.log(user.languages); // dot notation not work because of space in key name
console.log(user["isAdmin"]); // dot notation not work because of space in key name
console.log(user.marks.physics); // dot notation work because no space in key name
user.greet();