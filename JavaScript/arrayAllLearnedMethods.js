const array = [1, 2, 3, 4, 5,6,7];

//filter only even numbers
// multiply those filtered numbers by 10
// find sum

const sum = array.filter(a => a % 2 === 0) // filter even numbers
                 .map(a => a * 10) // multiply by 10
                 .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // find sum 

                 console.log("sum of even numbers multiplied by 10:", sum);