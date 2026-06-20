const user= {
    greet(){
        console.log("Hello");
    },

}
console.log("City: ", user.address?.city); //undefined
console.log("zipCode: " , user.address?.zipCode); //undefined
// with ? we can avoid error and get undefined instead of error

console.log(user.sayBye?.()); //returns undefined
console.log("Greet: ", user.greet?.()); //Hello
// if greet method is present then only it will call otherwise it will return undefined 

const array=[1,2,3,4,5];
console.log("First element: ", array?.[0]); //1
console.log("Fifth element: ", array?.[4]); //5
console.log("Sixth element: ", array?.[5]); //undefined 