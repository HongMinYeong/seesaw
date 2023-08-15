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
