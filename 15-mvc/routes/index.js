const express = require('express');
const controller = require('../controller/Cmain');
// controller = {
//   main : ()=>{}, // 함수
//   comments : ()=>{} //함수
// }
const router = express.Router();

// const app = express();
// app.get

// router.post()

router.get('/', controller.main);
router.get('/comments', controller.comments);
router.get('/comment/:id', controller.comment);

//module.exports 구문을 통해 router를 내보내야
//다른 모듈(파일)에서 router 객체를 사용 가능
module.exports = router;
