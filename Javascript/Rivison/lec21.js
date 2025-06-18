let inp =document.querySelector("input")
let h1=document.querySelector('h1')
 let h3=      document.querySelector('h3')
     let h4=    document.querySelector('h4')
     let h5=     document.querySelector('h5')
inp.addEventListener('input',(e)=>{
    console.log(e.target.value)
    h1.innerText=e.target.value
})
let formEl=document.querySelector('form')
formEl.addEventListener('submit',(e)=>{
    console.log(formEl[0].target.value+" "+formEl[1].target.value+" ")
e.preventDefault()

    let data={
        name:formEl[0].value,
        number:formEl[1].value,
        passWord:formEl[2].value,}
        
        localStorage.setItem("key",)
})

