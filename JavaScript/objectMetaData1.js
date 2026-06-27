const person = {};
 Object.defineProperty(person,"name",{
    value: "Sonam",
    writable:true,
    enumarable:true,
    configurable:false
 })
 console.log(person);
 delete person.name //fail silently and not giving error
 console.log(person);