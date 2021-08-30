//  배열 생성: Array 객체로 생성
const v1 = new Array(10);   //  10개짜리 빈배열
const v2 = new Array();     //  빈배열
const v3 = new Array(2021, "String", true); //  어떤 객체든 담을 수 있다.

//  .length 속성: 요소의 갯수
console.log("v1:", v1, v1.length);
console.log("v2:", v2, v2.length);
console.log("v3:", v3, v3.length);

//  리터럴로 생성 (추천)
const v4 = [];  //  빈 배열
const v5 = [2021, "String", true];

//  배열 타입 확인시 typeof를 사용하면 안된다
console.log("v4:", v4, typeof v4);
console.log("v5:", v5, typeof v5);

//  배열 타입 확인: Array.isArray() 메서드 활용
console.log("v4:", Array.isArray(v4));  //  v4가 Array인가?
console.log("v5:", Array.isArray(v5));  //  v5가 Array인가?

//  기본 값으로 채우기: fill 메서드
const v6 = new Array(10).fill(1);   //  10개짜리 1로 채워진 배열
console.log("v6:", v6);
v6.fill("default"); //  v6를 default로 채움
console.log("v6:", v6);

//  C, Java의 배열보다 다양한 용도로 활용
const person = {
    name: "홍길동",
    age: 28
}
//  객체의 속성 -> 배열처럼 접근 가능
console.log(person.name, person['name']);
console.log(person.age, person['age']);

//  인덱스를 엄격히 체크하지 않음
const arr = []; //  빈 배열
console.log(arr, arr.length);   
//  인덱스 범위 벗어난 접근
arr[10] = 2021;
console.log(arr, arr.length);

console.log("===== 배열의 메서드");
const veges = ["배추", "무", "쪽파"];
const sources = ["소금", "고춧가루", "새우젓"];

console.log(veges, sources);

//  배열 합치기: concat
const items = veges.concat(sources);
console.log("CONCAT:", items);

//  배열 요소 합치기: join
console.log("JOIN:", items.join(","));  //  요소를 ,로 합치기

//  push: 배열 맨 뒤에 새 요소 추가
//  pop: 배열 맨 뒤 요소를 추출 후 제거
//  push + pop : Stack처럼 활용
console.log("===== push and pop")
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("STACK:", fruits);
fruits.push("수박");
console.log("STACK:", fruits);
console.log("POP:", fruits.pop());  //  맨 뒤 요소 추출
console.log("POP:", fruits.pop());  //  맨 뒤 요소 추출
console.log("POP:", fruits.pop());  //  맨 뒤 요소 추출
console.log("STACK:", fruits);

//  shift: 맨 앞에서 요소 추출 후 제거
//  push + shift : QUEUE 자료형처럼 활용
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.push("수박");
console.log("QUEUE:", fruits);
console.log("SHIFT:", fruits.shift());  //  첫 요소 추출 후 제거
console.log("SHIFT:", fruits.shift());
console.log("SHIFT:", fruits.shift());

console.log("===== splice");
//  splice: 요소 삭제와 삽입을 한번에 할 수 있다
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("원본:", fruits);
//  인수가 1개: 해당 인덱스부터 끝까지 추출 후 제거
console.log("SPLICE(2):", fruits.splice(2));
console.log("원본:", fruits);

fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("원본:", fruits);
//  인수가 2개: 1번째 인수 인덱스 부터, 2번째 인수 갯수만큼 
//              추출 후 제거
console.log("SPLICE(2, 1):", fruits.splice(2, 1));
console.log("원본:", fruits);

fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("원본:", fruits);
//  인수가 3개 이상: 1번째 인수 인덱스 부터,
//                  2번째 인수 갯수만큼 추출 후 제거
//                  3번쨰 이후 인수들을 삽입한다.
console.log("SPLICE 인수 3개 이상:", 
            fruits.splice(2, 1, "Kiwi", "Guava"));
console.log("원본:", fruits);

console.log("===== REVERSE");
//  reverse: 배열의 순서를 뒤집는다.
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("원본:", fruits);
fruits.reverse();   //  배열 순서 뒤집기
console.log("REVERSED:", fruits);
console.log("===== SLICE");
//  slice: 배열의 일부 추출
//      추출 내용 삭제하지 않음
let slices = fruits.slice(1, 2);
console.log("조각:", slices);
console.log("원본:", fruits);

console.log("SORT");
console.log("원본:", fruits);
fruits.sort();  //  기본적으로는 오름차순(ASC)
console.log("SORT(ASC):", fruits);
//  사용자의 규칙으로 정렬할 경우, 키함수를 재정의
fruits.sort(function(v1, v2) {
    //  반환 값이 0: 순번이 같다
    //  내림차순 정렬의 예
    if (v1 == v2) return 0;
    if (v1 < v2) return 1
    else return 1;
});
console.log("SORT(User Defined):", fruits);

//  split: 특정 구분자를 기준으로 문자열 분리 -> Arrays 반환
const str = 
    "JavaScript is something strange than other languages";
let chunks = str.split(" ");    //  공백으로 분리
console.log("SPLIT:", chunks);

//  loop 1:
for (let i = 0; i < chunks.length; i++) {
    console.log("WORD:", chunks[i]);
}
//  loop 2: for ... of
for (let word of chunks) {
    console.log("for of:", word);
}