// pass by value
// : 원시 타입은 값(value)이 복사되어 전달
let num = 1;
let num2 = num;
console.log(num, num2); // 1 1
console.log(num === num2); // true

num = 5; // 1 -> 5
console.log(num, num2); // 5 1
console.log(num === num2); // false

// pass by reference
const obj = { one: 1, two: 2 };
const obj2 = obj;
console.log(obj, obj2); // { one: 1, two: 2 }
console.log(obj === obj2); // true

obj.five = 5;
console.log(obj, obj2); // { one: 1, two: 2, five: 5 }
console.log(obj === obj2); // true
// obj와 obj2는 현재 같은 데이터도 같고 참조값(address, 주소)도 같다

//////
const obj3 = { one: 1, two: 2 };
const obj4 = { one: 1, two: 2 };
console.log(obj3, obj4);
console.log(obj3 === obj4); // false
// why? obj3와 obj4는 현재 같은 데이터를 같지만, 서로 다른 별도의 객체
// 즉, 참조값(address, 주소)가 다르다

obj3.five = 5;
console.log(obj3, obj4);
console.log(obj3 === obj4); //false

///////////
const arr = [1, 2];
const arr2 = arr;
// arr과 arr2 서로 같은 참조값을 가짐

console.log(arr, arr2);
console.log(arr === arr2); // true

arr.push(5);
console.log(arr, arr2);
console.log(arr === arr2); // true

const arr3 = [1, 2];
const arr4 = [1, 2];
console.log(arr3, arr4);
console.log(arr3 === arr4);

arr3.push(5);
console.log(arr3, arr4);
console.log(arr3 === arr4); //false
///////
// obj = { hi: 'hi' }; // obj가 const 로 선언되어 재할당 불가능
// 즉, obj가 참조하고 있는 주소를 바꿀 수 없음

///////
// 객체 리터럴 (object literal), 딕셔너리
// : key-value 쌍으로 이루어진 데이터 구조

// js에서 객체는 여러 의미
// typeof [] -> object, typeof {} -> object
// 이 때의 객체는 광범위한 의미의 "객체"

/////////////////////////////////////////////
// console.clear();

// js 표준 내장 객체
// 1. Date 객체: 시간, 날짜

// 날짜 생성하여 저장
//아무런 인수를 전달하지 않으면 현재 날짜와 시간을 가지는 인스턴스를 리턴한다.
let now = new Date(); // 현재 일시
console.log(now); // 출력 -> Tue Aug 01 2023 22:02:47 GMT+0900 (대한민국 표준시)

// 타임스탬프(timestamp)
// : 1970년 1월 1일을 기준으로 흘러간 밀리초(ms)를 나타내는 정수
// new Date(timestamp)
let jan_01_1970 = new Date(0);
console.log(jan_01_1970);

let jan_02_1970 = new Date(24 * 3600 * 1000); //하루 밀리초
console.log(jan_02_1970);
//Thu Jan 02 1970 09:00:00 GMT+0900 (대한민국 표준시)

// new Date(date_string)
let date1 = new Date('2023-07-17');
console.log(date1);
//Mon Jul 17 2023 09:00:00 GMT+0900 (대한민국 표준시)

let date2 = new Date('2023', '06', '17'); // MM(0(1월)~11(12월) 주의)
console.log(date2);
// Mon Jul 17 2023 00:00:00 GMT+0900 (대한민국 표준시)

console.log('---------');
// 관련 메서드
let datee = new Date('2023-08-01');
console.log(datee.getFullYear()); //2023
console.log(datee.getMonth()); //7(0~11 주의)
console.log(datee.getDate()); //1
console.log(datee.getHours()); //9
console.log(datee.getMinutes()); //0
console.log(datee.getSeconds()); //0
console.log(datee.getMilliseconds()); //0
console.log(datee.getDay()); // 2(화)-> 0 (일) ~

//퀴즈
//Date 객체를 이용해 오늘 요일을 얻고 , (힌트 getDay())
//if or switch 구문 이용해서 평일/주말인지 콘솔창에 출력하는 코드 작성
let today = new Date();
let week = ['월', '화', '수', '목', '금', '토', '일'];
console.log(week[today.getDay() - 1], '요일');
if (!(today.getDay() === 0 || today.getDay() === 6)) {
  console.log('평일입니당.');
} else {
  console.log('주말입니당.');
}

//Math.random() 응용예시
// 0~9
console.log(Math.floor(Math.random() * 10)); //0부터 9사이에 랜덤한 수가 나오게 됨

//0~10
console.log(Math.floor(Math.random() * 11)); //0부터 10사이에 랜덤한 수가 나오게 됨

//quiz
//1~100
console.log(Math.floor(Math.random() * 100) + 1);

//20~22
console.log(Math.floor(Math.random() * 3) + 20);

console.log('===================');
//////////////////////////////////////////////////
