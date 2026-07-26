const schoolData = require('./students.json')

//javascript object
const person = {
    name: "Sonam Soni",
    age: 34,
    email: "sonamsoni@gmail.com"
}
const jsonObj = JSON.stringify(person);

console.log("JS Object", person);
console.log("JSON Object", jsonObj);

//create JSON Data which always Written as string
const schoolData1 = '{"school":"Physics Wallah", "email" : "Support@pw.live", "students" : [{"name" : "Alex"}, {"name" : "Adidas"}, {"name" : "Alex"}]}';

//create JSON Data
console.log(schoolData);
console.log(schoolData1.email)
//convert to Javascript

 const school = JSON.parse(schoolData1);
 console.log(school);
 