// const arr =["https://images.unsplash.com/photo-1749909902516-786d8d846193?q=80&w=866&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1749253811990-7dffe7af8aca?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://plus.unsplash.com/premium_photo-1749984933510-18304c42489c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ]
// let a=document.querySelector('img')
// let num=0;
// console.log(a.getAttribute('src'));
// setInterval(()=>{
// a.setAttribute("src",arr[num])
// num=(num+1)%arr.length
// },2000)


// function fun1(){
//     console.log("hello")
// }
let btn =document.querySelector("#one")
let body =document.querySelector("body")

btn.addEventListener("click",function(){
    if(isbool=true)
    body.style.backgroundColor="red"
    else  body.style.backgroundColor="pink"
    isbool=!isbool})
// btn.onclick=function fun1(){
//     console.log("hello")
// }
