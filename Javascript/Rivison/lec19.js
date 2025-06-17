// //dom html +js
// console.log(document)
// let h1=document.getElementById("one")
// h1.style.backgroundColor="red"
// h1.innerText="hiii"

// let h2=document.getElementsByClassName("o")
// // let h3=document.getQuerySlector(.one)
// h2[0].style.backgroundColor="red"
// h2[0].innerText="hiii"
// console.log(h1)
// console.log(h2);
// let a=document.querySelector('a')
// console.log(a.getAttribute('href'));
// a.setAttribute("href","http://flipkart.com")
const h1=document.createElement("h1")
const div=document.querySelector("div")
div.append(h1)
console.log(div)
