const numbers = [];
numbers.push(10); // Adding element at the end of the array
numbers.push(20);
numbers.push(30);
numbers.push(40);
numbers.push(50);

/*
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;*/


console.log("After adding elements :", numbers);
numbers.unshift(5); // Adding element at the beginning of the array
numbers.unshift(6); // Adding another element at the beginning of the array
console.log("After adding elements at the beginning: ", numbers);   

console.log("Removing last element: ", numbers.pop()); // Removing the last element
console.log("After removing last element: ", numbers);
