//npm install readline-sync (run this in terminal)

const read= require("readline-sync");

let birthYear= read.question("Enter your Birth Year? ");

let date = new Date();
console.log("Age: ", (date.getFullYear()-birthYear));

function validVote(birthYear) {
    let age = calculateAge(birthYear);
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}
validVote(birthYear);