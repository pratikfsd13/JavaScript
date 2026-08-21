try{
    console.log(result);
} catch (error) {
    console.log("An error occurred:", error.message);
}   

// throwing an error to demonstrate the catch block
try {
    let age = 15;
    if (age < 18) {
        throw new Error("Age must be 18 or older.");
    }   
    console.log("Access granted.");
} catch (error) {
    console.error("An error occurred:", error.message);
}