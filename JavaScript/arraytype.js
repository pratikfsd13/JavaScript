//homogeneous array
const arr1 = [1, 2, 3, 4, 5]; // number array
const arr2 = ['Alice', 'Bob', 'Charlie', 'David']; // string array
const arr3 = [true, false, true, false]; // boolean array
const arr4 = [{ name: 'Alice', age: 30 }, // object array
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 28 }];


console.log(typeof arr1); // Output: 'object' (arrays are of type 'object' in JavaScript)
console.log(typeof arr2); // Output: 'object' (arrays are of type 'object' in JavaScript)
console.log(typeof arr3); // Output: 'object' (arrays are of type 'object' in JavaScript)
console.log(typeof arr4); // Output: 'object' (arrays are of type 'object' in JavaScript)

console.log(Array.isArray(arr2)); // Output: true


//heterogeneous array
const mixedArray = [1, 'Hello', true, null, undefined, { name: 'Alice' }, [1, 2, 3]];
console.log(mixedArray);