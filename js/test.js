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
// function solution(n) {
//     for (let i=2; i<n; i++){
//         if(n%i===1){
//             return i;
//         }
//     }    
// }
// function solution(arr){
//     return arr.reduce((a,b)=>a+b)/arr.length
// }
// function solution(n){
//     return String(n).split("").reduce((acc,cur)=>acc+parseInt(cur),0)
// }

// 숫자를 문자열로 변환 
//split으로 자릿수 쪼개고 배열 만들기
// function solution(num) {
//     return  (num%2===0) ? "Even" : "Odd"
//     }
function solution(n) {
    let arr=[];
    let answer=0;
    for (let i=1; i<=n; i++){
        if(n%i===0){
            answer+=i
        }
    }
    return answer
}


