//filter
let arr =[1,2,3,4,5]
Array.prototype.myfilter=function(cb){
    let res=[]
    for(var i=0;i<this.length;i++){
            if(cb (this[i]))
                res.push(this[i])
    }
    return res
}
let data2=[1,2,3]
arr1.myfilter((a)=>{
    return a%2==1
})
console.log(data2)

Array.prototype.myreduce=function(cbt,intial) {
    let acc=intial
    for(var i=0;i<this.length;i++){
                acc=cb(this[i],acc)
    }
    return acc
}