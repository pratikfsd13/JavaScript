const array = [1, 2, 3, 4, 5, 6, 7 ];
const even = array.filter(a => a % 2 === 0); // returns a new array containing only the even numbers from the original array
const even1 = array.filter(value => value % 2 === 0); // returns a new array containing only the even numbers from the original array

console.log("even:", even);
console.log("even1:", even1);

const odd = array.filter(a => a % 2 !== 0); // returns a new array containing only the odd numbers from the original array
const odd1 = array.filter(value => value % 2 !== 0); // returns a new array containing only the odd numbers from the original array

console.log("odd:", odd);
console.log("odd1:", odd1);

const greaterThanTwo = array.filter(a => a > 2); // returns a new array containing only the numbers greater than 2 from the original array
const greaterThanTwo1 = array.filter(value => value > 2); // returns a new array containing only the numbers greater than 2 from the original array


console.log("greaterThanTwo:", greaterThanTwo);
console.log("greaterThanTwo1:", greaterThanTwo1);
const ages = [12, 17, 18, 24, 32, 45, 67];

const adults = ages.filter(age => age >= 18); // returns a new array containing only the ages that are 18 or older
console.log("adults:", adults);

let users = [
    {name: "John",age:55},
    {name: "Alice",age:34},
    {name: "Catty",age:27},
    {name: "Bob",age:30}
];
const people = users.filter(user => user.age >= 35); // returns a new array containing only the users who are 35 or older
console.log("people above 35:", people);