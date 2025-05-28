//2d array
let arr = [[1, 2, 3, 4], [2, 5, 6, 7], [7]]
let sum = 0;
let max = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        // console.log(arr[i][j]);
        sum = sum + arr[i][j]
        if (max < arr[i][j]) {
            max = arr[i][j]
        }
    }
}
console.log(sum)
console.log(max);
//max using map function
let data = arr.map((a) => a.map((res) => {
    if (max < res)
        max = res;
    return max
}))
console.log(max)
//sum using reduce function
let data1 = arr.reduce((sum,b)=>{
    return sum+b.reduce((a,b)=>{return a+b},0)
},0)
console.log(data1)
//sum row wise
let data2 = arr.map((a)=>{
    return a.reduce((a,b)=>{return a+b},0)
})
console.log("row wsie sum = "+data2)
let data3 = arr[0].reduce((a,b)=>{
    return arr.reduce((x,y)=>{return a+y[b]})
},0)
console.log("column wise sum = "+ data3)
let single =arr.flat()
let data4=single.reduce((x,y)=>{
    return x>y?x:y
})
console.log("max element = "+data4)
let data5=single.reduce((a,b,c)=>{
    return a<b?a:b
})
console.log("min element = "+data5);