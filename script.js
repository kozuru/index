/********************/
/*page-transition js*/
/********************/
$(function(){
$(".mainSite").css("display", "none");
setTimeout(function() {
    $('.anime').fadeOut();
	}, 2300);
});

$(function(){
    $(".mainSite").css({opacity:'0'});
    setTimeout(function(){
    $(".mainSite").css("display", "block");
    $(".mainSite").stop().animate({opacity:'1'},1200);
  },2300);
});
/*ここまで*/

/**************/
/*トップへ戻る*/
/**************/
jQuery(function() {
    var pagetop = $('#pagetop');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});
/*ここまで*/
/**************/
/*cursor storler*/
// 「#hide-btn」要素のclickイベントをつくってください
//マウスストーカー用のdivを取得
const storker = document.getElementById('storker');

//aタグにホバー中かどうかの判別フラグ
let hovFlag = false;

//マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
document.addEventListener('mousemove', function (e) {
  if (!hovFlag) {
  storker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  }
});

//リンクへ吸い付く処理
const linkElem = document.querySelectorAll('a:not(.no_stick_)');
for (let i = 0; i < linkElem.length; i++) {
  //マウスホバー時
  linkElem[i].addEventListener('mouseover', function (e) {
      hovFlag = true;

      //マウスストーカーにクラスをつける
      storker.classList.add('hov_');

      //マウスストーカーの位置をリンクの中心に固定
      let rect = e.target.getBoundingClientRect();
      let posX = rect.left + (rect.width / 2);
      let posY = rect.top + (rect.height / 2);

      storker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';

  });
  //マウスホバー解除時
  linkElem[i].addEventListener('mouseout', function (e) {
      hovFlag = false;
      storker.classList.remove('hov_');
  });
}
/*ここまで*/
