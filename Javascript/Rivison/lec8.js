//explation of execution context in exclidraw
var a=5
function sum(){
    let b=10
    let c=20
    console.log(a+b+c)
}
sum()
console.log(a)
//non repeating
let arr =[1,2,2,3,3,4,5,5]
let newarr =[]
for( let i of arr)
{
if(newarr.includes(i)){
console.log(i);
break; }
newarr.push(i)}
let c= 5
function sum(){
    let data =c
    function inner(){
        console.log(data)
    }
    // inner()
    return inner()
}
let data=sum()
data()