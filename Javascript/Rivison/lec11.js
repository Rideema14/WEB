//higher order function-FUNCTION IN ARGUMENT OF FUNCTION CALL
function sum(fn){
    fn()
    //console.log(fn)
}
sum(function inner(){
    console.log("inner")
})
//  function outer(){
//     function fn(){

//     }
//     return fn
//  }
//  outer()
 let arr=[4,3,5,"hello","hii","jii",true ,false]
function Number(){
    let rest =[]
    let bro=[]
    let bollean=[]
    for( let i of arr){
        if(typeof i=="number")
            rest.push(i)
        else if(typeof i=="string")
            bro.push(i)
        else if(typeof i=="boolean")
            bollean.push(i)
    }
   console.log(rest);
   console.log(bro);
   console.log(bollean);
}
Number()
function getString(i){
    return typeof i==="string"
}
function getBool(i){
    return typeof i==="boolean"
}
function getNum(i){
    return typeof i==="number"
}
function get(arr,fn){
    // console.log(fn)
    let res=[]
    for(let i of arr){
        if(fn(i)){
            res.push(i)
        }
    }
    console.log(res)
}
get(arr,getString)
get(arr,getBool)
get(arr,getNum)