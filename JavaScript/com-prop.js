//Dynamic Form 
const fieldName="email";
const value="sonam@gamil.com";
const fieldName1="password";
const value1="123456";

//dynamic Object
const formData={
    [fieldName]:value,
    [fieldName1]:value1,
}
console.log(formData);

//we will use this in React
// to use varibale inside object while creating property [] required