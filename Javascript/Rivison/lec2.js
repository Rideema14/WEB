//type casting
console.log(5+5);//10
console.log(5+"5");//55
console.log(5-"5");//0
console.log(true && false &&true);//false
console.log(true||false||true);//true
console.log(5&4);//bitwise 4=100
//5=101 , 4=100
if(" ")// hello ,""=> hiii, 0=>hii
{
    console.log("hello"); 
}
else{
    console.log("hiiii");
   
}
// let deta =prompt ("enter value")
// console.log(+data)
// let data = prompt("enter value")
// if(data%2==0){
//     console.log("even");
    
// }
// else{
//     console.log("odd");
    
// }

let score=69
let attendance=74
if(score>=80 && attendance>=80){
    console.log("grade_A");
    
}
else if(score>=70||score<80 && attendance>=75){
    console.log("grade_B");
    
}
else if(score>60||score<70 && attendance>=70){
    console.log("grade_C");
    
}
else if(score>50||score<60 && attendance>=65){
    console.log("grade_D");
    
}
else if(score>30||score<50 && attendance>=60){
    console.log("grade_E");
    
}
else {
    console.log("FAIL");
    
}
// let isbool =false;
// isbool?console.log("hello"):console.log(hii);
//object array - non primitive data type
const student={
    name1:"sdd",
    name2:"frd",
    name3:"ddd",
    age:35
}
student.age=20;
console.log(student.age)
let a={name:"ritik"}
let b=a;
console.log(a==b)