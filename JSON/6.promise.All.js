const p1 = Promise.resolve("HTML");
const p2 = Promise.resolve("CSS");
const p3 = Promise.resolve("Javascript");
 
Promise.all([p1, p2,p3])
.then(result =>console.log(result))
.catch(error=>console.log(error))
// Run all promise in parallel
// in case if any of the promise rejected all will rejected
