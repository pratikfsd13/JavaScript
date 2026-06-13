// return new array from existing array by applying some transformation on each element of the array
const numbers=[1,2,3,4,5,6,7];

const squares = numbers.map(value => value * value); // returns a new array containing the squares of the original numbers
const cubes = numbers.map(value => value * value * value); // returns a new array containing the cubes of the original numbers

const triple = numbers.map(value => value * 3); // returns a new array containing the triple of the original numbers

console.log(squares);
console.log(cubes);
console.log(triple);

let users = [
    {name: "John",age:55},
    {name: "Alice",age:34},
    {name: "Catty",age:27},
    {name: "Bob",age:30},
]
let userNames = users.map(user => user.name); // returns a new array containing only the names of the users
console.log(userNames);