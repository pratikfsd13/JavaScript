console.log("Round 4.4 =", Math.round(4.4)); // Output: 4
console.log("Round 4.6 =", Math.round(4.6)); // Output: 5
console.log("Round 4.5 =", Math.round(4.5)); // Output: 5 (rounds up to the nearest even number)

const random = Math.random(); // generates a random number between 0 (inclusive) and 100 (exclusive)
const multiply= random * 100;// multiplies the random number by 100 to get a number between 0 and 100
console.log(Math.round(multiply)); // Output: a random integer between 0 and 100

console.log(":Floor of 4.7 =", Math.floor(4.7)); // Output: 4
console.log(":Ceil of 4.2 =", Math.ceil(4.2)); // Output: 5

console.log("maximum of 14,23,28,55,69:", Math.max(14, 23, 28, 55, 69)); // Output: 69
console.log("minimum of 14,23,28,55,69:", Math.min(14, 23, 28, 55, 69)); // Output: 14
console.log("Square root of 16:", Math.sqrt(16)); // Output: 4
console.log("Power of 2 raised to 10:", Math.pow(2, 10)); // Output: 1024

const radius=2 ;
const area = Math.PI * Math.pow(radius, 2); // calculates the area of a circle with radius 2
console.log("Area of circle with radius 2:", Math.round(area)); // Output: Area of circle with radius 2: 12.57
