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
let data = arr.map((a) => a.map((res) => {
    if (max < res)
        max = res;
    return max
}))
console.log(max)
let data1 = arr.reduce((sum,b)=>{
    return sum+b.reduce((a,b)=>{return a+b},0)
},0)
  
console.log(data1)
let data2 = arr.reduce((sum,b)=>{
    return sum+b.reduce((a,b)=>{return a+b},0)
},0)