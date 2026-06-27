const person = {
  name: "John",
  age: 30,
  city: "New York"
};  

console.log("name property exists in person object: ", "name" in person); // true
console.log("gender property exists in person object: ", "gender" in person); // false  

