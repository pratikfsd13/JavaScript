let user = {
    name: "Sonam",
    age:35, 
    rollNo: 23,
    isAdmin: true,
    marks:{physics: 80, chemistry: 90, math: 95},
    hobbies: ['reading', 'traveling', 'cooking'],
    languages: ['English', 'Hindi', 'Spanish', 'French', 'Marathi'],   
}

for(let key in user){
    console.log(key, user[key]); // it will print all the keys of the object    
}
   