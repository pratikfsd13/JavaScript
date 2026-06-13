
/* unction checkEvenOdd(num) {
    if (num % 2 == 0) {
        return num + " is an even number.";
    } else {
        return num + " is an odd number." ;
    }
}

console.log(checkEvenOdd(10)); // Output: 10 is an even number.
console.log(checkEvenOdd(15)); // Output: 15 is an odd number.
*/
function check(num){
    if(num%2==0){
        return "even"
    }else{
        return "odd"
    }
}
console.log("number is", check(15))
console.log("number is", check(36))