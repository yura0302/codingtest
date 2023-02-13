let coin=[500,100,50,10];
let money=1260;
let result=0;

coin.forEach((coin)=>{
    result=result+Math.floor(money/coin);
    money=money%coin;
})
console.log(result);