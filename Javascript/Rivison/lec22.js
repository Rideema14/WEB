let formSignup =document.querySelector("#signUp")
formSignup.addEventListener('submit',(e)=>{
e.preventDefault()

    let userdata={
        name:formSignup[0].value,
        number:formSignup[1].value,
        passWord:formSignup[2].value,}
 
        localStorage.setItem("userdata",JSON.Stringify(userdata))

    })
    let formLogin= document.querySelector("#login")
    formLogin.addEventListener('submit',(e)=>{
        number:formLogin[0].value
        passWord:formLogin[1].value
    
     let dataa = JSON.parse(localStorage.getItem("userData"))
    if(number==dataa.number && password===dataa.password){
        prompt('Login Successful')
    }
   prompt("Invalid")

    })

       