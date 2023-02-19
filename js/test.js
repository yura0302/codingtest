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
// function solution(n) {
//     let arr=[];
//     let answer=0;
//     for (let i=1; i<=n; i++){
//         if(n%i===0){
//             answer+=i
//         }
//     }
//     return answer
// }

// 2023-02-18 사과장수
// function solution(k, m, score) {
//     let answer=0;
//     if (m>score.length){
//         return 0;
//     }
//     //최댓값으로 숫자 정렬
//   score.sort((a,b)=>b-a);
//     let box= Math.floor(score.length/m);
//     for (let i=1; i<=box; i++){
//          answer += score[m*i-1] * m;
//     }
//     return answer;
// }

// function solution(s){
//     let numberP=0;
//     let numberY=0;
//     let answer=s.toLowerCase();
//     for (let i=0; i<s.length; i++){
//         answer[i]=="p" ? numberP++ :null
//         answer[i]=="y" ? numberY++ : null
//     }
//     return numberP==numberY ? true : false
// }

//x만큼 간격이 있는 n개의 숫자
// function solution(x, n) {
//     var answer = [];
//     for (i=1; i<=n; i++){
//      answer.push(i*x);
//     }
//     return answer;
// }

//정수 제곱근 판별 
// function solution(n) {
//     return Math.sqrt(n)%1 !==0 ? -1 : Math.pow(Math.sqrt(n)+1,2);
// }

//정수 내림차순으로 배치하기
// function solution(n) {
//     return Number(n.toString().split("").sort((a,b)=>b-a).join(""))
// }

// 2023-02-20 나머지가 1이 되는 수 찾기
function solution (n){
    for (let i=2; i<n; i++){
        if (n%i===1){
            return i;
        }
    }
}