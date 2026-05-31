let name ="Sonam Soni"; // global variable

function test1(){
    let num = 13; // local variable
    console.log("Namee: ", name, "Number: ", num); // Accessing global and local variables  

}

function test2(){
    console.log("Namee: ", name, "Number: ", num); // Accessing global and local variables  
} // This will throw an error because num is not defined in this scope

test1(); // Output: Namee:  Sonam Soni Number:  13
test2();// Output: ReferenceError: num is not defined

// global variable accessed in all functions
// local variable is accessed to that function
