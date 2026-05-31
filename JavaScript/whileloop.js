/*let i = 1;
while (i <= 10) {
    console.log("sending OTP " + i);
    i++;
}   

// Count Down Timer
let j = 5;
while (j >= 0) {
    console.log(j);
    j--;
}
console.log("Happy New Year!");*/

let attempts = 1;

while (attempts <= 3) {
    console.log("Trying to Password Attempt: " + attempts);
    attempts++;
}
console.log("Lock for 30 sec\n");

let battery = 20;
while (battery < 100) {
    console.log("Battery is charging: " + battery + "%");
    battery += 20;
}
console.log("Battery is fully charged!");

// For loop is used when we know the number of iterations,
//  while loop is used when we don't know the number of iterations.