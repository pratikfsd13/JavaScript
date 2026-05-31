function square(num) {
  return num * num;
}
console.log(square(5)); // Output: 25
console.log(square(5)); // Output: 25

let multiplier = 2; // external variable that affects the output of the function

function square(num) {
  return num * num * multiplier;
}
console.log(square(5)); // Output: 50
multiplier = 3;
console.log(square(5)); // Output: 75
 
// pure function always produces the same output for the same input and has no side effects, while an impure function may produce different outputs for the same input or have side effects that affect the program's state.
// pure function : Input -> Process -> Output (same output for same input, no side effects)
// ex. calculate always has pure function because it always returns the same output for the same input and does not modify any external state.

// impure function : Input -> Process -> Output (may produce different output for same input, may have side effects)
// if external value change side effect
// ex . restaurant bill calculation may be impure if it depends on external factors like tax rates or discounts that can change over time, leading to different outputs for the same input.
// same input may produce different output if it depends on external factors like tax rates or discounts that can change over time, leading to different outputs for the same input.