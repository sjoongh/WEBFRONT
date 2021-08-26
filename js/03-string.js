//  JavaScript의 문자열
const s1 = "Modern JavaScript and Java";    //  Literal
const s2 = String("Modern JavaScript"); //  String 객체 이용
console.log(typeof s1, typeof s2);

//  Property: .length - 문자열의 길이
//      모든 문자열 내부 데이터는 인덱스로 접근 가능
console.log(s1, ", length=", s1.length);

//  문자열 추출 메서드
console.log(s1.charAt(7));  //  인덱스 7의 문자
console.log(s1[7]); //  배열처럼 사용할 수 있다. 다만, 불변 자료형 
//  부분 문자열 메서드
console.log(s1.substr(7));  //  7번 인덱스 ~ 끝까지
console.log(s1.substr(7, 10));  //  7번 인덱스 ~ 10글자
console.log(s1.substring(7));   //  7번 인덱스 ~ 끝까지
console.log(s1.substring(7, 17));   //  7번 인덱스 17인덱스 앞까지

console.log("---------- Search ");
console.log(s1, ", length=", s1.length);
//  중요: 문자열 검색 메서드
//  s1에서 Java를 검색

let position = s1.indexOf("Java");  //  처음부터 Java를 검색
console.log("1st Java:", position);
position += "JavaScript".length;    //  검색 시작 위치 변경
position = s1.indexOf("Java", position);    //   검색 범위 제한
console.log("2nd Java:", position);
position += "Java".length;  //  검색 시작 위치 변경
position = s1.indexOf("Java", position);    //  검색어 없음
console.log("No keyword:", position);   //  찾는 검색어 없음 -> -1

//  문자열 치환: replace
console.log(s1.replace("JavaScript", "JS"));   //   문자열 내의 JavaScript -> Java
//  String은 불변 자료형: 내부 데이터는 변경되지 않음
console.log("원본:", s1);

//  좌우 화이트 스페이스 제거: trim
console.log("             Hello            ".trim());   //  좌우의 화이트 스페이스를 제거

//  ----------- String 보충
//  ", ' : 어떤 것을 사용해도 무방
//  이스케이프 문자: 특수 문자를 포함할 경우
//      \n : 개행(줄바꿈)
//      \t : 탭
//      \' : 작은 따옴표
//      \" : 큰 따옴표
//      \` : 백틱 (ES6)
//      \$ : 달러기호 (ES6)

let message = "He said, \"Hello\"";
console.log(message);

let temp = 24;
//  현재 온도는 temp 도입니다. 
message = "현재 온도는 " + temp + "도 입니다.";
console.log(message);

//  ES6의 템플릿 문자열
//  ` ~ ` : 하나의 문자열
//  ${자바스크립트 표현식}
message = `현재 온도는 ${temp}도 입니다.`;
console.log("템플릿 문자열:", message);

message = "예전에는 여러 줄 문자열을 만드는 게\n쉽지 않았습니다.";
console.log(message);

//  템플릿 스트링
message = `
하지만 ES6에서는
아주 손쉽게
여러 줄 문자열을    만들 수 있습니다.`;
console.log(message);