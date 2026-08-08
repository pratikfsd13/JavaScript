async function addNewData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST', // Specify the HTTP method as POST
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'My New Todo',
                body: 'This is a new todo item added via POST request.',
                userId: 1,
                completed: false
            })
        });
        console.log('Response status:', response.status);
        console.log('Response status text:', response.statusText);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error('Error adding new data:', error);
    }
}

addNewData();