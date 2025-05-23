let arr= [1,2,3,4,"hello",false]
console.log(arr[0])
console.log(arr[arr.length-1])
//functions
function sum(a,b){//a ,b parameters 
    console.log("hello")
    console.log(a+b)}
sum(1,10)//call it as many times you want to print (arguments)
//arrow functions
let show=(a)=>{

    if(a % 2==0){
    console.log(a+" even");
}
else{
    console.log(a+" odd");
}
}
show(20)
let arr1=[1,2,3,4,5,6,7]
arr.push(100)
for(let i=arr1.length-1;i>=0;i--){
    console.log(arr1[i])
}
let newA =[]
for(let i=0;i<arr1.length;i++){
    if(arr1[i]>3){
        newA.push(arr1[i])
    }
}
let max = 0;
for(let i=0;i<arr1.length;i++){
    if(arr1[i]>max)
        max=arr1[i]
}
console.log(max)
// for (let i in arr){}
// for(let i of arr){}
let count =0
function shows(data) {
    for(let i of data){
        count =count +i
    }
    console.log(count);
    
}
shows(arr1)
//object
let sec =[ {id:123,name:"rahul"},{id:345,name:"rohit"}]
 for(let i=0;i<sec.length;i++){
    console.log(sec[i].name)
 }
 //functions that are declared inside object or class is known as methods
let new_obj = {
    id:123,
    name:"rahul",
    lastName:"jain",
    fullName:function() {
        console.log(new_obj.name+new_obj.lastName);
        
    }
}
new_obj.fullName()
//array features
//arr.push(value) = adds the value at last
//arr.pop()=removes the value from last
//arr.unshift(value)=adds value in front
//arr.shift()=removes value from front