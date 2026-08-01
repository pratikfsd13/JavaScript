async function greeting(){
    return "Good Morning..!"
}
console.log(greeting());

const result = greeting();
result.then(data=>console.log(data))