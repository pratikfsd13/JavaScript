function f1() {
    console.log("f1 Triggered");
}
function f2() {
    //console.log("f2 Triggered");
    setTimeout(() => {console.log("f2 Triggered after 1 second")}, 1000);

}   function f3() {
    console.log("f3 Triggered");

}function f4() {
    console.log("f4 Triggered");
}

f1();
f2();
f3();
f4();
