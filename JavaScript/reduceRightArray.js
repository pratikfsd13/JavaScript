const name= "Hello";
const array = name.split("")
const reverse = array.reduceRight((accumulator,currentValue) => accumulator + currentValue,"");

// acc = "", cur = "o" = "o"
// acc = "o", cur = "l" = "ol"
// acc = "ol", cur = "l" = "oll"
// acc = "oll", cur = "e" = "olle"
// acc = "olle", cur = "H" = "olleH"

console.log(reverse);   


const num =[10,5,2]
const res1 = num.reduce((acc,cur) => acc - cur);// 10-5-2 = 3
console.log(res1);

const res2 = num.reduceRight((acc,cur) => acc - cur,); // 2-5-10 = -13
console.log(res2);