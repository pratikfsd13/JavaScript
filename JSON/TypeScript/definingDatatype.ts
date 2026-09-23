// no returns means void function
function greet(): void {
    console.log("Hello, World!");
}
// TypeScript Parameters
function add(num1: number, num2: number): void {
    console.log(num1 + num2);
}
function validAge(age: number): boolean {
    return age >= 18;
}
greet();
console.log(add(40,50));
console.log(validAge(20)); // Output: true