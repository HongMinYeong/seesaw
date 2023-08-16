//1. promise 를 생성하는 코드
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        `현재 프로미스의 상태는 fulfilled(이행)! then 메서드로 연결~이때의 flag의 값은 ${flag}입니다.`
      );
    } else {
      reject(
        ` 현재 프로미스의 상태는 rejected(거절)! catch 메서드로 연결~  이때의 flag의 값은 ${flag}입니다.`
      );
    }
  });
}

//2. promise를 사용 (소비)하는 코드
promise1(5 > 3)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });

// 화살표 함수로도 가능!
promise1(5 > 3)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//프로미스 예제 2
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다..');
}

function pickDrink(callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('고민 끝!');
      product = '제로 콜라';
      price = 5000;
      if (price <= 2000) {
        resolve(1);
      } else {
        reject(2);
      }
    }, 3000);
  });
}

function pay() {
  console.log(`상품명 : ${product}, 가격 : ${price} `);
}

function nopay() {
  console.log('금액 부족 이잉');
}
let product;
let price;
goMart();
//resolve 값
pickDrink()
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });

//resolve면 pay함수 실행
//reject 면 nopay 함수 실행
// pickDrink().then(pay).catch(nopay);
// == pickDrink()
//   .then(function () {
//     pay();
//   })
//   .catch(function () {
//     nopay();
//   });
