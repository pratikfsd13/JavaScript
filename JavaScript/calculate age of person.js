let yob = 1992;
function calculateAge(yob) {
    let date = new Date();
    return date.getFullYear() - yob;
}
console.log("Age:", calculateAge(yob)); // Output: Age: [calculated age based on current year and year of birth]

function validVote(yob) {
    let age = calculateAge(yob);
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}
validVote(yob); // Output: You are eligible to vote. (if age is 18 or above) or You are not eligible to vote. (if age is below 18)