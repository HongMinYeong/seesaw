$(window).scroll(function () {
  var h = $(window).scrollTop(); //스크롤 위치
  // 1. opacity 조정
  //700~1000까지 스크롤바 내리면
  //첫번째 카드의 opacity 를 1~0으로 서서히 변경

  var y1 = (1 / -300) * h + 1000 / 300;
  var y2 = (1 / -300) * h + 1950 / 300;

  $('box').eq(0).css('opacity', y1);
  $('box').eq(1).css('opacity', y2);

  //2. scale 조정
  //700-1000까지 스크롤바를 내리면
  //첫번째 카드의 scale를 1~0.8으로 서서히 변경

  var s1 = (-2 / 3000) * h + 44 / 30;
  var s2 = (-2 / 3000) * h + 630 / 300;

  if (h >= 700 && h <= 1000) {
    $('.box').eq(0).css('transform', `scale(${s1})`);
  } else {
    $('.box').eq(0).css('transform', `scale(1)`);
    if (h >= 1650 && h <= 1950) {
      $('.box').eq(1).css('transform', `scale(${s2})`);
    } else {
      $('.box').eq(1).css('transform', `scale(1)`);
    }
  }
});
