const numbers = [];
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
console.log(numbers); // Output: [10, 20, 30]
// Adding an element at index 5

console.log("Access Element at index 1: ", numbers[1]); // Output: 20

console.log("before update: ", numbers[2]); // Output: 30
numbers[2] = 50; // Update element at index 2

console.log("after update: ", numbers[2]); // Output: 50
numbers[5] = 90;

console.log("after adding element at index 5: ", numbers); // Output: [10, 20, 30, <2 empty items>, 90]

delete numbers[2]; // Deleting element at index 2

console.log("after deleting element at index 2: ", numbers); // Output: [10, 20, <1 empty item>, <2 empty items>, 90]
console.log("Length: ", numbers.length); // Output: 6
