var a=1
function outer(){
    console.log(a)
    var a=2
    function inner(){
        console.log(a)
    }
    inner()
}
outer()

function foo(){
    function bar(){
        return 3
    }
    return bar()
    function bar(){
        return 8
    }
}
console.log(foo())
//gobal and scope varibales
if(false){
    var a=5
}

console.log(a)