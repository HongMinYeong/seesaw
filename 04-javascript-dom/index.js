console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);
// console.log(document.domain);

// document 객체를 이용해 HTML 요소 선택
// 1. getElementById
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

// 2. getElementsByClassName
console.log(document.getElementsByClassName('pink')); // 유사배열
console.log(document.getElementsByClassName('pink')[1]);

// 3. getElementsByTagName
console.log(document.getElementsByTagName('div'));

// 4. getElementsByName
console.log(document.getElementsByName('id'));
