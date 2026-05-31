let per=prompt("Enter your percentage ");
if(per>=90 && per<=100){
    console.log("Congratulations! You got Excellent Class");
}else if(per>=80 && per<90){
    console.log("Congratulations! You got Distinction Class");
}           else if(per>=70 && per<80){
    console.log("Congratulations! You got First Class");
}else if(per>=60 && per<70){
    console.log("Congratulations! You got Second Class");
}   else if(per>=50 && per<60){
    console.log("Congratulations! You got Fail Class");
}else if (per>=40 && per<50){
    console.log("You are passed");
}else if(per>=0 && per<40){
    console.log("Sorry, you are fail");
}else
    console.log("Enter valid percentage");