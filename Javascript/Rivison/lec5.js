let arr =[1,2,3,4,5,4,3]
let one =arr.some((a)=>{
    return a==5
})
let two =arr.every((a)=>{
    return a<=4
})
let three =arr.find((a)=>{
    return a==3
})
console.log(one);
console.log(two);
console.log(three);
console.log(arr.includes(3));
console.log(arr.indexOf(5));
 let maximum1 =arr.reduce((a,b,c,d)=>{
    return a>b?a:b
})
let news=arr.filter((a,b,c)=>{
    return a!==maximum1
})
let holla =news.reduce((a,b,c,d)=>{
    return a>b?a:b
})
console.log(holla)
arr1=[1,2,3]
merge =[...arr1,...arr]
merge1=[]
for( let i of arr){
    merge.push(i)
}
let lucky=Math.floor(Math.random()*10)
let my_lucky =5
lucky==my_lucky?console.log("got my lucky number"):console.log("not got")

let arr2=[-3,0,3,5,5,2,0,1]
 let maxi =arr2.reduce((a,b,c,d)=>{
    return a>b?a:b
})
let ne=arr2.filter((a,b,c)=>{
    return a!==maxi
})
let hollas=ne.reduce((a,b,c,d)=>{
    return a>b?a:b
})
let ro=arr2.filter((a)=>{
    return a!==hollas
})
let bro =ro.reduce((a,b,c,d)=>{
    return a>b?a:b
})
console.log(bro)
console.log(hollas)
console.log(maxi)
console.log(bro+hollas+maxi)
  let count =0
let odd = arr2.filter((a)=>{
  
    if(a%2!==0)
        count++
    return count
})
console.log(count)