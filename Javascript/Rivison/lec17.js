// setTimeout(()=>{
//     console.log("a")
// },1000)
// setTimeout(()=>{
//     console.log("b")
// },2000)
// setTimeout(()=>{
//     console.log("c")
// },3000)
// setTimeout(()=>{
//     console.log("d")
// },4000)
//call back
function step1(fn){
    setTimeout(()=>{
        console.log('Select a photo');
        fn()
    },5000)
}

function step2(fn){
    setTimeout(()=>{
        console.log('Apply Filter');
        fn()
    },4000)
}

function step3(fn){
    setTimeout(()=>{
        console.log('Captions');
        fn()
    },3000)
}

function step4(){
    setTimeout(()=>{
        console.log('Post');
        
    },2000)
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            step4()
        })
    })
})
let promise=new Promise((res, rej)=>{
    res()
})
let isbool=true
if(isbool){
    res()
}
else{
    rej()
}
promise.then((res)=>{
    console.log(res)
})
prmise.catch((rej)=>{
    console.log(res)
})