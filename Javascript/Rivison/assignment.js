//map questions
//ques 1
 let arr=[0,20,30]
 let temperature=arr.map((a)=>{
     return a=(a*9/5)+32
 })
 console.log("Fahrenheit array is : "+temperature);  
    
//ques 2
let arr1 =["apple","banana","cherry"]
let first =arr1.map((a,b,c)=>{
    return a[0]
})
console.log(first);
//ques 3
let arr2 =["hello","world","map"]
let strings =arr2.map((a,b,c)=>{
     return a.length
})
console.log(strings);
//filter ques
//ques 4
//  let arr3= [2, 3, 4, 5, 6, 7]
//  let prime = arr3.filter((a,b,c)=>{
//     for (let i = 2; i*i<=a; i++) {
//         if (a % i === 0) {
//             console.log(a + " not prime");
           
//         }
//     }
//     console.log(a + " prime");
 
// });
// console.log(prime);
//ques 5
let arr4=["ankit","Anish","mohan","sohan"]
let names =arr4.filter((a,b,c)=>{
    return a[0]==="a"||a[0]==="A"
})
console.log(names);

 //ques 6
 let arr5 =["helloo","world","map"]
let evenLength =arr5.map((a,b,c)=>{
     return a.length
})
let evenLengthWords = arr5.filter((a) =>
     a.length % 2 === 0);
console.log(evenLengthWords);
//ques 7
let arr6 =["a", "b", "a", "c", "b"]
let frequency =arr6.reduce((a,b,c,d)=>{
  
        
})
console.log(frequency)
//ques 9
let arr7 =[10,20,30]
let average = arr7.reduce((a,b,c,d)=>{
    return a+b
})
console.log(average/arr7.length);
//ques 8
let arr8= ["Hello", "world", "from", "reduce"]
let concatinate =arr8.reduce((a,b,c,d)=>{
    return a+" "+b
})
console.log(concatinate);
//ques 10
let arr9 =["apple", "banana"]
let count =0
let vowel =arr9.map((x,y,z)=>{
    for ( let i of  x){
     if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u")
        count++
     
    }
       return count
})
console.log(count)