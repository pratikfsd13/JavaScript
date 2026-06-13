const array = [1, 2, 3, 4, 5, 6, 7];

const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // returns the sum of all the numbers in the array
const product = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1); // returns the product of all the numbers in the array

console.log("sum:", sum);
console.log("product:", product);

const cart = [{item: "Laptop", price: 90000}, 
    {item: "Keyboard", price: 1500}, 
    {item: "Mouse", price: 750}];

    const total= cart.reduce((add,item) => add + item.price, 0); // returns the total price of all the items in the cart
    console.log("total price:", total);