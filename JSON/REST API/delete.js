fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json'}
})
      .then(response => {
        if (response.status === 200) {
            console.log('Data deleted successfully.');
        } else {
            console.log('Failed to delete data. Status:', response.status);
        }
    }).catch(error => console.log('Error deleting data:', error));