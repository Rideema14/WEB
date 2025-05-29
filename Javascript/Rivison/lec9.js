var a=5
function sum(){
return a}
b=sum()
console.log(b)
//hoisting(wnen used first before declaration)
console.log(x);
var x=9//undefine
console.log(y)
let y=5//=>tdz(temporal dead zone) error wont allow to access =>let y log(y) y=5
sum()
let sum=()=>{//cant access beause equal to 
    console.log("hii")
}