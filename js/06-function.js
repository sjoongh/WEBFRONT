// 함수 선언 식
function sum(a, b) { // 매개변수 a, b를 입력받음
    return a + b;
    //  return 함수 종료, 출력 데이터를 반환할 수 있음
}

// 함수 호출
console.log("SUM", sum(10, 20));

// 함수 표현 식 : 이름이 없는 함수 -> 익명 함수
const asum = function(a, b) {
    return a + b;
}
console.log(typeof asum, asum(10, 2));

// 익명 함수의 활용 
// 1. 즉시 실행 함수

let initText;
(function (number) {
    // 초기화에만 사용될 임시변수
    let textList = ["홀수","짝수"]
    if (number % 2 == 0) {
        initText = textList[1];
    } else {
        initText = textList[0];
    }
    console.log(`인수 ${number}를 이용하여 즉시 실행`);
})(5); // 즉시 실행
console.log(initText);
// console.log(textList); -> Error : 스코프가 종료

// 함수의 매개 변수
// JS는 선언부의 매개 변수 갯수와 상관 없이
// 모든 매개변수가 arguments라는 이름의 배열로 전달
console.log("====== argument")
function getNumberTotal() { // 매개변수를 선언하지 않음
    // console.log(arguments,arguments.length); 
    // 모든 매개변수가 arguments로 전달된다
    let result = 0
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == "number") { // 정수로 합산
            result += arguments[i]; 
        }
        // result += arguments[i]; 문자열
    }
    return result;
}

console.log(getNumberTotal()); // 매개 변수 없음
console.log(getNumberTotal(1, 2, 3, 4, 5)); // 매개 변수 5개
console.log(getNumberTotal(1, 2, "3", 4, 5));

console.log("======= Callback");
// 함수는 문법적 기능이 아니라, 독립된 객체
// 콜백함수 : 다른 코드의 인수로 넘겨주는 실행 가능한 코드
function usingCallback(val1, val2, func) {
    // 기능을 미정 상태로 두고
    // 함수 호출시 외부로부터 실행 로직을 전달
    // 거꾸로 호출 : -> Callback
    if (typeof func == "function") {
        // 매개변수 func는 함수다
        func(val1, val2);
    }
}

usingCallback(3, 5, function(v1, v2) {
    console.log(v1 + v2); // 실행 로직을 주입
});

usingCallback(7, 5, function(v1, v2) {
    console.log(v1 * v2);
})

// 화살표 함수 => 익명함수(이름이없는함수, 즉시실행)로만 사용 가능
const f1 = function() { return "Hello" }; // 일반함수
const f1Arrow = () => "Hello"; // 매개변수가 없는 화살표 함수

// 매개변수 한개
const f2 = function(name) { return "Hello" + name }; // 일반
const f2Arrow = name => "Hello" + name; // 매개 변수 한개

console.log(f2("홍길동"));
console.log(f2Arrow("홍길동"));

// 매개 변수 여러개
const f3 = function(a, b) { return a + b }; // 일반
const f3Arrow = (a, b) => a + b; // 매개변수 두개이상

console.log(f3(7, 5));
console.log(f3Arrow(7, 5));

// 콜백함수를 전달할 때 활용
usingCallback(10, 20, (v1, v2) => { console.log(v1 + v2) });