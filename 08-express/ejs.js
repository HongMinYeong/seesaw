const express = require('express');
const app = express();
const PORT = 8090;

//ejs 템플릿 설정
app.set('view engine', 'ejs'); //express에서 사용할 템플릿 엔진 종류(ejs) 등록
app.set('views', './views'); //템플릿 엔진 파일을 저장할 위치 등록

//static 미들웨어 등록
//브라우저에서 url로 이 경로에 왓을때 이 파일을 읽어올 수 있음
//http://localhost:8080/public/img/pooh.png
// app.use('/static', express.static(__dirname + '/static'));
app.use('/views', express.static(__dirname + '/views'));
//http://localhost:8080/public/img/pooh.png
app.use('/public', express.static(__dirname + '/static'));

//app.get(경로, 해당 경로로 들어왔을 때 실행할 함수)
app.get('/', (req, res) => {
  //'/':루트 주소의 서버주소는 -> 포트번호(localhost:8000)
  res.render('index'); //res.render(ejs_filename) : ejs_filename.ejs 파일을 찾아서 응답
  //ejs 템플릿 렌더링
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

//퀴즈
//1. /login 경로로 요청이 들어오면 로그인 페이지(ejs)를 응답
app.get('/login', function (req, res) {
  res.render('login');
});

//2. /register 경로로 요청이 들어오면 회원가입 페이지(ejs)를 응답
app.get('/register', function (req, res) {
  res.render('register');
});
