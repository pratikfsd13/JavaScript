const user = {
    name: 'Sonam'};

console.log(Object.getOwnPropertyDescriptor(user,'name'));
// {value: 'John', writable: true, enumerable: true, configurable: true}
// you can see all metadata   
 
const person = {age:34, email: "test@gmail.com"};
Object.defineProperty(person, "name",{
    value : "Sonam",
    writable: false,
    enumerable: false,
    configuration: true
})
console.log(person);
person.name ="Pratik" //try to change name 
console.log(person); // still it shows Sonam because writable is false
 