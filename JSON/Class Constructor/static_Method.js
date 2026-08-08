class Calculator {
    static add(a, b) {
        return a + b;
    }   
}
console.log(Calculator.add(5, 10)); // Output: 15
// In this example, the add method is defined as a static method using the static keyword.
// It can be called directly on the Calculator class without creating an instance of the class.