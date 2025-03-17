let var1=1
let var2=9
while (var1<=9 && var2>=1) {
    console.log(var1,"*",var2,"=",var1*var2);
    var1++;
    var2--;
}


for (let i = 1; i <= 5; i++) {
    console.log(i, "---");
    const number = i
    let isPrime = true
    for(let j=2; j<number; j++){
      if(number % j === 0) {
        isPrime = false
      }
    }
    if(isPrime) {
      console.log("Prime number", number);
    }
  }
    let i=1;
  while(i<=100){
    console.log(i);
    
   if(i%3===0){

    // console.log("number divided by 3 =",i*3);
    i=i*3
    }
   
   else if(i%5===0){
    // console.log("number divided by =5", i*5);
    i=i*5
   }
   else
   i++;
   }

  
    
