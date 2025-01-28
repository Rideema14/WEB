//call back hell
function callback(a){
console.log("hehe");

}
callback(function outer(){})

 function Step1(fn) {
    console.log("select");
    fn()
 }
 function Step2(fn){
    console.log("filter");
    fn()
     }
     function Step3(fn){
        console.log("caption");
        fn()
         }
         function Step4(){
            console.log("post");
           
             }
     Step1(function() {
        Step2(function() {
            Step3(function(){
                Step4()
            })
        })
     })
     //promises
     let p = new Promise((res,rej)=>{
    //     let a=false 
    //     if(a){
    //         res()
    //     }
    //     else{
    //         rej()
    //     }
    //  })
    //  console.log(promise);
    rej ()
     })
     p.then(()=>{console.log("hello");
     })
     p.catch(()=>{console.log("hii");
     })
     //promies
     function step1(){
      return new Promise((res,rej)=>{
          setTimeout(()=>{
              res('selectttt')
              console.log('selecttttttt');
              

          },5000)

      })
  }
  function step2(){
      return new Promise((res,rej)=>{
          setTimeout(()=>{
              res('filtredddddd')
              console.log('filtredddddd');
              

          },2000)

      })
  }

   async function call(){
      await step1()
  
      await  step2()

  }
  call()



  // step1().then((img)=>{
  //     console.log(img);
  //     return step2().then((fImg)=>{
  //         console.log(fImg);
          

  //     })
  // })