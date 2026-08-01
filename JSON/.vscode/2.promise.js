function checkUserStatus(status) {
    const promise = new Promise((resolve, reject) => {
        const success = true; // Simulating a successful operation
        if (success) {
            resolve("Operation completed successfully!");
        } else {
            reject("Operation failed."); // throwing error if the operation fails
        }
    });
    return promise;
}

const abhishekPromise = checkUserStatus("true");
const bhaskarPromise = checkUserStatus("false");

abhishekPromise
    .then(result => console.log("Abhishek's promise resolved"))
    .catch (error => console.log("Abhishek's promise rejected:", error))
    .finally(() => console.log("Task DONE ")) //error handling for Abhishek's promise
// then catch its called chaining

bhaskarPromise
    .then(result => console.log("Bhaskar's promise resolved", result))
    .catch(error => console.log("Bhaskar's promise rejected:", error)) //error handling for Bhaskar's promise
    .finally(() => console.log("Task DONE "))
// then catch its called chaining