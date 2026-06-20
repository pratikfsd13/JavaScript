const students = 
    {
        name: "Sonam Soni",
        Skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        address:{ city: "Mumbai", state: "Maharashtra", country: "India"},
    }

for (let key in students) {
    console.log("Key ", key);
    console.log("-------------------------------");
    if (Array.isArray(students[key])) {
        for (let value of students[key]) 
            console.log(value);
     } else {
            console.log("Value ", students[key]);
        }

    }       