function fun1(){
    console.log("hello");
    
}
let btn =document.querySelector('#one')
btn.oneclick=function(){
    console.log('byeee');
    
}
let btn1=document.querySelector('#two')
btn1.addEventListener("click",()=>{
    console.log("bayyyy");
    
})
//bgcolor

let btn2=document.querySelector("#two")
let body_1=document.querySelector("body")
let h2=document.querySelector("h2")
btn1.addEventListener("click",()=>{
      body.style.backgroundColor="yellow"
    //   alert("kya kaam hai")
      h2.innerText="holla"
})
let btn_b=document.querySelector("#three")
let inp=document.querySelector("input")
let h1=document.querySelector("h1")
inp.addEventListener('input',(e)=>{
    console.log(e.target.value);
    btn_b.addEventListener("click",()=>{
        h1.innerText=e.target.value
    })  
})
var a=false
let btn_c=document.querySelector("#three")
let body=document.querySelector("body")
let h2a=document.querySelector("h2")
btn1.addEventListener("click",()=>{

    
if(a){
      body.style.backgroundColor="pink"
      a=false
   
}
else{
     body.style.backgroundColor="plum"
    a=true
      }

    
})