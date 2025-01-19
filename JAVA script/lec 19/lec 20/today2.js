let arr=[1,2,3,4,5,5,6]
// loop
// 0
for(let i in arr){
    console.log(i);
    
}
// for(let i of arr){
//     console.log(i);
    
// }

 let data=  arr.forEach((a,b,c)=>{
    console.log(a*2);
    return a
    
}  )
console.log(data,"isko dekhoo");

 let newA=  arr.map((a,b,c)=>{
    // console.log(c);
    return a*2
    
})
console.log(newA);
function sum(a){
}
sum(5)

let arr5=[1,2,3,4,54,56,68,5,5]

 let data1=  arr.find((a,b,c)=>{
   return a==5;
    


})
console.log(data);

let data2=  arr.filter((a,b,c)=>{
   return a==5
    


})
// console.log(data1);



//  let filterValue=  arr.filter((a,b,c)=>{
//     return a>10
    

//  })
//  console.log(filterValue);
