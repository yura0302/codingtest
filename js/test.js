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
// function solution (n){
//     for (let i=2; i<n; i++){
//         if (n%i===1){
//             return i;
//         }
//     }
// }

//하샤드 수
// function solution(x) {
//     let sum =0; // 0
//     let arr= String(x).split(""); //string 으로 쪼개기 [1,0]
//     for (let i=0; i<arr.length; i++){
//         sum+=Number(arr[i]);
//     }
//     return x%sum===0 ? true : false
// }

//2023-02-21 (1) 가우스
// function solution (a,b) {
//     return (a+b)*(Math.abs(b-a)+1)/2
// }

// 2023-02-21 (2)
// function solution(num) {
//     let answer = 0;
//     while (num!=1 && answer!=500){
//         num%2==0? num=num/2 : num=num*3+1
//         answer++;
//     }
//     return num==1? answer : -1;
// }
// function solution(seoul) {
//     for (let i =0; i<seoul.length; i++){
//         if(seoul[i]==="Kim") return `김서방은 ${i}에 있다`
//     }
// }

// 2023-02-22 (1) 나누어 떨어지는 숫자 배열
// function solution(arr, divisor) {
//     let answer=[]
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%divisor==0){
//             answer.push(arr[i])
//         }
//     }
//     return answer.length==0? [-1] : answer.sort((a,b)=>a-b)
// }
// 폰번호 가리기
// function solution(num) {
//     let result= "*".repeat(num.length -4) + num.slice(-4);
//     return result;
// }
// function solution(num) {
//     let result= "*".repeat(num.length -4) + num.slice(-4);
//     return result;
// }

//음양 더하기
// function solution (absolutes,signs){
//     return absolutes.reduce((acc,cur,i)=>acc+(cur*(signs[i]==true? 1:-1)),0)
// }

//2023- 02 -24 (1) 최댓값 최솟값
// function solution(s) {
//     let arr = s.split(" ")
//     return Math.min(...arr) + " " + Math.max(...arr)
// }

// 2023 -02 -24(2)
// function solution(s) {
//     return s.split("").sort().reverse().join("")
// }

// 2023-02-24 (3)
// function solution(s) {
//     return  (s.length ===4 || s.length ===6) && s==parseInt(s)
//  }

// 2023-02-27 (1) 가운데 숫자 가져오기
// function solution(s) {
//     let answer = '';
//     if(s.length%2==1){
//         answer=s[(s.length-1)/2];
//     }else{
//         answer=s[s.length/2-1]+s[s.length/2];
//     }
//     return answer;
// }

// 2023-02-28 (1) 배열의 유사도
// const solution = (s1, s2) => s1.filter((a,i) => s2.includes(a)).length

// 2023-03-01 (1) 피자나눠먹기1
// function solution(n) {
//     return n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
// }

// 2023-03-03 (1) 내적
// function solution(a, b) {
//     let result =0;
//     for (let i=0; i<a.length; i++)
//         result+=a[i]*b[i];
//     return result;
// }

// 2023-03-04 (1)
// SELECT M.MEMBER_NAME, R.REVIEW_TEXT ,DATE_FORMAT(R.REVIEW_DATE,"%Y-%m-%d")AS REVIEW_DATE
// FROM MEMBER_PROFILE M
// JOIN REST_REVIEW R
// ON M.MEMBER_ID = R.MEMBER_ID AND R.MEMBER_ID=(SELECT MEMBER_ID
// FROM REST_REVIEW
//                                              GROUP BY MEMBER_ID
// ORDER BY COUNT(MEMBER_ID)DESC LIMIT 1)
// ORDER BY R.REVIEW_DATE ASC,R.REVIEW_TEXT ASC

//2023-03-07 (1)
// function solution(price, money, count) {
//     let need=0;
//     for (let i=0; i<=count; i++){
//         need+=price*i;
//     }
//     return need > money ? need-money : 0;
// }
// 2023-03-08 (1)
// function solution(left, right) {
//   var answer = 0;
//   for (let i = left; i <= right; i++) {
//     Math.sqrt(i) % 1 == 0 ? (answer -= i) : (answer += i);
//   }
//   return answer;
// }

// 2023-03-10(1)
// function solution(s){
//   let total=0;
//   for (let i =0; i<s.length; i++){
//       s[i]=="("? total+=1 : total-=1
//           if(total<0){
//               break;
//   }
// }
//       return total==0 ? true : false
//   }

2023-03-14(1)
function solution(sides) {
  sides.sort((a,b)=>a-b);
  return (sides[0] + sides[1] > sides[2] ? 1 : 2)
}