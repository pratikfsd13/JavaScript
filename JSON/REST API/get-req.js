async function getData(){
    try{
        const response = await fetch ('https://jsonplaceholder.typicode.com/todos/192');
        // by default it triggers a GET request
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}   

getData();