let arr=[1,2,3,4,5,6,7,8,9]
//foreach modify inside the array 
let data = arr.forEach((a,b,c)=>{
// console.log(a);
return c
});
//map makes new array for modification
let data1=arr.map((a,b,c)=>{// a=value , b=index,c=arr
    // console.log(a);
    return c
});

let data2 =arr.filter((a,b,c)=>{
    return a>3
});
console.log(data1)
console.log(data2)
   let sum=   arr.reduce((a,b,c,d)=>{
        // return a+b
        return a>b?a:b

}//,10
   )
console.log(sum);
let arr1=[2,3,2,3,42,4,32,5,2,7]
let first =arr1.filter((a,b,c)=>{
    return a>2
})
let sec =first.filter((a,b,c)=>{
    return a%2==0
})
let third =sec.reduce((a,b,c,d)=>{
return a+b

})
console.log(third)