//Dynamic Form 
const fieldName="email";
const value="sonam@gamil.com";
const fieldName1="password";
const value1="123456";
const fieldName2="phone";
const phone="9876541230";

//dynamic Object
const formData={
    [fieldName]:value,
    [fieldName1]:value1,
    [fieldName2]:phone
}

console.log(formData);


//we will use this in React
// to use varibale inside object while creating property [] required 