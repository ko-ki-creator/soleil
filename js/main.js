// スクロール開始時に固定ヘッダー表示・初期ヘッダー非表示
const nav = document.querySelector('.header-nav');
const inner = document.querySelector('.header-inner');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('header-fixed');
            inner.classList.add('show');
            inner.classList.remove('hide');
        } else {
            nav.classList.remove('header-fixed');
            inner.classList.remove('show');
            inner.classList.add('hide');
        }
    });


$(function () {
  // ハンバーガーボタンクリックで実行
        $("#js-hamburger").click(function () {
        $(this).toggleClass("active");
        $("#js-nav").toggleClass("active");

        // ナビゲーション展開時にスクロール制御
        if ($("#js-nav").hasClass("active")) {
            $("body").css("overflow", "hidden");
        } else {
            $("body").css("overflow", "");
        }
    });

    // メニュー項目のクリック時にメニューを閉じる
        $(".nav-item a").click(function () {
        $("#js-hamburger").removeClass("active");
        $("#js-nav").removeClass("active");
    });
});