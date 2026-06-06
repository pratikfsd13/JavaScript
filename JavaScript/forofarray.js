const array = [1,2,3,4,5,6,7,8,9,10];
for (const element of array) {
    console.log(element);   
}

console.log("Normal loop iterated array: ");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
let name = "SonamSoni";
for(let char of name){
    console.log(char);
}