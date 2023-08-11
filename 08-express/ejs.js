const express = require('express');
const app = express();
const PORT = 8090;

//ejs 템플릿 설정
app.set('view engine', 'ejs'); //express에서 사용할 템플릿 엔진 종류(ejs) 등록
app.set('views', './views'); //템플릿 엔진 파일을 저장할 위치 등록

//app.get(경로, 해당 경로로 들어왔을 때 실행할 함수)
app.get('/', (req, res) => {
  //'/':루트 주소의 서버주소는 -> 포트번호(localhost:8000)
  res.render('index'); //res.render(ejs_filename) : ejs_filename.ejs 파일을 찾아서 응답
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
