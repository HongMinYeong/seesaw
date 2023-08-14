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

//(임시) 데이터베이스에서 가져온 회원 정보(id,pw)
const idFromDB = 'banana';
const pwFromDB = '1234qwer';

//app.get(경로, 해당 경로로 들어왔을 때 실행할 함수 )
//루트경로로 들어왔을때 함수 실행
//'/' : 서버 주소 : 포트번호 (Localhost:8090/)
app.get('/', function (req, res) {
  //res.send(x) : x를 클라이언트한테 응답으로 보냄
  //   res.send('<h1>@@@@Hello! Express!!!!@@@@</h1>');
  ////////////////////////////////////////////////////////////////////////
  //res.render(ejs_filename) : ejs file 이름을 찾아서 응답
  res.render('index', {
    userId: idFromDB,
    userPw: pwFromDB,
    btns: ['사과', '오렌지', '키위'],
    me: {
      name: 'minong',
      msg: '저는 저입니다. 반갑습니다!!',
    },
    isLogin: false,
  }); //index라는 ejs파일을 응답으로 보여줌
});
