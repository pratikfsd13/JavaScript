let num;
for (num = 0; num <= 10; num++) {
    if (num ==7) {
        break; // break statement will exit the loop when num is 7
    }if (num == 5) {
        continue; // continue statement will skip the rest of the loop body when num is 5   
    }  
    console.log(num);
}
console.log("Loop ended at  = " + num);