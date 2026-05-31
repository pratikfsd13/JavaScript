let discount = prompt("Enter your Bill Amount: ");
if (discount >= 5000) {
    document.write("You got 20% discount");
    document.write("Your final bill amount is: " + (discount - (discount * 0.20)));
} else if (discount >= 2000) {
    document.write("You got 10% discount");
    document.write("Your final bill amount is: " + (discount - (discount * 0.10)));  
} else if (discount >= 1000) {
    document.write("You got 5% discount");
    document.write("Your final bill amount is: " + (discount - (discount * 0.05)));
} else {
    document.write("Sorry, you are not eligible for discount");
}