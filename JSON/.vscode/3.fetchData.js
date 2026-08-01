const responce = fetch('https://jsonplaceholder.typicode.com/posts/5');

responce
.then(result =>result.json())
.then(json=>console.log(json)) // show resolved
.catch(error => console.log("Error fetching data:", error)) // show rejected
.finally(()=>console.log("Task Completed Successfully"))