fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'PUT',
    body: JSON.stringify({
        // title: 'My New Todo',
        // body: 'This is a new todo item added via PUT request.',
        userId: 1,
        title: "CHECK PAPERS",
        completed: true
    }),
    headers: { 'Content-Type': 'application/json'}
})
      .then(response => {
        console.log('Response status:', response.status);
        console.log('Response status text:', response.statusText);
        return response.json();
    }) 
.then(json => console.log(json))
.catch(error => console.log('Error adding new data:', error))
 