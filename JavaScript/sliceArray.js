const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log("Slice with no end index: ", array.slice(3));
console.log("Slice with start and end index: ", array.slice(3, 7));
console.log("Slice with negative start index: ", array.slice(-4));
console.log("Slice with negative start and end index: ", array.slice(-4, -1));
console.log("Slice with negative start and end index: ", array.slice(0, -1));


// get first 5 elements
console.log("First 5 elements: ", array.slice(0, 5));
// get last 5 elements
console.log("Last 5 elements: ", array.slice(-5));
// Create a copy of the array
const copyArray = array.slice();
console.log("Copy of the array: ", copyArray);
//get last  element
console.log("Last element: ", array.slice(-1)[0]);