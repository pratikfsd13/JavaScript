7777const countDown = (num) => {
    if (num===0) 
        return
    console.log(num);
  /*  setTimeout(() => {
        countDown(num-1)
    }, 1000);*/
    countDown(num-1);
}

countDown(5);

function factorial(num) {
    if (num === 1) 
        return 1;
    return num * factorial(num-1);
}

console.log("Factorials of 5 ", factorial(5));