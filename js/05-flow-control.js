// 연습문제 1
// 2단 부터 9단까지
// (for 문, while 문)

// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 9; j++)
//     console.log(`${i} * ${j} = ${i*j}`);
// }

// // 연습문제 2 별그리기
// let i = 5;
// while (i > 0) {
//     let j = 0;
//     while (j < i) {
//         document.write('*');
//         j++;
//     }
//     document.write('<br>');
//     i--;
// }


// ES6 : for ... in
//      객체의 속성(프로퍼티)를 순회
// ES6 : for ... of
//      순회 객체의 값을 순회
let obj = {
    name: "홍길동",
    age: 28,
    job: "도적",
    gender: "M"
}
console.log("======for ... in")
for (let asd in obj) {
    // for ... in : 객체의 속성을 순회
    console.log(asd, "->", obj[asd]);
}

const arr = [5, 1, 4, 3, 2, 9, 8, 0];
for (let key in arr) {
    console.log(key);
}
console.log("======for ... of")
for (let value of arr) {
    // for ... of : 반복 가능 객체에서 요소를 하나씩
    console.log(value);
}

// for ... of는 순회 객체(배열 등)에서만 사용
// for (let value of obj) {
//     console.log(value);
// } -> Error : obj는 순회 객체 아님

// 주의 : for ... in과 for ... of를 구분해서 사용