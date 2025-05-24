let str ="Java Script !!"
console.log(str)
//1. length 
console.log("string length",str.length)
//2. trim 
console.log("trim",str.trim())//remove spaces
//3. toUppercase
console.log("case",str.toUpperCase())
//4.toLowercase
console.log("lower",str.toLowerCase())
//5. includes
console.log("include",str.includes("Script"))
//6.startwith
console.log("start",str.startsWith("java"))
//7. endswith
console.log("ends",str.endsWith("!!"))
//8. indexof
console.log("index",str.indexOf("java"))
//9.lastindexof
console.log("last index of a",str.lastIndexOf("a"))
//10. charAt
console.log("chareter of",str.charAt(6))
//11. substring 
console.log("substring from 2-10",str.substring(2,10))
//12. slice 
console.log("slice",str.slice(2,-1))
//13. split
console.log("split by space", str.trim().split(" "))
//14.replace 
console.log("replace",str.replace("Script","dsa"));
//15.repeat
console.log("repeat",str.repeat(3))
let str1 ="aaabbbbcccc"
let count =1
let newstr =""
for( let i=0;i<str1.length;i++)
if(str1[i]==str1[i+1]){
    count++
}
else{
    newstr= newstr +str1[i]+count
    count=1
}

console.log(newstr)
//remove duplicates
let newstring =""
for( let i=0;i<str1.length;i++)
if(!newstring.includes(str1[i]))
newstring=newstring+ str1[i]

console.log(newstring)
