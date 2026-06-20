const array = [5, 12, 8, 130, 44];

//check if an array includes a certain value among its entries
const isIncluded = array.includes(8);
console.log("IsIncluded", isIncluded);  

//check if an array includes a certain value among its entries, starting the search at a given index
const isExcluded = array.includes(3);
console.log("Is Excluded From Index", isExcluded);

console.log (array.indexOf(130)); // returns 3
console.log (array.lastIndexOf(44)); // returns 4

const string = "Hello";

console.log(string.indexOf("l")); // returns 2
console.log(string.lastIndexOf("l")); // returns 3  
 