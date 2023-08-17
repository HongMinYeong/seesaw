const http = require('http');
const fs = require('fs'); //파일 관련 내장 모듈

const server = http.createServer(function (req, res) {
  try {
    //html 파일 불러오기
    const data = fs.readFileSync('./index2.html');
    res.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    res.write(data);
    res.end();
  } catch (error) {
    //퀴즈 : 404.html 만들어서 해당 html을 응답으로 보내도록 코드 수정
    const err = fs.readFileSync('./404.html');
    console.error(error);
    res.writeHead(404, { 'content-type': 'text/html; charset=utf8' });
    // res.write(error.message);
    res.write(err);
    res.end();
  }
});

//req 이벤트 : 클라이언트 요청
// server.on('req', function (req, res) {
//   console.log('req 이벤트 발생!!');
// });

//connection 이벤트 : 클라이언트가 접속 ( 클라이언트와 서버가 연결되었을 때)발생
server.on('connection', function (req, res) {
  console.log('connection 이벤트 발생!!');
});
//서버실행
server.listen(8080, function () {
  console.log('8080번 포트로 서버 실행');
});
