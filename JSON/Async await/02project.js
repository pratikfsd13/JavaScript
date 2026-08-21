// Helper function to simulate time delay using Promises
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 1. Place order : 1 sec
async function placeOrder() {
    console.log("Placing order...");
    await delay(1000); // 1 second delay
    console.log("Order placed successfully.");
}

// 2. Prepare Food : take more time (e.g., 3 seconds)
async function prepareFood() {
    console.log("Preparing food...");
    await delay(2000); // 3 seconds delay
    console.log("Food is ready.");
}

// 3. assignDelivery : 1 sec
async function assignDelivery() {
    console.log("Assigning delivery person...");
    await delay(1000); // 1 second delay
    console.log("Delivery person assigned.");
}

// 4. DeliverFood : 2 sec
async function deliverFood() {
    console.log("Delivering food...");
    await delay(2000); // 2 seconds delay
    console.log("Food delivered.");
}

// Usage function must be async and use await for all functions
async function processOrder() {
    console.log("--- Starting Order Process ---");
    
    await placeOrder();
    await prepareFood();
    await assignDelivery();
    await deliverFood();
    
    // Print last message
    console.log("enjoy your food");
}

// Call the usage function to run the code
processOrder();