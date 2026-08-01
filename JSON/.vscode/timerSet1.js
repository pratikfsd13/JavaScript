/*setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);
*/

// Counter Demo
/*let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    console.log(counter);
}, 1000); */

/* let counter = 10;
const intervalId = setInterval(() => {
    counter--;
    console.log(counter);
}, 1000); */

let seconds = 15;
const timer = setInterval(() => {
    console.log("Resend Otp in " + seconds + " seconds");   
    seconds--;
    if (seconds < 0) {
        clearInterval(timer);
        console.log("OTP Resend ");
        seconds=15
    }
}, 1000)