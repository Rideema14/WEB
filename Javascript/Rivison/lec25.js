// fetch('https://jsonplaceholder.typicode.com/todos/')
//       .then(res => res.json())
//       .then(data =>data.map((res)=>{
//         console.log(res);
//         showData(res)  }) )
      
    
//       let div=document.querySelector('div')
//       function showData(res){
//     let li=document.createElement('li')
//     let h3=document.createElement('h3')
//     li.innerText=res.title;
//     h3.innerText=res.Id;
//     div.append(h3,li);
//       }
let city=document.querySelector('input')
let btn=document.querySelector('button')
btn.addEventListener('click',()=>{
   let data= city.value
   let key="9f6290d6cda9a36a63755fadee71f83d"
let ApiData=`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${key}`
fetch(ApiData).then((res)=>
   res.json() 
).then((data)=>{
    showData(data)
    
})
   
})
   let div=document.querySelector('div')
function showData(res){

    let h4=document.createElement('h4')
    h4.innerText=res.main.temp;
    div.append(h4);
      }