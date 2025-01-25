//api
let apiLink="http://dummyjson.com/recipes"
let data= fetch(apiLink)
console.log(data,"kykydd");
data.then((res)=>{
    // console.log(res,"ghghdf");
    return res.json()
}).then((d)=>{
    console.log(d.recipes,"dgrgr");
    

let filterData= d.recipes.filter((apiData)=>{
    return apiData.cuisine=="Indian"
})
console.log(filterData,"kdiufyfiu");
})
//DOM(DOUMENT OBJECT MODEL)
let data1=document.getElementsByClassName('two')
// data.style.color="red"
for(let i of data1){
    i.style.color="red"
}
let data2=document.getElementsByC('one')
data.style.color="red"