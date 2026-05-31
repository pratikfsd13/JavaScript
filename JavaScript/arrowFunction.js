const add = (a,b) => a+b; //return addition of a and b
// single parameter does not require parentheses and no need to use return keyword if the function body is a single expression

const greet = (name) => console.log("Hello " + name); // returns a greeting message with the provided name
greet("Alice"); // Output: Hello Alice

const calculate =(a,b) => {
    const sum = a + b;
    const product = a * b;
    return add + product;
    // returns an object containing the sum and product of a and b
}
// more that one line of code requires curly braces and an explicit return statement
// in that case if you want to return an object, you need to wrap the object literal in parentheses to avoid syntax errors

console.log(add(5, 3)); // Output: 8
greet("Bob"); // Output: Hello Bob
console.log(calculate(3, 4)); // Output: { sum: 7, product: 12 }