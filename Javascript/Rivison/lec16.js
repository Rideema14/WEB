//acynronous
setTimeout(()=>{
    console.log("byee")
},10)
console.log("hii")
//var -can be accsed outside the scope so value will be 6
// for( let i=1;i<=5;i++){
//     setTimeout(()=>{
//         console.log(i);
        
//     },i*1000)
// }
function print(k){
 setTimeout(()=>{
        console.log(k);
    },k*1000)
}
for( var k=1;k<=6;k++){
 print(k)
}