const array = [35,56,89,46,78,65,32];

//check all students pass or not

const res=array.every(value=>value>=35);
console.log(res); //this checks for all to get true

const res1= array.some(value=>value>=85);
console.log(res1); // this checks for atleast 1 to get true

// in every function gives true if all the elements satisfy the condition and false if any one element does not satisfy the condition. In some function gives true if at least one element satisfies the condition and false if none of the elements satisfy the condition.
// in some function if the first element satisfies the condition it will return true without checking the rest of the elements. In every function if the first element does not satisfy the condition it will return false without checking the rest of the elements.