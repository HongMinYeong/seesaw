// Express 사용하기
//Express 모듈이 export 하는 최상위 함수로 , express application을 만듦
const express = require('express');
//Express()함수를 호출함으로써 만들어진 express application
const app = express();
const PORT = 8000;

//'my'의 경로 (서버주소 : 포트번호/my)로 들어왔을때 출력
app.get('/my', function (req, res) {
  res.send(
    '<h1>케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로ㅍ케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로케로</h1>'
  );
});

//서버가 실행할 PORT 지정하고, 실행했을 때 콘솔로그를 찍음
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}! http://localhost:${PORT} `);
});
