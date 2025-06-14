//promises part-2
let step1 = function(){
    return  new Promise((res, rej)=>{
        setTimeout(()=>{res("selec a photo")},5000)
        })
}
let step2= function(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{res("filterrr")},4000)
        })
}
let step3= function(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{res("caption")},2000)
        })
}
let step4= function(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{res("upload")},3000)
        })
}
// step1().then((data)=>{
//     console.log(data)
//     return step2()
// }).then((filter)=>{
//     console.log(filter)
//     return step3()
// }).then((caption)=>{
//     console.log(caption)
//     return step4()
// })
async function call(){
let datas = await step1()
let filter=await step2()
let data = await step3()
let filterrr=await  step4()
console.log(datas)
console.log(datas)
console.log(datas)

}
call()