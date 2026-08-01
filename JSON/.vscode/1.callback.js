let data = undefined;
function fetchData(cb) {
    setTimeout(() => {
        console.log("Fetching data...");
        data = { message: "Data fetched successfully!" };
        cb(data);
    }, 2000);
}

function deliverFood(data) {
    console.log("Delivering food:", data);
}

fetchData(deliverFood);