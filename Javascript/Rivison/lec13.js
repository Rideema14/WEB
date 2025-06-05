function outer(){
    let count=0;
    return{
        getCount:function(){
            return count++
        }
    }
}
let data1=outer()
let data2=outer()

console.log(data1.getCount()); //0
console.log(data2.getCount()); //1
console.log(data1.getCount());// 2
console.log(data2.getCount());// 3

//this 
let a =5;
var b=7;
console.log(window)
console.log(this==window)
let obj ={
    name:"rideema",
    salary:13000,
    b:7,
    getbalance:()=>{
        // console.log(this)
        console.log(this.a)
        console.log(this.b)
    }
}
obj.getbalance()
//protopype 
let obj1={
    id:1,
    name:"ritik"
}
console.log(obj.name);
console.log(obj.__proto__)



//obj=>object.prototype=>null
//arr=>array.prototype=>object.prototype=>null
let str="hello"
//str=>String.prototype=>Object.prototype=>Null
Array.prototype.myMap=function(cb){
    let res=[]
    for(var i=0;i<this.length;i++){

    }
}
let arr1=[1,2,3]
arr1.mymap((a,b,c)=>{
    return a
})
