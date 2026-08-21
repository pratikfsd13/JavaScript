const set = new Set([1,2,3,1,2,3,4,5,6,5,4,7,8,9,10,9,8,7]);
console.log(set);

const set1 = new Set();
console.log(set1);
set1.add("A");
set1.add("B");
set1.add("C");
set1.add("D");
console.log("after adding elements:", set1);
set1.delete("A");
console.log("after deleting element:", set1);
set1.clear();
console.log("after clearing set:", set1);   

// Iterate over the set
set1.forEach(val=>console.log(val));
set1.clear();
console.log("after clearing set:", set1);