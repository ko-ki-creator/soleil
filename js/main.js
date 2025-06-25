// スクロール開始時に固定ヘッダー表示・初期ヘッダー非表示
const fixed = document.querySelector('.header-fixed');
const inner = document.querySelector('.header-inner');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            fixed.classList.add('show');
            inner.classList.add('show');
        } else {
            fixed.classList.remove('show');
            inner.classList.remove('show');
        }
    });


$(function () {
  // ハンバーガーボタンクリックで実行
        $("#js-hamburger, #js-hamburger-second").click(function () {
        $(this).toggleClass("active");
        $("#js-nav").toggleClass("active");
        $(".ham-navigation-container").toggleClass("active");
    });

    // メニュー項目のクリック時にメニューを閉じる
        $(".nav-item a").click(function () {
        $("#js-hamburger, #js-hamburger-second").removeClass("active");
        $("#js-nav").removeClass("active");
        $(".ham-navigation-container").removeClass("active");
    });
});