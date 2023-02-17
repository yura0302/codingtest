//** 이것이 코테다 : 거스름돈 */
// let coin=[500,100,50,10];
// let money=1260;
// let result=0;

// coin.forEach((coin)=>{
//     result=result+Math.floor(money/coin);
//     money=money%coin;
// })
// console.log(result);


// 2023-02-17 프로그래머스 나머지가 1이되는 수 찾기 
function solution(n) {
    for (let i=2; i<n; i++){
        if(n%i===1){
            return i;
        }
    }    
}

